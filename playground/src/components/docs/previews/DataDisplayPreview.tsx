"use client";

import { Avatar, Badge, Card, CardHeader, CardTitle, CardValue, CodeBlock, DataTable, DescriptionList, Kbd, KeyValue, List, ListItem, Stat, StatDelta, StatLabel, StatValue, TableToolbar, Tag, Timeline, SearchInput } from "@luiggidiog/mew-ui";

export default function DataDisplayPreview({ name }: { name: string }) {
  switch (name) {
    case "Avatar": return <Avatar name="Mew Cat" role="assistant" />;
    case "Card": return <Card><CardHeader><CardTitle>Requests</CardTitle><Badge>Today</Badge></CardHeader><CardValue>132</CardValue></Card>;
    case "Stat": return <Stat><StatLabel>Requests</StatLabel><StatValue>130</StatValue><StatDelta current={130} previous={100} /></Stat>;
    case "DataTable": return <DataTable columns={[{ key: "name", header: "Name", cell: (row: { name: string }) => row.name }]} data={[{ name: "Mew UI" }]} />;
    case "TableToolbar": return <TableToolbar title="Projects" search={<SearchInput value="" onChange={() => {}} />} />;
    case "DescriptionList": return <DescriptionList items={[{ term: "Plan", description: "Pro" }, { term: "Status", description: "Active" }]} />;
    case "List": return <List><ListItem title="Project Alpha" description="Updated today" meta="Live" /></List>;
    case "Timeline": return <Timeline items={[{ title: "Created", time: "Today", description: "Workspace initialized" }]} />;
    case "KeyValue": return <KeyValue items={[{ label: "Provider", value: "Mew" }]} />;
    case "CodeBlock": return <CodeBlock language="tsx" code={'<Button>Save</Button>'} />;
    case "Utility labels": return <div className="flex items-center gap-2"><Kbd>⌘K</Kbd><Tag>Stable</Tag></div>;
    default: return <p className="m-0 text-xs text-text-secondary">See usage snippet below.</p>;
  }
}
