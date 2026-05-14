const panel = document.querySelector(".deployment-panel");
const controls = document.querySelectorAll(".control");

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const group = control.dataset.group;

    if (control.dataset.theme) {
      panel.dataset.theme = control.dataset.theme;
    }

    if (control.dataset.variant) {
      panel.dataset.variant = control.dataset.variant;
    }

    document
      .querySelectorAll(`[data-group="${group}"]`)
      .forEach((button) => button.classList.remove("is-active"));

    control.classList.add("is-active");
  });
});