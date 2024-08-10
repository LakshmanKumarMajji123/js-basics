/**Arrays:- it stores multiples values together of same datatype 
 * in this js array having 3 properties
 * 1. Access elements in a array
 * 2. Array properties
 * 3. Array Methods
*/

/**destructive-array:- this approach to modifies the original array  */

/**if you use "push" or "pop" methods those elements are added or remove last elements in the array. */

let myName = [
  "Ram", "Satish", "Teja", "Lakshman", "Vardhan"
];
myName.push("Lithin", "Sunny");
myName.pop("Lakshman");
let count = 0;
do {
  console.log(myName[count].toUpperCase());
  count++;

} while (count < myName.length)


