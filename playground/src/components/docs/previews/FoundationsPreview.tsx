"use client";

import { AppShell, Button, PageHeader, SidebarNav, Toolbar, TopNav, SearchInput } from "@luiggidiog/mew-ui";

export default function FoundationsPreview({ name }: { name: string }) {
  switch (name) {
    case "AppShell":
      return (
        <div className="h-40 overflow-hidden rounded-lg border border-border">
          <AppShell header={<div className="px-3 py-2 text-xs">Header</div>} sidebar={<div className="p-3 text-xs text-text-secondary">Sidebar</div>}>
            <div className="p-3 text-xs text-text-secondary">Content area</div>
          </AppShell>
        </div>
      );
    case "PageHeader":
      return <PageHeader title="Projects" description="Manage product workspaces." actions={<Button size="sm">New</Button>} />;
    case "SidebarNav":
      return <SidebarNav items={[{ label: "Overview", href: "#", active: true }, { label: "Settings", href: "#" }]} />;
    case "TopNav":
      return <TopNav brand="Mew" items={[{ label: "Docs", href: "#", active: true }, { label: "Icons", href: "#" }]} actions={<Button size="sm" variant="outline">Open</Button>} />;
    case "Toolbar":
      return <Toolbar search={<SearchInput value="" onChange={() => {}} placeholder="Search" />} actions={<Button size="sm">Create</Button>} />;
    default:
      return <p className="m-0 text-xs text-text-secondary">See usage snippet below.</p>;
  }
}
