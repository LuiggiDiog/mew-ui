"use client";

import { useMemo, useState } from "react";
import * as Icons from "@luiggidiog/mew-ui/icons";
import { CodeBlock, SearchInput } from "@luiggidiog/mew-ui";
import { CategoryNav } from "../../components/docs/CategoryNav";
import { SHOWCASE_ICONS, type ShowcaseIconNameT } from "../../lib/showcase/icon-registry";

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
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-text-primary">Icon catalog</h1>
        <p className="text-sm text-text-secondary">All icon exports from @luiggidiog/mew-ui/icons with ready-to-copy usage snippets.</p>
      </header>

      <CategoryNav />

      <div className="max-w-md">
        <SearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClear={() => setQuery("")}
          placeholder="Search icon by name"
        />
      </div>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((name) => {
          const Icon = Icons[name as ShowcaseIconNameT];

          return (
            <article key={name} className="space-y-3 rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-border bg-background p-2">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium text-text-primary">{name}</p>
              </div>

              <CodeBlock language="tsx" code={getIconImportSnippet(name)} />
            </article>
          );
        })}
      </section>
    </div>
  );
}
