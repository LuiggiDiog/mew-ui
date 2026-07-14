import type { HTMLAttributes, ReactNode } from "react";
import { AlertCircleIcon } from "@mew/ui/icons";
import { cn } from "@mew/ui/utils/cn";

type PropsT = HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  icon?: ReactNode;
};

export function ErrorState({ title = "Something went wrong", description, action, icon, className, ...props }: PropsT) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-3 rounded-xl border border-error/40 bg-error/10 px-6 py-10 text-center", className)} {...props}>
      <div className="text-error">{icon ?? <AlertCircleIcon className="h-8 w-8" />}</div>
      <div className="space-y-1">
        <p className="m-0 text-sm font-medium text-text-primary">{title}</p>
        {description && <p className="m-0 text-sm text-text-secondary">{description}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
