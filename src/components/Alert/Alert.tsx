import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";
import { InfoIcon, CheckCircleIcon, AlertCircleIcon, AlertTriangleIcon } from "@mew/ui/icons";

const variantStyles = {
  default: "bg-surface-elevated border-border text-text-primary",
  info: "bg-accent-subtle border-accent/20 text-text-primary",
  success: "bg-success/10 border-success/20 text-text-primary",
  warning: "bg-warning/10 border-warning/20 text-text-primary",
  error: "bg-error/10 border-error/20 text-text-primary",
};

const iconColorStyles = {
  default: "text-text-secondary",
  info: "text-accent",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};

const defaultIcons = {
  default: null as ReactNode,
  info: <InfoIcon className="w-4 h-4 shrink-0" />,
  success: <CheckCircleIcon className="w-4 h-4 shrink-0" />,
  warning: <AlertTriangleIcon className="w-4 h-4 shrink-0" />,
  error: <AlertCircleIcon className="w-4 h-4 shrink-0" />,
};

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variantStyles;
  icon?: ReactNode;
}

type AlertTitleProps = HTMLAttributes<HTMLParagraphElement>;
type AlertDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export function Alert({ variant = "default", icon, className, children, ...props }: AlertProps) {
  const iconEl = icon !== undefined ? icon : defaultIcons[variant];

  return (
    <div
      role="alert"
      className={cn(
        "flex gap-3 rounded-xl border p-4",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {iconEl && (
        <span className={cn("mt-0.5", iconColorStyles[variant])}>{iconEl}</span>
      )}
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}

export function AlertTitle({ className, children, ...props }: AlertTitleProps) {
  return (
    <p className={cn("m-0 text-sm font-medium leading-none", className)} {...props}>
      {children}
    </p>
  );
}

export function AlertDescription({ className, children, ...props }: AlertDescriptionProps) {
  return (
    <p className={cn("m-0 mt-1 text-sm text-text-secondary", className)} {...props}>
      {children}
    </p>
  );
}
