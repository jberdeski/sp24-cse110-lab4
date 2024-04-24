let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

for (let prop in statistics) {
  /* Here the ===  checks if the property starts with the letter 'r' and %2 !== 0 checks if the value is an odd number */
  if (prop[0] === 'r' || statistics[prop] % 2 !== 0) {
    console.log(statistics[prop]);
  }
}
