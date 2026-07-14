"use client";

import { useState, type ButtonHTMLAttributes } from "react";
import { CopyIcon, CheckIcon } from "@mew/ui/icons";
import { cn } from "@mew/ui/utils/cn";

type PropsT = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onCopy"> & {
  text: string;
  copiedLabel?: string;
  copyLabel?: string;
  onCopied?: () => void;
};

export function CopyButton({ text, copiedLabel = "Copied", copyLabel = "Copy", onCopied, className, ...props }: PropsT) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard?.writeText(text);
    setCopied(true);
    onCopied?.();
    window.setTimeout(() => setCopied(false), 1200);
  }

  return (
    <button
      type="button"
      className={cn("inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-text-secondary transition-colors hover:bg-surface-elevated hover:text-text-primary", className)}
      onClick={() => void handleCopy()}
      {...props}
    >
      {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}
