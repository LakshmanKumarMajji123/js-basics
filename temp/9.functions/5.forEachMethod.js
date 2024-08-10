let sweets = ["laddu", "gulabjammun", "kova", "rasagulla"];

//filled with this empty array(box) from copying each element from the array called "sweets"
let box = [];

sweets.forEach((elements, index) => {

  console.log(elements, index);
  // box = box + elements;
  box.push(elements);
})
console.log("......ForEach method......");
console.log(box);


//map method
let withoutCreatingNewArray = sweets.map(
  function (elements) {
    return elements; //by this return keyword new array will be created and stored the elements from the array "bikes"
  }
);
console.log("......Map method......");
console.log(withoutCreatingNewArray);


//filter method
let filter = sweets.filter(
  function (elements) {
    return elements == "rasagulla";
  }
);
console.log("......Filter method......");
console.log(filter);
