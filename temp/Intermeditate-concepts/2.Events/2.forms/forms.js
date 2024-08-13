// //select the element
// const form = document.querySelector('.feedback-form');
// const paragraph = document.querySelector('p');

// //Regex pattern 
// const usernamePattern = /^[a-z A-Z 0-9]{6,20}$/;
// const feedbackPattern = /^.{20,80}$/;


// //2. addEventListner   3. track event   4. what shold u do
// form.addEventListener("submit", event => {

//   event.preventDefault(); //which stops the default page refreshes


//   //testing the "regex pattern"
//   const userResult = usernamePattern.test(form.username.value);
//   const feedbackResult = feedbackPattern.test(form.feedback.value);

//   if ((userResult && feedbackResult)) {

//     paragraph.setAttribute('class', "success");
//     paragraph.textContent = "Feedback Submitted, Thank You!";
//   } else {

//     paragraph.setAttribute('class', "error");
//     paragraph.textContent = "Please Check your Details! Once";
//   }

// });

// //taking user input field n feedback input field
// //username
// form.username.addEventListener("keydown", event => {


//   const userKeyRes = usernamePattern.test(event.target.value);


//   if (userKeyRes) {

//     form.username.setAttribute("class", "Accepted");
//   } else {

//     form.username.setAttribute("class", "Rejected");
//   }

// });

// //feedback
// form.feedback.addEventListener("keydown", event => {

//   const feedbackKeyRes = feedbackPattern.test(event.target.value);

//   if (feedbackKeyRes) {

//     form.feedback.setAttribute("class", "Accepted");

//   } else {

//     form.feedback.setAttribute("class", "Rejected");

//   }


// });



//select the element

const paragraph = document.querySelector('p');

//Regex pattern  /^$/
const usernamePattern = /^[a-z A-Z 0-9]{6,30}$/;
const feedbackPattern = /^.{20,70}$/;


//displayData
function displayData(event) {
  /**The issue with your current code is that when you use event.target.value, 
 * it only refers to the value of the element that triggered the event (the input or textarea), 
 * not the entire form. 
 * This is why the validation is not working as expected. */

  event.preventDefault(); // which prevents the default pageRefresh

  // console.log(event.target);

  const usernameInput = document.querySelector('#username');
  const feedbackInput = document.querySelector('#feedback');

  //test the Regex pattern
  const userInputCheck = usernamePattern.test(usernameInput.value);
  const feedbackInputCheck = feedbackPattern.test(feedbackInput.value);

  //if both are true 
  if ((userInputCheck && feedbackInputCheck)) {

    paragraph.setAttribute("class", "success");
    paragraph.textContent = "Your Details are Successfully Submitted";

    //console.log("manam anukonte jaragandi antu em undadhu");

  } else {

    paragraph.setAttribute("class", "error");
    paragraph.textContent = "Please Check your Details Once!";

    //console.log("pakka error vastadi");

  }


}





//username
function usernameValidation(event) {

  const userRes = usernamePattern.test(event.target.value);
  /*here accessing "value" after evey single press. instead of utilizing form value */

  if (userRes) {

    event.target.setAttribute("class", "Accepted");

  } else {

    event.target.setAttribute("class", "Rejected");
  }

}


//feedback
function feedbackValidation(event) {

  const feedbackRes = feedbackPattern.test(event.target.value);

  if (feedbackRes) {

    event.target.setAttribute("class", "Accepted");
  } else {
    event.target.setAttribute("class", "Rejected");
  }
}