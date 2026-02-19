"use strict";

export default function renderSidebar(containerId, template) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Sidebar container "${containerId}" not found`);
    return;
  }

  container.innerHTML=template
}
