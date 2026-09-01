# 02 - HTML Forms & CSS Basics

## HTML Forms

Forms collect user input. The `<form>` element wraps all form controls.

```html
<form action="/submit" method="POST">
    <!-- Form controls go here -->
</form>
```

### Form Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `action` | URL to send data to | `action="/submit"` |
| `method` | HTTP method | `method="POST"` or `method="GET"` |
| `enctype` | Encoding type | `enctype="multipart/form-data"` (for files) |

---

## Input Types

| Type | Purpose | Example |
|------|---------|---------|
| `text` | Single-line text | `<input type="text">` |
| `email` | Email validation | `<input type="email">` |
| `password` | Hidden characters | `<input type="password">` |
| `number` | Numeric input | `<input type="number">` |
| `file` | File upload | `<input type="file">` |
| `date` | Date picker | `<input type="date">` |
| `color` | Color picker | `<input type="color">` |
| `radio` | Single selection | `<input type="radio" name="option">` |
| `checkbox` | Multiple selections | `<input type="checkbox">` |
| `submit` | Submit button | `<input type="submit">` |
| `reset` | Reset form | `<input type="reset">` |

```html
<form action="/register" method="POST">
    <input type="text" name="username" placeholder="Username">
    <input type="email" name="email" placeholder="Email">
    <input type="password" name="password" placeholder="Password">
    <input type="number" name="age" min="16" max="100">
    <input type="date" name="birthdate">
    <input type="color" name="favcolor">
    <input type="file" name="avatar" accept="image/*">
    
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female
    
    <input type="checkbox" name="terms" required> I agree to terms
    
    <input type="submit" value="Register">
    <input type="reset" value="Clear">
</form>
```

---

## Input Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `readonly` | Cannot be modified | `<input readonly value="固定值">` |
| `required` | Must be filled | `<input required>` |
| `min` | Minimum value | `<input type="number" min="0">` |
| `max` | Maximum value | `<input type="number" max="100">` |
| `minlength` | Minimum characters | `<input minlength="8">` |
| `maxlength` | Maximum characters | `<input maxlength="50">` |
| `placeholder` | Hint text | `<input placeholder="Enter name">` |
| `accept` | Allowed file types | `<input type="file" accept=".jpg,.png">` |
| `disabled` | Cannot interact | `<input disabled>` |
| `value` | Default value | `<input value="default text">` |

> **Key Concept:** Always use `required` for essential fields and proper `type` attributes for built-in validation. Use `placeholder` for hints, not as a replacement for labels.

---

## Textarea

Multi-line text input:

```html
<textarea 
    name="message" 
    rows="5" 
    cols="40" 
    placeholder="Write your message..."
    minlength="10"
    maxlength="500"
></textarea>
```

---

## Select and Datalist

### Select Dropdown

```html
<select name="city" required>
    <option value="" disabled selected>Choose a city</option>
    <option value="cairo">Cairo</option>
    <option value="alex">Alexandria</option>
    <option value="giza">Giza</option>
</select>
```

### Datalist (Suggestions)

```html
<input list="languages" name="language">
<datalist id="languages">
    <option value="HTML">
    <option value="CSS">
    <option value="JavaScript">
    <option value="Python">
</datalist>
```

---

## Labels

Labels improve accessibility by associating text with form controls:

```html
<!-- Explicit association -->
<label for="username">Username:</label>
<input type="text" id="username" name="username">

<!-- Wrapping association -->
<label>
    Email:
    <input type="email" name="email">
</label>
```

> **Key Concept:** Always use `<label>` elements. They improve accessibility by allowing screen readers to announce field purposes and let users click the label to focus the input.

---

## Complete Form Example

```html
<form action="/register" method="POST">
    <h2>Registration Form</h2>
    
    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name" required minlength="2">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required minlength="8">
    
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="16" max="100">
    
    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob">
    
    <label for="course">Course:</label>
    <select id="course" name="course" required>
        <option value="" disabled selected>Select a course</option>
        <option value="html-css">HTML & CSS</option>
        <option value="javascript">JavaScript</option>
        <option value="nodejs">Node.js</option>
    </select>
    
    <label>
        <input type="checkbox" name="terms" required>
        I agree to the terms and conditions
    </label>
    
    <input type="submit" value="Register">
</form>
```

---

## CSS Basics

### The Three Ways to Apply CSS

#### 1. Inline Style

Applied directly to an element using the `style` attribute:

```html
<p style="color: blue; font-size: 18px;">Blue text</p>
```

| Pros | Cons |
|------|------|
| Quick to apply | Hard to maintain |
| Overrides other styles | Not reusable |
| Good for testing | Mixed with HTML |

#### 2. Internal Style

Placed in a `<style>` tag inside the `<head>`:

```html
<head>
    <style>
        p {
            color: blue;
            font-size: 18px;
        }
    </style>
</head>
```

| Pros | Cons |
|------|------|
| Single file for small projects | Cannot be cached |
| Easy to find | Still mixes concerns |
| Good for single-page styles | Not reusable across pages |

#### 3. External Stylesheet

Linked via a `<link>` element in the `<head>`:

```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

```css
/* styles.css */
p {
    color: blue;
    font-size: 18px;
}
```

| Pros | Cons |
|------|------|
| Reusable across pages | Requires HTTP request |
| Browser caching | Extra file to manage |
| Clean separation | |
| Best practice | |

> **Key Concept:** External stylesheets are the preferred method for production websites. Use inline styles only for quick testing or dynamic JavaScript styling.

---

## CSS Syntax

CSS rules follow a consistent syntax:

```css
selector {
    property: value;
    property: value;
}
```

### Anatomy of a CSS Rule

| Part | Purpose | Example |
|------|---------|---------|
| Selector | Targets HTML elements | `h1`, `.class`, `#id` |
| Declaration Block | Contains declarations | `{ color: red; }` |
| Property | What to change | `color`, `font-size`, `margin` |
| Value | New value for property | `red`, `16px`, `10px` |

```css
/* Element Selector */
h1 {
    color: navy;
    font-size: 24px;
}

/* Class Selector */
.highlight {
    background-color: yellow;
    padding: 10px;
}

/* ID Selector */
#header {
    background-color: blue;
    color: white;
}
```

> **Key Concept:** CSS is applied in order of specificity. Inline styles have highest priority, followed by IDs, classes, then element selectors. Use `!important` sparingly as it breaks the normal cascade.
