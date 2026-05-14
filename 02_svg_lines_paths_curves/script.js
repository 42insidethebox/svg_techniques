const panel = document.querySelector(".ops-panel");
const routeLayer = document.querySelector("[data-route-layer]");
const controls = document.querySelectorAll(".control");

const routes = [
  {
    from: "web",
    fromAnchor: "right",
    to: "api",
    toAnchor: "left",
  },
  {
    from: "api",
    fromAnchor: "right",
    to: "workers",
    toAnchor: "left",
  },
  {
    from: "api",
    fromAnchor: "bottomLeft",
    to: "data",
    toAnchor: "top",
  },
  {
    from: "api",
    fromAnchor: "bottomRight",
    to: "monitoring",
    toAnchor: "top",
  },
  {
    from: "data",
    fromAnchor: "right",
    to: "monitoring",
    toAnchor: "left",
  },
];

const anchorMap = {
  left: [0, 0.5],
  right: [1, 0.5],
  top: [0.5, 0],
  bottom: [0.5, 1],
  bottomLeft: [0.35, 1],
  bottomRight: [0.65, 1],
  center: [0.5, 0.5],
};

function getNode(id) {
  return document.querySelector(`[data-node="${id}"]`);
}

function getAnchorPoint(node, anchor) {
  const panelRect = panel.getBoundingClientRect();
  const nodeRect = node.getBoundingClientRect();
  const [anchorX, anchorY] = anchorMap[anchor] ?? anchorMap.center;

  const x = nodeRect.left - panelRect.left + nodeRect.width * anchorX;
  const y = nodeRect.top - panelRect.top + nodeRect.height * anchorY;

  return {
    x: (x / panelRect.width) * 100,
    y: (y / panelRect.height) * 100,
  };
}

function directionFor(anchor) {
  if (anchor.startsWith("left")) return { x: -1, y: 0 };
  if (anchor.startsWith("right")) return { x: 1, y: 0 };
  if (anchor.startsWith("top")) return { x: 0, y: -1 };
  if (anchor.startsWith("bottom")) return { x: 0, y: 1 };

  return { x: 0, y: 0 };
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function curvedPath(from, to, fromAnchor, toAnchor) {
  const fromDirection = directionFor(fromAnchor);
  const toDirection = directionFor(toAnchor);
  const distance = Math.hypot(to.x - from.x, to.y - from.y);
  const tension = clamp(distance * 0.42, 8, 20);

  const c1 = {
    x: from.x + fromDirection.x * tension,
    y: from.y + fromDirection.y * tension,
  };

  const c2 = {
    x: to.x + toDirection.x * tension,
    y: to.y + toDirection.y * tension,
  };

  return `M ${from.x.toFixed(2)} ${from.y.toFixed(2)}
          C ${c1.x.toFixed(2)} ${c1.y.toFixed(2)},
            ${c2.x.toFixed(2)} ${c2.y.toFixed(2)},
            ${to.x.toFixed(2)} ${to.y.toFixed(2)}`;
}

function straightPath(from, to) {
  return `M ${from.x.toFixed(2)} ${from.y.toFixed(2)}
          L ${to.x.toFixed(2)} ${to.y.toFixed(2)}`;
}

function orthogonalPath(from, to) {
  const midX = (from.x + to.x) / 2;

  return `M ${from.x.toFixed(2)} ${from.y.toFixed(2)}
          H ${midX.toFixed(2)}
          V ${to.y.toFixed(2)}
          H ${to.x.toFixed(2)}`;
}

function createPath(routeMode, from, to, fromAnchor, toAnchor) {
  if (routeMode === "straight") return straightPath(from, to);
  if (routeMode === "orthogonal") return orthogonalPath(from, to);

  return curvedPath(from, to, fromAnchor, toAnchor);
}

function svgElement(tag, attributes) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function renderRoutes() {
  const routeMode = panel.dataset.routeMode || "curve";

  routeLayer.innerHTML = "";

  routes.forEach((route) => {
    const fromNode = getNode(route.from);
    const toNode = getNode(route.to);

    if (!fromNode || !toNode) return;

    const from = getAnchorPoint(fromNode, route.fromAnchor);
    const to = getAnchorPoint(toNode, route.toAnchor);
    const d = createPath(routeMode, from, to, route.fromAnchor, route.toAnchor);

    const path = svgElement("path", {
      class: "generated-route",
      d,
    });

    const fromDot = svgElement("circle", {
      class: "route-dot",
      cx: from.x.toFixed(2),
      cy: from.y.toFixed(2),
      r: "0.45",
    });

    const toDot = svgElement("circle", {
      class: "route-dot",
      cx: to.x.toFixed(2),
      cy: to.y.toFixed(2),
      r: "0.45",
    });

    routeLayer.append(path, fromDot, toDot);
  });
}

controls.forEach((control) => {
  control.addEventListener("click", () => {
    panel.dataset.routeMode = control.dataset.routeMode;

    controls.forEach((button) => {
      button.classList.remove("is-active");
    });

    control.classList.add("is-active");

    requestAnimationFrame(renderRoutes);
  });
});

window.addEventListener("load", renderRoutes);
window.addEventListener("resize", renderRoutes);

const observer = new ResizeObserver(renderRoutes);
observer.observe(panel);