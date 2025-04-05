function vehicles(type, brand, model, year) {
  return {
    type: type,
    brand: brand,
    model: model,
    year: year,
    info: function () {
      return ` This vehivles is a ${this.type} it's a ${this.brand} the model is ${this.model} and the year is ${this.year}`;
    },
  };
}
let car1 = vehicles("Hybride", "BMW", "M5", 2023);
let car2 = vehicles("Electric", "Tesla", "Model S", 2023);
let car3 = vehicles("Gasoline", "Toyota", "Corolla", 2022);

console.log(car1.info());
console.log(car2.info());
console.log(car3.info());
