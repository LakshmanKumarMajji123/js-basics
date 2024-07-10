let addition = function (a, b) {
  return a + b;
}

let subtraction = function (a, b) {
  return a - b;
}

let multiplication = function (a, b) {
  return a * b;
}

let divison = function (a, b) {
  return a / b;
}

function calculator(num1, num2, Add, Sub, Mul, Div) {

  let add = Add(num1, num2);
  let sub = Sub(num1, num2);
  let mul = Mul(num1, num2);
  let div = Div(num1, num2);

  // let output = (`Addition : ${add}, Subtraction : ${sub}, Multiplication : ${mul}, Divison : ${div}`);

  // return output;

  console.log(`Addition : ${add}, Subtraction : ${sub}, Multiplication : ${mul}, Divison : ${div}`);
}


calculator(12, 14, addition, subtraction, multiplication, divison); //passing arguments


























