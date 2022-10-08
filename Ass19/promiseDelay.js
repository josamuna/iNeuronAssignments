/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    5). Write a function delay that returns a promise. And that promise
        should return a setTimeout that calls resolve after 1000ms.
*/

"use strict";

const delay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Execution completed with a promise after a delay of 1sec");
    }, 1000);
  });
};

delay().then((result) => {
  console.log(result);
});
