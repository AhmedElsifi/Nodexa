# JavaScript Functions, Objects, Arrays, and DOM

## Introduction

This section builds on JavaScript fundamentals by introducing reusable functions, objects, arrays, the Browser Object Model (BOM), and more advanced DOM manipulation.

You will also learn how to respond to user interactions using event listeners and modify HTML, CSS, and element attributes with JavaScript.

## JavaScript Functions

A function is a reusable block of code designed to perform a specific task.

```js
function calcTax(x, y) {
    var sum = x + y;
    console.log(sum / 2);
}

calcTax(5, 10);
calcTax(20, 15);
```

Functions can receive values called **parameters** and can be called with different arguments.

### Function Parameters and Arguments

Parameters are the variables defined in the function declaration:

```js
function welcome(name, age) {
    return "Hello " + name + " your age is: " + age;
}
```

Arguments are the actual values passed when calling the function:

```js
welcome("mohamed", 30);
```

### Returning Values

The `return` statement sends a value back from a function.

```js
function sum(x, y) {
    return x + y;
}

var result = sum(10, 20);
```

The returned value can be stored in a variable and used later.

## Types of Functions

JavaScript functions can be written in different forms.

### Function Declaration

A function declaration uses the `function` keyword with a function name.

```js
function funName() {
}
```

### Function Expression

A function can be assigned to a variable.

```js
var calcSum = function() {
};
```

### Self-Invoking Function

A function can be executed immediately after it is created.

```js
(function() {
    // logic
})();
```

This is also known as an **Immediately Invoked Function Expression (IIFE)**.

## Objects

Objects allow related data and functionality to be grouped together using **key-value pairs**.

```js
var person = {
    name: "ahmed",
    age: 26,
    salary: 2000
};
```

Properties describe the object:

```js
person.name;
person.age;
person.salary;
```

### Nested Objects

An object can contain another object as a property.

```js
var person = {
    name: "ahmed",
    age: 26,
    child: {
        name: "mazen",
        age: 3
    }
};
```

Nested objects allow related information to be organized into multiple levels.

### Methods

An object can also contain functions. A function stored inside an object is called a **method**.

```js
var person = {
    name: "ahmed",
    salary: 2000,

    totalPrices: function() {
        return this.salary;
    }
};
```

The `this` keyword refers to the object that the method belongs to.

## Browser Object Model (BOM)

The **Browser Object Model (BOM)** provides JavaScript with objects for interacting with the browser.

Common browser-related objects include:

* `window`
* `document`
* `screen`

### `window`

The `window` object represents the browser window.

Examples:

```js
window.alert("Hello");
window.console.log("Hello");
```

Many browser functions can also be used without explicitly writing `window`.

### `window.confirm()`

`confirm()` displays a dialog asking the user to confirm an action.

```js
var result = window.confirm("Are you sure?");
```

The result is a boolean value depending on the user's choice.

### `setTimeout()`

`setTimeout()` executes a function after a specified delay.

```js
setTimeout(function() {
    console.log("This is setTimeout");
}, 3000);
```

The delay is specified in milliseconds, so `3000` means approximately 3 seconds.

### `setInterval()`

`setInterval()` repeatedly executes a function at a specified interval.

```js
setInterval(function() {
    console.log("This is setInterval");
}, 1000);
```

The callback runs approximately every 1 second.

### `window.location`

The `location` object provides information about the current page location.

```js
console.log(window.location.href);
```

`href` contains the current page URL.

## Arrays

An array stores multiple values in a single variable.

```js
var friends = [
    "ahmed",
    15,
    "yousef",
    "karim",
    15,
    25,
    2026
];
```

Arrays use **zero-based indexes**, meaning the first element has index `0`.

```text
Index:   0       1       2
Value:   ahmed   15      yousef
```

### Array Length

The `length` property returns the number of elements in an array.

```js
friends.length;
```

### Accessing Array Elements

Elements can be accessed using their index.

```js
friends[0];
friends[2];
```

### Looping Through an Array

A `for` loop can be used to access every element.

```js
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
```

The loop starts at index `0` and continues until the last index.

## Array Methods

JavaScript provides methods for adding, removing, searching, and modifying array elements.

### `indexOf()`

Returns the index of the first occurrence of a value.

```js
friends.indexOf(15);
```

### `lastIndexOf()`

Returns the index of the last occurrence of a value.

```js
friends.lastIndexOf(15);
```

### `includes()`

Checks whether an array contains a specific value.

```js
friends.includes(15);
```

It returns `true` or `false`.

### `push()`

Adds an element to the end of an array.

```js
friends.push("yara");
```

### `unshift()`

Adds an element to the beginning of an array.

```js
friends.unshift("yara");
```

### `pop()`

Removes the last element from an array.

```js
friends.pop();
```

### `shift()`

Removes the first element from an array.

