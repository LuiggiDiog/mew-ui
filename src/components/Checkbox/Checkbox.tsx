"use client";

import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { cn } from "@mew/ui/utils/cn";
import { CheckIcon } from "@mew/ui/icons";

interface CheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
}

export function Checkbox({ checked, onCheckedChange, disabled, id, className }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      id={id}
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={cn(
        "flex h-4 w-4 shrink-0 items-center justify-center rounded-md border border-border bg-surface",
        "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        "data-[state=checked]:bg-accent data-[state=checked]:border-accent",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
        <CheckIcon className="h-3 w-3" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
