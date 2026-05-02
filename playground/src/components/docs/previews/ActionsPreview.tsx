"use client";

import { Button } from "@mew/ui";

export default function ActionsPreview({ name }: { name: string }) {
  switch (name) {
    case "Button":
      return <Button>Primary</Button>;
    default:
      return <p className="text-xs text-text-secondary">See usage snippet below.</p>;
  }
}
