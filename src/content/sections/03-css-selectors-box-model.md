## Introduction

CSS (Cascading Style Sheets) is used to control the **appearance and layout** of HTML elements. While HTML provides the structure of a webpage, CSS controls things such as colors, fonts, spacing, borders, backgrounds, positioning, and element sizes.

CSS rules generally follow this structure:

```css
selector {
    property: value;
}
```

The **selector** determines which HTML elements are affected, while the **property** and **value** determine how those elements are styled.

### Example

```css
p {
    color: red;
    font-size: 20px;
}
```

This selects all `<p>` elements and makes their text red with a font size of `20px`.

---

## HTML Semantic Layout Elements

HTML provides semantic elements that describe the purpose of different parts of a webpage.

### `<header>`

Represents introductory content or the header of a page or section.

```html
<header>
    ...
</header>
```

It is commonly used for website headers, branding, navigation, or introductory content.

### `<nav>`

Represents a section containing navigation links.

```html
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

Use `<nav>` when grouping important navigation links.

### `<aside>`

Represents content that is related to the main content but is not part of its main flow.

```html
<aside>
    ...
</aside>
```

It can be used for sidebars, related links, or additional information.

### `<section>`

Represents a standalone section of related content.

```html
<section>
    <h1>...</h1>
    <p>...</p>
</section>
```

Use `<section>` when content belongs to a distinct logical part of a page.

---

## CSS Selectors

Selectors determine which HTML elements a CSS rule applies to.

### Element Selector

An element selector targets all elements of a particular type.

```css
h2 {
    color: red;
}
```

This applies the style to every `<h2>` element.

### Class Selector

A class selector starts with `.` and targets elements with a specific `class`.

```css
.custom {
    width: 200px;
    height: 200px;
}
```

```html
<div class="custom"></div>
```

Classes are commonly used when the same style needs to be applied to multiple elements.

### ID Selector

An ID selector starts with `#` and targets an element with a specific `id`.

```css
#header {
    color: red;
}
```

```html
<h1 id="header">Hello</h1>
```

An `id` should normally identify a unique element on a page.

### Grouping Selectors

Multiple selectors can share the same CSS rule by separating them with commas.

```css
.one, .two, .three {
    width: 300px;
    height: 300px;
}
```

This applies the same declarations to all three classes.

---

## CSS Colors

CSS supports several ways of specifying colors.

### Named Colors

CSS provides predefined color names:

```css
color: red;
background-color: aquamarine;
```

### RGB

RGB represents a color using **red, green, and blue** values.

```css
color: rgb(255, 100, 100);
```

Each component normally ranges from `0` to `255`.

### RGBA

RGBA adds an **alpha** value for transparency.

```css
color: rgba(255, 100, 100, 0.5);
```

The alpha value ranges from `0` (fully transparent) to `1` (fully opaque).

### Hexadecimal Colors

Hex colors use hexadecimal values from `0–9` and `A–F`.

```css
color: #ff0000;
```

The standard six-digit format is:

```text
#RRGGBB
```

---

## CSS Default Values

HTML elements have default browser styles. Some common CSS defaults include:

```text
color: black
background-color: transparent
font-size: 16px
width: auto
height: auto
```

These are general defaults and can vary depending on the element and browser.

CSS can override these defaults whenever custom styling is required.

---

## Fonts and Text Styling

CSS provides several properties for controlling how text looks.

### `font-size`

Controls the size of text.

```css
font-size: 20px;
```

Common units include:

* `px` — fixed pixel size
* `%` — relative to the parent
* `em` — relative to the element's font size
* `rem` — relative to the root element's font size

### `font-style`

Controls whether text is displayed normally or slanted.

```css
font-style: italic;
```

Common values include:

* `normal`
* `italic`
* `oblique`

### `font-weight`

Controls the thickness of text.

```css
font-weight: 700;
```

Values can range from `100` to `900`, depending on the font.

Common keywords include:

```css
font-weight: normal;
font-weight: bold;
```

### `font-family`

Specifies the font used for text.

```css
font-family: Arial, sans-serif;
```

Multiple fonts can be provided as fallbacks. If the first font is unavailable, the browser tries the next one.

---

## Using External Fonts

Fonts can be loaded from external font providers such as Google Fonts.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
    href="https://fonts.googleapis.com/css2?family=Google+Sans&display=swap"
    rel="stylesheet"
