
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { masterclass } from "./masterclass.tokens.mjs";

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

function lessonReadme(lesson, index) {
  return `# ${String(index + 1).padStart(2, "0")} — ${lesson.title}

**Level:** ${lesson.level}

## Goal

${lesson.goal}

---

## What this lesson covers

${list(lesson.skills)}

---

## Key techniques

${list(lesson.techniques)}

---

## Exercises

${lesson.exercises.map((item, i) => `${i + 1}. ${item}`).join("\n")}

---

## Expected outputs

${codeList(lesson.outputs)}

---

## Production use

This lesson contributes reusable visual fragments for professional technical websites.

The objective is not to create a one-off illustration. The objective is to create parts that can be reused across hero sections, service pages, systems pages, dashboard visuals, brochure graphics, and client-specific variants.

---

## Quality checklist

- Thin strokes
- Low opacity route lines
- Consistent spacing
- Consistent radius
- No random colors
- No raw unwrapped icons
- Clear hierarchy
- Works at desktop and mobile sizes
- Exportable as SVG
- Exportable as PNG when needed
`;
}

function rootReadme() {
  const t = masterclass.tokens;
  return `# ${masterclass.repoName}

${masterclass.repoSubtitle}

${masterclass.positioning}

---

## Purpose

This repository contains a structured collection of browser-based visual techniques for creating scalable technical assets with SVG, CSS, and HTML.

The goal is to create visuals that feel precise, professional, and reusable without depending on heavy raster images or one-off illustration files.

---

## Visual system

The visual language is built from:

- subtle grids
- SVG route lines
- blueprint arcs
- node cards
- icon chips
- dashboard panels
- process flows
- topology fragments
- responsive hero compositions

---

## Core principles

${list(t.principles)}

---

## Design tokens

\`\`\`css
--blue: ${t.colors.blue};
--navy: ${t.colors.navy};
--dark: ${t.colors.dark};
--panel: ${t.colors.panel};
--muted: ${t.colors.muted};
--cyan: ${t.colors.cyan};

--grid-size: ${t.geometry.gridSize};
--panel-radius: ${t.geometry.panelRadius};
--node-radius: ${t.geometry.nodeRadius};

--icon-stroke: ${t.geometry.iconStroke};
--route-opacity: ${t.geometry.routeOpacity};
--grid-opacity: ${t.geometry.gridOpacity};
\`\`\`

---

## Learning path

${masterclass.learningPath
  .map((lesson, index) => `${index + 1}. [${lesson.title}](./${lesson.folder})`)
  .join("\n")}

---

## Recommended workflow

\`\`\`txt
1. Build the visual as SVG/CSS/HTML
2. Keep structure reusable
3. Normalize colors, spacing, radius, and stroke widths
4. Export SVG for web use
5. Export PNG only when needed for print, social, or fixed assets
6. Track imported icon sources and licenses
\`\`\`

---

## Asset categories

\`\`\`txt
Hero / topology visuals
Systems architecture panels
Process and deployment flows
Consulting and decision maps
Standard website deployment previews
Monitoring and operations visuals
Reusable node icons
Topology fragments
Background textures
Print and brochure compositions
\`\`\`

---

## Output goal

The final output of this repository is a reusable visual kit capable of producing consistent assets such as:

\`\`\`txt
hero_topology_primary.svg
systems_backend_topology.svg
process_delivery_pipeline.svg
ops_monitoring_dashboard.svg
node_api.svg
node_vps.svg
node_crm.svg
bg_grid_subtle.svg
\`\`\`

PNG exports may also be generated when a fixed raster asset is required.

---

## Status

This repository is an evolving visual systems workspace for professional web and print projects.
`;
}

