import type { ComponentProps } from "react";
import { EmptyState } from "@mew/ui/components/EmptyState";
import { PawIcon } from "@mew/ui/icons";

type PropsT = Omit<ComponentProps<typeof EmptyState>, "icon"> & {
  icon?: ComponentProps<typeof EmptyState>["icon"];
};

export function MewEmptyState({ icon, ...props }: PropsT) {
  return <EmptyState icon={icon ?? <PawIcon className="h-8 w-8" />} {...props} />;
}
