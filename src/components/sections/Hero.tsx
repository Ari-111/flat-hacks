import Image from "next/image";
import { Countdown } from "@/components/motion/Countdown";
import { HeroVideo } from "@/components/motion/HeroVideo";
import { IntroLoader } from "@/components/motion/IntroLoader";
import { ReplayHero } from "@/components/motion/ReplayHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { event, externalHref } from "@/lib/site";

export function Hero() {
  const application = externalHref(event.applicationUrl);
  const sponsor = externalHref(event.sponsorUrl);
  return (
    <section className="hero" aria-labelledby="hero-title">
      <IntroLoader />
      <div className="hero-media" aria-hidden="true">
        <Image className="hero-poster" src="/assets/flat-hack-hero-poster.webp" alt="" fill priority sizes="100vw" />
        <HeroVideo />
      </div>
      <div className="hero-copy">
        <p className="eyebrow">FLAT HACK 605 · OCTOBER 25–26, 2026</p>
        <h1 id="hero-title">32 hours.<br />6 teams.<br />One flat.</h1>
        <p className="hero-intro">Build something real, launch it to the world, and earn your first paying customers. First to $100 in verified revenue wins.</p>
        <div className="hero-actions">
          <ButtonLink href={application} target={application ? "_blank" : undefined} rel={application ? "noopener noreferrer" : undefined} expiresAt={event.applicationDeadline} unavailableLabel="Application link coming soon">Apply now</ButtonLink>
          <ButtonLink href={sponsor ?? "/sponsors"} target={sponsor ? "_blank" : undefined} rel={sponsor ? "noopener noreferrer" : undefined} variant="light">Become a sponsor</ButtonLink>
        </div>
      </div>
      <Countdown />
      <ReplayHero />
      <span className="hero-index" aria-hidden="true">605 / BUILD · LAUNCH · EARN</span>
    </section>
  );
}
