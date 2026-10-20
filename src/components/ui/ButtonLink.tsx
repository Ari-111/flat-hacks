"use client";

import { useEffect, useState, type ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string | null;
  variant?: "dark" | "light";
  className?: string;
  target?: "_blank";
  rel?: string;
  expiresAt?: string;
  unavailableLabel?: string;
  expiredLabel?: string;
};

export function ButtonLink({ children, href, variant = "dark", className = "", target, rel, expiresAt, unavailableLabel = "Link coming soon", expiredLabel = "Applications closed" }: ButtonLinkProps) {
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (!expiresAt) return;
    const update = () => setExpired(Date.now() >= Date.parse(expiresAt));
    update();
    const timer = window.setInterval(update, 60000);
    return () => window.clearInterval(timer);
  }, [expiresAt]);

  if (!href || expired) {
    return <span className={`button button-${variant} is-disabled ${className}`.trim()} aria-disabled="true">{expired ? expiredLabel : unavailableLabel}</span>;
  }

  return <a className={`button button-${variant} ${className}`.trim()} href={href} target={target} rel={rel}>{children}</a>;
}
