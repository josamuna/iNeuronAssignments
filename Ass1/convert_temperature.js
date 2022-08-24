/*
    Author: Josue Isamuna Nkembo
    Email : kosamuna2009@gmail.com

    --------------------
    2. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
    [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
    Fahrenheit ]
    Expected Output :
    60°C is 140 °F
    45°F is 7.222222222222222°C

    c = (f-32)*5/9
    f = (c*9/5)+32
*/

"use strict"
let convertTemperature = (value, temperature_type="f") => {
    switch(temperature_type.toLowerCase()) {
        case "f": {
            const c = Number((value - 32) * 5/9); 
            // const c = Number((value - 32) * 5/9).toPrecision(3); With Specific precision like 45°F is 7.22°C
            console.log(`${ value }°F is ${ c }°C`);
            break;
        } case "c": {
            const f = (value * 9/5) + 32;
            console.log(`${ value }°C is ${ f }°F`);
            break;
        } default: console.log("Please input a valid temperature type ('c' for Celcius or 'f' for Fahrenheit).");
    }
}

// °F to °C
convertTemperature(45, "F");

// °C to °F
convertTemperature(60, "C");

// Invalid input
convertTemperature(120, "s");
