"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@mew/ui/utils/cn";

export function TooltipProvider(
  props: ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider>
) {
  return <TooltipPrimitive.Provider delayDuration={300} {...props} />;
}

export const Tooltip = TooltipPrimitive.Root;

export const TooltipTrigger = TooltipPrimitive.Trigger;

type TooltipContentPropsT = ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Content
>;

export function TooltipContent({
  className,
  sideOffset = 4,
  ...props
}: TooltipContentPropsT) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          "z-50 rounded-lg border border-border bg-surface-elevated px-3 py-1.5 text-xs text-text-primary shadow-md",
          "animate-in fade-in-0 zoom-in-95",
          className
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
}
