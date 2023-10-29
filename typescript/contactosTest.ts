import { Persona } from "./persona";
import { Contactos } from "./contactos";


let persona1 = new Persona("María", 30, "avenida de la Paz, 6")
let persona2 = new Persona("Javier", 30, "calle  de los olmos, 45")
let contactos1 = new Contactos

contactos1.people = [persona1, persona2]
console.log(contactos1);

