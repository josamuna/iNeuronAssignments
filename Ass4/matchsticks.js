/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    Create a function that takes a number (step) as an argument and returns the number of matchsticks 
    in that step. See step 1, 2 and 3 in the image above. Take input from the user in the function 
    parameter and return the output using the return statement.
    examples:
    matchHouses(1) ➞ 6
    matchHouses(4) ➞ 21
    matchHouses(87) ➞ 436
*/

"use strict";

function matchHouse(step) {
    let init = 6;
    return init += ((step - 1) * 5);
}

var matchsticks = matchHouse(1);
console.log(matchsticks);
var matchsticks = matchHouse(2);
console.log(matchsticks);
var matchsticks = matchHouse(3);
console.log(matchsticks);
var matchsticks = matchHouse(4);
console.log(matchsticks);
var matchsticks = matchHouse(87);
console.log(matchsticks);