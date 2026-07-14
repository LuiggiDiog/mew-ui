"use client";

import { AspectRatio, Container, ScrollArea, Separator, SettingsSection, Stack } from "@luiggidiog/mew-ui";

export default function LayoutPreview({ name }: { name: string }) {
  switch (name) {
    case "AspectRatio": return <AspectRatio ratio={16 / 9} className="rounded-lg border border-border bg-surface-elevated"><div className="flex h-full items-center justify-center text-xs text-text-secondary">16:9</div></AspectRatio>;
    case "Container": return <Container size="sm" className="px-0"><div className="rounded-lg bg-surface-elevated p-3 text-xs text-text-secondary">Contained content</div></Container>;
    case "ScrollArea": return <ScrollArea className="h-20 rounded-md border border-border"><div className="space-y-1 p-2">{Array.from({ length: 6 }).map((_, i) => <p key={i} className="m-0 text-xs">Line {i + 1}</p>)}</div></ScrollArea>;
    case "SettingsSection": return <SettingsSection title="Provider" description="Connection settings"><div className="px-4 py-3 text-sm text-text-secondary">Ollama</div></SettingsSection>;
    case "Stack": return <Stack gap="sm"><div className="rounded bg-surface-elevated p-2 text-xs">Row 1</div><div className="rounded bg-surface-elevated p-2 text-xs">Row 2</div></Stack>;
    case "Layout utilities": return <Separator />;
    default: return <p className="m-0 text-xs text-text-secondary">See usage snippet below.</p>;
  }
}
