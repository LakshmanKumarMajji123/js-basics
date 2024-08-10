let button = document.querySelector('body > div > button');

let lists = document.querySelector('body > div > ul');

button.addEventListener("click", () => {

  let newList = document.createElement("li");

  newList.innerHTML = "<li class='lists'>fullstack devloper</li>";

  lists.prepend(newList);

  console.log("lists.textContent");
})