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
}

export {Point}

