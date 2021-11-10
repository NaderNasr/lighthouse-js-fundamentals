const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

const chooseStations = function (stations) {
  let availableStations = [];

  // console.log(stations)
  for (const station of stations) {
    let limit = 20;
    let capacity = station[1];

    if (capacity >= limit) {
      const typeOfStation = station[2];
      if (typeOfStation === "school" || typeOfStation === "community centre") {
        availableStations.push(station[0]);
      }
    }
  }
  return availableStations;
};

console.log(chooseStations(stations));
