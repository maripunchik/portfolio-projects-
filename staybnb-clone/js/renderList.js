"use strict";

export default function renderList(containerId, data, templateFn) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return;
  }

  if (typeof templateFn !== "function") {
    console.error("templateFn must be a function");
    return;
  }

  container.innerHTML = "";

  container.innerHTML = data.length
    ? data.map(templateFn).join("")
    : "<p>No exclusives found</p>";
}
