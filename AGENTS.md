# AGENTS.md

## Purpose

This file defines the default instructions for AI coding agents working on `@mew/ui`.
Apply these rules before making changes.
If a direct user request conflicts with this file, follow the user request.

## Communication

- Always respond to the user in Spanish.
- Keep all code, filenames, identifiers, comments, and technical content in English.
- Be concise, clear, and practical.

## Source of Truth

- Treat `DESIGN.md` as the visual and UX source of truth for this package.
- Preserve Mew principles in all UI decisions: minimal, elegant, simple, and focused.
- Keep any cat reference subtle, optional, and always secondary to usability.

## Execution Rules

- Default to a TDD workflow when implementing changes.
- Treat tests as part of the implementation, not as an optional final step.
- Do not run full build commands. The user will run builds for final verification.
- Prefer the smallest relevant verification for the requested change.
- Make the smallest safe change and avoid speculative refactors.

## Design Guardrails

- Prefer token-driven styles over hardcoded visual values.
- Keep visual hierarchy calm: spacing, contrast, and borders before heavy effects.
- Avoid decorative gradients, saturated multi-accent palettes, and flashy motion.
- Maintain high readability and accessible contrast in all states.
- Keep interactions immediate and predictable.

## Architecture

- One component per folder with related tests alongside.
- Use `index.ts` per folder as the public entry point.
- Use `type PropsT` naming convention for component props.
- Keep variants as `const` objects (not inline when avoidable).
- Import `cn` from `@mew/ui/utils/cn` internally.
- Keep internal files private and expose only intended APIs.

## React

- Prefer typed props when a component receives props.
- Start with clear components and split only when complexity justifies it.
- Keep component APIs explicit and minimal.

## Project Context

`@mew/ui` is the shared design system package for the Mew family of applications.
It exists to provide a consistent, elegant, low-friction UI foundation across projects.
