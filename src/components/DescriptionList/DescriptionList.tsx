import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";

export type DescriptionListItemT = {
  term: ReactNode;
  description: ReactNode;
};

type PropsT = HTMLAttributes<HTMLDListElement> & {
  items: DescriptionListItemT[];
  direction?: "vertical" | "horizontal";
};

export function DescriptionList({ items, direction = "vertical", className, ...props }: PropsT) {
  return (
    <dl className={cn("m-0 grid gap-3", direction === "horizontal" && "sm:grid-cols-[160px_minmax(0,1fr)]", className)} {...props}>
      {items.map((item, index) => (
        <div key={index} className={cn("min-w-0", direction === "horizontal" && "contents")}>
          <dt className="text-xs font-medium uppercase tracking-wide text-text-secondary">{item.term}</dt>
          <dd className="m-0 text-sm text-text-primary">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}
