"use client";

import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";
import { cn } from "@mew/ui/utils/cn";
import type { ReactNode } from "react";

interface ScrollAreaPropsT {
  className?: string;
  children: ReactNode;
}

export function ScrollArea({ className, children }: ScrollAreaPropsT) {
  return (
    <ScrollAreaPrimitive.Root className={cn("relative overflow-hidden", className)}>
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        orientation="vertical"
        className="flex touch-none select-none transition-colors w-1.5 border-l border-l-transparent p-[1px]"
      >
        <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-border hover:bg-zinc-500" />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Scrollbar
        orientation="horizontal"
        className="flex touch-none select-none transition-colors h-1.5 flex-col border-t border-t-transparent p-[1px]"
      >
        <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-border hover:bg-zinc-500" />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Corner className="bg-transparent" />
    </ScrollAreaPrimitive.Root>
  );
}
