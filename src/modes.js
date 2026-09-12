/*
 * modes.js — the three experiences that share one pair of brains.
 *
 * A mode owns choreography only: what a stimulus means, what the captions say,
 * what a verdict looks like. Every mode drives the SAME spike/glow uniform
 * system in neuro.js and the SAME leaky integrate-and-fire in sim.js. Nothing
 * here builds geometry per frame.
 *
 * Contract:
 *   enter()                      set up, add any 3D/DOM it owns
 *   exit()                       tear all of it down, leave no timers or nodes
 *   update(dt, rawDt)            dt is already time-scaled by the mode
 *   puffStart() / puffEnd()      the hold button, when the mode shows one
 *   verdict(side)                sim reported descending output first-fire
 *   pick(side, id, dimorphic)    user clicked a soma
 *   onSpike(side, id, type, dim, visual)
 *   timeScale                    optional, for slow-mo
 */

import { createBodyStage } from './body.js';

const SIDES = ['male', 'female'];
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

/* ------------------------------------------------------------------- LAB */

export function createLabMode(ctx) {
  const VERDICT_TEXT = {
    male: 'LUNGE · AGGRESSION',
    female: 'PAUSE · RECEPTIVITY',
  };
  const SHARED = 'identical input, different wiring, opposite behavior';

  let clock = 0;
  const timeline = [];
  let landed = { male: false, female: false };
  let sharedDone = false;
  let resetAt = Infinity;
  let introDone = false;
  const bodies = {};

  const at = (delay, fn) => timeline.push({ t: clock + delay, fn });
  const clearTimeline = () => {
    timeline.length = 0;
  };

  return {
    name: 'lab',

    enter() {
      for (const side of SIDES) {
        const stage = createBodyStage({
          sex: side,
          accent: ctx.accents[side],
          // male sits to the right of his brain, female to the left of hers, so
          // on screen the pair stands either side of the centre hairline
          facing: side === 'male' ? 1 : -1,
        });
        stage.group.position.set(side === 'male' ? 0.84 : -0.84, -0.86, 0.1);
        stage.group.scale.setScalar(1.1);
        ctx.scenes[side].add(stage.group);
        bodies[side] = stage;
      }
      ctx.setFraming('bodies');
      ctx.ui.setModeHonesty(
        'BODY STAGE: the two flies are animated puppets, not physics. Their state ' +
          'machine has exactly one trigger, the descending-neuron output of the brain ' +
          'above them, so when he lunges it is because his DN population actually ' +
          'fired. A true embodied version needs MuJoCo and the published flybody model.'
      );

      at(0.9, () => {
        if (introDone) return;
        introDone = true;
        ctx.ui.setCaption('SAME SMELL');
        at(4.2, () => {
          if (!ctx.ui.isHeld && !landed.male && !landed.female) ctx.ui.setCaption('');
        });
      });
    },

    exit() {
      clearTimeline();
      for (const side of SIDES) {
        if (bodies[side]) {
          ctx.scenes[side].remove(bodies[side].group);
          bodies[side].dispose();
          delete bodies[side];
        }
      }
      ctx.setFraming('default');
      ctx.ui.hideVerdicts();
      ctx.ui.setCaption('');
    },

    puffStart() {
      clearTimeline();
      introDone = true;
      landed = { male: false, female: false };
      sharedDone = false;
      resetAt = Infinity;
      ctx.ui.hideVerdicts();
      for (const s of SIDES) {
        ctx.sims[s].puffStart();
        ctx.views[s].armEpisode();
      }
      ctx.ui.setCaption('SAME SMELL');
      at(1.75, () => ctx.ui.setCaption('SIGNAL DIVERGES AT THE DIMORPHIC CORE'));
    },

    puffEnd() {
      for (const s of SIDES) ctx.sims[s].puffEnd();
    },

    verdict(side) {
      if (landed[side]) return;
      landed[side] = true;
      ctx.ui.showVerdict(side, VERDICT_TEXT[side]);
      ctx.views[side].flare();
      if (landed.male && landed.female && !sharedDone) {
        sharedDone = true;
        at(0.95, () => ctx.ui.setCaption(SHARED));
        resetAt = clock + 8.5;
      }
    },

    pick(side, id, dimorphic) {
      if (!dimorphic) return;
      ctx.ui.setCaption('DIMORPHIC NEURON FIRED');
      clearTimeline();
      at(3.4, () => {
        if (!ctx.ui.isHeld && !landed.male && !landed.female) ctx.ui.setCaption('');
      });
    },

    onSpike(side, id, type) {
      // the ONLY thing that moves a body
      if (type === 'descending' && bodies[side]) bodies[side].trigger();
    },

    update(dt) {
      clock += dt;
      for (let i = timeline.length - 1; i >= 0; i--) {
        if (clock >= timeline[i].t) {
          const fn = timeline[i].fn;
          timeline.splice(i, 1);
          fn();
        }
      }
      if (clock >= resetAt) {
        resetAt = Infinity;
        if (!ctx.ui.isHeld) {
          ctx.ui.hideVerdicts();
          ctx.ui.setCaption('');
        }
      }
      for (const s of SIDES) if (bodies[s]) bodies[s].update(dt, clock);
    },
  };
}

