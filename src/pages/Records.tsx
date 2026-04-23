import { useMemo, useState } from "react";

/* Original starter file did not import `cn` because every status used the same
default Badge styling. Added `cn` so the updated status badges can combine
shared and per-status classes. */
import { cn } from "@/lib/utils";

/* Original starter page had no Button import because the empty state was only
the text `no records.`. Added Button so the empty state can offer a recovery action. */
import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

/* Original starter file imported only `Card` and `CardContent` because the page
had a single card-wrapped table. Expanded the Card imports so Records can add
summary, filter, and table sections with proper headers. */
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Status = "active" | "pending" | "archived";
type StatusFilter = Status | "all";

type Row = {
  id: string;
  name: string;
  status: Status;
  updatedAt: string;
};

const ROWS: Row[] = [
  { id: "REC-001", name: "Alpha Onboarding", status: "active", updatedAt: "2025-01-04" },
  { id: "REC-002", name: "Beta Migration", status: "pending", updatedAt: "2025-01-11" },
  { id: "REC-003", name: "Gamma Review", status: "archived", updatedAt: "2024-11-22" },
  { id: "REC-004", name: "Delta Rollout Plan", status: "active", updatedAt: "2025-02-01" },
  { id: "REC-005", name: "Epsilon Cleanup", status: "pending", updatedAt: "2025-02-09" },
  { id: "REC-006", name: "Zeta Integration", status: "active", updatedAt: "2025-02-14" },
  { id: "REC-007", name: "Eta Audit", status: "archived", updatedAt: "2024-10-03" },
  { id: "REC-008", name: "Theta Prototype", status: "pending", updatedAt: "2025-03-01" },
  { id: "REC-009", name: "Iota Launch", status: "active", updatedAt: "2025-03-04" },
  { id: "REC-010", name: "Kappa Feedback Loop", status: "pending", updatedAt: "2025-03-11" },
  { id: "REC-011", name: "Lambda Refactor", status: "archived", updatedAt: "2024-12-18" },
  { id: "REC-012", name: "Mu Discovery", status: "active", updatedAt: "2025-03-15" },
  { id: "REC-013", name: "Nu Beta Test", status: "pending", updatedAt: "2025-03-20" },
  { id: "REC-014", name: "Xi Decomm", status: "archived", updatedAt: "2024-09-30" },
  { id: "REC-015", name: "Omicron Handoff", status: "active", updatedAt: "2025-03-22" },
];

/* Original starter page had no summary row above the table.
Added `STATUS_SUMMARY` metadata so the new overview cards can be generated from
one shared source. */
const STATUS_SUMMARY: {
  description: string;
  label: string;
  value: Exclude<StatusFilter, "all">;
}[] = [
  {
    value: "active",
    label: "Active",
    description: "Currently moving through the workspace workflow.",
  },
  {
    value: "pending",
    label: "Pending",
    description: "Waiting on review, input, or a follow-up action.",
  },
  {
    value: "archived",
    label: "Archived",
    description: "Completed or retired from the current working set.",
  },
];

/* Original starter status filter options were hardcoded inline inside the Select.
Moved them into `STATUS_FILTERS` so the filter menu is easier to maintain and reuse. */
const STATUS_FILTERS: { label: string; value: StatusFilter }[] = [
  { value: "all", label: "All statuses" },
  { value: "active", label: "Active" },
  { value: "pending", label: "Pending" },
  { value: "archived", label: "Archived" },
];

/* Original starter table rendered raw ISO dates like `2025-01-04`.
Added a formatter so the updated table shows readable dates instead. */
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function formatDate(value: string) {
  return dateFormatter.format(new Date(`${value}T12:00:00`));
}

/* Original starter status column rendered every state with the same default
`<Badge>{status}</Badge>`. Replaced that with per-status badge props so state
styling is more informative and less CTA-like. */
function getStatusBadgeProps(status: Status) {
  switch (status) {
    case "active":
      return {
        variant: "outline" as const,
        className: "border-transparent bg-muted text-foreground",
      };
    case "pending":
      return {
        variant: "outline" as const,
        className: "border-border bg-background text-foreground",
      };
    case "archived":
      return {
        variant: "outline" as const,
        className: "border-border bg-background text-muted-foreground",
      };
  }
}

