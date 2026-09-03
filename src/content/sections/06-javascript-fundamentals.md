# JavaScript Fundamentals

## Introduction

JavaScript adds **behavior and interactivity** to web pages. Unlike HTML, which defines the structure, and CSS, which controls presentation, JavaScript can respond to user actions, manipulate HTML elements, perform calculations, and control program flow.

This section introduces the basic JavaScript concepts used in the examples, including DOM element selection, variables, data types, conditions, operators, loops, and comments.

## JavaScript Comments

Comments are ignored by JavaScript and are used to explain code or temporarily disable code.

### Single-Line Comments

Use `//` for a comment that occupies one line.

```js
// This is a single-line comment
```

### Multi-Line Comments

Use `/* */` for comments spanning multiple lines.

```js
/*
This is
a multi-line
comment
*/
```

## Accessing HTML Elements

JavaScript can access elements from the HTML document through the **DOM (Document Object Model)**.

### `getElementById()`

Selects an element using its `id`.

```js
document.getElementById("mybtn");
```

You can also modify the element's HTML content:

```js
document.getElementById("mybtn").innerHTML = "new btn";
```

### `getElementsByClassName()`

Selects elements that have a specific class.

```js
document.getElementsByClassName("mydiv");
```

Because multiple elements can have the same class, this method returns a collection of elements.

### `getElementsByName()`

Selects elements using their `name` attribute.

```js
document.getElementsByName("myinp");
```

### `getElementsByTagName()`

Selects elements based on their HTML tag name.

```js
document.getElementsByTagName("div");
```

For example, this retrieves the `<div>` elements in the document.

## Browser and Page Interaction

JavaScript can interact with the browser and display information to the user.

### `window.alert()`

Displays an alert dialog.

```js
window.alert("This is an alert message");
```

`window` represents the browser window, and many browser-related functions are available through it.

## Variables

Variables store values that can be used and changed during program execution.

The examples use `var` to declare variables:

```js
var userName = "26";
```

A variable can also be declared without immediately assigning a value:

```js
var x;
```

## Primitive Data Types

Primitive data types represent basic values in JavaScript.

The examples introduce:

* **String** — text values
* **Number** — numeric values
* **Boolean** — `true` or `false`
* **Null** — an intentional empty value
* **Undefined** — a variable that has not been assigned a value

Example:

```js
var userName = "26";
```

Here, `"26"` is a **string**, not a number, because it is surrounded by quotation marks.

### Checking a Type with `typeof`

The `typeof` operator can be used to determine the type of a value.

```js
console.log(typeof userName);
```

## `null` vs `undefined`

Although both represent an absence of a useful value, they have different meanings.

### `null`

`null` represents an intentionally empty value.

```js
var value = null;
```

### `undefined`

`undefined` usually means that a variable has been declared but has not been assigned a value.

```js
var x;
```

Here, `x` is `undefined`.

## Type Conversion

JavaScript provides functions for converting values between types.

### `Number()`

`Number()` converts a value into a number when possible.

```js
var age = Number(window.prompt("Enter your age"));
```

This is useful when receiving numeric input from the user because input obtained through `prompt()` is received as text.

## Conditional Statements

Conditional statements allow JavaScript to execute different code depending on whether a condition is true or false.

### `if`

Runs code when a condition is true.

```js
if (age < 15) {
    window.alert("Stage A");
}
```

### `else if`

Checks another condition when the previous condition was false.

```js
if (age < 15) {
    window.alert("Stage A");
} else if (age < 18) {
    window.alert("Stage B");
}
```

### `else`

Runs when none of the previous conditions are true.

```js
if (age < 15) {
    window.alert("Stage A");
} else if (age < 18) {
    window.alert("Stage B");
} else {
    window.alert("Stage Z");
}
```

Multiple `else if` statements can be used to handle multiple ranges or cases.

## Comparison Operators

Comparison operators compare values and produce a boolean result.

### `==`

The loose equality operator compares values after allowing type conversion.

```js
x == y
```

### `===`

The strict equality operator checks both the **value and data type**.

```js
x === y
```

For example:

```js
var x = 5;
var y = "5";

if (x === y) {
    console.log("They are equal");
}
```

The condition is false because `x` is a number while `y` is a string.

### `=` Assignment Operator

The `=` operator assigns a value to a variable.

