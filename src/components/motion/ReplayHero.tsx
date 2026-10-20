"use client";

export function ReplayHero() {
  return (
    <button
      className="hero-replay"
      type="button"
      aria-label="Replay opening animation"
      onClick={() => window.dispatchEvent(new Event("flat-hack-replay"))}
    >
      <span aria-hidden="true">↺</span>
      <span>Replay intro</span>
    </button>
  );
}
