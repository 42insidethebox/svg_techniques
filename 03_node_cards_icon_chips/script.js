const lab = document.querySelector(".node-lab");
const controls = document.querySelectorAll(".control");
const cards = document.querySelectorAll(".node-card");

const selectedTitle = document.querySelector("[data-selected-title]");
const selectedDescription = document.querySelector("[data-selected-description]");

const nodeDescriptions = {
  api: "Core service node used as the central routing object in architecture diagrams.",
  dns: "Domain and routing node used to represent entry points, DNS, SSL, and traffic direction.",
  vps: "Hosting node used for servers, VPS instances, containers, and deployment targets.",
  crm: "Business data node used for clients, contacts, accounts, and operational records.",
  automation: "Workflow node used for jobs, automations, triggers, scheduled tasks, and integrations.",
  website: "Presentation node used for websites, content layers, landing pages, and public interfaces.",
  backup: "Continuity node used for storage, snapshots, backup plans, and recovery flows.",
  monitoring: "Operations node used for health checks, uptime, alerting, logs, and supervision.",
};

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const group = control.dataset.group;

    if (control.dataset.theme) {
      lab.dataset.theme = control.dataset.theme;
    }

    if (control.dataset.density) {
      lab.dataset.density = control.dataset.density;
    }

    document
      .querySelectorAll(`[data-group="${group}"]`)
      .forEach((button) => button.classList.remove("is-active"));

    control.classList.add("is-active");
  });
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const node = card.dataset.node;
    const title = card.querySelector("strong")?.textContent || node;

    cards.forEach((item) => item.classList.remove("is-active"));
    card.classList.add("is-active");

    selectedTitle.textContent = title;
    selectedDescription.textContent = nodeDescriptions[node] || "Reusable infrastructure node.";
  });
});