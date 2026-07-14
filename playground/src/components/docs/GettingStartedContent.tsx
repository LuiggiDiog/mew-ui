import { CodeBlock } from "@luiggidiog/mew-ui";
import { DocsSidebar } from "./DocsSidebar";

const installSnippet = `npm install @luiggidiog/mew-ui`;

const setupSnippet = `/* app/globals.css or src/main.css */
@import "@luiggidiog/mew-ui/styles.css";

/* Optional */
@import "@luiggidiog/mew-ui/reset.css";`;

const themeSnippet = `<html data-mew-theme="system">
<html data-mew-theme="dark">
<html data-mew-theme="light">`;

const usageSnippet = `import { AppShell, Button, Input, PageHeader } from "@luiggidiog/mew-ui";

export function Example() {
  return (
    <AppShell>
      <div className="space-y-4 p-4">
        <PageHeader title="Welcome" description="Create your first screen." />
        <Input label="Email" placeholder="you@example.com" />
        <Button>Continue</Button>
      </div>
    </AppShell>
  );
}`;

const sections = [
  { id: "principles", label: "Design principles" },
  { id: "install", label: "Install" },
  { id: "styles", label: "Styles" },
  { id: "themes", label: "Themes" },
  { id: "first-component", label: "First screen" },
];

export function GettingStartedContent() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
      <DocsSidebar activeCategory="getting-started" sections={sections} />

      <div className="space-y-6">
        <header className="space-y-2">
          <h1 className="m-0 text-2xl font-semibold text-text-primary">Getting started</h1>
          <p className="m-0 text-sm text-text-secondary">
            Minimal setup for Next, Vite, and any React app: install, import one stylesheet, choose a theme, and compose screens.
          </p>
        </header>

        <section id="principles" className="scroll-mt-24 space-y-3 rounded-xl border border-border bg-surface p-5">
          <h2 className="m-0 text-base font-semibold text-text-primary">Design principles</h2>
          <ul className="m-0 list-disc space-y-1 pl-4 text-sm text-text-secondary">
            <li>Keep one primary action per section.</li>
            <li>Prefer spacing, contrast, and borders before heavy effects.</li>
            <li>Use token-driven styles and avoid hardcoded visual values.</li>
            <li>Keep cat references subtle, optional, and secondary to usability.</li>
          </ul>
        </section>

        <section id="install" className="scroll-mt-24 space-y-3 rounded-xl border border-border bg-surface p-5">
          <h2 className="m-0 text-base font-semibold text-text-primary">Install</h2>
          <CodeBlock language="bash" code={installSnippet} />
        </section>

        <section id="styles" className="scroll-mt-24 space-y-3 rounded-xl border border-border bg-surface p-5">
          <h2 className="m-0 text-base font-semibold text-text-primary">Import styles</h2>
          <p className="m-0 text-sm text-text-secondary">Use the same import in Next globals or Vite entry CSS.</p>
          <CodeBlock language="css" code={setupSnippet} />
        </section>

        <section id="themes" className="scroll-mt-24 space-y-3 rounded-xl border border-border bg-surface p-5">
          <h2 className="m-0 text-base font-semibold text-text-primary">Themes</h2>
          <p className="m-0 text-sm text-text-secondary">No provider is required. Use CSS variables through a data attribute.</p>
          <CodeBlock language="html" code={themeSnippet} />
        </section>

        <section id="first-component" className="scroll-mt-24 space-y-3 rounded-xl border border-border bg-surface p-5">
          <h2 className="m-0 text-base font-semibold text-text-primary">First screen</h2>
          <CodeBlock language="tsx" code={usageSnippet} />
        </section>
      </div>
    </div>
  );
}
