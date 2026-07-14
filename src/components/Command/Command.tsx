"use client";

import { useMemo, useState, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";

export type CommandItemT = {
  label: string;
  value: string;
  description?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
};

type PropsT = Omit<HTMLAttributes<HTMLDivElement>, "onSelect"> & {
  items: CommandItemT[];
  onSelect?: (value: string) => void;
  placeholder?: string;
  emptyMessage?: string;
};

export function Command({ items, onSelect, placeholder = "Type a command", emptyMessage = "No command found.", className, ...props }: PropsT) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return items;
    return items.filter((item) => item.label.toLowerCase().includes(normalized));
  }, [items, query]);

  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-surface", className)} {...props}>
      <input
        aria-label="Command search"
        value={query}
        placeholder={placeholder}
        className="w-full border-b border-border bg-transparent px-3 py-2.5 text-sm text-text-primary placeholder:text-text-secondary focus:outline-none"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div role="listbox" className="max-h-64 overflow-auto p-1">
        {filtered.length > 0 ? filtered.map((item) => (
          <button
            key={item.value}
            type="button"
            role="option"
            disabled={item.disabled}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-text-primary transition-colors hover:bg-surface-elevated disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => onSelect?.(item.value)}
          >
            {item.icon && <span className="text-text-secondary">{item.icon}</span>}
            <span className="min-w-0">
              <span className="block truncate">{item.label}</span>
              {item.description && <span className="block truncate text-xs text-text-secondary">{item.description}</span>}
            </span>
          </button>
        )) : <p className="m-0 px-3 py-2 text-sm text-text-secondary">{emptyMessage}</p>}
      </div>
    </div>
  );
}
