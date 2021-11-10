function whichSchool(age) {
  console.log("I am " + age + ". Which school should I go to?");
  if (age >= 1 && age <= 12) {
    let school = "Elementary School";
    return school;
  } else if (age >= 13 && age <= 18) {
    let school = "Secondary School";
    return school;
  } else if (age >= 19) {
    let school = "Lighthouse Labs";
    return school;
  }
}

console.log(whichSchool(90));
