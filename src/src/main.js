import ToastService from "./toast.js";
const successButton = document.getElementById("success-btn");
const errorButton = document.getElementById("error-btn");

successButton.addEventListener("click", () => {
  ToastService.create();
});
errorButton.addEventListener("click", () => {
  ToastService.create("Something went wrong", "error");
});
