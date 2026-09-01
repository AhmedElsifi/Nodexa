# 05 - CSS Animations & Advanced Topics

## CSS Variables (Custom Properties)

CSS variables store reusable values:

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --text-color: #333;
    --spacing: 1rem;
    --border-radius: 8px;
}

.button {
    background-color: var(--primary-color);
    color: var(--text-color);
    padding: var(--spacing);
    border-radius: var(--border-radius);
}

.button:hover {
    background-color: var(--secondary-color);
}
```

### Variable Scope

```css
/* Global variables (available everywhere) */
:root {
    --main-color: blue;
}

/* Component-specific variables */
.card {
    --card-bg: white;
    --card-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    background-color: var(--card-bg);
    box-shadow: var(--card-shadow);
}
```

> **Key Concept:** Define global variables in `:root`. Use component-specific variables for scoped styling. Variables cascade and can be overridden.

---

## Pseudo-Elements

Pseudo-elements create virtual elements that don't exist in HTML:

| Pseudo-Element | Purpose |
|----------------|---------|
| `::before` | Inserts content before element |
| `::after` | Inserts content after element |
| `::first-letter` | Targets first letter |
| `::first-line` | Targets first line |
| `::selection` | Targets selected text |

```css
/* Add decorative content */
.quote::before {
    content: "\201C"; /* Opening quote */
    font-size: 3rem;
    color: var(--primary-color);
    margin-right: 0.5rem;
}

.quote::after {
    content: "\201D"; /* Closing quote */
    font-size: 3rem;
    color: var(--primary-color);
    margin-left: 0.5rem;
}

/* Style first letter */
article p::first-letter {
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary-color);
}

/* Add icons */
.link::after {
    content: " \2192"; /* Arrow */
}
```

### Common Use Cases

```css
/* Clearfix */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

/* Tooltip */
.tooltip {
    position: relative;
}

.tooltip::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 0.5rem;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
}

.tooltip:hover::after {
    opacity: 1;
}
```

---

## Pseudo-Classes

Pseudo-classes target elements in specific states:

| Pseudo-Class | Purpose |
|--------------|---------|
| `:hover` | Mouse is over element |
| `:active` | Element is being clicked |
| `:focus` | Element has focus |
| `:first-child` | First child of parent |
| `:last-child` | Last child of parent |
| `:nth-child(n)` | nth child of parent |
| `:nth-of-type(n)` | nth of specific type |

```css
/* Interactive states */
.button:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
}

.button:active {
    transform: translateY(0);
}

.input:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

/* Child selectors */
li:first-child {
    font-weight: bold;
}

li:last-child {
    border-bottom: none;
}

/* Nth-child patterns */
tr:nth-child(even) {
    background-color: #f5f5f5;
}

li:nth-child(3n) {
    color: red; /* Every 3rd item */
}

/* Type selectors */
p:first-of-type {
    font-size: 1.2rem;
}
```

---

## Transitions

Transitions animate property changes smoothly:

```css
.button {
    background-color: var(--primary-color);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: var(--border-radius);
    
    /* Transition properties */
    transition-property: background-color, transform;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
}

.button:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
}
```

### Transition Shorthand

```css
.button {
    /* shorthand: property duration timing-function delay */
    transition: background-color 0.3s ease, transform 0.3s ease;
    
    /* Or transition all properties */
    transition: all 0.3s ease;
}
```

| Property | Purpose | Values |
|----------|---------|--------|
| `transition-property` | Which properties to animate | `all`, `background-color`, etc. |
| `transition-duration` | How long the animation takes | `0.3s`, `300ms` |
| `transition-timing-function` | Speed curve | `linear`, `ease`, `ease-in`, `ease-out` |
| `transition-delay` | When to start | `0s`, `0.3s` |

---

## Keyframe Animations

For more complex animations, use `@keyframes`:

```css
/* Define the animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Apply the animation */
.card {
    animation-name: fadeIn;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
}
```

### Animation Shorthand

```css
.card {
    /* shorthand: name duration timing-function delay iteration-count direction fill-mode */
    animation: fadeIn 0.5s ease-out 0s 1 normal forwards;
}
```

### Animation Properties

| Property | Purpose | Values |
|----------|---------|--------|
| `animation-name` | Name of keyframes | `fadeIn`, `slideIn` |
| `animation-duration` | How long | `0.5s`, `500ms` |
| `animation-timing-function` | Speed curve | `ease`, `linear`, `ease-in-out` |
| `animation-delay` | When to start | `0s`, `0.5s` |
| `animation-iteration-count` | How many times | `1`, `infinite` |
| `animation-direction` | Direction | `normal`, `reverse`, `alternate` |
| `animation-fill-mode` | State before/after | `forwards`, `backwards`, `both` |
| `animation-play-state` | Play or pause | `running`, `paused` |

### Common Animation Examples

```css
/* Pulse effect */
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.pulse {
    animation: pulse 2s infinite;
}

