const checkAir = function (samples, threshold) {
  let counts = {};
  let limit = threshold * 100;

  samples.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  let cleanAmt = counts["clean"] * 10;
  let dirtyAmt = counts["dirty"] * 10;

  if (limit >= cleanAmt && cleanAmt > dirtyAmt) {
    return "Clean";
  } else {
    return "Polluted";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
); // Polluted

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25)); // Polluted

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
); // Clean
