/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

6). Create a function that takes a word and returns true if the word
    has two consecutive identical letters.

    Examples

    doubleLetters("loop") ➞ true
    doubleLetters("yummy") ➞ true
*/

"use strict";

let doubleLetters = (word) => {
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) {
        // Identicals letters founds
        return true;
      }
    }
  }
  return false;
};

var value = doubleLetters("loop");
console.log(value);

value = doubleLetters("yummy");
console.log(value);

value = doubleLetters("dreams");
console.log(value);
