import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";

export type SidebarNavItemT = {
  label: ReactNode;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
};

type PropsT = Omit<HTMLAttributes<HTMLElement>, "onSelect"> & {
  items: SidebarNavItemT[];
  label?: string;
};

export function SidebarNav({ items, label = "Sidebar navigation", className, ...props }: PropsT) {
  return (
    <nav aria-label={label} className={cn("flex flex-col gap-1", className)} {...props}>
      {items.map((item, index) => {
        const content = (
          <>
            {item.icon && <span className="shrink-0 text-text-secondary">{item.icon}</span>}
            <span className="truncate">{item.label}</span>
          </>
        );
        const classes = cn(
          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
          item.active ? "bg-accent-subtle text-accent" : "text-text-secondary hover:bg-surface-elevated hover:text-text-primary",
          item.disabled && "pointer-events-none opacity-50"
        );

        if (item.href) {
          return <a key={index} href={item.href} aria-current={item.active ? "page" : undefined} className={classes}>{content}</a>;
        }

        return <button key={index} type="button" disabled={item.disabled} aria-current={item.active ? "page" : undefined} onClick={item.onClick} className={classes}>{content}</button>;
      })}
    </nav>
  );
}
