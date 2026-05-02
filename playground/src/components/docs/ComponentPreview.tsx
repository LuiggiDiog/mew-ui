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
  Card,
  CardHeader,
  CardTitle,
  CardValue,
  Checkbox,
  ConfirmDialog,
  Container,
  Dialog,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  EmptyState,
  FormField,
  InlineEditor,
  Input,
  Kbd,
  KeyValue,
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationItem,
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
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Toaster,
  toast,
} from "@mew/ui";

type PropsT = {
  name: string;
};

export function ComponentPreview({ name }: PropsT) {
  const [checked, setChecked] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);
  const [toggleOn, setToggleOn] = useState(false);
  const [slider, setSlider] = useState<number[]>([40]);
  const [search, setSearch] = useState("demo");
  const [radio, setRadio] = useState("a");
  const [text, setText] = useState("Example");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  switch (name) {
    case "Accordion":
      return (
        <Accordion type="single" collapsible>
          <AccordionItem value="1">
            <AccordionTrigger>Section</AccordionTrigger>
            <AccordionContent>Accordion content.</AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    case "Alert":
      return (
        <Alert variant="info">
          <AlertTitle>Informational</AlertTitle>
          <AlertDescription>Subtle status message.</AlertDescription>
        </Alert>
      );
    case "AspectRatio":
      return (
        <AspectRatio ratio={16 / 9} className="rounded-lg border border-border bg-surface-elevated">
          <div className="flex h-full items-center justify-center text-xs text-text-secondary">16:9</div>
        </AspectRatio>
      );
    case "Avatar":
      return <Avatar name="Mew User" />;
    case "Badge":
      return <Badge variant="success">Success</Badge>;
    case "Breadcrumb":
      return (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Page</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      );
    case "Button":
      return <Button>Primary</Button>;
    case "Card":
      return (
        <Card>
          <CardHeader>
            <CardTitle>Requests</CardTitle>
            <CardValue>120</CardValue>
          </CardHeader>
        </Card>
      );
    case "Checkbox":
      return <Checkbox checked={checked} onCheckedChange={setChecked} />;
    case "Container":
      return (
        <Container size="sm" className="px-0">
          <div className="rounded-lg bg-surface-elevated p-3 text-xs text-text-secondary">Contained content</div>
        </Container>
      );
    case "DropdownMenu":
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild><Button size="sm" variant="outline">Menu</Button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    case "Dialog":
      return (
        <div className="flex items-center gap-2">
          <Button size="sm" onClick={() => setDialogOpen(true)}>Open dialog</Button>
          <Button size="sm" variant="outline" onClick={() => setConfirmOpen(true)}>Open confirm</Button>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen} title="Dialog title" description="Confirm your action">
            <p className="text-sm text-text-secondary">This is a dialog content example.</p>
          </Dialog>
          <ConfirmDialog open={confirmOpen} onOpenChange={setConfirmOpen} title="Delete item?" description="This action cannot be undone." onConfirm={() => setConfirmOpen(false)} />
        </div>
      );
    case "EmptyState":
      return <EmptyState title="No data" description="Try creating a new record." />;
    case "FormField":
      return (
        <FormField label="Name" htmlFor="name-field">
          <Input id="name-field" placeholder="John Doe" />
        </FormField>
      );
    case "Input":
      return <Input placeholder="Write here" />;
    case "InlineEditor":
      return <InlineEditor value={text} onChange={setText} onSave={() => {}} onCancel={() => {}} />;
    case "Kbd":
      return <Kbd>⌘K</Kbd>;
    case "KeyValue":
      return <KeyValue items={[{ label: "Provider", value: "Ollama" }]} />;
    case "Pagination":
      return (
        <Pagination>
          <PaginationContent>
            <PaginationItem><PaginationButton isActive>1</PaginationButton></PaginationItem>
            <PaginationItem><PaginationButton>2</PaginationButton></PaginationItem>
          </PaginationContent>
        </Pagination>
      );
    case "Popover":
      return (
        <Popover>
          <PopoverTrigger asChild><Button size="sm" variant="outline">Popover</Button></PopoverTrigger>
          <PopoverContent>
            <p className="text-sm">Popover content.</p>
            <div className="mt-2 flex justify-end"><PopoverClose asChild><Button size="sm">Close</Button></PopoverClose></div>
          </PopoverContent>
        </Popover>
      );
    case "Progress":
      return <Progress value={64} />;
    case "RadioGroup":
      return (
        <RadioGroup value={radio} onValueChange={setRadio}>
          <RadioGroupItem value="a" />
          <RadioGroupItem value="b" />
        </RadioGroup>
      );
    case "ScrollArea":
      return (
        <ScrollArea className="h-20 rounded-md border border-border">
          <div className="space-y-1 p-2">{Array.from({ length: 6 }).map((_, i) => <p key={i} className="text-xs">Line {i + 1}</p>)}</div>
        </ScrollArea>
      );
    case "SearchInput":
      return <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} onClear={() => setSearch("")} />;
    case "Select":
      return (
        <Select
          value={selectValue}
          onValueChange={setSelectValue}
          placeholder="Choose"
          groups={[{ options: [{ label: "One", value: "one" }, { label: "Two", value: "two" }] }]}
        />
      );
    case "Separator":
      return <Separator />;
    case "SettingsSection":
      return (
        <SettingsSection title="Provider" description="Connection settings">
          <div className="px-4 py-3 text-sm text-text-secondary">Ollama</div>
        </SettingsSection>
      );
    case "Sheet":
      return (
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild><Button size="sm" variant="outline">Open Sheet</Button></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Settings</SheetTitle>
              <SheetDescription>Quick panel.</SheetDescription>
            </SheetHeader>
            <div className="mt-4"><SheetClose asChild><Button size="sm">Done</Button></SheetClose></div>
          </SheetContent>
        </Sheet>
      );
    case "Skeleton":
      return <Skeleton width="100%" height={12} variant="shimmer" />;
    case "Slider":
      return <Slider value={slider} onValueChange={setSlider} />;
    case "Spinner":
      return <Spinner />;
    case "Stack":
      return (
        <Stack gap="sm">
          <div className="rounded bg-surface-elevated p-2 text-xs">Row 1</div>
          <div className="rounded bg-surface-elevated p-2 text-xs">Row 2</div>
        </Stack>
      );
    case "Stat":
      return (
        <Stat>
          <StatLabel>Requests</StatLabel>
          <StatValue>120</StatValue>
          <StatDelta current={120} previous={100} />
        </Stat>
      );
    case "Switch":
      return <Switch checked={switchOn} onCheckedChange={setSwitchOn} />;
    case "Tabs":
      return (
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview">Preview content</TabsContent>
          <TabsContent value="code">Code content</TabsContent>
        </Tabs>
      );
    case "Tag":
      return <Tag variant="accent">Tag</Tag>;
    case "Textarea":
      return <Textarea placeholder="Write a message" />;
    case "Toggle":
      return <Toggle checked={toggleOn} onChange={setToggleOn} label="Demo toggle" />;
    case "Tooltip":
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild><Button size="sm" variant="outline">Hover</Button></TooltipTrigger>
            <TooltipContent>Tooltip content</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    case "Toaster":
    case "Toast":
      return (
        <div className="flex items-center gap-2">
          <Toaster />
          <Button
            size="sm"
            variant="outline"
            onClick={() => toast({ title: "Saved", description: "Changes saved.", variant: "success" })}
          >
            Show toast
          </Button>
        </div>
      );
    case "Utility primitives":
      return (
        <div className="space-y-3">
          <Separator />
          <div className="flex items-center gap-3">
            <Skeleton width={100} height={12} />
            <Spinner size="sm" />
            <Kbd>⌘K</Kbd>
            <Tag>Stable</Tag>
          </div>
        </div>
      );
    default:
      return <p className="text-xs text-text-secondary">Composed export. See usage snippet below.</p>;
  }
}
