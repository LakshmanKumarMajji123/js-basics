let ten = 10; //global variable it can access any where in the program

let one = 1;

if (ten > `${one}`) {
  console.log('true');


  if (ten == 10) {
    let B = 100; //this vAriABle"B" is only limited to this code Block only

    // var B = 100; by susing var it works bcz it doesn't restrict with any scopes like "global & local" 
    //only let and const keywords are strict with global & local scopes

    console.log(ten, B);
  }

  if (ten <= 100) {
    let c = 1000; //this vAriABle"c" is only limited to this code Block only

    console.log(ten, B, c); //it shows error bcz "variable B" is only limited to above "if code block" only
  }
}

console.log("\n");