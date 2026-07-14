"use client";

import { Popover as PopoverPrimitive } from "radix-ui";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@mew/ui/utils/cn";

export const Popover = PopoverPrimitive.Root;

export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverClose = PopoverPrimitive.Close;

type PopoverContentPropsT = ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
>;

export function PopoverContent({
  className,
  sideOffset = 4,
  align = "center",
  ...props
}: PopoverContentPropsT) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        sideOffset={sideOffset}
        align={align}
        className={cn(
          "z-50 w-72 rounded-xl border border-border bg-surface p-4 shadow-lg outline-none",
          "animate-in fade-in-0 zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}
