// let obj = {};
// console.log(obj);

// let type = Object.getPrototypeOf(obj);
// console.log(type);

Array.prototype.Hello = function () {
  console.log(this);
  return this.length;
};

let arr = [1, 2, 3];
console.log(arr.Hello());
