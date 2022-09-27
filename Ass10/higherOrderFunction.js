/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com
*/

"use strict";

/*
    1. Are Higher Order functions and Call back functions the same ? If not, 
       briefly explain about both functions.
       ==> Both are not the same because Call back function are only use as function's argument, 
       but Higher Order function define function can be passed to another function an argument and
       also can be returned (Entire function) as a result.
*/

/*
    2. Is filter a Higher Order function in Javascript ? If yes, why ?
       ==> Yes, because filter take a function criteria to be meet (As a callback) and 
       return a function (As a result of the computation) of array result of criteria. 
*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = arr.filter(function criteria(x) {
  return function result() {
    x > 2;
  };
});
console.log(arr2);

// This is same as

arr2 = arr.filter((x) => x > 2);
console.log(arr2);

/*
    3. Give an example of a Higher Order function and a call back function 
       used in the same program.
 */

/* 
  Function sum which return a function with a result of the sum,
  but the calculation depends on the result of callBack function
  that verified if numbers are even, else return a particular message
 */
function sum(num1, num2, onlyEvenNumber) {
  return function result() {
    if (onlyEvenNumber(num1, num2)) {
      let res = num1 + num2;
      return res;
    } else {
      return "No calculation done!!";
    }
  };
}

// CalBack function body that retur true if all params are even otherwise false
function onlyEvenNumber(num1, num2) {
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    return true;
  } else {
    console.log(`You should provide only even numbers!!`);
  }
  return false;
}

// Call function sum into try catch block because error could occur
try {
  var sumValue = sum(10, 20, onlyEvenNumber); // 30
  console.log(sumValue());

  var sumValue = sum(9, 20, onlyEvenNumber); // No calculation | Non both even
  console.log(sumValue());

  var sumValue = sum(10, 25, onlyEvenNumber); // No calculation | Non both even
  console.log(sumValue());

  var sumValue = sum("-", "v", undefinedFunction); // Error
  console.log(sumValue());
} catch (error) {
  console.log(`Something went wrong, ${error.message}`);
}

/*
    4. Carefully check the example below:
        a) What will be the output of this program ?
           ==> In case we change line 91 with I instead of i, the output shoulde be:
           Hello John
           Hello Tina
           Hello Kale
           Hello Max
           Otherwise, it will rise a error
        b) Which function is a Higher Order function here ?
           ==> argFn(name) is a function used as a callBack function into useFunction() 
           called fn, and useFunction() is a Higher Order Function because it receive a function
           as a argument and it use another function (Even if it not return it) in his body.
 */
const names = ["John", "Tina", "Kale", "Max"];
function useFunction(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);// fn(arr[I]); // Mistake, case sensitive, i is different to I
  }
}
function argFn(name) {
  console.log("Hello " + name);
}
console.log("4.a.============================");
useFunction(names, argFn);



