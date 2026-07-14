import type { HTMLAttributes } from "react";
import { cn } from "@mew/ui/utils/cn";

type PropsT = HTMLAttributes<HTMLDivElement> & {
  columns?: 1 | 2 | 3 | 4;
};

const columnStyles = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
} as const;

export function DashboardGrid({ columns = 3, className, ...props }: PropsT) {
  return <div className={cn("grid gap-4", columnStyles[columns], className)} {...props} />;
}
