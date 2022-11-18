/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    1. Write a JavaScript program to get an array from the user and return the:
        a) Sum of all elements in the array using reduce()
        b) Average of all elements in the array using reduce()

        Sample Input:
        [ 1, 2, 3, 4, 5 ]

        Output:
        15
        3
*/

"use strict";

let computeSumAvg = (arrInput) => {
  const sum = arrInput.reduce((accu, curr) => accu + curr);
  const average = sum / arrInput.length;

  console.log(`Sum of values is ${sum} and Average is ${average}`);
};

try {
  let arr = [1, 2, 3, 4, 5];
  computeSumAvg(arr);

  // Simulate an error
  computeSumAvg(null);
} catch (error) {
  console.log(`Something went wrong, ${error.message}`);
}
