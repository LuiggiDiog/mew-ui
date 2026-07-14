import { useId, type InputHTMLAttributes } from "react";
import { cn } from "@mew/ui/utils/cn";

type PropsT = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
  description?: string;
  error?: string;
};

export function FileUpload({ label = "Choose file", description, error, className, id, ...props }: PropsT) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const descriptionId = description ? `${inputId}-description` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [descriptionId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={inputId}
        className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-surface px-4 py-6 text-center transition-colors hover:border-accent/60 hover:bg-surface-elevated"
      >
        <span className="text-sm font-medium text-text-primary">{label}</span>
        {description && <span id={descriptionId} className="text-xs text-text-secondary">{description}</span>}
      </label>
      <input id={inputId} type="file" aria-invalid={error ? "true" : undefined} aria-describedby={describedBy} className="sr-only" {...props} />
      {error && <p id={errorId} role="alert" className="m-0 text-xs text-error">{error}</p>}
    </div>
  );
}
