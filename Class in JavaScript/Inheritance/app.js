class ClassRoom {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }
  info() {
    return `student name is ${this.name} and his position in class is ${this.roll}`;
  }
  studentRoll() {
    return `the student roll is ${this.roll}`;
  }
}

// class attandace extends ClassRoom {
//   super(name, roll) {}
// }

// const firstStudent = new attandace("dipok", 22);
// console.log(firstStudent.info());
