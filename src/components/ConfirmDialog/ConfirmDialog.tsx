"use client";

import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { cn } from "@mew/ui/utils/cn";
import { Button } from "@mew/ui/components/Button";

type PropsT = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "default" | "destructive";
  onConfirm: () => void;
};

export function ConfirmDialog(props: PropsT) {
  const {
    open,
    onOpenChange,
    title,
    description,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    variant = "default",
    onConfirm,
  } = props;

  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          className={cn(
            "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm",
            "transition-opacity duration-200",
            "data-[state=open]:opacity-100 data-[state=closed]:opacity-0"
          )}
        />
        <AlertDialog.Content
          className={cn(
            "fixed z-50 left-1/2 top-1/2 w-[92vw] max-w-sm -translate-x-1/2 -translate-y-1/2",
            "rounded-xl border border-border bg-surface-elevated p-4 shadow-lg outline-none",
            "transition-all duration-200",
            "data-[state=open]:opacity-100 data-[state=closed]:opacity-0",
            "data-[state=open]:scale-100 data-[state=closed]:scale-95"
          )}
        >
          <AlertDialog.Title className="text-sm font-semibold text-text-primary">
            {title}
          </AlertDialog.Title>
          {description && (
            <AlertDialog.Description className="mt-2 text-xs text-text-secondary">
              {description}
            </AlertDialog.Description>
          )}
          <div className="mt-4 flex justify-end gap-2">
            <AlertDialog.Cancel asChild>
              <Button variant="outline" size="sm">
                {cancelLabel}
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button
                variant={variant === "destructive" ? "primary" : "primary"}
                size="sm"
                className={
                  variant === "destructive"
                    ? "bg-error hover:bg-error/90"
                    : undefined
                }
                onClick={onConfirm}
              >
                {confirmLabel}
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
