"use client";

import { Toast as ToastPrimitive } from "radix-ui";
import { cn } from "@mew/ui/utils/cn";
import { XIcon } from "@mew/ui/icons";
import { useToast } from "./useToast";
import { dismissToast } from "./toast-store";

const variantStyles = {
  default: "bg-surface border-border text-text-primary",
  success: "bg-success/10 border-success/20 text-text-primary",
  error: "bg-error/10 border-error/20 text-text-primary",
  warning: "bg-warning/10 border-warning/20 text-text-primary",
} as const;

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastPrimitive.Provider swipeDirection="right">
      {toasts.map((t) => (
        <ToastPrimitive.Root
          key={t.id}
          open={true}
          onOpenChange={(open) => {
            if (!open) dismissToast(t.id);
          }}
          duration={t.duration ?? 4000}
          className={cn(
            "group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-xl border p-4 shadow-lg transition-all",
            "data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]",
            "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none",
            "data-[state=open]:animate-in data-[state=open]:slide-in-from-top-full data-[state=closed]:animate-out data-[state=closed]:fade-out-80",
            variantStyles[t.variant ?? "default"]
          )}
        >
          <div className="flex-1 min-w-0">
            <ToastPrimitive.Title className="text-sm font-medium">
              {t.title}
            </ToastPrimitive.Title>
            {t.description && (
              <ToastPrimitive.Description className="mt-0.5 text-xs text-text-secondary">
                {t.description}
              </ToastPrimitive.Description>
            )}
          </div>
          <ToastPrimitive.Close
            className="shrink-0 rounded-lg bg-transparent p-0.5 text-text-secondary/70 transition-colors hover:bg-surface-elevated hover:text-text-primary"
            aria-label="Close"
          >
            <XIcon className="w-4 h-4" />
          </ToastPrimitive.Close>
        </ToastPrimitive.Root>
      ))}
      <ToastPrimitive.Viewport
        className={cn(
          "fixed top-4 right-4 z-[100] flex max-h-screen w-full max-w-[380px] flex-col gap-2 p-0",
          "sm:top-4 sm:right-4 sm:flex-col"
        )}
      />
    </ToastPrimitive.Provider>
  );
}
