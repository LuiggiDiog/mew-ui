"use client";

import { cn } from "@mew/ui/utils/cn";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

export function Toggle({ checked, onChange, disabled, label, className }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-5 w-9 shrink-0 rounded-full transition-colors duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        checked ? "bg-accent" : "bg-zinc-700",
        className
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 left-0.5 inline-block h-4 w-4 rounded-full bg-white shadow-sm",
          "transition-transform duration-200",
          checked ? "translate-x-4" : "translate-x-0"
        )}
      />
    </button>
  );
}
