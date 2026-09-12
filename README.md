# Same Smell 🪰

**Two real fruit fly brains. One pheromone. Opposite reactions.**

**Live: [anzal1.github.io/samesmell](https://anzal1.github.io/samesmell/)** · no login, no install, works on your phone

Nine days after Google Research and Janelia published the complete male fruit fly
connectome (Cell, Sept 2026), the internet had already taught it to play Doom,
Minecraft, and Beat Saber, and to trade bitcoin. Respect.

Nobody made it fall in love. So this exists.

## What happens

You hold a button. A puff of cVA, the fly's own pheromone, hits two real brains at
the same moment: his (traced from the MaleCNS v1.0 release) on the left, hers (from
FlyWire) on the right. The identical signal enters identical Or67d sensory neurons,
travels the same first few synapses, and then arrives at circuits only one sex has.

**He lunges. She pauses.** The difference is not the smell. It is the wiring. That
is not a metaphor, it is the actual headline finding of the paper.

Two small flies stand under their brains and act out whatever their descending
neurons decide. Nobody keyframed their choices.

## Three modes

| Mode | What it is |
|------|-----------|
| **LAB** | The puff. Spikes race through both connectomes, verdicts land, flies react. Click any glowing neuron to fire it yourself. |
| **VERSUS** | The first Pong match played between two brains. The ball drives each brain's visual population retinotopically; the paddles are decoded straight back out. His wiring overshoots, hers tracks steady, and both styles are measured from the graphs, not written by us. After match point: you against the winner. Good luck. |
| **SWIPE** | Both brains judge the same dating profiles through their courtship circuits. Each card becomes chemical input. They disagree, on the record. Orla, 3d, is not here for anything serious. She has 40 days. |

## What's real (and what isn't)

The app has a **"what's real here"** panel and it is not decoration.

**Real:** cVA and the Or67d pathway. The neuron skeletons, traced from the published
male (MaleCNS v1.0, Janelia + Google Research) and female (FlyWire) connectomes,
downsampled to run in a browser. The connections between them. The sexually
dimorphic circuit the signal diverges at.

**Staged:** the dynamics are a simplified leaky integrate-and-fire, stretched in
time so a human eye can follow the cascade. Spike counts are illustrative. The fly
bodies are animated puppets triggered by real circuit output, not physics. The
dating profiles are, regrettably, fictional.

If you catch us blurring that line, open an issue. That line is the product.

## Run it locally

```bash
git clone https://github.com/anzal1/samesmell && cd samesmell
python3 -m http.server 4173
# open http://localhost:4173
```

That's it. Static files, no build step needed to run. To hack on the source:

```bash
npm install
./node_modules/.bin/esbuild src/main.js --bundle --outfile=dist/app.js --format=iife --minify
```

Party tricks: `?autopuff=9` puffs on a loop (that's how the demo video was
recorded), `?mode=versus` deep-links a mode, `?debug=1` shows an FPS meter, and
the space bar puffs.

## Data

- Male: [MaleCNS v1.0](https://www.janelia.org/project-team/flyem/male-cns-connectome), HHMI Janelia + Google Research, **CC-BY**
- Female: [FlyWire](https://codex.flywire.ai/) public release, Princeton et al., **CC-BY**
- The paper: [Sexual dimorphism in the complete connectome of the Drosophila male central nervous system](https://doi.org/10.1016/j.cell.2026.08.015), Cell, 2026

Enormous respect to the people who spent years proofreading 125 million synapses
so that the rest of us could puff imaginary pheromones at their work.

## Stack

Vanilla JS, Three.js, one custom dual-viewport bloom pipeline, a leaky
integrate-and-fire simulation in a single file, and zero frameworks. The whole
thing ships as static files.

## Next

Physics bodies via [flybody](https://github.com/TuragaLab/flybody) (MuJoCo) and
[flygym / NeuroMechFly v2](https://github.com/NeLy-EPFL/flygym), a REELS mode where
his neurons literally get bored (habituation is real), and synapse-count-weighted
connections. See [SPEC.md](SPEC.md).

---

*Same smell. Opposite minds.*
