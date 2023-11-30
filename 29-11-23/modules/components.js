const listsContainerElGen = (title) => {
  const container = document.createElement("div");
  const titleEl = document.createElement("h3");

  container.className = "lists-container";
  titleEl.textContent = title;

  container.append(titleEl);
  return container;
};

const cardsListElGen = () => {
  const container = document.createElement("div");

  container.className = "cards-list";

  return container;
};

const cardElGen = (imageData) => {
  const imageEl = document.createElement("img");

  imageEl.className = "card-item";
  imageEl.src = `https://image.tmdb.org/t/p/w500${imageData.poster_path}`;
  imageEl.alt = imageData.name;

  return imageEl;
};

const navBar = () => {
  const generalContainer = document.createElement("div");
  const search = document.createElement("div");
  const image = document.createElement("img");
  const input = document.createElement("input");
  const links = document.createElement("div");
  const listEl = document.createElement("ul");
  const liel1 = document.createElement("li");
  const liel2 = document.createElement("li");
  const label = document.createElement("label");
  const select = document.createElement("select");
  const option1 = document.createElement("option");

  search.className = "search";
  image.className = "ìmg";
  image.src =
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
  image.alt = "netflix-logo";
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Ricerca...");
  links.className = "links";
  listEl.className = "links-list";
  liel1.textContent = "Tv Shows";
  liel2.textContent = "Movies";
  label.setAttribute("for", "categories");
  label.textContent = "Categories";
  select.setAttribute("name", "categories");
  select.id = "categories";
  option1.value = "categories";

  search.append(image, input);

  select.append(option1);
  listEl.append(liel1, liel2, label, select);
  links.append(listEl);
  generalContainer.append(search, links);

  return generalContainer;
};

export { cardElGen, cardsListElGen, listsContainerElGen, navBar };
