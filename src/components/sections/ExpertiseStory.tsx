"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionStyle } from "motion/react";

const chapters = [
  { eyebrow: "01 / EVIDENCE", title: "Show us what you have shipped", description: "Strong applications connect previous work to a credible product, customer, and 32-hour execution plan." },
  { eyebrow: "02 / SELECTION", title: "Five application teams. One wildcard.", description: "Only six teams enter the flat. Shortlisted applicants interview online with both teammates present." },
  { eyebrow: "03 / COMMITMENT", title: "Stay for the build and the business", description: "Selected teams commit to the full event, the livestream, verified payments, and every final deliverable." },
];

const images = [
  { src: "/assets/flat-605-worktable.webp", className: "story-image story-image--one" },
  { src: "/assets/flat-605-workspace.webp", className: "story-image story-image--two" },
  { src: "/assets/collage-reader.webp", className: "story-image story-image--three" },
  { src: "/assets/collage-hands.webp", className: "story-image story-image--four" },
  { src: "/assets/collage-community.webp", className: "story-image story-image--five" },
  { src: "/assets/collage-explorer.webp", className: "story-image story-image--six" },
];

export function ExpertiseStory() {
  const ref = useRef<HTMLElement>(null);
  const [chapter, setChapter] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setChapter(Math.min(2, Math.floor(value * 3)));
  });

  return (
    <section className="expertise-story" ref={ref} aria-label="How teams are selected">
      <motion.div className="expertise-story__sticky" style={{ "--story-progress": reduceMotion ? 0 : scrollYProgress } as MotionStyle}>
        <span className="expertise-story__eyebrow">FLAT HACK 605 / HOW SELECTION WORKS</span>
        <div className="expertise-story__images" aria-hidden="true">
          {images.map((image) => (
            <div className={image.className} key={image.src}>
              <Image src={image.src} alt="" fill sizes="(max-width: 700px) 40vw, 25vw" />
            </div>
          ))}
        </div>
        <div className="expertise-story__copy" key={chapter}>
          <span>{chapters[chapter].eyebrow}</span>
          <h2>{chapters[chapter].title}</h2>
          <p>{chapters[chapter].description}</p>
        </div>
        <div className="expertise-story__steps" aria-label={`Story chapter ${chapter + 1} of 3`}>
          {chapters.map((item, index) => <span className={index === chapter ? "active" : ""} key={item.eyebrow} />)}
        </div>
        <div className="expertise-story__progress" aria-hidden="true">
          <motion.span style={{ scaleY: reduceMotion ? 1 : progressScale }} />
        </div>
      </motion.div>
    </section>
  );
}
