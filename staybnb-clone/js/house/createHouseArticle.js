"use strict";

export default function createHouseArticle(data) {
  return `
 <a href="house.html?id=${data.id}" class="house-link">
    <article class="house">
      <div class="house__img">
        <img src="${data.image}" alt="${data.title}" loading="lazy">
      </div>

      <div class="house__info">
        <p class="house__location">${data.location}</p>
        <h3 class="house__title">${data.title}</h3>
        <p class="house__details">${data.details}</p>

        <div class="house__rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
          <i class="fa-regular fa-star"></i>
        </div>

        <div class="house__price">
          <p class="house__guests">${data.guests}</p>
          <h4 class="house__cost">${data.cost}<span>/ day</span></h4>
        </div>
      </div>
    </article>
	</a>

  `;
}
