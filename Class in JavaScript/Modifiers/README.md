## 4 Part of OOP 🏛️

- ### **🏛️.Encapsulation**

- ### **🏛️.Abstraction**

- ### **🏛️.Inheritance**

- ### **🏛️.Polymorphism**

# Some JavaScript Public, Private, Protected feild and Methods.

```JS
    this.public = public;
```

- ### This is a public field that can be accessed from anywhere.

```JS
    const _private = private;
```

- ### This is a private field you can’t access this, it’s private.

```JS
    const _protected = protected;
```

- ### This is a protected field it also can not be access.

# Method.

```JS
    this.publicMethod = function () {
    return `This is a public Method ${this.public}`;
  };
```

- ### This is a public method that can be accessible.

```Js
    const _privateMethod = function () {
    return ` This is private method ${_private}`;
  };
```

- ### This is a private method it also can not be accessible.

```JS
    const _protectedMethod = function () {
    return ` This is protected mehtod ${_protected}`;
  };
```

- ### This is a protected method it also can not be accessible.

# Method to access protected methods.

```JS
    this.CallMethod = function () {
    return _protectedMethod();
  };
```

- ### This is how you can access the protected method.
