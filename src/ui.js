/*
 * ui.js — DOM chrome: caption zone, verdicts, hold-to-puff ring, honesty panel,
 * optional FPS meter. Owns no 3D state; main.js drives it.
 */

const RING_C = 2 * Math.PI * 33; // r=33 in the 72px button
const HOLD_FILL = 0.9; // seconds for the ring to complete

export function createUI(opts = {}) {
  const onPuffStart = opts.onPuffStart || (() => {});
  const onPuffEnd = opts.onPuffEnd || (() => {});

  const $ = (id) => document.getElementById(id);

  const captionEl = $('caption');
  const verdictEl = { male: $('verdict-male'), female: $('verdict-female') };
  const badgeEl = { male: $('badge-male'), female: $('badge-female') };
  const puffEl = $('puff');
  const fillEl = $('puff-fill');
  const toggleEl = $('real-toggle');
  const panelEl = $('real-panel');
  const closeEl = $('real-close');
  const fpsEl = $('fps');
  const bootEl = $('boot');
  const modeBarEl = $('modebar');
  const thumbEl = $('modebar-thumb');
  const modeHonestyEl = $('real-mode');
  const layerEl = { versus: $('versus-layer'), swipe: $('swipe-layer') };
  const el = {
    court: $('court'),
    deck: $('deck'),
    versusNum: $('versus-num'),
    versusBtn: $('versus-human'),
    swipeScore: $('swipe-score'),
  };

  /* ------------------------------------------------------------ caption */

  let captionText = '';
  let captionSwap = 0;
  let pendingCaption = null;

  function setCaption(text) {
    const next = text == null ? '' : String(text);
    if (next === captionText) return;
    captionText = next;
    if (!next) {
      captionEl.classList.remove('is-on');
      pendingCaption = null;
      return;
    }
    if (captionEl.classList.contains('is-on')) {
      // cross-fade: drop the old line first, then bring the new one in
      captionEl.classList.remove('is-on');
      pendingCaption = next;
      captionSwap = 0.24;
    } else {
      captionEl.textContent = next;
      captionEl.classList.add('is-on');
    }
  }

  /* ------------------------------------------------------------ verdicts */

  function showVerdict(side, text) {
    const el = verdictEl[side];
    if (!el) return;
    el.textContent = text;
    // force style flush so the transition always runs from the hidden state
    void el.offsetWidth;
    el.classList.add('is-on');
  }

  function hideVerdicts() {
    verdictEl.male.classList.remove('is-on');
    verdictEl.female.classList.remove('is-on');
  }

  function setBadge(side, text) {
    const el = badgeEl[side];
    if (!el) return;
    if (!text) {
      el.hidden = true;
      return;
    }
    el.textContent = text;
    el.hidden = false;
  }

  /* ------------------------------------------------------------ puff */

  let held = false;
  let holdT = 0;

  function begin(e) {
    if (e) e.preventDefault();
    if (held) return;
    held = true;
    puffEl.classList.add('is-held');
    onPuffStart();
  }

  function end() {
    if (!held) return;
    held = false;
    puffEl.classList.remove('is-held');
    onPuffEnd();
  }

  puffEl.addEventListener('pointerdown', (e) => {
    // setPointerCapture throws on synthetic pointers (demo mode, tests); the
    // capture is a nicety, never a requirement, so it must not kill the hold.
    try {
      if (puffEl.setPointerCapture) puffEl.setPointerCapture(e.pointerId);
    } catch (err) {
      // no active pointer with this id — fine
    }
    begin(e);
  });
  puffEl.addEventListener('pointerup', end);
  puffEl.addEventListener('pointercancel', end);
  puffEl.addEventListener('pointerleave', end);
  puffEl.addEventListener('contextmenu', (e) => e.preventDefault());
  window.addEventListener('blur', end);

  puffEl.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      begin();
    }
  });
  puffEl.addEventListener('keyup', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') end();
  });

  // global space bar also works, as long as focus is not in the panel
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !e.repeat && document.activeElement !== puffEl) {
      e.preventDefault();
      begin();
    }
    if (e.code === 'Escape') closePanel();
  });
  window.addEventListener('keyup', (e) => {
    if (e.code === 'Space' && document.activeElement !== puffEl) end();
  });

  /* ------------------------------------------------------------ panel */

  let panelOpen = false;

  function openPanel() {
    panelOpen = true;
    panelEl.classList.add('is-open');
    panelEl.setAttribute('aria-hidden', 'false');
    toggleEl.setAttribute('aria-expanded', 'true');
  }

  function closePanel() {
    if (!panelOpen) return;
    panelOpen = false;
    panelEl.classList.remove('is-open');
    panelEl.setAttribute('aria-hidden', 'true');
    toggleEl.setAttribute('aria-expanded', 'false');
  }

  toggleEl.addEventListener('click', () => (panelOpen ? closePanel() : openPanel()));
  closeEl.addEventListener('click', closePanel);

  /* ------------------------------------------------------------ modes */

  const onMode = opts.onMode || (() => {});
  const modeBtns = modeBarEl ? [...modeBarEl.querySelectorAll('.modebar__btn')] : [];
  let currentMode = 'lab';

  function moveThumb() {
    if (!thumbEl || !modeBarEl) return;
    const active = modeBtns.find((b) => b.dataset.mode === currentMode);
    if (!active) return;
    thumbEl.style.width = active.offsetWidth + 'px';
    thumbEl.style.transform = 'translateX(' + (active.offsetLeft - 3) + 'px)';
  }

  function setMode(name) {
    currentMode = name;
    for (const b of modeBtns) {
      const on = b.dataset.mode === name;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    }
    for (const key in layerEl) {
      if (layerEl[key]) layerEl[key].hidden = key !== name;
    }
    document.body.className = 'mode-' + name;
    moveThumb();
  }

  for (const b of modeBtns) {
    b.addEventListener('click', () => {
      if (b.dataset.mode === currentMode) return;
      onMode(b.dataset.mode);
    });
  }
  window.addEventListener('resize', moveThumb, { passive: true });

  function setModeHonesty(text) {
    if (modeHonestyEl) modeHonestyEl.textContent = text || '';
  }

  /* ------------------------------------------------------------ stages */

  function setVersusScore(m, f) {
    if (el.versusNum) el.versusNum.textContent = m + ' : ' + f;
  }

  function setVersusButton(on) {
    if (el.versusBtn) el.versusBtn.hidden = !on;
  }

  function setSwipeScore(m, f, total, final) {
    if (!el.swipeScore) return;
    if (final) {
      el.swipeScore.innerHTML =
        '<span>He swiped right on <b class="m">' +
        m +
        '/' +
        total +
        '</b>. She swiped right on <b class="f">' +
        f +
        '/' +
        total +
        '</b>. Same profiles.</span>';
      return;
    }
    el.swipeScore.innerHTML =
      '<span>His yes <b class="m">' +
      m +
      '/' +
      total +
      '</b></span><span>Her yes <b class="f">' +
      f +
      '/' +
      total +
      '</b></span>';
  }

  /* ------------------------------------------------------------ fps */

  const debug = new URLSearchParams(location.search).get('debug') === '1';
  let fpsAcc = 0;
  let fpsFrames = 0;
  let fpsExtra = '';
  if (debug) fpsEl.hidden = false;

  function setDebugSuffix(s) {
    fpsExtra = s || '';
  }

  /* ------------------------------------------------------------ tick */

  function update(dt) {
    if (pendingCaption) {
      captionSwap -= dt;
      if (captionSwap <= 0) {
        captionEl.textContent = pendingCaption;
        pendingCaption = null;
        captionEl.classList.add('is-on');
      }
    }

    const target = held ? 1 : 0;
    if (held) holdT = Math.min(1, holdT + dt / HOLD_FILL);
    else holdT = Math.max(0, holdT - dt / 0.34);
    void target;
    fillEl.style.strokeDashoffset = String(RING_C * (1 - holdT));

    if (debug) {
      fpsAcc += dt;
      fpsFrames++;
      if (fpsAcc >= 0.5) {
        const fps = fpsFrames / fpsAcc;
        fpsEl.textContent = fps.toFixed(0) + ' fps' + (fpsExtra ? '  ' + fpsExtra : '');
        fpsAcc = 0;
        fpsFrames = 0;
      }
    }
  }

  function bootDone() {
    if (!bootEl) return;
    bootEl.classList.add('is-gone');
    setTimeout(() => bootEl.remove(), 600);
  }

  function bootFail(msg) {
    if (bootEl) bootEl.textContent = msg;
  }

  return {
    setCaption,
    showVerdict,
    hideVerdicts,
    setBadge,
    update,
    bootDone,
    bootFail,
    closePanel,
    setDebugSuffix,
    debug,
    el,
    setMode,
    setModeHonesty,
    setVersusScore,
    setVersusButton,
    setSwipeScore,
    get mode() {
      return currentMode;
    },
    get isHeld() {
      return held;
    },
    get panelIsOpen() {
      return panelOpen;
    },
  };
}
