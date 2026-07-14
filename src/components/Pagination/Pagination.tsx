import type { HTMLAttributes } from "react";
import { cn } from "@mew/ui/utils/cn";
import { ChevronLeftIcon, ChevronRightIcon } from "@mew/ui/icons";

type PaginationProps = HTMLAttributes<HTMLElement>;
type PaginationContentProps = HTMLAttributes<HTMLUListElement>;
type PaginationItemProps = HTMLAttributes<HTMLLIElement>;

interface PaginationButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  disabled?: boolean;
}

export function Pagination({ className, children, ...props }: PaginationProps) {
  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      {children}
    </nav>
  );
}

export function PaginationContent({ className, children, ...props }: PaginationContentProps) {
  return (
    <ul className={cn("m-0 flex list-none items-center justify-center gap-1 p-0", className)} {...props}>
      {children}
    </ul>
  );
}

export function PaginationItem({ className, children, ...props }: PaginationItemProps) {
  return (
    <li className={cn("inline-flex list-none items-center", className)} {...props}>
      {children}
    </li>
  );
}

export function PaginationButton({ isActive, disabled, className, children, ...props }: PaginationButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex h-9 min-w-9 appearance-none items-center justify-center rounded-xl border px-3 text-sm font-medium shadow-none transition-colors",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        isActive
          ? "border-accent bg-accent text-white"
          : "border-border/60 bg-surface text-text-secondary hover:border-border hover:bg-surface-elevated hover:text-text-primary",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function PaginationPrevious({ className, ...props }: PaginationButtonProps) {
  return (
    <PaginationButton className={cn("px-2", className)} aria-label="Previous page" {...props}>
      <ChevronLeftIcon className="h-4 w-4" />
    </PaginationButton>
  );
}

export function PaginationNext({ className, ...props }: PaginationButtonProps) {
  return (
    <PaginationButton className={cn("px-2", className)} aria-label="Next page" {...props}>
      <ChevronRightIcon className="h-4 w-4" />
    </PaginationButton>
  );
}

export function PaginationEllipsis({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden="true"
      className={cn("flex h-9 w-9 items-center justify-center rounded-xl text-text-secondary", className)}
      {...props}
    >
      &hellip;
    </span>
  );
}
