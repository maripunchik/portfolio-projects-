"use strict";

export default function createExclusives(data) {
  return `
	<div class="exclusives__item">
		<a class="exclusives__link" href="house.html?id=${data.id}">
			<img class="exclusives__img" src="${data.image}" alt="${data.title}">
		</a>
		<div class="exclusives__info">
			<h3 class="exclusives__title">${data.title}</h3>
			<p class="exclusives__price">Starts @ <span>${data.price}</span></p>
		</div>
	</div>
	`;
}
