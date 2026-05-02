import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd(), "..");
const SRC_INDEX_PATH = path.join(ROOT, "src", "index.ts");
const ICONS_INDEX_PATH = path.join(ROOT, "src", "icons", "index.ts");
const COMPONENT_REGISTRY_PATH = path.join(process.cwd(), "src", "lib", "showcase", "component-registry.ts");
const ICON_REGISTRY_PATH = path.join(process.cwd(), "src", "lib", "showcase", "icon-registry.ts");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function parseRuntimeExports(content) {
  const names = [];

  for (const match of content.matchAll(/export\s*\{([^}]+)\}\s*from/g)) {
    const raw = match[1];
    for (const chunk of raw.split(",")) {
      const name = chunk.trim();
      if (!name || name.startsWith("type ")) continue;
      names.push(name);
    }
  }

  return [...new Set(names)].sort();
}

function parseRegistryNames(content) {
  const values = [];
  for (const block of content.matchAll(/compositionExports:\s*\[([\s\S]*?)\]/g)) {
    for (const match of block[1].matchAll(/"([A-Za-z][A-Za-z0-9]+)"/g)) {
      values.push(match[1]);
    }
  }
  return [...new Set(values)].sort();
}

function parseIconRegistryNames(content) {
  const values = [];
  for (const match of content.matchAll(/"([A-Za-z][A-Za-z0-9]+)"/g)) {
    values.push(match[1]);
  }
  return [...new Set(values)].sort();
}

function getMissing(expected, actual) {
  const actualSet = new Set(actual);
  return expected.filter((name) => !actualSet.has(name));
}

const componentExports = parseRuntimeExports(read(SRC_INDEX_PATH));
const iconExports = parseRuntimeExports(read(ICONS_INDEX_PATH));

const componentRegistryNames = parseRegistryNames(read(COMPONENT_REGISTRY_PATH));
const iconRegistryNames = parseIconRegistryNames(read(ICON_REGISTRY_PATH));

const missingComponents = getMissing(componentExports, componentRegistryNames);
const missingIcons = getMissing(iconExports, iconRegistryNames);

if (missingComponents.length > 0 || missingIcons.length > 0) {
  if (missingComponents.length > 0) {
    console.error("Missing component exports in showcase registry:");
    for (const name of missingComponents) console.error(`- ${name}`);
  }

  if (missingIcons.length > 0) {
    console.error("Missing icon exports in showcase registry:");
    for (const name of missingIcons) console.error(`- ${name}`);
  }

  process.exit(1);
}

console.log(`✅ Showcase coverage OK: ${componentExports.length} component exports and ${iconExports.length} icon exports mapped.`);
