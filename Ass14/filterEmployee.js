/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    1. Write a JavaScript program to:
       a) filter employees according to department = IT
       b) filter employees who earn a salary < 65000

       Sample Input:
       let employees = [
       {
       "id": 1,
       "name":"Abhinav",
       "department":"IT",
       "Salary":75000
       },
       {
       "id": 2,
       "name":"Gaurav",
       "department":"Sales",
       "Salary":52000
       },
       {
       "id": 3,
       "name":"Raj",
       "department":"IT",
       "Salary":64000
       }]

       Output:
       [
       {
       "id": 1,
       "name":"Abhinav",
       "department":"IT",
       "Salary":75000
       },
       {
           "id": 3,
       "name":"Raj",
       "department":"IT",
       "Salary":64000
       }
       ]
       [
       {
       "id": 2,
       "name":"Gaurav",
       "department":"Sales",
       "Salary":52000
       },
       {
       "id": 3,
       "name":"Raj",
       "department":"IT",
       "Salary":64000
       }
       ]
*/

"use strict";

let employees = [
  {
    "id": 1,
    "name": "Abhinav",
    "department": "IT",
    "Salary": 75000,
  },
  {
    "id": 2,
    "name": "Gaurav",
    "department": "Sales",
    "Salary": 52000,
  },
  {
    "id": 3,
    "name": "Raj",
    "department": "IT",
    "Salary": 64000,
  },
];

// console.log(employees);

console.log("a. Filter employees according to department = IT=========");
// Perfor filter operation on employees Array object (That match departement of IT) and return result
const depIT = employees.filter((it) => it.department === "IT"); // 2
console.log(depIT);

console.log("a. Filter employees who earn a salary < 65000=========");
// Perform filter operation on employees Array object (Where Salary property is < 65000) and return result
const employeeSalaryLess65000 = employees.filter((salary) => salary.Salary < 65000); // 2
console.log(employeeSalaryLess65000);
