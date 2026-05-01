# @mew/ui

Design system for the Mew family of applications.

## Primitives

- `Avatar` — User/assistant avatar with initials
- `Badge` — Status/variant badge
- `Button` — Primary, ghost, outline button
- `Toggle` — On/off switch

## Icons

13 SVG icons: `MenuIcon`, `SettingsIcon`, `SendIcon`, `ArrowLeftIcon`, `PlusIcon`, `XIcon`, `ChevronDownIcon`, `RefreshIcon`, `EditIcon`, `ImageIcon`, `StopIcon`, `DownloadIcon`, `AttachIcon`.

## Utils

- `cn()` — Simple class name joiner

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
