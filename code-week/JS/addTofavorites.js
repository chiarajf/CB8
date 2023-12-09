const setLocalStorage = () => {
  if (!localStorage.getItem("favorites")) {
    localStorage.setItem("favorites", JSON.stringify([]));
  }
};

const addToFavorites = (obj, starIcon) => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (obj && obj.id) {
    if (favorites.includes(obj.id)) {
      favorites = favorites.filter((id) => id !== obj.id);
      starIcon.classList.remove("favorite");
    } else {
      favorites.push(obj.id);
      starIcon.classList.add("favorite");
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

export { setLocalStorage, addToFavorites };
