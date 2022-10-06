/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com
*/

/*1. What is the difference between a generator and a function?
    Generator is a special function marked with an asterix character before the function name 
    (Is paused function execution each time yield keyword is used, and with a call of next() method like Iterator, 
    it go to the next instruction into the function), but function is a piece of code that can do anything we 
    want and return back or not a result in any form without using an asterix before it name. 
    Generator has also a behavior of Iterator.
/*

/* 2. What is the syntax of a generator? */
"use strict";

function* display(){
    console.log("Start of the generator"); // Show message
    yield "pause 1"; // Pause and go to the next instruction after the call of next() function
    console.log("One"); // Show One after the call of next() method
    console.log("Two"); // Same as the previous line
    yield "pause 2"; // Pause and go to the next instruction after the call of next() function
    console.log("Three"); // Show Three after the call of next() method
}

let showDisplay = display(); // Call generator but show nothing
showDisplay.next(); // Show Start of the generator (Fist instruction of the generator and stop execution)
showDisplay.next(); // Show One and Two (Including previous instruction and then paused execution)
showDisplay.next(); // Show Three and paused execution

showDisplay.next(); // End execution (Show nothing)

/* 3. Are function generators iterable in JavaScript? 
    Yes, generators are iterable in JavaScript, they behave like that.
*/
console.log(showDisplay.next().done); // End execution (Show true because generator reach the end of his execution, otherwise, it will show false)