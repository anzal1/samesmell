/*
 * fallback.js — built-in procedural Drosophila-ish brain generator.
 *
 * Used only when data/male.json / data/female.json cannot be fetched (file://,
 * missing data, malformed JSON). Emits the exact schema from SPEC.md so the app
 * behaves identically with generated or authored morphology.
 *
 * Anatomy stand-in (coordinates centred on origin, ~2.0w x 1.1h x 1.2d):
 *   - two lateral optic lobes (columnar fans)
 *   - a central mass (protocerebrum)
 *   - two anterior-ventral antennal lobes (ORN target)
 *   - lateral horns + calyces (PN target)
 *   - a dimorphic core near the midline (fru+ stand-in)
 *   - a ventral-posterior neck connective (descending neurons)
 */

/* ---------------------------------------------------------------- rng + vec */

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const lerp3 = (a, b, t) => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
];
const len3 = (a) => Math.hypot(a[0], a[1], a[2]);
const dist3 = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

function normalize(a) {
  const l = len3(a) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
}

function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

/** Two unit vectors perpendicular to d (and to each other). */
function perpBasis(d) {
  const n = normalize(d);
  const seed = Math.abs(n[1]) > 0.9 ? [1, 0, 0] : [0, 1, 0];
  const u = normalize(cross(n, seed));
  const v = normalize(cross(n, u));
  return [u, v];
}

/** Point inside an ellipsoid, biased toward the shell when `shell` is high. */
function inEllipsoid(rng, c, r, shell = 0) {
  let x, y, z, l;
  do {
    x = rng() * 2 - 1;
    y = rng() * 2 - 1;
    z = rng() * 2 - 1;
    l = Math.hypot(x, y, z);
  } while (l > 1 || l < 1e-4);
  const k = shell > 0 ? 1 - (1 - shell) * Math.pow(rng(), 1 / 3) : Math.cbrt(rng());
  const s = k / l;
  return [c[0] + x * s * r[0], c[1] + y * s * r[1], c[2] + z * s * r[2]];
}

function bezier(p0, c0, c1, p1, t) {
  const m = 1 - t;
  const a = m * m * m;
  const b = 3 * m * m * t;
  const c = 3 * m * t * t;
  const d = t * t * t;
  return [
    a * p0[0] + b * c0[0] + c * c1[0] + d * p1[0],
    a * p0[1] + b * c0[1] + c * c1[1] + d * p1[1],
    a * p0[2] + b * c0[2] + c * c1[2] + d * p1[2],
  ];
}

/** A curved, gently wobbling neurite polyline from `from` to `to`. */
function neurite(rng, from, to, opts = {}) {
  const n = opts.points || 14;
  const curve = opts.curve == null ? 0.3 : opts.curve;
  const wobble = opts.wobble == null ? 0.035 : opts.wobble;
  const d = sub(to, from);
  const l = len3(d) || 1e-3;
  const [u, v] = perpBasis(d);
  const jitter = (amt) => mul(u, (rng() - 0.5) * amt * l);
  const jitter2 = (amt) => mul(v, (rng() - 0.5) * amt * l);
  const c0 = add(add(lerp3(from, to, 0.32), jitter(curve)), jitter2(curve));
  const c1 = add(add(lerp3(from, to, 0.68), jitter(curve)), jitter2(curve));
  const ph1 = rng() * 6.2831;
  const ph2 = rng() * 6.2831;
  const f1 = 1.5 + rng() * 3.5;
  const f2 = 2.0 + rng() * 4.0;
  const pts = new Array(n);
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    let p = bezier(from, c0, c1, to, t);
    const env = Math.sin(Math.PI * t);
    const a = Math.sin(t * f1 * 6.2831 + ph1) * wobble * l * env;
    const b = Math.sin(t * f2 * 6.2831 + ph2) * wobble * l * env;
    p = add(add(p, mul(u, a)), mul(v, b));
    pts[i] = round3(p);
  }
  return pts;
}

const round3 = (p) => [
  Math.round(p[0] * 1e4) / 1e4,
  Math.round(p[1] * 1e4) / 1e4,
  Math.round(p[2] * 1e4) / 1e4,
];

/** Terminal arborisation: short branches sprouting off the tail of a neurite. */
function arbor(rng, trunk, center, radius, count, pts) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const anchorIdx = Math.max(
      1,
      Math.floor(trunk.length * (0.6 + rng() * 0.38))
    );
    const from = trunk[Math.min(anchorIdx, trunk.length - 1)];
    const to = inEllipsoid(rng, center, [radius, radius, radius], 0.25);
    out.push(
      neurite(rng, from, to, {
        points: pts,
        curve: 0.45,
        wobble: 0.07,
      })
    );
  }
  return out;
}

