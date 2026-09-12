/*
 * main.js — Same Smell.
 *
 * Two scenes, two cameras locked to one orbit rig, one canvas split into two
 * scissored viewports so both brains pass through a single bloom chain and read
 * as one image. Morphology prefers data/real/*.json, then data/*.json, then the
 * built-in procedural generator, so the page is never blank.
 *
 * Modes (LAB / VERSUS / SWIPE) live in modes.js and are swapped in and out
 * through setMode(); each one owns and tears down whatever it adds.
 */

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { Pass } from 'three/addons/postprocessing/Pass.js';

import { createBrainView, generateFallbackBrain, validateGraph } from './neuro.js';
import { createSim } from './sim.js';
import { createUI } from './ui.js';
import { selectMode, MODE_FACTORIES } from './modes.js';

const ACCENT = { male: '#e0784a', female: '#3fd2c7' };
const SIDES = ['male', 'female'];
const FOV = 36;
const BG = 0x050506;
const STACK_BREAKPOINT = 768;

const TAN_HALF_FOV = Math.tan((FOV * Math.PI) / 360);

/* ------------------------------------------------------------- dual view */

class DualViewPass extends Pass {
  constructor(scenes, cameras) {
    super();
    this.scenes = scenes;
    this.cameras = cameras;
    this.needsSwap = false;
    this.stacked = false;
    this.clearColor = new THREE.Color(BG);
    this._size = new THREE.Vector2();
    this._halves = [
      { scene: null, camera: null, x: 0, y: 0, w: 1, h: 1 },
      { scene: null, camera: null, x: 0, y: 0, w: 1, h: 1 },
    ];
  }

  layout(w, h) {
    const a = this._halves[0];
    const b = this._halves[1];
    a.scene = this.scenes.male;
    b.scene = this.scenes.female;
    a.camera = this.cameras.male;
    b.camera = this.cameras.female;
    if (this.stacked) {
      // male on top: GL viewport origin is bottom-left, so male takes the upper half
      a.x = 0;
      a.y = Math.round(h / 2);
      a.w = w;
      a.h = h - Math.round(h / 2);
      b.x = 0;
      b.y = 0;
      b.w = w;
      b.h = Math.round(h / 2);
    } else {
      const half = Math.round(w / 2);
      a.x = 0;
      a.y = 0;
      a.w = half;
      a.h = h;
      b.x = half;
      b.y = 0;
      b.w = w - half;
      b.h = h;
    }
    return this._halves;
  }

  render(renderer, writeBuffer, readBuffer) {
    const target = this.renderToScreen ? null : readBuffer;
    let w;
    let h;
    if (target) {
      w = target.width;
      h = target.height;
    } else {
      renderer.getDrawingBufferSize(this._size);
      w = this._size.x;
      h = this._size.y;
    }

    const prevAutoClear = renderer.autoClear;
    renderer.autoClear = false;
    renderer.setClearColor(this.clearColor, 1);

    // renderer.setViewport/setScissor only affect the default framebuffer; render
    // targets read their own .viewport/.scissor at bind time, so set those instead
    // and re-bind before each half.
    const applyRegion = (x, y, rw, rh, scissorOn) => {
      if (target) {
        target.viewport.set(x, y, rw, rh);
        target.scissor.set(x, y, rw, rh);
        target.scissorTest = scissorOn;
        renderer.setRenderTarget(target);
      } else {
        renderer.setRenderTarget(null);
        renderer.setViewport(x, y, rw, rh);
        renderer.setScissor(x, y, rw, rh);
        renderer.setScissorTest(scissorOn);
      }
    };

    applyRegion(0, 0, w, h, false);
    renderer.clear(true, true, true);

    const halves = this.layout(w, h);
    for (let i = 0; i < halves.length; i++) {
      const v = halves[i];
      applyRegion(v.x, v.y, v.w, v.h, true);
      renderer.render(v.scene, v.camera);
    }
    applyRegion(0, 0, w, h, false);
    renderer.autoClear = prevAutoClear;
  }
}

/* ------------------------------------------------------------- data load */

