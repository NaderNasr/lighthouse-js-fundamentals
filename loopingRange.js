function range(start, end, step) {
  let arr = [];
  let emptyArr = []
  for (let i = start; i <= end; i += step) {
    if (start === undefined || end === undefined  || step === undefined || start >= end || step <= 0) {
      return emptyArr;
    }
    arr.push(i);
    
  }
  return arr
}
console.log(range(0, 10, 2))
