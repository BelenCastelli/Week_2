import { Persona } from "./persona";

let persona1 = new Persona("María", 30, "avenida de la Paz, 6")

console.log(persona1);
persona1.printName()
console.log(persona1.yearOfBirth(2023));

persona1.setAddress("Calle sofia,3");
console.log(persona1.getAddress());
