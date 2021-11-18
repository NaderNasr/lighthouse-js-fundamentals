const loopyLighthouse = function (range, multiples, words) {

  let rangeEnd = range[1] + 1;

  for (let x = range[0]; x < rangeEnd; x++) {
    // console.log(x)
    if (x % multiples[0] === 0 && x % multiples[1] === 0) {
      console.log("BattyBeacon");
    } else if (x % multiples[0] === 0) {
      console.log(words[0]);
    } else if (x % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(x);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
