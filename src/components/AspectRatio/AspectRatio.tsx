import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { cn } from "@mew/ui/utils/cn";
import type { ReactNode } from "react";

interface AspectRatioPropsT {
  ratio?: number;
  className?: string;
  children: ReactNode;
}

export function AspectRatio({ ratio, className, children }: AspectRatioPropsT) {
  return (
    <AspectRatioPrimitive.Root
      ratio={ratio}
      className={cn("overflow-hidden", className)}
    >
      {children}
    </AspectRatioPrimitive.Root>
  );
}
