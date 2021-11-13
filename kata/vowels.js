const numberOfVowels = function (data) {
  let dataLen = data.length;
  let numOfVowels = 0;
  for (let i = 0; i < dataLen; i++) {
    if (
      data[i] === "a" ||
      data[i] === "e" ||
      data[i] === "i" ||
      data[i] === "o" ||
      data[i] === "u"
    ) {
      numOfVowels = numOfVowels + 1;
    }
  }
  return numOfVowels;
};

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("lighthouse labs")); // 5
console.log(numberOfVowels("aeiou")); // 5
console.log(numberOfVowels("lorem ipsum")); // 4
console.log(numberOfVowels("Nader Nasr")); // 3
