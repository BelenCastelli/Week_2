import { Book}  from "./book"
import { Library } from "./library"

let book1 = new Book("Intrucción a Javascript", 233, "2344433-BC23333","Joseph Smith", "Now Editicion")
let book2 = new Book("American Gods", 480, "49852873-DA385", "Neil Gaiman", "Norma Editorial")
let book3 = new Book("El nombre del viento", 613, "39474-GP388", "Patrick Rothfuss", "Plaza & Janes")
let book4 = new Book("El camino de los reyes", 1007, "9357878-LO2948", "Brandon Sanderson","Nova")
let book5 = new Book("Palabras radiantes", 1248, "8475837-FP1294", "Brandon Sanderson", "Nova")

let books: Book [] =[book1, book2, book3,book4,book5]
let library1 = new Library(books, "calle olmo, 4", "Carlos Herrera")

library1.setAddress("avenida felicidad, 1")
library1.setManager("Paula García")

console.log(library1.getAddress());
console.log(library1.getManager());
console.log(library1.getNumberofBooks());
console.log(library1.findbyAuthor("Brandon Sanderson"));
console.log(library1.toString());



