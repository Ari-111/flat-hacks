import { Reveal } from "@/components/motion/Reveal";
import { deliverables } from "@/content/home";

export function Criteria() {
  return (
    <section className="criteria section" aria-labelledby="criteria-title">
      <Reveal>
        <div className="section-heading"><p className="section-kicker">Judging lens</p><h2 id="criteria-title">What makes a strong demo?</h2></div>
        <div className="criteria-grid">
        {deliverables.map(([title, copy], index) => (
            <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
