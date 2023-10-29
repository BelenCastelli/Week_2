class Book {
    private title:string
    private nPages:number
    private isbn:string
    private author:string
    private editorial:string

    constructor(title:string, nPages:number, isbn:string, author:string, editorial:string){
        this.title = title
        this.nPages = nPages
        this.isbn = isbn
        this.author = author
        this.editorial =editorial
    }

public getTittle():string {
    return this.title
}
public setTitle(newTitle:string) {
    this.title = newTitle
}
public getnPages():number{
    return this.nPages
}
public setnPages(newPages:number):void {
    this.nPages = newPages
} 
public getIsbn():string{
    return this.isbn
}
public setIsbn(newIsbn):void{
    this.isbn = newIsbn
}

public getAuthor():string {
    return this.author
}
public setAuthor(newAuthor):void {
    this.author = newAuthor
}
public getEditorial():string {
    return this.editorial
}
public setEditorial(newEditorial):void {
    this.editorial = newEditorial
}

public toString():string {
    let string:string = ""
    
    for(let propiedad in this){
    if(typeof this[propiedad] != "function"){
        string += ` ${propiedad} - ${this[propiedad]};`
    }}
    return string
}
}


export {Book}

