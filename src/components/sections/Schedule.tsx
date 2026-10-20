import { Reveal } from "@/components/motion/Reveal";
import { timeline } from "@/content/home";

export function Schedule() {
  return (
    <section className="schedule section" id="timeline" aria-labelledby="schedule-title">
      <Reveal className="schedule-grid">
        <div className="schedule-sticky">
          <p className="section-kicker">THE CLOCK STARTS BEFORE THE EVENT</p>
          <h2 id="schedule-title">Five dates.<br />One intense run.</h2>
          <p>Applications, interviews, onboarding, and the official competition window all use India Standard Time.</p>
        </div>
        <ol className="timeline">
          {timeline.map(([title, copy], index) => (
            <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
