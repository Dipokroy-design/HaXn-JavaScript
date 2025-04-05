// Factory function

function createObj(personName, personAge, personJob) {
  return {
    name: personName,
    age: personAge,
    job: personJob,
    info: function () {
      return `${this.name} and age is ${this.age} and Job tittle is ${this.job}`;
    },
  };
}

let person1 = createObj("John", 30, "Developer");
let person2 = createObj("Jane", 25, "Designer");

console.log(person1.info());
console.log(person2.info());
