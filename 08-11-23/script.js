// Esercizio 1:
// STEP 1: dichiaro le operazioni che devo fare tramite le arrow function.

const sum = (num1, num2, num3) => num1 + num2 + num3;
const sub = (num1, num2, num3) => num1 - num2 - num3;
const mult = (num1, num2, num3) => num1 * num2 * num3;
const divide = (num1, num2, num3) => num1 / num2 / num3;

// STEP 2: dichiaro una arrow fuction che utilizzando la callback mi restituisce il valore della funzione, che è anche il suo argomento.

function calculator(callback) {
  return callback;
}
// in alternativa, ho visto da un collega che il secondo step potrebbe essere ancora più breve e cioè:
// const calculator = (fn, num1, num2, num3) =>fn (num1,num2,num3)
// e successivamente invocarle e stamparle con sintassi diversa e cioè:
// console.log(calculator(sum, 2, 3, 4)) quindi togliendo una parentesi. Molto interessante ma senza vederlo non ci sarei mai arrivata da sola. Quindi lascio tutto per come sono riuscita a scirvere da sola.

//STEP 3 invocazione e stampa della calcolatrice
console.log(calculator(sum(2, 3, 4)));
console.log(calculator(sub(2, 3, 4)));
console.log(calculator(mult(2, 3, 4)));
console.log(calculator(divide(2, 3, 4)));

// Esercizio 2:
//step 1: creo un array di oggetti nel carrello

const cart = [
  {
    id: 100,
    name: "product1",
    image: "https://picsum.photos/200/300",
    decription: "questo è il primo prodotto",
  },
  {
    id: 101,
    name: "product2",
    image: "https://picsum.photos/200/400",
    decription: "questo è il secondo prodotto",
  },
  {
    id: 103,
    name: "product3",
    image: "https://picsum.photos/200/500",
    decription: "questo è il terzo prodotto",
  },
];

//step 2: avvio l'iterazione tramite il foreach e inserisco il console log al suo interno per avere un valore stampato altrimenti riceverei un undefined.
// forEach itera la stessa funzione in ogni elemento del mio array e verificando se c è "name" mi stampa tramite console.log il messaggio di esistenza per ogni prodotto.

cart.forEach((element) => {
  console.log(element.name + " il prodotto esiste");
});

//step 3: avvio il map che mi stamperà, tramite il console log, il valore dell'id più la stringa che ho aggiunto

cart.map((element) => {
  console.log(element.id + " anche in questo caso il prodotto esiste!");
});

//Esercizio 3 - Avanzato
// definisco gli array
let trans1 = [3, 4, 5, 6, 7];
let trans2 = [10, 11, 12, 13, 14];

// qui l'ho scritta un passo alla volta, anche perchè non avrei saputo come altro fare.
const multiply = trans1.map((number) => number * 2);
console.log(multiply);

const addition = trans2.map((number) => number + 5);
console.log(addition);

const filter1 = multiply.filter((number) => number > 10);
console.log(filter1);

const filter2 = addition.filter((number) => number % 2 === 0);
console.log(filter2);

// alla fine dell'esercizio ho letto che si doveva usare una funzione che contenesse il tutto, ed è stato veramente facile avendo costruito le funzioni prima.
const transformAndFilter = (trans1, trans2) => {
  const multiply1 = trans1.map((number) => number * 2);
  const addition1 = trans2.map((number) => number + 5);
  const filter1 = multiply1.filter((number) => number > 10);
  const filter2 = addition1.filter((number) => number % 2 === 0);
  return [filter1, filter2]; //ci vuole SEMPRE un return
};
console.log(transformAndFilter(trans1, trans2));
