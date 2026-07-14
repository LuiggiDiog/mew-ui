"use client";

import { useState, type ComponentProps, type ReactNode } from "react";
import { Button } from "@mew/ui/components/Button";
import { ConfirmDialog } from "@mew/ui/components/ConfirmDialog";

type PropsT = Omit<ComponentProps<typeof Button>, "onClick"> & {
  label: ReactNode;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmVariant?: "default" | "destructive";
  onConfirm: () => void;
};

export function ConfirmAction({ label, title, description, confirmLabel, cancelLabel, confirmVariant, onConfirm, ...buttonProps }: PropsT) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button {...buttonProps} onClick={() => setOpen(true)}>{label}</Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title={title}
        description={description}
        confirmLabel={confirmLabel}
        cancelLabel={cancelLabel}
        variant={confirmVariant}
        onConfirm={onConfirm}
      />
    </>
  );
}
