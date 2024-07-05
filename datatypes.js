/** 1. numbers
 * 2. strings
 * 3. boolean
 * 4. null
 * 5. undefined
 * 6. object
 * 7. symbol
 */
/**string is nothing but group of characters or sequnence of characters */

/**strings mainly 4 properties are there:- 
 * 1. string cancetination
 * 2. how to access characters in a string
 */


//1.string cancetination
let firstName = "LakshmanKumar";
let lastName = "Majji";
let space = " ";

let fullName = firstName + space + lastName;

console.log(fullName);

console.log("\n");


//2. how to access characters in the string
/**  by string traversal which is to accessing each and every charater by it's indexes */
let string = "kalki";
let i = 0;

let count = 1;

while (i < 5) {
  console.log(`${count}` + ".", string[i]);
  i++;
  count = count + 1;
}
console.log("out of the loop");
console.log("\n");

//3 string properties
/**property :- means which tells us the 'information' */
let name = "Veera Venkata Satyanarayana";

let Length = name.length; //tells the length of the "string"
console.log(Length);


console.log("\n");

//4. string methods
/**methods :- which perform some action
 * two types :- 1. destructive 2. non-destructive
 * destructive :- when we apply a method then exisisting original should be changed
 * nond-destructive :- when we apply a method then exisisting original should be not changed only orginal variable is changed
 */

let myName = "lakshmankumar majji"; //index starts with "0"
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.indexOf("m"));
console.log(myName.lastIndexOf("m"));
console.log(myName.replace("m", "M"))
console.log(myName.substring(0, 8)); //o/p is "lakshman"

console.log(myName.includes("kumar")); //includes gives "true" or "false"

console.log(myName.startsWith("l")); //startsWith gives "true" or "false"
console.log(myName.endsWith("i")); //endsWith  gives "true" or "false"
console.log(myName.at(2))


// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).
let text = "Apple, Banana, Kiwi";
console.log("length of the string 'text' is.......", text.length);
let part = text.slice(16, 18);  //start postion is printed as per u given index_num but last position's before index is printed 

let res = text.slice(-12); //negative count starts from the end of the index
console.log(res);

console.log(part);


console.log(text.substring(6, 19)); //start postion & end position  after and before postions are printed

console.log(text.substr(7, 8)); //form starting postion to up to count the 8th  indexe before from the starting postion 7

let text1 = "      Himalayan      ";
let text2 = text1.trim();

console.log(text2.trim());


let A = 500;
let b = "kumar";
// number cannot be divisible by "string"
console.log(A / b);

console.log("\n" + "\n" + "\n");



//template literals
/**it is used to reduce the complexity of the cancatenation  */

let MyName = "Majji Lakshman Kumar";
let designation = "Fullstack devloper";
let workedAsA = "intern";
let company = "GodaInfotech";
let place = "Rajahmundry";

console.log(`My Name is ${MyName} I worked as a ${workedAsA} with role of ${designation} in ${company}, ${place}`);