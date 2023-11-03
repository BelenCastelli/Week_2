import { Point } from "./point";
import { Triangle } from "./triangle";

let myPoint: Point = new Point(2,2)
let myPoint2: Point = new Point(6,4)
let myPoint3: Point = new Point(4,6)
let triangle1:Triangle = new Triangle(myPoint,myPoint2,myPoint3)

console.log(triangle1.calculateLengthSides());
