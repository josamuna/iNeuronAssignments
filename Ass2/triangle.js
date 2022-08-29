/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    1. Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene
*/
"use strict";

let chech_triangle = (a, b, c) => {
    if(a === b && b === c) {
        return `triangle with sides ${ a }, ${ b } and ${ c} is equilateral`;
    } else if((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
        return `triangle with sides ${ a }, ${ b } and ${ c} is isoscele`;
    } else {
        return `triangle with sides ${ a }, ${ b } and ${ c} is scalene`;
    }
}

let result = chech_triangle(4, 4, 4); // Equilateral
console.log(result); 
result = chech_triangle(2, 2, 3); // Isoscele
console.log(result); 
result = chech_triangle(2, 5, 5);// Isoscele
console.log(result); 
result = chech_triangle(4, 5, 4); // Isoscele
console.log(result); 
result = chech_triangle(6, 7, 8); // Scalene
console.log(result); 