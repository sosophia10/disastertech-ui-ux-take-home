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

## Live Vercel Link
https://disastertech-ui-ux-take-home.vercel.app/

## What I changed

- Rebuilt the Profile page with shadcn primitives and a stronger settings-page layout
- Refined Records hierarchy, status treatment, summary cards, and empty state
- Aligned Home, Records, Profile, and the nav under a more consistent shared layout and typography system
- Extracted repeated Tailwind patterns into small reusable utilities for scalable page structure and spacing

## Tradeoffs

- I focused on polish, hierarchy, spacing, and system consistency rather than adding new features
- I only extracted repeated, stable UI patterns into utilities instead of abstracting every class into CSS
- I kept the scope aligned with the assignment by avoiding unnecessary functionality like API wiring, validation frameworks, or new dependencies

## What’s left
If I had more time, I would further refine responsive behavior and do one more visual QA pass across all routes to tighten a few remaining spacing and alignment details. I’d also reduce the assignment annotations/comments before a final handoff so the implementation reads more like production UI code while keeping the design system decisions intact. The comments provided in these files are solely for review.

## Final Note
Forking was disabled on the source repository, so I submitted the work in a branch within my own copy of the repo.



