/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    4. Create a generator for multiplying?
       Output -
*/

"use strict";

function* multiply(num1, num2) {
  let result = 0;
  console.log(`${num1} * ${num2} = ?`);
  yield (result = num1 * num2);
  console.log(result);

  console.log(`${num1 + 1} + ${num2 + 1} = ?`);
  yield (result = num1 + 1 + num2 + 1);
  console.log(result);
}

let res = multiply(2, 2);
res.next(); // Show 2 * 2 = ?
res.next(); // Show 4 Result of 2 * 2 and 3 + 3 = ?
res.next(); // Show 6 Result of 3 + 3
console.log(res.next().done); // Show true because the generator has reached the end of his execution
