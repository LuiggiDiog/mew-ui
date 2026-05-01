"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@mew/ui/utils/cn";
import { ChevronDownIcon } from "@mew/ui/icons";

type SelectOptionT = { label: string; value: string; disabled?: boolean };
type SelectGroupT = { label?: string; options: SelectOptionT[] };

type PropsT = {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  groups: SelectGroupT[];
  label?: string;
  description?: string;
  error?: string;
  size?: "sm" | "md";
};

const sizeStyles = {
  sm: "rounded-lg px-2.5 py-2 text-xs",
  md: "rounded-xl px-3 py-2.5 text-sm",
} as const;

export function Select(props: PropsT) {
  const {
    value,
    onValueChange,
    placeholder = "Select…",
    disabled = false,
    groups,
    label,
    description,
    error,
    size = "md",
  } = props;

  const trigger = (
    <SelectPrimitive.Trigger
      disabled={disabled}
      className={cn(
        "w-full flex items-center justify-between gap-2 border bg-surface-elevated text-text-primary",
        "transition-colors focus:outline-none",
        error ? "border-error/60 focus:border-error" : "border-border focus:border-accent/60",
        "hover:border-accent/60 hover:bg-surface",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        sizeStyles[size]
      )}
    >
      <SelectPrimitive.Value placeholder={placeholder} className="truncate" />
      <SelectPrimitive.Icon>
        <ChevronDownIcon className="shrink-0 text-text-secondary transition-transform duration-200 data-[state=open]:rotate-180" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );

  const content = (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position="popper"
        className={cn(
          "z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-xl outline-none",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95"
        )}
      >
        <SelectPrimitive.Viewport className="p-1.5 max-h-64 overflow-y-auto">
          {groups.map((group) => (
            <SelectPrimitive.Group key={group.label ?? group.options[0]?.value}>
              {group.label && (
                <SelectPrimitive.Label className="px-2 py-1.5 text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                  {group.label}
                </SelectPrimitive.Label>
              )}
              {group.options.map((option) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                  className={cn(
                    "w-full rounded-lg px-3 py-2 text-left text-sm transition-colors outline-none cursor-default",
                    "truncate",
                    "data-[highlighted]:bg-surface data-[highlighted]:text-text-primary",
                    "data-[state=checked]:bg-accent/20 data-[state=checked]:text-accent",
                    option.disabled && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Group>
          ))}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );

  if (!label && !description && !error) {
    return (
      <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
        {trigger}
        {content}
      </SelectPrimitive.Root>
    );
  }

  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-xs font-medium text-text-secondary">
          {label}
        </label>
      )}

      <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
        {trigger}
        {content}
      </SelectPrimitive.Root>

      {description && (
        <p className="text-xs text-text-secondary">{description}</p>
      )}

      {error && (
        <p role="alert" className="text-xs text-error">
          {error}
        </p>
      )}
    </div>
  );
}
