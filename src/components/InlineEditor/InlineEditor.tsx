"use client";

import { useEffect, useRef } from "react";
import { cn } from "@mew/ui/utils/cn";
import { Textarea } from "@mew/ui/components/Textarea";
import { Button } from "@mew/ui/components/Button";
import { XIcon, SendIcon } from "@mew/ui/icons";

type PropsT = {
  value: string;
  onChange: (value: string) => void;
  onSave: () => void;
  onCancel: () => void;
  disabled?: boolean;
  saveDisabled?: boolean;
  placeholder?: string;
  saveLabel?: string;
  cancelLabel?: string;
  autoFocusOnMount?: boolean;
};

export function InlineEditor(props: PropsT) {
  const {
    value,
    onChange,
    onSave,
    onCancel,
    disabled = false,
    saveDisabled = false,
    placeholder,
    saveLabel = "Save",
    cancelLabel = "Cancel",
    autoFocusOnMount = true,
  } = props;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!autoFocusOnMount) return;
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.focus({ preventScroll: true });
    const len = textarea.value.length;
    textarea.setSelectionRange(len, len);
  }, [autoFocusOnMount]);

  return (
    <div
      className={cn(
        "w-[min(82vw,30rem)] min-w-0 rounded-xl border border-border bg-surface px-3 py-2.5",
        "transition-colors focus-within:border-accent/50"
      )}
    >
      <div className="flex items-end gap-2">
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSave();
              return;
            }
            if (e.key === "Escape") {
              e.preventDefault();
              onCancel();
            }
          }}
          placeholder={placeholder}
          minRows={3}
          maxRows={8}
          autoResize
          className="flex-1 resize-none bg-transparent text-sm leading-relaxed text-text-primary outline-none min-h-20 max-h-40"
          aria-label="Edit message input"
        />
        <div className="flex items-center gap-1.5 pb-0.5 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={onCancel}
            disabled={disabled}
            aria-label={cancelLabel}
            className="h-7 w-7 p-0 rounded-md border border-transparent hover:border-border/60"
          >
            <XIcon className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={onSave}
            disabled={saveDisabled || disabled}
            aria-label={saveLabel}
            className="h-7 w-7 p-0 rounded-md"
          >
            <SendIcon className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
