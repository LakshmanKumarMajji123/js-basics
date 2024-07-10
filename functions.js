//function:- is a Reusable block of code. u can use anywhere in the program where it needed

//function declaration & function definition are same

/**
 * Regular function
 * variables or storing func
 * Arrow func
 * Methods
 * callback func
 */

/**syntax-- function func_name (parameters) */


//1. Regular function


Tittle();  //func call


function Tittle() {  //function definition
  console.log("Fullstack devloper");
}

Tittle(); //funct call or func invocation
Tittle(); //funct call or func invocation

//hoisting :- It is a Inbuilt behavoir which function can be used and  call the func before declaration.

Cinema(); //simply hoisting means we can call something before declaration.

function Cinema() {
  console.log("GameChanger");
}


//2. storing function
//storing a function in a "variable"
// technologies(); before intialization call the function it gives "error".
let technologies = function Javascript() {
  console.log("javascript is a programming language, it update and change the HTML, CSS, also it manipulate the data");

}

technologies();


//values are passed when at the time of call the function is called "Arguments"
//variables are passed when the function is declared


let year = function week(day) {
  let Day = day;
  console.log("Today is " + Day);
}

year("Monday");


//Arrow function
//In this we can't use the term "function"
/** (parameters) => {
 * what we are going to do 
} */

let person = designation => console.log("My designation is.....", designation);
person("Fullstack devloper");



let sumOfTwoNum = (num1, num2) => {
  num3 = num1 + num2;
  console.log("Sum of two numbers is ", num3);
}

sumOfTwoNum(12, 13, 14);



let actor = male => male;

console.log("actor name is ", actor("sarwanand"));


let Name = () => "welcome"; //empty parameter

console.log(Name());


//methods
/**it perform some action */

let MyFullName = "Majji Lakshman Kumar";

console.log(MyFullName.toUpperCase()); //toUpperCase() function is a method which takes input and convert into Uppercase
//attached functions like  "MyFullName.toUpperCase()" is called methods



//callback functions
