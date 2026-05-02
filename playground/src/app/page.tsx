"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  AspectRatio,
  Avatar,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Checkbox,
  CodeBlock,
  ConfirmDialog,
  Container,
  ContextMenu,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Dialog,
  EmptyState,
  FormField,
  ImageLightbox,
  InlineEditor,
  Input,
  Kbd,
  KeyValue,
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ScrollArea,
  SearchInput,
  Select,
  Separator,
  SettingsSection,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Slider,
  Spinner,
  Stack,
  Stat,
  StatDelta,
  StatLabel,
  StatValue,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tag,
  Textarea,
  toast,
  Toaster,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@mew/ui";
import {
  MenuIcon,
  SettingsIcon,
  SendIcon,
  ArrowLeftIcon,
  PlusIcon,
  XIcon,
  ChevronDownIcon,
  RefreshIcon,
  EditIcon,
  ImageIcon,
  StopIcon,
  DownloadIcon,
  AttachIcon,
} from "@mew/ui/icons";

const icons = [
  { name: "MenuIcon", component: <MenuIcon /> },
  { name: "SettingsIcon", component: <SettingsIcon /> },
  { name: "SendIcon", component: <SendIcon /> },
  { name: "ArrowLeftIcon", component: <ArrowLeftIcon /> },
  { name: "PlusIcon", component: <PlusIcon /> },
  { name: "XIcon", component: <XIcon /> },
  { name: "ChevronDownIcon", component: <ChevronDownIcon /> },
  { name: "RefreshIcon", component: <RefreshIcon /> },
  { name: "EditIcon", component: <EditIcon /> },
  { name: "ImageIcon", component: <ImageIcon /> },
  { name: "StopIcon", component: <StopIcon /> },
  { name: "DownloadIcon", component: <DownloadIcon /> },
  { name: "AttachIcon", component: <AttachIcon /> },
];

