import type { ReactNode, KeyboardEvent } from "react";
import { cn } from "@mew/ui/utils/cn";
import { PawIcon } from "@mew/ui/icons";

export type ColumnT<T> = {
  key: string;
  header: string;
  className?: string;
  cell: (row: T) => ReactNode;
};

type PropsT<T> = {
  columns: ColumnT<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
  emptyState?: ReactNode;
  className?: string;
};

export function DataTable<T>(props: PropsT<T>) {
  const {
    columns,
    data,
    onRowClick,
    emptyMessage = "No results found.",
    emptyState,
    className,
  } = props;

  function handleKeyDown(e: KeyboardEvent<HTMLTableRowElement>, row: T) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onRowClick?.(row);
    }
  }

  return (
    <div className={cn("w-full overflow-auto", className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  "px-4 py-3 text-left font-medium text-text-secondary whitespace-nowrap",
                  col.className
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-8">
                {emptyState ?? (
                  <div className="flex flex-col items-center gap-2 text-text-secondary/60">
                    <PawIcon className="w-5 h-5" />
                    <span>{emptyMessage}</span>
                  </div>
                )}
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr
                key={i}
                onClick={() => onRowClick?.(row)}
                onKeyDown={onRowClick ? (e) => handleKeyDown(e, row) : undefined}
                tabIndex={onRowClick ? 0 : undefined}
                role={onRowClick ? "button" : undefined}
                className={cn(
                  "border-b border-border transition-colors",
                  onRowClick && "cursor-pointer hover:bg-surface-elevated"
                )}
              >
                {columns.map((col) => (
                  <td key={col.key} className={cn("px-4 py-3", col.className)}>
                    {col.cell(row)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
