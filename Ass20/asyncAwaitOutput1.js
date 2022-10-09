/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    4. Find output.
    Final output will be 3
*/

async function inc(x) {
  x = x + (await 1); // x = 1 + 1, await has no effect in this line of code
  return x; // 2
}
async function increment(x) {
  x = x + 1; // x = 2 + 1
  return x; // 3
}

inc(1).then(function (x) { // x = 2 => from then of inc(1) function
  increment(x).then(function (x) { // 2 is passed to increment(2) function and the result is 3
    console.log(x); // print 3 
  });
});