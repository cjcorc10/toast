import ToastService from "./toast.js";
const successButton = document.getElementById("success-btn");
const errorButton = document.getElementById("error-btn");
const success = "success";
const failure = "fail";

success.split("").forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.setProperty("--index", index);
  span.dataset.letter = char;
  span.classList.add("letter");
  successButton.appendChild(span);
});

failure.split("").forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.setProperty("--index", index);
  span.dataset.letter = char;
  span.classList.add("letter");
  errorButton.appendChild(span);
});

successButton.addEventListener("click", () => {
  ToastService.create();
});
errorButton.addEventListener("click", () => {
  ToastService.create("Something went wrong", "error");
});
