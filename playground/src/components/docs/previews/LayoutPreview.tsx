"use client";

import {
  AspectRatio,
  Container,
  Kbd,
  ScrollArea,
  Separator,
  SettingsSection,
  Skeleton,
  Spinner,
  Stack,
  Tag,
} from "@luiggidiog/mew-ui";

export default function LayoutPreview({ name }: { name: string }) {
  switch (name) {
    case "AspectRatio":
      return (
        <AspectRatio ratio={16 / 9} className="rounded-lg border border-border bg-surface-elevated">
          <div className="flex h-full items-center justify-center text-xs text-text-secondary">16:9</div>
        </AspectRatio>
      );
    case "Container":
      return (
        <Container size="sm" className="px-0">
          <div className="rounded-lg bg-surface-elevated p-3 text-xs text-text-secondary">Contained content</div>
        </Container>
      );
    case "ScrollArea":
      return (
        <ScrollArea className="h-20 rounded-md border border-border">
          <div className="space-y-1 p-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <p key={i} className="text-xs">Line {i + 1}</p>
            ))}
          </div>
        </ScrollArea>
      );
    case "Separator":
      return <Separator />;
    case "SettingsSection":
      return (
        <SettingsSection title="Provider" description="Connection settings">
          <div className="px-4 py-3 text-sm text-text-secondary">Ollama</div>
        </SettingsSection>
      );
    case "Stack":
      return (
        <Stack gap="sm">
          <div className="rounded bg-surface-elevated p-2 text-xs">Row 1</div>
          <div className="rounded bg-surface-elevated p-2 text-xs">Row 2</div>
        </Stack>
      );
    case "Utility primitives":
      return (
        <div className="space-y-3">
          <Separator />
          <div className="flex items-center gap-3">
            <Skeleton width={100} height={12} />
            <Spinner size="sm" />
            <Kbd>⌘K</Kbd>
            <Tag>Stable</Tag>
          </div>
        </div>
      );
    default:
      return <p className="text-xs text-text-secondary">See usage snippet below.</p>;
  }
}
