/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    3). Create a function that takes numbers b and m as arguments and
        returns the second derivative of the function f(x)=x^b +x* (e^(b*m))
        with respect to x evaluated at x=m, where b and m are constants.
*/

"use strict";

// First derivative of function f(x)=x^b +x* (e^(b*m)) is f'(x)=bX^(b-1) + (e^(b*m))
// Second derivative of function f(x)=x^b +x* (e^(b*m)) is f''(x)=(b*(b-1))X^((b-1)-1)
// if x=m then f''(x)=(b*(b-1))m^((b-1)-1) ==>> f''(x)=(b*b-b)m^(b-2)
let buildDerivativeFunction = (b, m) => {
  // With x=m, Second derivative f''(x)=(b*b-b)m^(b-2) =
  let value = (Math.pow(b, 2) - b) * Math.pow(m, b - 2);
  return value;
};

var val = buildDerivativeFunction(3, 5); // 30
console.log(val);

val = buildDerivativeFunction(4, 7); // 588
console.log(val);

val = buildDerivativeFunction(6, 4); // 7680
console.log(val);

val = buildDerivativeFunction(2, 6); // 2
console.log(val);
