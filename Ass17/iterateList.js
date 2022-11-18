/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    1. Create a function to iterate over the following list ["John", "Rohn", "Danny", "James"]
*/

"use strict";

let iterateList = (arr) => {
  let iter = arr[Symbol.iterator](); // Create iterator object
  let res = iter.next(); // Position the iterator cursor on the first record of the iterable (Array, Set, Map or String.).

  // If the iterator is not at the end yet, we loop throught it and show values one by one.
  while (!res.done) {
    console.log(res.value);
    res = iter.next();
  }
};

var arrValue = ["John", "Rohn", "Danny", "James"];
var result = iterateList(arrValue);

console.log("===============================");
arrValue = ["Banana", "Apple", "Pineapple", "Mangoe", "Tomato"];
var result = iterateList(arrValue);
