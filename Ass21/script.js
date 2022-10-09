/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com
*/

"use strict";
// 1. Select an <h2> tag with id of text and change its inner text to "Hello World".
let h2Text = document.querySelector("#text");
h2Text.innerHTML = "Hello World";

/* 2. Apply following style to the same h2 using Javascript DOM Method.
    colour: red,
    fontWeight: bold,
    textTransform: uppercase
*/
h2Text.style.color = "red";
h2Text.style.fontWeight = "bold";
h2Text.style.textTransform = "uppercase";

/*
3. Create a simple calculator that takes the input from
    input1, input 2 and add them together.
*/

// Get input fields references
const addCalculator = document.querySelector("#calculatorAdd");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const addResult = document.querySelector("#addResult");

addCalculator.addEventListener("click", () => {
  try {
    // Converting strinf into Number
    const n1 = Number(input1.value);
    const n2 = Number(input2.value);
    console.log(isNaN(n1), isNaN(n2));
    if (isNaN(n1) || isNaN(n2)) {
      addResult.value = "Result";
      throw new Error("Input values should be valid numbers");
    } else {
      const result = n1 + n2;
      addResult.value = result.toString();
    }
  } catch (error) {
    alert(`Something went wrong, ${error.message}`);
  }
});window.onbeforeunload
