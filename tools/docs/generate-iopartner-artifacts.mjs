
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { artifactGuides } from "./iopartner-artifacts.tokens.mjs";

function ensure(path) {
  mkdirSync(dirname(path), { recursive: true });
}

function write(path, content) {
  ensure(path);
  writeFileSync(path, content.trimStart() + "\n");
  console.log("wrote", path);
}

function list(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function codeList(items) {
  return "```txt\n" + items.join("\n") + "\n```";
}

function guideReadme(guide, index) {
  return `# ${String(index + 4).padStart(2, "0")} — ${guide.title}

## Purpose

${guide.purpose}

---

## What this artifact depicts

${list(guide.depicts)}

---

## Where it is used

${list(guide.pageUsage)}

---

## Visual structure

${list(guide.visualStructure)}

---

## Required elements

${list(guide.requiredElements)}

---

## Variants to consider

${list(guide.variants)}

---

## Implementation notes

${list(guide.implementationNotes)}

---

## Avoid

${list(guide.avoid)}

---

## Expected asset names

${codeList(guide.assetNames)}

---

## Quality checklist

- Consistent with IOpartner visual language.
- Uses the shared grid, node, route, and icon system where relevant.
- Works in desktop and mobile contexts.
- Labels remain editable in source.
- SVG-first unless a PNG export is explicitly needed.
- Does not introduce a new unrelated illustration style.
- Can be reused or adapted in future client projects.
`;
}

artifactGuides.forEach((guide, index) => {
  write(`${guide.folder}/README.md`, guideReadme(guide, index));
});
