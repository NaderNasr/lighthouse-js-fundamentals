for (let x = 100; x < 201; x++) {
  // console.log(x)
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("Loopy");
  } else if (x % 5 === 0) {
    console.log("Lighthouse");
  } else if (x % 3 === 0 && x % 5 === 0) {
    console.log("LoopyLighthouse");
  } else if (x % 3 === 0) {
    console.log(x);
  }
}
