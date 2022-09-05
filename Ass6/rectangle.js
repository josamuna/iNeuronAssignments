/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    1) Perform the following operations to provide the implementation for a Rectangle class. 
    The operations are:
        1. Add an area() method to the Rectangle class.
        2. Create a Square class that satisfies the following conditions:
            ○ It is a subclass of Rectangle.
            ○ It contains a constructor and no other methods.
            ○ It can use the Rectangle class' area method to print the area of a Square object.
*/

"use strict";

class Rectangle {
    constructor(lenght, width) {
        this.lenght = lenght;
        this.width = width;
    }

    area() {
        const area = this.lenght * this.width;
        return area;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
        this.side = side;
    }
}

const rectangle = new Rectangle(4, 6);
const areaRectangle = rectangle.area();
console.log(areaRectangle);

const square = new Square(7);
const areaSquare = square.area();
console.log(areaSquare);