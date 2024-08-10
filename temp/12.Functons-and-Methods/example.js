let user = {

  //properties: which tells us the information about the object
  name: "Majji Lakshman Kumar",
  age: 22,
  gender: "Male",
  designtion: "Fullstack Devloper",

  //methods: which performs some action
  login: (a, b) => {

    return a + b;
  },
  logout: (a, b) => {

    return a - b;
  },

  signIn: function () {
    return this.name //u can access the keys of an object first u need to call the "object"
  }

}
//take input from the user to see the particular key value
let key = "designtion";
console.log(user[key]);

console.log(user.login(12, 14)); //to access method
console.log(user.logout(12, 15));
console.log(user.signIn());


console.log(this);