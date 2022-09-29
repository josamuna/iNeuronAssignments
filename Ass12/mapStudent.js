/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    2. Write a program in JavaScript to map the student ids, names and scores.
       a) Add data for 3 students (use map functions)
       b) Get Student Names using map functions
       c) Delete Student Scores using map functions
       d) Display 1 parameter (only value), 2 parameters (value + key), and 3
       parameters (value + key + map) for the student

        Sample Input:

        "id": [ 1, 2, 3 ]
        "name": [ 'Hitanshu', 'Ninad', 'Amandeep' ]
        "scores": [ 90, 88, 92 ]

        Output:

        [ 'Hitanshu', 'Ninad', 'Amandeep' ]
        -----one parameter-----
        [ 1, 2, 3 ]
        [ 'Hitanshu', 'Ninad', 'Amandeep' ]
        [ 90, 88, 92 ]
        -----two parameter-----
        id 1, 2, 3
        name Hitanshu,Ninad,Amandeep
        scores 90,88,92
        -----three parameter-----
        id 1, 2, 3
        Map(3) {
        'id' => [ 67, 48, 29 ],
        'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
        'scores' => [ 90, 88, 92 ]
        }
        name Hitanshu,Ninad,Amandeep
        Map(3) {
        'id' => [ 1, 2, 3 ],
        'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
        'scores' => [ 90, 88, 92 ]
        }
        scores 90,88,92
        Map(3) {
        'id' => [ 1, 2, 3 ],
        'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
        'scores' => [ 90, 88, 92 ]
*/

// Initialise a new empty set object
let students = new Map();

console.log("a.Add data for three Student using set method (Map's in-built method)\n");
students.set("id", [1, 2, 3]);
students.set("name", ["Hitanshu", "Ninad", "Amandeep"]);
students.set("scores", [90, 88, 92]);
console.log(students);

console.log("b.Get Student names===================");
console.log(students.get("name"));

console.log("c.Delete Student Scores===============");
// =======>>>>>Decomment thess two lines to test only because remains lines will not work properly
// students.delete("scores");
// console.log(students);

console.log("d.Display values======================");
console.log("-----one parameter-----");
// Display students Map values
students.forEach((value) => {
  console.log(value);
});

console.log("-----two parameters-----");
students.forEach((value, key) => {
  console.log(`${key} ${value}`);
});

console.log("-----three parameters-----");
students.forEach((value, key, arr) => {
  console.log(`${key} ${value}\n${arr}`);
});