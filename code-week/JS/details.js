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
  const trailerContainer = document.createElement("div");
  const imageEl = document.createElement("img");
  const titleEl = document.createElement("h2");
  const vote = document.createElement("h3");
  const overview = document.createElement("p");
  const releaseData = document.createElement("p");
  const backButton = document.createElement("button");
  backButton.textContent = "Home";
  backButton.addEventListener("click", function () {
    let details = JSON.parse(localStorage.getItem("details")) || [];
    if (details) {
      localStorage.removeItem("details");

      details = [];
    }
    window.location.href = "index.html";
  });

  containerImage.className = "container-image";
  container.className = "container-detail";
  containerText.className = "container-text";
  overview.className = "paragraph";
  backButton.className = "button";
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
  containerText.append(titleEl, vote, releaseData, overview, backButton);
  container.append(containerImage, containerText);
  body.appendChild(container);
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
