function countPerson(name) {
  this.name = name;
}

countPerson.prototype.people = function () {
  return `They is a Human`;
};

let peoples = new countPerson("dipok", "John", "Ali");

console.log(peoples.people().__proto__);
