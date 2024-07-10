/**
 * num, boolean, strings, arrays, null & undefined all are primitive types
 * Reference type :- objects
 * 
 * simply working with objects we are dependent on "Reference"
 */


let first_num = 10;
let second_num = first_num;

first_num = 200;  //it doesn't effect the second_num bcz both having seperate memory blocks

console.log(first_num); //200  lastinfirstout
console.log(second_num); //10  



//object is reference 
/**all three variables are referenced with the same "object" one variable is changed it effects the all variables*/
let devloper_one = {

  name: "kailash",
  age: 23,
  role: "backend devloper",
  salary: 300000

};

let devloper_two = devloper_one;

devloper_one["phone_number"] = 9988224487;
devloper_one.role = "frontend devloper";

let devloper_three = devloper_two;

console.log(devloper_one);
console.log(devloper_two);

console.log(devloper_three);


//To overcome these we have spread operator

/**you can't copy the one variable data into antoher variable u can got the data and stored into the newly created varible */


let bats_1 = [
  "MRF", "Reebok"
];

 let bats_2 = [...bats_1];
 

bats_1.push("SS", "graynicols");

 console.log(bats_1);
 console.log(bats_2);


 let bats_3 = [...bats_2];

 bats_2.push("zigtach", "arrow", "kwin", "nick", "puma");

 console.log(bats_3);
 console.log(bats_2);
  

 let bats_4 = [...bats_3];

 bats_3.push("semicolon", "reverse", "flow");

 console.log(bats_4);
 console.log(bats_3);
