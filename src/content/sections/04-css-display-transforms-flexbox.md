## Introduction

CSS does more than change colors and fonts. It can also control **how elements are displayed, how they move, how they transition between states, and how multiple elements are arranged**.

In this section, we explore display behavior, visibility, transformations, transitions, and Flexbox.

---

## Display

The `display` property controls how an element participates in the page layout.

### `display: none`

```css
div {
    display: none;
}
```

Removes the element from the page layout completely. The element takes up **no space**.

This is useful when an element should not be displayed at all.

### `display: inline-block`

```css
.my-class {
    display: inline-block;
}
```

`inline-block` combines characteristics of inline and block elements:

* The element can appear alongside other elements on the same line.
* Width and height can be set.
* Padding and margins can be applied.

For example:

```css
.my-class {
    width: 200px;
    height: 200px;
}
```

---

## Visibility and Opacity

CSS provides different ways to make an element visually disappear.

### `visibility: hidden`

```css
div {
    visibility: hidden;
}
```

Makes the element invisible, but it **still occupies its original space** in the layout.

### `opacity: 0`

```css
div {
    opacity: 0;
}
```

Makes the element completely transparent.

Unlike `display: none`, the element remains part of the layout.

Opacity can also be set between `0` and `1`:

```css
opacity: 0.5;
```

This creates a partially transparent element.

### Comparison

| Property             | Visible? | Takes Space? |
| -------------------- | -------- | ------------ |
| `display: none`      | No       | No           |
| `visibility: hidden` | No       | Yes          |
| `opacity: 0`         | No       | Yes          |

---

## Overflow

The `overflow` property controls what happens when content becomes larger than its element.

```css
div {
    width: 200px;
    height: 200px;
    overflow: auto;
}
```

With `overflow: auto`, scrollbars are added when necessary.

Common values include:

* `visible` — content can extend outside the element.
* `hidden` — overflowing content is clipped.
* `scroll` — scrolling is always available.
* `auto` — scrolling is added when necessary.

---

## CSS Transitions

Transitions allow CSS properties to change smoothly instead of changing instantly.

```css
.my-class {
    transition: all 0.3s ease-in-out;
}
```

The transition consists of:

```text
property → duration → timing function
```

For example:

```css
transition: all 0.3s ease-in-out;
```

means that changes to the element's properties are animated over `0.3` seconds.

### `transition-delay`

A delay can be added before the transition starts.

```css
transition-delay: 0.3s;
```

This makes the browser wait `0.3` seconds before starting the transition.

---

## CSS Transforms

The `transform` property allows an element to be visually modified without changing the normal document flow.

### `rotate()`

Rotates an element.

```css
transform: rotate(310deg);
```

The value is an angle, usually expressed in degrees.

### `scale()`

Changes the visual size of an element.

```css
transform: scale(0.5, 0.5);
```

The first value controls the horizontal scale, while the second controls the vertical scale.

### `skew()`

Tilts an element along an axis.

```css
transform: skew(60deg);
```

### `translateX()`

Moves an element horizontally.

```css
transform: translateX(200px);
```

A positive value moves it to the right, while a negative value moves it to the left.

---

## `transform-origin`

The `transform-origin` property determines the point around which a transformation occurs.

```css
transform-origin: bottom center;
```

For example, when rotating an element, this makes the rotation happen around its bottom-center point rather than the default center.

---

## Hover Effects

The `:hover` pseudo-class applies styles when the user places the mouse pointer over an element.

```css
div:hover {
    transform: scale(0.5, 0.5);
}
```

Hover effects are commonly combined with transitions:

```css
.my-class {
    transition: all 0.3s ease-in-out;
}

.my-class:hover {
    width: 300px;
    height: 300px;
}
```

The transition makes the change happen smoothly.

---

## Flexbox

Flexbox is a CSS layout system designed to arrange elements efficiently in rows or columns.

A flex container is created by setting:

```css
.parent {
    display: flex;
}
```

