import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const facts = [["32", "hours"], ["06", "teams"], ["12", "builders"], ["$100", "to win"]] as const;

export function About() {
  return (
    <section className="intro section" id="about" aria-labelledby="about-title">
      <Reveal className="intro-grid">
        <div>
          <p className="section-kicker">NOT A PITCH-DECK HACKATHON</p>
          <h2 id="about-title">Build it.<br /><em>Then sell it.</em></h2>
        </div>
        <div>
          <p className="large-copy">Flat Hack 605 brings 12 experienced builders into one flat for a continuous 32-hour race to build, launch, acquire customers, and generate real product revenue.</p>
          <p className="body-copy">Bring a new idea, an unfinished MVP, or a deployed product that has never made money. What matters is what your team can ship—and who is willing to pay for it—inside the official window.</p>
        </div>
      </Reveal>
      <div className="event-proof">
        <div className="event-proof__image"><Image src="/assets/flat-605-worktable.webp" alt="The shared worktable inside Flat 605, prepared with laptops, notebooks, chairs, and a planning whiteboard" fill sizes="(max-width: 700px) 100vw, 62vw" /></div>
        <div className="event-proof__aside">
          <div className="event-proof__exterior"><Image src="/assets/flat-605-exterior.webp" alt="Exterior view near the Flat 605 event venue" fill sizes="(max-width: 700px) 100vw, 30vw" /></div>
          <div className="event-proof__facts" aria-label="Event facts">{facts.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
        </div>
      </div>
    </section>
  );
}
