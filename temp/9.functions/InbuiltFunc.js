
//lastIndexOf
var animals = ["cheetah", "lion", "tiger"];
console.log(animals.lastIndexOf("kingkong"));
//indexOf
console.log(animals.indexOf("kingkong"), "\n");



//shift
let ranks = [1, 2, 3];
let students = ranks.shift();
console.log(students);
console.log("remove", students);

//Unshift
let cars = [1, 2, 3];
cars.unshift(4, 5, 6, 7);
console.log(cars);

let tech = [1, 2, 3, 4, 5];
tech.unshift(10, 9, 8, 7, 6);
console.log(tech);


//join
/**before doing that we apprach first normal manually then after done with the builtin func */

//take an array
let vehicles = ["cars", "bikes", "cycles", "autos"];

//take empty array
let empty = [];

//iterate the vehicles array each element should be filled in the "emptyarray"
for(let i = 0; i < vehicles.length; i++){

  empty = empty + vehicles[i];
}
//display the newly filled array "empty"
console.log(empty);

//by inbuilt function join()
let icecreams = ["buttersoktch", "strawberry", "vinella"];
let personWants = icecreams.join();
console.log(personWants);



//slice
var animals = ["cat", "monkey", "dog", "lion"];
var x = animals.slice(0, 2);
//0 is index 2 is number count of element in the array.

//toLowerCase()
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.toUpperCase());
 
//split()
str = "The quick       brown fox";
let res = str.split(" ");
console.log(res);