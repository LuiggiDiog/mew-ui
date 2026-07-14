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
      className={cn("w-full divide-y divide-border", className)}
      {...props}
    />
  );
}

export function AccordionItem({ className, ...props }: AccordionItemPropsT) {
  return <AccordionPrimitive.Item className={cn(className)} {...props} />;
}

export function AccordionTrigger({ className, children, ...props }: AccordionTriggerPropsT) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex w-full items-center justify-between py-3 text-sm font-medium text-text-primary",
          "hover:text-accent transition-colors",
          "[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="w-4 h-4 shrink-0 transition-transform duration-200" />
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
      <div className="pb-3 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  );
}
