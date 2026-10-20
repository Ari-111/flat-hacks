"use client";

import Image from "next/image";
import { useState } from "react";
import { challengeSteps } from "@/content/home";

const trackImages = [
  "/assets/track-creative-arena.png",
  "/assets/track-benchmarking.png",
  "/assets/track-creative-preference.png",
  "/assets/track-trajectories.png",
];

export function Tracks() {
  const [activeTrack, setActiveTrack] = useState<number | null>(null);

  return (
    <section className="tracks section section-teal" id="challenge" aria-labelledby="tracks-title">
      <div className="tracks-heading"><p className="section-kicker">THE CHALLENGE</p><h2 id="tracks-title">Can you make something people will pay for?</h2><p>Open each stage to see what counts.</p></div>
      <div className="track-list">
        {challengeSteps.map((track, index) => (
          <button
            className="track-row"
            type="button"
            aria-expanded={activeTrack === index}
            aria-controls={`track-detail-${track.number}`}
            onClick={() => setActiveTrack(activeTrack === index ? null : index)}
            key={track.number}
          >
            <Image src={trackImages[index]} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />
            <span className="track-row__color" aria-hidden="true" />
            <span className="track-row__pattern" aria-hidden="true" />
            <span className="track-row__shade" />
            <span className="track-row__number">{track.number} / A WAY IN</span>
            <span className="track-row__copy">
              <span className="track-row__title">{track.title}</span>
              <span className="track-row__hint">{activeTrack === index ? "Close the brief" : "Open the brief"}</span>
            </span>
            <span className="track-row__detail" id={`track-detail-${track.number}`} aria-hidden={activeTrack !== index}>
              <span>{track.prompt}</span>
              <span className="track-row__detail-note">{track.copy}</span>
            </span>
            <span className="track-arrow" aria-hidden="true">{activeTrack === index ? "×" : "↗"}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
