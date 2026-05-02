import Link from "next/link";
import { CategoryNav } from "../../components/docs/CategoryNav";
import { CATEGORIES } from "../../lib/showcase/categories";
import { SHOWCASE_COMPONENTS } from "../../lib/showcase/component-registry";

export default function ComponentsIndexPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-text-primary">Documentation map</h1>
        <p className="text-sm text-text-secondary">Navigate by intent: start with setup, then explore component families with live previews, usage patterns, and composition exports.</p>
      </header>

      <CategoryNav />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((category) => {
          const count = SHOWCASE_COMPONENTS.filter((item) => item.category === category.key).length;
          const isGuide = category.key === "getting-started";

          return (
            <Link
              key={category.key}
              href={`/components/${category.key}`}
              className="rounded-xl border border-border bg-surface p-4 transition-colors hover:bg-surface-elevated"
            >
              <h2 className="text-base font-semibold text-text-primary">{category.title}</h2>
              <p className="mt-1 text-sm text-text-secondary">{category.description}</p>
              <p className="mt-3 text-xs text-text-secondary">{isGuide ? "Guide" : `${count} components`}</p>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
