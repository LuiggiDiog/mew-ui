"use client";

import { Dialog as DialogPrimitive } from "radix-ui";
import type { ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";

type PropsT = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "fullscreen";
};

const sizeStyles = {
  sm: "left-1/2 top-1/2 w-[92vw] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl p-4",
  md: "left-1/2 top-1/2 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl p-4",
  lg: "left-1/2 top-1/2 w-[94vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-xl p-5",
  fullscreen: "inset-0 h-screen w-screen max-w-none rounded-none border-none bg-black/90 p-0",
} as const;

export function Dialog(props: PropsT) {
  const {
    open,
    onOpenChange,
    title,
    description,
    children,
    size = "md",
  } = props;

  const hasHeader = Boolean(title || description);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm",
            "transition-opacity duration-200",
            "data-[state=open]:opacity-100 data-[state=closed]:opacity-0"
          )}
        />

        <DialogPrimitive.Content
          className={cn(
            "fixed z-50 border border-border bg-surface-elevated shadow-lg outline-none",
            "transition-all duration-200",
            "data-[state=open]:opacity-100 data-[state=closed]:opacity-0",
            "data-[state=open]:scale-100 data-[state=closed]:scale-95",
            sizeStyles[size]
          )}
        >
          {hasHeader && (
            <header className="space-y-1">
              {title && (
                <DialogPrimitive.Title className="text-sm font-semibold text-text-primary">
                  {title}
                </DialogPrimitive.Title>
              )}

              {description && (
                <DialogPrimitive.Description className="text-xs text-text-secondary">
                  {description}
                </DialogPrimitive.Description>
              )}
            </header>
          )}

          <div className={cn(hasHeader && "mt-3")}>{children}</div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
