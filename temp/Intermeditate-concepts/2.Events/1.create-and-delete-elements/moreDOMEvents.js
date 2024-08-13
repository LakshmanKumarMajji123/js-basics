// const button = document.querySelector('body > div > button');
// let overallList = document.querySelector('body > div > ul');


// button.addEventListener("click", () => {

//   //create a new list here
//   let newList = document.createElement('li');
//   newList.classList.add("lists");
//   newList.innerText = "Sugar";

//   //put the list into the ul
//   overallList.prepend(newList);

//   console.log(overallList.innerText);

//   //to delete the element
//   //callback function
//   let copyElement = event => {

//     //event.stopPropogation();
//     if (event.target.tagName === "LI") {

//       event.target.remove();
//       console.log("removed list is......", event.target.innerText);
//     }

//   };
//   overallList.addEventListener("copy", copyElement);


// });



const body = document.querySelector('body');

const scroll = event => {

  console.log(event.clientX, event.clientY);

};

body.addEventListener("wheel", scroll);
