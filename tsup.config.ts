import { defineConfig } from "tsup";

export default defineConfig({
  entry: { index: "src/index.ts", icons: "src/icons/index.ts", utils: "src/utils/index.ts" },
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "sileo",
    "@radix-ui/react-alert-dialog",
    "@radix-ui/react-context-menu",
    "@radix-ui/react-dialog",
    "@radix-ui/react-select",
  ],
  banner: { js: '"use client";' },
  onSuccess: "rm -rf dist/styles && cp -r src/styles dist/styles",
});
