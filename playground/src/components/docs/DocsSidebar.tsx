import { CategoryNav } from "./CategoryNav";

type SectionT = {
  id: string;
  label: string;
};

type PropsT = {
  activeCategory?: string;
  sections?: SectionT[];
};

export function DocsSidebar({ activeCategory, sections = [] }: PropsT) {
  return (
    <aside className="space-y-4 lg:sticky lg:top-20">
      <div className="rounded-xl border border-border bg-surface p-3">
        <p className="m-0 mb-2 text-xs font-medium uppercase tracking-wide text-text-secondary">Sections</p>
        <CategoryNav active={activeCategory} />
      </div>

      {sections.length > 0 && (
        <div className="rounded-xl border border-border bg-surface p-3">
          <p className="m-0 mb-2 text-xs font-medium uppercase tracking-wide text-text-secondary">On this page</p>
          <nav className="flex flex-col gap-1.5">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-md px-2 py-1 text-xs text-text-secondary hover:bg-background hover:text-text-primary"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </aside>
  );
}
