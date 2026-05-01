---
version: alpha
name: Mew UI
description: Minimal and elegant cross-project design system for the Mew ecosystem.
colors:
  primary: "#111827"
  secondary: "#4B5563"
  tertiary: "#2563EB"
  neutral: "#F9FAFB"
  surface: "#FFFFFF"
  on-surface: "#111827"
  border: "#E5E7EB"
  success: "#16A34A"
  warning: "#D97706"
  error: "#DC2626"
  on-primary: "#F9FAFB"
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.01em
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
rounded:
  sm: 6px
  md: 10px
  lg: 14px
  full: 9999px
components:
  app-shell:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 16px
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "#1D4ED8"
  input-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: 12px
  card-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 16px
  list-item-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 12px
  text-muted:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 8px
  divider-default:
    backgroundColor: "{colors.border}"
    height: 1px
    width: 100px
  status-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 8px
  status-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 8px
  status-error:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 8px
---

## Overview

Mew UI defines the shared visual language for all Mew projects.
It must feel minimal, elegant, and calm: low visual noise, clear hierarchy,
and fast daily use across desktop and mobile contexts.

This system is privacy-aligned by design: interfaces should communicate trust,
clarity, and user control without decorative distractions.

## Design Principles

- **Minimal by default**: keep interfaces compact, focused, and free of ornament.
- **Elegant in execution**: use rhythm, contrast, and spacing before decoration.
- **Simple interactions**: make common actions obvious and low friction.
- **Consistent language**: shared tokens and component behaviors across products.
- **Focused UX**: content and task flow come first, chrome stays secondary.

## Colors

The palette is neutral-first with one strong action color.

- **Primary (`#111827`)** for high-confidence text and key interface elements.
- **Secondary (`#4B5563`)** for support text, metadata, and lower emphasis labels.
- **Tertiary (`#2563EB`)** as the single prominent action accent.
- **Neutral (`#F9FAFB`)** for calm page backgrounds.
- **Surface (`#FFFFFF`)** for content containers and controls.
- **Semantic colors** are only for feedback states, not for decoration.

## Typography

Typography is restrained and content-first.

- Use a single family (Inter) for consistency and performance.
- Keep weights limited (`400`, `500`, `600`).
- Prioritize readability for long-form usage and dense interfaces.
- Preserve clear heading-to-body hierarchy in all views.

## Layout

Layout should remain compact, readable, and mobile-aware.

- Follow the spacing token scale for margins and padding.
- Group related controls tightly, with clear visual separation.
- Keep primary content first and secondary actions nearby but quieter.
- Avoid oversized empty space that slows scanning or action.

## Elevation & Depth

Hierarchy should rely on contrast, spacing, and borders before shadows.

- Prefer flat surfaces and subtle separation.
- Use elevation only when interaction clarity requires it.
- Avoid heavy or stacked shadows.

## Shapes

Shape language is soft, modern, and consistent.

- Use small-to-medium radii for buttons, inputs, and cards.
- Keep radius values consistent across a screen.
- Avoid mixing very sharp and very rounded styles together.

## Components

Components must remain predictable and low friction.

- Primary actions use the tertiary accent and strong contrast text.
- Inputs prioritize legibility and immediate state feedback.
- Cards and list items provide lightweight structure, not visual weight.
- Motion and hover feedback should be subtle, fast, and never flashy.

## Cat Reference (Minimal)

Mew interfaces may include a subtle cat reference when appropriate, always as a
small supporting detail.

- Keep it optional, minimal, and non-blocking.
- Prefer micro-brand moments (empty states, tiny mascots, small illustrations).
- Use a single instance per view when present.
- Never reduce readability, accessibility, or action clarity.
- Never replace functional icons or critical status signals with cat motifs.

## Do's and Don'ts

- Do keep one dominant action per section.
- Do preserve high text contrast for long sessions.
- Do keep spacing and typography rhythm consistent.
- Do keep cat references subtle and secondary.
- Don't introduce decorative gradients or multi-accent palettes.
- Don't use more than three text weights in one view.
- Don't rely on heavy shadows for hierarchy.
- Don't turn the cat reference into a primary visual element.
