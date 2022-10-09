/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    5. Find output.
       1
       Error: some error

       the then() will always executed even if reject is handle into the Promise body.
*/

let p = new Promise(function (resolve, reject) {
  reject(new Error("some error"));
  setTimeout(function () {
    reject(new Error("some error"));
  }, 1000);
  reject(new Error("some error"));
});
p.then(null, function (err) {
  console.log(1);
  console.log(err);
}).catch(function (err) {
  console.log(2);
  console.log(err);
});