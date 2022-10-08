/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    8). What will the output be?

    Gives us the output: (Promise has a higher priority than SetTimeout)
    start
    end
    resolve
    setTimeout
*/

console.log("start");
setTimeout(() => {
  console.log("setTimeout");
});
Promise.resolve().then(() => {
  console.log("resolve");
});
console.log("end");
