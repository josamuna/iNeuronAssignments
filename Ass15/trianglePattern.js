/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    4). This Triangular Number Sequence is generated from a pattern of
        dots that form a triangle. The first 5 numbers of the sequence, or
        dots, are:
        1, 3, 6, 10, 15

        This means that the first triangle has just one dot, the second one
        has three dots, the third one has 6 dots and so on.

        Write a function that returns the cumulative sum of the number of
        all the previous (including current) dots when given its
        corresponding triangle number of the sequence.

        Figure: Triangular Number Sequence

        Examples

        triangle(1) ➞ 1
        triangle(6) ➞ 56 (1+3+6+10+15+21)
*/

let sumTriangleSequence = (seq) => {
  let sum = 0;
  let arr = []; // Empty Array
  for (let i = 0, j = i + 1; i < seq; i++, j++) {
    arr.push((sum += j));
    // console.log("==>", sum);
  }
  // Retreive the sum by applying reduce function
  sum = arr.reduce((accu, curr) => accu + curr, 0);
  return sum;
};

var value = sumTriangleSequence(1);
console.log(value);

value = sumTriangleSequence(6);
console.log(value);

value = sumTriangleSequence(10);
console.log(value);

value = sumTriangleSequence(15);
console.log(value);
