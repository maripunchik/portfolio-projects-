"use strict";

export default function createSidebar(data) {
  const createFilter = (label) => `
	<div class="sidebar__filter">
		<input class="sidebar__filter-input" type="checkbox" value="${label}">
		<p class="sidebar__filter-label">${label} <span class="sidebar__filter-count">(0)</span></p>
	</div>
	`;

  return `
	<div class="sidebar">
		<h2 class="sidebar__title">Select Filters</h2>
		<h3 class="sidebar__subtitle">Property Type</h3>
      ${data.propertyTypes.map(createFilter).join("")}
		<h3 class="sidebar__subtitle">Amenities</h3>
      ${data.amenities.map(createFilter).join("")}
		<a class="sidebar__link" href="#">View More</a>
	</div>

	`;
}