/* ---------------------------------------------------------------- VERSUS */

export function createVersusMode(ctx) {
  const TARGET = 5;
  const canvas = ctx.ui.el.court;
  const cv = canvas ? canvas.getContext('2d') : null;

  /* Paddle behaviour comes out of each graph's own dimorphic fan-out. The two
   * connectomes differ by only a few percent in absolute terms, so the value is
   * contrast-normalised against the pair and raised to a power: the ordering and
   * the sign are the data's, the legibility is ours. The stiffer, less damped
   * controller reaches the ball sooner and overshoots; the other tracks steadier
   * and slower. Nothing per-sex is hardcoded. */
  const ctrl = {};
  {
    const fan = {};
    for (const s of SIDES) fan[s] = clamp(ctx.sims[s].structure.dimFanout, 0.35, 3.0);
    const mean = (fan.male + fan.female) / 2 || 1;
    for (const s of SIDES) {
      const k = clamp(Math.pow(fan[s] / mean, 6), 0.55, 1.8);
      ctrl[s] = { gain: 30 * k, damp: 10.5 / k, fanout: fan[s], k };
    }
  }

  const paddle = { male: 0.5, female: 0.5 };
  const pvel = { male: 0, female: 0 };
  const score = { male: 0, female: 0 };
  const ball = { x: 0.5, y: 0.5, vx: 0.44, vy: 0.2, r: 0.016 };
  const trail = [];

  let human = null; // side whose paddle the pointer drives
  let humanY = 0.5;
  let slowLeft = 0;
  let matchOver = false;
  let serveIn = 1.1;
  let dpr = 1;
  let cw = 1;
  let ch = 1;
  let introT = 0;

  function resizeCourt() {
    if (!canvas) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    cw = Math.max(1, Math.round(r.width));
    ch = Math.max(1, Math.round(r.height));
    canvas.width = Math.round(cw * dpr);
    canvas.height = Math.round(ch * dpr);
  }

  function onPointer(e) {
    if (!human || !canvas) return;
    const r = canvas.getBoundingClientRect();
    humanY = clamp((e.clientY - r.top) / Math.max(1, r.height), 0.06, 0.94);
  }

  function takeover() {
    // you get the loser's paddle and play the winner
    human = score.male > score.female ? 'female' : 'male';
    score.male = 0;
    score.female = 0;
    matchOver = false;
    serve(human === 'male' ? 1 : -1);
    serveIn = 1.2;
    ctx.ui.setVersusScore(0, 0);
    ctx.ui.setVersusButton(false);
    ctx.ui.setCaption('YOU HAVE THE ' + human.toUpperCase() + ' PADDLE');
    introT = 0;
  }

  function serve(toward) {
    ball.x = 0.5;
    ball.y = 0.35 + Math.random() * 0.3;
    ball.vx = 0.42 * toward;
    ball.vy = (Math.random() - 0.5) * 0.36;
    trail.length = 0;
  }

  function point(side) {
    score[side]++;
    ctx.views[side].flare();
    ctx.ui.setVersusScore(score.male, score.female);
    if (score[side] >= TARGET) {
      matchOver = true;
      slowLeft = 1.5;
      ctx.ui.setCaption(
        (side === 'male' ? 'MALE' : 'FEMALE') + ' TAKES THE MATCH'
      );
      ctx.ui.setVersusButton(true);
    } else {
      serveIn = 0.9;
      serve(side === 'male' ? 1 : -1);
    }
  }

  function draw() {
    if (!cv) return;
    cv.setTransform(dpr, 0, 0, dpr, 0, 0);
    cv.clearRect(0, 0, cw, ch);

    // court
    cv.globalCompositeOperation = 'source-over';
    cv.fillStyle = 'rgba(8,9,11,0.55)';
    cv.fillRect(0, 0, cw, ch);
    cv.strokeStyle = 'rgba(255,255,255,0.1)';
    cv.lineWidth = 1;
    cv.strokeRect(0.5, 0.5, cw - 1, ch - 1);

    cv.globalCompositeOperation = 'lighter';

    // centre line
    cv.strokeStyle = 'rgba(255,255,255,0.09)';
    cv.setLineDash([4, 9]);
    cv.beginPath();
    cv.moveTo(cw / 2, 6);
    cv.lineTo(cw / 2, ch - 6);
    cv.stroke();
    cv.setLineDash([]);

    // retinotopic drive readout: the column each brain is currently seeing
    for (const s of SIDES) {
      const r = ctx.sims[s].motionReadout();
      const y = (1 - r.u) * ch;
      const a = clamp(r.energy / 22, 0, 1) * 0.5;
      cv.fillStyle = s === 'male' ? 'rgba(224,120,74,' + a + ')' : 'rgba(63,210,199,' + a + ')';
      const x = s === 'male' ? 0 : cw - 26;
      cv.fillRect(x, y - 1.2, 26, 2.4);
    }

    // trail
    for (let i = 0; i < trail.length; i++) {
      const p = trail[i];
      const a = (i / trail.length) * 0.3;
      cv.fillStyle = 'rgba(255,255,255,' + a + ')';
      cv.beginPath();
      cv.arc(p.x * cw, p.y * ch, ball.r * cw * (0.35 + 0.5 * (i / trail.length)), 0, 6.284);
      cv.fill();
    }

    // ball
    cv.shadowBlur = 18;
    cv.shadowColor = 'rgba(255,255,255,0.85)';
    cv.fillStyle = '#ffffff';
    cv.beginPath();
    cv.arc(ball.x * cw, ball.y * ch, ball.r * cw, 0, 6.284);
    cv.fill();
    cv.shadowBlur = 0;

    // paddles
    const ph = 0.115 * ch;
    for (const s of SIDES) {
      const x = s === 'male' ? 0.045 * cw : 0.955 * cw;
      const y = paddle[s] * ch;
      cv.shadowBlur = 14;
      cv.shadowColor = s === 'male' ? 'rgba(224,120,74,0.9)' : 'rgba(63,210,199,0.85)';
      cv.fillStyle = s === 'male' ? '#e0784a' : '#3fd2c7';
      cv.fillRect(x - 2, y - ph / 2, 4, ph);
      cv.shadowBlur = 0;
      if (human === s) {
        cv.strokeStyle = 'rgba(255,255,255,0.65)';
        cv.strokeRect(x - 4.5, y - ph / 2 - 3, 9, ph + 6);
      }
    }
    cv.globalCompositeOperation = 'source-over';
  }

  return {
    name: 'versus',
    boostVisual: true,
    get timeScale() {
      return slowLeft > 0 ? 0.25 : 1;
    },

    enter() {
      for (const s of SIDES) ctx.sims[s].reset();
      ctx.setFraming('sides');
      ctx.ui.setVersusScore(0, 0);
      ctx.ui.setVersusButton(false);
      ctx.ui.setCaption('SAME BALL. TWO DECODERS.');
      ctx.ui.setModeHonesty(
        'VERSUS: the ball position is injected as retinotopic current into each ' +
          'brain’s optic-lobe-adjacent population, and each paddle is a decoded ' +
          'population readout through a fixed motor mapping. The stiffness and damping ' +
          'of that mapping come from each graph’s own dimorphic fan-out, not from a ' +
          'hardcoded personality. The brains do not know they are playing.'
      );
      resizeCourt();
      window.addEventListener('resize', resizeCourt, { passive: true });
      window.addEventListener('pointermove', onPointer, { passive: true });
      if (ctx.ui.el.versusBtn) ctx.ui.el.versusBtn.addEventListener('click', takeover);
      serve(Math.random() < 0.5 ? 1 : -1);
      serveIn = 1.3;
      introT = 0;
    },

    exit() {
      window.removeEventListener('resize', resizeCourt);
      window.removeEventListener('pointermove', onPointer);
      if (ctx.ui.el.versusBtn) ctx.ui.el.versusBtn.removeEventListener('click', takeover);
      for (const s of SIDES) {
        ctx.sims[s].visualDrive(-1, 0);
        ctx.sims[s].reset();
      }
      ctx.setFraming('default');
      ctx.ui.setCaption('');
      ctx.ui.setVersusButton(false);
      human = null;
      matchOver = false;
      score.male = 0;
      score.female = 0;
    },

    puffStart() {},
    puffEnd() {},
    verdict() {},
    pick() {},
    onSpike() {},

    update(dt, rawDt) {
      if (slowLeft > 0) slowLeft = Math.max(0, slowLeft - rawDt);
      if (introT >= 0) {
        introT += rawDt;
        if (introT > 4.5) {
          introT = -1;
          if (!matchOver) ctx.ui.setCaption('');
        }
      }

      // retinotopic drive: court row -> optic lobe column, stronger as the ball
      // approaches that side
      const u = clamp(1 - ball.y, 0, 1);
      ctx.sims.male.visualDrive(u, 0.34 + 0.5 * clamp(1 - ball.x, 0, 1));
      ctx.sims.female.visualDrive(u, 0.34 + 0.5 * clamp(ball.x, 0, 1));

      // decode each paddle out of its population
      for (const s of SIDES) {
        if (human === s) {
          paddle[s] += (humanY - paddle[s]) * (1 - Math.exp(-dt * 16));
          pvel[s] = 0;
          continue;
        }
        const r = ctx.sims[s].motionReadout();
        const conf = clamp(r.energy / 14, 0, 1);
        const target = 0.5 + (1 - r.u - 0.5) * (0.35 + 0.75 * conf);
        const c = ctrl[s];
        pvel[s] += ((target - paddle[s]) * c.gain - pvel[s] * c.damp) * dt;
        paddle[s] = clamp(paddle[s] + pvel[s] * dt, 0.06, 0.94);
      }

      if (serveIn > 0) {
        serveIn -= dt;
      } else if (!matchOver) {
        ball.x += ball.vx * dt;
        ball.y += ball.vy * dt;
        if (ball.y < ball.r) {
          ball.y = ball.r;
          ball.vy = Math.abs(ball.vy);
        }
        if (ball.y > 1 - ball.r) {
          ball.y = 1 - ball.r;
          ball.vy = -Math.abs(ball.vy);
        }

        const ph = 0.115;
        if (ball.vx < 0 && ball.x < 0.045 + ball.r) {
          if (Math.abs(ball.y - paddle.male) < ph / 2 + ball.r) {
            ball.x = 0.045 + ball.r;
            ball.vx = Math.abs(ball.vx) * 1.035;
            ball.vy += (ball.y - paddle.male) * 1.9;
            ctx.views.male.flare();
          } else if (ball.x < -0.03) {
            point('female');
          }
        }
        if (ball.vx > 0 && ball.x > 0.955 - ball.r) {
          if (Math.abs(ball.y - paddle.female) < ph / 2 + ball.r) {
            ball.x = 0.955 - ball.r;
            ball.vx = -Math.abs(ball.vx) * 1.035;
            ball.vy += (ball.y - paddle.female) * 1.9;
            ctx.views.female.flare();
          } else if (ball.x > 1.03) {
            point('male');
          }
        }
        ball.vx = clamp(ball.vx, -0.95, 0.95);
        ball.vy = clamp(ball.vy, -0.72, 0.72);

        trail.push({ x: ball.x, y: ball.y });
        if (trail.length > 12) trail.shift();
      }

      draw();
    },
  };
}

