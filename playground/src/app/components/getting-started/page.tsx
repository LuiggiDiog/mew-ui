import { CodeBlock } from "@mew/ui";
import { DocsSidebar } from "../../../components/docs/DocsSidebar";

const installSnippet = `npm install @mew/ui`;

const setupSnippet = `import "@mew/ui/styles/tokens.css";
import "@mew/ui/styles/globals.css";`;

const usageSnippet = `import { Button, Input } from "@mew/ui";

export function Example() {
  return (
    <div className="space-y-3">
      <Input label="Email" placeholder="you@example.com" />
      <Button>Continue</Button>
    </div>
  );
}`;

export default function GettingStartedPage() {
  const sections = [
    { id: "principles", label: "Design principles" },
    { id: "install", label: "Install" },
    { id: "styles", label: "Styles" },
    { id: "first-component", label: "First component" },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
      <DocsSidebar activeCategory="getting-started" sections={sections} />

      <div className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold text-text-primary">Getting started</h1>
          <p className="text-sm text-text-secondary">
            Minimal setup and core principles to keep a calm, readable, and consistent Mew UI implementation.
          </p>
        </header>

        <section id="principles" className="scroll-mt-24 space-y-3 rounded-xl border border-border bg-surface p-5">
          <h2 className="text-base font-semibold text-text-primary">Design principles</h2>
          <ul className="list-disc space-y-1 pl-4 text-sm text-text-secondary">
            <li>Keep one primary action per section.</li>
            <li>Prefer spacing, contrast, and borders before heavy effects.</li>
            <li>Use token-driven styles and avoid hardcoded visual values.</li>
            <li>Keep interactions immediate, clear, and predictable.</li>
          </ul>
        </section>

        <section id="install" className="scroll-mt-24 space-y-3 rounded-xl border border-border bg-surface p-5">
          <h2 className="text-base font-semibold text-text-primary">Install</h2>
          <CodeBlock language="bash" code={installSnippet} />
        </section>

        <section id="styles" className="scroll-mt-24 space-y-3 rounded-xl border border-border bg-surface p-5">
          <h2 className="text-base font-semibold text-text-primary">Import styles</h2>
          <CodeBlock language="tsx" code={setupSnippet} />
        </section>

        <section id="first-component" className="scroll-mt-24 space-y-3 rounded-xl border border-border bg-surface p-5">
          <h2 className="text-base font-semibold text-text-primary">First component</h2>
          <CodeBlock language="tsx" code={usageSnippet} />
        </section>
      </div>
    </div>
  );
}
