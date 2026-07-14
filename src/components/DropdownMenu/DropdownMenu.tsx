"use client";

import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@mew/ui/utils/cn";
import { ChevronRightIcon } from "@mew/ui/icons";

export const DropdownMenu = DropdownMenuPrimitive.Root;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const contentStyles =
  "z-50 min-w-[8rem] overflow-hidden rounded-xl border border-border bg-surface p-1 shadow-md animate-in fade-in-0 zoom-in-95";

const itemStyles =
  "relative flex cursor-pointer select-none items-center rounded-lg px-2 py-1.5 text-sm text-text-primary outline-none transition-colors hover:bg-surface-elevated focus:bg-surface-elevated data-[disabled]:pointer-events-none data-[disabled]:opacity-50";

type DropdownMenuContentPropsT = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Content
>;

export function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: DropdownMenuContentPropsT) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={cn(contentStyles, className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

type DropdownMenuItemPropsT = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Item
>;

export function DropdownMenuItem({ className, ...props }: DropdownMenuItemPropsT) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(itemStyles, className)}
      {...props}
    />
  );
}

type DropdownMenuCheckboxItemPropsT = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.CheckboxItem
>;

export function DropdownMenuCheckboxItem({
  className,
  children,
  ...props
}: DropdownMenuCheckboxItemPropsT) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={cn(itemStyles, "pl-8", className)}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="2 6 5 9 10 3" />
          </svg>
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

type DropdownMenuRadioItemPropsT = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.RadioItem
>;

export function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: DropdownMenuRadioItemPropsT) {
  return (
    <DropdownMenuPrimitive.RadioItem
      className={cn(itemStyles, "pl-8", className)}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="4" cy="4" r="4" />
          </svg>
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

type DropdownMenuLabelPropsT = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Label
>;

export function DropdownMenuLabel({ className, ...props }: DropdownMenuLabelPropsT) {
  return (
    <DropdownMenuPrimitive.Label
      className={cn("px-2 py-1.5 text-xs font-semibold text-text-secondary", className)}
      {...props}
    />
  );
}

type DropdownMenuSeparatorPropsT = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Separator
>;

export function DropdownMenuSeparator({
  className,
  ...props
}: DropdownMenuSeparatorPropsT) {
  return (
    <DropdownMenuPrimitive.Separator
      className={cn("my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

type DropdownMenuSubTriggerPropsT = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubTrigger
>;

export function DropdownMenuSubTrigger({
  className,
  children,
  ...props
}: DropdownMenuSubTriggerPropsT) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      className={cn(itemStyles, "flex items-center justify-between", className)}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

type DropdownMenuSubContentPropsT = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubContent
>;

export function DropdownMenuSubContent({
  className,
  ...props
}: DropdownMenuSubContentPropsT) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.SubContent
        className={cn(contentStyles, className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}
