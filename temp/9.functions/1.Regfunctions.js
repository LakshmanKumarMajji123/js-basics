/**function is a reusable block of code u can use wherever u want in your  code
 * A js function is executed whenever something invokes it(call it)
 */

/**1.regular function */


//TO find the length of the string
let name = "Srinivas";

function myNameLen(){

  console.log(name.length);
}


myNameLen();
myNameLen();


//sum of two numbers
function addTwoNum(a, b){

  let c = a + b;

  return c;

}

console.log("sum of two numbers is.....", addTwoNum(1, 2));


//print 1 to 100
function oneToHundred(){

  for(let i = 100; i >= 1; i--){
    console.log(i);
  }
}

oneToHundred();
 
mulTwoNum(12, 13); //this is hoisting we invoke the func before the func declaration
//multiplication of two numbers
function mulTwoNum(a, b){

  console.log(a * b);
}


//when the person is vaccinated or not by vaccination to verify the token number by getting vaccinated

let persons = ["ram", "charan", "teja", "vardhan", "siddhu"];

function vaccination(person) {   //person is parameter
  console.log(person,"is vaccinated");
}

for (let i = 0; i < persons.length; i++) {
  vaccination(persons[i]); //array elements is "arguments"
}