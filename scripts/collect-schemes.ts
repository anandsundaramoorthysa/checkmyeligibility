import { readdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";

const schemesDir = path.join(process.cwd(), "src/data/schemes");

const files = readdirSync(schemesDir)
  .filter((f) => f.endsWith(".ts") && f !== "index.ts")
  .sort();

function getExportName(filePath: string): string {
  const content = readFileSync(filePath, "utf8");
  const match = content.match(/^export const (\w+)/m);
  if (!match) throw new Error(`No top-level export const found in ${filePath}`);
  return match[1];
}

const entries = files.map((f) => {
  const base = f.replace(".ts", "");
  const name = getExportName(path.join(schemesDir, f));
  return { base, name };
});

const imports = entries
  .map(({ base, name }) => `import { ${name} } from "./${base}";`)
  .join("\n");

const schemeList = entries.map(({ name }) => name).join(",\n  ");

const output = `// AUTO-GENERATED — do not edit. Run \`pnpm collect-schemes\` to rebuild.
import type { Scheme } from "@/lib/types";

${imports}

export const SCHEMES: Scheme[] = [
  ${schemeList},
];
`;

writeFileSync(path.join(schemesDir, "index.ts"), output, "utf8");
console.log(`✓ index.ts rebuilt — ${files.length} scheme(s)`);
