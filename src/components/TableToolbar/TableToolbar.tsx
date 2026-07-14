import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";

type PropsT = HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode;
  description?: ReactNode;
  search?: ReactNode;
  filters?: ReactNode;
  actions?: ReactNode;
};

export function TableToolbar({ title, description, search, filters, actions, className, ...props }: PropsT) {
  return (
    <div className={cn("space-y-3 rounded-xl border border-border bg-surface p-4", className)} {...props}>
      {(title || description || actions) && (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            {title && <p className="m-0 text-sm font-medium text-text-primary">{title}</p>}
            {description && <p className="m-0 mt-1 text-sm text-text-secondary">{description}</p>}
          </div>
          {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
        </div>
      )}
      {(search || filters) && (
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          {search && <div className="min-w-0 flex-1">{search}</div>}
          {filters && <div className="flex flex-wrap items-center gap-2">{filters}</div>}
        </div>
      )}
    </div>
  );
}
