import type { HTMLAttributes } from "react";
import { cn } from "@mew/ui/utils/cn";
import { Label } from "../Label";

interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  htmlFor?: string;
  hint?: string;
  error?: string;
  required?: boolean;
}

export function FormField({
  label,
  htmlFor,
  hint,
  error,
  required,
  className,
  children,
  ...props
}: FormFieldProps) {
  const descId = hint || error ? `${htmlFor}-desc` : undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", className)} {...props}>
      {label && (
        <Label htmlFor={htmlFor} required={required}>
          {label}
        </Label>
      )}
      <div
        aria-describedby={descId}
        aria-invalid={error ? "true" : undefined}
      >
        {children}
      </div>
      {(hint || error) && (
        <p
          id={descId}
          className={cn("text-xs", error ? "text-error" : "text-text-secondary")}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  );
}
