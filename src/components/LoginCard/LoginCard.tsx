import type { HTMLAttributes, ReactNode } from "react";
import { Card } from "@mew/ui/components/Card";
import { PawIcon } from "@mew/ui/icons";
import { cn } from "@mew/ui/utils/cn";

type PropsT = HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
};

export function LoginCard({ title = "Welcome back", description, icon, footer, children, className, ...props }: PropsT) {
  return (
    <Card className={cn("mx-auto w-full max-w-sm p-5", className)} {...props}>
      <div className="mb-5 flex flex-col items-center gap-3 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-text-secondary">
          {icon ?? <PawIcon className="h-5 w-5" />}
        </div>
        <div>
          <h1 className="m-0 text-xl font-semibold text-text-primary">{title}</h1>
          {description && <p className="m-0 mt-1 text-sm text-text-secondary">{description}</p>}
        </div>
      </div>
      <div className="space-y-3">{children}</div>
      {footer && <div className="mt-5 text-center text-sm text-text-secondary">{footer}</div>}
    </Card>
  );
}
