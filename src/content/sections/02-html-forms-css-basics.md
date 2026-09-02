## Introduction

In Day 1, we learned the basic HTML elements used to structure webpage content. In this lesson, we build on those fundamentals and start working with **tables, forms, CSS, selectors, and multimedia**.

We will also learn how HTML elements can be styled using CSS and how different CSS selectors determine which elements receive a style.

---

## Block and Inline Elements

HTML elements can generally be classified by how they participate in the page layout.

### Block Elements

A block element normally starts on a new line and takes up the available width of its parent.

Examples used in this lesson include:

```html
<div>...</div>
<p>...</p>
<h1>...</h1>
<form>...</form>
```

Block elements are useful for creating the main structure and sections of a webpage.

### Inline Elements

An inline element normally stays on the same line as surrounding content and only takes up as much width as its content requires.

Examples include:

```html
<a>...</a>
<label>...</label>
```

Inline elements are commonly used for smaller pieces of content or elements that appear within a line.

> The exact layout behavior of an element can also be changed using CSS.

---

## Tables

HTML tables are used to display **tabular data** — information organized into rows and columns.

A basic table can be structured using:

* `<table>` → The entire table
* `<caption>` → The table's title
* `<thead>` → Header section
* `<th>` → Header cell
* `<tbody>` → Main body of the table
* `<tr>` → Table row
* `<td>` → Table data cell
* `<tfoot>` → Footer section

### `<table>`

Defines the table.

```html
<table>
  ...
</table>
```

Use it when the information has a genuine **row-and-column relationship**, such as student grades, product prices, or schedules.

Do not use tables for general webpage layout. CSS should be used for page layout.

### `<caption>`

Provides a title or description for the table.

```html
<caption>Student Information</caption>
```

It helps users understand what the table represents.

### `<thead>`

Contains the header rows of a table.

```html
<thead>
  ...
</thead>
```

It is useful for separating column headings from the table's main data.

### `<th>`

Defines a header cell.

```html
<th>Name</th>
<th>Age</th>
<th>Grade</th>
```

Header cells describe the information contained in their corresponding columns or rows.

### `<tbody>`

Contains the main data rows of the table.

```html
<tbody>
  ...
</tbody>
```

### `<tr>`

Defines a table row.

```html
<tr>
  <td>Ahmed</td>
  <td>25</td>
  <td>85</td>
</tr>
```

### `<td>`

Defines a normal data cell.

```html
<td>Ahmed</td>
```

Each `<td>` normally represents one piece of data within a row.

### `<tfoot>`

Contains footer rows for the table.

```html
<tfoot>
  <tr>
    <td>Total</td>
  </tr>
</tfoot>
```

It can be used for totals, summaries, or other information related to the table's data.

### `colspan`

The `colspan` attribute allows a cell to span multiple columns.

```html
<td colspan="3">Total</td>
```

Here, the cell occupies the space of **three columns**.

Use `colspan` when one piece of information needs to cover multiple columns.

---

## Forms

HTML forms are used to **collect information from users**.

```html
<form action="" name="login">
  ...
</form>
```

Forms can contain different controls such as text fields, email fields, passwords, radio buttons, checkboxes, file inputs, and buttons.

### `<form>`

Defines a form containing user-input controls.

```html
<form action="" name="login">
  ...
</form>
```

### `action`

Specifies where the form data should be sent when the form is submitted.

```html
<form action="/login">
```

The exact destination depends on the application's backend.

### `name`

Provides a name for the form.

```html
<form name="login">
```

A form can also contain controls with their own `name` attributes, which are important when submitting form data.

---

## `<label>`

Provides a descriptive label for a form control.

```html
<label for="username">Username:</label>
```

The `for` attribute connects the label to an element whose `id` has the same value.

```html
<label for="username">Username:</label>
<input id="username">
```

Using labels improves **accessibility** and makes forms easier to use.

---

## `<input>`

The `<input>` element creates a form control.

Its behavior depends on its `type` attribute.

```html
<input type="text">
```

Different input types are used for different kinds of data.

---

## Text Input

```html
<input type="text" name="username">
```

`type="text"` creates a field for general text.

Commonly used for:

* Usernames
* Names
* Titles
* Short text

### `placeholder`

Displays temporary hint text inside an input.

```html
<input placeholder="Username">
```

The placeholder disappears when the user starts entering a value.

It should not replace a proper `<label>`.

### `value`

Defines the initial value of the input.

```html
<input value="Ahmed">
```

The input initially contains `Ahmed`.

### `readonly`

Prevents the user from modifying the value while still allowing the value to be submitted with the form.

```html
<input readonly value="Ahmed">
```

Use it when a value should be visible to the user but should not be edited.

### `name`

Identifies the input when form data is submitted.

```html
<input name="username">
```

