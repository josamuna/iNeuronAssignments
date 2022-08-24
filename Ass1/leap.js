/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    -------------
    1. Write a program to find whether a given year is a leap year or not.
*/

"use strict"
let leap_year = (year) => {
    // Check if the rest of divide by 100 and 400 is 0 or not to match leap year or not
    if((year % 100 === 0) && (year % 400 === 0)) {
        console.log(`${ year } is a leap year`);
    } else {
        console.log(`${ year } is not a leap year!`);
    }
}

// Use a range of year to show leap years and not
let leap_year_range = (first_year, last_year) => {
    let arr = [];
    for(let i = first_year; i <= last_year; i++) {
        arr.push(i);
    }
    let leap = arr.filter(val => (val % 100 === 0) && (val % 400 === 0));
    console.log(`${ leap } is(are) leap year(s) and other(s) one is(are) not`);
}

// Yeap yeap
leap_year(2000);
// Not yeap year
leap_year(1994);

leap_year_range(100, 2022);