>
```

After loading a font, it can be used through `font-family` in CSS.

External fonts are useful when a website needs typography that is not installed by default on the user's device.

---

## Backgrounds

CSS can control the background of an element using properties such as `background-color` and `background-image`.

### `background-color`

Sets the background color.

```css
div {
    background-color: aquamarine;
}
```

### `background-image`

Adds an image as the background.

```css
div {
    background-image: url("../images/image.jpg");
}
```

### `background-size`

Controls how the background image is sized.

```css
background-size: contain;
```

`contain` scales the image so that the entire image fits inside the element.

### `background-repeat`

Controls whether the background image repeats.

```css
background-repeat: no-repeat;
```

### `background-position`

Controls the position of the background image.

```css
background-position: center top;
```

### `background-attachment`

Controls how the background behaves when the page is scrolled.

```css
background-attachment: fixed;
```

These properties can also be combined using the `background` shorthand property.

---

## Borders

The `border` property adds a border around an element.

```css
border: 10px solid red;
```

It combines:

```text
border-width
border-style
border-color
```

The individual properties can also be controlled separately:

```css
border-width: 5px;
border-style: solid;
border-color: red;
```

Specific sides can be styled independently, such as:

```css
border-left-width: 10px;
border-right: 100px solid red;
border-top: 100px solid red;
```

### Border Radius

`border-radius` rounds the corners of an element.

```css
border-top-right-radius: 50px;
```

---

## Spacing and the Box Model

Every HTML element can be thought of as a box. The CSS box model consists of:

```text
Content → Padding → Border → Margin
```

### `padding`

Creates space **inside** the element, between its content and border.

```css
padding: 10px;
```

### `margin`

Creates space **outside** the element, separating it from other elements.

```css
margin: 50px;
```

For example:

```css
.custom {
    margin: 50px;
    padding: 10px;
    border: 10px solid red;
}
```

---

## `box-sizing`

The `box-sizing` property controls how an element's width and height are calculated.

A common global reset is:

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

With:

```css
box-sizing: border-box;
```

the declared `width` and `height` include the element's **content, padding, and border**.

This makes sizing elements much easier to manage.

---

## CSS Positioning

The `position` property controls how an element is positioned in the document.

Common values include:

* `static`
* `relative`
* `absolute`
* `fixed`
* `sticky`

### `static`

The default positioning behavior.

```css
position: static;
```

The element remains in the normal document flow.

### `relative`

Keeps the element in the normal flow but allows it to be moved relative to its original position.

```css
position: relative;
top: 20px;
left: 30px;
```

### `absolute`

Removes the element from the normal document flow and positions it relative to its containing block.

```css
position: absolute;
top: 200px;
left: 200px;
```

In the example, the three elements are absolutely positioned at different coordinates:

```css
.one {
    position: absolute;
    top: 200px;
    left: 200px;
}

.two {
    position: absolute;
    top: 220px;
    left: 220px;
}

.three {
    position: absolute;
    top: 240px;
    left: 240px;
}
```

### `fixed`

Positions an element relative to the viewport. It remains in the same position while the page scrolls.

```css
position: fixed;
```

This is commonly used for fixed navigation bars or floating controls.

### `sticky`

Allows an element to behave normally until a specified scroll position is reached, after which it sticks to that position.

```css
position: sticky;
top: 20px;
```

---

## `z-index`

When positioned elements overlap, `z-index` controls their stacking order.

```css
.one {
    z-index: 1;
}

.two {
    z-index: 2;
}

.three {
    z-index: 9;
}
```

A larger `z-index` generally places an element above another overlapping element within the same stacking context.

In the example, `.three` has the highest `z-index`, so it appears above `.two` and `.one`.

`z-index` is most relevant when elements overlap and are positioned.

---

## CSS Reset

Browsers apply default margins and padding to many HTML elements. A common way to remove these defaults is:

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

The `*` selector targets every element.

This gives the developer a predictable starting point for styling and layout.

---

## Summary

Day 3 introduced the foundations of CSS styling and layout.

You learned how to:

* Write CSS rules using selectors, properties, and values.
* Select elements using element, class, ID, and grouped selectors.
* Work with named, RGB, RGBA, and hexadecimal colors.
* Control fonts and text using properties such as `font-size`, `font-style`, `font-weight`, and `font-family`.
* Load external fonts.
* Style backgrounds using colors and images.
* Create and customize borders.
* Understand margin, padding, and the CSS box model.
* Use `box-sizing: border-box` for predictable element sizing.
* Position elements using `static`, `relative`, `absolute`, `fixed`, and `sticky`.
* Control overlapping elements using `z-index`.
* Create a simple CSS reset for consistent styling.
* Use semantic HTML elements such as `<header>`, `<nav>`, `<aside>`, and `<section>` to organize page structure.
