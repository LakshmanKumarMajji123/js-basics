/**In js strings having mainly 4 properties
 * 1. string cancatenation
 * 2. accessing characters in a string
 * 3. String properties
 * 4. String methods
 */


/**string:- is nothing but a group of characters which is reffered in a single/same line */

/**1.string cancatenation */
let firstName = "Majji";
let lastName = "Lakshman Kumar";
let description = "devloper";

console.log(firstName, lastName);

/**2. Accessing each characters in a string */
// for(let char of lastName){

//   console.log(char);
// }
for (let characters of lastName) {

  console.log(characters);

}

console.log("\n");
/* 3. string properties
property :- means give us a information  */

let length = lastName.length;
console.log(length);


/*4. string methods
method :- is a behaviour which perform some action */

/**destructive array:- which modifies the original data. like see an example below*/
let array = [1, 2, 3];

array.push("4");
console.log(array);
/**non-destructive array:- which doesn't modifies the original data instead of create a new array or object */

let uppercase = firstName.toUpperCase();
console.log(uppercase);

console.log(description.includes("devloper"));