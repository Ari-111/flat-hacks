# Repository Guidelines

## Project Structure & Module Organization

This Next.js 16 event site uses the App Router. Routes and route metadata live
in `src/app/` (for example, `src/app/apply/page.tsx`). Reusable UI is organized
under `src/components/`: `layout/`, `sections/`, `motion/`, and `ui/`. Keep
homepage copy in `src/content/home.ts`; event facts and URL helpers belong in
`src/lib/site.ts`.

Place static images, videos, fonts, and SVGs in `public/assets/` and reference
them with root-relative paths such as `/assets/flat-hack-logo.png`. Tests live
in `tests/`; the `@/` import alias resolves to `src/`.

## Build, Test, and Development Commands

Use Node 24 and pnpm 11 (see `package.json` and `mise.toml`).

```bash
mise install        # Install the pinned runtime tooling
pnpm install        # Install dependencies
pnpm dev            # Run the site at http://localhost:3000
pnpm lint           # Run ESLint with Next.js rules
pnpm typecheck      # Type-check without emitting files
pnpm test           # Run the Vitest suite once
pnpm build          # Create and validate a production build
pnpm start          # Serve a completed production build
```

Run lint, typecheck, tests, and a production build before submitting behavioral
changes. There is no formatter script; preserve surrounding TypeScript, TSX,
and CSS formatting.

## Coding Style & Naming Conventions

Use TypeScript and functional React components. Match the repository’s two-space
indentation, double quotes, semicolons, and `@/` imports. Use PascalCase for
component files and exports (`SiteHeader.tsx`) and camelCase for functions,
variables, and content exports. Keep pages thin; place reusable behavior in
focused components or `src/lib/`.

Avoid publishing unconfirmed event facts. Existing URL helpers validate external
links; reuse them instead of rendering untrusted destinations directly.

## Testing Guidelines

Vitest runs in JSDOM with React Testing Library and `vitest.setup.ts`. Add or
extend tests in `tests/*.test.tsx`, group behavior with `describe`, and use
outcome-oriented `it` names, such as
`it("opens and closes the mobile navigation", ...)`. Prefer accessible queries
(`getByRole`, `getByLabelText`) and verify user-visible behavior, metadata, and
security-sensitive configuration. No coverage threshold is configured.

## Commit & Pull Request Guidelines

The available history contains only `Initial commit`, so no established commit
format exists. Use concise imperative subjects, e.g. `Add sponsor logo fallback`.
Keep commits focused. Pull requests should explain the change and validation,
link relevant issues, and include screenshots or a short recording for UI or
motion changes.

## Configuration & Security

Copy `.env.example` to `.env.local`; never commit local secrets. Set
`NEXT_PUBLIC_SITE_URL` for production so canonical URLs, sitemap entries, and
social metadata point to the deployed domain.