/* ------------------------------------------------------------- anatomy map */

function regions(sex) {
  const male = sex === 'male';
  return {
    opticL: { c: [-0.71, 0.03, -0.01], r: [0.23, 0.39, 0.3] },
    opticR: { c: [0.71, 0.03, -0.01], r: [0.23, 0.39, 0.3] },
    central: { c: [0, 0.04, -0.03], r: [0.4, 0.33, 0.29] },
    alL: { c: [-0.18, -0.27, 0.35], r: [0.12, 0.11, 0.12] },
    alR: { c: [0.18, -0.27, 0.35], r: [0.12, 0.11, 0.12] },
    antennaL: { c: [-0.23, -0.4, 0.56], r: [0.11, 0.06, 0.07] },
    antennaR: { c: [0.23, -0.4, 0.56], r: [0.11, 0.06, 0.07] },
    lhL: { c: [-0.37, 0.23, 0.0], r: [0.11, 0.1, 0.1] },
    lhR: { c: [0.37, 0.23, 0.0], r: [0.11, 0.1, 0.1] },
    calyxL: { c: [-0.25, 0.27, -0.24], r: [0.1, 0.09, 0.09] },
    calyxR: { c: [0.25, 0.27, -0.24], r: [0.1, 0.09, 0.09] },
    // dimorphic core: male cluster sits slightly more dorsal/lateral (P1-like),
    // female cluster is more compact and medial (pC1-like).
    coreL: {
      c: male ? [-0.16, 0.08, 0.04] : [-0.12, 0.01, 0.02],
      r: male ? [0.1, 0.09, 0.09] : [0.08, 0.07, 0.08],
    },
    coreR: {
      c: male ? [0.16, 0.08, 0.04] : [0.12, 0.01, 0.02],
      r: male ? [0.1, 0.09, 0.09] : [0.08, 0.07, 0.08],
    },
    neck: { c: [0, -0.4, -0.28], r: [0.1, 0.09, 0.1] },
    neckTip: [0, -0.56, -0.5],
  };
}

/* ------------------------------------------------------------- generation */

