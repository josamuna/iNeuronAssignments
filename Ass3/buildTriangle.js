/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    1. Using for loops, write a Javascript program to output the following pattern -
    1
    2 3
    4 5 6
    7 8 9 10
*/

"use strict";

import { stdin, stdout } from 'node:process';

let builtTriangle = (n) => {
    for(let i = 1, c = 1; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            process.stdout.write(c + " ");
            c++
        }
        process.stdout.write("\n");
    }
}

builtTriangle(4);