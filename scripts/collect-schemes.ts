import { readdirSync, writeFileSync } from "fs";
import path from "path";

const schemesDir = path.join(process.cwd(), "src/data/schemes");

const files = readdirSync(schemesDir)
  .filter((f) => f.endsWith(".ts") && f !== "index.ts")
  .sort();

function toCamelCase(slug: string) {
  return slug.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase());
}

const imports = files
  .map((f) => {
    const base = f.replace(".ts", "");
    const name = toCamelCase(base);
    return `import { ${name} } from "./${base}";`;
  })
  .join("\n");

const entries = files.map((f) => toCamelCase(f.replace(".ts", ""))).join(",\n  ");

const output = `// AUTO-GENERATED — do not edit. Run \`pnpm collect-schemes\` to rebuild.
import type { Scheme } from "@/lib/types";

${imports}

export const SCHEMES: Scheme[] = [
  ${entries},
];
`;

writeFileSync(path.join(schemesDir, "index.ts"), output, "utf8");
console.log(`✓ index.ts rebuilt — ${files.length} scheme(s)`);
