/**Objects is nothing but a "keys & values" pair
 * for-of--> to access the values
 * for-in---> to access the keys/indexes
 */

//for-of doesn't work in the "objects"

/**
 * 1.  To access values in the  objects
 * 2. Add new keys in the objects
 */
const student = {
  Name: "Majji Lakhsman Kumar",
  Age: 23,
  PassedOutYear: 2023,
  College: "Godavari Institute of Engineering & Technology",
  Designation: "Fullstack Devloper"
};

student["PhoneNumber"] = 9999999999;

for (let details in student) {

  if (details == "PassedOutYear") {
    continue;
  }
  console.log(details + ": " + student[details]);

}

//break : if you aheive your target then don't want to move next "iteration".
//continue: if you skip the particular one from the list then use "continue".

console.log("\n");

let Employer = {

  Name: "Majji Ram Kumar",
  Age: 23,
  Designation: "Quality Analyst",
  CTC: 500000,
  Organization: "Divis laboratory",
  Location: "vishakapatnam"

};

Employer["Phoenumber"] = 7569833314;
//to access the valus in object by using for-in loop in--access the indexes/keys
for (let d in Employer) {
  console.log(d + ": " + Employer[d]);
}


console.log("\n");
