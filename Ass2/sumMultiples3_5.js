/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000
*/

"use strict";

let sumMultiplesOfThreeAndFive = () => {
    let sum = 0;
    let counter = 0;
    while(counter < 1000) {
        if((counter % 3  === 0) && (counter % 5 === 0)) {
            sum += counter;
            // console.log(counter);
        }
        counter++;
    }
    return sum;
}

let result = sumMultiplesOfThreeAndFive();
console.log(`The sum of the multiples of 3 and 5 is ${ result }`);