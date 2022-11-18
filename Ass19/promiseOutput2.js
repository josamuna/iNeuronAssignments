/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    3). What is the output of the following code?

    Gives us the output:
    2
    4
    undefined
    8
*/

const promise = new Promise((res) => res(2));
promise
  .then((v) => {
    console.log(v); // 2 => Print 2
    return v * 2; // v = 2 * 2 = 4
  })
  .then((v) => {
    console.log(v); // 4 => Print 4
    return v * 2; // v = 4 * 2 = 8
  })
  .finally((v) => {
    console.log(v); // undefine because v it is not accessible => Print 4
    return v * 2;
  })
  .then((v) => {
    console.log(v); // 8  => Print 8
  });
