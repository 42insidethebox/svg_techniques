const panel = document.querySelector(".node-panel");
const controls = document.querySelectorAll(".control");
const cards = document.querySelectorAll(".node-card");

const inspectorTitle = document.querySelector("[data-inspector-title]");
const inspectorDetail = document.querySelector("[data-inspector-detail]");
const inspectorAsset = document.querySelector("[data-inspector-asset]");
const preview = document.querySelector("[data-preview]");

function setActiveCard(card) {
  cards.forEach((item) => item.classList.remove("is-active"));
  card.classList.add("is-active");

  inspectorTitle.textContent = card.dataset.title;
  inspectorDetail.textContent = card.dataset.detail;
  inspectorAsset.textContent = card.dataset.asset;

  const icon = card.querySelector(".node-icon").cloneNode(true);
  preview.innerHTML = "";
  preview.append(icon);
}

function applyFilter() {
  const filter = panel.dataset.filter || "all";

  cards.forEach((card) => {
    const shouldShow = filter === "all" || card.dataset.category === filter;
    card.classList.toggle("is-hidden", !shouldShow);
  });

  const activeCard = document.querySelector(".node-card.is-active");
  const activeHidden = activeCard?.classList.contains("is-hidden");

  if (!activeCard || activeHidden) {
    const firstVisible = [...cards].find((card) => !card.classList.contains("is-hidden"));
    if (firstVisible) setActiveCard(firstVisible);
  }
}

cards.forEach((card) => {
  card.addEventListener("click", () => setActiveCard(card));
});

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const group = control.dataset.group;

    if (control.dataset.theme) {
      panel.dataset.theme = control.dataset.theme;
    }

    if (control.dataset.mode) {
      panel.dataset.mode = control.dataset.mode;
    }

    if (control.dataset.filter) {
      panel.dataset.filter = control.dataset.filter;
      applyFilter();
    }

    document
      .querySelectorAll(`[data-group="${group}"]`)
      .forEach((button) => button.classList.remove("is-active"));

    control.classList.add("is-active");
  });
});

applyFilter();
setActiveCard(document.querySelector(".node-card.is-active") || cards[0]);