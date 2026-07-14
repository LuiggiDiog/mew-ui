import type { HTMLAttributes, LiHTMLAttributes, ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";

type ListPropsT = HTMLAttributes<HTMLUListElement>;

type ListItemPropsT = LiHTMLAttributes<HTMLLIElement> & {
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  action?: ReactNode;
  icon?: ReactNode;
};

export function List({ className, ...props }: ListPropsT) {
  return <ul className={cn("m-0 list-none divide-y divide-border rounded-xl border border-border bg-surface p-0", className)} {...props} />;
}

export function ListItem({ title, description, meta, action, icon, className, ...props }: ListItemPropsT) {
  return (
    <li className={cn("flex items-center gap-3 px-4 py-3", className)} {...props}>
      {icon && <div className="shrink-0 text-text-secondary">{icon}</div>}
      <div className="min-w-0 flex-1">
        <p className="m-0 truncate text-sm font-medium text-text-primary">{title}</p>
        {description && <p className="m-0 mt-1 truncate text-sm text-text-secondary">{description}</p>}
      </div>
      {meta && <div className="shrink-0 text-xs text-text-secondary">{meta}</div>}
      {action && <div className="shrink-0">{action}</div>}
    </li>
  );
}