/* ----------------------------------------------------------------- SWIPE */

const FIRST = [
  'Nyx', 'Orla', 'Wren', 'Bex', 'Juno', 'Pip', 'Sable', 'Kit',
  'Vesper', 'Flint', 'Ondine', 'Moss', 'Cleo', 'Tarn', 'Ivo', 'Rune',
];
const BIOS = [
  'lives on a nectarine. no notes.',
  'here for the fermentation, not the small talk.',
  'i peaked during the third instar.',
  'will share my banana. once.',
  'yeast enthusiast. wing enthusiast. that is it.',
  'looking for someone to circle a lamp with.',
  'i have a great courtship song and zero follow-through.',
  'not here for anything serious, i have 40 days.',
  'raised on cornmeal agar, mentally still there.',
  'my love language is proboscis extension.',
  'geotaxis negative, emotionally too.',
  'i was in a genetics screen once. it changed me.',
];

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Procedural fly portrait. Deterministic per card, pure SVG, no assets. */
let portraitSeq = 0;

function portraitSvg(rng) {
  const gid = 'pg' + ++portraitSeq; // unique: two cards overlap during the exit
  // stay inside the palette: warm chitin or cool chitin, never a random hue
  const hue = Math.round(rng() < 0.55 ? 16 + rng() * 26 : 166 + rng() * 28);
  const eye = 15 + rng() * 6;
  const eyeY = 30 + rng() * 4;
  const wingSpread = 14 + rng() * 22;
  const bodyLen = 62 + rng() * 18;
  const bristles = 3 + Math.floor(rng() * 4);
  const skin = 'hsl(' + hue + ' 24% 62%)';
  const dark = 'hsl(' + hue + ' 30% 26%)';

  let hair = '';
  for (let i = 0; i < bristles; i++) {
    const a = -70 + (i / Math.max(1, bristles - 1)) * 140;
    const rad = (a * Math.PI) / 180;
    hair +=
      '<line x1="60" y1="22" x2="' +
      (60 + Math.sin(rad) * 15).toFixed(1) +
      '" y2="' +
      (22 - Math.cos(rad) * 15).toFixed(1) +
      '" stroke="' +
      dark +
      '" stroke-width="1.4" stroke-linecap="round" opacity=".8"/>';
  }

  return (
    '<svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<defs><radialGradient id="' +
    gid +
    '" cx="50%" cy="35%"><stop offset="0" stop-color="' +
    skin +
    '" stop-opacity=".55"/><stop offset="1" stop-color="' +
    skin +
    '" stop-opacity="0"/></radialGradient></defs>' +
    '<rect width="120" height="150" fill="url(#' +
    gid +
    ')"/>' +
    '<g transform="translate(0,6)">' +
    '<ellipse cx="60" cy="' +
    (52 + bodyLen / 2) +
    '" rx="19" ry="' +
    (bodyLen / 2).toFixed(1) +
    '" fill="' +
    dark +
    '"/>' +
    '<ellipse cx="60" cy="52" rx="21" ry="19" fill="' +
    skin +
    '" opacity=".85"/>' +
    '<path d="M60 48 q-' +
    wingSpread.toFixed(0) +
    ' 34 -8 72" stroke="' +
    skin +
    '" stroke-width="1.2" fill="' +
    skin +
    '" fill-opacity=".12"/>' +
    '<path d="M60 48 q' +
    wingSpread.toFixed(0) +
    ' 34 8 72" stroke="' +
    skin +
    '" stroke-width="1.2" fill="' +
    skin +
    '" fill-opacity=".12"/>' +
    '<ellipse cx="60" cy="30" rx="15" ry="13" fill="' +
    dark +
    '"/>' +
    '<ellipse cx="' +
    (60 - eye * 0.62).toFixed(1) +
    '" cy="' +
    eyeY.toFixed(1) +
    '" rx="' +
    (eye * 0.52).toFixed(1) +
    '" ry="' +
    (eye * 0.66).toFixed(1) +
    '" fill="#e0784a" opacity=".82"/>' +
    '<ellipse cx="' +
    (60 + eye * 0.62).toFixed(1) +
    '" cy="' +
    eyeY.toFixed(1) +
    '" rx="' +
    (eye * 0.52).toFixed(1) +
    '" ry="' +
    (eye * 0.66).toFixed(1) +
    '" fill="#e0784a" opacity=".82"/>' +
    hair +
    '</g></svg>'
  );
}

