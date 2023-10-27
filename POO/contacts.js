
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

// module.exports.Contacts = Contacts 
// module.exports.Person = Person
module.exports = {Contacts}
