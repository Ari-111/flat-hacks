import Link from "next/link";
import { Brand } from "@/components/ui/Brand";
import { event, emailHref, externalHref } from "@/lib/site";

const routeLinks = [
  ["Application guide", "/apply"],
  ["Competition rules", "/rules"],
  ["For sponsors", "/sponsors"],
  ["Privacy", "/privacy"],
] as const;

export function SiteFooter() {
  const application = externalHref(event.applicationUrl);
  const sponsor = externalHref(event.sponsorUrl);
  const sponsorEmail = emailHref(event.sponsorEmail) ?? emailHref(event.contactEmail);
  const contact = emailHref(event.contactEmail);
  const socials = Object.entries(event.socials)
    .map(([label, url]) => [label, externalHref(url)] as const)
    .filter((entry): entry is readonly [string, string] => Boolean(entry[1]));

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <Link className="footer-mark" href="/" aria-label="Flat Hack 605 home"><Brand /></Link>
          <p className="site-footer__summary">32 hours. Six teams. One flat. The first to $100 in verified product revenue wins.</p>
          <p className="site-footer__note">October 25–26, 2026 · In person · Livestreamed</p>
        </div>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          <p className="site-footer__label">EVENT</p>
          {routeLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          {contact && <a href={contact}>Contact organizers</a>}
        </nav>
        {socials.length > 0 && <nav className="site-footer__socials" aria-label="Official social links"><p className="site-footer__label">FOLLOW</p>{socials.map(([label, href]) => <a href={href} key={label} target="_blank" rel="noopener noreferrer">{label === "x" ? "X" : label} ↗</a>)}</nav>}
        <div className="site-footer__action">
          <p className="site-footer__label">BUILD. LAUNCH. EARN.</p>
          {application ? <a className="site-footer__primary" href={application} target="_blank" rel="noopener noreferrer">Apply to Flat Hack 605 ↗</a> : <Link className="site-footer__primary is-disabled" href="/apply">Read the application guide →</Link>}
          {sponsor ? <a className="site-footer__secondary" href={sponsor} target="_blank" rel="noopener noreferrer">Become a founding sponsor ↗</a> : <Link className="site-footer__secondary" href="/sponsors">Explore sponsorship</Link>}
          {sponsorEmail && <a href={sponsorEmail}>Email the sponsor team</a>}
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Flat Hack 605</span>
        <span>Full venue details are shared only with selected teams.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
