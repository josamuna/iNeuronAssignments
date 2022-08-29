/*
    3. Write a program to find whether a given number is special number or not
    If the sum of the factorial of digits of a number (N) is equal to the
    number itself, the number (N) is called a special number.

    eg- 145 is a special number
    Logic- 1! + 4! + 5!= 1+24+120 i.e 14
*/

"use strict";

let factorial = (value) => {
    let n = Number(value);
    if(isNaN(n)) 
        return "Invalid input value!";
    else if(n === 0)
        return 1;
    else if (n < 0)
        return "Not Exist!"
    else 
        return n * factorial(n - 1);
}

let special_number = (value) => {
    let n = value.toString();
    let sum = 0;
    for(let i = 0; i < n.length; i++) {
        sum += factorial(Number(n[i]));
    }
    
    if(sum === value) {
        console.log(`=====>>>${ value } is a special number.`);
    } else {
        console.log(`${ value } is not a special number.`);
    }
}

let special_number_range = (n1, n2) => {
    for(let i = n1; i <= n2; i++) {
        let n = i.toString();
        let sum = 0;
        for(let j = 0; j < n.length; j++) {
            sum += factorial(Number(n[j]));
        }
        
        if(sum === i) {
            console.log(`=====>>>${ i } is a special number.`);
        } else {
            console.log(`${ i } is not a special number.`);
        }
    }
}

special_number(130);
special_number(140);
special_number(145);
special_number(300);

console.log("===========================================");

special_number_range(0, 1000);