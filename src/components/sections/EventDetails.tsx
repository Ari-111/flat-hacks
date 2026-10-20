import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { deliverables, selectionSteps, sponsorships } from "@/content/home";
import { event, emailHref, externalHref } from "@/lib/site";

export function EventDetails() {
  const sponsor = externalHref(event.sponsorUrl);
  const sponsorEmail = emailHref(event.sponsorEmail) ?? emailHref(event.contactEmail);
  const livestream = externalHref(event.livestreamUrl);

  return (
    <>
      <section className="prize-story section section-dark" id="prize" aria-labelledby="prize-title">
        <Reveal className="prize-story__grid">
          <div><p className="section-kicker">THE FINISH LINE</p><h2 id="prize-title">First to<br /><em>$100 wins.</em></h2></div>
          <div className="prize-story__rules">
            <p className="prize-value">One GPU <span>stated value ₹80,000</span></p>
            <p>The first team to accumulate $100 in verified eligible product revenue during the official window becomes the provisional winner.</p>
            <p>If nobody reaches $100, there is no fallback winner. The GPU remains with the organizers.</p>
            <a href="/rules">Read the complete competition rules →</a>
          </div>
        </Reveal>
      </section>

      <section className="eligibility section" id="apply" aria-labelledby="eligibility-title">
        <Reveal className="eligibility__grid">
          <div className="eligibility__copy">
            <p className="section-kicker">WHO CAN APPLY</p>
            <h2 id="eligibility-title">Experienced builders. Two people per team.</h2>
            <p>Independent developers, engineers, founders, freelancers, working professionals, experienced student developers, and product builders aged 18+ are welcome.</p>
            <p>This is not a beginner-focused event. Teams should be able to deploy a working product, talk to customers, and operate professionally under time pressure.</p>
            <a className="text-link" href="/apply">See the application guide and questions →</a>
          </div>
          <div className="eligibility__image"><Image src="/assets/flat-605-workspace.webp" alt="The Flat 605 workspace with development monitors and a hackathon planning board" fill sizes="(max-width: 800px) 100vw, 46vw" /></div>
        </Reveal>
        <ol className="selection-path" aria-label="Team selection process">
          {selectionSteps.map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></li>)}
        </ol>
      </section>

      <section className="deliverables section section-mist" id="deliverables" aria-labelledby="deliverables-title">
        <div className="section-heading split-heading"><p className="section-kicker">BEFORE THE CLOCK STOPS</p><h2 id="deliverables-title">Ship the product.<br /><em>Show the proof.</em></h2></div>
        <div className="deliverables-grid">{deliverables.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="livestream" id="livestream" aria-labelledby="livestream-title">
        <Image src="/assets/execution-balance.png" alt="" fill sizes="100vw" />
        <div className="livestream__shade" />
        <Reveal className="livestream__copy">
          <p className="section-kicker">32-HOUR LIVESTREAM</p>
          <h2 id="livestream-title">Watch products become businesses.</h2>
          <p>Opening pitches, build updates, customer acquisition, verified revenue, final demos, and the winner announcement—documented without broadcasting credentials, payment data, private spaces, or customer information.</p>
          <ButtonLink href={livestream} target={livestream ? "_blank" : undefined} rel={livestream ? "noopener noreferrer" : undefined} variant="light" unavailableLabel="Livestream link coming soon">Watch the livestream</ButtonLink>
        </Reveal>
      </section>

      <section className="sponsors section" id="sponsors" aria-labelledby="sponsors-title">
        <div className="section-heading split-heading"><p className="section-kicker">FOUNDING PARTNERS</p><div><h2 id="sponsors-title">Help power 32 hours of building.</h2><p className="large-copy">Support meals, tools, refreshments, and the infrastructure that helps six teams reach real customers.</p></div></div>
        <div className="sponsor-table">{sponsorships.map(([title, amount, benefits]) => <article key={title}><h3>{title}</h3><strong>{amount}</strong><p>{benefits}</p></article>)}</div>
        <div className="sponsors__action"><p>Packages are proposed and subject to agreement. Audience size, livestream views, and commercial outcomes are not guaranteed.</p><div className="sponsors__links"><ButtonLink href={sponsor ?? "/sponsors"} target={sponsor ? "_blank" : undefined} rel={sponsor ? "noopener noreferrer" : undefined}>Become a founding sponsor</ButtonLink>{sponsorEmail && <a className="text-link" href={sponsorEmail}>Email the sponsor team →</a>}</div></div>
      </section>
    </>
  );
}
