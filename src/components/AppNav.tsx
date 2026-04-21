import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/records", label: "Records", end: false },
  { to: "/profile", label: "Profile", end: false },
] as const;

export default function AppNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <nav className="mx-auto flex h-14 max-w-4xl items-center gap-8 px-6">
        <span className="font-heading text-sm font-semibold tracking-tight text-foreground">
          <span className="text-muted-foreground">App Name</span>
        </span>
        <ul className="flex items-center gap-6">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
