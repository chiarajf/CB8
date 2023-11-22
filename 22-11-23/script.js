//ESERCIZIO 1

const asyncFetch = async() =>{
    const res = await fetch("https://picsum.photos/v2/list") ;
    const data = await res.json();
    const filterImg = data.map((image) => console.log(image.download_url));
    return filterImg
}

asyncFetch();


// ESERCIZIO 2

const object = {
  id: "0",
  author: "Alejandro Escamilla",
  download_url: "https://picsum.photos/id/0/5000/3333",
};

const createImgTxt = (obj) =>{
    const container = document.createElement ("div");
    const img = document.createElement("img");
    const txt = document.createElement("h1");

    img.src = obj.download_url;
    txt.textContent = obj.author;

    container.append(img, txt)

    return container;
}

document.body.appendChild(createImgTxt(object))

//AVANZATO

const secondFetch = async () => {
  const res = await fetch("https://picsum.photos/v2/list");
  const data = await res.json();

  return data;
};

const allImage = async()=>{
    const data = await secondFetch();
    data.forEach((object) =>{
        const card = createImgTxt(object);
        document.body.append(card)
    })
}
allImage()
