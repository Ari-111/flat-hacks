import { DetailPage } from "@/components/layout/DetailPage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { sponsorships } from "@/content/home";
import { event, emailHref, externalHref, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Sponsors", "Founding partnership opportunities for Flat Hack 605.", "/sponsors");

export default function SponsorsPage() {
  const sponsor = externalHref(event.sponsorUrl);
  const email = emailHref(event.sponsorEmail) ?? emailHref(event.contactEmail);
  return <DetailPage kicker="FOUNDING PARTNERS" title="Help power 32 hours of building." intro="Support experienced independent builders as they turn products into paying businesses in public.">
    <section className="detail-callout"><h2>Immediate priority</h2><p>Food, refreshments, developer tools, approved credits, and essential event operations. Contributions may be cash or agreed in-kind support.</p><ButtonLink href={sponsor ?? email} target={sponsor ? "_blank" : undefined} rel={sponsor ? "noopener noreferrer" : undefined} unavailableLabel="Sponsor inquiry link coming soon">Start a sponsor conversation</ButtonLink></section>
    <div className="sponsor-detail-grid">{sponsorships.map(([name, amount, benefits]) => <article key={name}><p className="section-kicker">{name}</p><h2>{amount}</h2><p>{benefits}</p></article>)}</div>
    <section><h2>What partnership can include</h2><p>Website placement, livestream acknowledgment, agreed sponsor segments, social content, event recap recognition, and approved developer-tool demonstrations. Exact deliverables are confirmed in writing for each partner.</p><p className="legal-note">Packages are proposals subject to agreement. Flat Hack 605 does not guarantee audience size, livestream viewership, engagement, or commercial results.</p></section>
  </DetailPage>;
}
