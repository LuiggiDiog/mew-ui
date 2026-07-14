# @luiggidiog/mew-ui

Minimal, elegant React design system for the Mew family of applications.

## Install

```sh
npm install @luiggidiog/mew-ui
```

## Usage

```css
/* In your app globals.css */
@import "@luiggidiog/mew-ui/styles.css";

/* Optional reset */
@import "@luiggidiog/mew-ui/reset.css";
```

```tsx
import { AppShell, Button, PageHeader, DataTable } from "@luiggidiog/mew-ui";
import { PawIcon, SearchIcon } from "@luiggidiog/mew-ui/icons";
import { cn } from "@luiggidiog/mew-ui/utils";
```

## Themes

Mew UI is token-driven and works without a provider. Set a theme on any parent element:

```html
<html data-mew-theme="system">
<html data-mew-theme="dark">
<html data-mew-theme="light">
```

The default remains dark to avoid regressions in existing projects.

## Component Families

- Foundations: `AppShell`, `PageHeader`, `SidebarNav`, `TopNav`, `Toolbar`
- Actions: `Button`, `IconButton`, `ButtonGroup`, `LinkButton`, `ConfirmAction`, `CopyButton`
- Forms: `Input`, `Textarea`, `NumberInput`, `PasswordInput`, `DateInput`, `FileUpload`, `Combobox`, `Command`, `Fieldset`, `FormField`, `SearchInput`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `Toggle`, `InlineEditor`, `FilterBar`
- Navigation: `Accordion`, `Tabs`, `Breadcrumb`, `Pagination`, `Stepper`
- Feedback: `Alert`, `Callout`, `Banner`, `StatusDot`, `Progress`, `Spinner`, `Skeleton`, `EmptyState`, `MewEmptyState`, `ErrorState`, `LoadingState`, `Toaster`
- Overlays: `Dialog`, `ConfirmDialog`, `Drawer`, `Sheet`, `Popover`, `Tooltip`, `DropdownMenu`, `ContextMenu`, `ImageLightbox`
- Data display: `Avatar`, `Badge`, `Card`, `Stat`, `DataTable`, `TableToolbar`, `DescriptionList`, `List`, `Timeline`, `KeyValue`, `CodeBlock`, `Kbd`, `Tag`
- Layout and patterns: `Container`, `Stack`, `DashboardGrid`, `SettingsLayout`, `LoginCard`, `SettingsSection`, `ScrollArea`, `Separator`, `AspectRatio`

## Cat Reference

Cat references stay subtle and optional. Use `PawIcon`, `EmptyState`, and `MewEmptyState` for small micro-brand moments only.

## Subpath Imports

Every component also has a subpath export for focused imports:

```tsx
import { Button } from "@luiggidiog/mew-ui/button";
import { AppShell } from "@luiggidiog/mew-ui/app-shell";
```

## Design Source

`DESIGN.md` is the visual and UX source of truth. Components should stay minimal, token-driven, accessible, and calm.
