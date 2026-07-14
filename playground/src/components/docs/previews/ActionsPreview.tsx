"use client";

import { useState } from "react";
import { Button, ButtonGroup, ConfirmAction, CopyButton, IconButton, LinkButton } from "@luiggidiog/mew-ui";
import { MoreHorizontalIcon } from "@luiggidiog/mew-ui/icons";

export default function ActionsPreview({ name }: { name: string }) {
  const [confirmed, setConfirmed] = useState(false);

  switch (name) {
    case "Button":
      return <Button>Primary</Button>;
    case "IconButton":
      return <IconButton label="More actions" variant="outline"><MoreHorizontalIcon className="h-4 w-4" /></IconButton>;
    case "ButtonGroup":
      return <ButtonGroup><Button size="sm" variant="ghost">Day</Button><Button size="sm" variant="ghost">Week</Button></ButtonGroup>;
    case "LinkButton":
      return <LinkButton href="#">Read docs</LinkButton>;
    case "ConfirmAction":
      return <ConfirmAction label={confirmed ? "Confirmed" : "Delete"} title="Delete item?" confirmLabel="Delete" confirmVariant="destructive" onConfirm={() => setConfirmed(true)} />;
    case "CopyButton":
      return <CopyButton text="npm install @luiggidiog/mew-ui" />;
    default:
      return <p className="m-0 text-xs text-text-secondary">See usage snippet below.</p>;
  }
}
