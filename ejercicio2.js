//ejercicio 2-parte1

//Ejercicio 1: Si ejecutamos dicho código este inicia en la posicion 1 y no en la 0, por lo tanto este imprime solo
// la letra "k"
// Para solucionarlo, podemos usar un iterador tal como el While

let message = "ok";
let iterator = message[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // retorna los caracteres uno por uno
}

//Ejercicio 2
let numeros = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let getCountdownIterator = numeros[Symbol.iterator]();
let newNumbers = [];
for (let element of getCountdownIterator) {
  newNumbers.push(element);
}
console.log("Counter", newNumbers);
