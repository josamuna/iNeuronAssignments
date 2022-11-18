/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    8). Is it possible to nest async functions in JavaScript? Explain with examples.
    9). What is the best way to avoid deadlocks when using async/await?
    10). In which scenarios would you use synchronous code instead of asynchronous code?
*/

// 8. Yes

async function f1(x) {
  x = await (x + 20);

  // Nested async-await function
  async function f2(y) {
    y = await (x + 10);
    return y;
  }
  return f2(x);
}

f1(10).then((result) => console.log(result)); // print 40

// 9. Is by always handle the return async-await function with await keyword

/* 10. 
    - When task should be executed sequentially (Mean dependents tasks).
    - When performing video rendering or mathematical computations (Because they require a huge usage of CPU).
    - When we are not performing I/O tasks.
*/
