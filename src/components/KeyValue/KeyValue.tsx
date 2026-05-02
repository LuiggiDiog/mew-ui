import { cn } from "@mew/ui/utils/cn";
import type { HTMLAttributes } from "react";

interface KeyValueItemProps {
  label: string;
  value: React.ReactNode;
  className?: string;
}

interface KeyValueProps extends HTMLAttributes<HTMLDListElement> {
  items: KeyValueItemProps[];
  direction?: "horizontal" | "vertical";
}

export function KeyValue({ items, direction = "vertical", className, ...props }: KeyValueProps) {
  return (
    <dl
      className={cn(
        "text-sm",
        direction === "horizontal" ? "flex flex-wrap gap-x-6 gap-y-2" : "flex flex-col gap-2",
        className
      )}
      {...props}
    >
      {items.map((item, i) => (
        <div key={i} className={cn("flex", direction === "horizontal" ? "flex-col gap-0.5" : "flex-row gap-2")}>
          <dt className="text-text-secondary shrink-0">{item.label}</dt>
          <dd className={cn("text-text-primary", direction === "horizontal" ? "" : "ml-auto text-right", item.className)}>
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
