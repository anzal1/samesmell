# Same Smell — POC spec (architect: main session)

One browser page. Two real-looking fruit fly brains side by side, male left, female right.
The user holds a button to puff cVA pheromone at both. The same signal enters both brains,
propagates as visible spikes, then diverges at the dimorphic circuit: male ends in LUNGE
(aggression), female ends in PAUSE (receptivity). Clicking any glowing neuron fires it.

POC honesty: morphology is procedurally generated to plausible Drosophila anatomy, the
simulation is a simplified leaky integrate-and-fire on a stand-in graph. The production
version swaps in real MaleCNS / FlyWire skeletons. The UI must say this (info panel).

## Stack and layout
- Vanilla JS ES modules + three (from node_modules). No framework.
- Bundle: `./node_modules/.bin/esbuild src/main.js --bundle --outfile=dist/app.js --format=iife --minify`
  (node lives at ~/.nvm/versions/node/v24.20.0/bin, prepend to PATH)
- Files and owners:
  - `scripts/genBrains.mjs`, `data/male.json`, `data/female.json` — Agent B (morphology)
  - `index.html`, `src/ui.css`, `src/main.js`, `src/neuro.js`, `src/sim.js`, `src/ui.js` — Agent A (app)
- App loads `data/male.json` + `data/female.json` via fetch. If fetch fails, use a small
  built-in procedural fallback so index.html never shows a blank page.

## Data schema (the contract between agents)
```json
{
  "meta": { "sex": "male", "bounds": [[-1,-0.55,-0.6],[1,0.55,0.6]] },
  "neurons": [
    {
      "id": 0,
      "type": "orn | pn | lhn | dimorphic | descending | other",
      "dimorphic": false,
      "soma": [0.1, 0.2, 0.3],
      "segments": [ [[x,y,z],[x,y,z], "... 5 to 40 points each"] ]
    }
  ],
  "edges": [[preId, postId]],
  "pathway": [ "ordered neuron ids of the cVA signal route: orn -> pn -> lhn -> dimorphic -> descending" ]
}
```
- 500–900 neurons per brain, each JSON under 4 MB, coordinates centered on origin,
  brain roughly 2.0 wide x 1.1 tall x 1.2 deep. Deterministic (seeded RNG).

