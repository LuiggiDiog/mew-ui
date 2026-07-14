"use client";

import { Accordion as AccordionPrimitive } from "radix-ui";
import { cn } from "@mew/ui/utils/cn";
import { ChevronDownIcon } from "@mew/ui/icons";
import type { ComponentPropsWithoutRef } from "react";

type AccordionPropsT = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
  className?: string;
};

interface AccordionItemPropsT extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  className?: string;
}

interface AccordionTriggerPropsT
  extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  className?: string;
}

interface AccordionContentPropsT
  extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  className?: string;
}

export function Accordion({ className, ...props }: AccordionPropsT) {
  return (
    <AccordionPrimitive.Root
      className={cn("w-full overflow-hidden rounded-xl border border-border bg-surface divide-y divide-border", className)}
      {...props}
    />
  );
}

export function AccordionItem({ className, ...props }: AccordionItemPropsT) {
  return <AccordionPrimitive.Item className={cn(className)} {...props} />;
}

export function AccordionTrigger({ className, children, ...props }: AccordionTriggerPropsT) {
  return (
    <AccordionPrimitive.Header className="m-0 flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex w-full appearance-none items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-text-primary",
          "hover:text-accent transition-colors",
          "[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({ className, children, ...props }: AccordionContentPropsT) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "overflow-hidden text-sm text-text-secondary",
        "data-[state=closed]:hidden",
        className
      )}
      {...props}
    >
      <div className="px-4 pb-4 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  );
}
