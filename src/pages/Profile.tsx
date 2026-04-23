import { type FormEvent, useState } from "react";

/* Original starter file imported only React state/form types.
Added shadcn Button because the starter form ended with plain HTML buttons and
the assignment explicitly called for shadcn primitives. */
import { Button } from "@/components/ui/button";

/* Original starter file had no Card imports because the form rendered as bare HTML.
Added Card primitives to rebuild the page as a structured settings surface. */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/* Original starter form used native `<input>` elements.
Added shadcn Input so the text fields match the rest of the app's control styling. */
import { Input } from "@/components/ui/input";

/* Original starter form used native `<label>` elements.
Added shadcn Label so field labeling stays consistent with the shared UI system. */
import { Label } from "@/components/ui/label";

/* Original starter form used a native `<select>` with inline `<option>` tags.
Added shadcn Select primitives to replace the browser-default control. */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Role = "Admin" | "Editor" | "Viewer";

type ProfileData = {
  displayName: string;
  email: string;
  role: Role;
};

const DEFAULTS: ProfileData = {
  displayName: "Ada Lovelace",
  email: "ada@example.com",
  role: "Editor",
};

/* Original starter role options existed only as hardcoded `<option>` tags inside the form.
Moved them into shared metadata so both the Select and the new guidance card can use
the same source of truth. */
const ROLE_OPTIONS: { value: Role; description: string }[] = [
  {
    value: "Admin",
    description: "Full workspace access, including settings and permission management.",
  },
  {
    value: "Editor",
    description: "Can update records and collaborate without changing workspace-level settings.",
  },
  {
    value: "Viewer",
    description: "Read-only access for teammates who need visibility without edit permissions.",
  },
];

