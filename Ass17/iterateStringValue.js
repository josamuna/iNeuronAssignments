/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    2. Iterate over all the characters of the word “iNeuron”.
*/

let iterateString = (strInput) => {
  let iter = strInput[Symbol.iterator](); // Create itzrator object
  let res = iter.next(); // Go to the first element

  // Loop through the iterator to find elements
  while (!res.done) {
    console.log(res.value); // Print current value
    res = iter.next();
  }
};

iterateString("iNeuron"); // Call anonynous function