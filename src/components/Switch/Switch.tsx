import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@mew/ui/utils/cn";

interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
}

export function Switch({ checked, onCheckedChange, disabled, id, className }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      id={id}
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={cn(
        "group relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border border-border bg-surface-elevated",
        "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        "data-[state=checked]:bg-accent data-[state=checked]:border-accent",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "block h-4 w-4 translate-x-0.5 rounded-full bg-white shadow-sm transition-transform",
          "group-data-[state=checked]:translate-x-[18px]"
        )}
      />
    </SwitchPrimitive.Root>
  );
}
