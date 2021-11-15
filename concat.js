function concat(arr, arrTwo) {
  return concatenated = arr.concat(arrTwo).sort((a, b) => a - b)
};

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 100, 20], []), "=?", [5, 10, 20]);
