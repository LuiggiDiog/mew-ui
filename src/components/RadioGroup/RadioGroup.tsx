"use client";

import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import { cn } from "@mew/ui/utils/cn";

interface RadioGroupProps {
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface RadioGroupItemProps {
  value: string;
  disabled?: boolean;
  id?: string;
  className?: string;
}

export function RadioGroup({ value, onValueChange, disabled, className, children }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      className={cn("flex flex-col gap-2", className)}
    >
      {children}
    </RadioGroupPrimitive.Root>
  );
}

export function RadioGroupItem({ value, disabled, id, className }: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      id={id}
      value={value}
      disabled={disabled}
      className={cn(
        "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-border bg-surface",
        "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        "data-[state=checked]:border-accent",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <span className="block h-2 w-2 rounded-full bg-accent" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}
