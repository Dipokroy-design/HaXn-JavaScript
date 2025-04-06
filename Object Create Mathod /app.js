// Object.create() Method

let person = function () {
  return `The person is ${this.name} and age is ${this.age} and profession is ${this.pl}`;
};

// let person1 = Object.create(person);

// person.name = "John";
// person.age = 30;
// person.pl = "Developer";

// console.log(person());

let person1 = Object.create(person, {
  name: { value: "John" },
  age: { value: 30 },
  pl: { value: "Developer" },
});

console.log(person());



function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Example usage:
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid-email")); // false