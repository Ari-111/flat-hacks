import { Reveal } from "@/components/motion/Reveal";
import { HeroVideo } from "@/components/motion/HeroVideo";

export function Community() {
  return (
    <section className="community section" aria-labelledby="community-title">
      <Reveal className="community-grid">
        <div><p className="section-kicker">Built together</p><h2 id="community-title">The<br />network<br />of makers.</h2></div>
        <div className="community__media" aria-hidden="true">
          <HeroVideo src="/assets/contra-network-original.webm" poster="/assets/collage-community.webp" />
        </div>
        <p className="large-copy">The room works when teams do not all look alike. Deep technical skill meets research, storytelling, visual judgment, and lived experience.</p>
      </Reveal>
    </section>
  );
}
