// let myLib = require("./contacts.js")
import {Contacts} from "./contacts"

let person1 = new myLib.Person("Belén", "Castelli", "Argentina")
let person2 = new myLib.Person("Javier", "Palancar", "España")
let personas = new myLib.Contacts()
personas.persons = [person1, person2]
personas.anadirPerson(person1)
personas.anadirPerson(person2)
console.log(personas.persons);
personas.printPersons()