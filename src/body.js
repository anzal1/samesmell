/*
 * body.js — the BODY STAGE.
 *
 * A stylised low-poly fly (~310 triangles, entirely procedural) standing on a
 * soft ground strip. The animation state machine is driven ONLY by real
 * descending-neuron output from that side's sim: nothing here runs on a
 * scripted timeline except the idle loop. Every pose is a transform on a
 * pre-built node, so no geometry is ever rebuilt.
 *
 *   createBodyStage({ sex, accent, facing }) -> { group, update(dt,t), trigger(), dispose() }
 */

import * as THREE from 'three';

/* ------------------------------------------------------------- materials */

const CHITIN_VERT = /* glsl */ `
  varying vec3 vN;
  varying vec3 vV;
  void main() {
    vN = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vV = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const CHITIN_FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uBody;
  uniform vec3 uAccent;
  uniform float uHeat;     // rises while the body is acting on a spike burst
  uniform float uEmit;     // 0 chitin, 1 compound eye
  varying vec3 vN;
  varying vec3 vV;
  void main() {
    vec3 L = normalize(vec3(0.32, 0.88, 0.36));
    float d = max(dot(vN, L), 0.0);
    // tight rim: a silhouette highlight, not a wash over the whole body
    float rim = pow(1.0 - max(dot(vN, vV), 0.0), 4.0);
    float spec = pow(d, 18.0);
    vec3 c = uBody * (0.22 + 0.95 * d);
    c += uAccent * (rim * (0.5 + uHeat * 1.2) + spec * 0.35 + d * d * (0.07 + uHeat * 0.6));
    // eyes sit just under the bloom threshold: bright enough to read as the
    // head, not so bright they blow out into a white ball
    c = mix(c, uAccent * (0.22 + 0.42 * d) + vec3(rim * 0.22), uEmit);
    gl_FragColor = vec4(c, 1.0);
  }
`;

const WING_VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const WING_FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uColor;
  uniform float uOpacity;
  varying vec2 vUv;
  void main() {
    float r = length(vUv - 0.5) * 2.0;
    float membrane = mix(0.10, 0.26, r);
    float edge = smoothstep(0.8, 1.0, r) * 0.7;
    float a = (membrane + edge) * uOpacity;
    gl_FragColor = vec4(uColor * a, a);
  }
`;

const GROUND_VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const GROUND_FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uColor;
  uniform float uOpacity;
  varying vec2 vUv;
  void main() {
    vec2 p = (vUv - 0.5) * 2.0;
    float e = 1.0 - clamp(length(vec2(p.x * 0.62, p.y)), 0.0, 1.0);
    float glow = pow(e, 2.1) * 0.5;
    float line = smoothstep(0.055, 0.0, abs(p.y)) * pow(1.0 - abs(p.x), 1.6);
    float a = (glow * 0.42 + line * 0.55) * uOpacity;
    gl_FragColor = vec4(uColor * a, a);
  }
`;

/* ------------------------------------------------------------- fly build */

const LEG_ANCHORS = [
  // [x, y, z, splayOut, splayBack]
  [0.105, -0.055, 0.135, 0.62, 0.5],
  [0.115, -0.06, -0.005, 0.78, 0.0],
  [0.105, -0.055, -0.13, 0.66, -0.55],
];

function buildLeg(mat, side, anchor, geos) {
  const [x, y, z, out, back] = anchor;
  const root = new THREE.Group();
  root.position.set(x * side, y, z);

  const femur = new THREE.Mesh(geos.femur, mat);
  femur.position.y = -0.055;
  root.add(femur);

  const knee = new THREE.Group();
  knee.position.y = -0.11;
  root.add(knee);

  const tibia = new THREE.Mesh(geos.tibia, mat);
  tibia.position.y = -0.05;
  knee.add(tibia);

  root.rotation.z = -out * side * 0.55;
  root.rotation.x = back * 0.35;
  knee.rotation.x = -0.55;

  return { root, knee, rest: { z: root.rotation.z, x: root.rotation.x }, kneeRest: -0.55 };
}

