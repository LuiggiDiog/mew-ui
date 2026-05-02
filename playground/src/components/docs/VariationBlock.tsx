import { CodeBlock } from "@mew/ui";

type PropsT = {
  title: string;
  code: string;
};

export function VariationBlock({ title, code }: PropsT) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-medium text-text-secondary">{title}</p>
      <CodeBlock language="tsx" code={code} />
    </div>
  );
}
