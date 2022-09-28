/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    1. Write a JavaScript program to take an array as input from the user and calculate
       the sum of numbers in odd places and the sum of numbers at even places.
        a) Print the difference between the two sums
        b) Print the number of elements in odd places
        c) Print the number of elements in even places
        d) Print the average of all elements in the array
        e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places

        Sample Input:[ 1, 2, 3, 4, 5 ]

        Explanation:
        Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
        Sum of Numbers at Even Places = 2 + 4 = 6
        Difference = 9 - 6 = 3

        Sample Output:
        Difference = 3
        Odd Elements = 3
        Even Elements = 2
        Average = 3
        GCD = 3
*/

"use strict";

let computeOddEvenArray = (arr) => {
  let arrOdd = arr.filter((odd) => odd % 2 === 1); // Filter Odd Numbers
  let arrEven = arr.filter((even) => even % 2 === 0); // Filter Even Numbers

  // Get Odd Number length
  const oddElm = arrOdd.length;
  // Get Even Number length
  const evenElm = arrEven.length;

  // Sum of Numbers at Odd Places
  const sumOdd = arrOdd.reduce((accu, curr) => accu + curr, 0);
  // Sum of Numbers at Even Places
  const sumEven = arrEven.reduce((accu, curr) => accu + curr, 0);

  // Difference between the two sums (Sum of Numbers at Odd Places and Sum of Numbers at Even Places)
  const difference = sumOdd > sumEven ? sumOdd - sumEven : sumEven - sumOdd;

  // The average of all elements in the array
  const average = arr.reduce((accu, curr) => accu + curr, 0) / arr.length;

  // GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places
  let GCD = [];
  const lessGratherThanSum = sumOdd < sumEven ? sumEven : sumOdd;
  for (let i = 2; i <= lessGratherThanSum; i++) {
    if (sumOdd % i === 0 && sumEven % i === 0) {
      // GCD match found
      GCD.push(i);
    }
  }

  // Print values
  console.log("a.Difference================");
  console.log(difference);
  console.log("b.Odd Elements==============");
  console.log(oddElm);
  console.log("c.Even Elements=============");
  console.log(evenElm);
  console.log("d.Average===================");
  console.log(average);
  console.log("e.GCD=======================");
  console.log(GCD.join(","));
};

// Call function
try {
  let arrValues = [1, 2, 3, 4, 5];
  computeOddEvenArray(arrValues);

  computeOddEvenArray(null); // Simulate a error
} catch (error) {
  console.log(`Something went wrong, ${error.message}`);
}
