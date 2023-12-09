const setLocalStorageForDetails = () => {
  if (!localStorage.getItem("details")) {
    localStorage.setItem("details", JSON.stringify([]));
  }
};

const readDetails = (obj) => {
  let details = JSON.parse(localStorage.getItem("details")) || [];

  if (obj && obj.id) {
    if (details.some((detail) => detail.id === obj.id)) {
      details = details.filter((detail) => detail.id !== obj.id);
    } else {
      details.push(obj);
    }
    localStorage.setItem("details", JSON.stringify(details));
  }
};

const createElementFromDetail = (data) => {
  const body = document.body;
  const container = document.createElement("div");
  const containerImage = document.createElement("div");
  const containerText = document.createElement("div");
  const wrapperFooter = document.createElement("div");

  const ulEl = document.createElement("ul");
  const liEl1 = document.createElement("li");
  const icon1 = document.createElement("img");

  const liEl3 = document.createElement("li");
  const icon3 = document.createElement("img");
  const liEl4 = document.createElement("li");
  const icon4 = document.createElement("img");

  wrapperFooter.className = "footer";
  ulEl.className = "mobile-footer";
  liEl1.className = "li";
  icon1.className = "home";
  icon1.src = "https://img.icons8.com/ios-glyphs/25/ffffff/home.png";
  icon1.alt = "home";
  liEl3.className = "li";
  icon3.className = "movie";
  icon3.src = "https://img.icons8.com/ios-glyphs/30/ffffff/film-reel--v1.png";
  icon3.alt = "movies";
  liEl4.className = "li";
  icon4.className = "account";
  icon4.src = "https://img.icons8.com/ios-glyphs/30/ffffff/user--v1.png";
  icon4.alt = "account";

  icon1.addEventListener("click", function () {
    let details = JSON.parse(localStorage.getItem("details")) || [];
    if (details) {
      localStorage.removeItem("details");

      details = [];
    }
    window.location.href = "main.html";
  });

    const currentPage = window.location.pathname;
  if (currentPage.includes("details.html")) {
    icon3.style.backgroundColor = "#da1c5c";
  }

  liEl4.append(icon4);
  liEl3.append(icon3);
  liEl1.append(icon1);
  ulEl.append(liEl1, liEl3, liEl4);
  wrapperFooter.append(ulEl);
  const imageEl = document.createElement("img");
  const titleEl = document.createElement("h2");
  const vote = document.createElement("h3");
  const overview = document.createElement("p");
  const releaseData = document.createElement("p");
  const backButton = document.createElement("button");

  containerImage.className = "container-image";
  container.className = "container-detail";
  containerText.className = "container-text";
  imageEl.id = data.id;
  imageEl.src = "https://image.tmdb.org/t/p/original" + data.backdrop_path;
  imageEl.alt = data.name || data.original_title;
  titleEl.textContent = data.original_title;
  overview.textContent = data.overview;
  vote.textContent = "Indice di gradimento : " + data.vote_average;
  releaseData.textContent = data.release_date;
  overview.style.overflowWrap = "break-word";
  overview.style.whiteSpace = "normal";

  containerImage.append(imageEl);
  containerText.append(titleEl, vote, releaseData, overview);
  container.append(containerImage, containerText, wrapperFooter);
  body.append(container);
};

export { readDetails, createElementFromDetail };

document.addEventListener("DOMContentLoaded", function () {
  setLocalStorageForDetails();

  const isDetailsPage = window.location.pathname.includes("details.html");

  if (isDetailsPage) {
    const storedDetails = JSON.parse(localStorage.getItem("details")) || [];

    const firstDetail = storedDetails[0];
    createElementFromDetail(firstDetail);
  }
});
