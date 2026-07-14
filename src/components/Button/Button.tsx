import { cn } from "@mew/ui/utils/cn";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const variantStyles = {
  primary:
    "bg-accent text-white hover:bg-accent-hover active:scale-[0.98] transition-colors",
  ghost:
    "bg-transparent text-text-secondary hover:bg-surface-elevated hover:text-text-primary transition-colors",
  outline:
    "border border-border bg-surface text-text-primary hover:bg-surface-elevated transition-colors",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs rounded-lg",
  md: "px-4 py-2 text-sm rounded-xl",
  lg: "px-5 py-2.5 text-base rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex appearance-none items-center justify-center gap-2 border border-transparent font-medium shadow-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
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
