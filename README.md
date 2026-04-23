# UI/UX Engineer Take-Home — Starter App

This is a candidate starter repository for a UI/UX engineer take-home assignment.

## Live Demo
https://disastertech-ui-ux-take-home.vercel.app/

## Overview

This submission focuses on moving the application toward a more polished, consistent, and scalable UI system, rather than treating each page as an isolated styling exercise.

The goal was to:

- Unify layout, spacing, and hierarchy across all routes
- Standardize component usage using shadcn + Tailwind tokens
- Improve usability and clarity without introducing unnecessary complexity

The result is a more cohesive interface where Home, Records, and Profile feel like parts of the same product.

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

## What was improved

### Visual & UX Consistency

- Introduced a shared layout system (page-shell, page-header, etc.) to align structure across routes
- Standardized typography and hierarchy (titles, sections, supporting text)
- Improved information hierarchy, especially on Records (summary → filters → table)
- Added clearer empty states and inline feedback (e.g., Profile save state, filter feedback)

### Component System Alignment

- Replaced native HTML elements with shadcn primitives (Card, Input, Select, Button, etc.)
- Standardized use of Tailwind tokens (avoiding hardcoded styles)
- Reduced one-off styling decisions in favor of repeatable patterns
- Improved status treatment and readability across components

### Structural Improvements

- Extracted shared layout and spacing patterns into reusable utilities
- Cleaned up filtering, formatting, and state handling logic
- Ensured consistency across routes without introducing unnecessary abstraction
- Maintained a clean toolchain (typecheck, lint, format, build all pass)

## Key Decisions

### Utility-First Consistency

I prioritized shared layout and typography utilities over building higher-level components. This allowed me to quickly enforce consistency across all pages while staying within the time constraint, and leaves room for future component abstraction.

### Improve Existing UX Instead of Expanding Scope

Rather than introducing new features, I focused on improving:

- Hierarchy
- Clarity
- Usability of existing flows

This keeps the work aligned with the assignment while still improving real product quality.

### Consistency Over Complexity

I avoided introducing overly complex UI patterns and instead focused on:

- Predictability
- Readability
- System alignment

## Tradeoffs

Given the time constraint (~3 hours), I made intentional trade-offs:

- Did not extract higher-level reusable components (e.g., form sections, table wrappers, filter systems)
- Focused on visual and structural consistency over deeper architectural abstraction
- Limited accessibility work (ARIA roles, keyboard navigation, etc.)
- Did not implement advanced state patterns (loading, error, async states)
- Kept data static instead of introducing a data layer

The priority was to deliver the highest-impact improvements within scope.

## What’s left

To further align with a production-ready system:

### Design System & Components

- Extract reusable patterns (forms, filters, metric cards, tables)
- Introduce consistent component variants and states

### UX & Interaction Quality

- Add validation, error, and loading states
- Improve accessibility (keyboard flow, focus states, semantics)
- Refine form behavior and feedback patterns

### Scalability

- Transition from utility-based consistency → component-driven architecture
- Introduce shared state patterns where appropriate
- Add component documentation (e.g., Storybook)

## Self-Evaluation

This implementation improves visual consistency, hierarchy, and usability, and moves the app toward a unified design system.

However, it remains closer to a structured UI pass than a fully scalable component architecture. The next step would be evolving these patterns into reusable system-level components and refining interaction behavior.

## Final Note

Forking was disabled on the source repository, so I submitted the work in a branch within my own copy of the repo.