/*
 * neuro.js — morphology to GPU.
 *
 * One BrainView per hemisphere-pair (per sex). All filament polylines are
 * merged into exactly two LineSegments geometries (base + dimorphic) and all
 * somata into one Points cloud. Nothing is rebuilt after construction: spikes,
 * halos and accent glows are driven purely by shader uniforms.
 */

import * as THREE from 'three';
import { generateFallbackBrain } from './fallback.js';

export { generateFallbackBrain };

export const N_PULSE = 24; // concurrent travelling spikes per brain
export const N_GLOW = 16; // concurrent whole-neuron glows per brain

/* ------------------------------------------------------------------ utils */

function isVec3(p) {
  return Array.isArray(p) && p.length >= 3 && typeof p[0] === 'number';
}

/** Accept [[x,y,z],...] or a flat [x,y,z,x,y,z,...] polyline. */
function toPoints(seg) {
  if (!Array.isArray(seg) || seg.length === 0) return null;
  if (isVec3(seg[0])) return seg.length >= 2 ? seg : null;
  if (typeof seg[0] === 'number') {
    const n = Math.floor(seg.length / 3);
    if (n < 2) return null;
    const out = new Array(n);
    for (let i = 0; i < n; i++) out[i] = [seg[i * 3], seg[i * 3 + 1], seg[i * 3 + 2]];
    return out;
  }
  return null;
}

/** Cheap structural validation so a half-written data file falls back safely. */
export function validateGraph(g) {
  if (!g || typeof g !== 'object') return false;
  if (!Array.isArray(g.neurons) || g.neurons.length < 20) return false;
  if (!Array.isArray(g.edges)) return false;
  const probe = g.neurons[0];
  if (!probe || !isVec3(probe.soma) || !Array.isArray(probe.segments)) return false;
  let withGeom = 0;
  for (let i = 0; i < Math.min(g.neurons.length, 50); i++) {
    const s = g.neurons[i] && g.neurons[i].segments;
    if (Array.isArray(s) && s.length && toPoints(s[0])) withGeom++;
  }
  return withGeom > 10;
}

