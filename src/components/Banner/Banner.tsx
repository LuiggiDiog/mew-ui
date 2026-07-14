import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";

type PropsT = HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  variant?: "info" | "success" | "warning" | "error";
};

const variantStyles = {
  info: "border-accent/40 bg-accent-subtle",
  success: "border-success/40 bg-success/10",
  warning: "border-warning/40 bg-warning/10",
  error: "border-error/40 bg-error/10",
} as const;

export function Banner({ title, description, action, variant = "info", className, ...props }: PropsT) {
  return (
    <div className={cn("flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between", variantStyles[variant], className)} {...props}>
      <div className="min-w-0">
        {title && <p className="m-0 text-sm font-medium text-text-primary">{title}</p>}
        {description && <p className="m-0 mt-1 text-sm text-text-secondary">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
