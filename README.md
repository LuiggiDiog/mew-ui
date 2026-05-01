# @mew/ui

Design system for the Mew family of applications.

## Design Principles

- Minimal by default
- Elegant in execution
- Simple interactions
- Focused UX

## Design Documentation

- `./DESIGN.md` is the visual and UX source of truth for `@mew/ui`.
- All components and style decisions should align with the token system and guardrails defined there.

## Cat Reference (Minimal)

Mew branding may include a subtle cat reference when appropriate.
Keep it optional, small, and secondary to usability, readability, and accessibility.

## Primitives

- `Avatar` — User/assistant avatar with initials
- `Badge` — Status/variant badge
- `Button` — Primary, ghost, outline button
- `Card` / `CardHeader` / `CardTitle` / `CardValue` — Surface container with optional header/title/value subparts
- `DataTable` — Generic typed table with column config, optional row click, and empty state
- `Toggle` — On/off switch

## Icons

14 SVG icons: `MenuIcon`, `SettingsIcon`, `SendIcon`, `ArrowLeftIcon`, `PlusIcon`, `XIcon`, `ChevronDownIcon`, `RefreshIcon`, `EditIcon`, `ImageIcon`, `StopIcon`, `DownloadIcon`, `AttachIcon`, `PawIcon`.

`PawIcon` is the only feline motif in the system; reserve it for empty states or micro-brand moments.

## Utils

- `cn()` — Simple class name joiner
- `formatDuration(seconds)` — `500ms`, `3.14s`, `1m 30s`
- `formatBytes(bytes)` — `512 B`, `1 KB`, `1 MB`
- `formatDate(date)` — Locale-formatted date + time
- `formatRelativeDate(date)` — `just now`, `5m ago`, `3h ago`, `2d ago`
- `truncate(str, maxLength)` — Truncates with `…`
- `percentageDiff(a, b)` — `+50.0%`, `-20.0%`, `N/A`

## Styles

- `tokens.css` — Design tokens (colors)
- `globals.css` — Resets, scrollbar, focus ring, animations

## Usage

```css
/* In your app's globals.css */
@import "@mew/ui/styles/tokens.css";
@import "@mew/ui/styles/globals.css";
@source "../node_modules/@mew/ui/dist/**/*.{js,mjs}";
```

```tsx
import { Button, Avatar, Badge, Toggle } from "@mew/ui";
import { SendIcon, MenuIcon } from "@mew/ui/icons";
import { cn } from "@mew/ui/utils";
```
