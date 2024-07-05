console.log("\n" + "\n");

/**Arrays is a variable which stores mulitple values of same datatype  */

/**
 * Destructive-Array :- To change the original array by "pop & push" methods
 * pop -->to remove the element from the Array
 * push---> to Add the element in the array which is added in the last element in the array.
 * 
 * 
 * Non -destructive :- Not change the "original one it's variable only change"
 */

/**1. how to access elements
 * 2. About properties
 * 3. different methods
 */
//1. To access elements by using it's index's
let brands = [
  "kingfisher",
  "tuborg",
  "storm"
];

brands.push("budwisor", "Knockout");
 brands[3] = "british empire";

console.log(brands.pop(2));

 
for (let Count = 0; Count < brands.length; Count++) {

  console.log(brands[Count]);
}


//2. About properties
//properties is like tell something information
let city = "Hyderabad";

console.log("length of the city hyderabad is.....", city.length);


//3. differnet different methods like strings
/** toUpperCase(), toLowerCase() */



console.log("\n");

/**working with "null" and "undefined"
 * null --> we intentionally pass "null" to the variable
 * undefined---> we cannot intialize anything to the variable
 */

let cars = null;
let bikes;

console.log(cars);
console.log(bikes);

console.log("\n");

/**  Boolean vs comparison it returns "true & false" */

let num_1 = 25;
let num_2 = 50;

 console.log(num_1 == num_2);
 console.log(num_1 <= num_2);
 console.log(num_1 > num_2);

 console.log("\n");
 /** loose(==) versus strict(===) */

 let Num = 25;

 console.log(Num == 25);
 console.log(Num == "25"); //it shows wrong o/p "true" num can't equal to string
 console.log(Num === "25"); //false