const panel = document.querySelector(".scope-panel");
const routeLayer = document.querySelector("[data-route-layer]");
const controls = document.querySelectorAll(".control");

const routes = [
  {
    id: "need-artifact",
    from: "need",
    fromAnchor: "right",
    to: "artifact",
    toAnchor: "leftUpper",
  },
  {
    id: "constraints-artifact",
    from: "constraints",
    fromAnchor: "right",
    to: "artifact",
    toAnchor: "left",
  },
  {
    id: "options-artifact",
    from: "options",
    fromAnchor: "right",
    to: "artifact",
    toAnchor: "leftLower",
  },
  {
    id: "artifact-recommendation",
    from: "artifact",
    fromAnchor: "rightUpper",
    to: "recommendation",
    toAnchor: "left",
  },
  {
    id: "artifact-next",
    from: "artifact",
    fromAnchor: "rightLower",
    to: "next",
    toAnchor: "left",
  },
];

const focusRoutes = {
  risk: ["constraints-artifact"],
  scope: ["need-artifact", "constraints-artifact", "options-artifact"],
  recommendation: ["artifact-recommendation", "artifact-next"],
};

const anchorMap = {
  left: [0, 0.5],
  leftUpper: [0, 0.3],
  leftLower: [0, 0.7],

  right: [1, 0.5],
  rightUpper: [1, 0.3],
  rightLower: [1, 0.7],

  top: [0.5, 0],
  bottom: [0.5, 1],
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
  const tension = clamp(distance * 0.42, 8, 22);

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

function svgElement(tag, attributes) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function renderRoutes() {
  const focus = panel.dataset.focus || "recommendation";
  const activeRoutes = focusRoutes[focus] || focusRoutes.recommendation;

  routeLayer.innerHTML = "";

  routes.forEach((route) => {
    const fromNode = getNode(route.from);
    const toNode = getNode(route.to);

    if (!fromNode || !toNode) return;

    const from = getAnchorPoint(fromNode, route.fromAnchor);
    const to = getAnchorPoint(toNode, route.toAnchor);
    const isActive = activeRoutes.includes(route.id);
    const d = curvedPath(from, to, route.fromAnchor, route.toAnchor);

    const path = svgElement("path", {
      class: `generated-route${isActive ? " is-active" : ""}`,
      d,
    });

    const fromDot = svgElement("circle", {
      class: `route-dot${isActive ? " is-active" : ""}`,
      cx: from.x.toFixed(2),
      cy: from.y.toFixed(2),
      r: isActive ? "0.5" : "0.4",
    });

    const toDot = svgElement("circle", {
      class: `route-dot${isActive ? " is-active" : ""}`,
      cx: to.x.toFixed(2),
      cy: to.y.toFixed(2),
      r: isActive ? "0.5" : "0.4",
    });

    routeLayer.append(path, fromDot, toDot);
  });
}

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const group = control.dataset.group;

    if (control.dataset.theme) {
      panel.dataset.theme = control.dataset.theme;
    }

    if (control.dataset.focus) {
      panel.dataset.focus = control.dataset.focus;
    }

    document
      .querySelectorAll(`[data-group="${group}"]`)
      .forEach((button) => button.classList.remove("is-active"));

    control.classList.add("is-active");

    requestAnimationFrame(renderRoutes);
  });
});

window.addEventListener("load", renderRoutes);
window.addEventListener("resize", renderRoutes);

const observer = new ResizeObserver(renderRoutes);
observer.observe(panel);