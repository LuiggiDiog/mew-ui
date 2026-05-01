"use client";

import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import type { ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";

type ContextMenuItemT = {
  label: string;
  onSelect: () => void;
  icon?: ReactNode;
  variant?: "default" | "destructive";
  disabled?: boolean;
};

type PropsT = {
  items: Array<ContextMenuItemT | null>;
  children: ReactNode;
};

export function ContextMenu(props: PropsT) {
  const { items, children } = props;

  return (
    <ContextMenuPrimitive.Root>
      <ContextMenuPrimitive.Trigger asChild>
        {children}
      </ContextMenuPrimitive.Trigger>

      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content
          className={cn(
            "z-40 min-w-40 rounded-lg border border-border bg-surface-elevated p-1 shadow-lg outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
            "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95"
          )}
        >
          {items.map((item, index) => {
            if (item === null) {
              return (
                <ContextMenuPrimitive.Separator
                  key={`sep-${index}`}
                  className="my-1 h-px bg-border"
                />
              );
            }

            return (
              <ContextMenuPrimitive.Item
                key={item.label}
                onSelect={item.onSelect}
                disabled={item.disabled}
                className={cn(
                  "rounded-md px-2.5 py-2 text-sm outline-none cursor-default transition-colors",
                  item.variant === "destructive"
                    ? "text-error data-[highlighted]:bg-error/10"
                    : "text-text-primary data-[highlighted]:bg-surface",
                  item.disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </span>
              </ContextMenuPrimitive.Item>
            );
          })}
        </ContextMenuPrimitive.Content>
      </ContextMenuPrimitive.Portal>
    </ContextMenuPrimitive.Root>
  );
}
