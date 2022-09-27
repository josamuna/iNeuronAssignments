/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    1. Carefully observe this example.
        a) Is the InnerFunction() a closure?
            ==> Yes, Closure is a key feature of JavaScript where inner function are 
                (They play as memory for the outer function) used into outer function 
        b) What is output of this program
            ==> The output is 100, because the outerVariable is passed to the inner function, which return this value as 
                the output of the outer function. The inner function is reponsible to display the value 100 into an alert box.
*/

function OuterFunction() {
  var outerVariable = 100;
  function InnerFunction() {
    alert(outerVariable);
  }
  return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

/*
    2. What is the difference between a closure and a scope ?
       ==> A closure has the outer function as the scope, but the scope define the boundarie of the visibility of variables,
       it can be global (When using var keyword) for one or many instructions's bloc or local (When using let or const) for
       a specific instruction's bloc (It can also include many bloc if the variable is outside of them). 
*/

/*
    3. What is a lexical scope and how is it related to closure?
    ==> The lexical scope define the process JavaScript determine the scope during runtime and it is related to closure because
    the scope of inner function is determine during runtime 
*/

/*
    4. Output of following closure ?
    ==> It log 3 (Because the loop has completed very quickly before one second and reach the value three) 
    thee times after one second.
*/

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}
