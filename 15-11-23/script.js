// ESERCIZIO AVANZATO
//creo il contenitor del menu
const nav = document.createElement("div");
nav.className = "nav";
const firstTitle = document.createElement("h1");
firstTitle.textContent = "Asimov Shop";
const iconSearch = document.createElement("a");
iconSearch.className = "fa-solid fa-magnifying-glass";
const iconTrash = document.createElement("a");
iconTrash.className = "fa-solid fa-trash";
const secondNav = document.createElement("div");
secondNav.className = "secondNav";
const iconRobot = document.createElement("a");
iconRobot.className = "fa-solid fa-robot";
const inconAndroid = document.createElement("a");
inconAndroid.className = "fa-brands fa-android";
const inconMicro = document.createElement("a");
inconMicro.className = "fa-solid fa-microchip";
const inconAndroid1 = document.createElement("a");
inconAndroid1.className = "fa-brands fa-android";
const iconRobot1 = document.createElement("button");
iconRobot1.className = "fa-solid fa-microchip";

secondNav.append(
  iconRobot,
  inconAndroid,
  inconMicro,
  inconAndroid1,
  iconRobot1
);
nav.append(firstTitle, iconTrash, iconSearch);
document.body.append(nav, secondNav);

//Esercizio 1 - Asimov Robot Shop

const robotMeta = [
  {
    id: 1,
    name: "Robbie",
    price: 1600,
    imgUrl: " https://robohash.org/robbie",
  },
  {
    id: 2,
    name: "Speedy",
    price: 1600,
    imgUrl: " https://robohash.org/speedy",
  },
  {
    id: 3,
    name: "Cutie",
    price: 1600,
    imgUrl: " https://robohash.org/cutie",
  },
  {
    id: 4,
    name: "Dave",
    price: 1600,
    imgUrl: " https://robohash.org/dave",
  },
];

//Creazione elementi Esterni alla card

const main = document.createElement("div");
const sectionLaw = document.createElement("div");
const titleLaw = document.createElement("h1");
const law1 = document.createElement("p");
const law2 = document.createElement("p");
const law3 = document.createElement("p");
const sectionRobot = document.createElement("div");

//li definisco e ne aggiungo i contenuti
main.className = "main";
sectionLaw.className = "law";
titleLaw.className = "titleLaw";
law1.className = "law1";
law2.className = "law2";
law3.className = "law2";
sectionRobot.className = "robot";
titleLaw.textContent = "Leggi della robotica";
law1.textContent =
  "1 - Un robot non può recar danno a un essere umano né può permettere che, a causa del suo mancato intervento, un essere umano riceva danno.";
law2.textContent =
  "2 - Un robot deve obbedire agli ordini impartiti dagli esseri umani, purché tali ordini non vadano in contrasto alla Prima Legge.";
law3.textContent =
  "3 - Un robot deve proteggere la propria esistenza, purché la salvaguardia di essa non contrasti con la Prima o con la Seconda Legge.";

//li appendo al body
sectionLaw.append(titleLaw, law1, law2, law3);
main.append(sectionLaw, sectionRobot);
document.body.append(main);

// ora creo la mia funzione che contiene le card e gli elementi che la compongono. E applico il try and catch anche se non mi darà alcun errore a meno che non scriva male la funzione e quindi sbagli l'esercizio

try {
  const robotGen = (roboData) => {
    const containerRobot = document.createElement("div");
    const imgRobot = document.createElement("div");
    const heartEl = document.createElement("i");
    const cartEl = document.createElement("i");
    const imgEl = document.createElement("img");
    const wrapperRobot = document.createElement("div");
    const titleRobot = document.createElement("h3");
    const detail = document.createElement("div");
    const subTitleRobot = document.createElement("h4");
    const titleType = document.createElement("h5");
    const button = document.createElement("a");

    containerRobot.className = "containerRobot";
    imgRobot.className = "imgRobot";
    wrapperRobot.className = "wrapperRobot";
    titleRobot.className = "titleRobot";
    detail.className = "detail";
    subTitleRobot.className = "subTitleRobot";
    titleType.className = "titleType";
    button.className = "button";
    heartEl.className = "fa-sharp fa-solid fa-heart";
    cartEl.className = "fa-solid fa-cart-plus";

    containerRobot.append(imgRobot, wrapperRobot, heartEl, cartEl);
    imgRobot.append(imgEl);
    wrapperRobot.append(detail);
    detail.append(subTitleRobot, titleType, button);
    imgEl.src = roboData.imgUrl;
    imgEl.alt = roboData.name;
    titleRobot.textContent = roboData.name;
    subTitleRobot.textContent = "Tipologia:";
    titleType.textContent = roboData.name;
    button.textContent = roboData.price;
    iconTrash.addEventListener("click", () => {
      containerRobot.style.display = "none";
    });
    iconRobot.addEventListener("click", () => {
      containerRobot.style.display = "";
    });
    return containerRobot;
  };

  robotMeta.map((roboData) => sectionRobot.appendChild(robotGen(roboData)));
} catch (error) {
  console.log(
    "Niente, tanto questo errore non lo vedrai mai, serve solo a farti capire che ho capito come si usa"
  );
}
