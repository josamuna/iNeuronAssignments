/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    6. Create a generator that can throw an exception..
*/

"use strict";

function* generatorWithException() {
  let naturalNumber = 10;
  try {
    while (naturalNumber <= 10) {
      yield naturalNumber--;
      console.log(naturalNumber);
      if (naturalNumber < 0) throw new Error("Number should not be negative");
    }
  } catch (error) {
    console.log(`Something went wrong, ${error.message}`);
  }
}

let res = generatorWithException();
setInterval(() => {
  res.next();
}, 500);
