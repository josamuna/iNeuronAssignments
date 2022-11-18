/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    7). ATM machines allow 4 or 6 digit PIN codes and PIN codes
        cannot contain anything but exactly 4 digits or exactly 6 digits. Your
        task is to create a function that takes a string and returns true if the
        PIN is valid and false if it's not.

        Examples

        validatePIN("1234") ➞ true
        validatePIN("12345") ➞ false
*/

"use strict";

let validatePIN = (pin) => {
  let regex1 = /^[0-9]{4}$/;
  let regex2 = /^[0-9]{6}$/;
  if (regex1.test(pin) || regex2.test(pin)) {
    return true;
  }
  return false;
};

var statusPin = validatePIN("1234"); // true
console.log(statusPin);

statusPin = validatePIN("12345"); // false
console.log(statusPin);

statusPin = validatePIN("123"); // false
console.log(statusPin);

statusPin = validatePIN("7109"); // true
console.log(statusPin);

statusPin = validatePIN("490235"); // true
console.log(statusPin);
