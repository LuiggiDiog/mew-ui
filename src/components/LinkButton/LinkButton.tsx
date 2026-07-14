import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";

type PropsT = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
};

const variantStyles = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  ghost: "bg-transparent text-text-secondary hover:bg-surface-elevated hover:text-text-primary",
  outline: "border border-border bg-surface text-text-primary hover:bg-surface-elevated",
} as const;

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs rounded-lg",
  md: "px-4 py-2 text-sm rounded-xl",
  lg: "px-5 py-2.5 text-base rounded-xl",
} as const;

export function LinkButton({ children, variant = "outline", size = "md", className, ...props }: PropsT) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 border border-transparent font-medium no-underline transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
