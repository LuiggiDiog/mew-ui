import type { HTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "@mew/ui/utils/cn";
import { ChevronRightIcon } from "@mew/ui/icons";

type BreadcrumbProps = HTMLAttributes<HTMLElement>;
type BreadcrumbListProps = HTMLAttributes<HTMLOListElement>;
type BreadcrumbItemProps = HTMLAttributes<HTMLLIElement>;
type BreadcrumbLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;
type BreadcrumbPageProps = HTMLAttributes<HTMLSpanElement>;
type BreadcrumbSeparatorProps = HTMLAttributes<HTMLSpanElement>;

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
      className={cn("flex flex-wrap items-center gap-1.5 text-sm text-text-secondary", className)}
      {...props}
    >
      {children}
    </ol>
  );
}

export function BreadcrumbItem({ className, children, ...props }: BreadcrumbItemProps) {
  return (
    <li className={cn("inline-flex items-center gap-1.5", className)} {...props}>
      {children}
    </li>
  );
}

export function BreadcrumbLink({ className, children, ...props }: BreadcrumbLinkProps) {
  return (
    <a
      className={cn(
        "hover:text-text-primary transition-colors",
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
      className={cn("font-medium text-text-primary", className)}
      {...props}
    >
      {children}
    </span>
  );
}

export function BreadcrumbSeparator({ className, ...props }: BreadcrumbSeparatorProps) {
  return (
    <span aria-hidden="true" className={cn("text-text-secondary/40", className)} {...props}>
      <ChevronRightIcon className="w-3.5 h-3.5" />
    </span>
  );
}
