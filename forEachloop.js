//it is combination of Array fun & call back func

/**() => {
 * return keyword
 * if parameter is "one" then remove parenthesis, curly braches "return" keyword
} */

//forEach is mainly used to iterate the "individual" elements in the array

console.log("\n");


let PoliceOfficer = {

  Name: "Majji Vijaya Teja",
  Age: 19,
  Caste: "BC-D",
  Gender: "Male",
  Place: "yeleswaram"

};

/**you can iterate over a JavaScript object using forEach().
 * if you transform the object into an array first, using Object. keys() , Object. values() , or Object */

//using  Object.keys()
Object.keys(PoliceOfficer).forEach(details => {
  //console.log(PoliceOfficer[details]);
  console.log(PoliceOfficer[details]); //it's like for-in accessing index's/keys
})

console.log("\n");
Object.values(PoliceOfficer).forEach((detail) => { console.log(detail) });


Object.entries(PoliceOfficer).forEach((detail) => { console.log(detail) });


console.log("\n");


let celebrities = [

  "Ramcharan", "Alluarjun", "PrabhasRaju", "Jr.ntr"
];

//arrow funct () => {}

let celebrity = (person, index) => console.log(`s.no:- ${person, index} Name is:- ${person}, hits is :- ${person.length}`);

celebrities.forEach(celebrity);




let fullStacks = [
  "Javafullstack", "Mernstack", "Meanstack", "Pythonfullstack", ".netfullstack"
];

//you can access the values by  for-of in only array, strings not in objects

let stacks = (each_stack => {console.log(each_stack)});

fullStacks.forEach(stacks);


console.log("\n");