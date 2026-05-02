import Link from "next/link";
import { CATEGORIES } from "../../lib/showcase/categories";

type PropsT = {
  active?: string;
};

export function CategoryNav({ active }: PropsT) {
  return (
    <nav className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
      <Link
        href="/"
        className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-text-secondary hover:text-text-primary"
      >
        Start
      </Link>
      <Link
        href="/components"
        className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-text-secondary hover:text-text-primary"
      >
        All
      </Link>
      {CATEGORIES.map((category) => (
        <Link
          key={category.key}
          href={`/components/${category.key}`}
          className={[
            "rounded-lg border px-3 py-1.5 text-xs transition-colors",
            active === category.key
              ? "border-accent bg-accent-subtle text-accent"
              : "border-border bg-surface text-text-secondary hover:text-text-primary",
          ].join(" ")}
        >
          {category.title}
        </Link>
      ))}
      <Link
        href="/icons"
        className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-text-secondary hover:text-text-primary"
      >
        Icons
      </Link>
    </nav>
  );
}