export default function Records() {
  const [nameQuery, setNameQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const filtered = useMemo(() => {
    const q = nameQuery.trim().toLowerCase();
    return ROWS.filter(
      (row) =>
        (q === "" || row.name.toLowerCase().includes(q)) &&
        (statusFilter === "all" || row.status === statusFilter),
    );
  }, [nameQuery, statusFilter]);

  /* Original starter page had no summary cards, so no derived counts were needed.
  Added memoized counts to power the new overview row without repeating logic in JSX. */
  const statusCounts = useMemo(
    () => ({
      active: ROWS.filter((row) => row.status === "active").length,
      pending: ROWS.filter((row) => row.status === "pending").length,
      archived: ROWS.filter((row) => row.status === "archived").length,
    }),
    [],
  );

  /* Original starter page had no reset helper because the empty state offered no action.
  Added `clearFilters()` so both the empty state and filter UI can restore the full list. */
  function clearFilters() {
    setNameQuery("");
    setStatusFilter("all");
  }

  return (
    /* Original starter page used `mx-auto max-w-5xl px-6 py-12 space-y-6`.
    Replaced it with `app-shell py-12 space-y-8`, then extracted the shared route shell into
    `page-shell` so future pages can reuse the same layout pattern more cleanly. */
    <main className="page-shell space-y-8">
      {/* Original starter header used `space-y-1`, a `text-2xl` title, and muted
          eyebrow text. Rebuilt it to match the stronger route-header hierarchy,
          then moved the repeated spacing into `page-header`. */}
      <header className="page-header">
        {/* Original starter eyebrow used only `text-xs text-muted-foreground`.
            Replaced it with the shared `page-eyebrow` utility so route labels stay consistent. */}
        <p className="page-eyebrow">Operations</p>
        {/* Original starter title used `text-2xl font-semibold tracking-tight`.
            Replaced it with the shared `page-title` utility so route titles align. */}
        <h1 className="page-title">Records</h1>
        {/* Original starter description used `text-sm text-muted-foreground` without the
            shared route-copy pattern. Replaced it with `page-description` for consistency. */}
        <p className="page-description">
          Browse, search, and monitor records across the workspace with clearer status context.
        </p>
      </header>

      {/* Original starter page went directly from the route header to the filter row.
          Added a compact summary row first so the page has a clearer information hierarchy. */}
      <div className="grid gap-4 md:grid-cols-3">
        {STATUS_SUMMARY.map((item) => (
          <Card key={item.value} size="sm" className="min-h-36 justify-between bg-muted/20">
            {/* Original updated summary-card header used raw `border-b`.
                Replaced it with `surface-header`, then added a touch more internal gap so
                the metric label and value read as one clearer focal group. */}
            <CardHeader className="surface-header gap-2">
              {/* These summary cards did not exist in the starter page.
                  Styled the labels as compact uppercase eyebrows, then replaced the raw
                  text classes with `metric-label` so summary labels use one shared pattern. */}
              <CardDescription className="metric-label">{item.label}</CardDescription>
              {/* Original updated summary values used only `text-2xl`.
                  Replaced that inline sizing with `metric-value` so the number becomes
                  a stronger focal point and stays consistent across the three cards. */}
              <CardTitle className="metric-value">{statusCounts[item.value]}</CardTitle>
            </CardHeader>
            {/* Original updated summary-card body used the raw class string
                `text-sm leading-relaxed text-muted-foreground`. Replaced it with
                `supporting-copy`, then gave the cards a softer overview treatment so
                all three metrics feel more even when the descriptions wrap differently. */}
            <CardContent className="pt-4">
              <p className="supporting-copy max-w-[24ch]">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Original starter filters lived in a loose `flex flex-wrap items-center gap-3` row.
          Replaced that row with a Card so filtering feels like a defined product section. */}
      <Card size="sm">
        {/* Original updated filter-card header used raw `border-b`.
            Replaced it with `surface-header` so bordered headers stay consistent. */}
        <CardHeader className="surface-header">
          <CardTitle>Filter records</CardTitle>
          <CardDescription>Narrow the list by name or status.</CardDescription>
          <CardAction>
            <Badge variant="outline">{filtered.length} visible</Badge>
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 pt-4 lg:flex-row lg:items-center">
          {/* Original starter search input used `placeholder="Search by name"` and
              `className="w-64"`. Changed it to a fuller responsive width and more
              specific placeholder text. */}
          <Input
            value={nameQuery}
            onChange={(e) => setNameQuery(e.target.value)}
            placeholder="Search by record name"
            className="w-full lg:max-w-sm"
          />

          {/* Original starter Select rendered lowercase inline options like `active`
              and `pending`. Replaced those with the shared `STATUS_FILTERS` list so
              labels are title-cased and consistent. */}
          <Select
            value={statusFilter}
            onValueChange={(value) => setStatusFilter(value as StatusFilter)}
          >
            <SelectTrigger className="w-full lg:w-52">
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              {STATUS_FILTERS.map((filter) => (
                <SelectItem key={filter.value} value={filter.value}>
                  {filter.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Original starter filter row ended with a small count span.
              Reworked that into fuller supporting text so result feedback has more presence. */}
          <p className="field-help lg:ml-auto">
            Showing {filtered.length} of {ROWS.length} records
          </p>
        </CardContent>
      </Card>

      {/* Original starter table card began immediately with `CardContent` and `Table`.
          Added a CardHeader so the table region has its own title and description. */}
      <Card className="overflow-hidden" size="sm">
        {/* Original updated table-card header used raw `border-b`.
            Replaced it with `surface-header` so table and filter sections use the same header utility. */}
        <CardHeader className="surface-header">
          <CardTitle>Workspace records</CardTitle>
          <CardDescription>
            Review the latest updates and use filters to focus on a specific working set.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                {/* Original starter table headings used plain labels like `ID` and `Status`
                    with minimal styling. Refined them into lighter uppercase labels, then
                    replaced the repeated raw class string with `table-heading`. */}
                <TableHead className="table-heading w-28">ID</TableHead>
                <TableHead className="table-heading">Name</TableHead>
                <TableHead className="table-heading w-32">Status</TableHead>
                <TableHead className="table-heading w-36">Updated</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  {/* Original starter empty state was only the text `no records.`.
                      Replaced it with explanatory copy plus a Clear filters action. */}
                  <TableCell colSpan={4} className="px-4 py-14">
                    {/* Original updated empty state used the raw layout string
                        `flex flex-col items-center gap-3 text-center`.
                        Replaced it with `empty-state` so centered recovery layouts share one utility. */}
                    <div className="empty-state">
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">
                          No records match these filters.
                        </p>
                        {/* Original updated empty-state copy used the raw class string
                            `text-sm leading-relaxed text-muted-foreground`.
                            Replaced it with `supporting-copy` so supporting body text is standardized. */}
                        <p className="supporting-copy max-w-sm">
                          Try a broader search or clear the current status filter to restore the
                          full record list.
                        </p>
                      </div>
                      <Button type="button" variant="outline" size="sm" onClick={clearFilters}>
                        Clear filters
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((row) => {
                  const statusBadge = getStatusBadgeProps(row.status);

                  return (
                    <TableRow key={row.id}>
                      {/* Original starter row cells used the table component's default
                          `p-2` spacing. Added explicit `px-4` padding so the updated
                          table feels more polished. */}
                      <TableCell className="px-4 font-mono text-xs text-muted-foreground">
                        {row.id}
                      </TableCell>
                      <TableCell className="px-4 font-medium text-foreground">{row.name}</TableCell>
                      <TableCell className="px-4">
                        {/* Original starter status cell rendered a plain default Badge
                            for every state. Replaced it with the per-status badge props
                            defined above. */}
                        <Badge
                          variant={statusBadge.variant}
                          className={cn("capitalize", statusBadge.className)}
                        >
                          {row.status}
                        </Badge>
                      </TableCell>
                      {/* Original starter updated-at cell rendered the raw `row.updatedAt`
                          string. Replaced it with `formatDate(...)` for a more readable display. */}
                      <TableCell className="px-4 text-sm text-muted-foreground">
                        {formatDate(row.updatedAt)}
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
