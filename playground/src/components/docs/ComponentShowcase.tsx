import { ComponentPreview } from "./ComponentPreview";
import { VariationBlock } from "./VariationBlock";
import type { ShowcaseComponentT } from "../../lib/showcase/component-registry";

type PropsT = {
  item: ShowcaseComponentT;
  id?: string;
};

export function ComponentShowcase({ item, id }: PropsT) {
  return (
    <article id={id} className="scroll-mt-24 space-y-5 rounded-xl border border-border bg-surface p-5">
      <header className="space-y-2">
        <h3 className="m-0 text-base font-semibold text-text-primary">{item.name}</h3>
        <p className="m-0 text-sm text-text-secondary">{item.description}</p>
        <p className="m-0 text-xs text-text-secondary">
          <span className="font-medium text-text-primary">When to use:</span> {item.whenToUse}
        </p>
      </header>

      <section className="space-y-2">
        <p className="m-0 text-xs font-medium uppercase tracking-wide text-text-secondary">Preview</p>
        <div className="rounded-lg border border-border bg-background p-3">
          {item.preview ? (
            <ComponentPreview name={item.name} />
          ) : (
            <p className="m-0 text-xs text-text-secondary">Preview not isolated. Use the composition snippet below.</p>
          )}
        </div>
      </section>

      <section className="space-y-3">
        <p className="m-0 text-xs font-medium uppercase tracking-wide text-text-secondary">Usage</p>
        <VariationBlock title="Basic usage" code={item.snippet} />
      </section>

      <section className="space-y-3">
        <p className="m-0 text-xs font-medium uppercase tracking-wide text-text-secondary">Variations</p>
        {item.variations.map((variation) => (
          <VariationBlock key={`${item.name}-${variation.title}`} title={variation.title} code={variation.code} />
        ))}
      </section>

      <section className="space-y-2">
        <p className="m-0 text-xs font-medium uppercase tracking-wide text-text-secondary">Composition exports</p>
        <div className="flex flex-wrap gap-2">
          {item.compositionExports.map((exportName) => (
            <span key={`${item.name}-${exportName}`} className="rounded-full border border-border bg-background px-2 py-0.5 text-xs text-text-secondary">
              {exportName}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}
