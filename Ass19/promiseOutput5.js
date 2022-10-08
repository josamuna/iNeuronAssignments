/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    7). What will the output be?

    Gives us the output:
    Error: The Fails! (there is a mistake), because error cannot be displayed with console.log(error), and we have to use console.log(error.message)
    Alse the new Error object was not created properly with the new keyword ... new Error("The Fails!").
*/

var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
})
  .catch((error) => console.log(error))
  .then((error) => console.log(error));
