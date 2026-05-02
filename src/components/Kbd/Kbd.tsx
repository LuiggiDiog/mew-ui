import { cn } from "@mew/ui/utils/cn";
import type { HTMLAttributes } from "react";

interface KbdProps extends HTMLAttributes<HTMLElement> {}

export function Kbd({ className, children, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center rounded border border-border bg-surface-elevated px-1.5 py-0.5 font-mono text-xs text-text-secondary",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
