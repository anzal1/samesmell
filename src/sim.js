/*
 * sim.js — leaky integrate-and-fire over the stand-in connectome.
 *
 * Virtual time == wall time. The cascade is stretched by making synaptic
 * delays large (they stand in for the whole conduction + integration chain),
 * so one puff reads over roughly four seconds.
 *
 *   createSim(graph, { onSpike(id, type, dimorphic), onVerdict() })
 *     -> { puffStart(), puffEnd(), fire(id), step(dt) }
 */

const DT = 0.002; // 2 ms virtual step
const TAU_M = 0.085; // membrane time constant
const TAU_SYN = 0.028; // synaptic current decay
const THRESH = 1.0;
const RESET = -0.18;
const REFRACTORY = 0.14;
const GAIN = 26; // converts synaptic current to membrane drive

const DELAY_BASE = 0.72; // s per hop (stretches the cascade to ~3.4 s)
const DELAY_PER_UNIT = 0.6; // s per unit of normalised soma distance

/* Spine weights are normalised per postsynaptic neuron rather than fixed.
 *
 * A single synaptic event of weight w peaks the membrane at
 *   w * GAIN * (TAU_SYN*TAU_M/(TAU_M-TAU_SYN)) * peak(alpha) = w * 0.422,
 * because the membrane leaks while the synaptic current is still charging it.
 * One input on its own therefore needs w >= 2.37, not the w*TAU_SYN*GAIN = 1.16
 * the naive integral suggests.
 *
 * A flat weight cannot serve both graphs: the procedural fallback gives every
 * pathway neuron exactly ONE spine input (a literal chain), while the real
 * connectome subsets give them 6 to 10. Set it high enough for the chain and
 * the dense graph ignites its lateral network and never goes quiet; set it low
 * enough for the dense graph and the chain dies at the first hop. So each
 * spine edge instead gets a share of a fixed budget onto its target: k inputs
 * split SPINE_BUDGET between them, capped so a lone input still fires. */
const SPINE_BUDGET = 6.0;
const W_SPINE_MAX = 2.5;
const W_SPINE_MIN = 0.24;
const W_FEED = 0.7; // layer-progressive feedforward
const W_LATERAL = 0.16; // ambient / lateral

const P_FEED = 0.94;
const P_LATERAL = 0.32;

const ORN_DRIVE = 16.0; // sustained puff current
const ORN_ADAPT = 5.6; // adaptation added per ORN spike
const TAU_ADAPT = 0.55;

const WHEEL = 2048; // 2 ms buckets -> 4.09 s scheduling horizon

const RANK = { orn: 0, pn: 1, lhn: 2, dimorphic: 3, descending: 4 };

/* Visual (optic-lobe-adjacent) population. VERSUS drives it retinotopically and
 * decodes a paddle command back out of it; SWIPE uses it for the "movement"
 * channel of a profile. Nothing here touches the cVA pathway. */
const VIS_BINS = 12;
const VIS_DRIVE = 19.0;
const TAU_RATE = 0.13; // decay of the population rate estimate

