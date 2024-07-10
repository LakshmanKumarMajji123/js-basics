/**
 * store multiple objects in the array
 * to tell detail information for every element in the array
 */

let Person = {

  name: "Majji Lakshman Kumar",
  age: 23,
  designation: "fullstack devloper",
  mobile_number: 9988776655,
  place: "Hyderabad",

  Frontend_devlopment: [
    { Technologies: "HTML, CSS, JAVASCRIPT", Frameworks: "React", About: "It is all about client-side devlopment" }
  ],

  Backend_devlopment: [
    { Technologies: "Nodejs", Frameworks: "Expressjs", About: "It is all about Server-side devlopment" }
  ],

  //to access the arrays "Frontend_devlopemnt" & "Backend_devlopment" insides "object"

  toAccessFrontend: function () {
    this.Frontend_devlopment.forEach(detail => console.log(detail));
  },

  toAccessBackend: function () {
    this.Backend_devlopment.forEach((backendDetails) => { console.log(backendDetails) });
  }, 

  login: function () {
    return this.age;
  },

  logout: function () {
    return this.place;
  }

};

for (let i in Person) {
  console.log(Person[i]);
}
console.log(Person.toAccessBackend());

Person["organization"] = "ModelN";

console.log(Person.organization);



let Avengers = [
  "Thor", "IronMan", "captainAmerica", "Hulk"
];

let heros = (each_person) => { //so  in array function passing single parameter

  console.log(each_person); //b/w curly braces print it...
};

Avengers.forEach(heros);

let powerstar = "Pawan kalyan";

 for(let i of powerstar){
  console.log(i);
 }
