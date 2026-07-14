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
    <ul className={cn("flex items-center gap-1", className)} {...props}>
      {children}
    </ul>
  );
}

export function PaginationItem({ className, children, ...props }: PaginationItemProps) {
  return (
    <li className={cn(className)} {...props}>
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
        "inline-flex h-8 min-w-[2rem] appearance-none items-center justify-center rounded-lg border px-2 text-sm font-medium shadow-none transition-colors",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        isActive
          ? "border-accent bg-accent text-white"
          : "border-border bg-surface text-text-secondary hover:bg-surface-elevated hover:text-text-primary",
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
    <PaginationButton className={cn("gap-1", className)} aria-label="Previous page" {...props}>
      <ChevronLeftIcon className="w-4 h-4" />
    </PaginationButton>
  );
}

export function PaginationNext({ className, ...props }: PaginationButtonProps) {
  return (
    <PaginationButton className={cn("gap-1", className)} aria-label="Next page" {...props}>
      <ChevronRightIcon className="w-4 h-4" />
    </PaginationButton>
  );
}

export function PaginationEllipsis({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden="true"
      className={cn("flex h-8 w-8 items-center justify-center text-text-secondary", className)}
      {...props}
    >
      &hellip;
    </span>
  );
}