export default function PlaygroundPage() {
  const [toggled, setToggled] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [inlineValue, setInlineValue] = useState("Edit this message…");
  const [selectValue, setSelectValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(true);
  const [radioValue, setRadioValue] = useState("balanced");
  const [sliderValue, setSliderValue] = useState<number[]>([55]);
  const [searchValue, setSearchValue] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background p-8 space-y-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-text-primary">@mew/ui Playground</h1>
        <p className="text-text-secondary">Design system showcase — dark-only, indigo accent, Geist</p>
      </header>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">Button</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Badges */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">Badge</h2>
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="local">Local</Badge>
          <Badge variant="external">External</Badge>
        </div>
      </section>

      {/* Avatars */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">Avatar</h2>
        <div className="flex items-center gap-4">
          <Avatar name="John Doe" role="user" size="sm" />
          <Avatar name="John Doe" role="user" />
          <Avatar name="AI Assistant" role="assistant" size="sm" />
          <Avatar name="AI Assistant" />
        </div>
      </section>

      {/* Toggle */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">Toggle</h2>
        <div className="flex items-center gap-4">
          <Toggle checked={toggled} onChange={setToggled} label="Toggle demo" />
          <span className="text-text-secondary text-sm">{toggled ? "On" : "Off"}</span>
          <Toggle checked={false} onChange={() => {}} disabled label="Disabled" />
        </div>
      </section>

      {/* Forms */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">Forms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-text-secondary">Input</h3>
            <Input placeholder="Plain input" />
            <Input label="Email" placeholder="you@example.com" description="Use your account email" />
            <Input label="Password" type="password" placeholder="********" error="Password is required" />
            <Input label="Compact" size="sm" placeholder="Small input" />
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-text-secondary">Textarea</h3>
            <Textarea placeholder="Plain textarea" />
            <Textarea
              label="Message"
              placeholder="Write your request…"
              description="Supports auto-resize"
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
            />
            <Textarea label="Fixed" autoResize={false} placeholder="Manual resize" />
          </div>
        </div>
        <div className="max-w-sm">
          <h3 className="text-sm font-medium text-text-secondary mb-2">Select</h3>
          <Select
            value={selectValue}
            onValueChange={setSelectValue}
            placeholder="Choose a model…"
            label="Default model"
            description="Model selected automatically on new chats"
            groups={[
              {
                label: "Ollama",
                options: [
                  { label: "llama3.1:8b", value: "llama3.1:8b" },
                  { label: "mistral:7b", value: "mistral:7b" },
                ],
              },
              {
                label: "LM Studio",
                options: [
                  { label: "qwen2.5:7b", value: "qwen2.5:7b" },
                  { label: "phi3:mini", value: "phi3:mini", disabled: true },
                ],
              },
            ]}
          />
        </div>
      </section>

      {/* New components */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-text-primary">New components</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border p-4 space-y-3">
            <h3 className="text-sm font-medium text-text-secondary">Accordion</h3>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Mew UI?</AccordionTrigger>
                <AccordionContent>A minimal, elegant and focused design system.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I customize it?</AccordionTrigger>
                <AccordionContent>Yes, it is token-driven and composable.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="rounded-xl border border-border p-4 space-y-3">
            <h3 className="text-sm font-medium text-text-secondary">Alert</h3>
            <Alert variant="info">
              <AlertTitle>Updates available</AlertTitle>
              <AlertDescription>New primitives were added to the UI package.</AlertDescription>
            </Alert>
          </div>

          <div className="rounded-xl border border-border p-4 space-y-3">
            <h3 className="text-sm font-medium text-text-secondary">AspectRatio</h3>
            <AspectRatio ratio={16 / 9} className="rounded-xl bg-surface-elevated border border-border">
              <div className="h-full w-full flex items-center justify-center text-sm text-text-secondary">16:9 preview</div>
            </AspectRatio>
          </div>

          <div className="rounded-xl border border-border p-4 space-y-3">
            <h3 className="text-sm font-medium text-text-secondary">Breadcrumb</h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Playground</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="rounded-xl border border-border p-4 space-y-3">
            <h3 className="text-sm font-medium text-text-secondary">Checkbox + Switch + RadioGroup</h3>
            <div className="flex flex-col gap-3 text-sm text-text-primary">
              <label className="inline-flex items-center gap-2">
                <Checkbox checked={checkboxChecked} onCheckedChange={setCheckboxChecked} />
                Receive notifications
              </label>
              <label className="inline-flex items-center gap-2">
                <Switch checked={switchChecked} onCheckedChange={setSwitchChecked} />
                Auto updates
              </label>
              <RadioGroup value={radioValue} onValueChange={setRadioValue} className="gap-2">
                <label className="inline-flex items-center gap-2">
                  <RadioGroupItem value="balanced" id="balanced" />
                  Balanced
                </label>
                <label className="inline-flex items-center gap-2">
                  <RadioGroupItem value="fast" id="fast" />
                  Fast
                </label>
              </RadioGroup>
            </div>
          </div>

          <div className="rounded-xl border border-border p-4 space-y-3">
            <h3 className="text-sm font-medium text-text-secondary">CodeBlock</h3>
            <CodeBlock code={'npm run dev:all\n# run ui + playground'} language="bash" />
          </div>

          <div className="rounded-xl border border-border p-4 space-y-3">
            <h3 className="text-sm font-medium text-text-secondary">Container + Stack + Separator</h3>
            <Container size="sm" className="px-0">
              <Stack gap="sm">
                <div className="rounded-lg bg-surface-elevated p-2 text-xs text-text-secondary">Row 1</div>
                <Separator />
                <div className="rounded-lg bg-surface-elevated p-2 text-xs text-text-secondary">Row 2</div>
              </Stack>
            </Container>
          </div>

          <div className="rounded-xl border border-border p-4 space-y-3">
            <h3 className="text-sm font-medium text-text-secondary">DropdownMenu + Popover + Tooltip</h3>
            <div className="flex flex-wrap items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="outline">Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Open</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Popover>
                <PopoverTrigger asChild>
                  <Button size="sm" variant="outline">Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <p className="text-sm text-text-primary">Simple popover content.</p>
                  <div className="mt-3 flex justify-end">
                    <PopoverClose asChild>
                      <Button size="sm" variant="ghost">Close</Button>
                    </PopoverClose>
                  </div>
                </PopoverContent>
              </Popover>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant="outline">Tooltip</Button>
                  </TooltipTrigger>
                  <TooltipContent>Helpful hint</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="rounded-xl border border-border p-4 space-y-3">
            <h3 className="text-sm font-medium text-text-secondary">EmptyState</h3>
            <EmptyState
              title="No conversations yet"
              description="Start a new chat to see your history here."
              action={<Button size="sm">New chat</Button>}
            />
          </div>

          <div className="rounded-xl border border-border p-4 space-y-3">
            <h3 className="text-sm font-medium text-text-secondary">FormField + SearchInput + Slider</h3>
            <div className="space-y-3">
              <FormField label="Search" htmlFor="search-demo" hint="Press ESC to clear quickly">
                <SearchInput
                  id="search-demo"
                  placeholder="Search components..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onClear={() => setSearchValue("")}
                />
              </FormField>
              <div className="space-y-2">
                <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
                <p className="text-xs text-text-secondary">Value: {sliderValue[0]}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border p-4 space-y-3">
            <h3 className="text-sm font-medium text-text-secondary">KeyValue + Kbd + Tag</h3>
            <KeyValue
              items={[
                { label: "Model", value: "llama3.1:8b" },
                { label: "Provider", value: "Ollama" },
              ]}
            />
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-secondary">Shortcut:</span>
              <Kbd>⌘K</Kbd>
            </div>
            <div className="flex items-center gap-2">
              <Tag>Default</Tag>
              <Tag variant="accent">Accent</Tag>
              <Tag variant="success">Stable</Tag>
            </div>
          </div>

          <div className="rounded-xl border border-border p-4 space-y-3">
            <h3 className="text-sm font-medium text-text-secondary">Pagination + Tabs</h3>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious />
                </PaginationItem>
                <PaginationItem>
                  <PaginationButton isActive>1</PaginationButton>
                </PaginationItem>
                <PaginationItem>
                  <PaginationButton>2</PaginationButton>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext />
                </PaginationItem>
              </PaginationContent>
            </Pagination>

            <Tabs defaultValue="preview">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="text-sm text-text-secondary">Preview tab content.</TabsContent>
              <TabsContent value="code" className="text-sm text-text-secondary">Code tab content.</TabsContent>
            </Tabs>
          </div>

          <div className="rounded-xl border border-border p-4 space-y-3">
            <h3 className="text-sm font-medium text-text-secondary">Progress + Spinner + Stat</h3>
            <Progress value={64} />
            <div className="flex items-center gap-3">
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
            </div>
            <Stat>
              <StatLabel>Messages today</StatLabel>
              <StatValue>124</StatValue>
              <StatDelta current={124} previous={92} />
            </Stat>
          </div>

          <div className="rounded-xl border border-border p-4 space-y-3">
            <h3 className="text-sm font-medium text-text-secondary">ScrollArea + Sheet + Toast</h3>
            <ScrollArea className="h-24 rounded-lg border border-border">
              <div className="space-y-2 p-3">
                {Array.from({ length: 8 }).map((_, idx) => (
                  <p key={idx} className="text-xs text-text-secondary">Scrollable line {idx + 1}</p>
                ))}
              </div>
            </ScrollArea>

            <div className="flex flex-wrap items-center gap-2">
              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                  <Button size="sm" variant="outline">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Sheet title</SheetTitle>
                    <SheetDescription>Quick settings panel.</SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 flex justify-end">
                    <SheetClose asChild>
                      <Button size="sm">Done</Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>

              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  toast({
                    title: "Saved",
                    description: "Your settings were updated.",
                    variant: "success",
                  })
                }
              >
                Show toast
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">Feedback</h2>
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-text-secondary">Skeleton — Pulse</h3>
          <div className="flex items-center gap-3">
            <Skeleton width={40} height={40} rounded="full" />
            <div className="space-y-2 flex-1">
              <Skeleton height={14} width="60%" />
              <Skeleton height={10} width="40%" />
            </div>
          </div>
          <h3 className="text-sm font-medium text-text-secondary mt-4">Skeleton — Shimmer</h3>
          <div className="flex items-center gap-3">
            <Skeleton width={40} height={40} rounded="full" variant="shimmer" />
            <div className="space-y-2 flex-1">
              <Skeleton height={14} width="60%" variant="shimmer" />
              <Skeleton height={10} width="40%" variant="shimmer" />
            </div>
          </div>
        </div>
      </section>

      {/* Overlays */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">Overlays</h2>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
          <Button variant="outline" onClick={() => setConfirmOpen(true)}>
            Open ConfirmDialog
          </Button>
          <Button variant="ghost" onClick={() => setLightboxOpen(true)}>
            Open ImageLightbox
          </Button>
        </div>

        {/* ContextMenu demo */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-text-secondary mb-2">ContextMenu — right-click below</h3>
          <ContextMenu
            items={[
              { label: "Edit", onSelect: () => {}, icon: <EditIcon className="w-3.5 h-3.5" /> },
              { label: "Duplicate", onSelect: () => {}, icon: <PlusIcon className="w-3.5 h-3.5" /> },
              null,
              { label: "Delete", onSelect: () => {}, variant: "destructive", icon: <XIcon className="w-3.5 h-3.5" /> },
            ]}
          >
            <div className="w-full max-w-sm p-4 rounded-xl border border-border bg-surface-elevated text-sm text-text-secondary cursor-context-menu">
              Right-click here to open context menu
            </div>
          </ContextMenu>
        </div>
      </section>

      {/* Compuestas */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">Compuestas</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-text-secondary mb-2">InlineEditor</h3>
            <InlineEditor
              value={inlineValue}
              onChange={setInlineValue}
              onSave={() => {}}
              onCancel={() => setInlineValue("Edit this message…")}
              autoFocusOnMount={false}
            />
          </div>
          <div className="max-w-lg">
            <h3 className="text-sm font-medium text-text-secondary mb-2">SettingsSection</h3>
            <SettingsSection title="Providers" description="Manage your AI provider connections">
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-sm text-text-primary">Ollama</span>
                <Badge variant="success">Connected</Badge>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-sm text-text-primary">LM Studio</span>
                <Badge variant="error">Disconnected</Badge>
              </div>
            </SettingsSection>
          </div>
        </div>
      </section>

      {/* Icons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">Icons</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
          {icons.map((icon) => (
            <div key={icon.name} className="flex flex-col items-center gap-2">
              <div className="p-3 bg-surface-elevated rounded-xl">{icon.component}</div>
              <span className="text-xs text-text-secondary">{icon.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen} title="Dialog Title" description="This is a dialog description">
        <p className="text-sm text-text-secondary">Dialog body content goes here.</p>
        <div className="mt-4 flex justify-end">
          <Button size="sm" onClick={() => setDialogOpen(false)}>Close</Button>
        </div>
      </Dialog>

      {/* ConfirmDialog */}
      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Delete conversation?"
        description="This will permanently remove this conversation and all its messages."
        variant="destructive"
        onConfirm={() => setConfirmOpen(false)}
      />

      {/* ImageLightbox */}
      <ImageLightbox
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
        src="https://picsum.photos/800/600"
        alt="Demo image"
        downloadFileName="demo.png"
      />

      <Toaster />
    </div>
  );
}
