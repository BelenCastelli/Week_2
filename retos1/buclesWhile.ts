// Realizar una función que te devuelva si existe un numero par en el array de números que 
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)

function hasEven(myNums:number[]): boolean {
    let i:number = 0

    while(i < myNums.length)
    {
        if(myNums[i]%2 == 0){ return true
        } 
        i++
    }
   return false
}
let numbs:number[] = [2,5,10,4,19]
let numbs2: number[] = [1,3,5,7,9]
console.log(hasEven(numbs));
console.log(hasEven(numbs2));

// Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)

function starWithM(myNames:string []): boolean{
   let i:number = 0
while(i < myNames.length){
  
    if(myNames[i][0] != ("M")) {
        return false}
    i++
} return true
}
 let names1: string[] = ["María", "Juan", "Carla"]
 let names2: string[] = ["Marcos", "Mercedes", "Mario"]
console.log(starWithM(names1));
console.log(starWithM(names2));


