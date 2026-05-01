import {
  type ChangeEvent,
  type ForwardedRef,
  forwardRef,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  type TextareaHTMLAttributes,
} from "react";
import { cn } from "@mew/ui/utils/cn";

type PropsT = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "rows"> & {
  label?: string;
  description?: string;
  error?: string;
  minRows?: number;
  maxRows?: number;
  autoResize?: boolean;
};

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function buildDescribedBy(...values: Array<string | undefined>): string | undefined {
  const ids = values.filter(Boolean);

  if (ids.length === 0) {
    return undefined;
  }

  return ids.join(" ");
}

function resizeTextarea(
  textarea: HTMLTextAreaElement,
  minRows: number,
  maxRows: number
) {
  const computed = window.getComputedStyle(textarea);
  const lineHeight = Number.parseFloat(computed.lineHeight) || 20;
  const minHeight = minRows * lineHeight;
  const maxHeight = maxRows * lineHeight;

  textarea.style.height = "auto";

  const nextHeight = Math.min(Math.max(textarea.scrollHeight, minHeight), maxHeight);
  textarea.style.height = `${nextHeight}px`;
  textarea.style.overflowY = textarea.scrollHeight > maxHeight ? "auto" : "hidden";
}

function TextareaInner(props: PropsT, ref: ForwardedRef<HTMLTextAreaElement>) {
  const {
    label,
    description,
    error,
    minRows = 1,
    maxRows = 8,
    autoResize = true,
    className,
    id,
    value,
    defaultValue,
    onChange,
    "aria-describedby": ariaDescribedBy,
    ...restProps
  } = props;

  const internalRef = useRef<HTMLTextAreaElement>(null);
  const textareaRef = (ref ?? internalRef) as React.RefObject<HTMLTextAreaElement>;

  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const descriptionId = description ? `${textareaId}-description` : undefined;
  const errorId = error ? `${textareaId}-error` : undefined;
  const describedBy = buildDescribedBy(ariaDescribedBy, descriptionId, errorId);

  useIsomorphicLayoutEffect(() => {
    if (!autoResize || !textareaRef.current) {
      return;
    }

    resizeTextarea(textareaRef.current, minRows, maxRows);
  }, [value, defaultValue, autoResize, minRows, maxRows]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(event);

    if (autoResize) {
      resizeTextarea(event.currentTarget, minRows, maxRows);
    }
  };

  const textarea = (
    <textarea
      ref={textareaRef}
      id={textareaId}
      rows={minRows}
      value={value}
      defaultValue={defaultValue}
      onChange={handleChange}
      aria-invalid={error ? "true" : undefined}
      aria-describedby={describedBy}
      className={cn(
        "w-full border bg-surface-elevated text-sm leading-relaxed text-text-primary placeholder:text-text-secondary",
        "transition-colors focus:outline-none",
        error ? "border-error/60 focus:border-error" : "border-border focus:border-accent/60",
        autoResize ? "resize-none" : "resize-y",
        "rounded-xl px-3 py-2.5",
        "disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      {...restProps}
    />
  );

  if (!label && !description && !error) {
    return textarea;
  }

  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={textareaId} className="block text-xs font-medium text-text-secondary">
          {label}
        </label>
      )}

      {textarea}

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

export const Textarea = forwardRef(TextareaInner);
