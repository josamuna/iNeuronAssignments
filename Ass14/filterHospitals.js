/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

2. Write a JavaScript program to filter the hospitals according to:
   a) Number of Beds > 200
   b) Availability of Beds = Yes
   c) Location = Pune
   
   Sample Input:
   let hospitals = [
   {
   "id": 1,
   "name":"Hospital A",
   "location":"Delhi",
   "noOfBeds":450,
   “availability”:”Yes”
   },
   {
   "id": 2,
   "name":"Hospital B",
   "location":"Pune",
   "noOfBeds":150,
   "availability":"No"
   },
   {
   "id": 3,
   "name":"Hospital C",
   "location":"Pune",
   "noOfBeds":350,
   "availability":"Yes"
   }]
   
   Output:
   [
   {
   "id": 1,
   "name":"Hospital
   A",
   "location":"Delhi",
   "noOfBeds":450,
   "availability":"Yes"
   },
   {
   "id": 3,
   "name":"Hospital
   C",
   "location":"Pune",
   "noOfBeds":350,
   "availability":"Yes"
   }
   ]

   [
   {
   "id": 1,
   "name":"Hospital A",
   "location":"Delhi",
   "noOfBeds":450,
   "availability":"Yes"
   },
   {
   "id": 3,
   "name":"Hospital C",
   "location":"Pune",
   "noOfBeds":350,
   "availability":"Yes"
   }
   ]

   [
   {
   "id": 2,
   "name":"Hospital B",
   "location":"Pune",
   "noOfBeds":150,
   "availability":"No"
   },
   {
   "id": 3,
   "name":"Hospital C",
   "location":"Pune",
   "noOfBeds":350,
   "availability":"Yes"
   }
   ]
*/

"use strict";

let hospitals = [
  {
    id: 1,
    name: "Hospital A",
    location: "Delhi",
    noOfBeds: 450,
    availability: "Yes",
  },
  {
    id: 2,
    name: "Hospital B",
    location: "Pune",
    noOfBeds: 150,
    availability: "No",
  },
  {
    id: 3,
    name: "Hospital C",
    location: "Pune",
    noOfBeds: 350,
    availability: "Yes",
  },
];

console.log("a. Number of Beds > 200 ====================");
const betMore200 = hospitals.filter((bed) => bed.noOfBeds > 200); // 2
console.log(betMore200);

console.log("b. Availability of Beds = Yes ==============");
const bedAvailabilityYes = hospitals.filter((bed) => bed.availability === "Yes"); // 2
console.log(bedAvailabilityYes);

console.log("c. Location = Pune ====================");
const hospLocationPure = hospitals.filter((hospital) => hospital.location === "Pune"); // 2
console.log(hospLocationPure);