```js
friends.shift();
```

### `splice()`

Can remove, replace, or add elements at a specific position.

```js
friends.splice(3, 1, "mahmoud");
```

This starts at index `3`, removes `1` element, and inserts `"mahmoud"`.

### `concat()`

Combines arrays and returns a new array containing their elements.

```js
var combined = friends.concat(otherFriends);
```

## Arrays of Objects

Arrays can contain objects, which is useful for representing collections of related data.

```js
var products = [
    {
        name: "phone",
        price: 17000,
        desc: "sdfsdf"
    },
    {
        name: "tv",
        price: 17000,
        desc: "sdfsdf"
    },
    {
        name: "power bank",
        price: 17000,
        desc: "sdfsdf"
    }
];
```

Each element of the array is an object containing properties such as `name`, `price`, and `desc`.

## DOM

The **Document Object Model (DOM)** represents the HTML page as objects that JavaScript can access and modify.

The `document` object provides methods for finding and manipulating HTML elements.

### `querySelector()`

`querySelector()` accepts a CSS selector and returns the **first matching element**.

```js
document.querySelector(".mycls");
```

It can use selectors such as:

```js
document.querySelector("#title");
document.querySelector(".mycls");
document.querySelector("div");
```

### `querySelectorAll()`

`querySelectorAll()` returns all elements matching a CSS selector.

```js
var elements = document.querySelectorAll(".mycls");
```

It can also use more complex CSS selectors:

```js
document.querySelectorAll(".mycls .test");
```

## Changing HTML Content

The `innerHTML` property can be used to read or replace the HTML content inside an element.

```js
var h1 = document.querySelector("#title");

h1.innerHTML = "New Title";
```

This can also be used to insert HTML generated by JavaScript.

## Changing CSS with JavaScript

JavaScript can directly modify an element's inline styles through the `style` property.

```js
h1.style.color = "green";
h1.style.backgroundColor = "gray";
```

CSS properties containing hyphens are written using camelCase in JavaScript.

For example:

```css
background-color
```

becomes:

```js
element.style.backgroundColor;
```

### `style.cssText`

`cssText` can replace the element's inline style declarations.

```js
element.style.cssText = "color: aqua";
```

Be careful when using `cssText`, because assigning a new value can replace previously assigned inline styles.

## `classList`

The `classList` property provides methods for working with an element's CSS classes.

### `add()`

Adds a class.

```js
element.classList.add("myclass");
```

### `remove()`

Removes a class.

```js
element.classList.remove("myclass");
```

### `contains()`

Checks whether an element has a class.

```js
element.classList.contains("mycls");
```

It returns `true` or `false`.

### `toggle()`

Adds the class if it does not exist, or removes it if it already exists.

```js
element.classList.toggle("myclass");
```

## Changing HTML Attributes

JavaScript can change element attributes directly.

For example, the `href` attribute of a link can be changed:

```js
var link = document.querySelector("a");

link.href = "https://google.com";
```

This changes where the link points.

## Events

Events are actions that happen in the browser, such as clicking an element.

JavaScript can listen for these actions and execute code when they occur.

### `addEventListener()`

`addEventListener()` attaches an event listener to an element.

```js
var h1 = document.querySelector("#title");

h1.addEventListener("click", function() {
    console.log("The heading was clicked");
});
```

The first argument specifies the event type, such as `"click"`.

The second argument is the function that should run when the event occurs.

## Event Object

The event listener callback can receive an event object containing information about the event.

```js
element.addEventListener("click", function(e) {
    console.log(e.target);
});
```

`e.target` refers to the element that triggered the event.

For example:

```js
test[i].addEventListener("click", function(e) {
    console.log(e.target.innerHTML);
});
```

This retrieves the HTML content of the element that was clicked.

## Inline Event Handlers

HTML can also directly call a JavaScript function when an event occurs.

```html
<button onclick="changeTitle('ahmed mohammed')">
    Change Title
</button>
```

When the button is clicked, the `changeTitle()` function runs.

```js
function changeTitle(str) {
    document.getElementById("title").innerHTML = str;
}
```

Different buttons can call the same function with different arguments.

## Summary

In this section, you learned how to:

* Create and use JavaScript functions
* Work with parameters, arguments, and return values
* Use function declarations, expressions, and IIFEs
* Create objects and nested objects
* Create methods and use `this`
* Understand the Browser Object Model
* Use `window`, `confirm()`, `setTimeout()`, `setInterval()`, and `location`
* Create and manipulate arrays
* Use common array methods
* Work with arrays of objects
* Select elements with `querySelector()` and `querySelectorAll()`
* Modify HTML using `innerHTML`
* Modify CSS using JavaScript
* Manipulate classes using `classList`
* Change HTML attributes
* Handle events using `addEventListener()`
* Work with the event object and `event.target`
* Use inline event handlers
