/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    9). What will the output be?

    Gives us the output:
    start
    end
    1
    2
*/

console.log("start");
Promise.resolve(1).then((res) => {
  console.log(res);
});
Promise.resolve(2).then((res) => {
  console.log(res);
});
console.log("end");
