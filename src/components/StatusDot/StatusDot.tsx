import type { HTMLAttributes } from "react";
import { cn } from "@mew/ui/utils/cn";

type PropsT = HTMLAttributes<HTMLSpanElement> & {
  status?: "neutral" | "success" | "warning" | "error";
  label?: string;
  showLabel?: boolean;
};

const statusStyles = {
  neutral: "bg-text-secondary",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
} as const;

export function StatusDot({ status = "neutral", label, showLabel = true, className, ...props }: PropsT) {
  const text = label ?? status;
  return (
    <span className={cn("inline-flex items-center gap-2 text-sm text-text-secondary", className)} {...props}>
      <span aria-hidden="true" className={cn("h-2 w-2 rounded-full", statusStyles[status])} />
      {showLabel && <span>{text}</span>}
      {!showLabel && <span className="sr-only">{text}</span>}
    </span>
  );
}
