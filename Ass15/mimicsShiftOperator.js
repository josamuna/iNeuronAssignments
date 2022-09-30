/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    2). The right shift operation is similar to floor division by powers of
        two. Write a function that mimics (without the use of >>) the right
        shift operator and returns the result from the two given integers. Try
        to solve this challenge by recursion.
*/

"use strict";

let a = 25; //11001 => 110
let ab = "Ob101001";
let b = 2;
// console.log(a >> b);
// console.log(ab);

// Do the same as operator >> like 5 >> 2 (Shift bits to the right side, here shift two bits from 5 to the right)
// 101 shift two bit = 1
let performShiftOperation = (num1, num2) => {
  //First convert num1 to binary value
  function convertIntToBin() {
    let newNum = num1;
    let strBinary = (num1 % 2).toString();
    while (newNum > 1) {
      newNum = parseInt(newNum / 2);
      strBinary = (newNum % 2) + strBinary;
    }
    return strBinary;
  }

  // Then shift bits to the right side from the return Binary value
  function shiftNumber() {
    let strBinary2 = convertIntToBin();
    let shiftedBinary = Array.from(strBinary2);
    for (let i = 0; i < num2; i++) {
      shiftedBinary.pop();
    }
    return shiftedBinary.join("");
  }

  // Finally, convert the Shifted string to Numeric value
  return function convertBinToInt() {
    let strNumber = shiftNumber();
    let lengthNumber = strNumber.length;
    let numb = 0;

    for (let i = 0; i < strNumber.length; i++) {
      lengthNumber--;
      numb += parseInt(strNumber[i]) * Math.pow(2, lengthNumber);
      // console.log("==>", lengthNumber);
    }
    return numb;
  };
};


// Same computation with only one function
let performShiftOperationOnce = (num1, num2) => {
  let finalValue = 0;
  let numb = num1;
  let shiftedBinary = "";
  let strBinary = (num1 % 2).toString();
  while (numb > 1) {
    numb = parseInt(numb / 2);
    strBinary = (numb % 2) + strBinary; // get Binary value of num1
  }

  shiftedBinary = Array.from(strBinary); // Create a new Array with Binary value of num1

  for (let i = 0; i < num2; i++) {
    shiftedBinary.pop();
  }

  let strNumber = shiftedBinary.join(""); // Convert Binary Array to string value 
  let lengthNumber = strNumber.length;

  // Convert Binary value into a number
  for (let i = 0; i < strNumber.length; i++) {
    lengthNumber--;
    finalValue += parseInt(strNumber[i]) * Math.pow(2, lengthNumber);
  }
  return finalValue;
};

// let convertIntToBin = (number) => {
//   let num = number;
//   let strBinary = (number % 2).toString();
//   while (num > 1) {
//     num = parseInt(num / 2);
//     strBinary = (num % 2) + strBinary;
//   }
//   return strBinary;
// };

// let shiftNumber = (num1, num2) => {
//   let strBinary = convertIntToBin(num1);
//   let shiftedBinary = Array.from(strBinary);
//   for (let i = 0; i < num2; i++) {
//     shiftedBinary.pop();
//   }
//   return shiftedBinary.join("");
// };

// let convertBinToInt = (number)=>{
//     let strNumber = number.toString();
//     let lengthNumber = strNumber.length;
//     let numb = 0;

//     for(let i=0;i<strNumber.length;i++){
//         lengthNumber--;
//         numb+= parseInt(strNumber[i]) * Math.pow(2,lengthNumber);
//         // console.log("==>", lengthNumber);
//     }
//     return numb;
// }

// console.log(convertIntToBin(25));
// console.log(shiftNumber(25, 2));

// var dec = convertBinToInt(shiftNumber(25, 2)); // 25 >> 2 = 6 (110)
// console.log(dec);
// console.log(">>", 25 >>2);

// var dec = convertBinToInt(shiftNumber(50, 3)); // 50 >> 3 = 6 (110)
// console.log(dec);
// console.log(">>", 50 >>3);

// var dec = convertBinToInt(shiftNumber(2500, 6)); // 2500 >> 6 = 39 (100111)
// console.log(dec);
// console.log(">>", 2500 >>6);

// Call performShiftOperation Function that return another function
var val = performShiftOperation(25, 2); // 25 >> 2 = 6 (110)
console.log(val());

var val = performShiftOperation(50, 3); // 50 >> 3 = 6 (110)
console.log(val());

var val = performShiftOperation(2500, 6); // 2500 >> 6 = 39 (100111)
console.log(val());

// Call performShiftOperationOnce Function that return a value
var val = performShiftOperationOnce(25, 2); // 25 >> 2 = 6 (110)
console.log(val);

var val = performShiftOperationOnce(50, 3); // 50 >> 3 = 6 (110)
console.log(val);

var val = performShiftOperationOnce(2500, 6); // 2500 >> 6 = 39 (100111)
console.log(val);
