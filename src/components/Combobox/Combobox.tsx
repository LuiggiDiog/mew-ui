"use client";

import { useId, useMemo, useState, type InputHTMLAttributes } from "react";
import { cn } from "@mew/ui/utils/cn";

export type ComboboxOptionT = {
  label: string;
  value: string;
  disabled?: boolean;
};

type PropsT = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
  options: ComboboxOptionT[];
  value?: string;
  onValueChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  emptyMessage?: string;
};

export function Combobox({ options, value, onValueChange, label, placeholder = "Search options", emptyMessage = "No options found.", className, ...props }: PropsT) {
  const inputId = useId();
  const listboxId = `${inputId}-listbox`;
  const selected = options.find((option) => option.value === value);
  const [query, setQuery] = useState(selected?.label ?? "");
  const [open, setOpen] = useState(false);
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return options;
    return options.filter((option) => option.label.toLowerCase().includes(normalized));
  }, [options, query]);

  function selectOption(option: ComboboxOptionT) {
    if (option.disabled) return;
    setQuery(option.label);
    setOpen(false);
    onValueChange?.(option.value);
  }

  return (
    <div className={cn("relative space-y-1.5", className)}>
      {label && <label htmlFor={inputId} className="block text-xs font-medium text-text-secondary">{label}</label>}
      <input
        role="combobox"
        aria-expanded={open}
        aria-autocomplete="list"
        aria-controls={listboxId}
        id={inputId}
        value={query}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-surface-elevated px-3 py-2.5 text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent/60"
        onFocus={() => setOpen(true)}
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
        }}
        {...props}
      />
      {open && (
        <div id={listboxId} role="listbox" className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-xl border border-border bg-surface p-1 shadow-lg">
          {filtered.length > 0 ? filtered.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={option.value === value}
              disabled={option.disabled}
              className={cn(
                "flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-text-secondary transition-colors hover:bg-surface-elevated hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-50",
                option.value === value && "bg-accent-subtle text-accent"
              )}
              onClick={() => selectOption(option)}
            >
              {option.label}
            </button>
          )) : <p className="m-0 px-3 py-2 text-sm text-text-secondary">{emptyMessage}</p>}
        </div>
      )}
    </div>
  );
}
