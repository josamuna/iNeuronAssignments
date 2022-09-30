/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    1). Create a function that finds the maximum range of a triangle's
        third edge, where the side lengths are all integers.

        Examples
        nextEdge(8, 10) ➞ 17
        nextEdge(5, 7) ➞ 11
        nextEdge(9, 2) ➞ 10

        Notes

        ● (side1 + side2) - 1 = maximum range of third edge.
        ● The side lengths of the triangle are positive integers.
        ● Don't forget to return the result.
*/

"use strict";

// Building function to find maximun range of a triangle's third edge
let maxRangeThirdEdge = (side1, side2) => {
  return side1 + side2 - 1;
};

var thirdEdge = maxRangeThirdEdge(8, 10);
console.log(thirdEdge); // 17

var thirdEdge = maxRangeThirdEdge(5, 7);
console.log(thirdEdge); // 11

var thirdEdge = maxRangeThirdEdge(9, 2);
console.log(thirdEdge); // 10