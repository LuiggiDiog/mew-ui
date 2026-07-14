// ── Product foundations ─────────────────────────────────────────────────────
export { AppShell } from "./components/AppShell";
export { PageHeader } from "./components/PageHeader";
export { SidebarNav } from "./components/SidebarNav";
export type { SidebarNavItemT } from "./components/SidebarNav";
export { TopNav } from "./components/TopNav";
export { Toolbar } from "./components/Toolbar";

// ── Actions ─────────────────────────────────────────────────────────────────
export { Button } from "./components/Button";
export { ButtonGroup } from "./components/ButtonGroup";
export { ConfirmAction } from "./components/ConfirmAction";
export { CopyButton } from "./components/CopyButton";
export { IconButton } from "./components/IconButton";
export { LinkButton } from "./components/LinkButton";

// ── Forms ───────────────────────────────────────────────────────────────────
export { Checkbox } from "./components/Checkbox";
export { Combobox } from "./components/Combobox";
export type { ComboboxOptionT } from "./components/Combobox";
export { Command } from "./components/Command";
export type { CommandItemT } from "./components/Command";
export { DateInput } from "./components/DateInput";
export { Fieldset } from "./components/Fieldset";
export { FileUpload } from "./components/FileUpload";
export { FilterBar } from "./components/FilterBar";
export { FormField } from "./components/FormField";
export { InlineEditor } from "./components/InlineEditor";
export { Input } from "./components/Input";
export { Label } from "./components/Label";
export { NumberInput } from "./components/NumberInput";
export { PasswordInput } from "./components/PasswordInput";
export { RadioGroup, RadioGroupItem } from "./components/RadioGroup";
export { SearchInput } from "./components/SearchInput";
export { Select } from "./components/Select";
export { Slider } from "./components/Slider";
export { Switch } from "./components/Switch";
export { Textarea } from "./components/Textarea";
export { Toggle } from "./components/Toggle";

// ── Navigation ───────────────────────────────────────────────────────────────
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./components/Accordion";
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/Breadcrumb";
export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "./components/Pagination";
export { Stepper } from "./components/Stepper";
export type { StepperStepT } from "./components/Stepper";
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/Tabs";

// ── Feedback ─────────────────────────────────────────────────────────────────
export { Alert, AlertTitle, AlertDescription } from "./components/Alert";
export { Banner } from "./components/Banner";
export { Callout } from "./components/Callout";
export { EmptyState } from "./components/EmptyState";
export { ErrorState } from "./components/ErrorState";
export { LoadingState } from "./components/LoadingState";
export { MewEmptyState } from "./components/MewEmptyState";
export { Progress } from "./components/Progress";
export { Skeleton } from "./components/Skeleton";
export { Spinner } from "./components/Spinner";
export { StatusDot } from "./components/StatusDot";
export { Toaster, useToast, toast, dismissToast } from "./components/Toast";
export type { ToastData, ToastVariant } from "./components/Toast";

// ── Overlays ─────────────────────────────────────────────────────────────────
export { ConfirmDialog } from "./components/ConfirmDialog";
export { ContextMenu } from "./components/ContextMenu";
export { Dialog } from "./components/Dialog";
export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "./components/Drawer";
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "./components/DropdownMenu";
export { ImageLightbox } from "./components/ImageLightbox";
export { Popover, PopoverTrigger, PopoverContent, PopoverClose } from "./components/Popover";
export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./components/Sheet";
export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "./components/Tooltip";

// ── Data display ─────────────────────────────────────────────────────────────
export { Avatar } from "./components/Avatar";
export { Badge } from "./components/Badge";
export { CodeBlock } from "./components/CodeBlock";
export { DataTable } from "./components/DataTable";
export type { ColumnT } from "./components/DataTable";
export { DescriptionList } from "./components/DescriptionList";
export type { DescriptionListItemT } from "./components/DescriptionList";
export { Kbd } from "./components/Kbd";
export { KeyValue } from "./components/KeyValue";
export { List, ListItem } from "./components/List";
export { Stat, StatLabel, StatValue, StatDelta } from "./components/Stat";
export { TableToolbar } from "./components/TableToolbar";
export { Tag } from "./components/Tag";
export { Timeline } from "./components/Timeline";
export type { TimelineItemT } from "./components/Timeline";

// ── Layout and patterns ──────────────────────────────────────────────────────
export { AspectRatio } from "./components/AspectRatio";
export { Card, CardHeader, CardTitle, CardValue } from "./components/Card";
export { Container } from "./components/Container";
export { DashboardGrid } from "./components/DashboardGrid";
export { LoginCard } from "./components/LoginCard";
export { ScrollArea } from "./components/ScrollArea";
export { Separator } from "./components/Separator";
export { SettingsLayout } from "./components/SettingsLayout";
export { SettingsSection } from "./components/SettingsSection";
export { Stack } from "./components/Stack";