The `name` is especially important when sending form data to a server.

### `id`

Provides a unique identifier for the element.

```html
<input id="username">
```

It is also used to connect the input with its `<label>`.

---

## Email Input

```html
<input type="email" name="email">
```

Creates an input intended for an email address.

Browsers can perform basic validation to check whether the entered value has an email-like format.

Use it when collecting email addresses.

---

## Number Input

```html
<input type="number" min="18" max="30">
```

Creates a field for numerical values.

### `min`

Defines the minimum allowed value.

```html
min="18"
```

### `max`

Defines the maximum allowed value.

```html
max="30"
```

In this example, the intended range is from 18 to 30.

Use these attributes when the input has a meaningful numerical range.

---

## Password Input

```html
<input type="password" name="password">
```

Creates a field intended for passwords.

The entered characters are visually hidden by the browser.

Use it when collecting passwords or other sensitive text.

---

## `<textarea>`

Creates a multi-line text input.

```html
<textarea rows="4" cols="25"></textarea>
```

Unlike a normal text input, `<textarea>` allows the user to enter multiple lines.

Use it for:

* Comments
* Messages
* Descriptions
* Feedback
* Long text

### `rows`

Specifies the initial number of visible text rows.

### `cols`

Specifies the initial number of visible character columns.

The final size can also be controlled using CSS.

---

## File Input

```html
<input type="file">
```

Allows the user to select a file from their device.

### `accept`

Specifies the types of files that the user is encouraged to select.

```html
<input type="file" accept=".pdf">
```

In this example, PDF files are accepted.

Use `accept` to guide the user toward the appropriate file type. Server-side validation is still necessary when handling uploaded files.

---

## Date and Time Input

```html
<input type="datetime-local">
```

Allows the user to enter a date and time without a time-zone specification.

Use it when a form needs both a date and a local time.

---

## Color Input

```html
<input type="color">
```

Displays a color picker that allows the user to select a color.

Use it when the user needs to choose a color, such as a theme color or drawing color.

---

## Radio Buttons

Radio buttons allow the user to select **one option from a group**.

```html
<label for="male">Male</label>
<input name="gender" id="male" type="radio" value="male">

<label for="female">Female</label>
<input name="gender" id="female" type="radio" value="female">
```

The important part is that the radio buttons share the same `name`:

```html
name="gender"
```

This makes them part of the same group, allowing only one option to be selected at a time.

### `value`

Defines the value associated with the selected option when the form is submitted.

```html
value="male"
```

---

## Checkboxes

Checkboxes allow the user to select **zero, one, or multiple options**.

```html
<input type="checkbox" id="math" value="math">
<input type="checkbox" id="science" value="science">
<input type="checkbox" id="programming" value="programming">
```

Use checkboxes when multiple choices can be selected independently.

Examples include:

* Selecting interests
* Choosing multiple skills
* Accepting multiple preferences

Unlike radio buttons, checkboxes do not have to belong to the same group.

---

## Form Buttons and Submission

### Submit Input

```html
<input type="submit">
```

Creates a button that submits the form.

### `<button>`

Creates a button.

```html
<button type="submit">Submit</button>
```

With `type="submit"`, the button submits the form.

The `<button>` element is more flexible because it can contain text and other content.

### Reset Input

```html
<input type="reset">
```

Resets the form controls to their initial values.

Use it carefully because users may accidentally lose the information they entered.

---

## HTML Validation Attributes

HTML provides attributes that can perform basic client-side validation.

### `required`

Makes an input mandatory.

```html
<input type="text" required>
```

The form cannot normally be submitted until the required field has a value.

### `minlength`

Specifies the minimum number of characters.

```html
<input minlength="3">
```

### `maxlength`

Specifies the maximum number of characters.

```html
<input maxlength="5">
```

These attributes can be combined:

```html
<input
  type="text"
  minlength="3"
  maxlength="5"
  required
>
```

HTML validation improves the user experience, but important validation should also be performed on the server.

---

## CSS

**CSS (Cascading Style Sheets)** is used to control the appearance and layout of HTML elements.

HTML defines the structure:

```html
<h1>Hello</h1>
```

CSS can control how that heading looks:

```css
h1 {
  color: brown;
}
```

CSS can be added to an HTML page in three main ways.

---

## 1. Inline CSS

CSS can be written directly inside an element using the `style` attribute.

```html
<div style="color: red;">
  Content
</div>
```

Inline CSS affects only that specific element.

It is useful for quick, element-specific styling, but it should generally not be used for large projects because it mixes structure with presentation and becomes difficult to maintain.

---

## 2. Internal CSS

CSS can be written inside a `<style>` element, usually inside `<head>`.

```html
<style>
  .header {
    color: brown;
  }
</style>
```

This is useful when styles are specific to a single HTML page.

---

## 3. External CSS

