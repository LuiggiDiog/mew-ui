# CLAUDE.md

## Communication

- Always respond to the user in Spanish.
- Keep all code, filenames, identifiers, comments, and technical content in English.

## Execution Rules

- Default to a TDD workflow when implementing changes.
- Treat tests as part of the implementation, not as an optional final step.
- Do not run full build commands. The user will run builds for final verification.
- Prefer the smallest relevant verification for the requested change.

## Architecture

- One component per folder with test alongside.
- Use `index.ts` per folder as public entry point.
- Use `type PropsT` naming convention for component props.
- Variants as `const` objects (not inline).
- Import `cn` from `@mew/ui/utils/cn` internally.
