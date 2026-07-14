import type { FieldsetHTMLAttributes, ReactNode } from "react";
import { cn } from "@mew/ui/utils/cn";

type PropsT = FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  legend?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  children: ReactNode;
};

export function Fieldset({ legend, description, error, children, className, ...props }: PropsT) {
  return (
    <fieldset className={cn("m-0 min-w-0 rounded-xl border border-border bg-surface p-4", className)} {...props}>
      {legend && <legend className="px-1 text-sm font-medium text-text-primary">{legend}</legend>}
      {description && <p className="m-0 mb-3 text-sm text-text-secondary">{description}</p>}
      <div className="space-y-3">{children}</div>
      {error && <p role="alert" className="m-0 mt-3 text-xs text-error">{error}</p>}
    </fieldset>
  );
}
