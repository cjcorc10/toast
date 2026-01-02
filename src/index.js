const ToastService = (() => {
  let container;
  const toasts = [];

  function init() {
    container = document.getElementById("toast-container");

    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    return container;
  }
  function removeToast(toast) {
    if (!toast) return;
    const i = toasts.indexOf(toast);
    if (i > 0) {
      toasts.splice(i, 1);
    }
    toast.remove();
  }

  function create(message = "Success", variant) {
    if (!container) {
      init();
    }
    const toast = document.createElement("article");
    let className;
    switch (variant) {
      case "error":
        className = "toast error show-toast";
        break;
      default:
        className = "toast show-toast";
    }
    toast.className = className;
    toast.innerHTML = `
        ${message}
        <button class="close">x</button>
        `;
    const closeButton = toast.querySelector(".close");
    closeButton.addEventListener("click", () => hide(toast));
    container.appendChild(toast);
    toasts.push(toast);
    return toast;
  }

  function hide(toast) {
    toast.classList.remove("show-toast");
    toast.classList.add("remove-toast");
    toast.addEventListener(
      "animationend",
      () => {
        removeToast(toast);
      },
      { once: true }
    );
  }
  return { create, hide };
})();
const successButton = document.getElementById("success-btn");
const errorButton = document.getElementById("error-btn");

successButton.addEventListener("click", () => {
  ToastService.create();
});
errorButton.addEventListener("click", () => {
  ToastService.create("Something went wrong", "error");
});
