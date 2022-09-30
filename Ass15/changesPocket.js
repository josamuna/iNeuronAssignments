/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    5). Given a total due and an array representing the amount of
        change in your pocket, determine whether or not you are able to pay
        for the item. Change will always be represented in the following
        order: quarters, dimes, nickels, pennies.
        To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true,
        since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives
        you 6.25 + 2 + .25 + 0 = 8.50.

        Examples

        changeEnough([2, 100, 0, 0], 14.11) ➞ false

        changeEnough([0, 0, 20, 5], 0.75) ➞ true
        changeEnough([30, 40, 20, 5], 12.55) ➞ true

        Notes

        ● quarter: 25 cents / $0.25
        ● dime: 10 cents / $0.10
        ● nickel: 5 cents / $0.05
        ● penny: 1 cent / $0.01
*/

"use strict";

let changeEnough = (arrInput, amoutDue) => {
  // if quarter + dime + nickel + penny is greather or egal amoutDue then return True, otherwise False
  if (arrInput.length < 4 || arrInput > 4) {
    return new Error(
      "The input array should contains only four items, no more or no less."
    );
  }

  let amount = 0;
  for (let i = 0; i < arrInput.length; i++) {
    switch (i) {
      case 0:
        amount += arrInput[i] * 0.25; // Quarter
        break;
      case 1:
        amount += arrInput[i] * 0.1; // Dime
        break;
      case 2:
        amount += arrInput[i] * 0.05; // Nickel
        break;
      case 3:
        amount += arrInput[i] * 0.01; // Penny
        break;
    }
  }

  if (amount >= amoutDue) {
    return true; // The amount in pocket is sufficient for the item
  } else {
    return false; // The amount in pocket is insufficient for the item
  }
};

try {
  var state = changeEnough([2, 100, 0, 0], 14.11); // false
  console.log(state);

  state = changeEnough([0, 0, 20, 5], 0.75); // true
  console.log(state);

  state = changeEnough([30, 40, 20, 5], 12.55); // true
  console.log(state);

  state = changeEnough(null, 12.55); // Error message
  console.log(state);
} catch (error) {
  console.log(`Something went wront, ${error.message}`);
}
