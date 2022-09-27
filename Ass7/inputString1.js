/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    1. Input a String S, and check its length and if the length is greater than 4, 
    truncate the input String and output the result:
    Input: Ice Output: Ice
    Input: Icecream Output: Icec…
*/

"use strict";

let inputStr = (S) => {
  try {
    let str = S.toString();
    if (str.length > 4) {
      let output = str.slice(0, 4);
      return output;
    } else {
      return str;
    }
  } catch (error) {
    return `Something went wrong, ${error.message}`;
  }
};

var output = inputStr(12);
console.log(output);
var output = inputStr("Ice");
console.log(output);
var output = inputStr("Icecream");
console.log(output);
var output = inputStr(null);
console.log(output);
