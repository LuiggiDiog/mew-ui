import type { HTMLAttributes, ReactNode } from "react";
import { SidebarNav, type SidebarNavItemT } from "@mew/ui/components/SidebarNav";
import { cn } from "@mew/ui/utils/cn";

type PropsT = HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode;
  description?: ReactNode;
  items: SidebarNavItemT[];
  children: ReactNode;
};

export function SettingsLayout({ title, description, items, children, className, ...props }: PropsT) {
  return (
    <div className={cn("grid grid-cols-1 gap-6 lg:grid-cols-[220px_minmax(0,1fr)]", className)} {...props}>
      <aside className="space-y-3">
        {(title || description) && (
          <div>
            {title && <p className="m-0 text-sm font-semibold text-text-primary">{title}</p>}
            {description && <p className="m-0 mt-1 text-xs text-text-secondary">{description}</p>}
          </div>
        )}
        <SidebarNav items={items} />
      </aside>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
