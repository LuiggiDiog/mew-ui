import type { HTMLAttributes, ReactNode } from "react";
import { InfoIcon, AlertTriangleIcon, CheckCircleIcon } from "@mew/ui/icons";
import { cn } from "@mew/ui/utils/cn";

type PropsT = HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode;
  children: ReactNode;
  variant?: "info" | "success" | "warning";
  icon?: ReactNode;
};

const variantStyles = {
  info: "border-accent/40 bg-accent-subtle text-text-primary",
  success: "border-success/40 bg-success/10 text-text-primary",
  warning: "border-warning/40 bg-warning/10 text-text-primary",
} as const;

const defaultIcons = {
  info: <InfoIcon className="h-4 w-4" />,
  success: <CheckCircleIcon className="h-4 w-4" />,
  warning: <AlertTriangleIcon className="h-4 w-4" />,
} as const;

export function Callout({ title, children, variant = "info", icon, className, ...props }: PropsT) {
  return (
    <div className={cn("flex gap-3 rounded-xl border p-4", variantStyles[variant], className)} {...props}>
      <div className="mt-0.5 shrink-0 text-current">{icon ?? defaultIcons[variant]}</div>
      <div className="min-w-0 space-y-1">
        {title && <p className="m-0 text-sm font-medium">{title}</p>}
        <div className="text-sm text-text-secondary">{children}</div>
      </div>
    </div>
  );
}
