import type { ButtonHTMLAttributes } from "react";
import { cn } from "@mew/ui/utils/cn";

type PropsT = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: "ghost" | "outline" | "primary";
  size?: "sm" | "md" | "lg";
};

const variantStyles = {
  ghost: "text-text-secondary hover:bg-surface-elevated hover:text-text-primary",
  outline: "border border-border bg-surface text-text-primary hover:bg-surface-elevated",
  primary: "bg-accent text-white hover:bg-accent-hover",
} as const;

const sizeStyles = {
  sm: "h-8 w-8 rounded-lg",
  md: "h-9 w-9 rounded-xl",
  lg: "h-10 w-10 rounded-xl",
} as const;

export function IconButton({ label, variant = "ghost", size = "md", className, children, ...props }: PropsT) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "inline-flex appearance-none items-center justify-center border border-transparent shadow-none transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
