/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    2. Write a JavaScript program to
       a) Calculate grades on basis of marks
       >90 = A
       >80 = B
       >70 = C
       >60 = D
       >50 = E
       else = F
       b) Map the grades of each student
       c) Group students according to the grades they have received and display.

       Sample Input:
       let students = [
       { name: "John", marks: “92” },
       { name: "Oliver", marks: “85” },
       { name: "Michael", marks: “79” },
       { name: "Dwight", marks: “95”},
       { name: "Oscar", marks: “64” },
       { name: "Kevin", marks: “48” },
       ];

       Output:

       {
        'A': [ { name: "John", grade: “A” },
        { name: "Dwight", grade: “A” } ],
        'B': [ { name: "Oliver", grade: “B” } ],
        'C': [ { name: "Michael", grade: “C” } ],
        'D': [ { name: "Oscar", grade: “D” } ],
        'E': [ ],
        'F': [ { name: "Kevin", grade: “F” } ],
        }
*/

"use strict";

// An Object of six Array Object (With six properties corresponding to the six grades: A, B, C, D, E and F)
let studentGrade = { A: [], B: [], C: [], D: [], E: [], F: [] };

// Student array of objects (With name and marks properties)
let students = [
  { name: "John", marks: "92" },
  { name: "Oliver", marks: "85" },
  { name: "Michael", marks: "79" },
  { name: "Dwight", marks: "95" },
  { name: "Oscar", marks: "64" },
  { name: "Kevin", marks: "48" },
];

// Loop through student Array to ckeck marks and add student's grade to the object grade (With corresponding name) 
console.log("a (Calculate grade), b (Map the grades of each student) and c (Group students by grade and show result)");

for (let index in students) {
  let mark = students[index].marks;
  switch (true) {
    case mark > 90:
      studentGrade.A.push({ name: students[index].name, grade: "A" });
      break;
    case mark > 80:
      studentGrade.B.push({ name: students[index].name, grade: "B" });
      break;
    case mark > 70:
      studentGrade.C.push({ name: students[index].name, grade: "C" });
      break;
    case mark > 60:
      studentGrade.D.push({ name: students[index].name, grade: "D" });
      break;
    case mark > 50:
      studentGrade.E.push({ name: students[index].name, grade: "E" });
      break;
    default:
      studentGrade.F.push({ name: students[index].name, grade: "F" });
  }
}

console.log(studentGrade);