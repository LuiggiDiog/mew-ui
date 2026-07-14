"use client";

import { AppShell, Badge, Button, Card, DataTable, EmptyState, PageHeader, SearchInput, SidebarNav, TableToolbar, Toaster, TopNav } from "@luiggidiog/mew-ui";
import { DocsSidebar } from "../../components/docs/DocsSidebar";

const columns = [
  { key: "name", header: "Project", cell: (row: { name: string; status: string }) => row.name },
  { key: "status", header: "Status", cell: (row: { name: string; status: string }) => <Badge variant="success">{row.status}</Badge> },
];

const rows = [
  { name: "Mew UI", status: "Live" },
  { name: "Playground", status: "Live" },
];

const sections = [
  { id: "shell", label: "Shell" },
  { id: "table", label: "Table" },
  { id: "empty", label: "Empty" },
];

export default function BuildAnAppPage() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
      <DocsSidebar activeCategory="build-an-app" sections={sections} />

      <div className="space-y-6">
        <header className="space-y-2">
          <h1 className="m-0 text-2xl font-semibold text-text-primary">Build an app</h1>
          <p className="m-0 max-w-3xl text-sm text-text-secondary">
            A compact product screen using Mew UI foundations, actions, data display, feedback, and the required styles import.
          </p>
        </header>

        <section id="shell" className="scroll-mt-24 rounded-xl border border-border bg-surface p-4">
          <AppShell
            className="min-h-0 overflow-hidden rounded-xl border border-border"
            header={<TopNav brand="Mew Workspace" items={[{ label: "Projects", href: "#", active: true }, { label: "Settings", href: "#" }]} actions={<Button size="sm">Create</Button>} />}
            sidebar={<div className="p-3"><SidebarNav items={[{ label: "Overview", href: "#", active: true }, { label: "Activity", href: "#" }]} /></div>}
          >
            <div className="space-y-4 p-4">
              <PageHeader title="Projects" description="A simple workspace index composed from reusable pieces." actions={<Button size="sm">New project</Button>} />
              <Card>
                <p className="m-0 text-sm text-text-secondary">This shell keeps layout decisions reusable while content stays product-specific.</p>
              </Card>
            </div>
          </AppShell>
        </section>

        <section id="table" className="scroll-mt-24 space-y-3 rounded-xl border border-border bg-surface p-4">
          <TableToolbar title="Projects" description="Search and act on structured content." search={<SearchInput value="" onChange={() => {}} placeholder="Search projects" />} actions={<Button size="sm">Add</Button>} />
          <DataTable columns={columns} data={rows} />
        </section>

        <section id="empty" className="scroll-mt-24 rounded-xl border border-border bg-surface p-4">
          <EmptyState title="No archived projects" description="A subtle paw appears only when it helps the empty state feel branded, not decorative." action={<Button size="sm" variant="outline">Create archive</Button>} />
        </section>
      </div>

      <Toaster />
    </div>
  );
}
