/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    1). The time has a format: hours:minutes. Both hours and minutes
        have two digits, like 09:00.

        Make a regex to find time in the string: Lunch at 10:10 in the room
        123:456. In this task there’s no need to check time correctness yet,
        so 25:99 can also be a valid result. The regex should not match
        333:333.
*/

"use strict";

let validateTime = (strTime) => {
  // Begin with any letter (Capital or not) and space anytimes followed by two digits only between 0 and 9
  // followed by : then two digits only (Between 0 and 9), finaly any letter (Capital or not) or spaces any number of time
  let regex = /[a-zA-Z\s]+([0-9]{2}:[0-9]{2})[a-zA-Z\s]+/;
  if (regex.test(strTime)) {
    console.log("Time match found");
  } else {
    console.log("Time not match");
  }
};

const str1 = "Lunch at 10:10 in the room 123:456"; // match
const str2 = "so 25:99 can also be a valid result"; // match
const str3 = "The regex should not match 333:333"; // not match
const str4 = "The regex should not match 333:333 verified"; // not match

validateTime(str1);
validateTime(str2);
validateTime(str3);
validateTime(str4);
