//ESERCIZIO 1
//Creo gli stessi elementi che avevo creato in html ma come costanti

const hero = document.createElement("div");
const heroWrapper = document.createElement("div");
const secondTitle = document.createElement("h2");
const firstTitle = document.createElement("h1");
const paragraph = document.createElement("p");
const btn = document.createElement("button");

// li definisco aggiungendone i contenuti

hero.setAttribute("class", "hero");
heroWrapper.setAttribute("class", "hero-wrapper");
firstTitle.textContent = "Music";
secondTitle.textContent = "Explore your";
paragraph.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit";
btn.textContent = "let me feel";

// li appendo al contenuto esistente, dal contenitore più piccolo al più grande

heroWrapper.append(secondTitle, firstTitle, paragraph, btn);
hero.append(heroWrapper);
document.body.append(hero);

//ESERCIZIO 2
//Aggiungo al mio pulsante un evento di tipo click, in questo caso, al click, l'intera hero deve scomparire
btn.addEventListener("click", () => {
  hero.style.display = "none";
});

//ESERCIZIO 3 - AVANZATO
// creo il contenitore della sezione

const sectionGallery = document.createElement("div");
sectionGallery.setAttribute("class", "section-gallery");
document.body.append(sectionGallery);

//creo il contenitore della gallery
const containerImg = document.createElement("div");
containerImg.setAttribute("class", "container-img");
sectionGallery.append(containerImg);

//creo la suddivisione in colonne della mia sezione
const wrapperImg = document.createElement("div");
wrapperImg.setAttribute("class", "gallery-wrapper");
sectionGallery.append(wrapperImg);

// creo il titolo alla mia sezione gallery
const titleGallery = document.createElement("h3");
titleGallery.setAttribute("class", "h3");
titleGallery.textContent = "Lorem ipsum lorem ipsum";
containerImg.append(titleGallery);

let columImage1 = {
  id: 1,
  imgUrl: "https://source.unsplash.com/random/200x200",
  altText: "Alt text 1",
};

let columImage2 = {
  id: 1,
  imgUrl: "https://source.unsplash.com/random/200x200",
  altText: "Alt text 1",
};

let columImage3 = {
  id: 1,
  imgUrl: "https://source.unsplash.com/random/200x200",
  altText: "Alt text 1",
};

const imgGenerator = (img) => {
  const image = document.createElement("img");
  wrapperImg.appendChild(image);
  image.setAttribute("class", "img");
  image.setAttribute("id", img.id);
  image.setAttribute("src", img.imgUrl);
  image.setAttribute("alt", img.altText);
  return image;
};

imgGenerator(columImage1);
imgGenerator(columImage2);
imgGenerator(columImage3);

//Bandiera bianca
