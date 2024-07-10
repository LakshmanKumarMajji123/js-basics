/**To store mutliple objects in the array
 * simply want every detail information of "multiple things" approach "objects in arrays" 
 */

let Ecommerce_Website = {

  WebisteName: "Amazon",


  product_1: [

    { Product: "Mobile", Type: "i-phone", Total_price: 85999, Discount: "5%", Total_pieces: 30 }

  ], //to loop all product elements

  product_2: [
    { Product: "laptops", Type: "HP", Total_price: 60000, Discount: "8%", Total_pieces: 10 }

  ],

  //To access all the details in the array pdouct_1 in the "Ecommerce_website"
  AlldetailsFromProductOne: function () {

    this.product_1.forEach(productDetails => console.log(productDetails));

  },

  AlldetailsFromProductTwo: function () {

    this.product_2.forEach(productdetails => console.log(productdetails));

  },

  loggedIn: function () {
    //to access the propeties inside the object then declare "this" keyword
    return `Website name is......${this.WebsiteName}`
  },
  peoples: "10M"

};

console.log(Ecommerce_Website);
console.log(Ecommerce_Website["WebisteName"]);
console.log(Ecommerce_Website["peoples"]);

Ecommerce_Website["ratings"] = 5; //insert a new entery in the object "Ecommerce_Website"
console.log(Ecommerce_Website.AlldetailsFromProductOne());
console.log(Ecommerce_Website.AlldetailsFromProductTwo());









//console.log(Ecommerce_website.product_1);