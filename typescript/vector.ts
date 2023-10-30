class Vector {
    
    private elements: number []

    constructor(n:number, k:number){
        this.elements = []
        for (let i = 0; i < n; i++){
            this.elements.push(Math.round(Math.random()*k))
        }

    }

    public print():void {
        console.log(this.elements)
     }    
    public add(v1:Vector):number []{
      let sumVector: number[] = []
      for(let i = 0; i < this.elements.length; i++){
        sumVector.push(this.elements[i] + v1.elements[i])
    }
    return sumVector
}
    public subs(v1:Vector):number[] {
        let subsVector: number [] = []
        for(let i = 0; i < this.elements.length; i++){
            subsVector.push(this.elements[i] - v1.elements[i])
        }
        return subsVector
    }

    public mult(v1:Vector):number []{
        let multVector:number[] = []
        for(let i = 0; i < this.elements.length; i++){
            multVector.push(this.elements[i] * v1.elements[i])
        }
        return multVector
    }

    public multNumber(n:number): number []{
       let multNumberVector = this.elements.map((value) => value * n)
       return multNumberVector
    }
    
}

export {Vector}






