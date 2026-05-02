import type { CategoryKeyT } from "./categories";

type VariationT = {
  title: string;
  code: string;
};

export type ShowcaseComponentT = {
  name: string;
  category: Exclude<CategoryKeyT, "getting-started">;
  description: string;
  whenToUse: string;
  snippet: string;
  variations: VariationT[];
  compositionExports: string[];
  preview: boolean;
};

export const SHOWCASE_COMPONENTS: ShowcaseComponentT[] = [
  {
    name: "Button",
    category: "actions",
    description: "Primary and secondary action trigger.",
    whenToUse: "Use for explicit user actions like save, submit, retry, or open.",
    snippet: `import { Button } from "@mew/ui";

<Button>Save changes</Button>;`,
    variations: [
      { title: "Ghost", code: `<Button variant="ghost">Skip</Button>;` },
      { title: "Outline", code: `<Button variant="outline">Cancel</Button>;` },
    ],
    compositionExports: ["Button"],
    preview: true,
  },
  {
    name: "Badge",
    category: "feedback",
    description: "Compact status label for metadata and state.",
    whenToUse: "Use next to concise status information.",
    snippet: `import { Badge } from "@mew/ui";

<Badge variant="success">Connected</Badge>;`,
    variations: [
      { title: "Warning", code: `<Badge variant="warning">Pending</Badge>;` },
      { title: "Error", code: `<Badge variant="error">Failed</Badge>;` },
    ],
    compositionExports: ["Badge"],
    preview: true,
  },
  {
    name: "Input",
    category: "forms",
    description: "Single-line text input with label and helper states.",
    whenToUse: "Use for short typed values such as name, email, or URL.",
    snippet: `import { Input } from "@mew/ui";

<Input label="Email" placeholder="you@example.com" />;`,
    variations: [
      { title: "Error", code: `<Input label="Email" error="Email is required" />;` },
      { title: "Small", code: `<Input size="sm" placeholder="Compact" />;` },
    ],
    compositionExports: ["Input"],
    preview: true,
  },
  {
    name: "Textarea",
    category: "forms",
    description: "Multi-line text input with optional auto resize.",
    whenToUse: "Use for messages, notes, prompts, and rich text-like input.",
    snippet: `import { Textarea } from "@mew/ui";

<Textarea label="Message" placeholder="Write your message" />;`,
    variations: [
      { title: "Fixed height", code: `<Textarea autoResize={false} />;` }],
    compositionExports: ["Textarea"],
    preview: true,
  },
  {
    name: "Select",
    category: "forms",
    description: "Controlled dropdown selector with grouped options.",
    whenToUse: "Use when users choose one option from a fixed set.",
    snippet: `import { Select } from "@mew/ui";

<Select
  value={value}
  onValueChange={setValue}
  groups={[{ options: [{ label: "One", value: "one" }] }]}
/>;`,
    variations: [
      { title: "With label", code: `<Select value={value} onValueChange={setValue} label="Model" groups={groups} />;` },
    ],
    compositionExports: ["Select"],
    preview: true,
  },
  {
    name: "SearchInput",
    category: "forms",
    description: "Search-oriented input with clear affordance.",
    whenToUse: "Use for list filtering and command/search boxes.",
    snippet: `import { SearchInput } from "@mew/ui";

<SearchInput value={query} onChange={(e) => setQuery(e.target.value)} onClear={() => setQuery("")} />;`,
    variations: [{ title: "Placeholder", code: `<SearchInput placeholder="Search components" />;` }],
    compositionExports: ["SearchInput"],
    preview: true,
  },
  {
    name: "FormField",
    category: "forms",
    description: "Layout wrapper for label, control, hint, and error.",
    whenToUse: "Use when composing custom form controls with consistent assistive text.",
    snippet: `import { FormField, Input } from "@mew/ui";

<FormField label="Workspace" htmlFor="workspace" hint="Lowercase only">
  <Input id="workspace" />
</FormField>;`,
    variations: [{ title: "Error", code: `<FormField label="Name" error="Required">...</FormField>;` }],
    compositionExports: ["FormField", "Label"],
    preview: true,
  },
  {
    name: "Checkbox",
    category: "forms",
    description: "Binary selection control for multiple-choice forms.",
    whenToUse: "Use for independent yes/no options.",
    snippet: `import { Checkbox } from "@mew/ui";

<Checkbox checked={checked} onCheckedChange={setChecked} />;`,
    variations: [{ title: "Disabled", code: `<Checkbox disabled checked />;` }],
    compositionExports: ["Checkbox"],
    preview: true,
  },
  {
    name: "Switch",
    category: "forms",
    description: "Immediate on/off control for settings.",
    whenToUse: "Use when changes apply instantly.",
    snippet: `import { Switch } from "@mew/ui";

<Switch checked={enabled} onCheckedChange={setEnabled} />;`,
    variations: [{ title: "Disabled", code: `<Switch disabled checked />;` }],
    compositionExports: ["Switch", "Toggle"],
    preview: true,
  },
  {
    name: "RadioGroup",
    category: "forms",
    description: "Single-choice selector from a small set.",
    whenToUse: "Use when only one value can be selected.",
    snippet: `import { RadioGroup, RadioGroupItem } from "@mew/ui";

<RadioGroup value={value} onValueChange={setValue}>
  <RadioGroupItem value="a" />
  <RadioGroupItem value="b" />
</RadioGroup>;`,
    variations: [{ title: "Disabled item", code: `<RadioGroupItem value="c" disabled />;` }],
    compositionExports: ["RadioGroup", "RadioGroupItem"],
    preview: true,
  },
  {
    name: "Slider",
    category: "forms",
    description: "Range selector for numeric intervals.",
    whenToUse: "Use for volume, thresholds, and tunable numeric values.",
    snippet: `import { Slider } from "@mew/ui";

<Slider value={value} onValueChange={setValue} max={100} />;`,
    variations: [{ title: "With step", code: `<Slider step={5} />;` }],
    compositionExports: ["Slider"],
    preview: true,
  },
  {
    name: "Accordion",
    category: "navigation",
    description: "Progressive disclosure for grouped content.",
    whenToUse: "Use for FAQ, settings details, and collapsible sections.",
    snippet: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@mew/ui";

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section</AccordionTrigger>
    <AccordionContent>Content</AccordionContent>
  </AccordionItem>
</Accordion>;`,
    variations: [{ title: "Multiple", code: `<Accordion type="multiple">...</Accordion>;` }],
    compositionExports: ["Accordion", "AccordionItem", "AccordionTrigger", "AccordionContent"],
    preview: true,
  },
  {
    name: "Tabs",
    category: "navigation",
    description: "Switch between related content views.",
    whenToUse: "Use when users alternate between peer panels.",
    snippet: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@mew/ui";

<Tabs defaultValue="preview">
  <TabsList>
    <TabsTrigger value="preview">Preview</TabsTrigger>
    <TabsTrigger value="code">Code</TabsTrigger>
  </TabsList>
  <TabsContent value="preview">...</TabsContent>
  <TabsContent value="code">...</TabsContent>
</Tabs>;`,
    variations: [{ title: "Vertical spacing", code: `<TabsContent className="mt-2">...</TabsContent>;` }],
    compositionExports: ["Tabs", "TabsList", "TabsTrigger", "TabsContent"],
    preview: true,
  },
  {
    name: "Breadcrumb",
    category: "navigation",
    description: "Hierarchy path navigation.",
    whenToUse: "Use to show location in nested screens.",
    snippet: `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@mew/ui";

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Settings</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>;`,
    variations: [{ title: "Three levels", code: `<Breadcrumb>...</Breadcrumb>;` }],
    compositionExports: ["Breadcrumb", "BreadcrumbList", "BreadcrumbItem", "BreadcrumbLink", "BreadcrumbPage", "BreadcrumbSeparator"],
    preview: true,
  },
  {
    name: "Pagination",
    category: "navigation",
    description: "Page index navigation controls.",
    whenToUse: "Use for paged content lists and tables.",
    snippet: `import { Pagination, PaginationContent, PaginationItem, PaginationButton, PaginationPrevious, PaginationNext } from "@mew/ui";

<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious /></PaginationItem>
    <PaginationItem><PaginationButton isActive>1</PaginationButton></PaginationItem>
    <PaginationItem><PaginationNext /></PaginationItem>
  </PaginationContent>
</Pagination>;`,
    variations: [{ title: "With ellipsis", code: `<PaginationEllipsis />;` }],
    compositionExports: ["Pagination", "PaginationContent", "PaginationItem", "PaginationButton", "PaginationPrevious", "PaginationNext", "PaginationEllipsis"],
    preview: true,
  },
  {
    name: "Alert",
    category: "feedback",
    description: "Inline feedback message with semantic variants.",
    whenToUse: "Use for contextual warnings, success, error, and info messages.",
    snippet: `import { Alert, AlertTitle, AlertDescription } from "@mew/ui";

<Alert variant="warning">
  <AlertTitle>Unsaved changes</AlertTitle>
  <AlertDescription>Save before leaving this page.</AlertDescription>
</Alert>;`,
    variations: [{ title: "Success", code: `<Alert variant="success">...</Alert>;` }],
    compositionExports: ["Alert", "AlertTitle", "AlertDescription"],
    preview: true,
  },
  {
    name: "EmptyState",
    category: "feedback",
    description: "Fallback state when no content is available.",
    whenToUse: "Use for first-run, no-results, and disconnected states.",
    snippet: `import { EmptyState, Button } from "@mew/ui";

<EmptyState
  title="No conversations"
  description="Start a new chat to continue."
  action={<Button size="sm">New chat</Button>}
/>;`,
    variations: [{ title: "Custom icon", code: `<EmptyState icon={<YourIcon />} title="Nothing here" />;` }],
    compositionExports: ["EmptyState"],
    preview: true,
  },
  {
    name: "Progress",
    category: "feedback",
    description: "Linear progress indicator.",
    whenToUse: "Use to communicate progress over time or loading completion.",
    snippet: `import { Progress } from "@mew/ui";

<Progress value={64} />;`,
    variations: [{ title: "Indeterminate", code: `<Progress />;` }],
    compositionExports: ["Progress"],
    preview: true,
  },
  {
    name: "Toast",
    category: "feedback",
    description: "Transient notification pattern.",
    whenToUse: "Use for short-lived feedback after actions.",
    snippet: `import { Toaster, toast } from "@mew/ui";

<Toaster />

toast({
  title: "Saved",
  description: "Your settings were updated.",
  variant: "success",
});`,
    variations: [{ title: "Hook", code: `const { toasts, dismiss } = useToast();` }],
    compositionExports: ["Toaster", "useToast", "toast", "dismissToast"],
    preview: true,
  },
  {
    name: "Dialog",
    category: "overlays",
    description: "Modal dialog for focused tasks.",
    whenToUse: "Use for confirmations, forms, and focused decisions.",
    snippet: `import { Dialog } from "@mew/ui";

<Dialog open={open} onOpenChange={setOpen} title="Dialog title">
  <p>Body content</p>
</Dialog>;`,
    variations: [{ title: "Confirm dialog", code: `<ConfirmDialog open={open} onOpenChange={setOpen} title="Delete?" />;` }],
    compositionExports: ["Dialog", "ConfirmDialog"],
    preview: true,
  },
  {
    name: "Sheet",
    category: "overlays",
    description: "Side panel overlay for secondary workflows.",
    whenToUse: "Use for settings and contextual actions without full navigation.",
    snippet: `import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@mew/ui";

<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
      <SheetDescription>Quick options</SheetDescription>
    </SheetHeader>
    <SheetClose>Done</SheetClose>
  </SheetContent>
</Sheet>;`,
    variations: [{ title: "Left side", code: `<SheetContent side="left">...</SheetContent>;` }],
    compositionExports: ["Sheet", "SheetTrigger", "SheetContent", "SheetClose", "SheetHeader", "SheetTitle", "SheetDescription"],
    preview: true,
  },
  {
    name: "Popover",
    category: "overlays",
    description: "Anchored floating panel for lightweight contextual UI.",
    whenToUse: "Use for small contextual options tied to a trigger.",
    snippet: `import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from "@mew/ui";

<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>
    Content
    <PopoverClose>Close</PopoverClose>
  </PopoverContent>
</Popover>;`,
    variations: [{ title: "Side offset", code: `<PopoverContent sideOffset={8}>...</PopoverContent>;` }],
    compositionExports: ["Popover", "PopoverTrigger", "PopoverContent", "PopoverClose"],
    preview: true,
  },
  {
    name: "Tooltip",
    category: "overlays",
    description: "Small hover/focus helper text.",
    whenToUse: "Use for concise hints, never for critical content.",
    snippet: `import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@mew/ui";

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>Helpful hint</TooltipContent>
  </Tooltip>
</TooltipProvider>;`,
    variations: [{ title: "Custom side", code: `<TooltipContent side="right">Hint</TooltipContent>;` }],
    compositionExports: ["TooltipProvider", "Tooltip", "TooltipTrigger", "TooltipContent"],
    preview: true,
  },
  {
    name: "DropdownMenu",
    category: "overlays",
    description: "Action menu anchored to a trigger.",
    whenToUse: "Use for secondary actions and contextual command lists.",
    snippet: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@mew/ui";

<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>;`,
    variations: [{ title: "Radio group", code: `<DropdownMenuRadioGroup value={value}>...</DropdownMenuRadioGroup>;` }],
    compositionExports: [
      "DropdownMenu",
      "DropdownMenuTrigger",
      "DropdownMenuContent",
      "DropdownMenuItem",
      "DropdownMenuCheckboxItem",
      "DropdownMenuRadioGroup",
      "DropdownMenuRadioItem",
      "DropdownMenuLabel",
      "DropdownMenuSeparator",
      "DropdownMenuSub",
      "DropdownMenuSubTrigger",
      "DropdownMenuSubContent",
    ],
    preview: true,
  },
  {
    name: "ContextMenu",
    category: "overlays",
    description: "Right-click contextual menu.",
    whenToUse: "Use for secondary actions tied to an item surface.",
    snippet: `import { ContextMenu } from "@mew/ui";

<ContextMenu items={[{ label: "Edit", onSelect: () => {} }]}>
  <div>Right-click here</div>
</ContextMenu>;`,
    variations: [{ title: "Destructive item", code: `{ label: "Delete", variant: "destructive", onSelect: () => {} }` }],
    compositionExports: ["ContextMenu"],
    preview: true,
  },
  {
    name: "ImageLightbox",
    category: "overlays",
    description: "Image preview overlay with zoom-focused presentation.",
    whenToUse: "Use for media detail inspection.",
    snippet: `import { ImageLightbox } from "@mew/ui";

<ImageLightbox open={open} onOpenChange={setOpen} src="/image.png" alt="Preview" />;`,
    variations: [{ title: "Download filename", code: `<ImageLightbox downloadFileName="asset.png" ... />;` }],
    compositionExports: ["ImageLightbox"],
    preview: false,
  },
  {
    name: "Avatar",
    category: "data-display",
    description: "Identity avatar for user and assistant roles.",
    whenToUse: "Use in chat lists, headers, and identity contexts.",
    snippet: `import { Avatar } from "@mew/ui";

<Avatar name="John Doe" role="user" />;`,
    variations: [{ title: "Assistant", code: `<Avatar name="Mew" role="assistant" size="sm" />;` }],
    compositionExports: ["Avatar"],
    preview: true,
  },
  {
    name: "Card",
    category: "data-display",
    description: "Structured data container with optional header/value.",
    whenToUse: "Use for grouped metrics and summarized information.",
    snippet: `import { Card, CardHeader, CardTitle, CardValue } from "@mew/ui";

<Card>
  <CardHeader>
    <CardTitle>Total requests</CardTitle>
    <CardValue>132</CardValue>
  </CardHeader>
</Card>;`,
    variations: [{ title: "Custom body", code: `<Card><div className="p-4">Body</div></Card>;` }],
    compositionExports: ["Card", "CardHeader", "CardTitle", "CardValue"],
    preview: true,
  },
  {
    name: "Stat",
    category: "data-display",
    description: "Compact metric block with delta.",
    whenToUse: "Use in dashboards and analytics summaries.",
    snippet: `import { Stat, StatLabel, StatValue, StatDelta } from "@mew/ui";

<Stat>
  <StatLabel>Requests</StatLabel>
  <StatValue>130</StatValue>
  <StatDelta current={130} previous={100} />
</Stat>;`,
    variations: [{ title: "Negative delta", code: `<StatDelta current={80} previous={100} />;` }],
    compositionExports: ["Stat", "StatLabel", "StatValue", "StatDelta"],
    preview: true,
  },
  {
    name: "KeyValue",
    category: "data-display",
    description: "Definition-list style key/value display.",
    whenToUse: "Use for compact metadata panels.",
    snippet: `import { KeyValue } from "@mew/ui";

<KeyValue items={[{ label: "Provider", value: "Ollama" }]} />;`,
    variations: [{ title: "Horizontal", code: `<KeyValue direction="horizontal" items={items} />;` }],
    compositionExports: ["KeyValue"],
    preview: true,
  },
  {
    name: "CodeBlock",
    category: "data-display",
    description: "Monospaced code viewer with copy action.",
    whenToUse: "Use to present runnable snippets and examples.",
    snippet: `import { CodeBlock } from "@mew/ui";

<CodeBlock language="tsx" code={source} />;`,
    variations: [{ title: "No copy", code: `<CodeBlock showCopy={false} code={source} />;` }],
    compositionExports: ["CodeBlock"],
    preview: true,
  },
  {
    name: "InlineEditor",
    category: "data-display",
    description: "Inline edit surface with save/cancel behavior.",
    whenToUse: "Use for quick edits without leaving context.",
    snippet: `import { InlineEditor } from "@mew/ui";

<InlineEditor value={value} onChange={setValue} onSave={save} onCancel={cancel} />;`,
    variations: [{ title: "Auto focus", code: `<InlineEditor autoFocusOnMount />;` }],
    compositionExports: ["InlineEditor"],
    preview: true,
  },
  {
    name: "DataTable",
    category: "data-display",
    description: "Tabular data rendering component.",
    whenToUse: "Use for structured row/column data.",
    snippet: `import { DataTable, type ColumnT } from "@mew/ui";

const columns: ColumnT<{ id: string }>[] = [{ key: "id", header: "ID" }];

<DataTable columns={columns} data={[{ id: "1" }]} />;`,
    variations: [{ title: "Empty state", code: `<DataTable columns={columns} data={[]} emptyMessage="No results" />;` }],
    compositionExports: ["DataTable"],
    preview: false,
  },
  {
    name: "Container",
    category: "layout",
    description: "Centered max-width wrapper.",
    whenToUse: "Use to constrain content width consistently across pages.",
    snippet: `import { Container } from "@mew/ui";

<Container size="lg">...</Container>;`,
    variations: [{ title: "Full", code: `<Container size="full">...</Container>;` }],
    compositionExports: ["Container"],
    preview: true,
  },
  {
    name: "Stack",
    category: "layout",
    description: "Directional spacing layout helper.",
    whenToUse: "Use for vertical/horizontal rhythm with predictable gaps.",
    snippet: `import { Stack } from "@mew/ui";

<Stack gap="md">...</Stack>;`,
    variations: [{ title: "Row", code: `<Stack direction="row" align="center" gap="sm">...</Stack>;` }],
    compositionExports: ["Stack"],
    preview: true,
  },
  {
    name: "ScrollArea",
    category: "layout",
    description: "Custom scroll container.",
    whenToUse: "Use for bounded lists and panels with overflow.",
    snippet: `import { ScrollArea } from "@mew/ui";

<ScrollArea className="h-40">...</ScrollArea>;`,
    variations: [{ title: "Horizontal", code: `<ScrollArea className="w-full">...</ScrollArea>;` }],
    compositionExports: ["ScrollArea"],
    preview: true,
  },
  {
    name: "SettingsSection",
    category: "layout",
    description: "Structured section wrapper for settings pages.",
    whenToUse: "Use to group setting rows under a clear title/description.",
    snippet: `import { SettingsSection } from "@mew/ui";

<SettingsSection title="Providers" description="Manage connections">...</SettingsSection>;`,
    variations: [{ title: "Custom rows", code: `<SettingsSection title="General">...</SettingsSection>;` }],
    compositionExports: ["SettingsSection"],
    preview: true,
  },
  {
    name: "AspectRatio",
    category: "layout",
    description: "Keeps media and blocks in fixed ratio.",
    whenToUse: "Use for images/video placeholders requiring consistent ratio.",
    snippet: `import { AspectRatio } from "@mew/ui";

<AspectRatio ratio={16 / 9}>...</AspectRatio>;`,
    variations: [{ title: "Square", code: `<AspectRatio ratio={1}>...</AspectRatio>;` }],
    compositionExports: ["AspectRatio"],
    preview: true,
  },
  {
    name: "Utility primitives",
    category: "layout",
    description: "Small primitives used across composition and content rhythm.",
    whenToUse: "Use for visual polish and compact metadata display.",
    snippet: `import { Separator, Skeleton, Spinner, Kbd, Tag } from "@mew/ui";

<Separator />
<Skeleton width={120} height={12} />
<Spinner />
<Kbd>⌘K</Kbd>
<Tag>Stable</Tag>;`,
    variations: [{ title: "Skeleton shimmer", code: `<Skeleton variant="shimmer" width="100%" height={12} />;` }],
    compositionExports: ["Separator", "Skeleton", "Spinner", "Kbd", "Tag"],
    preview: true,
  },
];

export const SHOWCASE_COMPONENT_NAMES = SHOWCASE_COMPONENTS.map((component) => component.name);

export function getComponentsByCategory(category: Exclude<CategoryKeyT, "getting-started">) {
  return SHOWCASE_COMPONENTS.filter((component) => component.category === category);
}

export const COVERED_EXPORTS = SHOWCASE_COMPONENTS.flatMap((component) => component.compositionExports)
  .filter((name, index, list) => list.indexOf(name) === index)
  .sort((a, b) => a.localeCompare(b));
