/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    5. Print an infinite series of natural numbers using a generator.
*/

"use strict";

function* infiniteNaturalNumbers() {
  let naturalNumber = 1;

  while (true) {
    yield console.log(naturalNumber++);
  }
}

let naturalNumber = infiniteNaturalNumbers();

// The generator function will be called infinitely with a delay of one 500millisecond until the program is cancelled manually
setInterval(() => {
    naturalNumber.next();
}, 500);
