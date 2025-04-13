# Encapsulation

# 🔐 What is Encapsulation?

Encapsulation means **hiding the internal state and behavior** of an object and only exposing a **controlled interface**. It helps:

- Protect data from being modified directly

- Reduce complexity

- Improve code modularity

# Example code

```JS
function countList() {
  let _count = 0;

  this.addNumber = function (num) {
    if (num > 0) {
      _count += num;
      return `Your count number is ${_count}`;
    } else {
      return `please provide a valid number to add`;
    }
  };
  this.getCount = function () {
    return _count;
  };
}

let CountNum = new countList();

console.log(CountNum.addNumber(1000));  //this will add the number in your code
console.log(account.getCount()); // ✅ 1000
console.log(CountNum._count);  //❌ undefined (balance is private)
```

### 🔒 Here, `_count` is encapsulated — no one can access or change it directly, only through `addNumber()` and `getCount()`.

# ✅ Modern Approach Using Classes and Private Fields (ES2022+)

```JS
class BankAccount {
  #balance = 0; // `#` makes this a private field

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance()); // ✅ 500
console.log(account.#balance);     // ❌ SyntaxError
```

> **NOTE**: Using `#privateFields` is the modern, language-supported way to encapsulate in classes.

## 🧠 How to Understand it Effectively:

- **Think like a gatekeeper**: Only allow safe operations through "public methods".

- **Don't expose internal variables** unless absolutely necessary.

- **Use closures or private fields** to protect data.
