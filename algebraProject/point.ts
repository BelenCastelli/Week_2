class Point {
    private x:number
    private y:number

    constructor(x:number, y:number){
        this.x=x
        this.y=y
    }
    public getX():number {
        return this.x  
    } 

    public setX(newX:number):void {
       this.x = newX 
    }

    public getY():number {
        return this.y
    }

    public setY(newY:number):void {
        this.y = newY
    }

    public toString():string {
        return `${this.x},${this.y}`
    }

    public distanceToOrigin():number {
        return Math.sqrt(Math.pow(this.x, 2) + (Math.pow(this.y, 2)))
    }

    public calculateDistance(anotherPoint:Point): number {
        
        return Math.sqrt(Math.pow((anotherPoint.x - this.x),2) + Math.pow((anotherPoint.y - this.y),2))
    }

    public calcularQuadrant(): number {
        let cuadrante: number = this.x == 0 || this.y == 0 ? 0 : 
                                this.x > 0 && this.y > 0 ? 1 :
                                this.x < 0 && this.y > 0 ? 2 :
                                this.x < 0 && this.y < 0 ? 3 :
                                this.x > 0 && this.y < 0 ? 4 :
                                99
                                
        //  if (this.x == 0 || this.y == 0){
        //      return cuadrante = 0
        // } else if(this.x > 0 && this.y > 0){
        //     return cuadrante = 1
        // } else if(this.x < 0 && this.y > 0) {
        //     return cuadrante = 2
        // } else if(this.x < 0 && this.y < 0){
        //     return cuadrante = 3
        // } else if(this.x > 0 && this.y < 0) {
        //     return cuadrante = 4
        // }
        return cuadrante
    
}
}

export {Point}

