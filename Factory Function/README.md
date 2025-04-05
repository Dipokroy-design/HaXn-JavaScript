# This is about Factory Function

### Now look at this code

## Example

```
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

```

Now, understand the fundamentals. First, create a function and name it anything you want. Then, give the function some `parameters` that will relate to the object you want to make a key of value. After that, include a return statement and create an `object` inside the function, using the function’s name as the object’s name; there’s no need to provide an additional name. You can also create an `object` method for `object` details. than console it out.

A `Factory Function` is a type of function that is used to create a return `object.` It’s a design pattern that provides an alternative way to create an object compared to using constructors and new keywords.
