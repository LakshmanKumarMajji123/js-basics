
console.log("\n");


let Players = [  //Players is a "global variable" you can access everywhere in the program
  "Dhoni",
  "Virat Kohli",
  "Rohit Sharma",
  "Mithali Raj",
  "shryanka patil",
  "mandanna",
  "kuldeep yadav"
];

 /**
  * for loop
  * normal --> 3 expressions --declaration --expression --incre/decre
  * of ---> excess the values
  * in ---> excess the keys
  */
//of--> access values
//in---> access indexes
 for(let i in Players){ //Every iteration In Players array eachh element can stores in "i" so we print that "i"
  console.log(i);
 }

console.log("\n");
 let String = "Majji Vijaya Teja";

 for(let ch in String){
  console.log(ch);
 }

