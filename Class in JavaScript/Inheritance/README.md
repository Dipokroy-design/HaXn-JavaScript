# 🧬 What is Inheritance?

### **_Inheritance_** means **_a child object or class can inherit properties and methods_** from a parent (base) object/class.

**_This allows:_**

- Code reuse

- Shared behavior across similar types

- Extension of base functionality without rewriting

Think of it like:

> **NOTE**: **🧒 Child gets traits (like eye color, height) from 👨‍👩 Parent**.

# ✅ Inheritance in JavaScript (2 ways)

1. ## 🔁 Prototypal Inheritance (Core JS Style)

```JS
const Animal = {
  speak() {
    return "Animal speaks";
  }
};

const Dog = Object.create(Animal); // Inherit from Animal
Dog.bark = function () {
  return "Woof!";
};

console.log(Dog.speak()); // Inherited from Animal
console.log(Dog.bark());  // Dog's own method
```

2. ## 🏗️ Class-Based Inheritance (ES6+)

```JS
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks`;
  }
}

const dog = new Dog("Buddy");
console.log(dog.speak()); // Buddy barks

```

# 🛠 When to Use Inheritance

- **_You have shared logic between related types (like Vehicle → Car, Truck)_**

- **_You want to extend or customize base functionality_**

- **_You want a clean hierarchy of types_**

# 🧠 Under the hood:

## In Prototypal Inheritance

JS Object internally reference their **Prototypal Chain**

```JS
const animal = {
  walk() {
    return "walking...";
  }
};

const cat = Object.create(animal);
cat.meow = () => "meow";

console.log(cat.walk()); // JS looks up the prototype chain!
```

## In class Inheritance :

**_JS still uses prototypes,_**but `class` is just syntactic suger over prototype chaning.

```JS
class A {}
class B extends A {}
// Behind the scenes:
// B.prototype.__proto__ === A.prototype
```

# Summary Table

| OOP Pillar    | Description                              | JavaScript Tools               |
| ------------- | ---------------------------------------- | ------------------------------ |
| Encapsulation | Hide Internal state                      | Closures,`#Private` Fields     |
| Abstraction   | Hide complexity, expose symple interface | Functions, classes, modules    |
| Inheritance   | Share behavior from parent to child      | `extends`, prototype chain     |
| Polymorphism  | One Interface, different behaivor        | Method overriding, duck typing |
