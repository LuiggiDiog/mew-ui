import type { HTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "@mew/ui/utils/cn";
import { ChevronRightIcon } from "@mew/ui/icons";

type BreadcrumbProps = HTMLAttributes<HTMLElement>;
type BreadcrumbListProps = HTMLAttributes<HTMLOListElement>;
type BreadcrumbItemProps = HTMLAttributes<HTMLLIElement>;
type BreadcrumbLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;
type BreadcrumbPageProps = HTMLAttributes<HTMLSpanElement>;
type BreadcrumbSeparatorProps = HTMLAttributes<HTMLLIElement>;

export function Breadcrumb({ className, children, ...props }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn(className)} {...props}>
      {children}
    </nav>
  );
}

export function BreadcrumbList({ className, children, ...props }: BreadcrumbListProps) {
  return (
    <ol
      className={cn(
        "m-0 flex list-none flex-wrap items-center gap-1 p-0 text-sm text-text-secondary",
        className
      )}
      {...props}
    >
      {children}
    </ol>
  );
}

export function BreadcrumbItem({ className, children, ...props }: BreadcrumbItemProps) {
  return (
    <li className={cn("inline-flex list-none items-center gap-1", className)} {...props}>
      {children}
    </li>
  );
}

export function BreadcrumbLink({ className, children, ...props }: BreadcrumbLinkProps) {
  return (
    <a
      className={cn(
        "rounded-md px-1 py-0.5 text-text-secondary no-underline transition-colors hover:bg-surface-elevated hover:text-text-primary",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export function BreadcrumbPage({ className, children, ...props }: BreadcrumbPageProps) {
  return (
    <span
      aria-current="page"
      className={cn("rounded-md px-1 py-0.5 font-medium text-text-primary", className)}
      {...props}
    >
      {children}
    </span>
  );
}

export function BreadcrumbSeparator({ className, ...props }: BreadcrumbSeparatorProps) {
  return (
    <li
      aria-hidden="true"
      role="presentation"
      className={cn("inline-flex h-5 w-5 list-none items-center justify-center text-text-secondary/40", className)}
      {...props}
    >
      <ChevronRightIcon className="h-3.5 w-3.5" />
    </li>
  );
}