async function loadGraph(sex) {
  const tiers = [
    { url: 'data/real/' + sex + '.json', source: 'real' },
    { url: 'data/' + sex + '.json', source: 'data' },
  ];
  for (const tier of tiers) {
    try {
      const res = await fetch(tier.url, { cache: 'no-cache' });
      if (res && res.ok) {
        const json = await res.json();
        if (validateGraph(json)) return { graph: json, source: tier.source };
      }
    } catch (err) {
      // fall through to the next tier
    }
  }
  return { graph: generateFallbackBrain(sex), source: 'procedural' };
}

/* ------------------------------------------------------------- boot */

async function boot() {
  const canvas = document.getElementById('stage');

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
      stencil: false,
    });
  } catch (err) {
    return null;
  }

  renderer.setClearColor(BG, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.autoClear = false;

  // one camera per half: they share every orbit value and differ only by a
  // screen-space view offset, so the BODY STAGE can push each brain outward
  const cameras = {
    male: new THREE.PerspectiveCamera(FOV, 1, 0.05, 60),
    female: new THREE.PerspectiveCamera(FOV, 1, 0.05, 60),
  };

  const scenes = { male: new THREE.Scene(), female: new THREE.Scene() };
  const views = {};
  const sims = {};
  const dimorphicIds = { male: new Set(), female: new Set() };
  const sources = {};

  const loaded = await Promise.all(SIDES.map((s) => loadGraph(s)));

  const ui = createUI({
    onPuffStart: () => mode && mode.puffStart(),
    onPuffEnd: () => mode && mode.puffEnd(),
    onMode: (name) => setMode(name),
  });

  for (let i = 0; i < SIDES.length; i++) {
    const side = SIDES[i];
    const graph = loaded[i].graph;
    sources[side] = loaded[i].source;

    const view = createBrainView(graph, { accent: ACCENT[side], base: '#7e93a8' });
    views[side] = view;
    scenes[side].add(view.group);

    for (const n of graph.neurons) {
      if (n.dimorphic || n.type === 'dimorphic') dimorphicIds[side].add(Number(n.id));
    }

    if (loaded[i].source === 'real') ui.setBadge(side, 'REAL DATA');
  }

  if (sources.male === 'real' && sources.female === 'real') {
    const staged = document.getElementById('real-staged');
    const next = document.getElementById('real-next');
    if (staged) {
      staged.textContent =
        'The neuron skeletons on screen are traced from the published connectomes: the ' +
        'male from the MaleCNS v1.0 release (Janelia and Google Research, CC-BY), the ' +
        'female from the FlyWire public release, downsampled to run in a browser. The ' +
        'edges between them are real reported connections. The dynamics are still a ' +
        'simplified leaky integrate-and-fire, and the timing is stretched so the cascade ' +
        'is legible to a human eye. Spike counts here are illustrative, not measured.';
    }
    if (next) {
      next.textContent =
        'Synapse-count-weighted connections, and the SWIPE, REELS and VERSUS modes, where ' +
        'these two brains judge dating profiles, doomscroll, and play each other at Pong.';
    }
  }

  /* ---- composer ---- */

  const drawSize = new THREE.Vector2();
  renderer.getDrawingBufferSize(drawSize);

  const rt = new THREE.WebGLRenderTarget(
    Math.max(2, drawSize.x),
    Math.max(2, drawSize.y),
    { type: THREE.HalfFloatType, samples: 0, depthBuffer: true, stencilBuffer: false }
  );

  const composer = new EffectComposer(renderer, rt);
  const dualPass = new DualViewPass(scenes, cameras);
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.62, 0.5, 0.6);
  const outputPass = new OutputPass();
  composer.addPass(dualPass);
  composer.addPass(bloom);
  composer.addPass(outputPass);

  /* ---- camera rig: damped orbit + idle drift ---- */

  const rig = {
    yaw: -0.5,
    pitch: 0.17,
    dolly: 1,
    yawT: -0.5,
    pitchT: 0.17,
    dollyT: 1,
    fit: 5.2,
    idle: 3,
    drift: 0,
  };
  const target = new THREE.Vector3(0, 0.015, 0);

  let stacked = false;
  let viewW = 1;
  let viewH = 1;

  /* Framing presets. A mode asks for one; the camera pair honours it with a
   * screen-space view offset plus a pull-back, so the dual-view itself never
   * changes shape. `offX` pushes each brain away from the centre hairline,
   * `offY` lifts it to make room for what sits below. */
  const FRAMING = {
    default: { fit: 1.0, offX: 0, offY: 0 },
    bodies: { fit: 1.2, offX: 0.1, offY: 0.11 },
    sides: { fit: 1.16, offX: 0.19, offY: 0 },
  };
  const framing = { fit: 1, offX: 0, offY: 0 };
  const framingT = { fit: 1, offX: 0, offY: 0 };

  function setFraming(name) {
    const f = FRAMING[name] || FRAMING.default;
    framingT.fit = f.fit;
    framingT.offX = f.offX;
    framingT.offY = f.offY;
  }

  function applyFraming() {
    for (const s of SIDES) {
      const cam = cameras[s];
      const sx = stacked ? 0 : (s === 'male' ? 1 : -1) * framing.offX;
      const sy = stacked ? framing.offY * 0.45 : framing.offY;
      if (Math.abs(sx) < 1e-4 && Math.abs(sy) < 1e-4) {
        cam.clearViewOffset();
      } else {
        cam.setViewOffset(viewW, viewH, sx * viewW, sy * viewH, viewW, viewH);
      }
    }
  }

  function resize() {
    const w = Math.max(1, window.innerWidth);
    const h = Math.max(1, window.innerHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth > 1600 ? 1.5 : 2);

    stacked = w < STACK_BREAKPOINT;
    dualPass.stacked = stacked;

    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    composer.setPixelRatio(dpr);
    composer.setSize(w, h);
    bloom.setSize(Math.round(w * dpr * 0.5), Math.round(h * dpr * 0.5));

    viewW = stacked ? w : w / 2;
    viewH = stacked ? h / 2 : h;

    const aspect = viewW / viewH;
    for (const s of SIDES) {
      cameras[s].aspect = aspect;
      cameras[s].updateProjectionMatrix();
    }

    // frame a 2.0 x 1.1 x 1.2 brain in one viewport, whichever axis binds
    const halfW = 1.34;
    const halfH = 0.8;
    const dV = halfH / TAN_HALF_FOV;
    const dH = halfW / (TAN_HALF_FOV * aspect);
    rig.fit = Math.max(dV, dH) * 1.05;

    const px = (viewH * dpr) / (2 * TAN_HALF_FOV);
    for (const s of SIDES) views[s].setSomaScale(px);
    applyFraming();
  }

  window.addEventListener('resize', resize, { passive: true });
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', resize, { passive: true });
  }
  resize();

  /* ---- pointer input ---- */

  const pointers = new Map();
  let drag = null;
  let pinch = 0;
  const ndc = new THREE.Vector2();

  function sideAt(px, py) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    return stacked ? (py < h / 2 ? 'male' : 'female') : px < w / 2 ? 'male' : 'female';
  }

  function toNdc(px, py, side) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (stacked) {
      const top = side === 'male' ? 0 : h / 2;
      ndc.set((px / w) * 2 - 1, -(((py - top) / (h / 2)) * 2 - 1));
    } else {
      const left = side === 'male' ? 0 : w / 2;
      ndc.set(((px - left) / (w / 2)) * 2 - 1, -((py / h) * 2 - 1));
    }
    return ndc;
  }

  function pickAt(px, py) {
    const side = sideAt(px, py);
    const id = views[side].pick(toNdc(px, py, side), cameras[side]);
    return { side, id };
  }

  canvas.addEventListener(
    'pointerdown',
    (e) => {
      canvas.setPointerCapture && canvas.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      rig.idle = 0;
      if (pointers.size === 1) {
        drag = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: 0 };
        canvas.classList.add('is-dragging');
      } else if (pointers.size === 2) {
        const p = [...pointers.values()];
        pinch = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y) || 1;
        drag = null;
      }
      ui.closePanel();
    },
    { passive: true }
  );

  let hoverClock = 0;

  canvas.addEventListener(
    'pointermove',
    (e) => {
      const rec = pointers.get(e.pointerId);
      if (rec) {
        rec.x = e.clientX;
        rec.y = e.clientY;
      }

      if (pointers.size === 2) {
        const p = [...pointers.values()];
        const d = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y) || 1;
        if (pinch > 0) rig.dollyT = clamp(rig.dollyT * (pinch / d), 0.52, 1.95);
        pinch = d;
        rig.idle = 0;
        return;
      }

      if (drag && e.pointerId === drag.id) {
        const dx = e.clientX - drag.x;
        const dy = e.clientY - drag.y;
        drag.x = e.clientX;
        drag.y = e.clientY;
        drag.moved += Math.abs(dx) + Math.abs(dy);
        rig.yawT -= dx * 0.0052;
        rig.pitchT = clamp(rig.pitchT + dy * 0.0042, -0.72, 0.86);
        rig.idle = 0;
        return;
      }

      // cheap hover probe so glowing somata advertise that they are clickable
      if (e.pointerType === 'mouse' && hoverClock <= 0) {
        hoverClock = 0.07;
        const hit = pickAt(e.clientX, e.clientY);
        canvas.classList.toggle('is-over-soma', hit.id >= 0);
      }
    },
    { passive: true }
  );

  function endPointer(e) {
    const wasDrag = drag && e.pointerId === drag.id;
    const moved = wasDrag ? drag.moved : 999;
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinch = 0;
    if (wasDrag) {
      drag = null;
      canvas.classList.remove('is-dragging');
      if (moved < 7) {
        const hit = pickAt(e.clientX, e.clientY);
        if (hit.id >= 0) {
          const dim = dimorphicIds[hit.side].has(hit.id);
          sims[hit.side].fire(hit.id);
          views[hit.side].halo(hit.id, dim ? 0.72 : 0.4);
          views[hit.side].spike(hit.id, {
            amp: dim ? 1.25 : 1.0,
            glow: dim ? 1.2 : 0.9,
            duration: dim ? 0.62 : 0.5,
            glowDecay: dim ? 1.3 : 2.2,
            core: dim,
          });
          if (mode && mode.pick) mode.pick(hit.side, hit.id, dim);
        }
      }
    }
  }

  canvas.addEventListener('pointerup', endPointer, { passive: true });
  canvas.addEventListener('pointercancel', endPointer, { passive: true });

  canvas.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      rig.dollyT = clamp(rig.dollyT * (1 + e.deltaY * 0.0013), 0.52, 1.95);
      rig.idle = 0;
    },
    { passive: false }
  );

  /* ---- spike routing ---- */

  function makeSpikeHandler(side) {
    const view = views[side];
    let ornTick = 0;
    return (id, type, dim, visual) => {
      if (mode && mode.onSpike) mode.onSpike(side, id, type, dim, visual);
      if (type === 'other') {
        // in VERSUS the optic-lobe response IS the story, so it runs hot
        const hot = visual && mode && mode.boostVisual;
        view.spike(id, {
          amp: hot ? 0.85 : 0.3,
          glow: hot ? 0.7 : 0.16,
          duration: hot ? 0.5 : 0.8,
          width: hot ? 0.2 : 0.28,
          glowDecay: hot ? 2.6 : 3.4,
        });
        return;
      }
      if (type === 'orn') {
        ornTick++;
        view.spike(id, {
          amp: 0.82,
          glow: 0.62,
          duration: 0.52,
          width: 0.2,
          glowDecay: 3.0,
          pulse: ornTick % 2 === 0,
        });
        return;
      }
      if (dim) {
        view.spike(id, {
          amp: 1.15,
          glow: 1.15,
          duration: 0.62,
          width: 0.22,
          glowDecay: 1.5,
          core: true,
        });
        view.markDimorphic(id);
        return;
      }
      if (type === 'descending') {
        view.spike(id, {
          amp: 1.3,
          glow: 1.0,
          duration: 0.8,
          width: 0.2,
          glowDecay: 1.1,
        });
        return;
      }
      view.spike(id, { amp: 1.0, glow: 0.82, duration: 0.56, width: 0.2 });
    };
  }

  for (let i = 0; i < SIDES.length; i++) {
    const side = SIDES[i];
    sims[side] = createSim(loaded[i].graph, {
      onSpike: makeSpikeHandler(side),
      onVerdict: () => mode && mode.verdict && mode.verdict(side),
    });
  }

  /* ---- mode ---- */

  const params = new URLSearchParams(location.search);
  const ctx = { views, sims, ui, scenes, cameras, sources, accents: ACCENT, setFraming };

  let mode = null;

  function setMode(name) {
    const next = MODE_FACTORIES[name] ? name : 'lab';
    if (mode && mode.name === next) return;
    if (mode && mode.exit) mode.exit();
    for (const s of SIDES) sims[s].reset();
    ui.setMode(next);
    mode = selectMode(next, ctx);
    mode.enter();
    const url = new URL(location.href);
    if (next === 'lab') url.searchParams.delete('mode');
    else url.searchParams.set('mode', next);
    history.replaceState(null, '', url.toString());
  }

  setMode(params.get('mode') || 'lab');

  // ?autopuff[=seconds] — demo mode: synthesizes a real press-and-hold on the
  // puff button on a loop, so screen recorders (which can only click) still
  // capture the full cascade with the ring animation.
  if (params.get('autopuff') !== null) {
    const periodS = Math.max(6, parseFloat(params.get('autopuff')) || 9);
    const puffEl = document.getElementById('puff');
    const synth = (kind) =>
      puffEl &&
      puffEl.dispatchEvent(
        new PointerEvent(kind, { bubbles: true, cancelable: true, pointerId: 7, isPrimary: true })
      );
    const onePuff = () => {
      synth('pointerdown');
      setTimeout(() => synth('pointerup'), 1600);
    };
    setTimeout(onePuff, 2500);
    setInterval(onePuff, periodS * 1000);
  }

  /* ---- loop ---- */

  let clock = 0;
  let last = performance.now();

  function updateCamera(dt) {
    rig.idle += dt;
    if (rig.idle > 2.4) {
      const ramp = Math.min(1, (rig.idle - 2.4) / 2.2);
      rig.drift += dt * 0.052 * ramp;
      rig.yawT += dt * 0.048 * ramp;
      rig.pitchT += (0.17 + Math.sin(clock * 0.17) * 0.075 - rig.pitchT) * dt * 0.35 * ramp;
    }

    const k = 1 - Math.exp(-dt * 5.2);
    rig.yaw += (rig.yawT - rig.yaw) * k;
    rig.pitch += (rig.pitchT - rig.pitch) * k;
    rig.dolly += (rig.dollyT - rig.dolly) * (1 - Math.exp(-dt * 4.2));

    // framing eases toward whatever the current mode asked for
    const fk = 1 - Math.exp(-dt * 3.4);
    framing.fit += (framingT.fit - framing.fit) * fk;
    framing.offX += (framingT.offX - framing.offX) * fk;
    framing.offY += (framingT.offY - framing.offY) * fk;
    applyFraming();

    const dist = rig.fit * rig.dolly * framing.fit;
    const cp = Math.cos(rig.pitch);
    const px = Math.sin(rig.yaw) * cp * dist;
    const py = Math.sin(rig.pitch) * dist + 0.04;
    const pz = Math.cos(rig.yaw) * cp * dist;
    for (const s of SIDES) {
      cameras[s].position.set(px, py, pz);
      cameras[s].lookAt(target);
    }

    for (const s of SIDES) views[s].setFog(dist - 0.95);
  }

  function frame(now) {
    requestAnimationFrame(frame);
    const dt = Math.min(Math.max((now - last) / 1000, 0), 0.05);
    last = now;
    clock += dt;
    if (hoverClock > 0) hoverClock -= dt;

    // a mode may slow the world down (VERSUS match point); chrome stays real-time
    const ts = mode && mode.timeScale != null ? mode.timeScale : 1;
    const sdt = dt * ts;

    ui.update(dt);
    if (mode) mode.update(sdt, dt);

    sims.male.step(sdt);
    sims.female.step(sdt);
    views.male.update(sdt, clock);
    views.female.update(sdt, clock);

    updateCamera(dt);
    composer.render(dt);
  }

  if (ui.debug) {
    ui.setDebugSuffix(
      sources.male +
        '  n' +
        (views.male.stats.neurons + views.female.stats.neurons) +
        '  v' +
        Math.round(
          (views.male.stats.baseVerts +
            views.male.stats.dimVerts +
            views.female.stats.baseVerts +
            views.female.stats.dimVerts) /
            1000
        ) +
        'k'
    );
  }

  ui.bootDone();
  requestAnimationFrame(frame);
  return true;
}

function clamp(v, a, b) {
  return v < a ? a : v > b ? b : v;
}

boot().catch(() => {
  const el = document.getElementById('boot');
  if (el) el.textContent = 'WebGL unavailable';
});
