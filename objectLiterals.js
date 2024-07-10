/**
 * 
 * you work with "Multiple types of data" then approach "Object literals"
 * 
 * 
 * Object literals 
 * To overcome arrays to use the "Object literals" 
 * 
 * Array stores multiple values of same datatype
 * like integers 1, 2, 3, 4, 5 
 * like strigs " sai", "lakshamn", "vivek"
 * 
 * but comes to object literals---which can stores any kind of data like num, strings, booleans,
 * by using "keys & value" pairs
 * 
 * By using object literals to create "properties" & "methods"
 * 
 */

let FootballPlayer = {

  Name: "Christaino Ronaldo",
  Age: 33,
  Rank: 1,
  country: "Portuguese",


  /*Method: means function() is attached or associated with something. 
  like name.toUppercase(); , login: function(){};
  Also method perform some action

  */
  login: function (a, b, c) {

    if ((a > b) && (a > c)) {

      return a;

    } else if ((b > c) && (b > a)) {

      return b;

    } else {

      return c;
    }

  },
  //logout is "key" and Arrow function is "value"
  logout: (Name) => `My Name is.....${Name} and length of name is...${Name.length}`

};
console.log(typeof (FootballPlayer));
console.log(FootballPlayer.Name); //to see the content  (or) console.log(Footballplayer["Name"]);
FootballPlayer["spouse"] = "xyz"; //to insert new entery in the "object"

let key = "spouse";   //take input from the user to access the particular "key" must use only [] notation
console.log(FootballPlayer[key]);

console.log(FootballPlayer.login(12, 8, 45));

console.log(FootballPlayer.logout("Majji Lakshman Kumar"));

console.log(FootballPlayer);
// for (let detail in FootballPlayer) {

//   console.log(FootballPlayer[detail]);

// }


//IN js"this" keyword refers the object.

/**simply declare "this" keyword inside of the object it refers the particular object what you are already declared
 * "declare "this" keyword outside of the object it refers to "windows" object
 */

/**if you declare "this"  outside of the object it refers to "windows" object called as "globalscope"
 * if you called "this" keyword inside of the object it refers to the particular object like here "user" object
 */

let user = {
  //properties
  Name: "Ravi",
  age: 44,
  occupation: "teacher",
  gender: "male",

  //you want to access the properties inside the object then you need "this" keyword
  //methods
  loggedIn: function () {
    return this.occupation; //this refers the object "user"
  },

  loggedOut: function () {
    return this.Name;
  }


}

console.log(user.loggedIn()); //local scope
console.log(this); //global scope

