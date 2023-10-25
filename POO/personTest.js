let myLib = require("./person")



let persona1 = new myLib.Person("Belén", "Castelli", "Argentina")
console.log(persona1.calcIMC(45,153));
console.log(persona1.edad(2023, 1995));
persona1.printAll()
persona1.printHobbies(["leer", "videojuegos"])