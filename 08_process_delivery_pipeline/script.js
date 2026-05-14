const panel = document.querySelector(".process-panel");
const routeLayer = document.querySelector("[data-route-layer]");
const controls = document.querySelectorAll(".control");
const summaryTitle = document.querySelector("[data-summary-title]");
const summaryCopy = document.querySelector("[data-summary-copy]");
const processSubtitle = document.querySelector("[data-process-subtitle]");
const stepCards = document.querySelectorAll("[data-step]");

const stepOrder = ["scope", "deploy", "launch", "followup"];

const processContent = {
  standard: {
    subtitle: "Site standard · scope court · mise en ligne propre",
    steps: {
      scope: {
        detail: "Objectif, pages, contenu, contraintes",
        title: "Cadrage",
        copy:
          "On clarifie le besoin avant de produire. Le but est de réduire le flou, fixer le périmètre et éviter un build inutilement compliqué.",
      },
      deploy: {
        detail: "Structure, intégration, ajustements",
        title: "Déploiement",
        copy:
          "Le site est assemblé dans un cadre lisible: structure, sections, contenu, formulaires et ajustements essentiels.",
      },
      launch: {
        detail: "DNS, vérification, publication",
        title: "Mise en ligne",
        copy:
          "La publication se fait proprement: domaine, vérifications, responsive, performance de base et derniers contrôles.",
      },
      followup: {
        detail: "Corrections, passation, continuité",
        title: "Suivi",
        copy:
          "Après lancement, on garde une porte ouverte pour corrections, passation courte et continuité technique si nécessaire.",
      },
    },
  },
  consulting: {
    subtitle: "Intervention courte · décision claire · prochain mouvement",
    steps: {
      scope: {
        detail: "Question, contexte, blocage",
        title: "Cadrage",
        copy:
          "On part de la question réelle: ce qui bloque, ce qui coûte du temps, et ce qui doit être décidé maintenant.",
      },
      deploy: {
        detail: "Analyse, options, arbitrage",
        title: "Déploiement",
        copy:
          "Ici, le déploiement signifie transformer le flou en options concrètes: standard, custom, attendre, simplifier ou escalader.",
      },
      launch: {
        detail: "Décision, recommandation, scope",
        title: "Mise en ligne",
        copy:
          "La sortie de consulting doit être utilisable: recommandation, périmètre, risques, et prochaine action défendable.",
      },
      followup: {
        detail: "Handoff, clarification, suite",
        title: "Suivi",
        copy:
          "Le suivi permet de reprendre le fil sans redécouvrir tout le contexte si le client veut continuer.",
      },
    },
  },
  systems: {
    subtitle: "Architecture · opérations · continuité technique",
    steps: {
      scope: {
        detail: "Services, infra, contraintes",
        title: "Cadrage",
        copy:
          "On identifie les composants réels: services, données, hébergement, monitoring, sauvegardes, accès et risques.",
      },
      deploy: {
        detail: "Architecture, intégration, automatisation",
        title: "Déploiement",
        copy:
          "Le déploiement systems couvre l’architecture, les intégrations, l’automatisation et la mise en place opérationnelle.",
      },
      launch: {
        detail: "Vérification, accès, supervision",
        title: "Mise en ligne",
        copy:
          "La mise en production vérifie les accès, les flux, les sauvegardes, les alertes et la stabilité de base.",
      },
      followup: {
        detail: "Monitoring, incidents, évolution",
        title: "Suivi",
        copy:
          "Après livraison, le système peut être suivi: incidents, petites évolutions, continuité et supervision.",
      },
    },
  },
};

const anchorMap = {
  left: [0, 0.5],
  right: [1, 0.5],
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

function getRouteDefinitions() {
  const isMobile = window.matchMedia("(max-width: 920px)").matches;
  const activeStep = panel.dataset.activeStep || "scope";

  if (isMobile) {
    return [
      ["scope", "bottom", "deploy", "top"],
      ["deploy", "bottom", "launch", "top"],
      ["launch", "bottom", "followup", "top"],
      [activeStep, "bottom", "summary", "top"],
    ];
  }

  return [
    ["scope", "right", "deploy", "left"],
    ["deploy", "right", "launch", "left"],
    ["launch", "right", "followup", "left"],
    [activeStep, "bottom", "summary", "top"],
  ];
}

function renderRoutes() {
  const activeStep = panel.dataset.activeStep || "scope";
  const activeIndex = stepOrder.indexOf(activeStep);

  routeLayer.innerHTML = "";

  getRouteDefinitions().forEach(([fromId, fromAnchor, toId, toAnchor], index) => {
    const fromNode = getNode(fromId);
    const toNode = getNode(toId);

    if (!fromNode || !toNode) return;

    const from = getAnchorPoint(fromNode, fromAnchor);
    const to = getAnchorPoint(toNode, toAnchor);
    const isSummaryRoute = toId === "summary";
    const isActive = isSummaryRoute || index <= activeIndex - 1;

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
  const process = panel.dataset.process || "standard";
  const activeStep = panel.dataset.activeStep || "scope";
  const content = processContent[process];
  const active = content.steps[activeStep];

  processSubtitle.textContent = content.subtitle;
  summaryTitle.textContent = active.title;
  summaryCopy.textContent = active.copy;

  stepCards.forEach((card) => {
    const step = card.dataset.step;
    const detail = content.steps[step]?.detail;
    const small = card.querySelector("small");

    card.classList.toggle("is-active", step === activeStep);

    if (small && detail) {
      small.textContent = detail;
    }
  });
}

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const group = control.dataset.group;

    if (control.dataset.theme) {
      panel.dataset.theme = control.dataset.theme;
    }

    if (control.dataset.process) {
      panel.dataset.process = control.dataset.process;
    }

    if (control.dataset.stepControl) {
      panel.dataset.activeStep = control.dataset.stepControl;
    }

    document
      .querySelectorAll(`[data-group="${group}"]`)
      .forEach((button) => button.classList.remove("is-active"));

    control.classList.add("is-active");

    updateContent();

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