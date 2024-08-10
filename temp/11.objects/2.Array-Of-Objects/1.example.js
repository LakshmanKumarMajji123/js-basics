/**ArryOfObjects :- we can store multiple objects in array
 * 
 * we want to store every element complete information about name, age, gender, like that simply
 * approach the "Arry with Objects"
 */

let user = {

  name: "lohit",
  age: 12,

  Instagram: [
    { posts: "post1", likes: 520, comments: 30000},
    { posts: "post2", likes: 620, comments: 40000}
  ],

  accessAllELements: function(){

    this.Instagram.forEach(eachElement => console.log(eachElement));
  }
}
for(let i in user){

  console.log(user[i]);
}
console.log(user.accessAllELements());




 

 

