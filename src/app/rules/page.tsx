import { DetailPage } from "@/components/layout/DetailPage";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Competition rules", "Eligibility, revenue verification, prize, deliverables, and conduct rules for Flat Hack 605.", "/rules");

const rules = [
  ["Eligibility and teams", ["Every participant must be at least 18 years old.", "Teams consist of exactly two members.", "Five teams are selected through applications and one is an organizer wildcard.", "All teams, including the wildcard, follow the same competition rules."]],
  ["Products", ["Teams may build or monetize legitimate software and digital products.", "A new build, prototype, working MVP, or deployed product that has never generated revenue is eligible.", "Only new eligible sales completed during the official competition window count.", "Products must comply with applicable law and payment-provider rules."]],
  ["Revenue verification", ["Only genuine customer payments for a legitimate product sale qualify.", "Team members may not pay themselves.", "Fake, circular, manipulated, fraudulent, refunded, or reversed payments do not count.", "Organizers may request supporting evidence and apply the same published verification standard to every team.", "Temporary Razorpay links are intended but remain subject to provider approval and final settlement terms."]],
  ["Winner and prize", ["The first team to accumulate $100 in verified eligible revenue becomes the provisional winner.", "The prize is one GPU for the winning team, stated by organizers at ₹80,000—not one GPU per participant.", "If nobody reaches $100, there is no winner and the GPU remains with the organizers.", "The exact GPU model, condition, ownership transfer, valuation basis, and tax treatment will be disclosed in the final prize terms."]],
  ["Required submission", ["A deployed working product.", "A validated approved payment flow.", "A self-recorded product demonstration.", "A final submission with product and demo links.", "A qualifying-revenue and customer-acquisition summary."]],
  ["Conduct and broadcast", ["Participants must act professionally and respect people, equipment, and the venue.", "Credentials, payment information, personal customer information, and private spaces must not be broadcast.", "Participants may take rest breaks and are not required to remain awake or on camera continuously.", "Material violations may result in disqualification under fair and consistent enforcement."]],
] as const;

export default function RulesPage() {
  return <DetailPage kicker="COMPETITION RULES" title="Real revenue needs clear rules." intro="These are the currently published competition principles. Final payment, exchange-rate, tie-breaking, refund, filming, safety, and prize-transfer documents will be issued before participation."><div className="rule-sections">{rules.map(([title, items], index) => <section key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div></section>)}</div></DetailPage>;
}
