"use client";

import { useState } from "react";
import { Button, ContextMenu, Dialog, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, Popover, PopoverContent, PopoverTrigger, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@luiggidiog/mew-ui";

export default function OverlaysPreview({ name }: { name: string }) {
  const [dialog, setDialog] = useState(false);

  switch (name) {
    case "Dialog": return <><Button size="sm" onClick={() => setDialog(true)}>Open dialog</Button><Dialog open={dialog} onOpenChange={setDialog} title="Dialog"><p className="m-0 text-sm text-text-secondary">Body content</p></Dialog></>;
    case "Sheet": return <Sheet><SheetTrigger asChild><Button size="sm">Open sheet</Button></SheetTrigger><SheetContent><SheetHeader><SheetTitle>Sheet</SheetTitle></SheetHeader></SheetContent></Sheet>;
    case "Popover": return <Popover><PopoverTrigger asChild><Button size="sm">Open popover</Button></PopoverTrigger><PopoverContent>Content</PopoverContent></Popover>;
    case "Tooltip": return <TooltipProvider><Tooltip><TooltipTrigger asChild><Button size="sm">Hover</Button></TooltipTrigger><TooltipContent>Helpful hint</TooltipContent></Tooltip></TooltipProvider>;
    case "DropdownMenu": return <DropdownMenu><DropdownMenuTrigger asChild><Button size="sm">Menu</Button></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Edit</DropdownMenuItem><DropdownMenuItem>Delete</DropdownMenuItem></DropdownMenuContent></DropdownMenu>;
    case "ContextMenu": return <ContextMenu items={[{ label: "Edit", onSelect: () => {} }]}><div className="rounded-lg border border-border p-3 text-sm text-text-secondary">Right click area</div></ContextMenu>;
    default: return <p className="m-0 text-xs text-text-secondary">See usage snippet below.</p>;
  }
}
