/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    2. Write a JavaScript program to take 2 arrays from the user and check if the
       number 4 exists in any of the arrays, or both of the arrays.
       Sample Input 1:
       [ 1, 2, 3, 4, 5 ]
       [ 4, 6, 1, 8, 2 ]

       Output:
       4 in both arrays

       Sample Input 2:
       [ 1, 2, 3, 6, 5 ]
       [ 4, 6, 1, 8, 2 ]

       Output:
       4 in array 2

       Sample Input 3:
       [ 1, 2, 3, 4, 5 ]
       [ 5, 6, 1, 8, 2 ]

       Output:
       4 in array 1
*/

"use strict";

let checkArray = (arr1, arr2) => {
  // Expected value to looking for into two arrays
  const valueLookingFor = 4;
  // Perform task, if indexOf built-in method match value(Index >= 0), value is there, otherwise over here
  if (
    arr1.indexOf(valueLookingFor) >= 0 &&
    arr2.indexOf(valueLookingFor) >= 0
  ) {
    console.log(`${valueLookingFor} is in both arrays`);
  } else if (
    arr1.indexOf(valueLookingFor) >= 0 &&
    arr2.indexOf(valueLookingFor) === -1
  ) {
    console.log(`${valueLookingFor} is in array 1`);
  } else {
    console.log(`${valueLookingFor} is in array 2`);
  }
};

try {
  var arr1 = [1, 2, 3, 4, 5];
  var arr2 = [4, 6, 1, 8, 2];
  checkArray(arr1, arr2);

  var arr1 = [1, 2, 3, 6, 5];
  var arr2 = [4, 6, 1, 8, 2];
  checkArray(arr1, arr2);

  var arr1 = [1, 2, 3, 4, 5];
  var arr2 = [5, 6, 1, 8, 2];
  checkArray(arr1, arr2);

  checkArray(null, arr2); // Simulate error
} catch (error) {
  console.log(`Something went wrong, ${error.message}`);
}
