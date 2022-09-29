/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    3. Write a JavaScript program to iterate over an array inputted by the user using
       mapping. Perform the square of all elements in the original array, store the
       squares in a new array and make a mapping for the squares and display it.

       Sample Input:
       [ 1, 2, 3, 4, 5 ]

       Explanation:
       Original Array = [ 1, 2, 3, 4, 5 ]
       New Array = [ 1, 4, 9, 16, 25 ]
       Mapping = squares => [ 1, 4, 9, 16, 25 ]

       Output:
       [ 1, 4, 9, 16, 25 ]
*/

"use strict";
// Array with number values
let arr = [1, 2, 3, 4, 5];

// Mapping a new array with the square of values of Array arr
let newArr = arr.map((val) => {
  return Math.pow(val, 2);
});

// console.log(newArr);
//Mapping values of two Array in a single Map
let square = new Map();
square.set("num", arr);
square.set("numSquare", newArr);

// Show values of squares using Map's key numSquare
console.log(square.get("numSquare"));