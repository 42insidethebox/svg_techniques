# 13 — Background Topology Fragments

## Purpose

Create reusable background textures and topology fragments that make the site feel cohesive without requiring a full illustration in every section.

---

## What this artifact depicts

- Subtle grid textures.
- Route fragments.
- Corner markers.
- Small node clusters.
- Footer topology atmosphere.
- Blueprint-style section backgrounds.

---

## Where it is used

- Global page backgrounds.
- Footer.
- Hero sections.
- Dark systems sections.
- Cards that need subtle technical texture.
- Print/brochure backgrounds.

---

## Visual structure

- Mostly decorative and low opacity.
- Should support content, not compete with it.
- Can be pure CSS, inline SVG, or exported SVG.
- Should include light and dark variants.
- Should be tileable or safely cropped when possible.

---

## Required elements

- Subtle grid
- Route arcs
- Dashed inner frame
- Corner markers
- Small route dots
- Optional node cluster

---

## Variants to consider

- Light grid.
- Dark topology texture.
- Footer route background.
- Cluster fragment.
- Corner fragment.
- Horizontal route fragment.
- Vertical route fragment.

---

## Implementation notes

- Opacity is the main control.
- Most textures should sit under 8% visual strength.
- Use CSS backgrounds when possible.
- Export SVG fragments for reuse in Astro components.
- Avoid depending on raster images.

---

## Avoid

- Do not make backgrounds too visible.
- Do not repeat obvious patterns awkwardly.
- Do not place important information in background fragments.
- Do not use PNG unless needed for print/export.

---

## Expected asset names

```txt
bg_grid_subtle.svg
bg_blueprint_texture.svg
bg_dark_topology_texture.svg
bg_footer_topology.svg
topology_fragment_routes.svg
topology_fragment_cluster.svg
topology_fragment_corner.svg
topology_fragment_nodes.svg
```

---

## Quality checklist

- Consistent with IOpartner visual language.
- Uses the shared grid, node, route, and icon system where relevant.
- Works in desktop and mobile contexts.
- Labels remain editable in source.
- SVG-first unless a PNG export is explicitly needed.
- Does not introduce a new unrelated illustration style.
- Can be reused or adapted in future client projects.

