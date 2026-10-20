# Flat Hack 605

A responsive event site for the 32-hour Flat Hack 605 product-and-revenue challenge.
It combines documentary workspace photography with the existing editorial artwork
and motion system.

Application routes live in `src/app`, reusable page sections and UI live in
`src/components`, and editable homepage content lives in `src/content/home.ts`.

## Setup

```bash
mise install
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` before a
production deployment so canonical, sitemap, and social metadata use the live domain.

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Confirmed dates and competition facts live in `src/lib/site.ts`. Application,
sponsor, livestream, contact, and social destinations remain environment-driven.
The full address, exact GPU model, registration fee, and final payment policy stay
unpublished until confirmed.
