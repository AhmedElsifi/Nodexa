# 03 - CSS Selectors & Box Model

## CSS Selectors

Selectors target HTML elements for styling.

### Element Selector

Targets elements by tag name:

```css
h1 {
    color: navy;
    font-size: 24px;
}

p {
    line-height: 1.6;
    margin-bottom: 16px;
}
```

### Class Selector

Targets elements with a specific class attribute (prefixed with `.`):

```html
<p class="highlight">This is highlighted</p>
<p class="highlight important">This is both</p>
```

```css
.highlight {
    background-color: yellow;
    padding: 10px;
}

.important {
    font-weight: bold;
    border: 2px solid red;
}
```

### ID Selector

Targets a single element with a specific ID (prefixed with `#`):

```html
<div id="main-header">Header</div>
```

```css
#main-header {
    background-color: navy;
    color: white;
    padding: 20px;
}
```

### Comparison

| Selector | Syntax | Specificity | Use Case |
|----------|--------|-------------|----------|
| Element | `h1` | Low (1) | Style all instances |
| Class | `.classname` | Medium (10) | Reusable styles |
| ID | `#idname` | High (100) | Unique elements |

> **Key Concept:** Use classes for reusable styles. Reserve IDs for unique elements or JavaScript hooks. Avoid using IDs for CSS when possible due to high specificity.

---

## Grouping Selectors

Apply the same styles to multiple selectors:

```css
/* Group multiple selectors */
h1, h2, h3 {
    font-family: Arial, sans-serif;
    color: navy;
}

/* Group multiple classes */
.card, .panel, .widget {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
}
```

---

## Descendant Selectors

Target elements nested within other elements:

```css
/* Direct child only */
nav > ul {
    list-style: none;
    display: flex;
}

/* All descendants (any depth) */
article p {
    margin-bottom: 16px;
}

/* Specific nesting */
.sidebar .widget .title {
    font-size: 18px;
    font-weight: bold;
}
```

| Selector | Symbol | Description |
|----------|--------|-------------|
| Child | `>` | Direct children only |
| Descendant | (space) | All nested levels |
| Adjacent Sibling | `+` | Immediately following sibling |
| General Sibling | `~` | All following siblings |

```css
/* Adjacent sibling */
h2 + p {
    font-size: 18px;
    font-weight: bold;
}

/* General sibling */
h2 ~ p {
    color: gray;
}
```

---

## Box Model

Every element is a rectangular box with four areas:

```
┌─────────────────────────┐
│         margin          │
│  ┌───────────────────┐  │
│  │      border       │  │
│  │  ┌─────────────┐  │  │
│  │  │   padding    │  │  │
│  │  │  ┌────────┐  │  │  │
│  │  │  │ content │  │  │  │
│  │  │  └────────┘  │  │  │
│  │  └─────────────┘  │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

| Area | Purpose | Example |
|------|---------|---------|
| Content | Actual content area | `width`, `height` |
| Padding | Space between content and border | `padding: 20px` |
| Border | Line around padding | `border: 2px solid black` |
| Margin | Space outside the border | `margin: 10px` |

### Box Model Properties

```css
.box {
    /* Content */
    width: 300px;
    height: 200px;

    /* Padding (space inside) */
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
    /* Shorthand */
    padding: 10px 20px;           /* top/bottom left/right */
    padding: 10px 20px 15px 25px; /* top right bottom left (clockwise) */

    /* Border */
    border: 2px solid #333;
    border-width: 2px;
    border-style: solid;
    border-color: #333;
    border-radius: 8px;

    /* Margin (space outside) */
    margin: 10px 20px;
    margin-top: 10px;
    margin-right: auto;
    margin-bottom: 10px;
    margin-left: auto;
}
```

---

## Box Sizing

By default, `width` and `height` only affect the content area. Use `border-box` to include padding and border:

```css
/* Default (content-box) */
.box-content {
    box-sizing: content-box;
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* Total width = 300 + 20 + 20 + 5 + 5 = 350px */
}

/* Border-box (recommended) */
.box-border {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* Total width = 300px (padding and border included) */
}

/* Apply to all elements */
* {
    box-sizing: border-box;
}
```

> **Key Concept:** Always use `box-sizing: border-box` on all elements. It makes width/height calculations predictable and intuitive.

---

## Display Property

The `display` property controls how an element behaves in the layout:

| Value | Behavior | Examples |
|-------|----------|----------|
| `block` | Full width, starts new line | `div`, `p`, `h1` |
| `inline` | Only takes needed width, no line break | `span`, `a`, `strong` |
| `inline-block` | Inline but accepts width/height | Custom inline elements |
| `none` | Removed from layout | Hidden elements |

```css
/* Block element */
div {
    display: block;
    width: 200px;
    height: 100px;
    background-color: lightblue;
}

/* Inline element */
span {
    display: inline;
    width: 200px;    /* Will NOT work */
    height: 100px;   /* Will NOT work */
    background-color: lightcoral;
}

/* Inline-block */
.inline-block {
    display: inline-block;
    width: 200px;
    height: 100px;
    background-color: lightgreen;
}
```

---

## CSS Positioning

| Value | Behavior | Requires |
|-------|----------|----------|
| `static` | Default flow (no positioning) | Nothing |
| `relative` | Offset from normal position | `top`, `right`, `bottom`, `left` |
| `absolute` | Removed from flow, relative to nearest positioned ancestor | `top`, `right`, `bottom`, `left` |
| `fixed` | Removed from flow, relative to viewport | `top`, `right`, `bottom`, `left` |
| `sticky` | Hybrid of relative and fixed | `top`, `right`, `bottom`, `left` |

```css
/* Static (default) */
.static {
    position: static;
}

/* Relative - offset from normal position */
.relative {
    position: relative;
    top: 20px;
    left: 30px;
}

/* Absolute - relative to nearest positioned ancestor */
.absolute {
    position: absolute;
    top: 0;
    right: 0;
}

/* Fixed - relative to viewport */
.fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 100;
}

/* Sticky - toggles between relative and fixed */
.sticky-header {
    position: sticky;
    top: 0;
    background-color: white;
}
```

---

## Z-Index

Controls stacking order of positioned elements:

```css
.layer-1 {
    position: absolute;
    z-index: 1;
}

.layer-2 {
    position: absolute;
    z-index: 10;
}

.layer-3 {
    position: absolute;
    z-index: 100;
}
```

| Value | Stacking |
|-------|----------|
| Higher `z-index` | Sits on top |
| Lower `z-index` | Sits below |
| Default | `auto` (stacks in HTML order) |

> **Key Concept:** `z-index` only works on positioned elements (`relative`, `absolute`, `fixed`, or `sticky`). It does not work on static elements.
