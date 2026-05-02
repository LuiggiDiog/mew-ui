import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@mew/ui/utils/cn";
import type { ComponentPropsWithoutRef } from "react";

interface TabsListPropsT extends ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  className?: string;
}

interface TabsTriggerPropsT extends ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  className?: string;
}

interface TabsContentPropsT extends ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
  className?: string;
}

export const Tabs = TabsPrimitive.Root;

export function TabsList({ className, ...props }: TabsListPropsT) {
  return (
    <TabsPrimitive.List
      className={cn(
        "inline-flex items-center gap-1 rounded-xl bg-surface-elevated p-1",
        className
      )}
      {...props}
    />
  );
}

export function TabsTrigger({ className, ...props }: TabsTriggerPropsT) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium text-text-secondary transition-colors",
        "hover:text-text-primary",
        "data-[state=active]:bg-surface data-[state=active]:text-text-primary data-[state=active]:shadow-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export function TabsContent({ className, ...props }: TabsContentPropsT) {
  return (
    <TabsPrimitive.Content
      className={cn(
        "mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className
      )}
      {...props}
    />
  );
}
