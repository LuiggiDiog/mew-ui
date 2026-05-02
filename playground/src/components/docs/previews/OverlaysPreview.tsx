"use client";

import { useState } from "react";
import {
  Button,
  ConfirmDialog,
  ContextMenu,
  Dialog,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@mew/ui";

export default function OverlaysPreview({ name }: { name: string }) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  switch (name) {
    case "ContextMenu":
      return (
        <ContextMenu items={[{ label: "Edit", onSelect: () => {} }, { label: "Delete", variant: "destructive" as const, onSelect: () => {} }]}>
          <div className="rounded-lg border border-border px-4 py-3 text-sm text-text-secondary">Right-click here</div>
        </ContextMenu>
      );
    case "Dialog":
      return (
        <div className="flex items-center gap-2">
          <Button size="sm" onClick={() => setDialogOpen(true)}>Open dialog</Button>
          <Button size="sm" variant="outline" onClick={() => setConfirmOpen(true)}>Open confirm</Button>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen} title="Dialog title" description="Confirm your action">
            <p className="text-sm text-text-secondary">This is a dialog content example.</p>
          </Dialog>
          <ConfirmDialog open={confirmOpen} onOpenChange={setConfirmOpen} title="Delete item?" description="This action cannot be undone." onConfirm={() => setConfirmOpen(false)} />
        </div>
      );
    case "DropdownMenu":
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild><Button size="sm" variant="outline">Menu</Button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    case "Popover":
      return (
        <Popover>
          <PopoverTrigger asChild><Button size="sm" variant="outline">Popover</Button></PopoverTrigger>
          <PopoverContent>
            <p className="text-sm">Popover content.</p>
            <div className="mt-2 flex justify-end"><PopoverClose asChild><Button size="sm">Close</Button></PopoverClose></div>
          </PopoverContent>
        </Popover>
      );
    case "Sheet":
      return (
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild><Button size="sm" variant="outline">Open Sheet</Button></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Settings</SheetTitle>
              <SheetDescription>Quick panel.</SheetDescription>
            </SheetHeader>
            <div className="mt-4"><SheetClose asChild><Button size="sm">Done</Button></SheetClose></div>
          </SheetContent>
        </Sheet>
      );
    case "Tooltip":
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild><Button size="sm" variant="outline">Hover</Button></TooltipTrigger>
            <TooltipContent>Tooltip content</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    default:
      return <p className="text-xs text-text-secondary">See usage snippet below.</p>;
  }
}
