import type { HTMLAttributes, ReactNode } from "react";
import { Spinner } from "@mew/ui/components/Spinner";
import { cn } from "@mew/ui/utils/cn";

type PropsT = HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode;
  description?: ReactNode;
};

export function LoadingState({ title = "Loading", description, className, ...props }: PropsT) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-surface px-6 py-10 text-center", className)} {...props}>
      <Spinner />
      <div className="space-y-1">
        <p className="m-0 text-sm font-medium text-text-primary">{title}</p>
        {description && <p className="m-0 text-sm text-text-secondary">{description}</p>}
      </div>
    </div>
  );
}
