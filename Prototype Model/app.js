// let obj = {};
// console.log(obj);

// let type = Object.getPrototypeOf(obj);
// console.log(type);

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
