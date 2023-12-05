// Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. -Utilizzare setTimeout per simulare un'operazione asincrona.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ok");
    reject(new Error("Error"));
  }, 2000);
});

myPromise.then((data) => console.log(data)).catch((error) => console.log(error));
