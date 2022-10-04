/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    10). Create a function that takes a string, checks if it has the same
        number of x's and o's and returns either true or false.

        ● Return a boolean value (true or false).
        ● Return true if the amount of x's and o's are the same.
        ● Return false if they aren't the same amount.
        ● The string can contain any character.
        ● When "x" and "o" are not in the string, return true.

        Examples

        XO("ooxx") ➞ true
        XO("xooxx") ➞ false
        XO("ooxXm") ➞ true
        // Case insensitive.

        Notes
        ● Remember to return true if there aren't any x's or o's.
        ● Must be case insensitive.
*/

"use strict";

let XO = (inputString) => {
  let nbrX = 0;
  let nbrO = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString.toLowerCase()[i] === "x") {
      nbrX++;
    } else if (inputString.toLowerCase()[i] === "o") {
      nbrO++;
    }
  }

  if (nbrX === 0 && nbrO === 0) {
    return true;
  } else if (nbrX === nbrO) {
    return true;
  } else {
    return false;
  }
};

var result = XO("ooxx"); // true
console.log(result);

result = XO("xooxx"); // false
console.log(result);

result = XO("ooxXm"); // true
console.log(result);

result = XO("test string"); // true
console.log(result);