function startHere() {
  return `# Start Here

This repository is a structured workspace for building reusable technical visuals with SVG, CSS, and lightweight HTML.

The objective is to create professional web visuals that can be reused across technical websites, SaaS pages, infrastructure sections, service pages, dashboards, and print assets.

The focus is not decorative illustration.  
The focus is repeatable visual systems.

---

## Core idea

A professional technical visual can usually be built from a small set of parts:

\`\`\`txt
background grid
+ SVG route lines
+ node cards
+ icon chips
+ soft shadows
+ restrained colors
+ consistent spacing
\`\`\`

Once these parts are reusable, new visuals can be created faster and with better consistency.

---

## Recommended order

Start with the base visual language:

\`\`\`txt
01_premium_grid_blueprint_arcs
02_svg_lines_paths_curves
03_node_cards_icon_chips
\`\`\`

Then move into complete compositions:

\`\`\`txt
04_topology_maps_api_systems
05_dark_enterprise_panels
06_process_delivery_flows
07_ops_monitoring_dashboards
\`\`\`

Then learn reuse and export:

\`\`\`txt
08_background_textures_fragments
09_responsive_hero_visuals
10_export_svg_png_workflow
11_client_variants_templates
\`\`\`

Finally, consolidate the production kit:

\`\`\`txt
12_iopartner_visual_kit
\`\`\`

---

## What to avoid

- Random one-off visuals
- Raw icons pasted onto pages
- Heavy neon effects
- Too many colors
- Overloaded diagrams
- Untracked third-party assets
- Exporting PNGs when SVG would work better

---

## First milestone

Complete the first three lessons:

1. Premium grid + blueprint arcs
2. SVG lines, paths, and curves
3. Node cards + icon chips

After those, the foundation for most technical visuals is already in place.
`;
}

function premiumRules() {
  return `# Premium Visual Rules

## The formula

\`\`\`txt
subtle grid
+ low-opacity SVG curves
+ small technical marks
+ restrained shadows
+ consistent radius
+ one accent color
\`\`\`

## Do

- Use fewer elements.
- Use thin strokes.
- Use low opacity.
- Use one accent color.
- Use consistent radius.
- Use whitespace generously.
- Align everything.
- Use the same icon style everywhere.

## Avoid

- Thick neon lines.
- Random colors.
- Random icon styles.
- Too many labels.
- Fake complexity.
- Heavy shadows everywhere.
- Decorative elements that fight the content.

## Quick diagnosis

If a visual looks cheap, reduce:

- opacity
- glow
- number of elements
- color count
- stroke width

If a visual looks empty, improve:

- alignment
- hierarchy
- spacing
- route rhythm
- node placement
`;
}

function svgRules() {
  return `# SVG Rules

## Useful basics

- \`viewBox="0 0 100 100"\` makes layout easier.
- \`preserveAspectRatio="none"\` lets background routes stretch.
- \`vector-effect="non-scaling-stroke"\` keeps line thickness stable.
- \`stroke-linecap="round"\` makes lines feel polished.
- Use \`path\` for arcs.
- Use \`circle\` for route dots.
- Use opacity before adding new colors.

## Path commands

\`\`\`txt
M x y        move to
L x y        line to
H x          horizontal line
V y          vertical line
C x1 y1 x2 y2 x y   cubic curve
Z            close path
\`\`\`

## Recommended route style

\`\`\`svg
<path
  d="M10 60 C25 42 44 32 62 30 C76 29 86 36 92 46"
  fill="none"
  stroke="rgba(37, 99, 235, 0.28)"
  stroke-width="0.75"
  vector-effect="non-scaling-stroke"
  stroke-linecap="round"
/>
\`\`\`

## Route hierarchy

\`\`\`txt
main routes     0.24 - 0.38 opacity
ghost routes    0.08 - 0.18 opacity
dots            0.35 - 0.70 opacity
fragments       0.14 - 0.24 opacity
\`\`\`
`;
}

function tokenDoc() {
  const t = masterclass.tokens;
  return `# Visual Tokens

These are the default visual tokens used across the repository.

## Colors

\`\`\`css
--io-blue: ${t.colors.blue};
--io-navy: ${t.colors.navy};
--io-dark: ${t.colors.dark};
--io-panel: ${t.colors.panel};
--io-muted: ${t.colors.muted};
--io-cyan: ${t.colors.cyan};
\`\`\`

## Geometry

\`\`\`css
--io-grid-size: ${t.geometry.gridSize};
--io-panel-radius: ${t.geometry.panelRadius};
--io-node-radius: ${t.geometry.nodeRadius};
--io-icon-stroke: ${t.geometry.iconStroke};
--io-route-opacity: ${t.geometry.routeOpacity};
--io-grid-opacity: ${t.geometry.gridOpacity};
\`\`\`

## Usage

Use these tokens as defaults.

Project-specific visuals may adjust them, but should preserve the same structure:

- one main accent color
- one dark color
- one panel color
- one muted text color
- consistent radius
- consistent stroke logic
`;
}

write("README.md", rootReadme());
write("00_start_here/README.md", startHere());

masterclass.learningPath.forEach((lesson, index) => {
  write(`${lesson.folder}/README.md`, lessonReadme(lesson, index));
});

write("cheatsheets/premium_visual_rules.md", premiumRules());
write("cheatsheets/svg_rules.md", svgRules());
write("cheatsheets/iopartner_tokens.md", tokenDoc());
