"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionStyle } from "motion/react";
import { HeroVideo } from "@/components/motion/HeroVideo";

const tiles = [
  { image: "/assets/collage-seated.webp", className: "feedback-tile feedback-tile--one" },
  { image: "/assets/collage-reader.webp", className: "feedback-tile feedback-tile--two" },
  { image: "/assets/collage-maker.webp", className: "feedback-tile feedback-tile--three" },
  { image: "/assets/collage-explorer.webp", className: "feedback-tile feedback-tile--four" },
  { image: "/assets/collage-community.webp", className: "feedback-tile feedback-tile--five" },
];

const executionBeats = [
  { title: <>Execution is free.<br /><em>Judgment is everything.</em></>, description: "Make something small enough to test and strong enough to start a conversation." },
  { title: <>Build quickly.<br /><em>Test honestly.</em></>, description: "Put an early version in front of people and pay attention to what happens." },
  { title: <>Show the work.<br /><em>Share what you learned.</em></>, description: "The final demo is more than a pitch: it is evidence, decisions, and a next step." },
];

export function EditorialMoments() {
  const feedbackRef = useRef<HTMLElement>(null);
  const executionRef = useRef<HTMLElement>(null);
  const finaleRef = useRef<HTMLElement>(null);
  const [executionBeat, setExecutionBeat] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress: feedbackProgress } = useScroll({ target: feedbackRef, offset: ["start start", "end end"] });
  const { scrollYProgress: executionProgress } = useScroll({ target: executionRef, offset: ["start start", "end end"] });
  const { scrollYProgress: finaleProgress } = useScroll({ target: finaleRef, offset: ["start start", "end end"] });
  const feedbackHeadingX = useTransform(feedbackProgress, [0, 0.5, 1], [180, 0, -180]);
  const feedbackHeadingScale = useTransform(feedbackProgress, [0, 0.5, 1], [0.86, 1, 0.86]);
  const executionImageScale = useTransform(executionProgress, [0, 1], [1.25, 1]);
  const executionImageY = useTransform(executionProgress, [0, 1], [48, -48]);
  const executionCopyY = useTransform(executionProgress, [0, 1], [52, -52]);
  const finaleCopyScale = useTransform(finaleProgress, [0, 0.5, 1], [0.86, 1, 0.92]);

  useMotionValueEvent(executionProgress, "change", (value) => {
    setExecutionBeat(Math.min(executionBeats.length - 1, Math.floor(value * executionBeats.length)));
  });

  return (
    <>
      <section className="signal-banner" aria-labelledby="signal-title">
        <Image src="/assets/flat-hack-signal-poster.webp" alt="An artist working with a stylus" fill sizes="100vw" />
        <HeroVideo src="/assets/flat-hack-signal.webm" poster="/assets/flat-hack-signal-poster.webp" />
        <div className="signal-banner__copy">
          <p className="section-kicker">THE HUMAN SIGNAL</p>
          <h2 id="signal-title">Connecting with the missing signal: perspective.</h2>
          <p>Bring your point of view into a shared build. The strongest work comes from the things different people notice.</p>
          <div className="signal-tags"><span>Developers</span><span>Designers</span><span>Researchers</span><span>Storytellers</span></div>
        </div>
      </section>

      <section className="feedback-wall" ref={feedbackRef} aria-labelledby="feedback-title">
        <motion.div className="feedback-wall__stage" style={{ "--feedback-progress": reduceMotion ? 0.5 : feedbackProgress } as MotionStyle}>
          <div className="feedback-wall__images" aria-hidden="true">
            {tiles.map((tile) => <div className={tile.className} key={tile.image}><Image src={tile.image} alt="" fill sizes="20vw" /></div>)}
          </div>
          <div className="feedback-wall__title">
            <motion.h2 id="feedback-title" style={{ x: reduceMotion ? 0 : feedbackHeadingX, scale: reduceMotion ? 1 : feedbackHeadingScale }}>Feedback<br />that feels<br />human.</motion.h2>
          </div>
          <p>Build, share, listen, and build again.</p>
        </motion.div>
      </section>

      <section className="execution-story" ref={executionRef} aria-label="A prototype takes shape">
        <motion.div className="execution-banner" style={{ "--execution-progress": reduceMotion ? 0.5 : executionProgress } as MotionStyle}>
          <motion.div className="execution-banner__art" style={{ scale: reduceMotion ? 1 : executionImageScale, y: reduceMotion ? 0 : executionImageY }}>
            <Image src="/assets/execution-balance.png" alt="A Renaissance balance scale held between two hands" fill sizes="100vw" />
          </motion.div>
          <motion.div className="execution-banner__copy" style={{ y: reduceMotion ? 0 : executionCopyY }}>
          <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="execution-banner__message"
            key={executionBeat}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: reduceMotion ? 0 : 0.24 }}
          >
          <p className="section-kicker">FROM IDEA TO EVIDENCE</p>
          <h2 id="execution-title">{executionBeats[executionBeat].title}</h2>
          <p>{executionBeats[executionBeat].description}</p>
          </motion.div>
          </AnimatePresence>
          <a className="button button-light" href="#timeline">Explore the format ↗</a>
          </motion.div>
        </motion.div>
      </section>

      <section className="network-finale" ref={finaleRef} aria-labelledby="network-finale-title">
        <motion.div className="network-finale__stage" style={{ "--finale-progress": reduceMotion ? 0.5 : finaleProgress } as MotionStyle}>
          <div className="network-finale__tile network-finale__tile--one"><Image src="/assets/collage-community.webp" alt="" fill sizes="25vw" /></div>
          <div className="network-finale__tile network-finale__tile--two"><Image src="/assets/collage-reader.webp" alt="" fill sizes="25vw" /></div>
          <div className="network-finale__tile network-finale__tile--three"><Image src="/assets/collage-maker.webp" alt="" fill sizes="25vw" /></div>
          <div className="network-finale__tile network-finale__tile--four"><Image src="/assets/collage-seated.webp" alt="" fill sizes="25vw" /></div>
          <div className="network-finale__tile network-finale__tile--five"><Image src="/assets/collage-hands.webp" alt="" fill sizes="18vw" /></div>
          <div className="network-finale__tile network-finale__tile--six"><Image src="/assets/flat-hack-signal-poster.webp" alt="" fill sizes="18vw" /></div>
          <div className="network-finale__layout">
            <motion.div className="network-finale__copy" style={{ scale: reduceMotion ? 1 : finaleCopyScale }}>
            <p className="section-kicker">THE PEOPLE MAKE THE PLACE</p>
            <h2 id="network-finale-title">The network for creative possibility.</h2>
            <p>Find collaborators, exchange perspective, and build a first version together.</p>
            <a className="button button-dark" href="#register">Join Flat Hack 605 ↗</a>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </>
  );
}
