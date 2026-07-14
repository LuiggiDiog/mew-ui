import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";

export type TimelineItemT = {
  title: ReactNode;
  description?: ReactNode;
  time?: ReactNode;
  icon?: ReactNode;
};

type PropsT = HTMLAttributes<HTMLOListElement> & {
  items: TimelineItemT[];
};

export function Timeline({ items, className, ...props }: PropsT) {
  return (
    <ol className={cn("m-0 list-none space-y-4 p-0", className)} {...props}>
      {items.map((item, index) => (
        <li key={index} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-xs text-text-secondary">
            {item.icon ?? index + 1}
          </span>
          <span className="min-w-0 border-b border-border pb-4 last:border-b-0 last:pb-0">
            <span className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-sm font-medium text-text-primary">{item.title}</span>
              {item.time && <span className="text-xs text-text-secondary">{item.time}</span>}
            </span>
            {item.description && <span className="mt-1 block text-sm text-text-secondary">{item.description}</span>}
          </span>
        </li>
      ))}
    </ol>
  );
}
