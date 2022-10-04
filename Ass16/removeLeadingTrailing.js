/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    5). Create a function that takes in a number as a string n and returns
        the number without trailing and leading zeros.

        ● Trailing Zeros are the zeros after a decimal point which don't
        affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
        ● Leading Zeros are the zeros before a whole number which
        don't affect the value (e.g. the first three zeros in 000234 and 000230).
 
        removeLeadingTrailing("230.000") ➞ "230"
        removeLeadingTrailing("00402") ➞ "402"

        Notes
        ● Return a string.
        ● If you get a number with .0 on the end, return the integer value
        (e.g. return "4" rather than "4.0").
        ● If the number is 0, 0.0, 000, 00.00, etc... return "0".
*/

"use strict";

let removeLeadingTrailing = (input) => {
  let res = "";
  let arr = input.split(".");
  // Values with decimal parts
  if (parseInt(arr[0]) === 0 && parseInt(arr[1]) === 0) {
    // Zero
    res = 0;
    return res;
  } else if (
    parseInt(arr[0]) > 0 &&
    parseInt(arr[1]) === 0 &&
    arr[1].length === 1
  ) {
    return (res = arr[0].concat(".0"));
  } else if (
    parseInt(arr[0]) > 0 &&
    parseInt(arr[1]) === 0 &&
    arr[1].length > 1
  ) {
    return (res = parseInt(arr[0]).toString());
  } else if (parseInt(arr[0]) === 0 && parseInt(arr[1]) > 0) {
    return (res = parseFloat(input).toString());
  } else if (arr[0] === "" && parseInt(arr[1]) > 0) {
    return (res = parseFloat("0".concat(".").concat(arr[1])).toString());
  }

  //Part without decimal parts
  res = parseInt(input);
  return res;
};

try {
  var val = removeLeadingTrailing("230.000"); // 230
  console.log(val);

  val = removeLeadingTrailing("00402"); // 402
  console.log(val);

  val = removeLeadingTrailing("000.12"); // 0.12
  console.log(val);

  val = removeLeadingTrailing("0.35000"); // 0.35
  console.log(val);

  val = removeLeadingTrailing("4.0"); // 4.0
  console.log(val);

  val = removeLeadingTrailing(".6"); // 0.6
  console.log(val);

  val = removeLeadingTrailing(".27900"); // 0.6
  console.log(val);

  val = removeLeadingTrailing(.27900); // 0.6
  console.log(val);
} catch (error) {
  console.log(`Something went wrong, ${error.message}`);
}
