const sumLargestNumbers = function (data) {
  data.sort(function (a, b) {
    return b - a;
  });
  for (let i = 0; i < data.length; i++) {
    return data[i] + data[i + 1];
  }
};

console.log(sumLargestNumbers([1, 10])); //11
console.log(sumLargestNumbers([1, 2, 3])); //5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); //126
console.log(sumLargestNumbers([1000, 40, 340, 60, 192, 2])); //1340
