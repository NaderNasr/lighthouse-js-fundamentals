function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  let person = name;

  return person + " is " + age + " years old";
}

console.log(ageCalculator("Nader", 2004, 2016));
