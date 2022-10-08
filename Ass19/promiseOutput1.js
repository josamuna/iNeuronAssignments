/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    1. What is the output of the code below ?
*/

function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}
let promise = job();
promise
  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("Success 2");
  })
  .then(function () {
    console.log("Success 3");
  })
  .catch(function () {
    console.log("Error 1");
  })
  .then(function () {
    console.log("Success 4");
  });

// The code will only return the code in catch because the reject() method has performed into the promise.
// Result will be Error 1 and then Success 4 because the catch perform also another task done by then() method
