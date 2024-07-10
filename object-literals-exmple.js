/**object literals :- which can stores multiple types of data like num, boolean, string, array, null
 * 
 * to create properties  & methods
 * 
 * it is a keys & value pairs.
 */

let IT_employer = {

  //properties
  name: "Lithin",
  age: 24,
  organizatioin: "TCS",
  salary: 500000,

  //methods
  login: function () {
    return this.name;
  },

  logout: function () {
    return this.organizatioin;
  }

};


let array = [IT_employer];

//let details = detail => console.log(detail);

let details = detail => {

  console.log(detail);
}

array.forEach(details);










