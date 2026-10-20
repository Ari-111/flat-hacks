import type { Metadata, Viewport } from "next";
import { faqs } from "@/content/home";
import { event } from "@/lib/site";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  icons: { icon: "/icon.svg" },
  category: "technology",
  keywords: ["hackathon", "indie hackers", "product launch", "startup", "revenue challenge", "Flat Hack 605"],
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    siteName: site.name,
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Flat Hack 605 — 32 hours, 6 teams, one flat" }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#fbfaf6", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: site.name, url: site.url, description: site.description },
      {
        "@type": "Event",
        name: site.name,
        description: site.description,
        startDate: event.startAt,
        endDate: event.endAt,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: { "@type": "Place", name: "Flat 605" },
        url: site.url,
      },
      { "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
    ],
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
