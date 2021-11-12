function lastIndexOf(arr, val) {
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === val) {
      return i
    } 
  }
  return -1
}

console.log(lastIndexOf([ ], 2));
// lastIndexOf([0, 1, 4, 1, 2], 2);
