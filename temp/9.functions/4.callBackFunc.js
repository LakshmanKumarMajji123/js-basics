//In js function decalration & func definitions are same
//defining functions 
let addition = function add(a, b) {
  return a + b;
}

let subtraction = function sub(a, b) {
  return a - b;
}

let multiplication = function mul(a, b) {
  return a * b;
}



function operations(Add, Sub, Mul) {

  let addition = Add(12, 14); //26
  let subtraction = Sub(14, 12); //2
  let multiplication = Mul(12, 12); //144


  console.log(`addition is :- ${addition}
               subtraction is:- ${subtraction}
               multiplication is:- ${multiplication}`);

}

operations(addition, subtraction, multiplication); //passing function definitions as a "Arguments"



function eatBreakfast(item, time, brushTeeth) {

  brushTeeth();
  console.log("Daily Morining i eat", item, "at", time, "a.m");

}

function brushTeeth() {

  console.log("Before take the Breakfast u shoudld brush your Teeth");
}

eatBreakfast("Dosa", 9, brushTeeth);