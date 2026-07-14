import { notFound } from "next/navigation";
import { Toaster } from "@luiggidiog/mew-ui";
import { ComponentShowcase } from "../../../components/docs/ComponentShowcase";
import { DocsSidebar } from "../../../components/docs/DocsSidebar";
import { GettingStartedContent } from "../../../components/docs/GettingStartedContent";
import { CATEGORIES, type CategoryKeyT } from "../../../lib/showcase/categories";
import { getComponentsByCategory } from "../../../lib/showcase/component-registry";

type PropsT = {
  params: Promise<{ category: string }>;
};

function toAnchorId(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default async function ComponentsCategoryPage({ params }: PropsT) {
  const { category } = await params;

  if (category === "getting-started") {
    return <GettingStartedContent />;
  }

  const categoryMeta = CATEGORIES.find((item) => item.key === category);
  if (!categoryMeta) {
    notFound();
  }

  const items = getComponentsByCategory(category as Exclude<CategoryKeyT, "getting-started">);

  if (items.length === 0) {
    notFound();
  }

  const sections = items.map((item) => ({
    id: toAnchorId(item.name),
    label: item.name,
  }));

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
      <DocsSidebar activeCategory={category} sections={sections} />

      <div className="space-y-6">
        <header className="space-y-2">
          <h1 className="m-0 text-2xl font-semibold text-text-primary">{categoryMeta.title}</h1>
          <p className="m-0 text-sm text-text-secondary">{categoryMeta.description}</p>
        </header>

        <section className="space-y-4">
          {items.map((item) => (
            <ComponentShowcase key={item.name} id={toAnchorId(item.name)} item={item} />
          ))}
        </section>
      </div>

      <Toaster />
    </div>
  );
}
