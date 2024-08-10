/* object literals means key and value pairs we can store any type of information
num, string, boolean*/

let person = {
  name: "Rahul",
  age: 23,
  gender: "male"
};

//to insert a new key & value pairs
person["city"] ="Rajahmundry";
console.log(person);


//take user input to see the particulr key from the object
let key = "age";
console.log(person[key]);
 


 //to see the particular value
 console.log(person.name);