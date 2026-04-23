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
      {/* Original starter nav used `mx-auto flex h-14 max-w-4xl items-center gap-8 px-6`.
          Replaced it with the shared `app-shell` and a responsive stacked layout so the
          nav aligns with the updated page shell and stays usable on smaller screens. */}
      <nav className="app-shell flex flex-col gap-3 py-4 sm:h-16 sm:flex-row sm:items-center sm:gap-6 sm:py-0">
        {/* Original starter nav showed only a muted `App Name` text span.
            Replaced it with a branded home link and made it flexible on mobile so the
            product identity feels intentional without fighting the nav links for space. */}
        <NavLink to="/" end className="flex min-w-0 items-center gap-3 sm:w-auto">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <span className="text-sm font-semibold tracking-tight">DT</span>
          </div>
          <div className="min-w-0">
            <p className="font-heading text-sm font-semibold tracking-tight text-foreground">
              DisasterTech Ops
            </p>
            <p className="text-xs text-muted-foreground">Internal admin workspace</p>
          </div>
        </NavLink>

        {/* Original starter nav links sat in a plain `flex items-center gap-6` list.
            Replaced that with a bordered grouped container so route navigation has a
            stronger visual home and matches the updated product shell. */}
        <ul className="flex w-full items-center gap-1 rounded-xl border border-border bg-muted/50 p-1 sm:ml-auto sm:w-auto">
          {LINKS.map((link) => (
            <li key={link.to} className="flex-1 sm:flex-none">
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  cn(
                    /* Original starter links were plain text with only a color swap on active state.
                       Replaced them with rounded nav items so the current route is easier to scan and
                       the link geometry matches buttons, inputs, and cards. */
                    "inline-flex w-full items-center justify-center rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-background text-foreground ring-1 ring-border"
                      : "text-muted-foreground hover:text-foreground",
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
