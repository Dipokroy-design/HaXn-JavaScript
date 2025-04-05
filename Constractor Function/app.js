// Constructor function

function AboutPerson(name, age, gender, job) {
  (this.name = name),
    (this.age = age),
    (this.Gender = gender),
    (this.Job = job);
  this.info = function () {
    return `The person name is ${this.name} and he is ${this.age} and ${this.Gender} and he is a ${this.Job}`;
  };
}

let john = new AboutPerson("John", 23, "Male", "Developer");
console.log(john.info());

// function PersonInfo(name, age, pl) {
//   this.name = name;
//   this.age = age;
//   this.pl = pl;
//   this.info = function () {
//     return `The person name is ${this.name} and he/she is ${this.age} and he/she love to code in ${this.pl}`;
//   };
// }
// let Dipok = new PersonInfo("Dipok", 23, "JavaScript");
// console.log(Dipok.info());
// let John = new PersonInfo("John", 23, "Java");
// console.log(John.info());
// console.log(Dipok.name);

// function Cars(make, model, year, color) {
//   (this.make = make),
//     (this.model = model),
//     (this.year = year),
//     (this.color = color),
//     (this.carinfo = function () {
//       return ` The car make is ${this.make} and the model is ${this.model} and the year is ${this.year} and the color is ${this.color}`;
//     });
// }
