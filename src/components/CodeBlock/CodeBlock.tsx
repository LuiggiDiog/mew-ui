"use client";

import { useState } from "react";
import type { HTMLAttributes } from "react";
import { cn } from "@mew/ui/utils/cn";
import { CopyIcon, CheckIcon } from "@mew/ui/icons";

interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  code: string;
  language?: string;
  showCopy?: boolean;
}

export function CodeBlock({ code, language, showCopy = true, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    void navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div
      className={cn("relative rounded-xl border border-border bg-surface overflow-hidden", className)}
      {...props}
    >
      {(language || showCopy) && (
        <div className="flex items-center justify-between border-b border-border px-4 py-2">
          {language && (
            <span className="text-xs font-mono text-text-secondary">{language}</span>
          )}
          {showCopy && (
            <button
              type="button"
              onClick={handleCopy}
              className="ml-auto inline-flex h-8 appearance-none items-center gap-1.5 rounded-lg bg-transparent px-2.5 text-xs text-text-secondary shadow-none transition-colors hover:bg-surface-elevated hover:text-text-primary"
              aria-label={copied ? "Copied" : "Copy code"}
            >
              {copied ? (
                <CheckIcon className="w-3.5 h-3.5 text-success" />
              ) : (
                <CopyIcon className="w-3.5 h-3.5" />
              )}
              {copied ? "Copied" : "Copy"}
            </button>
          )}
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm">
        <code className="font-mono text-text-primary">{code}</code>
      </pre>
    </div>
  );
}
