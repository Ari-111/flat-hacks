import { Reveal } from "@/components/motion/Reveal";

export function Manifesto() {
  return (
    <section className="manifesto section" aria-labelledby="manifesto-title">
      <div className="manifesto-intro">
        <p className="section-kicker">What matters here</p>
        <h2 id="manifesto-title">Made with real people.<br /><em>Built for the real world.</em></h2>
        <p>Good prototypes carry the mark of the people who shaped them. Listen closely, show your choices, and keep making the work better.</p>
      </div>
      <Reveal className="manifesto-stack">
        <div className="manifesto-stack__sheet manifesto-stack__sheet--back" />
        <div className="manifesto-stack__sheet manifesto-stack__sheet--middle" />
        <div className="manifesto-stack__sheet manifesto-stack__sheet--front">
          <span>THE FLAT HACK WAY</span>
          <p>“Make the first version. Put it in someone else’s hands. Let what you learn shape the next one.”</p>
          <small>605 / BUILD · LAUNCH · EARN</small>
        </div>
      </Reveal>
    </section>
  );
}
