// Object.create() Method

let personOne = function () {
  return `The person is ${this.name} and age is ${this.age} and profession is ${this.pl}`;
};

// let person1 = Object.create(person);

// person.name = "John";
// person.age = 30;
// person.pl = "Developer";

// console.log(person());

let person1 = Object.create(personOne, {
  name: { value: "John" },
  age: { value: 30 },
  pl: { value: "Developer" },
});

console.log(personOne());

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Example usage:
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid-email")); // false

let person = {
  info: function () {
    console.log(
      `The person name is ${this.name} and he is ${this.age} years old and he is a ${this.pl}`
    );
  },
};
let randomPerson = Object.create(person);
randomPerson.name = "John";
randomPerson.age = 30;
randomPerson.pl = "Developer";

console.log(rendomPerson.info());