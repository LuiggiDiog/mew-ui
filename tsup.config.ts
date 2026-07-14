import { defineConfig } from "tsup";
import { readdirSync } from "node:fs";
import { join } from "node:path";

function toKebabCase(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

const componentEntries = Object.fromEntries(
  readdirSync(join(process.cwd(), "src/components"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => [
      `components/${toKebabCase(entry.name)}`,
      `src/components/${entry.name}/index.ts`,
    ])
);

export default defineConfig({
  entry: {
    index: "src/index.ts",
    icons: "src/icons/index.ts",
    utils: "src/utils/index.ts",
    ...componentEntries,
  },
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  external: ["react", "react-dom", "react/jsx-runtime", "radix-ui"],
});
