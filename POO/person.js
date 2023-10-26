class Person{
    // constructor
    constructor(nombre,apellido,lugarNacimiento) {
        this.nombre=nombre,
        this.apellido=apellido,
        this.lugarNacimiento=lugarNacimiento
        this.yearOfBirth,
        this.hobbies = []
    }
    // Métodos - Calcular IMC,edad y printAll

    calcIMC(peso,altura){
          return (peso/(altura*altura)*10000).toFixed(2)
    }
  
    edad(currentYear,yearOfBirth){
        return currentYear - yearOfBirth
    }

    printAll() {
        for(let propiedad in this) {
            console.log(propiedad + " - " + this[propiedad]);
        }
    }

    printHobbies(hobbies) {
        console.log("Los hobbies son: " + hobbies);
    }
    }
    
    module.exports.Person = Person


