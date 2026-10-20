import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function DetailPage({ kicker, title, intro, children }: { kicker: string; title: string; intro: string; children: ReactNode }) {
  return (
    <main id="main-content" className="detail-page">
      <span id="top" />
      <SiteHeader home={false} />
      <header className="detail-hero">
        <p className="section-kicker">{kicker}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <Link className="text-link" href="/">← Back to Flat Hack 605</Link>
      </header>
      <div className="detail-content">{children}</div>
      <SiteFooter />
    </main>
  );
}
