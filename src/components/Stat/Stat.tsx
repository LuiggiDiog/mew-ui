import type { HTMLAttributes } from "react";
import { cn } from "@mew/ui/utils/cn";
import { percentageDiff } from "@mew/ui/utils";

type StatProps = HTMLAttributes<HTMLDivElement>;
type StatLabelProps = HTMLAttributes<HTMLParagraphElement>;
type StatValueProps = HTMLAttributes<HTMLParagraphElement>;

interface StatDeltaProps extends HTMLAttributes<HTMLSpanElement> {
  current: number;
  previous: number;
}

export function Stat({ className, children, ...props }: StatProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)} {...props}>
      {children}
    </div>
  );
}

export function StatLabel({ className, children, ...props }: StatLabelProps) {
  return (
    <p className={cn("text-xs font-medium uppercase tracking-wide text-text-secondary", className)} {...props}>
      {children}
    </p>
  );
}

export function StatValue({ className, children, ...props }: StatValueProps) {
  return (
    <p className={cn("text-2xl font-semibold text-text-primary", className)} {...props}>
      {children}
    </p>
  );
}

export function StatDelta({ current, previous, className, ...props }: StatDeltaProps) {
  const delta = percentageDiff(previous, current);
  const isPositive = delta.startsWith("+");
  const isNeutral = delta === "N/A";

  return (
    <span
      className={cn(
        "text-xs font-medium",
        isNeutral ? "text-text-secondary" : isPositive ? "text-success" : "text-error",
        className
      )}
      {...props}
    >
      {delta}
    </span>
  );
}
