// Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)

function oddNumbers(num:number):number[] {
    let numImpar:number[] = []
    for (let i = 0; i <= num; i++){
        if(i % 2 !== 0){
             numImpar.push(i)
        }
    }
    return numImpar
}

console.log(oddNumbers(30));

// Realizar una función que como parámetro de entrada reciba un array y como salida
// devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)

function myRevert(myArr:string[]):string [] {
    let arrayRevert: string[] = []
    for (let i = myArr.length -1; i >= 0; i--) {
        arrayRevert.push(myArr[i])
    }return arrayRevert
}

let nombres: string[] = ["María", "Laura", "Carlos", "José"]
console.log(myRevert(nombres));


// Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)

function isRainbow(colors: string []):boolean [] {
let inRainbow:boolean[] = []
for(let i = 0; i < colors.length -1; i++){
    if(colors[i] == "rojo" || colors[i] == "naranja"  || colors[i] == "amarillo"  || colors[i] == "verde" || colors[i] == "azul"  || colors[i] == "violeta") {
     inRainbow.push(true)} 
    else {inRainbow.push(false)}
} 
return inRainbow
}
let colores: string [] = ["amarillo", "naranja", "verde", "blanco", "azul", "negro"]
console.log(isRainbow(colores));

// Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)

function add(myWords: string []):number {
    let sumCaracteres: number = 0
    for(let word of myWords){
        sumCaracteres +=  word.split(" ").join("").length
    }
    return sumCaracteres
}

let words:string[] = ["Hola", "que tal", "mundo"]
console.log(add(words));
