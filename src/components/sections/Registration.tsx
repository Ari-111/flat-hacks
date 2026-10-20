import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { event, externalHref } from "@/lib/site";

export function Registration() {
  const application = externalHref(event.applicationUrl);
  return (
    <section className="register section section-teal" id="register" aria-labelledby="register-title">
      <Reveal>
        <p className="section-kicker">ONLY FIVE APPLICATION SLOTS</p>
        <h2 id="register-title">Bring the product.<br />Find the customer.</h2>
        <div className="register-bottom">
          <p>Applications close October 22, 2026 at 11:59 PM IST. Submission does not guarantee selection; shortlisted teams interview online on October 23.</p>
          <div className="register-actions"><ButtonLink href={application} target={application ? "_blank" : undefined} rel={application ? "noopener noreferrer" : undefined} expiresAt={event.applicationDeadline} unavailableLabel="Application link coming soon">Apply to Flat Hack 605</ButtonLink><a className="text-link" href="/apply">Preview every application question →</a></div>
        </div>
      </Reveal>
    </section>
  );
}
