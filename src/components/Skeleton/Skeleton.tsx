import { cn } from "@mew/ui/utils/cn";

type PropsT = {
  width?: number | string;
  height?: number | string;
  variant?: "pulse" | "shimmer";
  rounded?: "sm" | "md" | "lg" | "full";
  className?: string;
};

const roundedStyles = {
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  full: "rounded-full",
} as const;

function toCssSize(value: number | string | undefined): string | undefined {
  if (typeof value === "number") {
    return `${value}px`;
  }

  return value;
}

export function Skeleton(props: PropsT) {
  const {
    width,
    height,
    variant = "pulse",
    rounded = "md",
    className,
  } = props;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "bg-surface-elevated",
        variant === "pulse" ? "animate-pulse" : "animate-shimmer",
        roundedStyles[rounded],
        className
      )}
      style={{
        width: toCssSize(width),
        height: toCssSize(height),
      }}
    />
  );
}
