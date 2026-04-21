import { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

type Status = "active" | "pending" | "archived";
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

export default function Records() {
  const [nameQuery, setNameQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = nameQuery.trim().toLowerCase();
    return ROWS.filter(
      (r) =>
        (q === "" || r.name.toLowerCase().includes(q)) &&
        (statusFilter === "all" || r.status === statusFilter),
    );
  }, [nameQuery, statusFilter]);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <header className="space-y-1">
        <p className="text-xs text-muted-foreground">Operations</p>
        <h1 className="text-2xl font-semibold tracking-tight">Records</h1>
        <p className="text-sm text-muted-foreground">
          Browse, search, and filter records across your workspace.
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-3">
        <Input
          value={nameQuery}
          onChange={(e) => setNameQuery(e.target.value)}
          placeholder="Search by name"
          className="w-64"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            <SelectItem value="active">active</SelectItem>
            <SelectItem value="pending">pending</SelectItem>
            <SelectItem value="archived">archived</SelectItem>
          </SelectContent>
        </Select>
        <span className="ml-auto text-xs text-muted-foreground">
          {filtered.length} of {ROWS.length}
        </span>
      </div>

      <Card className="p-0 overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-28">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="w-32">Status</TableHead>
                <TableHead className="w-32">Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center text-sm text-muted-foreground py-10"
                  >
                    no records.
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-mono text-xs text-muted-foreground">
                      {r.id}
                    </TableCell>
                    <TableCell className="font-medium">{r.name}</TableCell>
                    <TableCell>
                      <Badge>{r.status}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{r.updatedAt}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