export function createSim(graph, handlers = {}) {
  const onSpike = handlers.onSpike || (() => {});
  const onVerdict = handlers.onVerdict || (() => {});

  const neurons = graph.neurons;
  const n = neurons.length;

  const idOf = new Int32Array(n);
  const index = new Map();
  for (let i = 0; i < n; i++) {
    idOf[i] = Number(neurons[i].id);
    index.set(idOf[i], i);
  }

  const type = new Array(n);
  const rank = new Int8Array(n);
  const isDim = new Uint8Array(n);
  const soma = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const nu = neurons[i];
    type[i] = nu.type || 'other';
    rank[i] = RANK[type[i]] == null ? -1 : RANK[type[i]];
    isDim[i] = nu.dimorphic || type[i] === 'dimorphic' ? 1 : 0;
    soma[i * 3] = nu.soma[0];
    soma[i * 3 + 1] = nu.soma[1];
    soma[i * 3 + 2] = nu.soma[2];
  }

  let diag = 1;
  {
    const mn = [Infinity, Infinity, Infinity];
    const mx = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < n; i++) {
      for (let k = 0; k < 3; k++) {
        const val = soma[i * 3 + k];
        if (val < mn[k]) mn[k] = val;
        if (val > mx[k]) mx[k] = val;
      }
    }
    diag = Math.hypot(mx[0] - mn[0], mx[1] - mn[1], mx[2] - mn[2]) || 1;
  }

  const pathway = (graph.pathway || []).map(Number).filter((x) => index.has(x));
  const pathSet = new Set(pathway);
  const spineEdge = new Set();
  for (let i = 0; i < pathway.length - 1; i++) {
    spineEdge.add(pathway[i] + ':' + pathway[i + 1]);
  }

  /* adjacency -------------------------------------------------------- */

  const out = new Array(n);
  for (let i = 0; i < n; i++) out[i] = [];
  let edgeCount = 0;

  // pass 1: classify every edge and count how many spine inputs each target has
  const raw = [];
  const spineIn = new Int32Array(n);
  for (const e of graph.edges || []) {
    if (!e || e.length < 2) continue;
    const a = index.get(Number(e[0]));
    const b = index.get(Number(e[1]));
    if (a == null || b == null || a === b) continue;

    const d =
      Math.hypot(
        soma[a * 3] - soma[b * 3],
        soma[a * 3 + 1] - soma[b * 3 + 1],
        soma[a * 3 + 2] - soma[b * 3 + 2]
      ) / diag;

    // Spine (reliable) only for FORWARD hops along the featured pathway. Real
    // pathway subgraphs are recurrent (P1 loops onto itself), so same-rank and
    // backward pathway edges must stay weak or the loop gain exceeds one and a
    // single puff reverberates forever.
    const spine =
      spineEdge.has(idOf[a] + ':' + idOf[b]) ||
      (pathSet.has(idOf[a]) && pathSet.has(idOf[b]) && rank[b] > rank[a]);
    const progressive = rank[a] >= 0 && rank[b] === rank[a] + 1;

    if (spine) spineIn[b]++;
    raw.push({ a, b, d, spine, progressive });
    edgeCount++;
  }

  // pass 2: share the spine budget across each target's spine inputs
  for (let k = 0; k < raw.length; k++) {
    const r = raw[k];
    let w = W_LATERAL;
    let p = P_LATERAL;
    if (r.spine) {
      const share = SPINE_BUDGET / Math.max(1, spineIn[r.b]);
      w = share > W_SPINE_MAX ? W_SPINE_MAX : share < W_SPINE_MIN ? W_SPINE_MIN : share;
      p = 1;
    } else if (r.progressive) {
      w = W_FEED;
      p = P_FEED;
    }
    const delaySteps = Math.max(
      1,
      Math.min(WHEEL - 2, Math.round((DELAY_BASE + DELAY_PER_UNIT * r.d) / DT))
    );
    out[r.a].push({ j: r.b, w, p, delaySteps });
  }

  // Degree-normalize lateral coupling: the procedural graphs average ~3 edges
  // per neuron, real connectome subsets ~10. Without this, ambient noise on a
  // dense graph chain-reacts into whole-brain ignition at idle.
  const avgDeg = edgeCount / Math.max(1, n);
  const latScale = Math.min(1, 3.0 / Math.max(3.0, avgDeg));
  if (latScale < 1) {
    for (let a2 = 0; a2 < n; a2++) {
      const es = out[a2];
      for (let k2 = 0; k2 < es.length; k2++) {
        if (es[k2].w === W_LATERAL) {
          es[k2].w *= latScale;
          es[k2].p *= latScale;
        }
      }
    }
  }

  const ornIdx = [];
  const ambientIdx = [];
  for (let i = 0; i < n; i++) {
    if (type[i] === 'orn') ornIdx.push(i);
    else if (type[i] === 'other') ambientIdx.push(i);
  }

  /* visual population: lateral (optic-lobe) context neurons, binned by soma
   * height so court rows map onto columns. Built once, never rebuilt. */
  const visBinOf = new Int16Array(n).fill(-1);
  const visBins = [];
  for (let b = 0; b < VIS_BINS; b++) visBins.push([]);
  {
    let maxAbsX = 0;
    for (let i = 0; i < n; i++) {
      const ax = Math.abs(soma[i * 3]);
      if (ax > maxAbsX) maxAbsX = ax;
    }
    let pool = [];
    for (let i = 0; i < n; i++) {
      if (rank[i] >= 0) continue; // keep the cVA pathway out of the visual map
      if (Math.abs(soma[i * 3]) < maxAbsX * 0.42) continue;
      pool.push(i);
    }
    if (pool.length < VIS_BINS * 3) pool = ambientIdx.slice();
    let minY = Infinity;
    let maxY = -Infinity;
    for (const i of pool) {
      const y = soma[i * 3 + 1];
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
    const span = maxY - minY || 1;
    for (const i of pool) {
      const u = (soma[i * 3 + 1] - minY) / span;
      const b = Math.min(VIS_BINS - 1, Math.max(0, Math.floor(u * VIS_BINS)));
      visBinOf[i] = b;
      visBins[b].push(i);
    }
  }

  /* Structural bias: how hard the dimorphic core fans out compared with the
   * average neuron in this particular graph. VERSUS turns this into paddle
   * gain, so the per-sex difference comes out of the connectome rather than a
   * hardcoded personality. */
  let dimOutTotal = 0;
  let dimCount = 0;
  let descCount = 0;
  for (let i = 0; i < n; i++) {
    if (isDim[i]) {
      dimOutTotal += out[i].length;
      dimCount++;
    }
    if (type[i] === 'descending') descCount++;
  }
  const meanOut = edgeCount / Math.max(1, n);
  const dimFanout = dimCount ? dimOutTotal / dimCount / Math.max(0.4, meanOut) : 1;

  /* state ------------------------------------------------------------ */

  const v = new Float32Array(n);
  const inj = new Float32Array(n);
  const adapt = new Float32Array(n);
  const refUntil = new Float32Array(n);
  const jitter = new Float32Array(n);
  for (let i = 0; i < n; i++) jitter[i] = 0.82 + ((i * 0.6180339887) % 1) * 0.4;

  const wheel = new Array(WHEEL);
  for (let i = 0; i < WHEEL; i++) wheel[i] = [];
  const wheelW = new Array(WHEEL);
  for (let i = 0; i < WHEEL; i++) wheelW[i] = [];

  let tick = 0;
  let t = 0;
  let held = false;
  let drive = 0;
  let episode = 0;
  let verdictFired = false;
  let acc = 0;
  let spikesThisWindow = 0;
  let windowTick = 0;

  let visU = -1; // retinotopic drive position, 0..1
  let visGain = 0;
  let pulseAmp = 0; // transient ORN stimulus (SWIPE cards)
  let pulseLeft = 0;
  const binRate = new Float32Array(VIS_BINS);
  let dimRate = 0;
  let descRate = 0;

  let rngState = graph.meta && graph.meta.sex === 'male' ? 0x51f3b7 : 0x2c9ae1;
  function rnd() {
    rngState = (rngState + 0x6d2b79f5) | 0;
    let x = Math.imul(rngState ^ (rngState >>> 15), 1 | rngState);
    x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  }

  const synDecay = Math.exp(-DT / TAU_SYN);
  const adaptDecay = Math.exp(-DT / TAU_ADAPT);
  const rateDecay = Math.exp(-DT / TAU_RATE);

  function doSpike(i, force) {
    if (!force && t < refUntil[i]) return;
    refUntil[i] = t + REFRACTORY * (0.8 + rnd() * 0.5);
    v[i] = RESET;
    spikesThisWindow++;
    // Spike-frequency adaptation on every neuron: this is what lets activity
    // die back down after a puff. Real circuits (P1 especially) are recurrent,
    // so without a quench the cascade reverberates forever.
    adapt[i] += type[i] === 'orn' ? ORN_ADAPT : 1.35;

    const vb = visBinOf[i];
    if (vb >= 0) binRate[vb] += 1;
    if (isDim[i]) dimRate += 1;
    if (type[i] === 'descending') descRate += 1;

    onSpike(idOf[i], type[i], isDim[i] === 1, vb >= 0);

    if (type[i] === 'descending' && episode > 0 && !verdictFired) {
      verdictFired = true;
      onVerdict();
    }

    const edges = out[i];
    for (let k = 0; k < edges.length; k++) {
      const e = edges[k];
      if (e.p < 1 && rnd() > e.p) continue;
      const jit = 1 + (rnd() - 0.5) * 0.16;
      const steps = Math.max(1, Math.min(WHEEL - 2, Math.round(e.delaySteps * jit)));
      const slot = (tick + steps) % WHEEL;
      wheel[slot].push(e.j);
      wheelW[slot].push(e.w);
    }
  }

  function substep() {
    tick++;
    t += DT;

    const slot = tick % WHEEL;
    const bucket = wheel[slot];
    if (bucket.length) {
      const ws = wheelW[slot];
      for (let k = 0; k < bucket.length; k++) inj[bucket[k]] += ws[k];
      bucket.length = 0;
      ws.length = 0;
    }

    drive += ((held ? 1 : 0) - drive) * Math.min(1, DT / 0.08);

    // ambient shimmer: sparse spontaneous activity in filler neurons.
    // Absolute rate (spikes/s across the whole brain), independent of how many
    // neurons the dataset happens to have.
    if (ambientIdx.length && spikesThisWindow < 180) {
      if (rnd() < 9 * DT) {
        doSpike(ambientIdx[(rnd() * ambientIdx.length) | 0], false);
      }
    }

    if (pulseLeft > 0) pulseLeft -= DT;
    const ornI = (drive + (pulseLeft > 0 ? pulseAmp : 0)) * ORN_DRIVE;

    for (let i = 0; i < n; i++) {
      const cur = inj[i];
      if (cur !== 0) inj[i] = cur * synDecay;
      if (adapt[i] !== 0) adapt[i] *= adaptDecay;
      v[i] += (-v[i] / TAU_M + cur * GAIN - adapt[i]) * DT;
      if (v[i] >= THRESH) doSpike(i, false);
    }

    if (ornI > 0.01) {
      for (let k = 0; k < ornIdx.length; k++) {
        const i = ornIdx[k];
        v[i] += ornI * jitter[i] * DT;
        if (v[i] >= THRESH) doSpike(i, false);
      }
    }

    // retinotopic drive: a gaussian bump of current centred on one column
    if (visGain > 0.001 && visU >= 0) {
      const centre = visU * (VIS_BINS - 1);
      for (let b = 0; b < VIS_BINS; b++) {
        const d = b - centre;
        if (d > 2.3 || d < -2.3) continue;
        const k = Math.exp(-d * d * 0.72) * visGain * VIS_DRIVE;
        const bin = visBins[b];
        for (let q = 0; q < bin.length; q++) {
          const i = bin[q];
          v[i] += k * jitter[i] * DT;
          if (v[i] >= THRESH) doSpike(i, false);
        }
      }
    }

    for (let b = 0; b < VIS_BINS; b++) binRate[b] *= rateDecay;
    dimRate *= rateDecay;
    descRate *= rateDecay;

    if (tick - windowTick >= 500) {
      windowTick = tick;
      spikesThisWindow = 0;
    }
  }

  function step(dt) {
    acc += Math.min(Math.max(dt || 0, 0), 0.1);
    let guard = 0;
    while (acc >= DT && guard < 140) {
      acc -= DT;
      substep();
      guard++;
    }
    if (acc > DT * 6) acc = 0;
  }

  return {
    puffStart() {
      if (held) return;
      held = true;
      episode++;
      verdictFired = false;
    },
    puffEnd() {
      held = false;
    },
    fire(id) {
      const i = index.get(Number(id));
      if (i == null) return false;
      doSpike(i, true);
      return true;
    },
    step,

    /** One-shot ORN stimulus (a SWIPE card's cVA/odour load). */
    stimulate(amp, seconds) {
      pulseAmp = amp;
      pulseLeft = Math.max(pulseLeft, seconds || 0.35);
    },

    /** Retinotopic drive: u is 0..1 down the court, gain 0 releases it. */
    visualDrive(u, gain) {
      visU = u;
      visGain = gain;
    },

    /** Decoded population readout: where the visual response sits, and how big. */
    motionReadout() {
      let s = 0;
      let w = 0;
      for (let b = 0; b < VIS_BINS; b++) {
        s += binRate[b] * (b / (VIS_BINS - 1));
        w += binRate[b];
      }
      return { u: w > 1e-3 ? s / w : 0.5, energy: w };
    },

    /** Rolling spike rates for the two decision populations. */
    get dimorphicRate() {
      return dimRate;
    },
    get descendingRate() {
      return descRate;
    },

    /** Quiet everything. Called on mode switch so activity never bleeds over. */
    reset() {
      held = false;
      drive = 0;
      visU = -1;
      visGain = 0;
      pulseAmp = 0;
      pulseLeft = 0;
      verdictFired = false;
      dimRate = 0;
      descRate = 0;
      v.fill(0);
      inj.fill(0);
      adapt.fill(0);
      refUntil.fill(0);
      binRate.fill(0);
      for (let i = 0; i < WHEEL; i++) {
        wheel[i].length = 0;
        wheelW[i].length = 0;
      }
    },

    get time() {
      return t;
    },
    get verdictDone() {
      return verdictFired;
    },
    pathway,
    /* derived from the loaded graph, not hand-tuned per sex */
    structure: { dimFanout, dimCount, descCount, meanOut, visBins: VIS_BINS },
    stats: { neurons: n, edges: edgeCount, pathway: pathway.length },
  };
}
