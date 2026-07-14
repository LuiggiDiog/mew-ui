"use client";

import dynamic from "next/dynamic";
import { SHOWCASE_COMPONENTS } from "../../lib/showcase/component-registry";

const categoryPreviews = {
  actions: dynamic(() => import("./previews/ActionsPreview")),
  forms: dynamic(() => import("./previews/FormsPreview")),
  navigation: dynamic(() => import("./previews/NavigationPreview")),
  feedback: dynamic(() => import("./previews/FeedbackPreview")),
  overlays: dynamic(() => import("./previews/OverlaysPreview")),
  layout: dynamic(() => import("./previews/LayoutPreview")),
  "data-display": dynamic(() => import("./previews/DataDisplayPreview")),
};

type PropsT = {
  name: string;
};

export function ComponentPreview({ name }: PropsT) {
  const component = SHOWCASE_COMPONENTS.find((c) => c.name === name);
  if (!component) {
    return <p className="m-0 text-xs text-text-secondary">Composed export. See usage snippet below.</p>;
  }

  const Preview = categoryPreviews[component.category as keyof typeof categoryPreviews];
  if (!Preview) {
    return <p className="m-0 text-xs text-text-secondary">Composed export. See usage snippet below.</p>;
  }

  return <Preview name={name} />;
}
