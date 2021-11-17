const repeatNumbers = function (data) {
  let result;
  let timesToRepeat;
  let numToRepeat;
  let convertToString;
  let output;
  let arr = [];
  let arrToString = "";

  for (let i = 0; i < data.length; i++) {
    timesToRepeat = data[i][1];
    numToRepeat = data[i][0];
    convertToString = numToRepeat.toString();
    result = convertToString.repeat(timesToRepeat);
    output = Number(result);
    arr.push(output);
    arrToString = arr.toString();
  }
  return arrToString;
};

console.log(
  repeatNumbers([
    [1, 10]
  ])
); // 1111111111
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
); // 11, 222
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
); // 10101010, 343434343434, 9292
