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
`PawIcon` and `EmptyState` are the designated cat-moment slots.

## Components

### Forms
- `Label` — Form label with optional `required` asterisk
- `FormField` — Wrapper composing label + control + hint + error
- `Input` — Text input
- `Textarea` — Multiline text input
- `SearchInput` — Input with search icon and clear button
- `Checkbox` — Accessible checkbox (Radix)
- `RadioGroup` / `RadioGroupItem` — Accessible radio group (Radix)
- `Switch` — Toggle switch (Radix, accessible)
- `Toggle` — On/off toggle (lightweight)
- `Slider` — Range slider (Radix)
- `Select` — Dropdown select (Radix)
- `InlineEditor` — Inline editable text field

### Overlays
- `Tooltip` / `TooltipProvider` / `TooltipTrigger` / `TooltipContent` — Hover tooltip (Radix)
- `Popover` / `PopoverTrigger` / `PopoverContent` / `PopoverClose` — Floating panel (Radix)
- `DropdownMenu` + 11 sub-parts — Accessible dropdown menu (Radix)
- `Sheet` / `SheetTrigger` / `SheetContent` / `SheetHeader` / `SheetTitle` / `SheetDescription` / `SheetClose` — Slide-over drawer (Radix Dialog)
- `Dialog` — Modal dialog (Radix)
- `ConfirmDialog` — Alert/confirm dialog (Radix AlertDialog)
- `ContextMenu` — Right-click context menu (Radix)
- `ImageLightbox` — Full-screen image viewer

### Disclosure / Navigation
- `Tabs` / `TabsList` / `TabsTrigger` / `TabsContent` — Tab group (Radix)
- `Accordion` / `AccordionItem` / `AccordionTrigger` / `AccordionContent` — Collapsible sections (Radix)
- `Breadcrumb` + 5 sub-parts — Navigation breadcrumb trail
- `Pagination` + 6 sub-parts — Page navigation controls

### Feedback
- `Alert` / `AlertTitle` / `AlertDescription` — Inline alert banner (5 variants)
- `Spinner` — Animated loading indicator (sm/md/lg)
- `Progress` — Progress bar with indeterminate support (Radix)
- `Skeleton` — Loading placeholder shimmer
- `EmptyState` — Empty state with icon + title + description + action (`PawIcon` by default)
- `Toaster` + `useToast` + `toast()` — Toast notification system (Radix)

### Layout
- `Card` / `CardHeader` / `CardTitle` / `CardValue` — Surface container
- `Stack` — Flex column/row with gap control
- `Container` — Centered max-width wrapper (sm/md/lg/xl/full)
- `Separator` — Horizontal or vertical rule (Radix)
- `ScrollArea` — Custom-styled scroll container (Radix)
- `AspectRatio` — Aspect-ratio wrapper (Radix)
- `SettingsSection` — Section layout for settings pages

### Data Display
- `Avatar` — User/assistant avatar with initials
- `Badge` — Status/variant badge
- `DataTable` — Generic typed table with column config and empty state
- `Tag` — Removable chip/tag (5 variants)
- `Kbd` — Keyboard shortcut display
- `Stat` / `StatLabel` / `StatValue` / `StatDelta` — Metric/statistic display
- `KeyValue` — Label–value pair list (horizontal or vertical)
- `CodeBlock` — Syntax-highlighted code with copy button

## Icons

27 SVG icons (stroke-based, 18×18 / 24 viewBox):

`MenuIcon`, `SettingsIcon`, `SendIcon`, `ArrowLeftIcon`, `PlusIcon`, `XIcon`,
`ChevronDownIcon`, `ChevronLeftIcon`, `ChevronRightIcon`, `ChevronUpIcon`,
`RefreshIcon`, `EditIcon`, `ImageIcon`, `StopIcon`, `DownloadIcon`, `AttachIcon`,
`CheckIcon`, `CheckCircleIcon`, `AlertCircleIcon`, `AlertTriangleIcon`, `InfoIcon`,
`DotIcon`, `SearchIcon`, `CopyIcon`, `MoreHorizontalIcon`, `LoaderIcon`,
`PawIcon` _(cat motif — reserve for empty states and micro-brand moments)_.

## Utils

- `cn()` — Simple class name joiner
- `formatDuration(seconds)` — `500ms`, `3.14s`, `1m 30s`
- `formatBytes(bytes)` — `512 B`, `1 KB`, `1 MB`
- `formatDate(date)` — Locale-formatted date + time
- `formatRelativeDate(date)` — `just now`, `5m ago`, `3h ago`, `2d ago`
- `truncate(str, maxLength)` — Truncates with `…`
- `percentageDiff(a, b)` — `+50.0%`, `-20.0%`, `N/A`

## Styles

- `tokens.css` — Design tokens (colors, font refs)
- `globals.css` — Resets, scrollbar, focus ring, animations (`shimmer`, `breathe`, `spin`)

## Usage

```css
/* In your app's globals.css */
@import "@mew/ui/styles/tokens.css";
@import "@mew/ui/styles/globals.css";
@source "../node_modules/@mew/ui/dist/**/*.{js,mjs}";
```

```tsx
import { Button, Avatar, Badge, Toggle } from "@mew/ui";
import { Toaster, toast } from "@mew/ui";
import { SendIcon, MenuIcon, PawIcon } from "@mew/ui/icons";
import { cn } from "@mew/ui/utils";
```
