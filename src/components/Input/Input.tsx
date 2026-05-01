import { useId, type InputHTMLAttributes } from "react";
import { cn } from "@mew/ui/utils/cn";

type PropsT = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
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

  if (ids.length === 0) {
    return undefined;
  }

  return ids.join(" ");
}

export function Input(props: PropsT) {
  const {
    label,
    description,
    error,
    size = "md",
    className,
    id,
    "aria-describedby": ariaDescribedBy,
    ...restProps
  } = props;

  const generatedId = useId();
  const inputId = id ?? generatedId;
  const descriptionId = description ? `${inputId}-description` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = buildDescribedBy(ariaDescribedBy, descriptionId, errorId);

  const input = (
    <input
      id={inputId}
      aria-invalid={error ? "true" : undefined}
      aria-describedby={describedBy}
      className={cn(
        "w-full border bg-surface-elevated text-text-primary placeholder:text-text-secondary",
        "transition-colors focus:outline-none",
        error ? "border-error/60 focus:border-error" : "border-border focus:border-accent/60",
        "disabled:cursor-not-allowed disabled:opacity-60",
        sizeStyles[size],
        className
      )}
      {...restProps}
    />
  );

  if (!label && !description && !error) {
    return input;
  }

  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={inputId} className="block text-xs font-medium text-text-secondary">
          {label}
        </label>
      )}

      {input}

      {description && (
        <p id={descriptionId} className="text-xs text-text-secondary">
          {description}
        </p>
      )}

      {error && (
        <p id={errorId} role="alert" className="text-xs text-error">
          {error}
        </p>
      )}
    </div>
  );
}
