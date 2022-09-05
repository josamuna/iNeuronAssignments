/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    3) Write a JavaScript program which accept a number as input in the function 
    parameter and insert dashes (-) between each two even numbers.
    For example if you accept 025468 as the output should be 0-254-6-8.
    computeDash(025468) -> 0-254-6-8.
*/

"use strict";

function computeDash(input) {
    let str = "";
    for(let i = 0; i < input.length; i++) {
        for(let j = i + 1; j <= i + 1; j ++)  {
            if(input[i] % 2 === 0 && input[j] % 2 === 0 && i < input.length - 1) {
                str += input[i] + "-";
            } else {
                str += input[i];
            }
        }
    }  

    return str;
}

var str = computeDash("025468");
console.log(str);
var str = computeDash("85067426");
console.log(str);
var str = computeDash("12678102964201");
console.log(str);
