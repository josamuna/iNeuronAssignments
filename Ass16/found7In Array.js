/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    9). Create a function that takes an array of numbers and returns
        "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

        Examples

        sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
        // 7 contains the number seven.
        sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
        // None of the items contain 7 within them.
*/
"use strict";

let sevenBoom = (arr) => {
  if (arr.indexOf(7) >= 0) {
    return "Boom!";
  }
  return "there is no 7 in the array";
};

var result = sevenBoom([1, 2, 3, 4, 5, 6, 7]);
console.log(result);

result = sevenBoom([8, 6, 33, 100]);
console.log(result);

result = sevenBoom([12, 7, 7, 14, 21, 7]);
console.log(result);
