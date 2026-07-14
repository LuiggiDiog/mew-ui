import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";

type PropsT = HTMLAttributes<HTMLDivElement> & {
  leading?: ReactNode;
  search?: ReactNode;
  filters?: ReactNode;
  actions?: ReactNode;
};

export function Toolbar({ leading, search, filters, actions, className, ...props }: PropsT) {
  return (
    <div className={cn("flex flex-col gap-3 rounded-xl border border-border bg-surface p-3 md:flex-row md:items-center", className)} {...props}>
      {leading && <div className="shrink-0">{leading}</div>}
      {search && <div className="min-w-0 flex-1">{search}</div>}
      {filters && <div className="flex flex-wrap items-center gap-2">{filters}</div>}
      {actions && <div className="flex flex-wrap items-center gap-2 md:ml-auto">{actions}</div>}
    </div>
  );
}
