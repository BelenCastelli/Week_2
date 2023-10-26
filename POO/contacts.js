class Person{
    // constructor
    constructor(nombre,apellido,lugarNacimiento) {
        this.nombre=nombre,
        this.apellido=apellido,
        this.lugarNacimiento=lugarNacimiento
        this.yearOfBirth,
        this.hobbies = []
    }
    PrintPerson() {
        for(let propiedad in this) {
            console.log(propiedad + "es " + this[propiedad]);
        }
    }
}

class Contacts {
    constructor() {
        this.persons = []
     
}

anadirPerson(person) {
    this.persons.push(person)
}
printPersons(){
    for(let person of this.persons) {
        console.log(person)
    }
}
}

module.exports.Contacts = Contacts 
module.exports.Person = Person

