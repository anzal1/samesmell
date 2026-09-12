#!/usr/bin/env node
/**
 * genBrains.mjs — procedural Drosophila melanogaster brain morphology generator.
 *
 * Owner: Agent B (morphology). Writes data/male.json and data/female.json.
 * Contract: see "Data schema" in SPEC.md.
 *
 * Anatomy modelled (coordinates: +x = right, +y = dorsal, +z = anterior):
 *   - optic lobes            two large lobed ellipsoids, retinotopic columnar lattice
 *   - central brain          ellipsoid mass between them, cortical rind of somata
 *   - antennal lobes         two small anterior-ventral spheroids, ~15 glomeruli each
 *   - central complex        ellipsoid-body torus at the midline
 *   - mushroom bodies        calyx -> peduncle -> vertical + medial lobes
 *   - lateral horns          dorso-lateral neuropil
 *   - cVA circuit            ORN(DA1) -> PN(mALT) -> LHN -> dimorphic core -> descending
 *
 * Somata always sit in the cortical rind on the OUTSIDE of their region; each neuron's
 * primary neurite runs inward along a smooth entry path and then arborises inside the
 * target neuropil. Everything is driven by a deterministic seeded RNG (mulberry32),
 * with one independent stream per region so male and female share identical base
 * anatomy and diverge only where the dimorphic circuit says they should.
 *
 * Usage: node scripts/genBrains.mjs
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const DATA = resolve(ROOT, 'data');

/* ------------------------------------------------------------------ *
 * RNG
 * ------------------------------------------------------------------ */

function mulberry32(a) {
  let s = a >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Stable string -> 32 bit seed, so region streams are named not positional. */
function strSeed(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

const BASE_SEED = 0x5ca1ab1e;
/** Independent, name-addressed RNG stream. Same name => same numbers, always. */
const stream = (name) => mulberry32((BASE_SEED ^ strSeed(name)) >>> 0);

/* ------------------------------------------------------------------ *
 * Vector / sampling helpers
 * ------------------------------------------------------------------ */

const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
const mix = (a, b, t) => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
];
const len = (a) => Math.hypot(a[0], a[1], a[2]);
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
const norm = (a) => {
  const l = len(a) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
};
const cross = (a, b) => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];

const rnd = (r, a, b) => a + (b - a) * r();
const rint = (r, a, b) => a + Math.floor(r() * (b - a + 1));

/** Box–Muller, cached-free (we throw the second sample away; determinism is per-call). */
function gauss(r, sd = 1) {
  let u = 0;
  while (u === 0) u = r();
  const v = r();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v) * sd;
}

function randUnit(r) {
  const z = rnd(r, -1, 1);
  const t = rnd(r, 0, Math.PI * 2);
  const s = Math.sqrt(Math.max(0, 1 - z * z));
  return [s * Math.cos(t), s * Math.sin(t), z];
}

function randInBall(r, radius) {
  const u = Math.cbrt(r());
  return mul(randUnit(r), u * radius);
}

