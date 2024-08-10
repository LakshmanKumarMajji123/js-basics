/**in Arrow functions we doesn't mention the term "function" 
 * it is involved with the storing funtion 
 * 
 * By taking one parameter we doesn't need to put parenthesis and curlybraces and return keyword.
 * by without taking any parameter or more than one parameter must put parenthesis and curlybraces and 
 * return keyword
 */


let name = () => "lakshmankumar";

console.log(name());



let addNum = (a, b) => {

  let c = a + b;
  return c;
}


console.log(addNum(1, 222));