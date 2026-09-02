## Introduction

CSS provides many features for creating interactive and responsive interfaces without JavaScript. As projects become more advanced, developers can use **CSS variables, pseudo-elements, animations, advanced selectors, and responsive techniques** to create more polished designs.

This section also introduces **Bootstrap**, a popular CSS framework that provides ready-made components and a responsive grid system.

---

## CSS Variables

CSS variables allow reusable values to be stored and used throughout a stylesheet.

They are commonly defined inside `:root`:

```css id="2m7wqf"
:root {
    --ahmed: green;
    --base-space: 15px;
    --secondary-color: tomato;
}
```

A CSS variable name starts with `--`.

The `:root` selector represents the document's root element and is commonly used for global variables.

### Using CSS Variables

The `var()` function retrieves the value of a CSS variable.

```css id="8l2n3x"
.animate {
    background-color: var(--ahmed);
}
```

This makes it possible to change the variable once and automatically update every property that uses it.

CSS variables are useful for storing:

* Colors
* Spacing values
* Font sizes
* Common dimensions
* Theme values

---

## Pseudo-Classes

Pseudo-classes target an element based on a particular state or condition.

### `:hover`

The `:hover` pseudo-class applies styles when the pointer is placed over an element.

```css id="4k7q2p"
.vibrate:hover {
    animation-play-state: paused;
}
```

Pseudo-classes are useful for interactive effects such as buttons, links, menus, and animations.

---

## Pseudo-Elements

Pseudo-elements allow developers to style or create a specific part of an element.

They use `::` syntax.

### `::first-letter`

The `::first-letter` pseudo-element targets the first letter of an element's text.

```css id="q3v9wd"
p::first-letter {
    color: chocolate;
}
```

This changes the color of the first letter of every paragraph.

### `::before`

The `::before` pseudo-element inserts generated content before an element's actual content.

```css id="7h4z1m"
.head::before {
    content: "";
    position: absolute;
}
```

`content` is required for generated pseudo-elements.

`::before` is commonly used for:

* Decorative shapes
* Icons
* Lines
* Background effects
* Visual decorations

### `::after`

The `::after` pseudo-element inserts generated content after an element's content.

In the example, it is used to create an overlay on an image:

```css id="m5zq2r"
.image::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
}
```

When the image is hovered:

```css id="a9w5ce"
.image:hover::after {
    background-color: rgba(78, 75, 75, 0.808);
    width: 100%;
}
```

The pseudo-element expands from `0%` to `100%`, creating a smooth overlay effect.

---

## CSS Animations

CSS animations allow elements to change between different styles over time.

An animation is connected to an element using the `animation` property:

```css id="7s2m9d"
.animate {
    animation: move 4s;
}
```

Here:

* `move` is the animation name.
* `4s` is the animation duration.

### `@keyframes`

`@keyframes` defines the different stages of an animation.

```css id="4v8k1s"
@keyframes move {
    0% {
        background-color: red;
    }

    50% {
        background-color: blue;
    }

    100% {
        background-color: yellow;
    }
}
```

The browser interpolates between the defined stages.

Keyframes can use percentages such as:

```text id="0c5u6m"
0%   → beginning
50%  → middle
100% → end
```

### Animation Properties

The example uses several animation properties.

```css id="t7p4xr"
animation: shake 0.5s infinite;
```

This means the `shake` animation runs for half a second and repeats indefinitely.

Another example:

```css id="f2r8mk"
animation-iteration-count: infinite;
```

makes an animation repeat forever.

### `animation-play-state`

Controls whether an animation is running or paused.

```css id="b6n1yv"
animation-play-state: paused;
```

For example:

```css id="z3w7qa"
.vibrate:hover {
    animation-play-state: paused;
}
```

The animation pauses when the user hovers over the element.

---

## Creating a Shake Animation

The example creates a shaking effect using horizontal translations.

