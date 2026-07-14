export const CATEGORIES = [
  {
    key: "getting-started",
    title: "Getting started",
    description: "How to install, import, and apply design tokens and principles.",
  },
  {
    key: "foundations",
    title: "Foundations",
    description: "Application structure, page framing, and persistent navigation.",
  },
  {
    key: "actions",
    title: "Actions",
    description: "User-triggered actions and command surfaces.",
  },
  {
    key: "forms",
    title: "Forms",
    description: "Inputs, controls, validation, and field composition.",
  },
  {
    key: "navigation",
    title: "Navigation",
    description: "Wayfinding, steps, and multi-view navigation patterns.",
  },
  {
    key: "feedback",
    title: "Feedback",
    description: "Status, progress, empty, loading, and transient notifications.",
  },
  {
    key: "overlays",
    title: "Overlays",
    description: "Dialog-like or anchored layers over content.",
  },
  {
    key: "data-display",
    title: "Data display",
    description: "Structured content and information visualization blocks.",
  },
  {
    key: "layout",
    title: "Layout",
    description: "Structure, spacing, and composition primitives.",
  },
  {
    key: "patterns",
    title: "Patterns",
    description: "Composed product patterns for common app screens.",
  },
] as const;

export type CategoryKeyT = (typeof CATEGORIES)[number]["key"];

export const CATEGORY_KEYS = new Set<string>(CATEGORIES.map((c) => c.key));
