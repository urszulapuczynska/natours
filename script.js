const navButton = document.querySelector(".navigation__button");
const navEl = document.querySelector(".navigation__background");

navButton.addEventListener("click", function () {
  navEl.classList.toggle("navigation__open");
});
