
class Persona {
    // Declaración de atributos o propiedades

    public name:string
    public age:number
    private address:string

    // Implementación del método constructor

    constructor(name:string, age:number, address: string) {
        this.name = name
        this.age = age
        this.address = address
    }

    // Implementación de los métodos PrintName, yearOfBirth,setAdress, getAdress

public printName():void {
    console.log(this.name);
}

public yearOfBirth(currentYear:number):number {
    return currentYear - this.age
}

public getAddress():string {
    return this.address;
    
}
public setAddress(address:string):void {
    this.address = address
}
}

export {Persona}