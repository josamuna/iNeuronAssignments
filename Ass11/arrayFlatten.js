/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
       array.
       Note: Do not use array.flat();

       Sample Input:
       [ 1, 2, [ 3, 4, [ 5 ] ] ]

       Output:
       [ 1, 2, 3, 4, 5 ]
*/

"use strict";

let flatArray = (inputArr) => {
  let flatenArray = [];

  // To flat the array, we loop on it an each time the element size is >= 1
  // util we reach a deep of three (Three loops, mean three nested Array)
  inputArr.forEach((val) => { // First loop
    if (val.length >= 1) {
      val.forEach((val2) => { // Second loop
        if (val2.length >= 1) {
          val2.forEach((val3) => { // Third loop
            flatenArray.push(val3); // Adding element into the flat Array
          });
        } else {
          flatenArray.push(val2); // Adding element into the flat Array
        }
      });
    } else {
      flatenArray.push(val); // Adding element into the flat Array
    }
  });
  return flatenArray; 
};

try {
  var resultArr = flatArray([1, 2, [3, 4, [5]]]);
  console.log(resultArr);

  var resultArr = flatArray([1, 2, [3, 4, null]]);
  console.log(resultArr);
} catch (error) {
  console.log(`Something went wrong, ${error.message}`);
}
