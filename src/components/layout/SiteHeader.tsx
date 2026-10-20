"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/content/home";
import { Brand } from "@/components/ui/Brand";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { event, externalHref } from "@/lib/site";

export function SiteHeader({ home = true }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const application = externalHref(event.applicationUrl);
  const sectionHref = (href: string) => home ? href : `/${href}`;

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <a className="wordmark" href={home ? "#top" : "/"} aria-label="Flat Hack 605, home"><Brand compact /></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((link) => <a href={sectionHref(link.href)} key={link.href}>{link.label}</a>)}
      </nav>
      <ButtonLink className="header-cta" href={application} target={application ? "_blank" : undefined} rel={application ? "noopener noreferrer" : undefined} expiresAt={event.applicationDeadline} unavailableLabel="Applications link soon">Apply now</ButtonLink>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span />
      </button>
      <nav className={`mobile-nav${open ? " is-open" : ""}`} id="mobile-navigation" aria-label="Mobile navigation">
        {navigation.map((link) => <a href={sectionHref(link.href)} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a href="/apply" onClick={() => setOpen(false)}>Application guide</a>
      </nav>
    </header>
  );
}
