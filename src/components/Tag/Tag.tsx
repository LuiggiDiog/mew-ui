import { cn } from "@mew/ui/utils/cn";
import { XIcon } from "@mew/ui/icons";

const variantStyles = {
  default: "bg-surface-elevated text-text-primary border-border",
  accent: "bg-accent-subtle text-accent border-accent/20",
  success: "bg-success/10 text-success border-success/20",
  warning: "bg-warning/10 text-warning border-warning/20",
  error: "bg-error/10 text-error border-error/20",
};

interface TagProps {
  variant?: keyof typeof variantStyles;
  onRemove?: () => void;
  className?: string;
  children: React.ReactNode;
}

export function Tag({ variant = "default", onRemove, className, children }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-0.5 rounded-full p-0.5 opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          aria-label="Remove"
        >
          <XIcon className="w-3 h-3" />
        </button>
      )}
    </span>
  );
}
