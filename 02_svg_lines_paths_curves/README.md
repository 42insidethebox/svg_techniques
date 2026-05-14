# 02 — SVG Lines, Paths + Curves

**Level:** Core SVG

## Goal

Understand enough SVG path drawing to create route systems without manual illustration tools.

---

## What this lesson covers

- M, L, H, V path commands
- cubic Bézier curves
- stroke caps and joins
- dash arrays
- route dots
- path layering

---

## Key techniques

- `M x y` moves the pen.
- `L x y` draws a straight line.
- `H x` and `V y` create clean orthogonal route segments.
- `C x1 y1, x2 y2, x y` creates smooth architecture arcs.
- Use opacity and stroke width to create hierarchy.

---

## Exercises

1. Draw five straight technical route fragments.
2. Draw five soft architectural arcs.
3. Create dashed ghost routes.
4. Add route dots at important intersections.
5. Create a reusable SVG route fragment file.

---

## Expected outputs

```txt
topology_fragment_horizontal.svg
topology_fragment_vertical.svg
topology_fragment_corner.svg
topology_fragment_cluster.svg
```

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

