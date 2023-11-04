/* 1 Esercizio Termometro */

function temperature(degree) {
  if (degree <= 10 && degree >= -15) {
    return "freddo";
  } else if (degree >= 23 && degree <= 45) {
    return "caldo";
  } else if (degree > 10 && degree < 23) {
    return "mite";
  } else if (degree <= -16) {
    return "scappa, potresti congelarti!";
  } else if (degree >= 46) {
    return "scappa, potresti scioglierti!";
  }
}
const degree = prompt("Quanti gradi ci sono?");
const answer = temperature(degree);
if (degree >= -15 && degree <= 45) {
  console.log("Fuori il tempo è:", answer);
} else if (degree <= -16 || degree >= 45) {
  console.log("Allarme:", answer);
}

/* Fine 1 Esercizio Termometro */

/* 2 Esercizio Oggetto-persona */

const myself = {
  name: "Chiara",
  surname: "Fell",
  age: "36",
  from: "Palermo",
  birthday: "30/09/87",
  sentence: function () {
    return (
      "Mi chiamo " +
      this.name +
      " " +
      this.surname +
      " ho " +
      this.age +
      " anni, sono nata a " +
      this.from +
      " il " +
      this.birthday
    );
  },
};

console.log(myself.sentence());

/* Fine 2 Esercizio Oggetto-persona */

/* 3 Esercizio Avanzato */

const favorites = [];
function addToFavorites(myFavorite) {
  favorites.push(myFavorite);
}

function showFavorites() {
  return favorites;
}

function deleteFavorites() {
  favorites.splice(2, 1);
}

addToFavorites("Song1");
addToFavorites("Song2");
addToFavorites("Song3");
addToFavorites("Song4");
addToFavorites("Song5");

console.log(showFavorites());

deleteFavorites();
console.log(favorites);
