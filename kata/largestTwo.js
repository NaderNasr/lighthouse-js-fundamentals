const sumLargestNumbers = function (data) {
  let arr = data;
  arr.sort(function (a, b) {
    let sorted = b - a;
    return sorted;
  });
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    return arr[i] + arr[i + 1];
  }
};

// console.log(sumLargestNumbers([1, 10])); //11
// console.log(sumLargestNumbers([1, 2, 3])); //5
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); //126
console.log(sumLargestNumbers([1000, 40, 340, 60, 192, 2])); //1340
