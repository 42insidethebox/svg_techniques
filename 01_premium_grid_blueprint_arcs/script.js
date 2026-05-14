const panel = document.querySelector(".blueprint");
const controls = document.querySelectorAll(".control");
const routeLayer = document.querySelector("[data-route-layer]");

const nodeRoutes = [
  {
    from: "dns",
    fromAnchor: "right",
    to: "api",
    toAnchor: "leftUpper",
  },
  {
    from: "crm",
    fromAnchor: "right",
    to: "api",
    toAnchor: "leftLower",
  },
  {
    from: "vps",
    fromAnchor: "left",
    to: "api",
    toAnchor: "rightUpper",
  },
  {
    from: "monitoring",
    fromAnchor: "left",
    to: "api",
    toAnchor: "rightLower",
  },
  {
    from: "backup",
    fromAnchor: "top",
    to: "api",
    toAnchor: "bottom",
  },
];

const anchorMap = {
  left: [0, 0.5],
  leftUpper: [0, 0.35],
  leftLower: [0, 0.65],

  right: [1, 0.5],
  rightUpper: [1, 0.35],
  rightLower: [1, 0.65],

  top: [0.5, 0],
  topLeft: [0.35, 0],
  topRight: [0.65, 0],

  bottom: [0.5, 1],
  bottomLeft: [0.35, 1],
  bottomRight: [0.65, 1],

  center: [0.5, 0.5],
};

function getNode(id) {
  return document.querySelector(`[data-node="${id}"]`);
}

function getAnchorDirection(anchor) {
  if (anchor.startsWith("left")) return { x: -1, y: 0 };
  if (anchor.startsWith("right")) return { x: 1, y: 0 };
  if (anchor.startsWith("top")) return { x: 0, y: -1 };
  if (anchor.startsWith("bottom")) return { x: 0, y: 1 };

  return { x: 0, y: 0 };
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

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function createCurve(from, to, fromAnchor, toAnchor) {
  const fromDirection = getAnchorDirection(fromAnchor);
  const toDirection = getAnchorDirection(toAnchor);

  const distance = Math.hypot(to.x - from.x, to.y - from.y);
  const tension = clamp(distance * 0.38, 8, 20);

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
  routeLayer.innerHTML = "";

  nodeRoutes.forEach((route) => {
    const fromNode = getNode(route.from);
    const toNode = getNode(route.to);

    if (!fromNode || !toNode) return;

    const from = getAnchorPoint(fromNode, route.fromAnchor);
    const to = getAnchorPoint(toNode, route.toAnchor);
    const d = createCurve(from, to, route.fromAnchor, route.toAnchor);

    const path = svgElement("path", {
      class: "route route-connector",
      d,
    });

    const startDot = svgElement("circle", {
      class: "route-anchor",
      cx: from.x.toFixed(2),
      cy: from.y.toFixed(2),
      r: "0.45",
    });

    const endDot = svgElement("circle", {
      class: "route-anchor",
      cx: to.x.toFixed(2),
      cy: to.y.toFixed(2),
      r: "0.45",
    });

    routeLayer.append(path, startDot, endDot);
  });
}

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const theme = control.dataset.theme;
    const density = control.dataset.density;

    if (theme) {
      panel.dataset.theme = theme;

      document
        .querySelectorAll("[data-theme].control")
        .forEach((button) => button.classList.remove("is-active"));

      control.classList.add("is-active");
    }

    if (density) {
      panel.dataset.density = density;

      document
        .querySelectorAll("[data-density].control")
        .forEach((button) => button.classList.remove("is-active"));

      control.classList.add("is-active");
    }

    requestAnimationFrame(renderRoutes);
  });
});

window.addEventListener("load", renderRoutes);
window.addEventListener("resize", renderRoutes);

const observer = new ResizeObserver(() => {
  renderRoutes();
});

observer.observe(panel);