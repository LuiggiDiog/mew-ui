import type { ChangeEvent, HTMLAttributes, ReactNode } from "react";
import { SearchInput } from "@mew/ui/components/SearchInput";
import { cn } from "@mew/ui/utils/cn";

type PropsT = HTMLAttributes<HTMLDivElement> & {
  query: string;
  onQueryChange: (value: string) => void;
  placeholder?: string;
  filters?: ReactNode;
  actions?: ReactNode;
  onClear?: () => void;
};

export function FilterBar({ query, onQueryChange, placeholder = "Search", filters, actions, onClear, className, ...props }: PropsT) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onQueryChange(event.target.value);
  }

  return (
    <div className={cn("flex flex-col gap-3 rounded-xl border border-border bg-surface p-3 md:flex-row md:items-center", className)} {...props}>
      <SearchInput value={query} placeholder={placeholder} onChange={handleChange} onClear={onClear ?? (() => onQueryChange(""))} className="min-w-0 flex-1" />
      {filters && <div className="flex flex-wrap items-center gap-2">{filters}</div>}
      {actions && <div className="flex flex-wrap items-center gap-2 md:ml-auto">{actions}</div>}
    </div>
  );
}