export default function Profile() {
  const [data, setData] = useState<ProfileData>(DEFAULTS);

  /* Original starter page only tracked form data and used `alert(...)` on submit.
  Added `saved` state so submit feedback can render inline inside the page. */
  const [saved, setSaved] = useState(false);

  /* Original starter inputs each repeated `setData({ ...data, field: value })`.
  Added `updateField(...)` to centralize that repeated update logic. */
  function updateField<K extends keyof ProfileData>(field: K, value: ProfileData[K]) {
    setSaved(false);
    setData((current) => ({ ...current, [field]: value }));
  }

  /* Original starter submit handler called `alert("Saved: " + JSON.stringify(data))`.
  Replaced that browser alert with inline saved-state feedback. */
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaved(true);
  }

  /* Original starter reset logic lived inline inside the Reset button's `onClick`.
  Moved it into `onReset()` so the reset behavior and saved-state reset happen together. */
  function onReset() {
    setSaved(false);
    setData(DEFAULTS);
  }

  return (
    /* Original starter page returned a bare `<main>` with no shared layout classes.
    Replaced it with `app-shell py-12 space-y-8`, then extracted the shared route shell into
    `page-shell` so future pages can reuse the same outer structure more cleanly. */
    <main className="page-shell space-y-8">
      {/* Original starter page rendered only `<h1>Profile</h1>` above the form.
          Replaced it with a full route header, then moved the repeated route-header spacing into
          `page-header` so the structure matches the other pages more cleanly. */}
      <header className="page-header">
        {/* Original starter page had no eyebrow label at all.
            Added the eyebrow in Phase 2, then moved its repeated styling into `page-eyebrow`. */}
        <p className="page-eyebrow">Account settings</p>
        {/* Original starter page had only a plain `Profile` heading.
            Replaced it with the shared `page-title` utility so route titles stay aligned. */}
        <h1 className="page-title">Profile</h1>
        {/* Original starter page had no supporting description under the heading.
            Added it in Phase 2, then moved the repeated styling into `page-description`. */}
        <p className="page-description">
          Manage the account details your teammates see across the workspace.
        </p>
      </header>

      {/* Original starter page stacked everything in one plain vertical flow.
          Added a responsive two-column layout, then tightened the sidebar width and
          aligned both columns to the top so the main form and side guidance feel
          more intentionally paired. */}
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
        {/* Original starter form rendered directly under `<main>` with plain wrapper `<div>`s.
            Wrapped it in a Card, and kept the main form on the default card size so
            the primary task has more breathing room than the secondary side panel. */}
        <Card>
          {/* Original starter form had no section heading or descriptive copy inside the form area.
              Added CardHeader + CardDescription to give the settings section proper context,
              then replaced the repeated `border-b` with `surface-header`. */}
          <CardHeader className="surface-header gap-2">
            <CardTitle>Personal information</CardTitle>
            <CardDescription>
              Update the details shown in task assignments, approvals, and workspace activity.
            </CardDescription>
          </CardHeader>

          <form onSubmit={onSubmit}>
            {/* Original starter fields were stacked in plain wrapper `<div>`s with no shared card spacing.
                Added card-level spacing in Phase 2, then increased it here so the field
                groups feel less cramped and the vertical rhythm reads more clearly. */}
            <CardContent className="space-y-7">
              {/* Original starter display name field used native `<label>` + `<input>` with no helper text.
                  Replaced it with shadcn Label/Input and added supporting copy. */}
              <div className="field-stack">
                <Label htmlFor="profile-display-name">Display name</Label>
                <Input
                  id="profile-display-name"
                  type="text"
                  required
                  value={data.displayName}
                  onChange={(e) => updateField("displayName", e.target.value)}
                />
                {/* Original updated helper text used the raw class string
                    `text-sm text-muted-foreground`. Replaced it with `field-help`
                    so form guidance stays consistent across fields. */}
                <p className="field-help">
                  This name appears in activity feeds, ownership labels, and comments.
                </p>
              </div>

              {/* Original starter email and role fields were stacked one-per-row.
                  Grouped them into a responsive two-column layout so the form uses space more intentionally. */}
              <div className="grid gap-5 md:grid-cols-2">
                {/* Original starter email field used a native `<input type="email">` and no helper copy.
                    Replaced it with shadcn Input and added guidance text. */}
                <div className="field-stack">
                  <Label htmlFor="profile-email">Email</Label>
                  <Input
                    id="profile-email"
                    type="email"
                    required
                    value={data.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                  {/* Original updated helper text used the raw class string
                      `text-sm text-muted-foreground`. Replaced it with `field-help`
                      so email guidance matches the rest of the form. */}
                  <p className="field-help">
                    Used for workspace notifications and account recovery.
                  </p>
                </div>

                {/* Original starter role field used a native `<select>` with inline options.
                    Replaced it with shadcn Select primitives so the control matches the rest of the app. */}
                <div className="field-stack">
                  <Label htmlFor="profile-role">Role</Label>
                  <Select
                    value={data.role}
                    onValueChange={(value) => updateField("role", value as Role)}
                  >
                    <SelectTrigger id="profile-role" className="w-full">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      {ROLE_OPTIONS.map((role) => (
                        <SelectItem key={role.value} value={role.value}>
                          {role.value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {/* Original updated helper text used the raw class string
                      `text-sm text-muted-foreground`. Replaced it with `field-help`
                      so the role field follows the same helper-text pattern. */}
                  <p className="field-help">
                    Choose the access level that best matches this account&apos;s responsibilities.
                  </p>
                </div>
              </div>
            </CardContent>

            {/* Original starter form ended with a plain `<div>` containing two unstyled buttons.
                Replaced it with CardFooter so actions and status feedback live in a dedicated surface. */}
            <CardFooter className="gap-4 bg-background sm:items-center sm:justify-between">
              {/* Original updated footer message used the raw class string
                  `text-sm text-muted-foreground`. Replaced it with `supporting-copy`
                  so the saved-state message uses the same secondary-text pattern as the rest
                  of the app, while keeping it visually quieter than the action buttons. */}
              <p className="max-w-md supporting-copy">
                {saved
                  ? "Changes saved successfully."
                  : "Changes apply to the visible account profile for this workspace."}
              </p>

              {/* Original starter actions used plain HTML `<button>` elements.
                  Replaced them with shadcn Buttons so Save and Reset have a clear visual hierarchy. */}
              <div className="flex w-full flex-col-reverse gap-2 sm:w-auto sm:flex-row sm:justify-end">
                <Button type="button" variant="outline" onClick={onReset}>
                  Reset
                </Button>
                <Button type="submit">Save changes</Button>
              </div>
            </CardFooter>
          </form>
        </Card>

        {/* Original starter page had no secondary reference surface beside the form.
            Added a compact guidance card so the page feels more complete without adding new form fields. */}
        <Card size="sm" className="h-fit self-start bg-muted/20">
          {/* Original updated side-card header used raw `border-b`.
              Replaced it with `surface-header`, then tightened the internal gap so the
              side panel reads as lighter supporting context rather than a second primary section. */}
          <CardHeader className="surface-header gap-1.5">
            <CardTitle>Role guidance</CardTitle>
            <CardDescription className="leading-relaxed">
              Quick reference for choosing the right level of access.
            </CardDescription>
          </CardHeader>

          {/* Original updated side-card content used a plain `space-y-3 pt-4`.
              Tightened the stack slightly and softened the card background so this
              panel supports the main form instead of competing with it. */}
          <CardContent className="space-y-2.5">
            {/* Original updated role-guidance items used filled `bg-muted/50` panels.
                Swapped them to lighter bordered rows so this side panel supports the form
                without competing with it visually. */}
            {ROLE_OPTIONS.map((role) => (
              <div
                key={role.value}
                className="rounded-lg border border-border/70 bg-background px-3 py-2.5"
              >
                <p className="text-sm font-medium text-foreground">{role.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {role.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
