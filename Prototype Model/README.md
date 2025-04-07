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
