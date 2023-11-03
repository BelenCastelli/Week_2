import { Point } from "./point";

class Triangle {
    vexter1:Point
    vertex2:Point
    vertex3:Point

    constructor(vertex1:Point, vertex2:Point, vertex3:Point){
        this.vexter1 = vertex1
        this.vertex2 = vertex2
        this.vertex3 = vertex3
    }
    calculateLengthSides():number[] {
        let triangleSides:number[] = []
           triangleSides.push(this.vexter1.calculateDistance(this.vertex2),
           this.vertex2.calculateDistance(this.vertex3), this.vertex3.calculateDistance(this.vexter1))
        return triangleSides
    }
}

export {Triangle}