/**combination of call-back and arrow function */

let chicken = [
  "grillChicken", "tandooriChicken", "kababChicken"
];


let items = item => console.log(item); // storing function passing a parameter item

chicken.forEach(items); //passing function definition as an arguments



let Bikes = {

  name: "himalayan",
  color: "black",
  model: 2024,
  price: 400000,


  condition: [
    { horsePower: "1000cc", weight: "75kg", mileage: "25km" }
  ],

  start: function () {
    return `When you Accelerates it moves forware`;
  },

  stop: function () {
    return `when you Applied brake it stops immediately`;
  }

};

for (let details in Bikes) {

  if (Bikes[details] == this.start) {

    // continue;
    console.log("working");

  } else {
    console.log("not working");
  }

  console.log(Bikes[details]);

};




