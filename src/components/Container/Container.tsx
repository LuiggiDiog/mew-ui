import { cn } from "@mew/ui/utils/cn";
import type { HTMLAttributes } from "react";

const sizeStyles = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  full: "max-w-full",
};

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof sizeStyles;
}

export function Container({ size = "lg", className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-4", sizeStyles[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
