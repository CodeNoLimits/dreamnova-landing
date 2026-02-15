// ═══════════════════════════════════════════
// DREAM NOVA — Sound Manager
// Web Audio API — Sacred Sounds
// ═══════════════════════════════════════════

let audioCtx: AudioContext | null = null;
let muted = false;

function getCtx(): AudioContext {
  if (!audioCtx) audioCtx = new AudioContext();
  return audioCtx;
}

export function setMuted(val: boolean) { muted = val; }
export function isMuted() { return muted; }

function playTone(freq: number, duration: number, type: OscillatorType = 'sine', gain = 0.08) {
  if (muted || typeof window === 'undefined') return;
  try {
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.linearRampToValueAtTime(gain, ctx.currentTime + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch { /* silently fail */ }
}

/** Crystal chime — language switch */
export function playChime() {
  playTone(1200, 0.3, 'sine', 0.06);
  setTimeout(() => playTone(1600, 0.4, 'sine', 0.04), 100);
  setTimeout(() => playTone(2000, 0.5, 'sine', 0.03), 200);
}

/** Subtle resonance — hover */
export function playHover() {
  playTone(800, 0.15, 'sine', 0.03);
}

/** Gentle whoosh — scroll into view */
export function playWhoosh() {
  if (muted || typeof window === 'undefined') return;
  try {
    const ctx = getCtx();
    const bufferSize = ctx.sampleRate * 0.3;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 3);
    }
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2000, ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(500, ctx.currentTime + 0.3);
    filter.Q.value = 2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.04, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    src.connect(filter);
    filter.connect(g);
    g.connect(ctx.destination);
    src.start();
  } catch { /* silently fail */ }
}

/** Sacred tone — checkout success */
export function playSacred() {
  playTone(528, 0.6, 'sine', 0.06); // 528Hz — Solfeggio healing frequency
  setTimeout(() => playTone(639, 0.5, 'sine', 0.04), 200);
  setTimeout(() => playTone(741, 0.7, 'sine', 0.03), 400);
}
