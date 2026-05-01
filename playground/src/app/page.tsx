"use client";

import { useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  ConfirmDialog,
  ContextMenu,
  Dialog,
  ImageLightbox,
  InlineEditor,
  Input,
  Select,
  SettingsSection,
  Skeleton,
  Textarea,
  Toggle,
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
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

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
    </div>
  );
}
