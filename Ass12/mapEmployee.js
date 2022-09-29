/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    1. Write a JavaScript program to map Employee Records according to Employee IDs.
    Employee: { id, name, salary }
    a) Print an array of all employee ids
    b) Print count of employees
    c) Print the name of the employee according to their id { key: value }
    d) Store the salaries of all employees in an array
    e) Calculate the average salary the company is paying to its employees

    Sample Input:

        "id": [ 67, 48, 29 ]
        "name": [ "Hitanshu", "Ninad", "Amandeep" ]
        "salary": [ 75000, 82000, 98000 ]

    Output:

    [ 67, 48, 29 ]
    3
    67: Hitanshu
    48: Ninad
    29: Amandeep
    [ 75000, 82000, 98000 ]
    85000
*/

"use strict";

// Creating a Map object to map Employee name to its id
let employees = new Map();
employees.set("id", [67, 48, 29]);
employees.set("name", ["Hitanshu", "Ninad", "Amandeep"]),
employees.set("salary", [75000, 82000, 98000]);

console.log("a.Employee ids=======================\n", employees.get("id"));
console.log("b.Cout of employees==================\n", employees.size);
console.log("c.Employee name by id { key: value }=");

// Retrieve name corresponding to id into Map ID table
for (let i = 0; i < employees.size; i++) {
  console.log(`${employees.get("id")[i]}: ${employees.get("name")[i]}`);
}

console.log("d.Employee salary====================");
let employeeSalary = employees.get("salary");
console.log(employeeSalary);

// Calculating Salary average using reduce method
console.log("e.Employee average salary payed by the company");
let averageSalary = employeeSalary.reduce((accu, curr) => accu + curr, 0) / employeeSalary.length;
console.log(averageSalary);