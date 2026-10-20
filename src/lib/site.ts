import type { Metadata } from "next";

export const site = {
  name: "Flat Hack 605",
  title: "Flat Hack 605 — Build. Launch. Earn.",
  description: "A 32-hour livestreamed hackathon where six experienced teams build, launch, and race to earn their first $100 in verified product revenue.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

export function pageMetadata(title: string, description: string, path: `/${string}`): Metadata {
  const resolvedTitle = `${title} — ${site.name}`;
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} — 32 hours, 6 teams, one flat` };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: resolvedTitle, description, type: "website", siteName: site.name, url: path, images: [image] },
    twitter: { card: "summary_large_image", title: resolvedTitle, description, images: [image.url] },
  };
}

export const event = {
  applicationDeadline: "2026-10-22T23:59:00+05:30",
  interviewsStart: "2026-10-23T00:00:00+05:30",
  onboardingStart: "2026-10-24T00:00:00+05:30",
  eventDayStart: "2026-10-25T00:00:00+05:30",
  startAt: "2026-10-25T10:00:00+05:30",
  endAt: "2026-10-26T18:00:00+05:30",
  applicationUrl: process.env.NEXT_PUBLIC_APPLICATION_URL ?? "",
  sponsorUrl: process.env.NEXT_PUBLIC_SPONSOR_URL ?? "",
  sponsorEmail: process.env.NEXT_PUBLIC_SPONSOR_EMAIL ?? "",
  livestreamUrl: process.env.NEXT_PUBLIC_LIVESTREAM_URL ?? "",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  socials: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/moneybhai.hq/",
    x: process.env.NEXT_PUBLIC_X_URL || "https://x.com/askmoneybhai",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  },
} as const;

export function externalHref(url: string): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" ? parsed.toString() : null;
  } catch {
    return null;
  }
}

export function emailHref(email: string): string | null {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? `mailto:${email}` : null;
}

export type EventPhase = "applications" | "closed" | "interviews" | "onboarding" | "upcoming" | "live" | "complete";

export function eventStatus(now: number): { phase: EventPhase; label: string; target?: string } {
  if (now < Date.parse(event.applicationDeadline)) return { phase: "applications", label: "Applications close in", target: event.applicationDeadline };
  if (now < Date.parse(event.interviewsStart)) return { phase: "closed", label: "Applications closed · interviews October 23" };
  if (now < Date.parse(event.onboardingStart)) return { phase: "interviews", label: "Online interviews today" };
  if (now < Date.parse(event.eventDayStart)) return { phase: "onboarding", label: "Final team onboarding" };
  if (now < Date.parse(event.startAt)) return { phase: "upcoming", label: "The hackathon begins in", target: event.startAt };
  if (now < Date.parse(event.endAt)) return { phase: "live", label: "Flat Hack 605 is live now" };
  return { phase: "complete", label: "Flat Hack 605 is complete" };
}
