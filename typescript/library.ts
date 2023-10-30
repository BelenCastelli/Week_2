import { Book } from "./book";

class Library {

private books:Book []
private address:string
private manager:string

    constructor(books:Book[], address:string, manager:string){
        this.books = books
        this.address = address
        this.manager = manager
    }

public getAddress():string {
    return this.address
}

public setAddress(newAddress):void {
    this.address = newAddress
}

public getManager():string {
    return this.manager
}

public setManager(newManager):void {
    this.manager = newManager
}

public toString():string {
    let string:string = ""
    for(let i = 0; i<this.books.length; i++){
        string += this.books[i].toString()
    }
    return string
    
//     for(let propiedad in this.books){
//    {
//         string += ` ${propiedad} - ${this.books[propiedad]};`
//     }}
//     return string
}

getNumberofBooks():number {

    return this.books.length
}

findbyAuthor (author:string):Book [] {
    let libros:Book [] = []
  for (let i = 0; i <this.books.length; i++){
    if (author == this.books[i].getAuthor()) {
        libros.push(this.books[i])
    }
  }
  return libros
}
}

export {Library}