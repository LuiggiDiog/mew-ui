import Link from "next/link";
import { CATEGORIES } from "../../lib/showcase/categories";

type PropsT = {
  active?: string;
};

function getItemClassName(isActive: boolean) {
  return [
    "rounded-lg border px-3 py-1.5 text-xs transition-colors",
    isActive
      ? "border-accent bg-accent-subtle text-accent"
      : "border-border bg-surface text-text-secondary hover:border-border/60 hover:bg-background hover:text-text-primary",
  ].join(" ");
}

export function CategoryNav({ active }: PropsT) {
  return (
    <nav className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
      <Link href="/" className={getItemClassName(active === "start")}>
        Start
      </Link>
      <Link href="/components" className={getItemClassName(active === "all")}>
        All
      </Link>
      <Link href="/build-an-app" className={getItemClassName(active === "build-an-app")}>
        Build an app
      </Link>
      {CATEGORIES.map((category) => (
        <Link
          key={category.key}
          href={`/components/${category.key}`}
          className={getItemClassName(active === category.key)}
        >
          {category.title}
        </Link>
      ))}
      <Link href="/icons" className={getItemClassName(active === "icons")}>
        Icons
      </Link>
    </nav>
  );
}
