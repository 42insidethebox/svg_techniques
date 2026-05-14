const panel = document.querySelector(".ops-panel");
const routeLayer = document.querySelector("[data-route-layer]");
const controls = document.querySelectorAll(".control");

const stateSubtitle = document.querySelector("[data-state-subtitle]");
const metricIncidents = document.querySelector("[data-metric-incidents]");
const metricChecks = document.querySelector("[data-metric-checks]");
const metricUptime = document.querySelector("[data-metric-uptime]");
const healthLabel = document.querySelector("[data-health-label]");
const formsStatus = document.querySelector("[data-forms-status]");
const alertTitle = document.querySelector("[data-alert-title]");
const alertCopy = document.querySelector("[data-alert-copy]");
const incidentTitle = document.querySelector("[data-incident-title]");
const incidentCopy = document.querySelector("[data-incident-copy]");
const backupTime = document.querySelector("[data-backup-time]");
const deployTime = document.querySelector("[data-deploy-time]");
const alertCount = document.querySelector("[data-alert-count]");

const stateContent = {
  healthy: {
    subtitle: "Monitoring actif · services stables · sauvegardes récentes",
    incidents: "0",
    checks: "48",
    uptime: "99.98%",
    health: "stable",
    forms: "watch",
    alertTitle: "Alertes",
    alertCopy: "Aucune action urgente",
    incidentTitle: "Service stable",
    incidentCopy:
      "Les checks sont actifs, les sauvegardes sont récentes, et aucun incident client ne demande une action immédiate.",
    backupTime: "03:10",
    deployTime: "hier",
    alertCount: "0 active",
  },
  watch: {
    subtitle: "Surveillance renforcée · anomalie mineure · pas d’arrêt",
    incidents: "0",
    checks: "52",
    uptime: "99.91%",
    health: "watch",
    forms: "slow",
    alertTitle: "Watch",
    alertCopy: "Un point mineur est suivi",
    incidentTitle: "Sous surveillance",
    incidentCopy:
      "Un signal faible est visible, mais le service reste disponible. La priorité est de suivre avant d’escalader.",
    backupTime: "03:10",
    deployTime: "2 jours",
    alertCount: "1 watch",
  },
  incident: {
    subtitle: "Incident cadré · diagnostic en cours · impact limité",
    incidents: "1",
    checks: "55",
    uptime: "99.72%",
    health: "incident",
    forms: "issue",
    alertTitle: "Incident",
    alertCopy: "Diagnostic en cours",
    incidentTitle: "Incident cadré",
    incidentCopy:
      "Un incident limité est détecté. Le suivi reste calme: identifier l’impact, corriger, vérifier, puis documenter.",
    backupTime: "03:10",
    deployTime: "3 jours",
    alertCount: "1 active",
  },
};

const routes = [
  ["monitoring", "left", "website", "right"],
  ["monitoring", "right", "api", "left"],
  ["monitoring", "bottomLeft", "backup", "right"],
  ["monitoring", "bottomRight", "alert", "left"],
  ["health", "right", "monitoring", "leftLower"],
  ["incident", "left", "alert", "right"],
];

const anchorMap = {
  left: [0, 0.5],
  leftUpper: [0, 0.35],
  leftLower: [0, 0.65],
  right: [1, 0.5],
  rightUpper: [1, 0.35],
  rightLower: [1, 0.65],
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
  const state = panel.dataset.state || "healthy";

  routeLayer.innerHTML = "";

  routes.forEach(([fromId, fromAnchor, toId, toAnchor]) => {
    const fromNode = getNode(fromId);
    const toNode = getNode(toId);

    if (!fromNode || !toNode) return;

    const from = getAnchorPoint(fromNode, fromAnchor);
    const to = getAnchorPoint(toNode, toAnchor);
    const isActive =
      fromId === "monitoring" ||
      toId === "monitoring" ||
      (state !== "healthy" && (fromId === "incident" || toId === "alert"));

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

function updateStateContent() {
  const state = panel.dataset.state || "healthy";
  const content = stateContent[state];

  stateSubtitle.textContent = content.subtitle;
  metricIncidents.textContent = content.incidents;
  metricChecks.textContent = content.checks;
  metricUptime.textContent = content.uptime;
  healthLabel.textContent = content.health;
  formsStatus.textContent = content.forms;
  alertTitle.textContent = content.alertTitle;
  alertCopy.textContent = content.alertCopy;
  incidentTitle.textContent = content.incidentTitle;
  incidentCopy.textContent = content.incidentCopy;
  backupTime.textContent = content.backupTime;
  deployTime.textContent = content.deployTime;
  alertCount.textContent = content.alertCount;
}

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const group = control.dataset.group;

    if (control.dataset.theme) {
      panel.dataset.theme = control.dataset.theme;
    }

    if (control.dataset.state) {
      panel.dataset.state = control.dataset.state;
      updateStateContent();
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
  updateStateContent();
  renderRoutes();
});

window.addEventListener("resize", renderRoutes);

const observer = new ResizeObserver(renderRoutes);
observer.observe(panel);