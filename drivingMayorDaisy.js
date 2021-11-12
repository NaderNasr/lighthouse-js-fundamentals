const carPassing = function (cars, speed) {
  const date = Date.now();

  const speedMonitor = {
    time: date,
    speed: speed
  }
  
  cars.push(speedMonitor)
  return cars

};

const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
];

const speed = 99;

console.log(carPassing(cars, speed));
