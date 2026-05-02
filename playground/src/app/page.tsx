import Link from "next/link";
import { CATEGORIES } from "../lib/showcase/categories";

export default function HomePage() {
  const primaryCategories = CATEGORIES.filter((category) => category.key !== "getting-started");

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-text-primary">Mew UI Design System</h1>
        <p className="max-w-3xl text-sm text-text-secondary">
          A calm, practical, component-first documentation experience to implement and replicate UI patterns with less friction.
        </p>
      </header>

      <section className="rounded-xl border border-border bg-surface p-5">
        <h2 className="text-base font-semibold text-text-primary">Recommended path</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href="/components/getting-started" className="rounded-lg border border-border px-3 py-1.5 text-xs text-text-secondary hover:text-text-primary">
            1. Getting started
          </Link>
          <Link href="/components/forms" className="rounded-lg border border-border px-3 py-1.5 text-xs text-text-secondary hover:text-text-primary">
            2. Forms
          </Link>
          <Link href="/components/overlays" className="rounded-lg border border-border px-3 py-1.5 text-xs text-text-secondary hover:text-text-primary">
            3. Overlays
          </Link>
          <Link href="/icons" className="rounded-lg border border-border px-3 py-1.5 text-xs text-text-secondary hover:text-text-primary">
            4. Icons
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {primaryCategories.map((category) => (
          <Link
            key={category.key}
            href={`/components/${category.key}`}
            className="rounded-xl border border-border bg-surface p-4 transition-colors hover:bg-surface-elevated"
          >
            <h2 className="text-base font-semibold text-text-primary">{category.title}</h2>
            <p className="mt-1 text-sm text-text-secondary">{category.description}</p>
          </Link>
        ))}
      </section>

      <section className="rounded-xl border border-border bg-surface p-4">
        <h2 className="text-base font-semibold text-text-primary">Catalog shortcuts</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href="/components/getting-started" className="rounded-lg border border-border px-3 py-1.5 text-xs text-text-secondary hover:text-text-primary">
            Read getting started
          </Link>
          <Link href="/components" className="rounded-lg border border-border px-3 py-1.5 text-xs text-text-secondary hover:text-text-primary">
            Browse all categories
          </Link>
          <Link href="/icons" className="rounded-lg border border-border px-3 py-1.5 text-xs text-text-secondary hover:text-text-primary">
            View all icons
          </Link>
        </div>
      </section>
    </div>
  );
}
