import Link from "next/link";
import { DocsSidebar } from "../../components/docs/DocsSidebar";
import { CATEGORIES } from "../../lib/showcase/categories";
import { SHOWCASE_COMPONENTS } from "../../lib/showcase/component-registry";

const sections = CATEGORIES.map((category) => ({
  id: category.key,
  label: category.title,
}));

export default function ComponentsIndexPage() {
  const componentCount = SHOWCASE_COMPONENTS.length;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
      <DocsSidebar activeCategory="all" sections={sections} />

      <div className="space-y-6">
        <header className="space-y-2">
          <h1 className="m-0 text-2xl font-semibold text-text-primary">Documentation map</h1>
          <p className="m-0 max-w-3xl text-sm text-text-secondary">
            Navigate by intent: start with setup, then explore component families with live previews, usage patterns, and composition exports.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-3 rounded-xl border border-border bg-surface p-4 sm:grid-cols-3">
          <div>
            <p className="m-0 text-xs uppercase tracking-wide text-text-secondary">Families</p>
            <p className="m-0 mt-1 text-lg font-semibold text-text-primary">{CATEGORIES.length}</p>
          </div>
          <div>
            <p className="m-0 text-xs uppercase tracking-wide text-text-secondary">Components</p>
            <p className="m-0 mt-1 text-lg font-semibold text-text-primary">{componentCount}</p>
          </div>
          <div>
            <p className="m-0 text-xs uppercase tracking-wide text-text-secondary">Recommended start</p>
            <Link href="/components/getting-started" className="mt-1 inline-flex text-sm font-medium text-accent hover:text-text-primary">
              Read setup guide
            </Link>
          </div>
        </section>

        <section className="space-y-3">
          <div>
            <h2 className="m-0 text-base font-semibold text-text-primary">Component families</h2>
            <p className="m-0 mt-1 text-sm text-text-secondary">Pick a family to inspect previews, usage snippets, variations, and composition exports.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((category) => {
              const count = SHOWCASE_COMPONENTS.filter((item) => item.category === category.key).length;
              const isGuide = category.key === "getting-started";

              return (
                <Link
                  id={category.key}
                  key={category.key}
                  href={`/components/${category.key}`}
                  className="group scroll-mt-24 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/60 hover:bg-surface-elevated"
                >
                  <h3 className="m-0 text-base font-semibold text-text-primary group-hover:text-accent">{category.title}</h3>
                  <p className="m-0 mt-1 text-sm text-text-secondary">{category.description}</p>
                  <p className="m-0 mt-3 text-xs text-text-secondary">{isGuide ? "Guide" : `${count} components`}</p>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
