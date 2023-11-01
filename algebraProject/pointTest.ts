import { Point } from "./point";

let myPoint: Point = new Point(2,6)
let myPoint2: Point = new Point(1,1)

myPoint.setX(3)
console.log(myPoint.getX());

myPoint.setY(2)
console.log(myPoint.getY());

console.log(myPoint.toString());

console.log(myPoint.distanceToOrigin());
console.log(myPoint.calculateDistance(myPoint2));
console.log(myPoint.calcularQuadrant());