## Design language (designer: main session)
- Background #050506, soft radial vignette, no pure black crush.
- Base neurons: desaturated slate filaments (#5a6a7a), low opacity, additive blending.
- Accents: male copper `#e0784a`, female verdigris `#3fd2c7`. Dimorphic neurons take the
  accent when active. Spikes are bright white-hot pulses traveling along the polylines.
- Rendering: ACESFilmic tone mapping, UnrealBloomPass (strength ~0.9, radius ~0.6,
  threshold ~0.75), devicePixelRatio capped at 2. Target 60 fps on an M-series MacBook:
  merge filament geometry into few draw calls; animate pulses on GPU (shader uniforms or
  a points layer moving along presampled paths), never per-frame geometry rebuilds.
- Camera: gentle idle drift when untouched, inertial orbit on drag, dolly on wheel,
  everything damped. The two brains can share one canvas (two viewports) or two canvases.
- Type: system-ui/Inter. Uppercase micro-labels, letter-spacing .12em, 11px, #ffffffb0.
- Chrome: center vertical hairline #ffffff14 splitting the screen. Top corners: "MALE" /
  "FEMALE" labels with their accent dot. Top center: caption zone, one line, fades in/out
  ("SAME SMELL", then "SIGNAL DIVERGES AT THE DIMORPHIC CORE", then per-side verdicts).
- Bottom center: circular hold-button, 72px, hairline ring that fills while held, label
  "HOLD TO PUFF cVA". Bottom right: "WHAT'S REAL HERE" toggle opening a glass panel
  (rgba(255,255,255,.04), backdrop-blur 20px, hairline border) with the honesty text.
- Verdicts at sequence end: male side flashes copper "LUNGE — AGGRESSION", female side
  verdigris "PAUSE — RECEPTIVITY", then a shared line: "identical input, different wiring,
  opposite behavior".
- Motion rules: nothing pops. Opacity/scale ease cubic, 200–400ms. 60fps is a feature.

## Simulation (Agent A, src/sim.js)
- Leaky integrate-and-fire, ~2ms virtual step, real-time playback stretched so the full
  cascade reads over ~4 seconds. Puff injects current into all `orn` neurons while held.
- Propagation delay proportional to 3D path length between somata. Edges within `pathway`
  are reliable; other edges fire probabilistically for ambient shimmer (keep subtle).
- Clicking a soma fires that neuron (raycast pick). Fire a dimorphic neuron directly and
  its accent halo plus a mini-cascade downstream plays.
- Expose: createSim(graph, { onSpike(id), onVerdict() }) -> { puffStart(), puffEnd(), fire(id), step(dt) }.

## HUMAN MODES (phase 2, added after initial build)
A segmented mode switcher, top center under the caption zone: LAB | SWIPE | REELS.
- LAB is the existing puff demo.
- SWIPE: a slim phone-shaped card stack floats between the two brains. Each profile card
  is a fly (procedural portrait, name, one-line bio) with a hidden chemical profile
  (cVA level, food odor, movement). Revealing a card injects that profile as sensory
  input into BOTH brains; the courtship/dimorphic circuit activation decides swipe
  direction, rendered as the card flying right (copper heart) or left. Male and female
  verdicts can disagree on the same card, and that disagreement is the point. Verdict
  strip keeps score: "He swiped right on 7/10. She swiped right on 2/10. Same profiles."
- REELS: the phone shows abstract procedurally generated clips (looming dot, drifting
  gratings, sparkle bursts). The visual circuits respond; response strength = watch time.
  Habituation is modeled (repeated similar clips decay the response) so the brain swipes
  up when its neurons literally stop responding. A small live "engagement" trace draws
  next to the phone. Caption: "his neurons got bored. that is real. it is called
  habituation."
- Both modes drive the SAME spike/glow visual system as LAB. Honesty panel gains a line
  per mode about what is modeled vs staged.
- VERSUS: brain vs brain Pong, the first inter-brain match. A minimal luminous Pong court
  floats between the two brains (same axis as SWIPE's phone). The ball's position and
  velocity are fed to each brain as retinotopic drive into its optic-lobe/orn-adjacent
  visual population (POC: map court rows to optic lobe columns); each side's paddle
  velocity is a decoded readout of its motion-sensitive population response, with the
  dimorphic core adding a per-sex bias (his wiring slightly overshoots aggressive
  returns, hers tracks steadier; derive both from graph structure, not hardcoded
  personalities). Spikes visibly race through the responding optic lobe on every rally.
  Scoreboard top center: MALE n : n FEMALE, set to 5. After match point: "YOU vs THE
  WINNER" button swaps one paddle to mouse/touch control. Slow-mo replay moment on match
  point (0.25x for 1.5s) because that is the clip people will post. Honesty line: paddle
  control is a decoded population readout plus a fixed motor mapping; the brains do not
  know they are playing.

## BODY STAGE (phase 3)
Two small embodied flies below/between the brains acting out what the circuits decide.
POC tier: stylized low-poly fly bodies (procedural, ~300 tris each) whose animation
state machine (walk, orient, wing-extend song, lunge, pause) is driven ONLY by real
descending-neuron output from each brain's sim; when he lunges it is because his DN
population fired. No scripted timeline; honesty line says the bodies are animated
puppets driven by real circuit output, not physics. Production tier (later, separate
page): true physics via MuJoCo-WASM + the published flybody model (NeuroMechFly v2),
which is the only honest way to claim "the brain moves a body".
Sources (via @Zyvex_0x): github.com/TuragaLab/flybody (also in
github.com/google-deepmind/mujoco_menagerie/tree/main/flybody), paper
nature.com/articles/s41586-025-09029-4, and github.com/NeLy-EPFL/flygym
(NeuroMechFly v2).

## PHASE 4 MODES
- VERSUS PAIRINGS: a small selector inside VERSUS (M vs F | M vs M | F vs F). Same-sex
  matches instantiate two sims from the same graph with different RNG seeds; label the
  mirror match honestly ("same wiring, different noise") and let the scoreboard tell
  the stochasticity story. Cheap: reuse everything.
- STANDOFF: male vs male aggression duel, the most biologically true game possible
  (cVA drives male-male aggression; that is the paper). Both male brains receive each
  other's cVA continuously; each side's aggression drive (P1/dimorphic population
  activity, leaky-integrated) fills a visible tension meter; first across threshold
  lunges. Western-duel staging: two male flies facing off in the center, slow zoom,
  match cards ("ROUND 1"). A FEMALE variant (headbutt derby, pC1d/aIPg-style female
  aggression, real but little-known science) is the same mechanic with the female
  graph pair and a headbutt animation; expose it via the same pairing selector.
- TRAIN: associative learning, the "teach the brain" mode. Architecture mirrors the
  real mushroom body: a sparse expansion layer (KC-like) reading the odor input, a
  small valence readout (MBON-like approach/avoid pair), and a dopamine teaching
  signal the USER triggers (a zap button) that depresses active KC->MBON weights.
  Flow: present odor A and odor B alternately (two scent buttons); fly body approaches
  or retreats per valence readout; user zaps during an odor to teach; test phase shows
  the changed preference. Persist learned weights in localStorage ("your fly remembers
  what you taught it"). If the loaded graph lacks mushroom-body cells, build the KC
  layer as a labeled abstraction on top of real context neurons and SAY SO in the
  honesty panel; future work swaps in sampled real KCs/MBONs/DANs.

## Real data (phase 2)
A data agent produces `data/real/male.json` and `data/real/female.json` in the same
schema, converted from published connectome skeletons (MaleCNS public GCS bucket,
FlyWire public exports), focused on the featured circuit (ORN -> DA1 PN -> LH -> P1/pC1
-> descending) plus a few hundred context neurons for silhouette. App prefers
data/real/*, falls back to data/*, then to the built-in generator. A small "REAL DATA"
badge appears near the sex labels only when real files loaded.

## Acceptance (main session verifies in browser)
1. Page loads with both brains slowly drifting, filaments glowing, 60fps.
2. Hold the button: spikes sweep antennal lobe -> lateral horn -> dimorphic core on both
   sides in sync, then diverge; verdicts land ~4s later; caption sequence plays.
3. Click any dimorphic soma: it fires with a halo and downstream flicker.
4. Info panel opens and closes smoothly, honesty text present.
5. No console errors. Works at 1280x800 and 375x812 (mobile: stacked brains acceptable).
