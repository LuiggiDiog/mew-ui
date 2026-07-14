import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";

type PropsT = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  orientation?: "horizontal" | "vertical";
};

export function ButtonGroup({ children, orientation = "horizontal", className, ...props }: PropsT) {
  return (
    <div
      role="group"
      className={cn(
        "inline-flex overflow-hidden rounded-xl border border-border bg-surface",
        orientation === "vertical" ? "flex-col" : "items-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
