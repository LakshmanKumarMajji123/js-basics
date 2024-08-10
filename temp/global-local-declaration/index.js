let a = 1000;

if (a == 1000) {

  console.log(true);

  let b = 30;

  if (a > b) {
    console.log(`${a} is greater than ${b}`);

    let c = 300;

    if (((a > b) && (a > c))) {

      console.log(`${a}`);

    } else if (((b > a) && (b > c))) {

      console.log(`${b}`);
    } else {
      console.log(`${a}`);
    }
  }
  console.log(`${a}, ${b}, ${c}`);
}