import { add } from "./bucles";
import { isEven } from "./condicionales";

let array1: string [] = ["Casa", "Coche", "Ciudad", "Cesta"]
let array2: string [] = ["Barco", "Baca", "Bicicleta", "Balon","Bisiesto", "Brasil"]
let array3: string [] = ["Venezuela", "Veneno", "voltaje"]

let array1Caract: number = add(array1);
console.log(array1Caract);
console.log(isEven(array1Caract));

let array2Caract: number = add(array2);
console.log(array2Caract);
console.log(isEven(array2Caract));

let array3Caract: number = add(array3);
console.log(array3Caract);
console.log(isEven(array3Caract));
