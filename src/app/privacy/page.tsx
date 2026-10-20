import { DetailPage } from "@/components/layout/DetailPage";
import { event, emailHref, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Privacy notice", "Interim website privacy notice for Flat Hack 605.", "/privacy");

export default function PrivacyPage() {
  const contact = emailHref(event.contactEmail);
  return <DetailPage kicker="INTERIM PRIVACY NOTICE" title="What this website does—and does not—collect." intro="This notice covers the public website. Selected participants will receive separate filming, participation, payment-verification, and safety documents before attending.">
    <div className="privacy-sections">
      <section><h2>Website submissions</h2><p>This website does not currently store application or sponsor-inquiry submissions. When configured, those actions open an external service whose own privacy notice and data practices apply.</p></section>
      <section><h2>Technical data</h2><p>The hosting provider may process standard request information such as IP address, browser details, timestamps, and requested pages for security and delivery. No analytics or advertising tracker is intentionally configured in this codebase.</p></section>
      <section><h2>Livestream and participants</h2><p>The public livestream must not reveal credentials, payment information, private customer data, or private areas. This page is not a substitute for the individual filming and participation consent required from selected participants.</p></section>
      <section><h2>Updates and contact</h2><p>Final participant, payment, and filming documentation will be supplied before the event. This notice will be updated when the application provider, sponsor contact, hosting arrangement, or data practices change.</p>{contact ? <a className="text-link" href={contact}>Contact the organizers →</a> : <p className="legal-note">The official privacy contact will be published when confirmed.</p>}</section>
    </div>
  </DetailPage>;
}
