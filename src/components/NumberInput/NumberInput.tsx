import { useId, type InputHTMLAttributes } from "react";
import { cn } from "@mew/ui/utils/cn";

type PropsT = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  label?: string;
  description?: string;
  error?: string;
  size?: "sm" | "md";
};

const sizeStyles = {
  sm: "rounded-lg px-2.5 py-2 text-xs",
  md: "rounded-xl px-3 py-2.5 text-sm",
} as const;

function buildDescribedBy(...values: Array<string | undefined>): string | undefined {
  const ids = values.filter(Boolean);
  return ids.length ? ids.join(" ") : undefined;
}

export function NumberInput({ label, description, error, size = "md", className, id, "aria-describedby": ariaDescribedBy, ...props }: PropsT) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const descriptionId = description ? `
${inputId}-description`.trim() : undefined;
  const errorId = error ? `
${inputId}-error`.trim() : undefined;

  const input = (
    <input
      id={inputId}
      type="number"
      aria-invalid={error ? "true" : undefined}
      aria-describedby={buildDescribedBy(ariaDescribedBy, descriptionId, errorId)}
      className={cn(
        "w-full border bg-surface-elevated text-text-primary placeholder:text-text-secondary transition-colors focus:outline-none",
        error ? "border-error/60 focus:border-error" : "border-border focus:border-accent/60",
        "disabled:cursor-not-allowed disabled:opacity-60",
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );

  if (!label && !description && !error) return input;

  return (
    <div className="space-y-1.5">
      {label && <label htmlFor={inputId} className="block text-xs font-medium text-text-secondary">{label}</label>}
      {input}
      {description && <p id={descriptionId} className="m-0 text-xs text-text-secondary">{description}</p>}
      {error && <p id={errorId} role="alert" className="m-0 text-xs text-error">{error}</p>}
    </div>
  );
}
