export const navigation = [
  { href: "#challenge", label: "Challenge" },
  { href: "#apply", label: "Apply" },
  { href: "#timeline", label: "Timeline" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#faq", label: "FAQ" },
] as const;

export const challengeSteps = [
  { number: "01", title: "Build", prompt: "Ship a real software or digital product within the 32-hour competition window.", copy: "Start from a new idea, an unfinished prototype, or a deployed product that has never generated revenue." },
  { number: "02", title: "Launch", prompt: "Put the product in front of real customers instead of waiting for a judging room.", copy: "Deploy it, explain the problem clearly, integrate the approved payment flow, and start acquiring customers." },
  { number: "03", title: "Sell", prompt: "Earn legitimate product revenue from people who are not members of your own team.", copy: "Only eligible sales completed during the official event window count toward the competition total." },
  { number: "04", title: "Verify", prompt: "The first team to reach $100 in verified eligible revenue wins the GPU.", copy: "Refunded, reversed, circular, manipulated, or self-funded transactions do not qualify." },
] as const;

export const selectionSteps = [
  ["Applications", "Teams submit evidence of previous work, product readiness, and a credible path to the first three customers."],
  ["Shortlisting", "Organizers review technical experience, execution capability, monetization strategy, and commitment."],
  ["Online interviews", "Shortlisted teams join a 15–20 minute interview on October 23. Both teammates should attend."],
  ["Six teams", "Five teams are selected from applications and one organizer wildcard completes the room."],
  ["Confirmation", "Every selected participant accepts the final rules, filming terms, safety guidance, and payment process."],
] as const;

export const timeline = [
  ["Oct 22 · 11:59 PM", "Applications close. Submission is an application, not automatic registration."],
  ["Oct 23", "Shortlisted teams attend online interviews with both teammates present."],
  ["Oct 24", "Final selection, rules acknowledgment, and technical onboarding."],
  ["Oct 25 · 10:00 AM", "The 32-hour build, launch, sales, and livestream window begins."],
  ["Oct 26 · 6:00 PM", "Products, demos, revenue summaries, and final submissions are due."],
] as const;

export const deliverables = [
  ["Live product", "A deployed, accessible, functioning software or digital product."],
  ["Validated payment flow", "An approved purchase path tested during the event."],
  ["Product demo", "A self-recorded walkthrough of the problem, product, customer, and purchase experience."],
  ["Final submission", "The live link, demo link, project details, and qualifying revenue summary."],
] as const;

export const sponsorships = [
  ["Food partner", "₹3,000–₹5,000 or equivalent", "Food-segment recognition, website placement, and social mentions."],
  ["Community partner", "₹2,500", "Website placement, livestream acknowledgment, and recap recognition."],
  ["Builder partner", "₹5,000", "Developer-tool showcase, brand placement, and content features."],
  ["Presenting partner", "₹10,000", "Headline visibility, selected dedicated reels, and opening and closing mentions."],
] as const;

export const applicationSections = [
  { title: "Team information", questions: ["What is your team name?", "What are the full names and ages of both team members?", "What is the team leader’s email address and WhatsApp number?", "Which city are you applying from?", "Share both members’ GitHub, LinkedIn, portfolio, or previous project links."] },
  { title: "Experience", questions: ["What is the most technically challenging product you have built? Explain your contribution and share evidence.", "Have you launched a product for real users or generated revenue from one?", "What are the primary technical and business skills of each team member?"] },
  { title: "Product and execution", questions: ["What software or digital product are you planning to build, complete, or monetize?", "What is its current stage: new build, prototype, working MVP, or deployed but not monetized?", "Who are your target customers, and what problem does the product solve?", "How will you acquire your first three paying customers during the event?", "What is your execution plan, and what will each teammate own?"] },
  { title: "Commitment", questions: ["Can both members attend from October 25 at 10 AM until October 26 at 6 PM?", "Can your team deliver a deployed product, validated payment flow, and self-recorded demo?", "Do you agree to the competition, livestream, payment-verification, and participation guidelines?"] },
] as const;

export const faqs = [
  ["Who can apply?", "Experienced builders aged 18 or older may apply in two-person teams. There are no college, employment, or institution restrictions."],
  ["Can we bring an existing product?", "Yes. An unfinished MVP, prototype, or deployed product is eligible if it has not previously generated revenue. Only new eligible sales during the event count."],
  ["What can we build?", "SaaS products, AI applications, software tools, mobile or web applications, developer tools, and other legitimate software-based digital products."],
  ["Do sales from friends count?", "A genuine customer purchase may qualify regardless of personal connection, but self-payments, fake transactions, circular payments, refunds, and manipulation never count."],
  ["How are payments verified?", "Organizers intend to provide identifiable temporary Razorpay payment links, subject to provider approval. Final settlement, refund, and exchange-rate rules will be published before the event."],
  ["What exactly does the winner receive?", "The first team to reach $100 in verified eligible revenue receives one GPU in total, stated by organizers at ₹80,000. The model, condition, transfer, and tax terms are still to be disclosed."],
  ["What happens if nobody reaches $100?", "There is no fallback winner. The GPU remains with the organizers, even if one team has the highest revenue below the target."],
  ["Where is Flat 605?", "The event is in person inside Flat 605. The full address and arrival instructions are shared only with selected teams."],
  ["Do participants need to stay awake on camera for 32 hours?", "No. Teams may take appropriate rest breaks. The continuous stream does not require every participant to remain awake or visible throughout."],
] as const;
