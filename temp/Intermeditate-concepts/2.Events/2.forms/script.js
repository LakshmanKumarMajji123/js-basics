const form = document.querySelector('.feedback-form');
const p = document.querySelector('p');


//regex pattern
const usernamePattern = /^[a-z A-Z 0-9]{6,10}$/;  //means lowercase uppercase numericas min 6 max 10
const feedbackPattern = /^.{20,50}$/;

form.addEventListener("submit", (event) => {

  event.preventDefault();


  //Testing the "Regex pattern" by method (.test)
  const userRes = usernamePattern.test(form.username.value);
  const feedbackRes = feedbackPattern.test(form.feedback.value);

  // console.log(userRes, feedbackRes);


  if (userRes && feedbackRes) {

    //console.log("Both are 'TRUE'");
    p.setAttribute("class", "success");
    p.textContent = "Feedback SUBMITTED Thankyou!";

  } else {

    //console.log("FALSE");
    p.setAttribute("class", "error");
    p.textContent = "Please Check Usename and Feedback Again!";
  }

});



//here we take userinput field and feedback field
//username
form.username.addEventListener("keyup", event => {

  const userRes = usernamePattern.test(event.target.value);

  if (userRes) {
    form.username.setAttribute("class", "Accepted");
  } else {
    form.username.setAttribute("class", "Rejected");
  }

});


//feedback
form.feedback.addEventListener("keyup", event => {

  const feedbackRes = feedbackPattern.test(event.target.value);

  if (feedbackRes) {

    form.feedback.setAttribute("class", "Accepted");

  } else {
    form.feedback.setAttribute("class", "Rejected");
  }

});
