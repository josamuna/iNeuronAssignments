/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    3). Write a regular expression that matches only a prime number.
        Numbers will be presented as strings.

        Example

        "7" ➞ true
        "134" ➞ false
*/

"use strict";

// To have a prime number, all characteres chould be also a prime number
// We test that all character match this criteria and that sit
let matchPrimeNumber = (num) => {
  // Match 13579 one or multiple times at the beginning or at the end of string
  let regex = /^[13579]+$/;
  if (regex.test(num.toString())) {
    console.log("True");
  } else {
    console.log("False");
  }
};

matchPrimeNumber(7); // True
matchPrimeNumber(134); // False
matchPrimeNumber(754); // False
matchPrimeNumber(935); // True
matchPrimeNumber(93939775115); // True
