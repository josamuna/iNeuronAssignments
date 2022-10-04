/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    4). Create a function that will return an integer number
        corresponding to the amount of digits in the given integer num

        Examples
        
        num_of_digits(1000) ➞ 4
        num_of_digits(12) ➞ 2
        num_of_digits(1305981031) ➞ 10
*/

let num_of_digits=(num)=>{
    return num.toString().length;
};

var value = num_of_digits(1000); // 4 Digits
console.log(value);

value = num_of_digits(12); // 2 Digits
console.log(value);

value = num_of_digits(1305981031); // 10 Digits
console.log(value);