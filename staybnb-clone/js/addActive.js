"use strict";

export default function addActive() {
  const links = document.querySelectorAll(".menu__link");

  if (!links.length) return;

  links[0].classList.add("menu__link--first");

  links.forEach((link) => {
    link.addEventListener("click", () => {

      links.forEach((l) => {
        l.classList.remove("menu__link--active");
        l.classList.remove("menu__link--first");
      });

      link.classList.add("menu__link--active");
    });
  });
}
