/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    3. Input a String S with two words, and replace first word with second word and display the result -
       Input: “Hii Boy” Output: “Boy Hii”
*/

"use strict";

let replaceStr = (S) => {
  try {
    let strArr = S.toString().split(" ");
    const str1 = strArr[1];
    const str2 = strArr[0];
    return str1.concat(" ").concat(str2);
  } catch (error) {
    return `Something went wrong, ${error.message}`;
  }
};

var output = replaceStr("Hii Boy");
console.log(output);
var output = replaceStr("Nice Day");
console.log(output);
