/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    3. Create a functional iterator, with a next function.
*/

"use strict";

let arr = [18, 100, 0, -10, 15, 25, 1, 30, 7, -200]; // Array
let iter = arr[Symbol.iterator](); // Create iterator object
let result = iter.next(); // Position iterator cursor to the first element
console.log(result.value); // Print only the first value because we are not performing loop
