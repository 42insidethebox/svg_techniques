const panel = document.querySelector(".kit-panel");
const controls = document.querySelectorAll(".control");
const assetCards = document.querySelectorAll(".asset-card");

const subtitle = document.querySelector("[data-view-subtitle]");
const previewTitle = document.querySelector("[data-preview-title]");
const previewCopy = document.querySelector("[data-preview-copy]");
const previewFile = document.querySelector("[data-preview-file]");

const viewContent = {
  inventory: "Approved assets · strict naming · reusable components",
  usage: "Website · proposals · brochures · client variants",
  export: "SVG source · PNG export · documentation checklist",
};

function setActiveAsset(card) {
  assetCards.forEach((item) => item.classList.remove("is-active"));
  card.classList.add("is-active");

  previewTitle.textContent = card.dataset.title;
  previewCopy.textContent = card.dataset.copy;
  previewFile.textContent = card.dataset.file;
}

assetCards.forEach((card) => {
  card.addEventListener("click", () => setActiveAsset(card));
});

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const group = control.dataset.group;

    if (control.dataset.theme) {
      panel.dataset.theme = control.dataset.theme;
    }

    if (control.dataset.view) {
      panel.dataset.view = control.dataset.view;
      subtitle.textContent = viewContent[control.dataset.view];
    }

    document
      .querySelectorAll(`[data-group="${group}"]`)
      .forEach((button) => button.classList.remove("is-active"));

    control.classList.add("is-active");
  });
});

setActiveAsset(document.querySelector(".asset-card.is-active") || assetCards[0]);