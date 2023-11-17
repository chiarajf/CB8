//ESERCIZIO 1 CREO IL POPUP E LO RENDO VISIVILE DOPO 3.5 SECONDI
//ESERCIZIO AVANZATO INCLUSO

const main = document.createElement("div");
main.className = "main";
document.body.append(main);



const popupTimer = setTimeout(() => {
  const containerPopup = document.createElement("div");
  const containerPopupNo = document.createElement("div");
  const popTitle = document.createElement("h1");
  const popParagraph = document.createElement("p");
  const containerButtons = document.createElement ("div")
  const buttonYes = document.createElement("buttonYes");
  const buttonNot = document.createElement("buttonNot");
  const buttonMaybe = document.createElement("buttonMaybe");
  const popTitleNo = document.createElement("h1");
  const popParagraphNo = document.createElement("p");
  containerPopup.className = "containerPopup";
  containerPopupNo.className = "containerPopupNo";
  popTitle.className = "h1";
  popTitleNo.className = "h1";
  popParagraph.className = "p";
  popParagraphNo.className = "p";
  
  containerButtons.className = "containerButtons";
  buttonYes.className = "button";
  buttonNot.className = "button";
  buttonMaybe.className = "button";
  

  popTitleNo.textContent = "Mi dispiace"
  popTitle.textContent = "Hey tu!";
  popParagraph.textContent = "Sei maggiorenne?";
  popParagraphNo.textContent = "Torna quando sei maggiorenne";
  buttonYes.textContent = "SI";
  buttonNot.textContent = "NO";
  buttonMaybe.textContent = "FORSE";

  containerButtons.append(buttonYes, buttonNot, buttonMaybe);
  containerPopupNo.append(popTitleNo, popParagraphNo)
  containerPopup.append(popTitle, popParagraph,containerButtons);
  document.body.append(containerPopup, containerPopupNo);
  buttonYes.addEventListener("click", () => {
    containerPopup.remove();
    main.style.display = "block";

  });
    buttonNot.addEventListener("click", () => {
      popTitle.remove();
      popParagraph.remove();
      buttonYes.remove();
      buttonNot.remove();
      containerPopup.remove();
      containerPopupNo.style.display = "block";
    });
    buttonMaybe.addEventListener("click",()=>{
      window.open("https://www.treccani.it/vocabolario/maggiorenne/", "_blank");
    })

}, 3500);
//ESERCIZIO 2

const sectionCard = document.createElement("div");
sectionCard.className = "sectionCard";
main.append(sectionCard);


const cardProductGen = (card) => {
  const containerCard = document.createElement("div");
  const imgCard = document.createElement("img");
  const titleCard = document.createElement("h3");
  const descriptionCard = document.createElement("div");
  const priceProduct = document.createElement("p");
  containerCard.className = "containerCard";
  imgCard.className = "imgCard";
  titleCard.textContent = card.title;
  imgCard.src = card.thumbnail;
  imgCard.alt = card.title;
  descriptionCard.className = "descriptionCard";
  priceProduct.textContent = card.price + "$";
  descriptionCard.append(titleCard, priceProduct);
  containerCard.append(imgCard, descriptionCard);

  return containerCard;
};


fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((card) => {
    card.products.map((product) => sectionCard.append(cardProductGen(product)));
  });


