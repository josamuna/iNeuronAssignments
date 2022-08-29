/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    2. Write a program to find whether a given number is armstrong number or not.
       The Armstrong number is a number that is equal to the sum of cubes of
       its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
       numbers. Let's try to understand why 153 is an Armstrong number.
       
    153 = (1*1*1)+(5*5*5)+(3*3*3) where:
    (1*1*1)=1
    (5*5*5)=125
    (3*3*3)=27
    So:
    1+125+27=153
*/

"use strict";

let armstrong = (value) => {
    let n = value.toString();
    let sum = 0;
    for(let i = 0; i < n.length; i++) {
        sum += Math.pow(Number(n[i]), 3);
    }
    if(sum === value) {
        console.log(`=====>>>${ value } is a Armstrong number.`);
    } else {
        console.log(`${ value } is not a Armstrong number.`);
    }
}

let armstrong_range = (n1, n2) => {
    for(let i = n1; i <= n2; i++) {
        let n = i.toString();
        let sum = 0;
        for(let j = 0; j < n.length; j++) {
            sum += Math.pow(Number(n[j]), 3);
        }
        if(sum === i) {
            console.log(`=====>>>${ i } is a Armstrong number.`);
        } else {
            console.log(`${ i } is not a Armstrong number.`);
        }
    }
}

armstrong(0);
armstrong(1);
armstrong(2);
armstrong(153);
armstrong(170);
armstrong(370);
armstrong(390);
armstrong(371);
armstrong(400);
armstrong(407);

console.log("==================================");

armstrong_range(0, 1000);