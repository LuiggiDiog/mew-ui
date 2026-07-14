import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";

type ItemT = {
  label: ReactNode;
  href: string;
  active?: boolean;
};

type PropsT = HTMLAttributes<HTMLElement> & {
  brand?: ReactNode;
  items?: ItemT[];
  actions?: ReactNode;
};

export function TopNav({ brand, items = [], actions, className, ...props }: PropsT) {
  return (
    <nav className={cn("flex items-center justify-between gap-4 px-4 py-3", className)} {...props}>
      {brand && <div className="shrink-0 text-sm font-semibold text-text-primary">{brand}</div>}
      <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            aria-current={item.active ? "page" : undefined}
            className={cn(
              "rounded-lg px-3 py-1.5 text-sm no-underline transition-colors",
              item.active ? "bg-accent-subtle text-accent" : "text-text-secondary hover:bg-surface-elevated hover:text-text-primary"
            )}
          >
            {item.label}
          </a>
        ))}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </nav>
  );
}
