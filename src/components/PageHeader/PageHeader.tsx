import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";

type PropsT = HTMLAttributes<HTMLElement> & {
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
};

export function PageHeader({ title, description, meta, actions, className, ...props }: PropsT) {
  return (
    <header className={cn("flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between", className)} {...props}>
      <div className="min-w-0 space-y-2">
        {meta && <div className="text-xs font-medium uppercase tracking-wide text-text-secondary">{meta}</div>}
        <h1 className="m-0 text-2xl font-semibold leading-tight text-text-primary">{title}</h1>
        {description && <p className="m-0 max-w-2xl text-sm text-text-secondary">{description}</p>}
      </div>
      {actions && <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div>}
    </header>
  );
}
