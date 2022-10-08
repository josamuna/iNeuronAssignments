/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    4. What is the output of the code below?

    Gives us the output:
    start
    middle
    1
    end
    success
*/

console.log("start");
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
console.log("middle");
fn().then((res) => {
  console.log(res);
});
console.log("end");
