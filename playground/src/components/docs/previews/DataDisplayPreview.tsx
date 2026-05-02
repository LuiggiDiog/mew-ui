"use client";

import { useState } from "react";
import {
  Avatar,
  Card,
  CardHeader,
  CardTitle,
  CardValue,
  CodeBlock,
  InlineEditor,
  Kbd,
  KeyValue,
  Stat,
  StatDelta,
  StatLabel,
  StatValue,
  Tag,
} from "@mew/ui";

export default function DataDisplayPreview({ name }: { name: string }) {
  const [text, setText] = useState("Example");

  switch (name) {
    case "Avatar":
      return <Avatar name="Mew User" />;
    case "Card":
      return (
        <Card>
          <CardHeader>
            <CardTitle>Requests</CardTitle>
            <CardValue>120</CardValue>
          </CardHeader>
        </Card>
      );
    case "CodeBlock":
      return <CodeBlock language="tsx" code={`<Button>Save</Button>`} />;
    case "InlineEditor":
      return <InlineEditor value={text} onChange={setText} onSave={() => {}} onCancel={() => {}} />;
    case "Kbd":
      return <Kbd>⌘K</Kbd>;
    case "KeyValue":
      return <KeyValue items={[{ label: "Provider", value: "Ollama" }]} />;
    case "Stat":
      return (
        <Stat>
          <StatLabel>Requests</StatLabel>
          <StatValue>120</StatValue>
          <StatDelta current={120} previous={100} />
        </Stat>
      );
    case "Tag":
      return <Tag variant="accent">Tag</Tag>;
    default:
      return <p className="text-xs text-text-secondary">See usage snippet below.</p>;
  }
}
