import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");
const typesDir = join(distDir, "types");
const tempTsconfig = join(root, ".tsconfig.types.tmp.json");

function toKebabCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

function toModulePath(fromFile, targetFile) {
  let value = relative(dirname(fromFile), targetFile).replaceAll("\\", "/");
  if (!value.startsWith(".")) value = `./${value}`;
  return value.replace(/\.d\.ts$/, "");
}

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(fullPath));
    if (entry.isFile() && entry.name.endsWith(".d.ts")) files.push(fullPath);
  }
  return files;
}

function rewriteAliases(filePath) {
  let content = readFileSync(filePath, "utf8");

  content = content.replace(/(["'])@mew\/ui\/components\/([^"']+)\1/g, (_match, quote, componentName) => {
    return `${quote}${toModulePath(filePath, join(typesDir, "components", componentName, "index.d.ts"))}${quote}`;
  });

  content = content.replace(/(["'])@mew\/ui\/icons\1/g, (_match, quote) => {
    return `${quote}${toModulePath(filePath, join(typesDir, "icons", "index.d.ts"))}${quote}`;
  });

  content = content.replace(/(["'])@mew\/ui\/utils\/cn\1/g, (_match, quote) => {
    return `${quote}${toModulePath(filePath, join(typesDir, "utils", "cn", "index.d.ts"))}${quote}`;
  });

  content = content.replace(/(["'])@mew\/ui\/utils\1/g, (_match, quote) => {
    return `${quote}${toModulePath(filePath, join(typesDir, "utils", "index.d.ts"))}${quote}`;
  });

  content = content.replace(/(["'])@mew\/ui\1/g, (_match, quote) => {
    return `${quote}${toModulePath(filePath, join(typesDir, "index.d.ts"))}${quote}`;
  });

  writeFileSync(filePath, content);
}

rmSync(typesDir, { recursive: true, force: true });

writeFileSync(tempTsconfig, JSON.stringify({
  extends: "./tsconfig.json",
  include: ["src/**/*"],
  exclude: ["node_modules", "dist", "playground", "**/*.test.ts", "**/*.test.tsx"],
  compilerOptions: {
    declaration: true,
    declarationMap: false,
    emitDeclarationOnly: true,
    outDir: "./dist/types",
    rootDir: "./src",
    noEmit: false,
  },
}, null, 2));

try {
  execFileSync(join(root, "node_modules", ".bin", "tsc"), ["-p", tempTsconfig], {
    cwd: root,
    stdio: "inherit",
  });
} finally {
  rmSync(tempTsconfig, { force: true });
}

for (const filePath of walk(typesDir)) {
  rewriteAliases(filePath);
}

writeFileSync(join(distDir, "index.d.ts"), `export * from "./types/index";\n`);
writeFileSync(join(distDir, "icons.d.ts"), `export * from "./types/icons/index";\n`);
writeFileSync(join(distDir, "utils.d.ts"), `export * from "./types/utils/index";\n`);

mkdirSync(join(distDir, "components"), { recursive: true });
const componentDirs = readdirSync(join(root, "src", "components"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort((a, b) => toKebabCase(a).localeCompare(toKebabCase(b)));

for (const componentName of componentDirs) {
  const target = join(distDir, "components", `${toKebabCase(componentName)}.d.ts`);
  const source = `../types/components/${componentName}/index`;
  writeFileSync(target, `export * from "${source}";\n`);
}
