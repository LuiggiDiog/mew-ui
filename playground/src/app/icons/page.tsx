"use client";

import { useMemo, useState } from "react";
import * as Icons from "@luiggidiog/mew-ui/icons";
import { CodeBlock, SearchInput } from "@luiggidiog/mew-ui";
import { DocsSidebar } from "../../components/docs/DocsSidebar";
import { SHOWCASE_ICONS, type ShowcaseIconNameT } from "../../lib/showcase/icon-registry";

const sections = [
  { id: "search", label: "Search" },
  { id: "catalog", label: "Icon catalog" },
];

function getIconImportSnippet(name: string) {
  return `import { ${name} } from "@luiggidiog/mew-ui/icons";

<${name} className="w-4 h-4" />;`;
}

export default function IconsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return SHOWCASE_ICONS;
    return SHOWCASE_ICONS.filter((name) => name.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
      <DocsSidebar activeCategory="icons" sections={sections} />

      <div className="space-y-6">
        <header className="space-y-2">
          <h1 className="m-0 text-2xl font-semibold text-text-primary">Icon catalog</h1>
          <p className="m-0 max-w-3xl text-sm text-text-secondary">
            All icon exports from @luiggidiog/mew-ui/icons with ready-to-copy usage snippets.
          </p>
        </header>

        <section id="search" className="scroll-mt-24 rounded-xl border border-border bg-surface p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="m-0 text-base font-semibold text-text-primary">Search icons</h2>
              <p className="m-0 mt-1 text-sm text-text-secondary">Filter by export name and copy the exact import pattern.</p>
            </div>
            <p className="m-0 text-xs text-text-secondary" aria-live="polite">
              {filtered.length} of {SHOWCASE_ICONS.length} icons
            </p>
          </div>
          <div className="mt-4 max-w-md">
            <SearchInput
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onClear={() => setQuery("")}
              placeholder="Search icon by name"
            />
          </div>
        </section>

        <section id="catalog" className="scroll-mt-24 space-y-4">
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-border bg-surface p-6">
              <h2 className="m-0 text-base font-semibold text-text-primary">No icons found</h2>
              <p className="m-0 mt-1 text-sm text-text-secondary">Try a shorter name like “Arrow”, “Check”, or “Menu”.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((name) => {
                const Icon = Icons[name as ShowcaseIconNameT];

                return (
                  <article key={name} className="space-y-3 rounded-xl border border-border bg-surface p-4">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="m-0 text-sm font-medium text-text-primary">{name}</p>
                    </div>

                    <CodeBlock language="tsx" code={getIconImportSnippet(name)} />
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
