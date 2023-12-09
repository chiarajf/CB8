import {
  footer,
  navBar,
  asyncSliderHeroEl,
  asyncListContainerElGen,
  mainSection,
} from "./components.js";

import { setLocalStorage, addToFavorites } from "./addTofavorites.js";

setLocalStorage();
addToFavorites();

const bodyEl = document.querySelector("body");

bodyEl.append(navBar());

asyncSliderHeroEl("80").then((heroSection) => {
  bodyEl.append(heroSection);

  Promise.all([
    asyncListContainerElGen("53", "Thriller"),
    asyncListContainerElGen("27", "Horror"),
    asyncListContainerElGen("80", "Crime"),
  ]).then((promises) => {
    promises.forEach((promise2) => mainSection.append(promise2));

    bodyEl.append(mainSection);

    bodyEl.append(footer());
  });
});
