# 🧩What is Abstraction :

- **_Abstraction_** means **_hiding complex details_** and showing only the **_essential features_** of an object or function to the user.

- It’s about **_what something does_**, not **_how it does it_**.

### Abstraction like a easy way to undestand code and better way to write

## Some Example code

### Without using abstraction :

```JS
function getMonthlySalary(base, bonus, taxRate) {
  const gress = base + bonus;
  const tax = gress * taxRate;
  const net = gress - tax;
  return net;
}
console.log(getMonthlySalary(70000, 25000, 0.2));
```

### Using Abstraction :

```JS
function getSalary(employee) {
  const { base, bonus } = employee;
  const taxRate = 0.2;

  function calculateSalary(base, bonus, taxRate) {
    const gress = base + bonus;
    const tax = gress * taxRate;
    return gress - tax;
  }
  return calculateSalary(base, bonus, taxRate);
}

const person1 = getSalary({ base: 60000, bonus: 25000 });

console.log(person1);
```

> **NOTE**: **_🎯 Abstraction hides the logic behind a simple interface_**: `getSalary()`.

## 🛠️ When to Use Abstraction

- **_To simplify complex logic_** – group it behind a single method or class.

- **_To create reusable components_** – so others (or you later) can use them without understanding internals.

- **_To protect from change_** – if logic changes later, you only update it in one place.

## 🧠 What's Happening Behind the Scenes in JavaScript?

JavaScript doesn’t have formal interfaces like Java or C#. But it **_allows abstraction_** through:

- **_Functions_**: Hide complex steps behind simple calls.

- **_Closures_**: Keep variables private, exposing only what you want.

- **_Classes_**: Use methods to abstract behaviors.

- **_Modules (ES6+)_**: Hide implementation by exporting only public APIs.
