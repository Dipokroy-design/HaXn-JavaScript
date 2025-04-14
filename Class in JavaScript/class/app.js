// Class declaration
class PersonName {
  constructor(name, age, job) {
    this.Name = name;
    this.Age = age;
    this.Job = job;
  }

  //   prototype call
  greet() {
    return `His name is ${this.Name} and he is ${this.Age} he is doing ${this.Job}`;
  }
}

let Dipok = new PersonName("Dipok", 22, "Developer");
console.log(Dipok);

// Inherite subclass

class SecendPerson extends PersonName {
  constructor(name, age, job) {
    super(name, age, job); //this mean you don't need to rewrite the keys for new object just call super() method and add the perameters you are done.
    // this.job = job;
  }
}

const Akil = new SecendPerson("Akil", 22, "programmer");
console.log(Akil);

//-----------------------------------------------------------------------------

class Hero {
  constructor(name, level) {
    this.Name = name;
    this.Level = level;
    this.AboutSuperHero = function () {
      return `I am ${this.Name} and my Level is ${this.Level} 🦅`;
    };
  }
  greet() {
    return `Wellcome ${this.Name}, and congratulation for your Level ${this.Level}`;
  }
}

const SuperMan = new Hero("SuperMan", 100);
console.log(SuperMan);
console.log(SuperMan.AboutSuperHero());
console.log(SuperMan.greet());

class Hero2 extends Hero {
  constructor(age) {
    super("Batman", 100); //remember always do not add the object keys in the super() method if you do that It will through you an error
    this.Age = age;
    this.Info = function () {
      return `I am ${this.Name} and my age is ${this.Age}`;
    };
  }
}
const Batman = new Hero2(65);
console.log(Batman);
console.log(Batman.Info());
