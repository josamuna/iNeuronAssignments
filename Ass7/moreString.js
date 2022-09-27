/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com
*/

"use strict";
/*
    5. What string method can be used to convert string into array ?
    ==> String.split(string) method
*/
let arr = "My String".split(); // Split the entire string without using empty string
console.log("5.============================\n", arr);

/*
    6. What string method can be used to check the occurrence of a specified text in a string?
    ==> String.includes(string) method
*/
let expectedStr = "My String".includes("S"); // Return true (S belong to the string)
console.log("6.============================\n", expectedStr);

/*
    7. How can you break a string to a newline in Javascript ?
    ==> by adding \n (Backslash and n)
*/
console.log("7.============================");
const str1 = "My String";
const str2 = "My New String";
const str3 = str1.concat("\n").concat(str2); // Concat two string with a spaces between them
console.log(str3);

/*
    8. Write a Javascript function to test whether the first character of a string is lowercase.
*/
console.log("8.============================");
let checkLowersaseFirstLetter = (inputString) => {
    try{
        let str = inputString.toString();

        // Define a table with all lowercase existing letters code
        let arr = [];
        for(let i = 97; i <= 122; i++) {
            arr.push(i);
        }

        // If the first letter belong to the arr Array, then is a lowercase letter, other wise it not.
        if(arr.indexOf(str[0].charCodeAt(0)) >= 0){
            return "The first letter is lowercase";
        } else {
            return "The first letter is not lowercase";
        }
    }catch(error){
        return `Something went wrong, ${error.message}`;
    }
}

var lowerCaseChar = checkLowersaseFirstLetter("My String");
console.log(lowerCaseChar);
var lowerCaseChar = checkLowersaseFirstLetter("my String");
console.log(lowerCaseChar);
var lowerCaseChar = checkLowersaseFirstLetter(null);
console.log(lowerCaseChar);

/*
    9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc 
    (any combination) using string methods.
    How will you handle that ?
    ==> It will be handle by converting the entire string into lowercase only or into uppercase only
    using inbuilt String methods String.toLowerCase() or String.toUpperCase()
*/
console.log("9.============================");
var strUser1 = "yes";
console.log(strUser1.toLowerCase());
console.log(strUser1.toUpperCase());
var strUser2 = "YES";
console.log(strUser2.toLowerCase());
console.log(strUser2.toUpperCase());
var strUser3 = "Yes";
console.log(strUser3.toLowerCase());
console.log(strUser3.toUpperCase());

/*
    10. Given a String S, achieve following tasks
        a) Convert the String into upper case.
        b) Convert only the first character to uppercase.
        c) Convert the String into lower case.
        d) Break the string into two halves and swap them.
        e) Count the repeating characters.
        f) Reverse the string
*/
console.log("10.============================");
let S = "greet string";
let uppercaseS = S.toUpperCase();
console.log(`a. '${S}' to uppercase value is:\n ${uppercaseS}`);

let uppercaseFirstLetter = S[0].toUpperCase() + S.slice(1);
console.log(`b. '${S}' with first character to uppercase is:\n ${uppercaseFirstLetter}`);

let lowercaseS = S.toLowerCase();
console.log(`c. '${S}' to lowercase value is:\n ${lowercaseS}`);

let strArr = S.toString().split(" ");
const strPart1 = strArr[1];
const strPart2 = strArr[0];
const newS = strPart1.concat(" ").concat(strPart2);
console.log(`d. '${S}' with halved and swapped value is:\n ${newS}`);

console.log(`e. Count the repeting characters:\n ${newS}`);
// count number of reapeting characters in a string
let countCharactersOfString = (input) => {
    // Building a Set with non reapeting characters of string
    let arrSet = new Set(input.toLowerCase());
    //let arr = Array.from(arrSet); Converting Set to Array
    arrSet.forEach((str) => { 
        // Loop through each Set's element and count the repetition of character match in the string
        let count = 0;
        for(let i = 0; i < S.length; i++) {
            if(str === S[i]) {
                count++; // Increment the counter for each charactere match
            }
        }
        console.log(`${str} is reapeted ${count} time`);
    })
}

// Call counting characters function
countCharactersOfString(S);


let reverseS = S.split("").reverse().join("");
console.log(`f. '${S}' reversed value is:\n ${reverseS}`);