/* Spin effect */
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.spinner {
    animation: spin 1s linear infinite;
}

/* Bounce effect */
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.bounce {
    animation: bounce 1s infinite;
}

/* Slide in from left */
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.slide-in {
    animation: slideInLeft 0.5s ease-out forwards;
}
```

---

## Box Shadow

Adds shadow effects to elements:

```css
.box {
    /* x-offset y-offset blur-radius spread-radius color */
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    
    /* Multiple shadows */
    box-shadow: 
        4px 4px 10px rgba(0, 0, 0, 0.3),
        inset 0 0 10px rgba(0, 0, 0, 0.1);
}
```

| Value | Purpose |
|-------|---------|
| x-offset | Horizontal position |
| y-offset | Vertical position |
| blur-radius | Softness of shadow |
| spread-radius | Size of shadow |
| color | Shadow color |
| `inset` | Shadow inside element |

---

## Linear Gradient

Creates gradient backgrounds:

```css
/* Basic gradient */
.gradient {
    background: linear-gradient(to right, #3498db, #2ecc71);
}

/* Angle gradient */
.gradient {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}

/* Multiple stops */
.gradient {
    background: linear-gradient(
        to bottom,
        #3498db 0%,
        #2ecc71 50%,
        #f1c40f 100%
    );
}

/* Radial gradient */
.radial {
    background: radial-gradient(circle, #3498db, #2ecc71);
}
```

---

## Media Queries

Media queries apply styles based on device characteristics:

```css
/* Mobile first approach */
.container {
    padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}
```

### Common Breakpoints

| Breakpoint | Width | Device |
|------------|-------|--------|
| Small | < 576px | Mobile |
| Medium | ≥ 768px | Tablet |
| Large | ≥ 992px | Desktop |
| Extra Large | ≥ 1200px | Large Desktop |

```css
/* Responsive typography */
html {
    font-size: 14px;
}

@media (min-width: 768px) {
    html {
        font-size: 16px;
    }
}

@media (min-width: 1024px) {
    html {
        font-size: 18px;
    }
}

/* Responsive grid */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

---

## Introduction to Bootstrap

Bootstrap is a popular CSS framework for rapid UI development.

### Grid System

Bootstrap uses a 12-column grid system:

```html
<div class="container">
    <div class="row">
        <div class="col-md-4">Column 1</div>
        <div class="col-md-4">Column 2</div>
        <div class="col-md-4">Column 3</div>
    </div>
</div>
```

| Class | Width |
|-------|-------|
| `container` | Centered, responsive wrapper |
| `row` | Flex container for columns |
| `col` | Equal-width columns |
| `col-{size}` | Responsive column width |
| `col-{size}-{n}` | Specific column span |

### Common Components

```html
<!-- Buttons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>

<!-- Cards -->
<div class="card">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text">Content here</p>
    </div>
    <div class="card-footer">Footer</div>
</div>

<!-- Alerts -->
<div class="alert alert-success">Success!</div>
<div class="alert alert-danger">Error!</div>

<!-- Forms -->
<div class="mb-3">
    <label class="form-label">Email</label>
    <input type="email" class="form-control">
</div>
```

> **Key Concept:** Bootstrap provides pre-built components and a responsive grid system. Use it to prototype quickly, but customize or replace with custom CSS for production.
