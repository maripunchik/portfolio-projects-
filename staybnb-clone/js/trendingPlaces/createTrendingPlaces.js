"use strict";

export default function createTrendingPlaces(data) {
	return `
		<div class="trending__item">
		   <div class="trending__img-wrapper">
			   <img class="trending__img" src="${data.image}" alt="${data.title}">
			</div>
			<h3 class="trending__title">${data.title}</h3>
		</div>
	`;
}