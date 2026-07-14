import type { HTMLAttributes, ReactNode } from "react";
import { CheckIcon } from "@mew/ui/icons";
import { cn } from "@mew/ui/utils/cn";

export type StepperStepT = {
  label: ReactNode;
  description?: ReactNode;
  status?: "complete" | "current" | "upcoming";
};

type PropsT = HTMLAttributes<HTMLOListElement> & {
  steps: StepperStepT[];
  currentStep?: number;
};

function resolveStatus(step: StepperStepT, index: number, currentStep?: number) {
  if (step.status) return step.status;
  if (currentStep === undefined) return "upcoming";
  if (index < currentStep) return "complete";
  if (index === currentStep) return "current";
  return "upcoming";
}

export function Stepper({ steps, currentStep, className, ...props }: PropsT) {
  return (
    <ol className={cn("m-0 flex list-none flex-col gap-3 p-0", className)} {...props}>
      {steps.map((step, index) => {
        const status = resolveStatus(step, index, currentStep);
        return (
          <li key={index} className="flex gap-3">
            <span
              aria-hidden="true"
              className={cn(
                "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium",
                status === "complete" && "border-accent bg-accent text-white",
                status === "current" && "border-accent bg-accent-subtle text-accent",
                status === "upcoming" && "border-border bg-surface text-text-secondary"
              )}
            >
              {status === "complete" ? <CheckIcon className="h-3.5 w-3.5" /> : index + 1}
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium text-text-primary">{step.label}</span>
              {step.description && <span className="block text-xs text-text-secondary">{step.description}</span>}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
