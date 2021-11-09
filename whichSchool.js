let school = "";

function whichSchool(age) {
  if (age >= 1 && age <= 12) {
    school = "Elementary School";
    console.log(school)
  } else if (age >= 13 && age <= 18) {
    school = "Secondary School";
    console.log(school);
  } else {
    school = "Lighthouse labs";
    console.log(school);
  }
}

whichSchool(19)