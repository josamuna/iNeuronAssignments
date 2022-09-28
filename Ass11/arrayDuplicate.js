/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    4. Write a JavaScript program to take an array as input from the user and:
       a) Store all duplicate elements in a separate array
       b) Remove the duplicate elements from the original array

       Sample Input:
       [ 1, 2, 3, 2, 3, 4, 5 ]

       Output:
       Duplicate Elements = [ 2, 3 ]
       Array without duplicate elements = [ 1, 2, 3, 4, 5 ]
*/

"use strict";

let handleDuplicate = (inputArray) => {
  let duplicate = [];
  // Loop twice an comparare each elementto found duplicate element and add them in a other Array (duplicate)
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = i + 1; j < inputArray.length; j++) {
      if (inputArray[i] === inputArray[j]) {
        // Same value found
        duplicate.push(inputArray[i]);
      }
    }
  }

  // Removing duplicate values in the original Array using indexOf() Array's built-in method
  for (let val of duplicate) {
    inputArray.splice(inputArray.indexOf(val), 1);
  }

  console.log("Duplicate Elements = ");
  console.log(duplicate);
  console.log("Array without duplicate elements = ");
  console.log(inputArray);
};

try {
  var arr = [1, 2, 3, 2, 3, 4, 5];
  handleDuplicate(arr);

  var arr = [1, 2, 3, 4, 2, 3, 4, 5, 1, 5, 6, 8, 9];
  handleDuplicate(arr);

  handleDuplicate(null);
} catch (error) {
  console.log(`Something went wrong, ${error.message}`);
}
