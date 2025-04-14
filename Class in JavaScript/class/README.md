```JS
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
    super(name, age, job); //this mean you don't need to rewrite the keys for new object just call super() method and add the perameters and now you are done.
    // this.job = job;
  }
}

const Akil = new SecendPerson("Akil", 22, "programmer");
console.log(Akil);


```

# Let's talk about class in JavaScript and how we can make and understand this.

### Let's go with a step-by-step first write class, then give a name and use `{ }` brace, then write a `constructor` this constructor is a function, then give a parameter and give him some values, then write the keys and value by using `this` you can also add Prototype calls like Methods, then make a new object by using `new` and give the class name and you are ready to go.

# Inherite subclass

### Why use inherited: `Code reusability:` Don’t repeat yourself—reuse common logic from a parent class. `Organized structure:` Keep shared behavior in one place (the base class). `Easy extension:` Add new features without touching existing code. Now let's know about how to make the class in javascript,

### Now understand how to write this first, make a `class` and then write the name of the class and then write `extends` and also write the previous class that you want to reuse the object. Now you have to give the name Let go to the next step I want to give you knowledge about `super( )` if you are making an inherited subclass, you have to write this Special Function if you don’t write this, it will through you an error and remember her perimeters you have to write just value of your newly object that you want to store don’t give the key name it will also through you an error then after that all the things are same to same just make and enjoy.
