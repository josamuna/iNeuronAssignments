/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    2). Write a sleep function using a promise in javascript?
*/

"use strict";

const sleep = (delay_sleep) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Execution has taken a delay of ${delay_sleep / 1000}Secondes to be done.`);
    }, delay_sleep);
  });
};

let delay = sleep(5000);
delay.then((result) => {
    console.log(result);
  }).finally(console.log("Waiting for a delay..........."));
