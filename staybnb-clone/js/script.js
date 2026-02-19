"use strict";

import addActive from "./addActive.js";

import openMenu from "./menu-open.js";

import createExclusives from "./exclusives/createExclusives.js";
import { exclusives } from "./exclusives/exclusivesData.js";

import createTrendingPlaces from "./trendingPlaces/createTrendingPlaces.js";
import { trendingPlaces } from "./trendingPlaces/trendingPlacesData.js";

import createHouseArticle from "./house/createHouseArticle.js";
import { houseData } from "./house/houseData.js";

import renderList from "./renderList.js";

import { sidebarData } from "./sidebar/sidebarData.js";
import createSidebar from "./sidebar/createSidebar.js";
import renderSidebar from "./sidebar/renderSidebar.js";


addActive();
openMenu();

const components = [
  { id: "exclusives-container", data: exclusives, template: createExclusives },
  {
    id: "trending-container",
    data: trendingPlaces,
    template: createTrendingPlaces,
  },
  { id: "house-list", data: houseData, template: createHouseArticle },
];

components.forEach(({ id, data, template }) => {
  if (document.getElementById(id)) {
    renderList(id, data, template);
  }
});

renderSidebar("sidebar-container", createSidebar(sidebarData));
