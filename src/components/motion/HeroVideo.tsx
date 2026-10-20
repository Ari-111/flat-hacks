"use client";

import { useEffect, useRef } from "react";

export function HeroVideo({
  src = "/assets/contra-hero-original.webm",
  poster = "/assets/flat-hack-hero-poster.webp",
}: {
  src?: string;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !document.hidden && !motionPreference.matches) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    }, { threshold: 0.05 });
    const syncPlayback = () => {
      if (document.hidden || motionPreference.matches) video.pause();
      else if (video.getBoundingClientRect().bottom > 0 && video.getBoundingClientRect().top < window.innerHeight) {
        void video.play().catch(() => undefined);
      }
    };
    const holdAtOpeningFrame = () => {
      video.currentTime = 0;
      video.pause();
    };

    observer.observe(video);
    document.addEventListener("visibilitychange", syncPlayback);
    motionPreference.addEventListener("change", syncPlayback);
    window.addEventListener("flat-hack-replay", holdAtOpeningFrame);
    window.addEventListener("flat-hack-hero-hold", holdAtOpeningFrame);
    window.addEventListener("flat-hack-hero-resume", syncPlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      motionPreference.removeEventListener("change", syncPlayback);
      window.removeEventListener("flat-hack-replay", holdAtOpeningFrame);
      window.removeEventListener("flat-hack-hero-hold", holdAtOpeningFrame);
      window.removeEventListener("flat-hack-hero-resume", syncPlayback);
    };
  }, []);

  return (
    <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" poster={poster}>
      <source src={src} type="video/webm" />
    </video>
  );
}
