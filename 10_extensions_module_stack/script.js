const panel = document.querySelector(".extensions-panel");
const routeLayer = document.querySelector("[data-route-layer]");
const controls = document.querySelectorAll(".control");
const moduleCards = document.querySelectorAll("[data-module]");

const focusSubtitle = document.querySelector("[data-focus-subtitle]");
const inspectorTitle = document.querySelector("[data-inspector-title]");
const inspectorCopy = document.querySelector("[data-inspector-copy]");
const lineA = document.querySelector("[data-line-a]");
const lineB = document.querySelector("[data-line-b]");
const lineC = document.querySelector("[data-line-c]");

const focusContent = {
  contact: {
    subtitle: "Contact simple · rendez-vous · formulaire",
    title: "Contact",
    copy:
      "Ajoute les points de contact essentiels sans transformer le site en plateforme complexe.",
    modules: ["whatsapp", "calendar", "form"],
    lines: ["WhatsApp", "Rendez-vous", "Formulaire"],
  },
  conversion: {
    subtitle: "Demandes cadrées · suivi léger · mesure utile",
    title: "Conversion",
    copy:
      "Transforme le site en point d’entrée plus utile: formulaire clair, notification et suivi léger.",
    modules: ["form", "email", "analytics"],
    lines: ["Formulaire", "Email", "Analytics"],
  },
  automation: {
    subtitle: "Workflow simple · notification · passage de relais",
    title: "Automation",
    copy:
      "Ajoute une couche opérationnelle légère pour éviter les tâches répétitives et mieux traiter les demandes.",
    modules: ["automation", "form", "email"],
    lines: ["Automation", "Formulaire", "Notification"],
  },
  all: {
    subtitle: "Modules optionnels · activés seulement si utiles",
    title: "Modules",
    copy:
      "Toutes les extensions restent optionnelles: elles complètent le site sans le transformer en gros système.",
    modules: ["whatsapp", "calendar", "form", "automation", "analytics", "email"],
    lines: ["Contact", "Workflow", "Mesure"],
  },
};

const routes = [
  ["website", "leftUpper", "whatsapp", "right"],
  ["website", "left", "calendar", "right"],
  ["website", "leftLower", "form", "right"],
  ["website", "rightLower", "automation", "left"],
  ["website", "right", "analytics", "left"],
  ["website", "rightUpper", "email", "left"],
  ["website", "bottom", "inspector", "top"],
];

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

function getActiveModules() {
  const focus = panel.dataset.focus || "contact";
  return focusContent[focus].modules;
}

function renderRoutes() {
  const activeModules = getActiveModules();

  routeLayer.innerHTML = "";

  routes.forEach(([fromId, fromAnchor, toId, toAnchor]) => {
    const fromNode = getNode(fromId);
    const toNode = getNode(toId);

    if (!fromNode || !toNode) return;

    const from = getAnchorPoint(fromNode, fromAnchor);
    const to = getAnchorPoint(toNode, toAnchor);
    const isActive = activeModules.includes(toId) || toId === "inspector";

    const path = svgElement("path", {
      class: `generated-route${isActive ? " is-active" : ""}`,
      d: curvedPath(from, to, fromAnchor, toAnchor),
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

function updateContent() {
  const focus = panel.dataset.focus || "contact";
  const content = focusContent[focus];

  focusSubtitle.textContent = content.subtitle;
  inspectorTitle.textContent = content.title;
  inspectorCopy.textContent = content.copy;

  lineA.textContent = content.lines[0];
  lineB.textContent = content.lines[1];
  lineC.textContent = content.lines[2];

  moduleCards.forEach((card) => {
    card.classList.toggle("is-active", content.modules.includes(card.dataset.module));
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
      updateContent();
    }

    document
      .querySelectorAll(`[data-group="${group}"]`)
      .forEach((button) => button.classList.remove("is-active"));

    control.classList.add("is-active");

    requestAnimationFrame(() => {
      renderRoutes();
      setTimeout(renderRoutes, 220);
    });
  });
});

window.addEventListener("load", () => {
  updateContent();
  renderRoutes();
});

window.addEventListener("resize", renderRoutes);

const observer = new ResizeObserver(renderRoutes);
observer.observe(panel);