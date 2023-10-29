import {Book} from "./book"

let book1 = new Book("Intrucción a Javascript", 233, "2344433-BC23333","Joseph Smith", "Now Editicion")
console.log(book1.toString());

book1.setTitle("El ritmo de la guerra");
console.log(book1.getTittle());
book1.setnPages(1432)
console.log(book1.getnPages());
book1.setIsbn("28465934-bd-400")
console.log(book1.getIsbn());
book1.setAuthor("Brandon Sanderson");
console.log(book1.getAuthor());
book1.setEditorial("Nova")
console.log(book1.getEditorial());








