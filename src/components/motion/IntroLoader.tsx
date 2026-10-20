"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const introFrames = [
  "/assets/intro-artwork.webp",
  "/assets/flat-605-worktable.webp",
  "/assets/collage-seated.webp",
  "/assets/collage-reader.webp",
  "/assets/collage-explorer.webp",
  "/assets/flat-605-workspace.webp",
  "/assets/collage-maker.webp",
  "/assets/collage-community.webp",
  "/assets/execution-balance.png",
  "/assets/flat-hack-hero-poster.webp",
];

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [run, setRun] = useState(0);
  const wasVisible = useRef(false);

  useEffect(() => {
    const replay = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      setVisible(true);
      setExiting(false);
      setRun((value) => value + 1);
    };

    window.addEventListener("flat-hack-replay", replay);
    return () => window.removeEventListener("flat-hack-replay", replay);
  }, []);

  useEffect(() => {
    if (!visible) {
      if (wasVisible.current) {
        window.dispatchEvent(new Event("flat-hack-hero-resume"));
        document.querySelector<HTMLButtonElement>(".hero-replay")?.focus();
      }
      wasVisible.current = false;
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionTimer = window.setTimeout(() => setVisible(false), 0);
      return () => window.clearTimeout(reducedMotionTimer);
    }

    wasVisible.current = true;
    window.dispatchEvent(new Event("flat-hack-hero-hold"));
    const exitTimer = window.setTimeout(() => {
      setExiting(true);
    }, 4100);
    const closeTimer = window.setTimeout(() => {
      setVisible(false);
    }, 5300);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(closeTimer);
    };
  }, [run, visible]);

  return (
    <>
      {visible && (
        <div
          className="intro-loader"
          key={run}
          data-exiting={exiting ? "true" : undefined}
          aria-hidden="true"
        >
          <div className="intro-lockup" aria-hidden="true">
            <span className="intro-left">Flat</span>
            <div className="intro-center">
              <Image className="intro-symbol" src="/assets/flat-hack-house.svg" alt="" width={96} height={96} priority />
              {introFrames.map((src, index) => (
                <Image
                  className={`intro-frame ${index === introFrames.length - 1 ? "intro-frame--final" : "intro-frame--montage"}`}
                  src={src}
                  alt=""
                  width={394}
                  height={300}
                  priority={index === 0 || index === introFrames.length - 1}
                  style={{ animationDelay: `${1300 + index * 220}ms` }}
                  key={src}
                />
              ))}
            </div>
            <span className="intro-right">Hack 605</span>
          </div>
        </div>
      )}
    </>
  );
}
