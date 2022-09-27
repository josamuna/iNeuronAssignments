/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com
*/

"use strict";

/*
    1. Can we put duplicate values in the set object ?
    ==> No, Set does not allow duplicate values
*/

/*
    2. Write the syntax for
    a) Creating new set object
    b) Adding new element to set object
    c) Deleting element from set object
*/
console.log("2.a.============================");
let fruits = new Set(); // Creating empty Set
console.log(fruits);

// Populate Set with non duplicate values
console.log("2.b.============================");
fruits.add("Orange");
fruits.add("Pineapple");
fruits.add("Mango");
fruits.add("Apple");
fruits.add("Apple");
fruits.add("Mango");
console.log(fruits);

// Remove Mango from Set
console.log("2.c.============================");
fruits.delete("mango"); // Case sensitive | mango is different to Mango
fruits.delete("Mango");
console.log(fruits);

/*
    3. Create a set object with four random numbers from 0 to 10. Check if this
      newly created set object has 8 in it. Use set object methods.
*/
let arr = []; // Empty array
for (let i = 0; i < 4; i++) {
  arr.push(Math.round(Math.random() * 10)); // Populate array with four random number (Between 0 and 10)
}

let randomNumber = new Set(arr); // Initialize Set with an Array of four numbers
console.log("Set values are:\n", randomNumber);
console.log("3.============================");
console.log(randomNumber.has(8)); // Check whether 8 belong to the Set
