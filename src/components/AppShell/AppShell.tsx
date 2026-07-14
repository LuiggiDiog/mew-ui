import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";

type PropsT = HTMLAttributes<HTMLDivElement> & {
  header?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
};

export function AppShell({ header, sidebar, children, footer, className, ...props }: PropsT) {
  return (
    <div className={cn("min-h-dvh bg-background text-text-primary", className)} {...props}>
      {header && <header className="border-b border-border bg-surface">{header}</header>}
      <div className="grid min-h-[calc(100dvh-1px)] grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)]">
        {sidebar && <aside className="border-b border-border bg-surface lg:border-b-0 lg:border-r">{sidebar}</aside>}
        <main className={cn("min-w-0", !sidebar && "lg:col-span-2")}>{children}</main>
      </div>
      {footer && <footer className="border-t border-border bg-surface">{footer}</footer>}
    </div>
  );
}
