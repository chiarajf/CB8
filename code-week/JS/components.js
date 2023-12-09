import { httpGET } from "./http.js";

export {
  footer,
  navBar,
  asyncListContainerElGen,
  asyncSliderHeroEl,
  mainSection,
};
import { addToFavorites } from "./addTofavorites.js";

import { readDetails } from "./details.js";

const navBar = () => {
  const wrapperNav = document.createElement("div");
  const search = document.createElement("div");
  const image = document.createElement("img");
  const input = document.createElement("input");

  wrapperNav.className = "navbar";
  search.className = "search";
  image.className = "ìmg";
  image.src = "../../media/logo.png";
  image.alt = "moviesThriller-logo";
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Ricerca...");

  search.append(image, input);
  wrapperNav.append(search);

  return wrapperNav;
};

const heroSliderImageELGen = (obj) => {
  const heroImageContainer = document.createElement("div");
  const overlay = document.createElement("div");
  const image = document.createElement("img");
  const wrapperHeroTitle = document.createElement("div");
  wrapperHeroTitle.className = "hero-title";
  const titleHero = document.createElement("h1");
  const subttileHEro = document.createElement("h3");
  titleHero.textContent = obj.original_title;

  titleHero.style.overflowWrap = "break-word";
  titleHero.style.whiteSpace = "normal";

  heroImageContainer.className = "hero";

  overlay.className = "overlay";

  subttileHEro.textContent =
    "il più apprezzato dagli utenti: " + obj.vote_average;
  heroImageContainer.append(overlay);

  image.className = "img";
  image.src = "https://image.tmdb.org/t/p/original" + obj.backdrop_path;
  image.alt = obj.original_title;
  image.id = obj.vote_average;
  heroImageContainer.className = "hero-image-container";

  wrapperHeroTitle.append(subttileHEro, titleHero);
  heroImageContainer.append(overlay, image, wrapperHeroTitle);
  return heroImageContainer;
};

const asyncSliderHeroEl = async (endpoint) => {
  const data = await httpGET(endpoint);

  const sortedResults = data.results.sort(
    (a, b) => b.vote_average - a.vote_average
  );

  const topThreeResults = sortedResults.slice(0, 3);

  const sliderContainer = document.createElement("div");
  sliderContainer.className = "hero";

  const sliderImageContainer = document.createElement("div");
  sliderImageContainer.className = "hero-slider";

  topThreeResults.forEach((serie) => {
    const heroImageElement = heroSliderImageELGen(serie);
    sliderImageContainer.appendChild(heroImageElement);
  });

  sliderContainer.appendChild(sliderImageContainer);
  let currentIndex = 0;

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % topThreeResults.length;
    updateSlider();
  };

  const updateSlider = () => {
    sliderImageContainer.innerHTML = "";

    const heroImageElement = heroSliderImageELGen(
      topThreeResults[currentIndex]
    );
    sliderImageContainer.appendChild(heroImageElement);
  };

  updateSlider();

  setInterval(nextSlide, 5000);

  sliderContainer.appendChild(sliderImageContainer);

  return sliderContainer;
};

const mainSection = document.createElement("div");
mainSection.className = "mainsection";

const listsContainerElGen = (titleData) => {
  const container = document.createElement("main");
  const wrapper = document.createElement("div");
  const titleEl = document.createElement("h2");

  wrapper.className = "lists-container";
  titleEl.textContent = titleData;

  wrapper.append(titleEl);
  container.append(wrapper);
  return container;
};

const cardsListElGen = () => {
  const container = document.createElement("div");

  container.className = "cards-list";

  return container;
};

const cardElGen = (imageData) => {
  const imageContainer = document.createElement("div");
  const imageEl = document.createElement("img");
  const starIcon = document.createElement("i");

  imageEl.id = imageData.id;
  imageEl.src = "https://image.tmdb.org/t/p/w500" + imageData.poster_path;
  imageEl.alt = imageData.name || imageData.original_title;
  starIcon.className = "fa-regular fa-star";
  imageContainer.className = "container-image";
  starIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    addToFavorites(imageData, starIcon);
  });
  imageContainer.addEventListener("click", () => {
    readDetails(imageData);
    window.location.href = "details.html";
  });
  imageContainer.append(imageEl, starIcon);
  return imageContainer;
};

const asyncListContainerElGen = async (endpoint, title) => {
  const data = await httpGET(endpoint);

  const listContainerEl = listsContainerElGen(title);
  const cardsListEl = cardsListElGen();

  data.results.map((serie) => cardsListEl.append(cardElGen(serie)));

  listContainerEl.append(cardsListEl);

  return listContainerEl;
};

const footer = () => {
  const wrapperFooter = document.createElement("div");

  const ulEl = document.createElement("ul");
  const liEl1 = document.createElement("li");
  const icon1 = document.createElement("img");
  const liEl2 = document.createElement("li");
  const icon2 = document.createElement("img");
  const liEl3 = document.createElement("li");
  const icon3 = document.createElement("img");
  const liEl4 = document.createElement("li");
  const icon4 = document.createElement("img");

  wrapperFooter.className = "footer";
  ulEl.className = "mobile-footer";
  liEl1.className = "li";
  icon1.className = "ìmg home";
  icon1.src = "https://img.icons8.com/ios-glyphs/25/ffffff/home.png";
  icon1.alt = "home";
  liEl2.className = "li";
  icon2.className = "ìmg";
  icon2.src = "https://img.icons8.com/ios-glyphs/30/ffffff/filled-star.png";
  icon2.alt = "favorites";
  liEl3.className = "li";
  icon3.className = "ìmg";
  icon3.src = "https://img.icons8.com/ios-glyphs/30/ffffff/film-reel--v1.png";
  icon3.alt = "movies";
  liEl4.className = "li";
  icon4.className = "ìmg";
  icon4.src = "https://img.icons8.com/ios-glyphs/30/ffffff/user--v1.png";
  icon4.alt = "account";

  icon1.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  if (window.location.href.endsWith("index.html")) {
    icon1.style.backgroundColor = "#da1c5c";
  }

  liEl4.append(icon4);
  liEl3.append(icon3);
  liEl2.append(icon2);
  liEl1.append(icon1);
  ulEl.append(liEl1, liEl2, liEl3, liEl4);
  wrapperFooter.append(ulEl);
  return wrapperFooter;
};
