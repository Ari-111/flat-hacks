import { DetailPage } from "@/components/layout/DetailPage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { applicationSections } from "@/content/home";
import { event, externalHref, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Apply", "Eligibility, selection, dates, and every application question for Flat Hack 605.", "/apply");

export default function ApplyPage() {
  const application = externalHref(event.applicationUrl);
  return (
    <DetailPage kicker="TEAM APPLICATION" title="Apply to Flat Hack 605." intro="Five teams are selected through public applications. One additional wildcard team is chosen independently by the organizers.">
      <section className="detail-callout"><h2>Before you begin</h2><p>Apply as a two-person team. Both members must be 18+, experienced enough to ship a working product in 32 hours, and available for the complete event.</p><ButtonLink href={application} target={application ? "_blank" : undefined} rel={application ? "noopener noreferrer" : undefined} expiresAt={event.applicationDeadline} unavailableLabel="Application link coming soon">Open the team application</ButtonLink><small>Applications close October 22, 2026 at 11:59 PM IST. Submission does not guarantee selection.</small></section>
      <div className="question-sections">
        {applicationSections.map((section, sectionIndex) => {
          const start = applicationSections.slice(0, sectionIndex).reduce((total, item) => total + item.questions.length, 0) + 1;
          return <section key={section.title}><p className="section-kicker">{section.title}</p><ol start={start}>{section.questions.map((question) => <li key={question}>{question}</li>)}</ol></section>;
        })}
      </div>
      <section><h2>What happens next</h2><p>Applications are shortlisted for online interviews on October 23. Both teammates should attend the 15–20 minute conversation. Final teams receive onboarding and participation documents on October 24.</p></section>
    </DetailPage>
  );
}
