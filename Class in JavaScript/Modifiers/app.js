// Example using closures for private and protected members
function AllClass(public, private, protected) {
  // this is a public field
  this.public = public;

  // this is a private feild
  const _private = private;

  // this is a protected feild
  const _protected = protected;

  //   Methods in class

  //   this is a public method
  this.publicMethod = function () {
    return `This is a public Method ${this.public}`;
  };

  //   this is a private method
  const _privateMethod = function () {
    return ` This is private method ${_private}`;
  };

  //   This is a protected method
  const _protectedMethod = function () {
    return ` This is protected mehtod ${_protected}`;
  };

  //   this is how you can call the protected mehtod
  this.CallMethod = function () {
    return _protectedMethod();
  };
}

const myObject = new AllClass(
  "public feild",
  "private feild",
  "protected feild"
);
console.log(myObject.public);
console.log(myObject._private);
console.log(myObject._protected);
console.log(myObject.publicMethod());
console.log(myObject._privateMethod());
console.log(myObject._protectedMethod());
console.log(myObject.CallMethod());
