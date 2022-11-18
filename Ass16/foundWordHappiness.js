/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    2.) Create a function that finds the word "happiness" in the given
        string (not case sensitive). If found, return "Hurray!", otherwise
        return "There is no happiness.".
        Example
        findHappiness(“Work makes me happy”) -> There is no happiness.
        findHappiness(“You give me the feeling of happiness”) -> Hurray
*/

let findHappiness = (str) => {
  let regex = /happiness/i;
  if (regex.test(str)) {
    console.log("Hurray");
  } else {
    console.log("There is no happiness.");
  }
};

const str1 = "Work makes me happy";
const str2 = "You give me the feeling of happiness";

findHappiness(str1);
findHappiness(str2);
