# Do not what to do in this code

**_Note_**:https://github.com/copilot/share/420e5338-43a4-8006-8901-fa09c0f46890

Let's explore how to implement robust email validation techniques in JavaScript, including regex patterns and using validation APIs.

### 1. Basic Regex Pattern

The most common approach to validate an email is using a regex pattern. Here is a simple example:

```javascript name=emailValidation.js
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Example usage:
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid-email")); // false
```

### 2. More Complex Regex Pattern

For more robust validation, a more complex regex pattern can be used:

```javascript name=complexEmailValidation.js
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

// Example usage:
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid-email@com")); // false
```

### 3. Using HTML5 Built-in Validation

HTML5 provides built-in email validation that can be utilized in web forms:

```html name=index.html
<!DOCTYPE html>
<html>
  <head>
    <title>Email Validation</title>
  </head>
  <body>
    <form id="emailForm">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <button type="submit">Submit</button>
    </form>

    <script>
      document
        .getElementById("emailForm")
        .addEventListener("submit", function (event) {
          if (!this.email.checkValidity()) {
            alert("Invalid email address");
            event.preventDefault();
          }
        });
    </script>
  </body>
</html>
```

### 4. Validation Using APIs

You can also use third-party APIs for more accurate email validation, which often includes checking for valid domains, MX records, etc. Here's an example using the "Abstract Email Validation API":

```javascript name=emailValidationAPI.js
async function validateEmail(email) {
  const apiKey = "YOUR_API_KEY_HERE";
  const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${encodeURIComponent(
    email
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.is_valid_format.value && data.is_smtp_valid.value;
  } catch (error) {
    console.error("Error validating email:", error);
    return false;
  }
}

// Example usage:
validateEmail("test@example.com").then((isValid) => console.log(isValid)); // true or false based on validation
```

### Summary

- **Basic Regex**: Suitable for simple email validation.
- **Complex Regex**: Provides more accurate validation by following email format rules more strictly.
- **HTML5 Built-in Validation**: Utilizes browser's built-in validation capabilities.
- **Validation APIs**: Offers the most robust approach, including real-time checks against domain records.

These techniques can be combined or used individually based on the specific needs of your application.