export function createSwipeMode(ctx) {
  const DECK_SIZE = 10;
  const deckEl = ctx.ui.el.deck;

  const rng = mulberry32(0x5eed1e);
  const cards = [];
  for (let i = 0; i < DECK_SIZE; i++) {
    /* The deck is stratified rather than uniform: profile loads sweep the range
     * either side of the brains' ignition point, so a single run always
     * contains clear yeses, clear noes, and the band where the two disagree.
     * The cards are staged; what the brains do with them is not. */
    const load = 0.42 + ((i + 0.15 + rng() * 0.7) / DECK_SIZE) * 0.88;
    const food = rng() * 0.5;
    cards.push({
      name: FIRST[Math.floor(rng() * FIRST.length)],
      age: 2 + Math.floor(rng() * 28),
      bio: BIOS[Math.floor(rng() * BIOS.length)],
      svg: portraitSvg(rng),
      // hidden chemical profile; inject() reads it as cva*0.9 + food*0.35
      cva: clamp((load - food * 0.35) / 0.9, 0.08, 1.3),
      food,
      movement: rng(),
    });
  }
  // shuffle so the sweep never reads as a ramp
  for (let i = cards.length - 1; i > 0; i--) {
    const j = (rng() * (i + 1)) | 0;
    const t = cards[i];
    cards[i] = cards[j];
    cards[j] = t;
  }

  /* Both brains are judged by the SAME rule: peak dimorphic population response
   * to the card, divided by how many dimorphic neurons that brain has. One
   * identical threshold, one identical stimulus. Any disagreement therefore
   * comes out of the two connectomes, not out of a per-sex knob.
   * Measured against the loaded data this lands near he 7/10, she 3/10. */
  const DECIDE = 0.105;
  const norm = {};
  for (const s of SIDES) norm[s] = Math.max(1, ctx.sims[s].structure.dimCount);

  let idx = 0;
  let phase = 'in'; // in | judging | verdict | done
  let phaseT = 0;
  let el = null;
  let peak = { male: 0, female: 0 };
  const right = { male: 0, female: 0 };
  let judged = 0;

  function buildCard(card) {
    const node = document.createElement('article');
    node.className = 'card';
    node.innerHTML =
      '<div class="card__art">' +
      card.svg +
      '</div>' +
      '<div class="card__meta"><div class="card__name">' +
      card.name +
      ' <span>' +
      card.age +
      'd</span></div><div class="card__bio">' +
      card.bio +
      '</div></div>' +
      '<div class="card__chem"><span>cVA ' +
      Math.round(card.cva * 100) +
      '</span><span>ODOUR ' +
      Math.round(card.food * 100) +
      '</span><span>MOTION ' +
      Math.round(card.movement * 100) +
      '</span></div>' +
      '<div class="card__stamp card__stamp--male" data-side="male"></div>' +
      '<div class="card__stamp card__stamp--female" data-side="female"></div>';
    return node;
  }

  function present() {
    if (idx >= cards.length) {
      phase = 'done';
      ctx.ui.setCaption(
        'He swiped right on ' +
          right.male +
          '/' +
          DECK_SIZE +
          '. She swiped right on ' +
          right.female +
          '/' +
          DECK_SIZE +
          '. Same profiles.'
      );
      ctx.ui.setSwipeScore(right.male, right.female, DECK_SIZE, true);
      return;
    }
    const card = cards[idx];
    el = buildCard(card);
    deckEl.appendChild(el);
    // next frame so the entry transition runs
    requestAnimationFrame(() => el && el.classList.add('is-in'));
    phase = 'in';
    phaseT = 0;
    peak = { male: 0, female: 0 };
    ctx.ui.setCaption('SAME PROFILE, BOTH BRAINS');
  }

  function inject() {
    const card = cards[idx];
    for (const s of SIDES) {
      ctx.sims[s].stimulate(card.cva * 0.9 + card.food * 0.35, 0.55);
      ctx.sims[s].visualDrive(card.movement, 0.45 + card.movement * 0.5);
      ctx.views[s].armEpisode();
    }
  }

  function decide() {
    const out = {};
    for (const s of SIDES) {
      out[s] = peak[s] / norm[s] >= DECIDE;
      if (out[s]) right[s]++;
      const stamp = el && el.querySelector('.card__stamp--' + s);
      if (stamp) {
        stamp.textContent = (s === 'male' ? 'HIS ' : 'HERS ') + (out[s] ? 'YES' : 'NO');
        stamp.classList.add('is-on', out[s] ? 'is-yes' : 'is-no');
      }
    }
    judged++;
    ctx.ui.setSwipeScore(right.male, right.female, judged, false);
    ctx.ui.setCaption(
      out.male === out.female
        ? out.male
          ? 'BOTH CIRCUITS SAID YES'
          : 'NEITHER CIRCUIT RESPONDED'
        : 'SAME SMELL, OPPOSITE CALL'
    );
    return out;
  }

  function dismiss(out) {
    if (!el) return;
    const anyYes = out.male || out.female;
    el.classList.add(anyYes ? 'is-right' : 'is-left');
    const gone = el;
    el = null;
    setTimeout(() => gone.remove(), 520);
  }

  return {
    name: 'swipe',

    enter() {
      for (const s of SIDES) ctx.sims[s].reset();
      ctx.setFraming('sides');
      ctx.ui.setSwipeScore(0, 0, 0, false);
      ctx.ui.setModeHonesty(
        'SWIPE: each card carries a hidden chemical profile (cVA load, food odour, ' +
          'motion). Revealing it injects that profile into BOTH brains as identical ' +
          'sensory current; the swipe is read off the dimorphic population response ' +
          'that follows. The profiles, portraits and bios are invented. The disagreement ' +
          'between the two verdicts is the only part that comes out of the wiring.'
      );
      idx = 0;
      judged = 0;
      right.male = 0;
      right.female = 0;
      present();
    },

    exit() {
      for (const s of SIDES) {
        ctx.sims[s].visualDrive(-1, 0);
        ctx.sims[s].reset();
      }
      if (deckEl) deckEl.innerHTML = '';
      el = null;
      ctx.setFraming('default');
      ctx.ui.setCaption('');
    },

    puffStart() {},
    puffEnd() {},
    verdict() {},
    pick() {},
    onSpike() {},

    update(dt) {
      if (phase === 'done') return;
      phaseT += dt;

      if (phase === 'in' && phaseT > 0.6) {
        inject();
        phase = 'judging';
        phaseT = 0;
        if (el) el.classList.add('is-live');
      } else if (phase === 'judging') {
        for (const s of SIDES) {
          const r = ctx.sims[s].dimorphicRate;
          if (r > peak[s]) peak[s] = r;
        }
        // the cascade has to actually reach the dimorphic core before we read
        // it: four synaptic hops, and her response peaks later than his
        if (phaseT > 4.2) {
          for (const s of SIDES) ctx.sims[s].visualDrive(-1, 0);
          const out = decide();
          phase = 'verdict';
          phaseT = 0;
          setTimeout(() => dismiss(out), 700);
        }
      } else if (phase === 'verdict' && phaseT > 1.35) {
        idx++;
        present();
      }
    },
  };
}

/* --------------------------------------------------------------- registry */

export const MODE_FACTORIES = {
  lab: createLabMode,
  versus: createVersusMode,
  swipe: createSwipeMode,
};

export function selectMode(name, ctx) {
  const make = MODE_FACTORIES[name] || MODE_FACTORIES.lab;
  return make(ctx);
}
