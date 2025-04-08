# Prototype Model

## Code

```JS
let obj = {};
console.log(obj);
```

### In this code every `object` of JavaScript has an anonymous property called protype

### - We can check the prototype of something 3 way

1. `obj.__proto__`
2. `obj.constructor.prototype`
3. `Object.getPrototypeOf(obj)`

```JS
let type = Object.getPrototypeOf(obj);
console.log(type);
```

## How to make a prototype method in JavaScript

### => Look at this code

```JS
// This is the prototype of the object
Object.prototype.Hello = function () {
  console.log(this);
  return this.length;
};

let obj = {
  name: "John",
  age: 30,
  pl: "devoloper",
};
console.log(obj.pl.Hello());
// This is the prototype of the object but it is not the same as the object.
Object.prototype.Hello = function () {
  console.log(this);
  return this.length;
};

let arr = [1, 2, 3];
console.log(arr.Hello());

```
