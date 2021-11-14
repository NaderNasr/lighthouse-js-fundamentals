const instructorWithLongestName = function (instructors) {
  let arrLen = instructors.length;
  let newString = "";
  let newObj = {};

  for (let i = 0; i < arrLen; i++) {
    if (newString.length < instructors[i].name.length) {
      newString = instructors[i].name;
      newObj = {
        name: newString,
        course: instructors[i].course,
      };
    }
  }
  return newObj;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" }, // true
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" }, // true
  ])
);
