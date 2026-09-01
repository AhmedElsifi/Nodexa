# 04 - CSS Flexbox

## What is Flexbox?

Flexbox is a one-dimensional layout method for arranging items in rows or columns.

```css
.container {
    display: flex;
}
```

> **Key Concept:** Flexbox works in one direction at a time (row OR column). For two-dimensional layouts, use CSS Grid.

---

## Flex Container Properties

The parent element with `display: flex` is the flex container.

### justify-content (Main Axis)

Aligns items along the main axis (horizontal by default):

```css
.container {
    display: flex;
    justify-content: flex-start;    /* Items at start */
    justify-content: flex-end;      /* Items at end */
    justify-content: center;        /* Items centered */
    justify-content: space-between; /* Equal space between */
    justify-content: space-around;  /* Equal space around */
    justify-content: space-evenly;  /* Equal space everywhere */
}
```

| Value | Description |
|-------|-------------|
| `flex-start` | Items packed at start |
| `flex-end` | Items packed at end |
| `center` | Items centered |
| `space-between` | Equal space between items |
| `space-around` | Equal space around items |
| `space-evenly` | Equal space everywhere |

### align-items (Cross Axis)

Aligns items along the cross axis (vertical by default):

```css
.container {
    display: flex;
    align-items: stretch;    /* Default - fills container height */
    align-items: flex-start; /* Items at top */
    align-items: flex-end;   /* Items at bottom */
    align-items: center;     /* Items centered */
    align-items: baseline;   /* Items aligned by text baseline */
}
```

| Value | Description |
|-------|-------------|
| `stretch` | Items stretch to fill container |
| `flex-start` | Items aligned to top |
| `flex-end` | Items aligned to bottom |
| `center` | Items centered vertically |
| `baseline` | Items aligned by text baseline |

### align-content (Multi-line)

Aligns rows when there's extra space in the cross axis (requires `flex-wrap`):

```css
.container {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    align-content: space-between;
}
```

### flex-wrap

Controls whether items wrap to new lines:

```css
.container {
    display: flex;
    flex-wrap: nowrap;   /* Default - single line */
    flex-wrap: wrap;     /* Items wrap to new lines */
    flex-wrap: wrap-reverse; /* Wraps in reverse direction */
}
```

### flex-direction

Sets the direction of the main axis:

```css
.container {
    display: flex;
    flex-direction: row;            /* Default - left to right */
    flex-direction: row-reverse;    /* Right to left */
    flex-direction: column;         /* Top to bottom */
    flex-direction: column-reverse; /* Bottom to top */
}
```

| Value | Main Axis | Direction |
|-------|-----------|-----------|
| `row` | Horizontal | Left to right |
| `row-reverse` | Horizontal | Right to left |
| `column` | Vertical | Top to bottom |
| `column-reverse` | Vertical | Bottom to top |

---

## Complete Container Example

```css
.navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #333;
    color: white;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: stretch;
}
```

---

## Flex Child Properties

Items inside a flex container are flex children.

### flex-grow

Controls how much an item should grow relative to others:

```css
.item {
    flex-grow: 0; /* Default - don't grow */
    flex-grow: 1; /* Grow to fill space */
    flex-grow: 2; /* Grow twice as much as flex-grow: 1 */
}
```

```css
/* Example: 2:1 ratio */
.container {
    display: flex;
}

.sidebar {
    flex-grow: 1; /* Takes 1 part */
}

.main {
    flex-grow: 2; /* Takes 2 parts */
}
```

### flex-shrink

Controls how much an item should shrink when there's not enough space:

```css
.item {
    flex-shrink: 0; /* Don't shrink */
    flex-shrink: 1; /* Default - shrink normally */
    flex-shrink: 2; /* Shrink twice as much */
}
```

### flex-basis

Sets the initial size before growing/shrinking:

```css
.item {
    flex-basis: auto;    /* Default - based on content */
    flex-basis: 200px;   /* Fixed starting size */
    flex-basis: 50%;     /* Percentage of container */
}
```

### flex Shorthand

Combines grow, shrink, and basis:

```css
.item {
    flex: 0 1 auto;   /* Default: no grow, shrink, auto basis */
    flex: 1;          /* Shorthand for flex: 1 1 0% */
    flex: 1 200px;    /* Shorthand for flex: 1 1 200px */
    flex: 0 0 25%;    /* Fixed at 25% width */
}
```

| Property | Purpose | Default |
|----------|---------|---------|
| `flex-grow` | How much to grow | `0` |
| `flex-shrink` | How much to shrink | `1` |
| `flex-basis` | Initial size | `auto` |

### order

Controls the visual order of flex items:

```css
.item-1 { order: 3; }
.item-2 { order: 1; }
.item-3 { order: 2; }
/* Visual order: item-2, item-3, item-1 */
```

### align-self

Overrides `align-items` for individual items:

```css
.container {
    display: flex;
    align-items: center; /* All items centered */
}

.special-item {
    align-self: flex-end; /* This item at bottom */
}
```

---

## Practical Layout Examples

### Navigation Bar

```html
<nav class="navbar">
    <div class="logo">MySite</div>
    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #333;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-links a {
    color: white;
    text-decoration: none;
}
```

### Card Layout

```html
<div class="card-container">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
</div>
```

```css
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
}

.card {
    flex: 1 1 300px; /* Grow, shrink, min 300px */
    padding: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
}
```

### Holy Grail Layout

```html
<div class="layout">
    <header>Header</header>
    <aside class="sidebar-left">Left Sidebar</aside>
    <main>Main Content</main>
    <aside class="sidebar-right">Right Sidebar</aside>
    <footer>Footer</footer>
</div>
```

```css
.layout {
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
}

header, footer {
    flex: 0 0 100%;
}

.sidebar-left {
    flex: 0 0 200px;
    order: -1;
}

.sidebar-right {
    flex: 0 0 200px;
}

main {
    flex: 1;
}
```

### Centering Content

```css
/* Method 1: Flex centering */
.center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Method 2: Perfect centering */
.perfect-center {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

> **Key Concept:** Flexbox excels at one-dimensional layouts and alignment. For complex two-dimensional layouts, combine Flexbox with CSS Grid.