/** Two unit vectors orthogonal to d. */
function basis(d) {
  const n = norm(d);
  const ref = Math.abs(n[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
  const u = norm(cross(n, ref));
  const v = cross(n, u);
  return [u, v];
}

/* ------------------------------------------------------------------ *
 * Centripetal Catmull-Rom smoothing
 * ------------------------------------------------------------------ */

function crPoint(p0, p1, p2, p3, t) {
  const t2 = t * t;
  const t3 = t2 * t;
  const out = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    out[i] =
      0.5 *
      (2 * p1[i] +
        (-p0[i] + p2[i]) * t +
        (2 * p0[i] - 5 * p1[i] + 4 * p2[i] - p3[i]) * t2 +
        (-p0[i] + 3 * p1[i] - 3 * p2[i] + p3[i]) * t3);
  }
  return out;
}

/** Smooth a control polyline into exactly n samples (n clamped to schema's 5..40). */
function smooth(ctrl, n) {
  const N = Math.max(5, Math.min(40, n | 0));
  if (ctrl.length === 1) return new Array(N).fill(ctrl[0]);
  if (ctrl.length === 2) {
    const out = [];
    for (let i = 0; i < N; i++) out.push(mix(ctrl[0], ctrl[1], i / (N - 1)));
    return out;
  }
  const p = [
    sub(mul(ctrl[0], 2), ctrl[1]),
    ...ctrl,
    sub(mul(ctrl[ctrl.length - 1], 2), ctrl[ctrl.length - 2]),
  ];
  const segs = p.length - 3;
  const out = [];
  for (let i = 0; i < N; i++) {
    const t = (i / (N - 1)) * segs;
    const si = Math.min(Math.floor(t), segs - 1);
    out.push(crPoint(p[si], p[si + 1], p[si + 2], p[si + 3], t - si));
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Brain geometry constants (shared by both sexes)
 * ------------------------------------------------------------------ */

const BOUNDS = [
  [-1, -0.55, -0.6],
  [1, 0.55, 0.6],
];

// Optic lobes: large lobed ellipsoids, together roughly half the brain volume.
const OL = { cx: 0.675, cy: 0.0, cz: -0.02, ax: 0.295, ay: 0.475, az: 0.43 };
// Central brain mass.
const CB = { c: [0, 0.0, -0.05], a: [0.41, 0.39, 0.38] };
// Antennal lobes (anterior-ventral, flanking the midline).
const AL_R = 0.105;
const alCenter = (s) => [s * 0.175, -0.215, 0.415];
// Lateral horns (dorso-lateral).
const lhCenter = (s) => [s * 0.345, 0.235, 0.05];
const LH_R = 0.095;
// Mushroom body landmarks.
const mbCalyx = (s) => [s * 0.285, 0.285, -0.3];
const mbJunction = (s) => [s * 0.165, -0.02, 0.06];
const mbVertTip = (s) => [s * 0.145, 0.3, 0.145];
const mbMedTip = (s) => [s * 0.035, -0.06, 0.15];
// Central complex (ellipsoid body torus) at the midline.
const CX = { c: [0, 0.06, -0.09], R: 0.105, r: 0.04 };
// Cervical connective: where descending neurons dive out of the brain.
const cervical = (s) => [s * 0.04, -0.535, -0.2];

const SIDES = [-1, 1];

/* ------------------------------------------------------------------ *
 * Neuron construction
 * ------------------------------------------------------------------ */

function makeBuilder() {
  const neurons = [];
  const meta = []; // internal, parallel to neurons: { region, side, arborPts }

  function push(type, dimorphic, soma, segments, region, side) {
    const id = neurons.length;
    const arborPts = [];
    for (let i = 1; i < segments.length; i++) arborPts.push(...segments[i]);
    if (arborPts.length === 0 && segments.length) {
      const s0 = segments[0];
      arborPts.push(...s0.slice(Math.floor(s0.length / 2)));
    }
    neurons.push({ id, type, dimorphic, soma, segments });
    meta.push({ region, side, arborPts });
    return id;
  }
  return { neurons, meta, push };
}

/**
 * Primary neurite: soma -> a smooth entry path -> the arbor root inside the neuropil.
 * Bows the path sideways a little so it reads as a fibre tract, not a ruler line.
 */
function primaryNeurite(r, soma, arborRoot, { bow = 0.35, via = null, pts = 12 } = {}) {
  const ctrl = [soma];
  const d = sub(arborRoot, soma);
  const L = len(d) || 1e-6;
  const [u, v] = basis(d);
  const waypoints = via ? [via] : [];
  const path = [soma, ...waypoints, arborRoot];
  // resample the polyline into 3 interior control points, each bowed off-axis
  const legs = path.length - 1;
  for (let i = 1; i <= 3; i++) {
    const t = i / 4;
    const ft = t * legs;
    const si = Math.min(Math.floor(ft), legs - 1);
    const base = mix(path[si], path[si + 1], ft - si);
    const amp = Math.sin(Math.PI * t) * bow * L * 0.22;
    const off = add(mul(u, gauss(r, amp)), mul(v, gauss(r, amp)));
    ctrl.push(add(base, off));
  }
  ctrl.push(arborRoot);
  return smooth(ctrl, pts);
}

/**
 * Tortuous arbor inside a neuropil: nBranch primary branches walking outward from the
 * root within an ellipsoidal envelope, each optionally spawning one daughter.
 */
function arborise(r, root, radius, opts = {}) {
  const {
    nBranch = rint(r, 2, 5),
    tort = 0.28,
    ptsMin = 8,
    ptsMax = 14,
    childProb = 0.45,
    scaleY = 1,
    scaleZ = 1,
    bias = null,
    biasWeight = 0,
  } = opts;
  const segs = [];
  for (let b = 0; b < nBranch; b++) {
    let dir = randUnit(r);
    if (bias) dir = norm(add(mul(dir, 1 - biasWeight), mul(norm(bias), biasWeight)));
    const reach = radius * rnd(r, 0.6, 1.05);
    const nCtrl = rint(r, 3, 5);
    const ctrl = [root];
    let cur = root;
    for (let i = 1; i <= nCtrl; i++) {
      const t = i / nCtrl;
      // curve the growth direction as it goes (tortuosity)
      dir = norm(add(dir, mul(randUnit(r), tort)));
      const step = mul(
        [dir[0], dir[1] * scaleY, dir[2] * scaleZ],
        (reach / nCtrl) * rnd(r, 0.75, 1.25)
      );
      cur = add(cur, step);
      ctrl.push(add(cur, mul(randUnit(r), radius * 0.05 * t)));
    }
    segs.push(smooth(ctrl, rint(r, ptsMin, ptsMax)));

    if (r() < childProb) {
      const anchorIdx = rint(r, 1, ctrl.length - 2);
      const anchor = ctrl[anchorIdx];
      let cdir = norm(add(randUnit(r), mul(dir, 0.4)));
      const cctrl = [anchor];
      let c = anchor;
      const cn = rint(r, 2, 3);
      for (let i = 1; i <= cn; i++) {
        cdir = norm(add(cdir, mul(randUnit(r), tort * 1.3)));
        c = add(c, mul(cdir, (reach * 0.55) / cn));
        cctrl.push(c);
      }
      segs.push(smooth(cctrl, rint(r, 6, 10)));
    }
  }
  return segs;
}

/* ------------------------------------------------------------------ *
 * Regions
 * ------------------------------------------------------------------ */

/** Point on the optic-lobe ellipsoid surface for lattice coords (az, el), scaled radially. */
function olPoint(side, az, el, radialScale, medialShift = 0) {
  const c = [side * OL.cx, OL.cy, OL.cz];
  const d = [
    side * Math.cos(az) * Math.cos(el),
    Math.sin(el),
    Math.sin(az) * Math.cos(el),
  ];
  const p = add(c, mul([d[0] * OL.ax, d[1] * OL.ay, d[2] * OL.az], radialScale));
  p[0] -= side * medialShift;
  return p;
}

/**
 * Optic lobes: a regular retinotopic lattice of radial columns. Somata sit in the
 * cortical rind just outside the lobe surface; each column dives inward to a shrunken
 * copy of the surface (retinotopy preserved), tufts there, and a minority send a long
 * axon medially into the central brain.
 */
function buildOpticLobes(B) {
  const r = stream('optic-lobe');
  const NR = 14;
  for (const side of SIDES) {
    for (let i = 0; i < NR; i++) {
      for (let j = 0; j < NR; j++) {
        // hex-ish offset lattice over a circular cap mask
        const p = (i + 0.5) / NR * 2 - 1;
        const q = ((j + 0.5) / NR) * 2 - 1 + (i % 2 ? 1 / NR : 0);
        if (p * p + q * q > 1.0) continue;

        const az = p * 1.05 + gauss(r, 0.018);
        const el = q * 1.02 + gauss(r, 0.018);

        const soma = olPoint(side, az, el, 1.075);
        const entry = olPoint(side, az, el, 0.94);
        const midDeep = olPoint(side, az, el, 0.7, 0.035);
        const inner = olPoint(side, az, el, 0.4, 0.105);

        // primary column: near-parallel to its neighbours, gently curved
        const colCtrl = [
          soma,
          entry,
          add(midDeep, mul(randUnit(r), 0.008)),
          add(mix(midDeep, inner, 0.55), mul(randUnit(r), 0.008)),
          inner,
        ];
        const segments = [smooth(colCtrl, rint(r, 10, 13))];

        // terminal tuft, spreading tangentially in the deep neuropil layer
        const radial = norm(sub(inner, [side * OL.cx, OL.cy, OL.cz]));
        const [tu, tv] = basis(radial);
        const nTuft = rint(r, 2, 3);
        for (let t = 0; t < nTuft; t++) {
          const a = rnd(r, 0, Math.PI * 2);
          const reach = rnd(r, 0.035, 0.075);
          const dir = norm(
            add(add(mul(tu, Math.cos(a)), mul(tv, Math.sin(a))), mul(radial, rnd(r, -0.5, 0.1)))
          );
          const c1 = add(inner, mul(dir, reach * 0.45));
          const c2 = add(add(inner, mul(dir, reach * 0.8)), mul(randUnit(r), 0.01));
          const c3 = add(add(inner, mul(dir, reach)), mul(randUnit(r), 0.012));
          segments.push(smooth([inner, c1, c2, c3], rint(r, 6, 8)));
        }

        // intermediate layer tuft (lamina/medulla stratification)
        if (r() < 0.34) {
          const a = rnd(r, 0, Math.PI * 2);
          const dir = norm(add(mul(tu, Math.cos(a)), mul(tv, Math.sin(a))));
          const reach = rnd(r, 0.025, 0.05);
          segments.push(
            smooth(
              [
                midDeep,
                add(midDeep, mul(dir, reach * 0.5)),
                add(add(midDeep, mul(dir, reach)), mul(randUnit(r), 0.008)),
              ],
              rint(r, 5, 7)
            )
          );
        }

        // ~12% are optic projection neurons reaching into the central brain
        if (r() < 0.12) {
          const target = add(
            CB.c,
            [
              side * rnd(r, 0.1, 0.33) * CB.a[0],
              gauss(r, 0.35) * CB.a[1],
              gauss(r, 0.4) * CB.a[2],
            ]
          );
          segments.push(primaryNeurite(r, inner, target, { bow: 0.5, pts: rint(r, 10, 14) }));
          segments.push(...arborise(r, target, 0.06, { nBranch: 2, ptsMin: 6, ptsMax: 9, childProb: 0.2 }));
        }

        B.push('other', false, soma, segments, `optic_${side < 0 ? 'L' : 'R'}`, side);
      }
    }
  }
}

/** Glomerular sub-centres of one antennal lobe. Index 0 is DA1 (dorso-lateral). */
function glomeruli(side, r) {
  const c = alCenter(side);
  const list = [];
  const da1Dir = norm([side * 0.62, 0.66, 0.28]);
  list.push({ c: add(c, mul(da1Dir, AL_R * 0.58)), r: 0.036, name: 'DA1' });
  const N = 15;
  for (let i = 1; i < N; i++) {
    // Fibonacci-ish shell packing, jittered
    const k = i + 0.5;
    const phi = Math.acos(1 - (2 * k) / N);
    const th = Math.PI * (1 + Math.sqrt(5)) * k;
    let d = [Math.sin(phi) * Math.cos(th), Math.cos(phi), Math.sin(phi) * Math.sin(th)];
    d = norm(add(d, mul(randUnit(r), 0.12)));
    const p = add(c, mul(d, AL_R * rnd(r, 0.5, 0.68)));
    if (dist(p, list[0].c) < 0.05) continue;
    list.push({ c: p, r: rnd(r, 0.026, 0.038), name: `g${i}` });
  }
  return list;
}

/** Antennal lobe local neurons: somata in the lateral AL rind, arbors across glomeruli. */
function buildALLocals(B, gloms) {
  const r = stream('al-local');
  for (const side of SIDES) {
    const c = alCenter(side);
    const gl = gloms.get(side);
    for (let i = 0; i < 20; i++) {
      const d = norm(add([side * 0.8, -0.2, -0.1], mul(randUnit(r), 0.55)));
      const soma = add(c, mul(d, AL_R * rnd(r, 1.18, 1.34)));
      const root = add(c, mul(randUnit(r), AL_R * 0.25));
      const segments = [primaryNeurite(r, soma, root, { bow: 0.4, pts: rint(r, 8, 11) })];
      const nG = rint(r, 2, 4);
      for (let k = 0; k < nG; k++) {
        const g = gl[rint(r, 0, gl.length - 1)];
        segments.push(primaryNeurite(r, root, g.c, { bow: 0.7, pts: rint(r, 6, 8) }));
        segments.push(
          ...arborise(r, g.c, g.r * 0.95, { nBranch: 2, tort: 0.4, ptsMin: 6, ptsMax: 9, childProb: 0.3 })
        );
      }
      B.push('other', false, soma, segments, `al_${side < 0 ? 'L' : 'R'}`, side);
    }
  }
}

/**
 * cVA ORNs. Somata sit peripherally (antennal nerve entry, anterior-ventral-lateral);
 * axons run posteromedially into DA1 and arborise inside that single glomerulus.
 * Half project to each hemisphere's DA1 — cVA ORN input is bilateral.
 */
function buildORNs(B, gloms) {
  const r = stream('orn-cva');
  const ids = [];
  for (const side of SIDES) {
    const da1 = gloms.get(side)[0];
    const nerve = [side * 0.3, -0.355, 0.52];
    for (let i = 0; i < 20; i++) {
      const soma = add(nerve, [gauss(r, 0.05), gauss(r, 0.035), gauss(r, 0.03)]);
      const via = mix(soma, da1.c, 0.5);
      via[1] -= 0.035;
      via[2] += 0.02;
      const segments = [primaryNeurite(r, soma, da1.c, { bow: 0.3, via, pts: rint(r, 12, 16) })];
      segments.push(
        ...arborise(r, da1.c, da1.r * 0.92, {
          nBranch: rint(r, 2, 4),
          tort: 0.42,
          ptsMin: 6,
          ptsMax: 10,
          childProb: 0.4,
        })
      );
      ids.push(B.push('orn', false, soma, segments, `da1_${side < 0 ? 'L' : 'R'}`, side));
    }
  }
  return ids;
}

/**
 * DA1 projection neurons: soma in the lateral AL cell-body rind, dendrite filling DA1,
 * axon up the medial antennal lobe tract to the mushroom body calyx and lateral horn.
 */
function buildPNs(B, gloms) {
  const r = stream('pn-da1');
  const ids = [];
  const plan = [
    [1, 4],
    [-1, 3],
  ];
  for (const [side, n] of plan) {
    const da1 = gloms.get(side)[0];
    const al = alCenter(side);
    for (let i = 0; i < n; i++) {
      const d = norm(add([side * 0.85, 0.25, 0.0], mul(randUnit(r), 0.4)));
      const soma = add(al, mul(d, AL_R * rnd(r, 1.25, 1.45)));
      const segments = [primaryNeurite(r, soma, da1.c, { bow: 0.4, pts: rint(r, 8, 11) })];
      // dendritic tuft filling DA1
      segments.push(
        ...arborise(r, da1.c, da1.r * 1.0, {
          nBranch: rint(r, 3, 4),
          tort: 0.45,
          ptsMin: 7,
          ptsMax: 11,
          childProb: 0.5,
        })
      );
      // mALT: arcs dorsomedially, then posteriorly to the calyx
      const cal = mbCalyx(side);
      const lh = lhCenter(side);
      const tract1 = [side * 0.12, 0.06, 0.24];
      const tract2 = [side * 0.2, 0.24, -0.02];
      const axon = smooth(
        [
          da1.c,
          add(tract1, [gauss(r, 0.012), gauss(r, 0.012), gauss(r, 0.012)]),
          add(tract2, [gauss(r, 0.014), gauss(r, 0.014), gauss(r, 0.014)]),
          add(cal, [gauss(r, 0.02), gauss(r, 0.02), gauss(r, 0.02)]),
        ],
        rint(r, 16, 20)
      );
      segments.push(axon);
      // calyx collateral boutons
      segments.push(
        ...arborise(r, cal, 0.055, { nBranch: 2, tort: 0.5, ptsMin: 6, ptsMax: 9, childProb: 0.3 })
      );
      // onward to the lateral horn
      segments.push(primaryNeurite(r, cal, lh, { bow: 0.45, pts: rint(r, 10, 13) }));
      segments.push(
        ...arborise(r, lh, LH_R * 0.85, {
          nBranch: rint(r, 3, 5),
          tort: 0.38,
          ptsMin: 8,
          ptsMax: 13,
          childProb: 0.55,
        })
      );
      ids.push(B.push('pn', false, soma, segments, `lh_${side < 0 ? 'L' : 'R'}`, side));
    }
  }
  return ids;
}

/** Lateral horn neurons of the cVA line: LH dendrites, axons toward the dimorphic core. */
function buildLHNs(B, coreTarget) {
  const r = stream('lhn-cva');
  const ids = [];
  const plan = [
    [1, 8],
    [-1, 7],
  ];
  for (const [side, n] of plan) {
    const lh = lhCenter(side);
    for (let i = 0; i < n; i++) {
      const d = norm(add([side * 0.7, 0.62, 0.1], mul(randUnit(r), 0.45)));
      const soma = add(lh, mul(d, LH_R * rnd(r, 1.35, 1.65)));
      const root = add(lh, mul(randInBall(r, LH_R * 0.35), 1));
      const segments = [primaryNeurite(r, soma, root, { bow: 0.4, pts: rint(r, 9, 12) })];
      segments.push(
        ...arborise(r, root, LH_R * 0.9, {
          nBranch: rint(r, 3, 5),
          tort: 0.36,
          ptsMin: 8,
          ptsMax: 13,
          childProb: 0.5,
        })
      );
      // axon sweeping medially/posteriorly into the dimorphic zone
      const tgt = add(coreTarget(side), mul(randInBall(r, 0.05), 1));
      segments.push(primaryNeurite(r, root, tgt, { bow: 0.5, pts: rint(r, 12, 16) }));
      segments.push(
        ...arborise(r, tgt, 0.055, { nBranch: 2, tort: 0.45, ptsMin: 6, ptsMax: 10, childProb: 0.35 })
      );
      ids.push(B.push('lhn', false, soma, segments, `lh_${side < 0 ? 'L' : 'R'}`, side));
    }
  }
  return ids;
}

/** Extra (non-cVA) lateral horn wiring. Male gets a denser LH than female. */
function buildLHExtra(B, count) {
  const r = stream('lh-extra');
  const ids = [];
  for (let i = 0; i < count; i++) {
    const side = i % 2 === 0 ? 1 : -1;
    const lh = lhCenter(side);
    const d = norm(add([side * 0.6, 0.7, -0.1], mul(randUnit(r), 0.5)));
    const soma = add(lh, mul(d, LH_R * rnd(r, 1.3, 1.7)));
    const root = add(lh, randInBall(r, LH_R * 0.4));
    const segments = [primaryNeurite(r, soma, root, { bow: 0.4, pts: rint(r, 8, 11) })];
    segments.push(
      ...arborise(r, root, LH_R * 0.85, {
        nBranch: rint(r, 2, 4),
        tort: 0.4,
        ptsMin: 7,
        ptsMax: 12,
        childProb: 0.45,
      })
    );
    if (r() < 0.4) {
      const tgt = add(CB.c, [side * rnd(r, 0.0, 0.25), rnd(r, -0.12, 0.1), rnd(r, -0.2, 0.08)]);
      segments.push(primaryNeurite(r, root, tgt, { bow: 0.5, pts: rint(r, 9, 12) }));
    }
    ids.push(B.push('other', false, soma, segments, `lh_${side < 0 ? 'L' : 'R'}`, side));
  }
  return ids;
}

/** Mushroom body: Kenyon-cell-like somata behind the calyx, peduncle, two lobes. */
function buildMushroomBodies(B) {
  const r = stream('mushroom-body');
  for (const side of SIDES) {
    const cal = mbCalyx(side);
    const jun = mbJunction(side);
    const vert = mbVertTip(side);
    const med = mbMedTip(side);
    for (let i = 0; i < 25; i++) {
      const soma = add(cal, [
        side * rnd(r, 0.04, 0.1) + gauss(r, 0.012),
        rnd(r, 0.07, 0.125) + gauss(r, 0.012),
        rnd(r, -0.16, -0.08) + gauss(r, 0.014),
      ]);
      const root = add(cal, randInBall(r, 0.05));
      const segments = [primaryNeurite(r, soma, root, { bow: 0.3, pts: rint(r, 7, 9) })];
      // claw-like dendrites in the calyx
      segments.push(
        ...arborise(r, root, 0.062, { nBranch: rint(r, 2, 4), tort: 0.55, ptsMin: 6, ptsMax: 9, childProb: 0.4 })
      );
      // peduncle: tight parallel bundle, tiny jitter keeps it a bundle not a tube
      const j = gauss(r, 0.009);
      const k = gauss(r, 0.009);
      const ped = smooth(
        [
          root,
          add(mix(cal, jun, 0.35), [j, k, gauss(r, 0.008)]),
          add(mix(cal, jun, 0.7), [j, k, gauss(r, 0.008)]),
          add(jun, [j * 0.6, k * 0.6, 0]),
        ],
        rint(r, 12, 15)
      );
      segments.push(ped);
      // bifurcation into vertical and medial lobes
      const vTip = add(vert, [gauss(r, 0.018), gauss(r, 0.022), gauss(r, 0.018)]);
      const mTip = add(med, [gauss(r, 0.022), gauss(r, 0.016), gauss(r, 0.018)]);
      if (r() < 0.62) segments.push(smooth([jun, mix(jun, vTip, 0.5), vTip], rint(r, 9, 12)));
      if (r() < 0.75) segments.push(smooth([jun, mix(jun, mTip, 0.5), mTip], rint(r, 9, 12)));
      B.push('other', false, soma, segments, `mb_${side < 0 ? 'L' : 'R'}`, side);
    }
  }
}

/** Central complex: ring neurons tiling the ellipsoid-body torus. */
function buildCentralComplex(B) {
  const r = stream('central-complex');
  const N = 40;
  for (let i = 0; i < N; i++) {
    const side = i % 2 === 0 ? 1 : -1;
    const a0 = (i / N) * Math.PI * 2 + gauss(r, 0.06);
    const onRing = (a) => [
      CX.c[0] + CX.R * Math.cos(a),
      CX.c[1] + CX.r * Math.sin(a) * 0.5,
      CX.c[2] + CX.R * Math.sin(a) * 0.82,
    ];
    // soma in the dorsal pars-intercerebralis rind, well outside the ring
    const soma = [
      side * rnd(r, 0.06, 0.2) + gauss(r, 0.015),
      rnd(r, 0.36, 0.455),
      rnd(r, -0.33, -0.15),
    ];
    const entry = onRing(a0);
    const segments = [primaryNeurite(r, soma, entry, { bow: 0.45, pts: rint(r, 10, 13) })];
    // arbor follows the torus arc, which is what makes the donut legible
    const sweep = rnd(r, 0.8, 2.3) * (r() < 0.5 ? 1 : -1);
    const ctrl = [];
    const steps = 6;
    for (let k = 0; k <= steps; k++) {
      const a = a0 + (sweep * k) / steps;
      ctrl.push(add(onRing(a), mul(randUnit(r), CX.r * 0.35)));
    }
    segments.push(smooth(ctrl, rint(r, 14, 20)));
    const nSpur = rint(r, 1, 3);
    for (let k = 0; k < nSpur; k++) {
      const a = a0 + sweep * rnd(r, 0.15, 0.9);
      const base = onRing(a);
      const outDir = norm(sub(base, CX.c));
      const tip = add(add(base, mul(outDir, rnd(r, 0.02, 0.05))), mul(randUnit(r), 0.02));
      segments.push(smooth([base, mix(base, tip, 0.5), tip], rint(r, 5, 7)));
    }
    B.push('other', false, soma, segments, 'central_complex', side);
  }
}

/** Generic central-brain fill: somata in the cortical rind, arbors in the neuropil. */
function buildCentralFill(B, count) {
  const r = stream('central-fill');
  for (let i = 0; i < count; i++) {
    const d = randUnit(r);
    if (Math.abs(d[0]) < 0.12) d[0] = d[0] < 0 ? -0.12 : 0.12;
    const shell = [d[0] * CB.a[0], d[1] * CB.a[1], d[2] * CB.a[2]];
    const soma = add(CB.c, mul(shell, rnd(r, 1.03, 1.12)));
    const depth = rnd(r, 0.25, 0.62);
    const root = add(CB.c, add(mul(shell, depth), mul(randUnit(r), 0.03)));
    const segments = [primaryNeurite(r, soma, root, { bow: 0.45, pts: rint(r, 9, 13) })];
    segments.push(
      ...arborise(r, root, rnd(r, 0.06, 0.12), {
        nBranch: rint(r, 2, 5),
        tort: 0.34,
        ptsMin: 8,
        ptsMax: 14,
        childProb: 0.45,
      })
    );
    if (r() < 0.22) {
      const far = add(CB.c, [
        -Math.sign(shell[0]) * rnd(r, 0.05, 0.3),
        gauss(r, 0.12),
        gauss(r, 0.14),
      ]);
      segments.push(primaryNeurite(r, root, far, { bow: 0.6, pts: rint(r, 10, 14) }));
    }
    B.push('other', false, soma, segments, 'central_brain', Math.sign(shell[0]) || 1);
  }
}

/**
 * The dimorphic core.
 *   male   — P1-like: ~60 cells, tight postero-dorsal cluster, dense elaborate arbors
 *            that cross toward the midline (the ring neuropil).
 *   female — pC1-like: ~35 cells, cluster sits more lateral and ventral, arbors sparser
 *            and shorter, no midline crossing.
 */
const CORE = {
  male: {
    count: 60,
    cluster: (s) => [s * 0.235, 0.18, -0.44],
    clusterR: 0.05,
    target: (s) => [s * 0.105, 0.02, -0.085],
    arborR: 0.085,
    nBranch: [4, 6],
    childProb: 0.65,
    tort: 0.34,
    crossMidline: 0.55,
  },
  female: {
    count: 35,
    cluster: (s) => [s * 0.315, 0.06, -0.395],
    clusterR: 0.065,
    target: (s) => [s * 0.165, -0.05, -0.16],
    arborR: 0.06,
    nBranch: [2, 3],
    childProb: 0.28,
    tort: 0.28,
    crossMidline: 0.0,
  },
};

function buildDimorphic(B, sex) {
  const cfg = CORE[sex];
  const r = stream(`dimorphic-${sex}`);
  const ids = [];
  for (let i = 0; i < cfg.count; i++) {
    const side = i % 2 === 0 ? 1 : -1;
    const cc = cfg.cluster(side);
    const soma = add(cc, randInBall(r, cfg.clusterR));
    const tgt = add(cfg.target(side), randInBall(r, 0.045));
    const via = mix(soma, tgt, 0.45);
    via[1] += rnd(r, -0.02, 0.05);
    via[2] += rnd(r, 0.0, 0.05);
    const segments = [primaryNeurite(r, soma, tgt, { bow: 0.45, via, pts: rint(r, 12, 16) })];
    segments.push(
      ...arborise(r, tgt, cfg.arborR, {
        nBranch: rint(r, cfg.nBranch[0], cfg.nBranch[1]),
        tort: cfg.tort,
        ptsMin: 8,
        ptsMax: 14,
        childProb: cfg.childProb,
        scaleY: 0.8,
      })
    );
    if (r() < cfg.crossMidline) {
      const contra = [-side * rnd(r, 0.03, 0.13), tgt[1] + gauss(r, 0.03), tgt[2] + gauss(r, 0.04)];
      segments.push(primaryNeurite(r, tgt, contra, { bow: 0.35, pts: rint(r, 10, 13) }));
      segments.push(
        ...arborise(r, contra, cfg.arborR * 0.7, {
          nBranch: 2,
          tort: 0.4,
          ptsMin: 7,
          ptsMax: 11,
          childProb: 0.35,
        })
      );
    }
    ids.push(B.push('dimorphic', true, soma, segments, `core_${side < 0 ? 'L' : 'R'}`, side));
  }
  return ids;
}

/** Descending neurons: dendrites in the dimorphic zone, axon diving to the connective. */
function buildDescending(B, sex) {
  const r = stream(`descending-${sex}`);
  const cfg = CORE[sex];
  const ids = [];
  for (let i = 0; i < 8; i++) {
    const side = i % 2 === 0 ? 1 : -1;
    const soma = add([side * 0.245, -0.055, -0.4], [gauss(r, 0.03), gauss(r, 0.03), gauss(r, 0.035)]);
    const dend = add(cfg.target(side), randInBall(r, 0.05));
    const segments = [primaryNeurite(r, soma, dend, { bow: 0.45, pts: rint(r, 10, 13) })];
    segments.push(
      ...arborise(r, dend, 0.075, { nBranch: rint(r, 3, 4), tort: 0.36, ptsMin: 8, ptsMax: 12, childProb: 0.5 })
    );
    // long ventral axon out through the cervical connective
    const exit = add(cervical(side), [gauss(r, 0.018), 0, gauss(r, 0.018)]);
    const axon = smooth(
      [
        dend,
        add(mix(dend, exit, 0.3), [gauss(r, 0.015), 0, gauss(r, 0.02)]),
        add(mix(dend, exit, 0.65), [gauss(r, 0.012), 0, gauss(r, 0.015)]),
        exit,
      ],
      rint(r, 18, 24)
    );
    segments.push(axon);
    ids.push(B.push('descending', false, soma, segments, 'descending', side));
  }
  return ids;
}

/* ------------------------------------------------------------------ *
 * Connectivity
 * ------------------------------------------------------------------ */

function buildEdges(B, stages, sex) {
  const r = stream(`edges-${sex}`);
  const seen = new Set();
  const edges = [];
  const link = (a, b) => {
    if (a === b) return;
    const k = a * 100000 + b;
    if (seen.has(k)) return;
    seen.add(k);
    edges.push([a, b]);
  };

  const { orn, pn, lhn, dim, dn } = stages;
  const isMale = sex === 'male';

  // ORN -> PN : strong convergent fan-in (every PN reads many ORNs)
  const pnFan = isMale ? 5 : 4;
  for (const o of orn) {
    const picks = new Set();
    while (picks.size < Math.min(pnFan, pn.length)) picks.add(pn[rint(r, 0, pn.length - 1)]);
    for (const p of picks) link(o, p);
  }
  // make sure no PN is orphaned
  for (const p of pn) link(orn[rint(r, 0, orn.length - 1)], p);

  // PN -> LHN
  const lhFan = isMale ? 11 : 8;
  for (const p of pn) {
    const picks = new Set();
    while (picks.size < Math.min(lhFan, lhn.length)) picks.add(lhn[rint(r, 0, lhn.length - 1)]);
    for (const l of picks) link(p, l);
  }
  for (const l of lhn) link(pn[rint(r, 0, pn.length - 1)], l);

  // LHN -> dimorphic core
  const coreFan = isMale ? 15 : 9;
  for (const l of lhn) {
    const picks = new Set();
    while (picks.size < Math.min(coreFan, dim.length)) picks.add(dim[rint(r, 0, dim.length - 1)]);
    for (const d of picks) link(l, d);
  }
  for (const d of dim) link(lhn[rint(r, 0, lhn.length - 1)], d);

  // recurrent excitation within the core (P1/pC1 clusters are recurrently coupled)
  const recur = isMale ? 1.4 : 0.7;
  for (const d of dim) {
    const n = Math.floor(recur) + (r() < recur % 1 ? 1 : 0);
    for (let i = 0; i < n; i++) link(d, dim[rint(r, 0, dim.length - 1)]);
  }

  // dimorphic -> descending : convergent fan-in onto 8 output cells
  const perDN = isMale ? 17 : 12;
  for (const d of dn) {
    const picks = new Set();
    while (picks.size < Math.min(perDN, dim.length)) picks.add(dim[rint(r, 0, dim.length - 1)]);
    for (const s of picks) link(s, d);
  }
  for (const d of dim) if (r() < 0.25) link(d, dn[rint(r, 0, dn.length - 1)]);

  // ambient wiring: ~2 per neuron, biased to spatially near partners
  const N = B.neurons.length;
  for (let i = 0; i < N; i++) {
    const si = B.neurons[i].soma;
    for (let k = 0; k < 2; k++) {
      let best = -1;
      let bestD = Infinity;
      for (let t = 0; t < 6; t++) {
        const j = rint(r, 0, N - 1);
        if (j === i) continue;
        const d = dist(si, B.neurons[j].soma);
        if (d < bestD) {
          bestD = d;
          best = j;
        }
      }
      if (best >= 0) link(i, best);
    }
  }
  return edges;
}

/* ------------------------------------------------------------------ *
 * Assembly
 * ------------------------------------------------------------------ */

const r3 = (v) => Math.round(v * 1000) / 1000;

function clampPt(p) {
  return [
    Math.max(BOUNDS[0][0], Math.min(BOUNDS[1][0], p[0])),
    Math.max(BOUNDS[0][1], Math.min(BOUNDS[1][1], p[1])),
    Math.max(BOUNDS[0][2], Math.min(BOUNDS[1][2], p[2])),
  ];
}

function buildBrain(sex) {
  const B = makeBuilder();

  // --- base anatomy: identical for both sexes (name-addressed RNG streams) ---
  const gloms = new Map();
  const gr = stream('glomeruli');
  for (const side of SIDES) gloms.set(side, glomeruli(side, gr));

  buildOpticLobes(B);
  buildALLocals(B, gloms);
  buildMushroomBodies(B);
  buildCentralComplex(B);
  buildCentralFill(B, 110);

  // --- cVA pathway ---
  const orn = buildORNs(B, gloms);
  const pn = buildPNs(B, gloms);
  buildLHExtra(B, sex === 'male' ? 30 : 22); // male: slightly denser lateral horn
  const cfg = CORE[sex];
  const lhn = buildLHNs(B, cfg.target);
  const dim = buildDimorphic(B, sex);
  const dn = buildDescending(B, sex);

  const edges = buildEdges(B, { orn, pn, lhn, dim, dn }, sex);
  const pathway = [...orn, ...pn, ...lhn, ...dim, ...dn];

  // --- serialise ---
  const neurons = B.neurons.map((n) => ({
    id: n.id,
    type: n.type,
    dimorphic: n.dimorphic,
    soma: clampPt(n.soma).map(r3),
    segments: n.segments.map((seg) => seg.map((p) => clampPt(p).map(r3))),
  }));

  return {
    json: { meta: { sex, bounds: BOUNDS }, neurons, edges, pathway },
    internal: B,
    stages: { orn, pn, lhn, dim, dn },
  };
}

/* ------------------------------------------------------------------ *
 * Report / sanity checks
 * ------------------------------------------------------------------ */

function report(sex, brain, bytes) {
  const { json, internal } = brain;
  const byType = {};
  let segCount = 0;
  let ptCount = 0;
  let minPts = Infinity;
  let maxPts = 0;
  for (const n of json.neurons) {
    byType[n.type] = (byType[n.type] || 0) + 1;
    for (const s of n.segments) {
      segCount++;
      ptCount += s.length;
      minPts = Math.min(minPts, s.length);
      maxPts = Math.max(maxPts, s.length);
    }
  }

  // bounds check
  const bb = [
    [Infinity, Infinity, Infinity],
    [-Infinity, -Infinity, -Infinity],
  ];
  for (const n of json.neurons) {
    for (const s of n.segments)
      for (const p of s)
        for (let i = 0; i < 3; i++) {
          bb[0][i] = Math.min(bb[0][i], p[i]);
          bb[1][i] = Math.max(bb[1][i], p[i]);
        }
  }

  // per-region bbox + soma-outside-arbor check
  const regions = new Map();
  internal.neurons.forEach((n, i) => {
    const m = internal.meta[i];
    let R = regions.get(m.region);
    if (!R) {
      R = {
        n: 0,
        bb: [
          [Infinity, Infinity, Infinity],
          [-Infinity, -Infinity, -Infinity],
        ],
        somaSum: [0, 0, 0],
        arborSum: [0, 0, 0],
        arborN: 0,
        somas: [],
        arbors: [],
      };
      regions.set(m.region, R);
    }
    R.n++;
    R.somas.push(n.soma);
    for (let i2 = 0; i2 < 3; i2++) R.somaSum[i2] += n.soma[i2];
    for (const p of m.arborPts) {
      R.arbors.push(p);
      R.arborN++;
      for (let i2 = 0; i2 < 3; i2++) {
        R.arborSum[i2] += p[i2];
        R.bb[0][i2] = Math.min(R.bb[0][i2], p[i2]);
        R.bb[1][i2] = Math.max(R.bb[1][i2], p[i2]);
      }
    }
    for (let i2 = 0; i2 < 3; i2++) {
      R.bb[0][i2] = Math.min(R.bb[0][i2], n.soma[i2]);
      R.bb[1][i2] = Math.max(R.bb[1][i2], n.soma[i2]);
    }
  });

  const f = (v) => v.toFixed(3);
  const lines = [];
  lines.push(`\n=== ${sex.toUpperCase()} ===`);
  lines.push(`file: data/${sex}.json   ${(bytes / 1048576).toFixed(2)} MB (${bytes} bytes)`);
  lines.push(`neurons: ${json.neurons.length}`);
  for (const k of Object.keys(byType).sort()) lines.push(`   ${k.padEnd(11)} ${byType[k]}`);
  lines.push(`dimorphic flagged: ${json.neurons.filter((n) => n.dimorphic).length}`);
  lines.push(`segments: ${segCount}  points: ${ptCount}  pts/seg min ${minPts} max ${maxPts}`);
  lines.push(`edges: ${json.edges.length}  (${(json.edges.length / json.neurons.length).toFixed(2)} per neuron)`);
  lines.push(`pathway length: ${json.pathway.length}`);
  lines.push(
    `global bbox: x[${f(bb[0][0])},${f(bb[1][0])}] y[${f(bb[0][1])},${f(bb[1][1])}] z[${f(bb[0][2])},${f(bb[1][2])}]`
  );

  lines.push('region bboxes and soma/arbor radial separation:');
  let violations = 0;
  for (const [name, R] of [...regions].sort()) {
    const cen = [
      (R.arborSum[0] / Math.max(1, R.arborN) + R.somaSum[0] / R.n) / 2,
      (R.arborSum[1] / Math.max(1, R.arborN) + R.somaSum[1] / R.n) / 2,
      (R.arborSum[2] / Math.max(1, R.arborN) + R.somaSum[2] / R.n) / 2,
    ];
    const arborCen = mul(R.arborSum, 1 / Math.max(1, R.arborN));
    const mS = R.somas.reduce((a, p) => a + dist(p, arborCen), 0) / R.n;
    const mA = R.arbors.reduce((a, p) => a + dist(p, arborCen), 0) / Math.max(1, R.arborN);
    const ok = mS > mA;
    if (!ok) violations++;
    lines.push(
      `   ${name.padEnd(17)} n=${String(R.n).padStart(3)}  ` +
        `x[${f(R.bb[0][0])},${f(R.bb[1][0])}] y[${f(R.bb[0][1])},${f(R.bb[1][1])}] z[${f(R.bb[0][2])},${f(R.bb[1][2])}]  ` +
        `soma r=${f(mS)} vs arbor r=${f(mA)} ${ok ? 'OK' : 'FAIL'}`
    );
    void cen;
  }
  lines.push(`soma-outside-arbor: ${regions.size - violations}/${regions.size} regions OK`);

  // global: is each neuron's soma farther from its own arbor centroid than its arbor is?
  let nOk = 0;
  internal.neurons.forEach((n, i) => {
    const pts = internal.meta[i].arborPts;
    if (!pts.length) return;
    const c = mul(
      pts.reduce((a, p) => add(a, p), [0, 0, 0]),
      1 / pts.length
    );
    const spread = pts.reduce((a, p) => a + dist(p, c), 0) / pts.length;
    if (dist(n.soma, c) > spread) nOk++;
  });
  lines.push(
    `per-neuron soma outside own arbor: ${nOk}/${internal.neurons.length} (${((100 * nOk) / internal.neurons.length).toFixed(1)}%)`
  );
  return lines.join('\n');
}

/* ------------------------------------------------------------------ *
 * Main
 * ------------------------------------------------------------------ */

mkdirSync(DATA, { recursive: true });
const out = [];
for (const sex of ['male', 'female']) {
  const brain = buildBrain(sex);
  const text = JSON.stringify(brain.json);
  const path = resolve(DATA, `${sex}.json`);
  writeFileSync(path, text);
  out.push(report(sex, brain, Buffer.byteLength(text)));
}
console.log(out.join('\n'));
console.log('\nwrote data/male.json, data/female.json');