```js
var x = 5;
```

It does **not** compare two values.

## Logical Operators

Logical operators combine or modify conditions.

### OR `||`

Returns true when at least one condition is true.

```js
if (grade >= 65 || grade < 75) {
    console.log("good");
}
```

### AND `&&`

Requires both conditions to be true.

```js
condition1 && condition2
```

### NOT `!`

Reverses a boolean value.

```js
if (!false) {
    console.log("good");
}
```

Since `false` becomes `true` when negated, the condition executes.

## `switch` Statement

A `switch` statement is another way to handle multiple possible values.

```js
var day = 3;

switch (day) {
    case 1:
        console.log("Saturday");
        break;

    case 2:
        console.log("Sunday");
        break;

    case 3:
        console.log("Monday");
        break;

    default:
        console.log("Not valid day");
}
```

### `case`

Defines a possible value to match.

### `break`

Stops the `switch` statement from continuing into the next case.

### `default`

Runs when none of the cases match.

## Loops

Loops repeat a block of code while a condition is satisfied.

## `for` Loop

A `for` loop is useful when the number of repetitions or the loop structure is known.

```js
for (var i = 1; i < 10; i += 2) {
    console.log("hello");
}
```

A `for` loop commonly contains three parts:

```js
for (initialization; condition; update) {
    // code
}
```

### Incrementing

These expressions can increase a value by one:

```js
i++;
```

```js
i += 1;
```

```js
i = i + 1;
```

### Decrementing

A value can be decreased by one using:

```js
i--;
```

For example:

```js
for (var i = 10; i > 0; i--) {
    // code
}
```

## Calculating Values with a Loop

Loops can be used to repeatedly update a variable.

```js
var sum = 0;

for (var i = 10; i > 0; i--) {
    sum += i;
}
```

Here, `sum` accumulates the values as the loop runs.

## Generating HTML with a Loop

JavaScript can generate HTML dynamically.

```js
var box = "";

for (var y = 1970; y <= 2010; y++) {
    box += '<option value="1970">' + y + '</option>';
}

document.getElementById("year").innerHTML = box;
```

The loop generates multiple `<option>` elements and then inserts them into the `<select>` element.

This demonstrates how JavaScript can dynamically modify the HTML page.

## Infinite Loops

A `for` loop can omit all three parts:

```js
for (;;) {
    // code
}
```

This creates an **infinite loop** because there is no condition that tells the loop to stop.

Infinite loops should be used carefully because they can cause the browser or program to become unresponsive.

## `while` Loop

A `while` loop repeatedly executes its body while its condition is true.

```js
var i = 0;

while (i > 10) {
    console.log("welcome " + i);
    i++;
}
```

The condition is checked **before** each iteration.

In this example, `i` starts at `0`, so `i > 10` is false and the loop does not execute.

## `do...while` Loop

A `do...while` loop executes its body first and checks the condition afterward.

```js
var i = 0;

do {
    console.log("welcome " + i);
    i++;
} while (i > 10);
```

Unlike `while`, a `do...while` loop executes **at least once**, even if its condition is initially false.

## JavaScript Functions

A function is a reusable block of code that performs a specific task.

```js
function sayHello() {
    alert("Hello, World!");
}
```

The function can later be called to execute its code:

```js
sayHello();
```

Functions help organize code and avoid repeating the same instructions.

## JavaScript Files

JavaScript can be written directly inside an HTML document using `<script>`:

```html
<script>
    function sayHello() {
        alert("Hello, World!");
    }
</script>
```

It can also be loaded from an external JavaScript file:

```html
<script src="./js/script.js"></script>
```

Using an external file keeps JavaScript separate from the HTML structure and makes the code easier to organize.

## Summary

In this section, you learned the foundations of JavaScript:

* Writing single-line and multi-line comments
* Selecting HTML elements using the DOM
* Using `window.alert()`
* Declaring variables with `var`
* Understanding primitive data types
* Distinguishing `null` from `undefined`
* Converting values with `Number()`
* Using `if`, `else if`, and `else`
* Understanding assignment and comparison operators
* Using `==` and `===`
* Working with logical operators
* Using `switch` statements
* Creating `for`, `while`, and `do...while` loops
* Creating infinite loops
* Generating HTML dynamically with JavaScript
* Creating and calling functions
* Using internal and external JavaScript files
