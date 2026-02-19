"use strict";

export default function openMenu() {
  const navBar = document.getElementById("navBar");
  const toggleIcon = document.querySelector(".nav__burger");

  if (!navBar || !toggleIcon) return;

  toggleIcon.addEventListener("click", () => {
    navBar.classList.toggle("nav--open");
  });
}