```css id="0g4x6r"
@keyframes shake {
    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-10px);
    }

    50% {
        transform: translateX(10px);
    }

    75% {
        transform: translateX(-10px);
    }

    100% {
        transform: translateX(10px);
    }
}
```

The element repeatedly moves left and right, creating a vibration effect.

---

## Animation and Positioning

The `move` animation combines positioning, colors, and transformations:

```css id="r8j2vm"
@keyframes move {
    0% {
        left: 0;
        background-color: red;
        transform: rotate(90deg);
    }

    50% {
        left: calc(100% - 100px);
        background-color: blue;
        transform: rotate(180deg);
    }

    100% {
        left: 0;
        background-color: yellow;
        transform: rotate(360deg);
    }
}
```

An animation can modify multiple CSS properties at the same time.

---

## CSS `calc()`

The `calc()` function allows mathematical calculations inside CSS property values.

```css id="3x6p8n"
left: calc(100% - 100px);
```

This calculates the value by subtracting `100px` from `100%`.

`calc()` is especially useful when combining different units, such as percentages and pixels.

---

## Image Sizing

The example uses:

```css id="j8q4wc"
img {
    max-width: 100%;
}
```

This prevents an image from becoming wider than its containing element.

It is commonly used to make images adapt to their available width.

---

## Image Overlay Effect

The `.image` element is positioned relatively:

```css id="9r5m2k"
.image {
    width: 500px;
    position: relative;
}
```

Its `::after` pseudo-element is positioned absolutely over it.

```css id="w3f7ka"
.image::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 0%;
    height: 100%;
}
```

When the image is hovered, the pseudo-element expands to cover the image:

```css id="n4y6sc"
.image:hover::after {
    width: 100%;
}
```

A transition makes this expansion smooth:

```css id="p9k2xm"
transition: all 1s;
```

This pattern is useful for creating image overlays and hover effects.

---

## Advanced CSS Selectors

CSS selectors can describe relationships between elements, not just individual elements.

### Direct Child Selector `>`

The direct child selector targets elements that are **immediate children** of another element.

```css id="x7v2qa"
.test > p {
    font-size: 19px;
}
```

This targets `<p>` elements directly inside `.test`.

It does not target paragraphs nested deeper inside another element.

### Adjacent Sibling Selector `+`

The adjacent sibling selector targets an element immediately following another element.

```css id="c5m8zr"
.test + p {
    font-size: 19px;
}
```

This targets the first `<p>` immediately after `.test`.

### General Sibling Selector `~`

The general sibling selector targets matching siblings that appear after another element.

```css id="h2q9wb"
.test ~ p {
    font-size: 19px;
}
```

This can target multiple matching `<p>` siblings that come after `.test`.

### Selector Relationship Summary

```text id="p7w3md"
A > B   → direct child
A + B   → immediately following sibling
A ~ B   → following sibling(s)
```

---

## CSS Gradients

Gradients allow smooth transitions between colors.

A linear gradient can be created with:

```css id="v5x8q1"
background: linear-gradient(red, blue);
```

A linear gradient changes colors along a straight line.

Gradients can be used for backgrounds, buttons, cards, overlays, and decorative elements.

---

## Box Shadow

The `box-shadow` property adds a shadow around an element.

```css id="d9r4ks"
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
```

It can be used to create depth and separation between elements.

Common components that use box shadows include:

* Cards
* Buttons
* Navigation bars
* Modals
* Panels

---

## Media Queries

Media queries allow CSS to change depending on the characteristics of the device or viewport.

```css id="w6n2py"
@media (max-width: 768px) {
    .container {
        width: 100%;
    }
}
```

They are an important part of **responsive web design**.

For example, a layout can use multiple columns on a large screen and fewer columns on a smaller screen.

---

## Bootstrap

Bootstrap is a CSS framework that provides ready-made styles, components, and a responsive grid system.

The example imports Bootstrap 5.0.2 through a CDN:

```html id="n1y7cv"
<link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
>
```

After Bootstrap is loaded, its classes can be used directly in HTML.

---

