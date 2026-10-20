"use client";

import { useEffect, useState } from "react";
import { eventStatus } from "@/lib/site";

export function timeUntil(startAt: string, now: number): number[] | null {
  const target = Date.parse(startAt);
  if (!Number.isFinite(target)) return null;
  const remaining = Math.max(0, target - now);
  return [
    Math.floor(remaining / 86400000),
    Math.floor((remaining / 3600000) % 24),
    Math.floor((remaining / 60000) % 60),
    Math.floor((remaining / 1000) % 60),
  ];
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  const status = now === null ? null : eventStatus(now);
  const remaining = status?.target && now !== null ? timeUntil(status.target, now) : null;

  useEffect(() => {
    const update = () => setNow(Date.now());
    const initialTimer = window.setTimeout(update, 0);
    const interval = window.setInterval(update, 1000);
    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(interval);
    };
  }, []);

  if (!status) {
    return <div className="hero-countdown hero-countdown--pending" aria-label="Event timing"><span className="hero-countdown-label">EVENT STATUS</span><span className="hero-countdown-pending">Loading current status…</span></div>;
  }

  return (
    <div className={`hero-countdown hero-countdown--${status.phase}`} aria-label={status.label}>
      <span className="hero-countdown-label">{status.label}</span>
      {remaining ? (
        <div className="hero-countdown-numbers" role="timer" aria-live="off">
          {remaining.map((value, index) => (
            <span key={index}>
              <strong>{String(value).padStart(2, "0")}</strong>
              <small>{["days", "hours", "mins", "secs"][index]}</small>
            </span>
          ))}
        </div>
      ) : <span className="hero-countdown-pending">{status.phase === "live" ? "32 hours in motion" : status.label}</span>}
    </div>
  );
}
