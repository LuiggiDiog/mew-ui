import { cn } from "@mew/ui/utils/cn";

type CardPropsT = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardPropsT) {
  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-xl p-4 text-text-primary",
        className
      )}
      {...props}
    />
  );
}

type CardHeaderPropsT = React.HTMLAttributes<HTMLDivElement>;

export function CardHeader({ className, ...props }: CardHeaderPropsT) {
  return (
    <div
      className={cn("mb-3 flex items-center justify-between", className)}
      {...props}
    />
  );
}

type CardTitlePropsT = React.HTMLAttributes<HTMLHeadingElement>;

export function CardTitle({ className, ...props }: CardTitlePropsT) {
  return (
    <h3
      className={cn("text-sm font-medium text-text-secondary", className)}
      {...props}
    />
  );
}

type CardValuePropsT = React.HTMLAttributes<HTMLParagraphElement>;

export function CardValue({ className, ...props }: CardValuePropsT) {
  return (
    <p
      className={cn(
        "text-2xl font-semibold tabular-nums text-text-primary",
        className
      )}
      {...props}
    />
  );
}
