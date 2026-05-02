import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@mew/ui/utils/cn";

interface ProgressPropsT {
  value?: number;
  className?: string;
}

export function Progress({ value, className }: ProgressPropsT) {
  const isIndeterminate = value === undefined;

  return (
    <ProgressPrimitive.Root
      value={value}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-surface-elevated",
        className
      )}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 bg-accent transition-all",
          isIndeterminate && "animate-shimmer"
        )}
        style={
          isIndeterminate
            ? undefined
            : { transform: `translateX(-${100 - (value ?? 0)}%)` }
        }
      />
    </ProgressPrimitive.Root>
  );
}
