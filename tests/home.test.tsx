import { act } from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { hydrateRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import Home from "@/app/page";
import ApplyPage from "@/app/apply/page";
import RulesPage from "@/app/rules/page";
import SponsorsPage from "@/app/sponsors/page";
import PrivacyPage from "@/app/privacy/page";
import { Countdown, timeUntil } from "@/components/motion/Countdown";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { emailHref, eventStatus, externalHref, pageMetadata } from "@/lib/site";
import nextConfig from "../next.config";

vi.mock("next/image", () => ({
  default: ({ alt, fill: _fill, priority: _priority, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean }) => {
    void _fill;
    void _priority;
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt ?? ""} {...props} />;
  },
}));

describe("Flat Hack 605 website", () => {
  it("renders the revenue-focused homepage and real workspace proof", () => {
    const { container } = render(<Home />);

    expect(screen.getByRole("heading", { level: 1, name: /32 hours.*6 teams.*one flat/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /can you make something people will pay for/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /first to.*\$100 wins/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /experienced builders.*two people per team/i })).toBeInTheDocument();
    expect(screen.getByAltText(/shared worktable inside flat 605/i)).toHaveAttribute("src", "/assets/flat-605-worktable.webp");
    expect(screen.getByAltText(/exterior view near the flat 605 event venue/i)).toHaveAttribute("src", "/assets/flat-605-exterior.webp");
    expect(screen.getAllByText("Application link coming soon")[0]).toHaveAttribute("aria-disabled", "true");
    const socialNavigation = within(screen.getByRole("navigation", { name: "Official social links" }));
    expect(socialNavigation.getByRole("link", { name: /instagram/i })).toHaveAttribute(
      "href",
      "https://www.instagram.com/moneybhai.hq/",
    );
    expect(socialNavigation.getByRole("link", { name: /^x/i })).toHaveAttribute(
      "href",
      "https://x.com/askmoneybhai",
    );
    expect(container.textContent).not.toMatch(/Flat Hack 604|Contra Labs/i);
  });

  it("uses the approved in-page navigation hierarchy", () => {
    render(<Home />);
    const navigation = within(screen.getByRole("navigation", { name: "Primary navigation" }));
    expect(navigation.getByRole("link", { name: "Challenge" })).toHaveAttribute("href", "#challenge");
    expect(navigation.getByRole("link", { name: "Apply" })).toHaveAttribute("href", "#apply");
    expect(navigation.getByRole("link", { name: "Timeline" })).toHaveAttribute("href", "#timeline");
    expect(navigation.getByRole("link", { name: "Sponsors" })).toHaveAttribute("href", "#sponsors");
  });

  it("reveals the rule behind every challenge stage", () => {
    render(<Home />);
    const card = screen.getByRole("button", { name: /build/i });
    expect(card).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(card);
    expect(card).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/ship a real software or digital product/i)).toBeInTheDocument();
  });

  it("opens and closes the mobile navigation", () => {
    render(<Home />);
    const toggle = screen.getByRole("button", { name: "Open navigation" });
    fireEvent.click(toggle);
    expect(screen.getByRole("button", { name: "Close navigation" })).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
  });

  it("keeps the ten-frame intro and ends on the hero image", () => {
    const { container } = render(<Home />);
    expect(container.querySelectorAll(".intro-frame")).toHaveLength(10);
    expect(container.querySelector(".intro-frame--final")).toHaveAttribute("src", "/assets/flat-hack-hero-poster.webp");
    expect(screen.queryByRole("button", { name: "Skip intro" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Replay opening animation" })).toBeInTheDocument();
  });

  it("renders every supporting route", () => {
    const pages = [
      [<ApplyPage key="apply" />, /apply to flat hack 605/i],
      [<RulesPage key="rules" />, /real revenue needs clear rules/i],
      [<SponsorsPage key="sponsors" />, /help power 32 hours of building/i],
      [<PrivacyPage key="privacy" />, /what this website does/i],
    ] as const;
    pages.forEach(([page, heading]) => {
      const view = render(page);
      expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
      view.unmount();
    });
  });

  it("calculates countdowns and event phases deterministically", () => {
    expect(timeUntil("", Date.now())).toBeNull();
    expect(timeUntil("2026-10-25T10:00:00+05:30", Date.parse("2026-10-24T10:00:00+05:30"))).toEqual([1, 0, 0, 0]);
    expect(eventStatus(Date.parse("2026-10-20T12:00:00+05:30")).phase).toBe("applications");
    expect(eventStatus(Date.parse("2026-10-23T12:00:00+05:30")).phase).toBe("interviews");
    expect(eventStatus(Date.parse("2026-10-25T12:00:00+05:30")).phase).toBe("live");
    expect(eventStatus(Date.parse("2026-10-27T12:00:00+05:30")).phase).toBe("complete");
  });

  it("accepts only safe configured destinations", () => {
    expect(externalHref("https://forms.gle/example")).toBe("https://forms.gle/example");
    expect(externalHref("http://example.com/form")).toBeNull();
    expect(externalHref("javascript:alert(1)")).toBeNull();
    expect(emailHref("team@example.com")).toBe("mailto:team@example.com");
    expect(emailHref("not-an-email")).toBeNull();
  });

  it("publishes route-specific SEO metadata", () => {
    const metadata = pageMetadata("Apply", "Apply to the event.", "/apply");
    expect(metadata.alternates).toEqual({ canonical: "/apply" });
    expect(metadata.openGraph).toMatchObject({
      title: "Apply — Flat Hack 605",
      description: "Apply to the event.",
      url: "/apply",
    });
    expect(metadata.twitter).toMatchObject({ title: "Apply — Flat Hack 605" });
  });

  it("configures browser security headers", async () => {
    const routes = await nextConfig.headers?.();
    const headers = Object.fromEntries((routes?.[0]?.headers ?? []).map(({ key, value }) => [key, value]));
    expect(headers["Content-Security-Policy"]).toContain("frame-ancestors 'none'");
    expect(headers["Permissions-Policy"]).toContain("camera=()");
    expect(headers["Referrer-Policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["X-Content-Type-Options"]).toBe("nosniff");
    expect(headers["X-Frame-Options"]).toBe("DENY");
  });

  it("hydrates time-dependent UI without changing the initial server markup", async () => {
    const errors = vi.spyOn(console, "error").mockImplementation(() => undefined);
    const countdownContainer = document.createElement("div");
    const buttonContainer = document.createElement("div");
    countdownContainer.innerHTML = renderToString(<Countdown />);
    buttonContainer.innerHTML = renderToString(<ButtonLink href="https://example.com/apply" expiresAt="2000-01-01T00:00:00Z">Apply now</ButtonLink>);
    expect(countdownContainer.textContent).toContain("Loading current status");

    const countdownRoot = hydrateRoot(countdownContainer, <Countdown />);
    const buttonRoot = hydrateRoot(buttonContainer, <ButtonLink href="https://example.com/apply" expiresAt="2000-01-01T00:00:00Z">Apply now</ButtonLink>);
    await act(async () => { await new Promise((resolve) => window.setTimeout(resolve, 20)); });

    expect(errors.mock.calls.flat().join(" ")).not.toMatch(/hydration|did not match/i);
    await act(async () => { countdownRoot.unmount(); buttonRoot.unmount(); });
    errors.mockRestore();
  });
});
