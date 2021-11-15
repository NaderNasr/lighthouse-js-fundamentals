const whereCanIPark = function (spots, vehicle) {
  let spotLen = spots.length;

  for (let row = 0; row < spotLen; row++) {
    for (let col = 0; col < spotLen; col++) {
      let availability = spots[row][col];
      let isAvailable = [col, row];

      if (vehicle === "small") {
        if (availability === "R" || availability === "S") {
          return isAvailable;
        }
        return false;
      } else if (vehicle === "regular") {
        if (availability === "R") {
          return isAvailable;
        }
      } else if (vehicle === "motorcycle") {
        if (
          availability === "R" ||
          availability === "S" ||
          availability === "M"
        ) {
          return isAvailable;
        }
      }
    }
  }
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
); // [4, 0] colum 4 - row 0 is available

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
); // false - none is available

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
); // [3, 1] colum 3 - row 1 is available
