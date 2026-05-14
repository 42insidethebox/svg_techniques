const panel = document.querySelector(".pricing-panel");
const controls = document.querySelectorAll(".control");
const focusTitle = document.querySelector("[data-focus-title]");
const focusCopy = document.querySelector("[data-focus-copy]");

const focusContent = {
  standard: {
    title: "Standard",
    copy:
      "Pour un site professionnel clair, livré proprement, sans transformer un besoin simple en projet logiciel.",
  },
  consulting: {
    title: "Consulting",
    copy:
      "Pour cadrer une décision technique, débloquer une situation ou éviter de lancer le mauvais projet.",
  },
  systems: {
    title: "Systems",
    copy:
      "Pour les besoins qui dépassent le site vitrine: architecture, opérations, automatisation et continuité.",
  },
};

function updateFocusCopy() {
  const focus = panel.dataset.focus || "standard";
  const content = focusContent[focus];

  focusTitle.textContent = content.title;
  focusCopy.textContent = content.copy;
}

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const group = control.dataset.group;

    if (control.dataset.theme) {
      panel.dataset.theme = control.dataset.theme;
    }

    if (control.dataset.focus) {
      panel.dataset.focus = control.dataset.focus;
      updateFocusCopy();
    }

    document
      .querySelectorAll(`[data-group="${group}"]`)
      .forEach((button) => button.classList.remove("is-active"));

    control.classList.add("is-active");
  });
});

updateFocusCopy();