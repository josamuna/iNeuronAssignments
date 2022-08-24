/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    ------------------
    3. Write a program to find the factorial of a number.
*/

"use strict"
// Factoria with functional using loop
let factorial_functional = (value) => {
    const n = Number(value);
    let result = 1;
    if(n === 0) 
        return 1;
    else if(isNaN(n))
        return "Invalid input value!";
    else if(n < 0)
        return "Not exist!";
    else {
        for(let i = n; i > 0; i--) {
            result *= i;
        }
        return result;
    }
}

// Recusive factorial with a function is calling itself
let factorial_recursive = (value) => {
    const n = Number(value);
    if(n === 0) 
        return 1;
    else if(isNaN(n))
        return "Invalid input value!";
    else if(n < 0)
        return "Not exist!";
    else 
        return n * factorial_recursive(n - 1);
}

// Valid value
console.log(factorial_functional(5)); // 120

console.log(factorial_functional(0)); // 1
// Invalid value
console.log(factorial_functional(-2));
console.log(factorial_functional("/"));

console.log("-------------------Recusive--------------------");
// Factorial recursive
console.log(factorial_recursive(5)); // 120

console.log(factorial_recursive(0)); // 1
// Invalid value
console.log(factorial_recursive(-2));
console.log(factorial_recursive("h"));