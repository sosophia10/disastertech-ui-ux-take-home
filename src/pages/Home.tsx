import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TECH = ["React 19", "TypeScript", "Vite", "Tailwind v4", "shadcn/ui"] as const;

const BUILD_ITEMS = [
  {
    route: "Style the Profile page",
    body: "The Profile page is currently a plain unstyled HTML form. Style it using shadcn components (Card, Label, Input, Select, Button) + Tailwind so it looks like a native part of this product.",
  },
  {
    route: "Update the design system",
    body: "Use the same shadcn primitives and Tailwind tokens. Improve hierarchy, spacing, status treatment, and the empty state.",
  },
  {
    route: "Keep the toolchain green",
    body: "tsc, lint, format:check, and build must all pass. Simply running 'npm check' will run them all",
  },
] as const;

const RULES = [
  "Try to limit your effort to 3 hours. We don't want you spending all day on this",
  "Tailwind + shadcn only. No CSS-in-JS, no new UI library, no Bootstrap.",
  "Keep the toolchain green.",
] as const;

const RUBRIC = [
  {
    weight: "50%",
    title: "Visual polish & consistency",
    body: "Does Records feel like the same product as Home? Does Profile look like a native shadcn surface? Is spacing, typography, and color use consistent across the three routes?",
  },
  {
    weight: "35%",
    title: "Component usage",
    body: "Correct use of shadcn primitives. Tailwind tokens (bg-background, text-muted-foreground, etc.) instead of hardcoded colors. No unnecessary wrapper divs or one-off classNames.",
  },
  {
    weight: "15%",
    title: "Code quality",
    body: "Readable TSX. Sensible component boundaries. No dead code. Types are honest.",
  },
] as const;

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-16">
      <section className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          UI / UX Engineer take-home
        </p>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground">
          Your assignment
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          This is a modest exercise in applying a consistent design language across a small admin
          app. The main task is to apply Tailwind styles and shadcn/ui components to the{" "}
          <span className="text-foreground">Profile</span> page.
          <br />
          <br />
          Any other design system changes you'd like to make are fair game, as long as you keep the
          toolchain green.
        </p>
        <div className="flex flex-wrap gap-1.5 pt-2">
          {TECH.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">
          What you&apos;ll build
        </h2>
        <Card>
          <CardContent className="divide-y divide-border p-0">
            {BUILD_ITEMS.map((item) => (
              <div
                key={item.route}
                className="grid gap-2 px-5 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6"
              >
                <div className="font-mono text-sm text-foreground">{item.route}</div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">
          Ground rules
        </h2>
        <ul className="space-y-2.5">
          {RULES.map((rule, i) => (
            <li key={rule} className="flex gap-4 text-sm leading-relaxed text-muted-foreground">
              <span className="w-6 shrink-0 font-mono text-xs text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">
            Evaluation rubric
          </h2>
          <span className="text-xs text-muted-foreground">Weights sum to 100%</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {RUBRIC.map((r) => (
            <Card key={r.title}>
              <CardHeader>
                <Badge>{r.weight}</Badge>
                <CardTitle className="pt-2 text-base">{r.title}</CardTitle>
                <CardDescription className="leading-relaxed">{r.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4 border-t border-border pt-10">
        <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">
          How to submit
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          When you&apos;re done, push to a branch, open a PR, include screenshots, and a short note
          covering what trade-offs you made and what is left do.
        </p>
        <div className="pt-2">
          <Button asChild>
            <Link to="/profile">Go to Profile</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