Its direct children then become **flex items**.

In the example:

```html
<div class="parent">
    <div class="child one">One</div>
    <div class="child two">Two</div>
    <div class="child three">Three</div>
    <div class="child four">Four</div>
    <div class="child five">Five</div>
    <div class="child six">Six</div>
</div>
```

`.parent` is the flex container, while the `.child` elements are its flex items.

---

## Flexbox Wrapping

By default, flex items try to remain on a single line.

`flex-wrap` allows them to move onto additional lines when necessary.

```css
.parent {
    display: flex;
    flex-wrap: wrap;
}
```

This is useful when there is not enough horizontal space for all items.

---

## Flexbox Main Axis Alignment

### `justify-content`

Controls the alignment of flex items along the **main axis**.

```css
.parent {
    display: flex;
    justify-content: center;
}
```

Common values include:

* `flex-start`
* `center`
* `flex-end`
* `space-between`
* `space-around`
* `space-evenly`

For a default row direction, the main axis is horizontal.

---

## Flexbox Cross Axis Alignment

### `align-items`

Controls the alignment of items along the **cross axis**.

```css
.parent {
    display: flex;
    align-items: flex-end;
}
```

Common values include:

* `stretch`
* `flex-start`
* `center`
* `flex-end`

With the default row direction, the cross axis is vertical.

### `align-content`

Controls the spacing and alignment of **multiple flex lines** when wrapping is enabled.

```css
.parent {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}
```

Unlike `align-items`, which aligns items within a line, `align-content` deals with the flex lines themselves.

---

## Flex Item Sizing

Flexbox allows individual items to grow and consume available space.

### `flex-grow`

Controls how much a flex item should grow relative to other growing items.

```css
.two {
    flex-grow: 1;
}

.three {
    flex-grow: 3;
}

.six {
    flex-grow: 2;
}
```

The grow values represent proportions.

For example:

```text
Item Two   → 1 part
Item Three → 3 parts
Item Six   → 2 parts
```

When extra space is available, these items divide that space according to their grow factors.

An item with `flex-grow: 3` receives three times as much of the available growing space as an item with `flex-grow: 1`, assuming the relevant flex conditions are the same.

---

## Flex Item Order

Flexbox allows the visual order of items to be changed using `order`.

```css
.one {
    order: 1;
}

.two {
    order: 2;
}

.four {
    order: 3;
}
```

The browser uses the `order` values to determine the visual arrangement of flex items.

Items have a default `order` of `0`.

A smaller `order` value appears before a larger one.

---

## Centering Content with Flexbox

Flexbox can easily center content horizontally and vertically.

For example, each `.child` in the lesson is itself a flex container:

```css
.child {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

This centers the text inside each child element.

The combination:

```css
justify-content: center;
align-items: center;
```

is one of the most common patterns for centering content inside an element.

---

## Flexbox Container and Item Properties

It is important to distinguish between properties applied to the **flex container** and properties applied to **flex items**.

### Flex Container

```css
.parent {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
}
```

These control how the children are arranged.

### Flex Items

```css
.child {
    flex-grow: 1;
}
```

Properties such as `flex-grow` and `order` control individual flex items.

---

## Summary

This section introduced several important CSS layout and visual effects.

You learned how to:

* Control element display using `display`.
* Hide elements with `display: none`, `visibility: hidden`, and `opacity`.
* Handle overflowing content with `overflow`.
* Create smooth property changes using `transition`.
* Delay transitions with `transition-delay`.
* Transform elements using `rotate()`, `scale()`, `skew()`, and `translateX()`.
* Control transformation points using `transform-origin`.
* Create interactive hover effects using `:hover`.
* Build flexible layouts using Flexbox.
* Wrap flex items using `flex-wrap`.
* Align items with `justify-content` and `align-items`.
* Align multiple flex lines using `align-content`.
* Control the amount flex items grow using `flex-grow`.
* Change the visual order of flex items using `order`.
* Center content using Flexbox.
