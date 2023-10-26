let myLib = require("./contacts.js")

let person1 = new myLib.Person("Belén", "Castelli", "Argentina")
let person2 = new myLib.Person("Javier", "Palancar", "España")
let personas = new myLib.Contacts()
personas.anadirPerson(person1)
personas.anadirPerson(person2)
// console.log(personas);
personas.printPersons()