function buildFly(accent) {
  const group = new THREE.Group();

  const uHeat = { value: 0 };
  const chitin = new THREE.ShaderMaterial({
    uniforms: {
      uBody: { value: new THREE.Color('#20262e') },
      uAccent: { value: new THREE.Color(accent) },
      uHeat,
      uEmit: { value: 0 },
    },
    vertexShader: CHITIN_VERT,
    fragmentShader: CHITIN_FRAG,
  });

  // compound eyes read as the one bright feature, which is what makes the
  // silhouette legible as a fly at this size
  const eyeMat = new THREE.ShaderMaterial({
    uniforms: {
      uBody: { value: new THREE.Color('#20262e') },
      uAccent: { value: new THREE.Color(accent).lerp(new THREE.Color('#ffffff'), 0.25) },
      uHeat,
      uEmit: { value: 1 },
    },
    vertexShader: CHITIN_VERT,
    fragmentShader: CHITIN_FRAG,
  });

  const wingMat = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(accent).lerp(new THREE.Color('#ffffff'), 0.45) },
      uOpacity: { value: 1 },
    },
    vertexShader: WING_VERT,
    fragmentShader: WING_FRAG,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });

  /* geometry (built once per fly, disposed with it) */
  const geos = {
    blob: new THREE.IcosahedronGeometry(1, 1), // 80 tris
    nub: new THREE.IcosahedronGeometry(1, 0), // 20 tris
    femur: new THREE.CylinderGeometry(0.013, 0.009, 0.11, 3, 1, true), // 6 tris
    tibia: new THREE.CylinderGeometry(0.009, 0.004, 0.1, 3, 1, true), // 6 tris
    wing: (() => {
      const g = new THREE.CircleGeometry(1, 8); // 8 tris
      g.rotateX(-Math.PI / 2);
      g.translate(0, 0, -1);
      g.scale(0.075, 1, 0.29);
      return g;
    })(),
  };

  // body: the node everything poses against (bob, crouch, thrust)
  const body = new THREE.Group();
  group.add(body);

  const abdomen = new THREE.Mesh(geos.blob, chitin);
  abdomen.scale.set(0.082, 0.079, 0.2);
  abdomen.position.set(0, 0.002, -0.21);
  body.add(abdomen);

  const thorax = new THREE.Mesh(geos.blob, chitin);
  thorax.scale.set(0.094, 0.09, 0.105);
  thorax.position.set(0, 0.018, 0.01);
  body.add(thorax);

  const head = new THREE.Group();
  head.position.set(0, 0.038, 0.13);
  body.add(head);

  const skull = new THREE.Mesh(geos.nub, chitin);
  skull.scale.set(0.046, 0.046, 0.042);
  head.add(skull);

  const eyes = [];
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(geos.nub, eyeMat);
    eye.scale.set(0.046, 0.056, 0.046);
    eye.position.set(0.04 * s, 0.008, 0.008);
    head.add(eye);
    eyes.push(eye);
  }

  const wings = [];
  for (const s of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(0.028 * s, 0.075, -0.015);
    const mesh = new THREE.Mesh(geos.wing, wingMat);
    pivot.add(mesh);
    // folded back over the abdomen at rest
    pivot.rotation.y = -0.16 * s;
    pivot.rotation.z = 0.1 * s;
    body.add(pivot);
    wings.push({ pivot, restY: pivot.rotation.y, restZ: pivot.rotation.z, side: s });
  }

  const legs = [];
  for (const s of [-1, 1]) {
    for (const anchor of LEG_ANCHORS) {
      const leg = buildLeg(chitin, s, anchor, geos);
      leg.side = s;
      body.add(leg.root);
      legs.push(leg);
    }
  }

  return { group, body, head, wings, legs, chitin, eyeMat, wingMat, geos, eyes };
}

/* ------------------------------------------------------------- stage */

