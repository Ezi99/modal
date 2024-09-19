"use strict";
const overlayElement = document.querySelector(".overlay.hidden");
const hiddenModalElement = document.querySelector(".modal.hidden");
const modalButtons = document.querySelectorAll(".show-modal");
const closeHiddenModalButton = document.querySelector(".close-modal");

const closeHiddenModal = function () {
  hiddenModalElement.classList.add("hidden");
  overlayElement.classList.add("hidden");
};

for (let i = 0; i < modalButtons.length; i++) {
  modalButtons[i].addEventListener("click", function () {
    hiddenModalElement.classList.remove("hidden");
    overlayElement.classList.remove("hidden");
  });
}

overlayElement.addEventListener("click", closeHiddenModal);
closeHiddenModalButton.addEventListener("click", closeHiddenModal);

document.addEventListener("keydown", function (event) {
  const hiddenModalClassList = hiddenModalElement.classList;

  if (event.key === "Escape" && !hiddenModalClassList.contains("hidden")) {
    closeHiddenModal();
  }
});