export function generateFallbackBrain(sex) {
  const rng = mulberry32(sex === 'male' ? 0x5a17e1 : 0x9c04b3);
  const R = regions(sex);
  const male = sex === 'male';
  const neurons = [];
  let id = 0;

  const push = (type, dimorphic, soma, segments) => {
    neurons.push({ id: id++, type, dimorphic, soma: round3(soma), segments });
    return neurons[neurons.length - 1];
  };

  /* ORNs — somata in the antennal nerve, axons into the antennal lobe. */
  for (let side = 0; side < 2; side++) {
    const ant = side ? R.antennaR : R.antennaL;
    const al = side ? R.alR : R.alL;
    for (let i = 0; i < 48; i++) {
      const soma = inEllipsoid(rng, ant.c, ant.r, 0.2);
      const target = inEllipsoid(rng, al.c, al.r, 0.35);
      const trunk = neurite(rng, soma, target, {
        points: 14,
        curve: 0.18,
        wobble: 0.03,
      });
      const segs = [trunk, ...arbor(rng, trunk, target, 0.055, 2, 7)];
      push('orn', false, soma, segs);
    }
  }

  /* PNs — antennal lobe to calyx, with a lateral-horn collateral. */
  for (let side = 0; side < 2; side++) {
    const al = side ? R.alR : R.alL;
    const lh = side ? R.lhR : R.lhL;
    const cal = side ? R.calyxR : R.calyxL;
    for (let i = 0; i < 28; i++) {
      const soma = inEllipsoid(
        rng,
        [al.c[0] * 1.28, al.c[1] + 0.09, al.c[2] - 0.02],
        [0.08, 0.07, 0.08],
        0.3
      );
      const dendrite = neurite(
        rng,
        soma,
        inEllipsoid(rng, al.c, al.r, 0.3),
        { points: 9, curve: 0.35, wobble: 0.06 }
      );
      const trunk = neurite(rng, soma, inEllipsoid(rng, cal.c, cal.r, 0.3), {
        points: 16,
        curve: 0.34,
        wobble: 0.03,
      });
      const collateral = neurite(
        rng,
        trunk[Math.floor(trunk.length * 0.62)],
        inEllipsoid(rng, lh.c, lh.r, 0.3),
        { points: 11, curve: 0.4, wobble: 0.05 }
      );
      const segs = [
        dendrite,
        trunk,
        collateral,
        ...arbor(rng, collateral, lh.c, 0.06, 2, 7),
        ...arbor(rng, trunk, cal.c, 0.055, 2, 6),
      ];
      push('pn', false, soma, segs);
    }
  }

  /* LHNs — lateral horn to the dimorphic core. */
  for (let side = 0; side < 2; side++) {
    const lh = side ? R.lhR : R.lhL;
    const core = side ? R.coreR : R.coreL;
    for (let i = 0; i < 32; i++) {
      const soma = inEllipsoid(
        rng,
        [lh.c[0] * 1.22, lh.c[1] + 0.08, lh.c[2] - 0.02],
        [0.09, 0.08, 0.09],
        0.3
      );
      const dendrite = neurite(rng, soma, inEllipsoid(rng, lh.c, lh.r, 0.3), {
        points: 9,
        curve: 0.4,
        wobble: 0.06,
      });
      const trunk = neurite(rng, soma, inEllipsoid(rng, core.c, core.r, 0.3), {
        points: 15,
        curve: 0.36,
        wobble: 0.035,
      });
      const segs = [
        dendrite,
        trunk,
        ...arbor(rng, trunk, core.c, 0.055, 2, 7),
        ...arbor(rng, dendrite, lh.c, 0.05, 1, 6),
      ];
      push('lhn', false, soma, segs);
    }
  }

  /* Dimorphic neurons — the fru+ stand-in. Sexually divergent arborisation. */
  const dimorphicIds = [];
  for (let side = 0; side < 2; side++) {
    const core = side ? R.coreR : R.coreL;
    const other = side ? R.coreL : R.coreR;
    for (let i = 0; i < 12; i++) {
      const soma = inEllipsoid(
        rng,
        [core.c[0] * 1.3, core.c[1] + 0.1, core.c[2]],
        [0.07, 0.07, 0.07],
        0.25
      );
      const dendrite = neurite(rng, soma, inEllipsoid(rng, core.c, core.r, 0.3), {
        points: 10,
        curve: 0.42,
        wobble: 0.06,
      });
      const descTarget = male
        ? [core.c[0] * 0.35, -0.3, -0.2]
        : [core.c[0] * 0.2, -0.24, -0.3];
      const trunk = neurite(rng, soma, descTarget, {
        points: 16,
        curve: male ? 0.4 : 0.26,
        wobble: 0.04,
      });
      const segs = [dendrite, trunk];
      // Male: extra contralateral loop. Female: tighter medial tuft.
      if (male) {
        segs.push(
          neurite(
            rng,
            trunk[Math.floor(trunk.length * 0.4)],
            inEllipsoid(rng, other.c, other.r, 0.4),
            { points: 14, curve: 0.55, wobble: 0.05 }
          )
        );
        segs.push(...arbor(rng, trunk, [core.c[0] * 0.35, -0.28, -0.18], 0.09, 3, 7));
      } else {
        segs.push(...arbor(rng, trunk, [core.c[0] * 0.2, -0.22, -0.28], 0.06, 2, 7));
        segs.push(...arbor(rng, dendrite, core.c, 0.05, 2, 6));
      }
      const n = push('dimorphic', true, soma, segs);
      dimorphicIds.push(n.id);
    }
  }

  /* Descending neurons — central brain down the neck connective. */
  for (let i = 0; i < 16; i++) {
    const sideSign = i % 2 ? 1 : -1;
    const soma = inEllipsoid(
      rng,
      [sideSign * 0.19, -0.14, -0.12],
      [0.07, 0.07, 0.07],
      0.3
    );
    const dendrite = neurite(
      rng,
      soma,
      inEllipsoid(rng, [sideSign * 0.14, -0.02, -0.06], [0.09, 0.09, 0.09], 0.3),
      { points: 9, curve: 0.4, wobble: 0.06 }
    );
    const trunk = neurite(
      rng,
      soma,
      [
        R.neckTip[0] + (rng() - 0.5) * 0.06,
        R.neckTip[1],
        R.neckTip[2] + (rng() - 0.5) * 0.06,
      ],
      { points: 18, curve: 0.2, wobble: 0.025 }
    );
    const segs = [dendrite, trunk, ...arbor(rng, dendrite, [sideSign * 0.14, -0.02, -0.06], 0.07, 2, 6)];
    push('descending', false, soma, segs);
  }

  /* Optic lobe columnar neurons — radial fans give the lobes their texture. */
  for (let side = 0; side < 2; side++) {
    const ol = side ? R.opticR : R.opticL;
    const inward = [ol.c[0] * 0.34, ol.c[1] * 0.4, ol.c[2]];
    for (let i = 0; i < 55; i++) {
      const soma = inEllipsoid(rng, ol.c, ol.r, 0.86);
      const medial = [
        ol.c[0] * 0.42 + (rng() - 0.5) * 0.1,
        soma[1] * 0.55 + (rng() - 0.5) * 0.08,
        soma[2] * 0.6 + (rng() - 0.5) * 0.08,
      ];
      const trunk = neurite(rng, soma, medial, {
        points: 12,
        curve: 0.14,
        wobble: 0.035,
      });
      const deep = neurite(rng, medial, inEllipsoid(rng, inward, [0.12, 0.14, 0.12], 0.3), {
        points: 9,
        curve: 0.3,
        wobble: 0.05,
      });
      push('other', false, soma, [trunk, deep, ...arbor(rng, trunk, medial, 0.05, 1, 6)]);
    }
  }

  /* Central mass local neurons — connective tissue of the render. */
  for (let i = 0; i < 40; i++) {
    const soma = inEllipsoid(rng, R.central.c, R.central.r, 0.75);
    const target = inEllipsoid(rng, R.central.c, R.central.r, 0.2);
    const trunk = neurite(rng, soma, target, { points: 12, curve: 0.45, wobble: 0.06 });
    push('other', false, soma, [trunk, ...arbor(rng, trunk, target, 0.08, 3, 7)]);
  }

  /* ------------------------------------------------------------- edges */

  const byType = {};
  for (const n of neurons) (byType[n.type] || (byType[n.type] = [])).push(n);

  const edges = [];
  const seen = new Set();
  const link = (a, b) => {
    if (a === b) return;
    const k = a * 100000 + b;
    if (seen.has(k)) return;
    seen.add(k);
    edges.push([a, b]);
  };

  /** k nearest members of `pool` to point p, same hemisphere preferred. */
  const nearest = (pool, p, k, sameSide = true) => {
    const scored = pool.map((n) => {
      let d = dist3(n.soma, p);
      if (sameSide && n.soma[0] * p[0] < 0) d += 0.9;
      return { n, d };
    });
    scored.sort((a, b) => a.d - b.d);
    return scored.slice(0, k).map((s) => s.n);
  };

  for (const pn of byType.pn) for (const o of nearest(byType.orn, pn.soma, 4)) link(o.id, pn.id);
  for (const lh of byType.lhn) for (const p of nearest(byType.pn, lh.soma, 3)) link(p.id, lh.id);
  for (const dm of byType.dimorphic) for (const lh of nearest(byType.lhn, dm.soma, 4)) link(lh.id, dm.id);
  for (const de of byType.descending) for (const dm of nearest(byType.dimorphic, de.soma, 4)) link(dm.id, de.id);

  // ambient lateral wiring (kept sparse; drives the background shimmer only)
  const others = byType.other || [];
  for (const o of others) {
    for (const q of nearest(others, o.soma, 3)) link(o.id, q.id);
    if (rng() < 0.25) {
      const t = nearest(byType.lhn, o.soma, 1)[0];
      if (t) link(o.id, t.id);
    }
  }
  for (const lh of byType.lhn) {
    if (rng() < 0.3) {
      const t = nearest(byType.lhn, lh.soma, 2)[1];
      if (t) link(lh.id, t.id);
    }
  }

  /* ------------------------------------------------------------ pathway */

  const out = new Map();
  for (const [a, b] of edges) {
    if (!out.has(a)) out.set(a, []);
    out.get(a).push(b);
  }
  const nById = new Map(neurons.map((n) => [n.id, n]));

  const step = (fromId, type) => {
    const cand = (out.get(fromId) || [])
      .map((i) => nById.get(i))
      .filter((n) => n && n.type === type);
    if (!cand.length) return (byType[type] && byType[type][0]) || null;
    const from = nById.get(fromId).soma;
    cand.sort((a, b) => dist3(a.soma, from) - dist3(b.soma, from));
    return cand[0];
  };

  // start from the left-hemisphere ORN closest to its antennal lobe
  const startOrn = nearest(byType.orn, R.alL.c, 1, false)[0];
  const pathway = [startOrn.id];
  let cur = startOrn;
  for (const t of ['pn', 'lhn', 'dimorphic', 'descending']) {
    const nx = step(cur.id, t);
    if (!nx) break;
    pathway.push(nx.id);
    cur = nx;
  }
  // guarantee the spine is actually wired even if the greedy walk fell back
  for (let i = 0; i < pathway.length - 1; i++) link(pathway[i], pathway[i + 1]);

  return {
    meta: {
      sex,
      bounds: [
        [-1, -0.6, -0.62],
        [1, 0.6, 0.62],
      ],
      source: 'procedural-fallback',
    },
    neurons,
    edges,
    pathway,
  };
}