export function createBodyStage(opts) {
  const sex = opts.sex;
  const accent = opts.accent;
  const facing = opts.facing == null ? 1 : opts.facing; // +1 faces +x, -1 faces -x
  const male = sex === 'male';

  const group = new THREE.Group();

  /* ground strip */
  const groundMat = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(accent).lerp(new THREE.Color('#8fa3b5'), 0.55) },
      uOpacity: { value: 0 },
    },
    vertexShader: GROUND_VERT,
    fragmentShader: GROUND_FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
  const groundGeo = new THREE.PlaneGeometry(1.3, 0.66);
  groundGeo.rotateX(-Math.PI / 2);
  const ground = new THREE.Mesh(groundGeo, groundMat);
  group.add(ground);

  /* fly */
  const fly = buildFly(accent);
  fly.group.rotation.y = (facing * Math.PI) / 2;
  fly.group.scale.setScalar(1);
  group.add(fly.group);

  /* --------------------------------------------------------- state */

  let state = 'idle';
  let stateT = 0;
  let stateDur = 0;
  let heat = 0;
  let gait = 0;
  let groomIn = 3 + Math.random() * 4;
  let fade = 0; // stage-wide fade-in so nothing pops
  let yaw = 0;
  let yawT = 0;
  let pending = 0; // descending spikes seen while busy

  const LUNGE = [0.16, 0.16, 0.12, 0.5]; // crouch, thrust, hold, recover
  const PAUSE = [0.22, 1.05, 0.5]; // freeze, groom, settle

  function enter(next) {
    state = next;
    stateT = 0;
    stateDur =
      next === 'orient'
        ? 0.34
        : next === 'lunge'
          ? LUNGE[0] + LUNGE[1] + LUNGE[2] + LUNGE[3]
          : next === 'pause'
            ? PAUSE[0] + PAUSE[1] + PAUSE[2]
            : 0;
  }

  /** Called when this side's descending population fires. The only trigger. */
  function trigger() {
    heat = Math.min(1, heat + 0.55);
    if (state !== 'idle') {
      pending++;
      return;
    }
    yawT = male ? 0.34 * facing : -0.16 * facing;
    enter('orient');
  }

  const ease = (x) => 1 - Math.pow(1 - x, 3);
  const easeIn = (x) => x * x * x;

  function poseIdle(dt, t) {
    gait += dt * 2.1;
    const bob = Math.sin(gait * 2) * 0.004;
    fly.body.position.y = bob;
    fly.body.position.z = 0;
    fly.body.rotation.x = Math.sin(gait) * 0.02;

    for (let i = 0; i < fly.legs.length; i++) {
      const leg = fly.legs[i];
      // tripod gait: L1/R2/L3 against R1/L2/R3
      const tripod = (i + (leg.side > 0 ? 1 : 0)) % 2;
      const ph = gait + tripod * Math.PI;
      leg.root.rotation.x = leg.rest.x + Math.sin(ph) * 0.2;
      leg.knee.rotation.x = leg.kneeRest + Math.max(0, Math.sin(ph)) * 0.22;
    }

    for (const w of fly.wings) {
      w.pivot.rotation.y = w.restY;
      w.pivot.rotation.z = w.restZ + Math.sin(t * 1.3 + w.side) * 0.015;
    }

    // occasional groom so idle never reads as a frozen prop (never re-entrant:
    // poseIdle is also called *during* groom to keep the legs ticking)
    if (state === 'idle') {
      groomIn -= dt;
      if (groomIn <= 0) {
        groomIn = 5 + Math.random() * 6;
        enter('groom');
      }
    }
    fly.head.rotation.x = Math.sin(t * 0.7) * 0.04;
    fly.head.rotation.y = Math.sin(t * 0.41) * 0.06;
  }

  function poseGroom(k) {
    const s = Math.sin(k * Math.PI);
    fly.head.rotation.x = 0.25 * s;
    for (let i = 0; i < fly.legs.length; i++) {
      const leg = fly.legs[i];
      const front = i % 3 === 0;
      if (front) {
        leg.root.rotation.x = leg.rest.x - 0.85 * s;
        leg.knee.rotation.x = leg.kneeRest - 0.9 * s + Math.sin(k * 26) * 0.18 * s;
      }
    }
  }

  function poseOrient(k) {
    fly.body.rotation.x = -0.06 * Math.sin(k * Math.PI);
    fly.head.rotation.y = yaw * 0.5;
    for (const w of fly.wings) w.pivot.rotation.z = w.restZ + 0.12 * Math.sin(k * Math.PI);
  }

  function poseLunge(tt) {
    const [c, th, hold, rec] = LUNGE;
    let z = 0;
    let y = 0;
    let pitch = 0;
    let wing = 0;
    if (tt < c) {
      const k = tt / c;
      z = -0.05 * ease(k);
      y = -0.022 * ease(k);
      pitch = 0.16 * ease(k);
      wing = 0.5 * ease(k);
    } else if (tt < c + th) {
      const k = (tt - c) / th;
      z = -0.05 + 0.28 * easeIn(k) + 0.05 * k;
      y = -0.022 + 0.03 * k;
      pitch = 0.16 - 0.3 * k;
      wing = 0.5 + 0.5 * k;
    } else if (tt < c + th + hold) {
      z = 0.28;
      y = 0.008;
      pitch = -0.14;
      wing = 1;
    } else {
      const k = Math.min(1, (tt - c - th - hold) / rec);
      z = 0.28 * (1 - ease(k));
      y = 0.008 * (1 - k);
      pitch = -0.14 * (1 - ease(k));
      wing = 1 - ease(k);
    }
    fly.body.position.z = z;
    fly.body.position.y = y;
    fly.body.rotation.x = pitch;
    for (const w of fly.wings) {
      w.pivot.rotation.y = w.restY - 1.05 * wing * w.side;
      w.pivot.rotation.z = w.restZ + 0.45 * wing;
    }
    for (let i = 0; i < fly.legs.length; i++) {
      const leg = fly.legs[i];
      leg.root.rotation.x = leg.rest.x + (i % 3 === 0 ? -0.5 : 0.32) * wing;
      leg.knee.rotation.x = leg.kneeRest - 0.35 * wing;
    }
  }

  function posePause(tt) {
    const [freeze, groom, settle] = PAUSE;
    if (tt < freeze) {
      const k = tt / freeze;
      fly.body.position.y = -0.014 * ease(k);
      fly.body.rotation.x = 0.05 * ease(k);
      for (const w of fly.wings) {
        w.pivot.rotation.y = w.restY * (1 - 0.6 * k);
        w.pivot.rotation.z = w.restZ * (1 - 0.6 * k);
      }
      for (const leg of fly.legs) {
        leg.root.rotation.x = leg.rest.x;
        leg.knee.rotation.x = leg.kneeRest;
      }
    } else if (tt < freeze + groom) {
      poseGroom((tt - freeze) / groom);
      fly.body.position.y = -0.014;
      fly.body.rotation.x = 0.05;
    } else {
      const k = Math.min(1, (tt - freeze - groom) / settle);
      fly.body.position.y = -0.014 * (1 - ease(k));
      fly.body.rotation.x = 0.05 * (1 - ease(k));
      fly.head.rotation.x *= 1 - k;
      for (const w of fly.wings) {
        w.pivot.rotation.y = w.restY * (0.4 + 0.6 * k);
        w.pivot.rotation.z = w.restZ * (0.4 + 0.6 * k);
      }
    }
  }

  function update(dt, t) {
    fade = Math.min(1, fade + dt * 1.6);
    groundMat.uniforms.uOpacity.value = fade * 0.85;
    fly.wingMat.uniforms.uOpacity.value = fade;

    heat = Math.max(0, heat - dt * 0.85);
    fly.chitin.uniforms.uHeat.value = heat; // shared uniform object: eyes track it too

    yaw += (yawT - yaw) * (1 - Math.exp(-dt * 6));
    fly.group.rotation.y = (facing * Math.PI) / 2 + yaw;

    if (state === 'idle') {
      poseIdle(dt, t);
      return;
    }

    stateT += dt;
    const k = stateDur > 0 ? Math.min(1, stateT / stateDur) : 1;

    if (state === 'groom') {
      poseIdle(dt * 0.35, t);
      poseGroom(Math.min(1, stateT / 1.1));
      if (stateT >= 1.1) state = 'idle';
      return;
    }

    if (state === 'orient') {
      poseOrient(k);
      if (k >= 1) enter(male ? 'lunge' : 'pause');
      return;
    }

    if (state === 'lunge') {
      poseLunge(stateT);
      if (k >= 1) {
        yawT = 0;
        state = 'idle';
        if (pending > 0) {
          pending = 0;
          trigger();
        }
      }
      return;
    }

    if (state === 'pause') {
      posePause(stateT);
      if (k >= 1) {
        yawT = 0;
        state = 'idle';
        pending = 0;
      }
      return;
    }

    state = 'idle';
  }

  function dispose() {
    group.traverse((o) => {
      if (o.isMesh) {
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      }
    });
    for (const key in fly.geos) {
      if (fly.geos[key] && fly.geos[key].dispose) fly.geos[key].dispose();
    }
    fly.chitin.dispose();
    fly.eyeMat.dispose();
    fly.wingMat.dispose();
    groundGeo.dispose();
    groundMat.dispose();
    if (group.parent) group.parent.remove(group);
  }

  return {
    group,
    update,
    trigger,
    dispose,
    get state() {
      return state;
    },
  };
}
