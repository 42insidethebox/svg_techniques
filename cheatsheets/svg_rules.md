# SVG Rules

## Useful basics

- `viewBox="0 0 100 100"` makes layout easier.
- `preserveAspectRatio="none"` lets background routes stretch.
- `vector-effect="non-scaling-stroke"` keeps line thickness stable.
- `stroke-linecap="round"` makes lines feel polished.
- Use `path` for arcs.
- Use `circle` for route dots.
- Use opacity before adding new colors.

## Path commands

```txt
M x y        move to
L x y        line to
H x          horizontal line
V y          vertical line
C x1 y1 x2 y2 x y   cubic curve
Z            close path
```

## Recommended route style

```svg
<path
  d="M10 60 C25 42 44 32 62 30 C76 29 86 36 92 46"
  fill="none"
  stroke="rgba(37, 99, 235, 0.28)"
  stroke-width="0.75"
  vector-effect="non-scaling-stroke"
  stroke-linecap="round"
/>
```

## Route hierarchy

```txt
main routes     0.24 - 0.38 opacity
ghost routes    0.08 - 0.18 opacity
dots            0.35 - 0.70 opacity
fragments       0.14 - 0.24 opacity
```

