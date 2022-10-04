/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    8). Create a function that determines whether a string is a valid hex
        code. A hex code must begin with a pound key # and is exactly 6
        characters in length. Each character must be a digit from 0-9 or an
        alphabetic character from A-F. All alphabetic characters may be
        uppercase or lowercase.

        Examples

        isValidHexCode("#CD5C5C") ➞ true
        isValidHexCode("#EAECEE") ➞ true
        isValidHexCode("#CD5C&C") ➞ false
*/
"use strict";

let isValidHexCode = (hex) => {
  let regex = /^#[0-9\w]{6}$/; // Same to /^#[0-9a-zA-Z]{6}$/
  if (regex.test(hex)) {
    return true;
  }
  return false;
};

var hexadecimalValue = isValidHexCode("#CD5C5C"); // true
console.log(hexadecimalValue);

hexadecimalValue = isValidHexCode("#EAECEE"); // true
console.log(hexadecimalValue);

hexadecimalValue = isValidHexCode("#CD5C&C"); // false
console.log(hexadecimalValue);
