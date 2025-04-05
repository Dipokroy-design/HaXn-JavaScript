# This is about `Constructor Function`

### Now look at this

## Example:

```JavaScript
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
```

Now, understand the fundamentals First, you have to make a function you can name anything but with camel case, then give them some `parameters` that will be related to your object key. Then you have to write `this.` as your key name and add the `parameters` on it. In this Constructor Function, you need to add `this.` to create an `object.` Then, come to the main point: when you store the value of the constructor function in another value, you have to add `new` and then give the function name to it, and you will be ready to have your object.

> **note**: You have to add the `new` word to make the `object` if you don’t add the word, it will not work, so you have to add the word.

Constructor Functions in JavaScript are regular functions with the `new` keyword to create and initialize objects with shared properties and methods. They act as a blueprint for creating multiple instances of objects with the same structure and behavior.

## NEW KEYWORDS

1. Frist create a empty `object`
2. Set `this.` point of that `object`
3. We can omit the return statement using `new` Keyword.
