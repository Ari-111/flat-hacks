import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { About } from "@/components/sections/About";
import { EventDetails } from "@/components/sections/EventDetails";
import { ExpertiseStory } from "@/components/sections/ExpertiseStory";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Registration } from "@/components/sections/Registration";
import { Schedule } from "@/components/sections/Schedule";
import { Tracks } from "@/components/sections/Tracks";

export default function Home() {
  return (
    <main id="main-content">
      <span id="top" />
      <SiteHeader />
      <Hero />
      <About />
      <Tracks />
      <EventDetails />
      <ExpertiseStory />
      <Schedule />
      <Faq />
      <Registration />
      <SiteFooter />
    </main>
  );
}