CSS can be placed in a separate `.css` file and connected using `<link>`.

```html
<link rel="stylesheet" href="./style.css">
```

The CSS file could contain:

```css
.special {
  color: red;
}
```

External CSS is generally the preferred approach for larger websites because the same stylesheet can be reused across multiple HTML pages.

---

## CSS Selectors

A CSS selector determines **which HTML elements a CSS rule applies to**.

### ID Selector

An ID selector starts with `#`.

```css
#index1 {
  color: bisque;
}
```

It targets the element with:

```html
id="index1"
```

Use an ID selector when you need to target a specific element with a unique ID.

An `id` should generally be unique within a page.

---

## Class Selector

A class selector starts with `.`.

```css
.header {
  color: brown;
}
```

It targets elements with:

```html
class="header"
```

A class can be reused on multiple elements.

```html
<h1 class="header">Hello</h1>
<h1 class="header">Hello again</h1>
```

This is one of the most common ways to apply reusable styles.

---

## Descendant Selector

A space between selectors targets an element that exists somewhere inside another element.

```css
div p {
  color: cadetblue;
}
```

This targets `<p>` elements that are descendants of a `<div>`.

For example:

```html
<div>
  <p>This paragraph is selected.</p>
</div>
```

The paragraph receives the style because it is inside the `<div>`.

---

## CSS Class Example

```css
.special {
  color: aquamarine;
  background-color: black;
  font-size: 18px;
  font-weight: 800;
}
```

This class applies several styles to any element using:

```html
class="special"
```

The properties shown here include:

* `color` → Text color
* `background-color` → Background color
* `font-size` → Text size
* `font-weight` → Thickness of the text

---

## The Cascade

CSS stands for **Cascading Style Sheets** because multiple rules can potentially apply to the same element.

When several CSS rules target the same element, the browser determines which declaration wins based on factors such as:

* Importance
* Specificity
* Source order

For example, an ID selector is generally more specific than a class selector.

```css
#title {
  color: red;
}

.header {
  color: blue;
}
```

An element with both:

```html
<h1 id="title" class="header">Hello</h1>
```

will normally receive the ID selector's `color` because the ID selector has higher specificity.

---

## Smooth Scrolling

The lesson also includes:

```css
html {
  scroll-behavior: smooth;
}
```

This changes the scrolling behavior of the page so that navigating to an internal location happens smoothly instead of jumping instantly.

---

## Internal Page Navigation

An anchor can navigate to an element within the same page.

First, give the target element an `id`:

```html
<h1 id="top">Hello</h1>
```

Then create a link pointing to that ID:

```html
<a href="#top">Go Top</a>
```

The `#` tells the browser that `top` refers to an element ID on the current page.

Another example:

```html
<a href="#aud">Go To Audio</a>

<audio id="aud" controls></audio>
```

Clicking the link navigates to the element with `id="aud"`.

This is useful for:

* Long webpages
* Table of contents
* "Back to top" links
* Navigating between sections

---

## `<audio>`

Embeds audio content into a webpage.

```html
<audio id="aud" controls>
</audio>
```

### `controls`

Displays the browser's built-in audio controls.

```html
<audio controls>
</audio>
```

Without `controls`, the user normally has no built-in interface for controlling the audio.

The `id` can also be used as a target for internal navigation.

---

## `<video>`

Embeds video content into a webpage.

```html
<video src="" controls autoplay loop muted>
</video>
```

### `src`

Specifies the location of the video file.

### `controls`

Displays the browser's built-in video controls.

### `autoplay`

Requests that the video starts playing automatically.

Browsers commonly restrict autoplay when the media has sound, which is why autoplay videos are often used together with `muted`.

### `loop`

Causes the video to restart automatically when it reaches the end.

### `muted`

Starts the video without sound.

---

## Additional HTML Document Structure

A complete HTML document commonly begins with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

</body>
</html>
```

The `lang` attribute in:

```html
<html lang="en">
```

specifies the primary language of the document.

For an English webpage, `en` is used.

---

## Summary

In this lesson, we expanded our HTML knowledge beyond basic content and started working with **user interaction, structured data, styling, and multimedia**.

We learned how to:

* Understand block and inline elements.
* Structure tabular data using HTML tables.
* Build forms using different input types.
* Use labels and form attributes correctly.
* Add basic HTML validation.
* Style HTML using inline, internal, and external CSS.
* Use ID, class, and descendant selectors.
* Understand the basic idea of the CSS cascade and specificity.
* Navigate between locations within the same webpage.
* Embed audio and video content.
* Control media behavior using attributes such as `controls`, `autoplay`, `loop`, and `muted`.

The main idea of this lesson is that **HTML provides structure and functionality, while CSS controls presentation**. Once these two work together, you can build webpages that are not only structured but also interactive and visually organized.
