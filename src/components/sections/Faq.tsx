import { Reveal } from "@/components/motion/Reveal";
import { faqs } from "@/content/home";

export function Faq() {
  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <Reveal className="faq-grid">
        <div><p className="section-kicker">BEFORE YOU APPLY</p><h2 id="faq-title">Questions that change the decision.</h2><a className="text-link" href="/rules">Read all competition rules →</a></div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
