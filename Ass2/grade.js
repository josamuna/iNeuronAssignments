/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    2. Write a function using switch case to find the grade of a student based on marks obtained
    a. “S grade” if the marks are between 90 and 100.
    b. “A grade” if the marks are between 80 and 90.
    c. “B grade” if the marks are between 70 and 80.
    d. “C grade” if the marks are between 60 and 70.
    e. “D grade” if the marks are between 50 and 60.
    f. “E grade” if the marks are between 40 and 50.
    g. “Student has failed” if the marks are between 0 and 40.
    h. Else output “Invalid marks”.
*/

"use strict";

let student_grade = (marks) => {
    switch(true) {
        case (marks >= 90 && marks <= 100): 
            console.log(`Your grade is 'S' with ${ marks } marks`);
            break;
        case (marks >= 80 && marks < 90):
            console.log(`Your grade is 'A' with ${ marks } marks`);
            break;
        case (marks >= 70 && marks < 80):
            console.log(`Your grade is 'B' With ${ marks } marks`);
            break;
        case (marks >= 60 && marks < 70): 
            console.log(`Your grade is 'C' with ${ marks } marks`);
            break;
        case (marks >= 50 && marks < 60):
            console.log(`Your grade is 'D' with ${ marks } marks`);
            break;
        case (marks >= 40 && marks < 50):
            console.log(`Your grade is 'E' with ${ marks } marks`);
            break;
        case (marks >= 0 && marks < 40):
            console.log(`Student has failed with ${ marks } marks`);
            break;
        default: 
            console.log("Invalid marks");
            break;
    }
}

student_grade(100); // S
student_grade(90); // S
student_grade(80); // A
student_grade(89); // A
student_grade(70); // B
student_grade(79); // B
student_grade(60); // C
student_grade(69); // C
student_grade(50); // D
student_grade(59); // D
student_grade(40); // E
student_grade(49); // E
student_grade(39); // Failed