function radialTexture(inner = 0.0) {
  const size = 128;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, size * inner, size / 2, size / 2, size / 2);
  g.addColorStop(0.0, 'rgba(255,255,255,1)');
  g.addColorStop(0.18, 'rgba(255,255,255,0.55)');
  g.addColorStop(0.45, 'rgba(255,255,255,0.14)');
  g.addColorStop(1.0, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

let HALO_TEX = null;
function haloTexture() {
  if (!HALO_TEX) HALO_TEX = radialTexture(0.0);
  return HALO_TEX;
}

/* ---------------------------------------------------------------- shaders */

const PULSE_CHUNK = /* glsl */ `
  uniform float uTime;
  uniform vec4 uPulse[${N_PULSE}];
  uniform vec4 uGlow[${N_GLOW}];

  void sampleActivity(float nid, float dist, out float hot, out float acc) {
    hot = 0.0;
    acc = 0.0;
    for (int i = 0; i < ${N_PULSE}; i++) {
      vec4 p = uPulse[i];
      float on = step(0.0005, p.z) * (1.0 - step(0.5, abs(p.x - nid)));
      float d = (dist - p.y) / max(p.w, 0.0005);
      hot += on * p.z * exp(-d * d * 3.5);
    }
    for (int i = 0; i < ${N_GLOW}; i++) {
      vec4 g = uGlow[i];
      float on = step(0.0005, g.y) * (1.0 - step(0.5, abs(g.x - nid)));
      acc += on * g.y;
    }
  }
`;

const FILAMENT_VERT = /* glsl */ `
  precision highp float;

  attribute float aNeuron;
  attribute float aDist;
  attribute float aSeed;

  varying float vHot;
  varying float vAcc;
  varying float vShimmer;
  varying float vDepth;

  ${PULSE_CHUNK}

  void main() {
    float hot, acc;
    sampleActivity(aNeuron, aDist, hot, acc);
    vHot = min(hot, 2.0);
    vAcc = min(acc, 1.0);
    vShimmer = 0.62 + 0.38 * sin(uTime * (0.35 + aSeed * 0.9) + aSeed * 41.0);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;

const FILAMENT_FRAG = /* glsl */ `
  precision highp float;

  uniform vec3 uBase;
  uniform vec3 uAccent;
  uniform float uOpacity;
  uniform float uAccentBias;
  uniform float uFog;

  varying float vHot;
  varying float vAcc;
  varying float vShimmer;
  varying float vDepth;

  void main() {
    float acc = clamp(vAcc + uAccentBias, 0.0, 1.0);
    vec3 col = mix(uBase, uAccent, acc);
    float hot = clamp(vHot, 0.0, 1.6);
    col = mix(col, vec3(1.0, 0.97, 0.93), clamp(hot, 0.0, 1.0) * 0.88);
    float gain = 1.0 + hot * 4.2 + acc * 1.15;
    float depthFade = 1.0 - clamp((vDepth - uFog) * 0.24, 0.0, 0.62);
    float a = uOpacity * vShimmer * depthFade * (1.0 + hot * 2.2 + acc * 0.9);
    gl_FragColor = vec4(col * gain * a, a);
  }
`;

const SOMA_VERT = /* glsl */ `
  precision highp float;

  attribute float aNeuron;
  attribute float aDist;
  attribute float aSize;
  attribute float aKind;   // 0 base, 1 dimorphic, 2 descending
  attribute float aSeed;

  uniform float uScale;
  uniform float uSizeBoost;

  varying float vHot;
  varying float vAcc;
  varying float vKind;
  varying float vShimmer;

  ${PULSE_CHUNK}

  void main() {
    float hot, acc;
    sampleActivity(aNeuron, aDist, hot, acc);
    vHot = min(hot, 2.0);
    vAcc = min(acc, 1.0);
    vKind = aKind;
    vShimmer = 0.6 + 0.4 * sin(uTime * (0.5 + aSeed * 1.1) + aSeed * 27.0);

    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float grow = 1.0 + vHot * 1.35 + vAcc * 0.7;
    gl_PointSize = clamp(aSize * grow * uSizeBoost * uScale / max(-mv.z, 0.05), 1.0, 96.0);
    gl_Position = projectionMatrix * mv;
  }
`;

const SOMA_FRAG = /* glsl */ `
  precision highp float;

  uniform vec3 uBase;
  uniform vec3 uAccent;
  uniform float uOpacity;

  varying float vHot;
  varying float vAcc;
  varying float vKind;
  varying float vShimmer;

  void main() {
    vec2 d = gl_PointCoord - vec2(0.5);
    float r = length(d) * 2.0;
    if (r > 1.0) discard;
    float halo = pow(1.0 - r, 2.4);
    float core = pow(max(1.0 - r * 2.1, 0.0), 2.0);

    float dim = step(0.5, vKind);
    float acc = clamp(vAcc + dim * 0.34, 0.0, 1.0);
    vec3 col = mix(uBase, uAccent, acc);
    float hot = clamp(vHot, 0.0, 1.5);
    col = mix(col, vec3(1.0, 0.98, 0.94), clamp(hot, 0.0, 1.0) * 0.9);

    float gain = 1.0 + hot * 4.0 + acc * 1.4;
    float a = uOpacity * (halo * 0.55 + core * 0.85) * (0.55 + 0.45 * vShimmer) * (1.0 + hot * 2.4);
    gl_FragColor = vec4(col * gain * a, a);
  }
`;

/* -------------------------------------------------------------- geometry */

function buildGeometry(records) {
  let vertexCount = 0;
  for (const rec of records) vertexCount += rec.vertexCount;

  const pos = new Float32Array(vertexCount * 3);
  const nid = new Float32Array(vertexCount);
  const dst = new Float32Array(vertexCount);
  const sed = new Float32Array(vertexCount);

  let v = 0;
  for (const rec of records) {
    const { polylines, id, seed } = rec;
    for (const pl of polylines) {
      const pts = pl.pts;
      const ds = pl.dist;
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i];
        const b = pts[i + 1];
        pos[v * 3] = a[0];
        pos[v * 3 + 1] = a[1];
        pos[v * 3 + 2] = a[2];
        nid[v] = id;
        dst[v] = ds[i];
        sed[v] = seed;
        v++;
        pos[v * 3] = b[0];
        pos[v * 3 + 1] = b[1];
        pos[v * 3 + 2] = b[2];
        nid[v] = id;
        dst[v] = ds[i + 1];
        sed[v] = seed;
        v++;
      }
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aNeuron', new THREE.BufferAttribute(nid, 1));
  geo.setAttribute('aDist', new THREE.BufferAttribute(dst, 1));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(sed, 1));
  geo.computeBoundingSphere();
  return geo;
}

/** Per-neuron polylines with normalised soma-relative arc length. */
function prepareNeuron(n) {
  const soma = n.soma;
  const polylines = [];
  let maxD = 1e-4;
  let vertexCount = 0;

  const segs = Array.isArray(n.segments) ? n.segments : [];
  for (const raw of segs) {
    const pts = toPoints(raw);
    if (!pts) continue;
    const dist = new Array(pts.length);
    let acc = Math.hypot(pts[0][0] - soma[0], pts[0][1] - soma[1], pts[0][2] - soma[2]);
    dist[0] = acc;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1];
      const b = pts[i];
      acc += Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      dist[i] = acc;
    }
    if (acc > maxD) maxD = acc;
    polylines.push({ pts, dist });
    vertexCount += (pts.length - 1) * 2;
  }
  for (const pl of polylines) {
    for (let i = 0; i < pl.dist.length; i++) pl.dist[i] /= maxD;
  }
  return { polylines, vertexCount, maxD };
}

/* -------------------------------------------------------------- BrainView */

export function createBrainView(graph, opts) {
  const accent = new THREE.Color(opts.accent);
  const base = new THREE.Color(opts.base || '#5a6a7a');
  const dimBase = base.clone().lerp(accent, 0.22);

  const neurons = graph.neurons;
  const baseRecords = [];
  const dimRecords = [];

  const somaPos = new Float32Array(neurons.length * 3);
  const somaNid = new Float32Array(neurons.length);
  const somaDist = new Float32Array(neurons.length);
  const somaSize = new Float32Array(neurons.length);
  const somaKind = new Float32Array(neurons.length);
  const somaSeed = new Float32Array(neurons.length);
  const somaById = new Map();
  const idToIndex = new Map();
  const somaVec = [];

  let maxId = 0;
  for (let i = 0; i < neurons.length; i++) {
    const n = neurons[i];
    const id = Number(n.id);
    if (id > maxId) maxId = id;
    const prepped = prepareNeuron(n);
    const seed = (id * 0.6180339887) % 1;
    const rec = { polylines: prepped.polylines, vertexCount: prepped.vertexCount, id, seed };
    if (n.dimorphic || n.type === 'dimorphic') dimRecords.push(rec);
    else baseRecords.push(rec);

    somaPos[i * 3] = n.soma[0];
    somaPos[i * 3 + 1] = n.soma[1];
    somaPos[i * 3 + 2] = n.soma[2];
    somaNid[i] = id;
    somaDist[i] = 0.0;
    somaSeed[i] = seed;
    const dim = n.dimorphic || n.type === 'dimorphic';
    somaKind[i] = dim ? 1 : n.type === 'descending' ? 2 : 0;
    somaSize[i] = dim ? 0.03 : n.type === 'descending' ? 0.021 : n.type === 'other' ? 0.01 : 0.015;
    somaById.set(id, n.soma);
    idToIndex.set(id, i);
    somaVec.push(new THREE.Vector3(n.soma[0], n.soma[1], n.soma[2]));
  }

  /* shared uniform payloads (mutated in place, never reallocated) */
  const pulseArr = new Float32Array(N_PULSE * 4);
  const glowArr = new Float32Array(N_GLOW * 4);
  for (let i = 0; i < N_PULSE; i++) pulseArr[i * 4] = -1;
  for (let i = 0; i < N_GLOW; i++) glowArr[i * 4] = -1;

  const uTime = { value: 0 };
  const uPulse = { value: pulseArr };
  const uGlow = { value: glowArr };

  const filamentUniforms = (baseCol, accentCol, opacity, accentBias) => ({
    uTime,
    uPulse,
    uGlow,
    uBase: { value: baseCol },
    uAccent: { value: accentCol },
    uOpacity: { value: opacity },
    uAccentBias: { value: accentBias },
    uFog: { value: 2.0 },
  });

  const mkFilamentMat = (baseCol, accentCol, opacity, accentBias) =>
    new THREE.ShaderMaterial({
      uniforms: filamentUniforms(baseCol, accentCol, opacity, accentBias),
      vertexShader: FILAMENT_VERT,
      fragmentShader: FILAMENT_FRAG,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
    });

  const group = new THREE.Group();

  // Opacity is normalized to vertex density so datasets of any resolution
  // (procedural ~40k points, real skeletons 100k-250k) land at the same
  // perceived brightness instead of blowing out under additive blending.
  const densityScale = (recs, refVerts) => {
    const v = recs.reduce((a, r) => a + r.vertexCount, 0);
    return Math.max(0.28, Math.sqrt(refVerts / Math.max(refVerts, v)));
  };

  const baseGeo = buildGeometry(baseRecords);
  const baseMat = mkFilamentMat(base, accent, 0.46 * densityScale(baseRecords, 32000), 0.0);
  const baseLines = new THREE.LineSegments(baseGeo, baseMat);
  baseLines.frustumCulled = false;
  group.add(baseLines);

  let dimLines = null;
  if (dimRecords.length) {
    const dimGeo = buildGeometry(dimRecords);
    const dimMat = mkFilamentMat(dimBase, accent, 0.62 * densityScale(dimRecords, 10000), 0.2);
    dimLines = new THREE.LineSegments(dimGeo, dimMat);
    dimLines.frustumCulled = false;
    group.add(dimLines);
  }

  const somaGeo = new THREE.BufferGeometry();
  somaGeo.setAttribute('position', new THREE.BufferAttribute(somaPos, 3));
  somaGeo.setAttribute('aNeuron', new THREE.BufferAttribute(somaNid, 1));
  somaGeo.setAttribute('aDist', new THREE.BufferAttribute(somaDist, 1));
  somaGeo.setAttribute('aSize', new THREE.BufferAttribute(somaSize, 1));
  somaGeo.setAttribute('aKind', new THREE.BufferAttribute(somaKind, 1));
  somaGeo.setAttribute('aSeed', new THREE.BufferAttribute(somaSeed, 1));
  somaGeo.computeBoundingSphere();

  const somaMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime,
      uPulse,
      uGlow,
      uBase: { value: base.clone().lerp(new THREE.Color('#ffffff'), 0.14) },
      uAccent: { value: accent },
      uOpacity: { value: 0.5 },
      uScale: { value: 400 },
      uSizeBoost: { value: 1 },
    },
    vertexShader: SOMA_VERT,
    fragmentShader: SOMA_FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const somaPoints = new THREE.Points(somaGeo, somaMat);
  somaPoints.frustumCulled = false;
  group.add(somaPoints);

  /* ambient volume: a broad soft glow so the mass reads as tissue, not wires */
  const coreCentroid = new THREE.Vector3();
  let dimCount = 0;
  for (const n of neurons) {
    if (n.dimorphic || n.type === 'dimorphic') {
      coreCentroid.x += n.soma[0];
      coreCentroid.y += n.soma[1];
      coreCentroid.z += n.soma[2];
      dimCount++;
    }
  }
  if (dimCount) coreCentroid.multiplyScalar(1 / dimCount);

  const coreSprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: haloTexture(),
      color: accent,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.0,
    })
  );
  coreSprite.position.copy(coreCentroid);
  coreSprite.scale.setScalar(1.25);
  group.add(coreSprite);

  const ambientSprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: haloTexture(),
      color: base.clone().lerp(accent, 0.35),
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.07,
    })
  );
  ambientSprite.scale.set(2.6, 1.7, 1);
  ambientSprite.position.set(0, 0, -0.05);
  group.add(ambientSprite);

  /* halo pool for direct neuron firing */
  const HALOS = 8;
  const halos = [];
  for (let i = 0; i < HALOS; i++) {
    const s = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: haloTexture(),
        color: accent,
        transparent: true,
        depthWrite: false,
        depthTest: false,
        blending: THREE.AdditiveBlending,
        opacity: 0,
      })
    );
    s.visible = false;
    s.scale.setScalar(0.2);
    group.add(s);
    halos.push({ sprite: s, life: 0, dur: 1 });
  }

  /* ------------------------------------------------------- activity pools */

  const pulses = [];
  for (let i = 0; i < N_PULSE; i++) pulses.push({ id: -1, head: 0, speed: 1, amp: 0, width: 0.22, age: 1e9 });
  const glows = [];
  for (let i = 0; i < N_GLOW; i++) glows.push({ id: -1, amp: 0, decay: 3.2, age: 1e9 });

  function allocPulse() {
    let best = null;
    let bestAge = -1;
    for (const p of pulses) {
      if (p.amp <= 0) return p;
      if (p.age > bestAge) {
        bestAge = p.age;
        best = p;
      }
    }
    return best;
  }

  function allocGlow(id) {
    for (const g of glows) if (g.id === id && g.amp > 0) return g;
    let best = null;
    let bestAmp = Infinity;
    for (const g of glows) {
      if (g.amp <= 0) return g;
      if (g.amp < bestAmp) {
        bestAmp = g.amp;
        best = g;
      }
    }
    return best;
  }

  let coreEnergy = 0;
  let episodeHaloed = false;

  /** Visual spike: a white-hot pulse travelling soma -> terminals. */
  function spike(id, o = {}) {
    const p = o.pulse === false ? null : allocPulse();
    if (p) {
      p.id = id;
      p.head = -0.08;
      p.speed = 1 / (o.duration || 0.46);
      p.amp = o.amp == null ? 1.0 : o.amp;
      p.width = o.width || 0.2;
      p.age = 0;
    }
    const g = allocGlow(id);
    if (g) {
      g.id = id;
      g.amp = Math.min(1.2, Math.max(g.amp, o.glow == null ? 0.85 : o.glow));
      g.decay = o.glowDecay || 2.6;
      g.age = 0;
    }
    if (o.core) coreEnergy = Math.min(1, coreEnergy + 0.35);
  }

  /** Expanding accent halo at a soma (direct click / dimorphic activation). */
  function halo(id, scale = 0.55) {
    const s = somaById.get(id);
    if (!s) return;
    let slot = halos.find((h) => h.life <= 0) || halos[0];
    slot.sprite.position.set(s[0], s[1], s[2]);
    slot.sprite.visible = true;
    slot.life = 1;
    slot.dur = 0.95;
    slot.max = scale;
  }

  /** Called at the start of a puff so the core halo fires once, not per spike. */
  function armEpisode() {
    episodeHaloed = false;
  }

  /** First dimorphic neuron to fire this episode gets the accent halo. */
  function markDimorphic(id) {
    if (episodeHaloed) return;
    episodeHaloed = true;
    halo(id, 0.68);
  }

  /** Verdict flash: the dimorphic core blooms in the accent colour. */
  function flare() {
    coreEnergy = 1;
  }

  function update(dt, t) {
    uTime.value = t;

    for (let i = 0; i < N_PULSE; i++) {
      const p = pulses[i];
      if (p.amp > 0) {
        p.age += dt;
        p.head += p.speed * dt;
        if (p.head > 1.18) {
          p.amp = 0;
          p.id = -1;
        }
      }
      const o = i * 4;
      pulseArr[o] = p.id;
      pulseArr[o + 1] = p.head;
      pulseArr[o + 2] = p.amp;
      pulseArr[o + 3] = p.width;
    }

    for (let i = 0; i < N_GLOW; i++) {
      const g = glows[i];
      if (g.amp > 0) {
        g.age += dt;
        g.amp -= g.amp * g.decay * dt;
        if (g.amp < 0.004) {
          g.amp = 0;
          g.id = -1;
        }
      }
      const o = i * 4;
      glowArr[o] = g.id;
      glowArr[o + 1] = g.amp;
    }

    for (const h of halos) {
      if (h.life <= 0) continue;
      h.life -= dt / h.dur;
      const k = 1 - Math.max(h.life, 0);
      const e = 1 - Math.pow(1 - k, 3);
      h.sprite.scale.setScalar(0.08 + e * (h.max || 0.55));
      h.sprite.material.opacity = Math.max(0, 1 - k) * 0.6;
      if (h.life <= 0) h.sprite.visible = false;
    }

    coreEnergy = Math.max(0, coreEnergy - dt * 0.55);
    coreSprite.material.opacity = 0.035 + coreEnergy * 0.42;
    coreSprite.scale.setScalar(1.1 + coreEnergy * 0.7);
  }

  const raycaster = new THREE.Raycaster();
  raycaster.params.Points.threshold = 0.035;

  /** Pick the nearest soma under normalised device coords; returns neuron id. */
  function pick(ndc, camera) {
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObject(somaPoints, false);
    if (!hits.length) return -1;
    // prefer the closest-to-ray hit among the front few
    let best = hits[0];
    for (let i = 1; i < Math.min(hits.length, 6); i++) {
      if (hits[i].distanceToRay < best.distanceToRay * 0.75) best = hits[i];
    }
    return somaNid[best.index];
  }

  function setSomaScale(px) {
    somaMat.uniforms.uScale.value = px;
  }

  function dispose() {
    group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) o.material.dispose();
    });
  }

  return {
    group,
    somaPoints,
    baseLines,
    dimLines,
    coreCentroid,
    spike,
    halo,
    armEpisode,
    markDimorphic,
    flare,
    update,
    pick,
    setSomaScale,
    setFog: (v) => {
      baseMat.uniforms.uFog.value = v;
      if (dimLines) dimLines.material.uniforms.uFog.value = v;
    },
    dispose,
    somaVec,
    idToIndex,
    maxId,
    stats: {
      neurons: neurons.length,
      baseVerts: baseGeo.getAttribute('position').count,
      dimVerts: dimLines ? dimLines.geometry.getAttribute('position').count : 0,
    },
  };
}
