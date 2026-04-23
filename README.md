# UI/UX Engineer Take-Home — Starter App

This is a candidate starter repository for a UI/UX engineer take-home assignment.

## Setup

```bash
npm install
npm run dev
```

The full assignment instructions and evaluation rubric are rendered inside the
Home page of the running app (`/`).

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check and build for production
- `npm run typecheck` — `tsc --noEmit`
- `npm run lint` — oxlint
- `npm run format` / `npm run format:check` — oxfmt

## What I changed

- Rebuilt the Profile page with shadcn primitives and a stronger settings-page layout
- Refined Records hierarchy, status treatment, summary cards, and empty state
- Aligned Home, Records, Profile, and the nav under a more consistent shared layout and typography system
- Extracted repeated Tailwind patterns into small reusable utilities for scalable page structure and spacing

## Tradeoffs

- I focused on polish, hierarchy, spacing, and system consistency rather than adding new features
- I only extracted repeated, stable UI patterns into utilities instead of abstracting every class into CSS
- I kept the scope aligned with the assignment by avoiding unnecessary functionality like API wiring, validation frameworks, or new dependencies

## Live Vercel Link
https://disastertech-ui-ux-take-home.vercel.app/


