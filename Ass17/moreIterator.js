/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    4. In the following two arrays find which two elements match using iterators.
       Array 1 - ["a", "b", "c", "d"]
       Array 2 - ["e", "f", "g", "h", "a", "i", "j"]

    5. What are the different ways of iterating through an array? demonstrate them.
*/
"use strict";

// 4.
let arr1 = ["a", "b", "c", "d"];
let arr2 = ["e", "f", "g", "h", "a", "i", "j"];

let iter2 = arr2[Symbol.iterator]();

// First element of each Array
let res2 = iter2.next();

let count = 0;
while (!res2.done) {
  // Redeclaring iterator each time to loop for each value
  let iter1 = arr1[Symbol.iterator]();
  let res1 = iter1.next();
  while (!res1.done) {
    // console.log("res1 = ", res1.value, "res2 = ",res2.value);
    if (res1.value === res2.value) {
      console.log(`Match found in two array with value ${res1.value}`);
      count++;
    }

    res1 = iter1.next();
  }
  res2 = iter2.next();
}

if (count === 0) {
  console.log(`No match found in the two Array\n${arr1}\n and\n${arr2}`);
}

// 5.
console.log("====We can iterate on Array in four differents ways=====");
console.log("for of loop, for in loop, foreach loop and Iterator");
let arr3 = ["a", "b", "c", "d"];
console.log("1. Iterate Array with for of loop");

for (let i of arr3) {
  console.log(i);
}

console.log("2. Iterate Array with for in loop");

for (let i in arr3) {
  console.log(arr3[i]);
}

console.log("3. Iterate Array with foreach loop");

arr3.forEach((value) => console.log(value));

console.log("4. Iterate Array using Iterator object");
let iter3 = arr3[Symbol.iterator]();
let res3 = iter3.next();

while (!res3.done) {
  console.log(res3.value);
  res3 = iter3.next();
}
