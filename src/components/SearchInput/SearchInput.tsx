"use client";

import type { InputHTMLAttributes } from "react";
import { cn } from "@mew/ui/utils/cn";
import { SearchIcon, XIcon } from "@mew/ui/icons";

interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  onClear?: () => void;
}

export function SearchInput({ value, onChange, onClear, className, ...props }: SearchInputProps) {
  const hasValue = value !== undefined ? String(value).length > 0 : false;

  return (
    <div className={cn("relative flex items-center", className)}>
      <SearchIcon className="absolute left-3 w-4 h-4 text-text-secondary pointer-events-none" />
      <input
        type="search"
        value={value}
        onChange={onChange}
        className={cn(
          "w-full rounded-lg border border-border bg-surface py-2 pl-9 pr-9 text-sm text-text-primary placeholder:text-text-secondary/60",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent",
          "transition-colors"
        )}
        {...props}
      />
      {hasValue && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2.5 inline-flex h-7 w-7 appearance-none items-center justify-center rounded-full bg-transparent p-0 text-text-secondary shadow-none transition-colors hover:bg-surface-elevated hover:text-text-primary"
          aria-label="Clear search"
        >
          <XIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