## Bootstrap Carousel

A carousel is a component that displays multiple items as a slideshow.

The example uses:

```html id="k3r8x2"
<div class="carousel slide" data-bs-ride="carousel">
```

The carousel contains several `.carousel-item` elements:

```html id="m8q1vf"
<div class="carousel-item active">
    <img src="./wp2568544.jpg" class="d-block w-100" alt="...">
</div>
```

The `active` class identifies the initial visible slide.

Navigation buttons can be created using Bootstrap's carousel controls:

```html id="z6p3wh"
<button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev">
</button>
```

and:

```html id="7q2m9c"
<button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next">
</button>
```

Bootstrap handles much of the carousel behavior and styling.

---

## Bootstrap Grid System

Bootstrap provides a responsive grid based on **rows and columns**.

A basic structure is:

```html id="q4x8na"
<div class="container">
    <div class="row">
        <div class="col-3">Content</div>
        <div class="col-3">Content</div>
        <div class="col-3">Content</div>
        <div class="col-3">Content</div>
    </div>
</div>
```

### `.container`

Provides a responsive container for page content.

```html id="s9m2kd"
<div class="container">
```

### `.row`

Creates a row for grid columns.

```html id="v6c3xp"
<div class="row">
```

### `.col-3`

Creates a column that occupies 3 of Bootstrap's 12 grid columns.

```text id="n8w4qa"
12 columns total
3 + 3 + 3 + 3 = 12
```

Therefore, four `.col-3` elements can fit on the same row at the relevant breakpoint.

---

## Bootstrap Gutters

The example uses:

```html id="r2f7mk"
<div class="row g-3">
```

The `g-3` class controls the spacing between grid columns and rows.

Bootstrap provides predefined spacing utility classes that make it easy to add consistent gaps.

---

## Bootstrap Utility Classes

Bootstrap includes utility classes that can quickly apply common styles.

For example:

```html id="c7m1xz"
<img class="d-block w-100" src="./wp2568544.jpg">
```

Here:

* `d-block` sets the element's display to `block`.
* `w-100` sets its width to `100%`.

Utility classes reduce the amount of custom CSS that needs to be written.

---

## Bootstrap and Custom CSS

Bootstrap styles can be overridden with custom CSS when necessary.

For example:

```css id="q9v3lm"
.mydiv {
    height: 100px;
    background-color: var(--ahmed);
}
```

A custom class can be added alongside Bootstrap classes:

```html id="e5k7pd"
<div class="mydiv col-3">
    content
</div>
```

This allows Bootstrap to handle the layout while custom CSS controls project-specific styling.

---

## CSS Cascade and Overrides

CSS rules can conflict when multiple rules target the same element.

For example:

```css id="b4x8qn"
.ahmed {
    background-color: bisque;
}

.ahmed {
    background-color: blueviolet;
}
```

When rules have the same specificity, the later declaration takes precedence.

This behavior is part of the **CSS cascade**.

The cascade considers factors such as:

* Importance
* Specificity
* Source order

Understanding the cascade is important when working with frameworks such as Bootstrap, where your custom styles may need to override framework styles.

---

## Summary

This section introduced more advanced CSS techniques and Bootstrap.

You learned how to:

* Create and use CSS variables.
* Use `:hover` for interactive states.
* Use pseudo-elements such as `::before`, `::after`, and `::first-letter`.
* Create CSS animations with `@keyframes`.
* Control animation repetition and playback.
* Use `calc()` for CSS calculations.
* Create image overlay effects.
* Use advanced selectors such as `>`, `+`, and `~`.
* Create gradients with `linear-gradient()`.
* Add depth using `box-shadow`.
* Build responsive layouts using media queries.
* Import and use Bootstrap.
* Create Bootstrap carousels.
* Build layouts with Bootstrap's container, row, and column system.
* Use Bootstrap utility classes.
* Combine Bootstrap classes with custom CSS.
* Understand how the CSS cascade determines which styles take precedence.
