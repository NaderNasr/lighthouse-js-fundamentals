const urlEncode = function (text) {
  let words = text.split(" ");
  let join = words.join("%20");
  let firstThree = join.substring(0, 3);
  let lastThree = join.substring(join.length - 3);
  let first = "";
  let last = "";

  for (let i = 0; i < join.length; i++) {
    if (firstThree === "%20" && lastThree === "%20") {
      first = join.substring(3);
      last = first.slice(0, -3);
    } else {
      return join;
    }
  }
  return last;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
