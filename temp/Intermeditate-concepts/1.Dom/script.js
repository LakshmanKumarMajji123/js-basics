let contactSection = document.querySelectorAll("body > header > div.right-section");

contactSection.forEach(element => {

  //a +=b --> a = a + b;

  //innerHTML  1.changingContent
  element.innerHTML = "<h5>This is New Element</h5>" + element.innerHTML;

  //add n remove classes
  element.classList.remove("right-section");
  element.classList.add("header-right-section");
  //set and get attributes
  element.setAttribute("style", "background-color:#FFFF00; color:black;");

  //changingcssStyles
  element.style.color = "green";
  element.style.backgroundColor = "pink";

  console.log(element.innerText);
});


// let body = document.querySelectorAll("div");

// body.forEach(eachElement => {

//   eachElement.setAttribute("class", "EntireOneClass");

//   eachElement.style.backgroundcolor = "yellow";
//   eachElement.style.color = "red";

//   eachElement.classList.remove("EntireOneClass");
//   eachElement.classList.add("OneClass");

//   console.log(eachElement);
// });




// let backendDev = document.querySelectorAll("#services > div > div:nth-child(2)");

// backendDev.forEach(eachElement => {

//   eachElement.classList.toggle("services-card");
  
//   eachElement.style.border = "2px solid green";
//   eachElement.style.width = "600px";
//   eachElement.style.height = "210px";
//   eachElement.style.textAlign = "center";
//   eachElement.style.backgroundColor = "white";
//   eachElement.style.color = "black";
//   console.log(eachElement);
// });





