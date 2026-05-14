const panel = document.querySelector(".fragment-panel");
const controls = document.querySelectorAll(".control");
const subtitle = document.querySelector("[data-variant-subtitle]");
const previewTitle = document.querySelector("[data-preview-title]");
const previewCopy = document.querySelector("[data-preview-copy]");
const fragmentCards = document.querySelectorAll("[data-fragment]");

const variantContent = {
  blueprint: {
    subtitle: "Grid léger · arcs blueprint · cadre discret",
    title: "Blueprint texture",
    copy:
      "A calm section background: subtle grid, soft route arcs, low-opacity dots, corner markers, and no important information embedded in the texture.",
    active: "grid",
  },
  footer: {
    subtitle: "Atmosphère footer · routes basses · texture sombre",
    title: "Footer topology",
    copy:
      "A wide atmospheric background for footer or closing sections. It should feel technical without competing with navigation, legal text, or CTAs.",
    active: "routes",
  },
  cluster: {
    subtitle: "Petits clusters · nodes décoratifs · profondeur légère",
    title: "Node cluster",
    copy:
      "Small abstract node groups create technical depth without needing a full diagram. Useful behind cards or in systems sections.",
    active: "cluster",
  },
  fragments: {
    subtitle: "Fragments réutilisables · coins · lignes · points",
    title: "Route fragments",
    copy:
      "Reusable topology pieces: horizontal routes, vertical routes, corner marks, dots, and small path pieces that can be safely cropped.",
    active: "corner",
  },
};

function updateVariantContent() {
  const variant = panel.dataset.variant || "blueprint";
  const content = variantContent[variant];

  subtitle.textContent = content.subtitle;
  previewTitle.textContent = content.title;
  previewCopy.textContent = content.copy;

  fragmentCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.fragment === content.active);
  });
}

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const group = control.dataset.group;

    if (control.dataset.theme) {
      panel.dataset.theme = control.dataset.theme;
    }

    if (control.dataset.variant) {
      panel.dataset.variant = control.dataset.variant;
      updateVariantContent();
    }

    if (control.dataset.density) {
      panel.dataset.density = control.dataset.density;
    }

    document
      .querySelectorAll(`[data-group="${group}"]`)
      .forEach((button) => button.classList.remove("is-active"));

    control.classList.add("is-active");
  });
});

fragmentCards.forEach((card) => {
  card.addEventListener("click", () => {
    fragmentCards.forEach((item) => item.classList.remove("is-active"));
    card.classList.add("is-active");
  });
});

updateVariantContent();