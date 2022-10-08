/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    6). What will the output be?

    Gives us the output:
    SUCCESS!
*/

Promise.resolve("Success!")
  .then((data) => {
    return data.toUpperCase();
  })
  .then((data) => {
    console.log(data);
  });
