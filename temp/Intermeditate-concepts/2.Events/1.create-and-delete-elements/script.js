//1. select the Element or query the dom
let button = document.querySelector('body > div > button');
let addNewList = document.querySelector('body > div > ul');

//2. addeventListner to the "button"  //3. tract event_type  //4. callback func
button.addEventListener("click", () => {

  //creating a new list
  let newList = document.createElement('li');
  //add class called "lists" to the new list "li"
  newList.classList.add("lists");
  newList.innerText = "burger";

  //Adding new list to the "ul"
  addNewList.prepend(newList);

  console.log("this is newly createdList--->", addNewList.innerText);

  //here old lists hold the "eventListners" so creating a eventlistner to the parent('ul')

  addNewList.addEventListener('click', (event) => {

    if (event.target.tagName === "LI") {

      event.target.remove();
      console.log('hey u removed this Li----->', event.target.innerText);
    }

  });

  //taking particular list
  /**here we click the particular "list" that will be printed. here we addEventListner to the particular list
   * not going to call any "parent" for the event listner so we can't bubble up any parent(Ul) 
   */
  // const newLI = document.querySelector('.lists');

  // newLI.addEventListener('click', (event) => {
  //   event.stopPropagation();
  //   console.log("stop propogation");
  // })


});

