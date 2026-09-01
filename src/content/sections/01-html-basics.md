# 01 - HTML Basics

## HTML Boilerplate Structure

Every HTML document starts with a standard boilerplate:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

| Element | Purpose |
|---------|---------|
| `<!DOCTYPE html>` | Declares the document as HTML5 |
| `<html lang="en">` | Root element with language attribute |
| `<head>` | Contains metadata about the document |
| `<body>` | Contains visible page content |

---

## The `<head>` Element

The head contains metadata that isn't displayed on the page itself.

### Common Head Tags

| Tag | Purpose | Example |
|-----|---------|---------|
| `<title>` | Sets browser tab title | `<title>My Site</title>` |
| `<meta charset>` | Character encoding | `<meta charset="UTF-8">` |
| `<meta viewport>` | Responsive design control | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| `<meta description>` | SEO description | `<meta name="description" content="Page description">` |
| `<link>` | Links external resources | `<link rel="stylesheet" href="style.css">` |
| `<style>` | Internal CSS | `<style>body { color: red; }</style>` |

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn HTML basics">
    <title>HTML Course</title>
    <link rel="stylesheet" href="styles.css">
</head>
```

---

## Semantic HTML Elements

Semantic elements clearly describe their meaning to both browsers and developers.

| Element | Purpose |
|---------|---------|
| `<header>` | Introductory content or navigation |
| `<nav>` | Navigation links |
| `<main>` | Main content of the page |
| `<section>` | Thematic grouping of content |
| `<article>` | Self-contained content |
| `<aside>` | Sidebar or tangential content |
| `<footer>` | Footer information |

```html
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <section>
                <h2>Introduction</h2>
                <p>Welcome to the course.</p>
            </section>
        </article>

        <aside>
            <p>Related information</p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2026 ITI Summer Code Camp</p>
    </footer>
</body>
```

> **Key Concept:** Semantic HTML improves accessibility, SEO, and code readability. Always prefer semantic elements over generic `<div>` and `<span>`.

---

## Heading Elements (h1-h6)

HTML provides six levels of headings:

| Element | Level | Typical Use |
|---------|-------|-------------|
| `<h1>` | Highest | Page title (only one per page) |
| `<h2>` | Second | Section headings |
| `<h3>` | Third | Subsection headings |
| `<h4>` | Fourth | Sub-subsection headings |
| `<h5>` | Fifth | Minor headings |
| `<h6>` | Lowest | Least important headings |

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Sub-subsection Title</h4>
<h5>Minor Heading</h5>
<h6>Lowest Heading</h6>
```

> **Key Concept:** Headings should be used in order (h1 → h2 → h3) without skipping levels for proper document structure and accessibility.

---

## Text Elements

| Element | Purpose | Example |
|---------|---------|---------|
| `<p>` | Paragraph | `<p>This is a paragraph.</p>` |
| `<span>` | Inline container | `<span style="color: red;">Red text</span>` |
| `<strong>` | Strong importance (bold) | `<strong>Important</strong>` |
| `<em>` | Emphasis (italic) | `<em>Emphasized</em>` |
| `<b>` | Bold (no semantic meaning) | `<b>Bold text</b>` |
| `<i>` | Italic (no semantic meaning) | `<i>Italic text</i>` |
| `<br>` | Line break | `<p>Line 1<br>Line 2</p>` |
| `<hr>` | Horizontal rule | `<hr>` |

```html
<p>This is a <strong>paragraph</strong> with <em>emphasis</em>.</p>
<p>This is <b>bold</b> and this is <i>italic</i> without semantic meaning.</p>
<p>Line 1<br>Line 2</p>
```

> **Key Concept:** Use `<strong>` and `<em>` for meaning (importance/emphasis). Use `<b>` and `<i>` only for visual styling without meaning.

---

## Links

The `<a>` (anchor) element creates hyperlinks:

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `href` | URL destination | `<a href="https://example.com">Link</a>` |
| `target` | Where to open | `<a href="#" target="_blank">New Tab</a>` |
| `rel` | Relationship | `<a href="#" rel="noopener">Safe Link</a>` |

```html
<!-- Basic link -->
<a href="https://example.com">Visit Example</a>

<!-- Open in new tab -->
<a href="https://example.com" target="_blank" rel="noopener">New Tab</a>

<!-- Email link -->
<a href="mailto:user@example.com">Send Email</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call Us</a>

<!-- Page section link -->
<a href="#section-id">Jump to Section</a>
```

---

## Lists

### Ordered List (`<ol>`)

Used for items where order matters:

```html
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

### Unordered List (`<ul>`)

Used for items where order doesn't matter:

```html
<ul>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
</ul>
```

### Description List (`<dl>`)

Used for term-definition pairs:

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>

    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
```

| List Type | Element | Use Case |
|-----------|---------|----------|
| Ordered | `<ol>` | Steps, rankings, numbered items |
| Unordered | `<ul>` | Navigation, features, bullet points |
| Description | `<dl>` | Glossaries, FAQs, key-value pairs |

---

## Tables

Tables display data in rows and columns:

```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Department</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ahmed</td>
            <td>Instructor</td>
            <td>Web Development</td>
        </tr>
        <tr>
            <td>Sara</td>
            <td>Student</td>
            <td>Frontend</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3">Total: 2 people</td>
        </tr>
    </tfoot>
</table>
```

| Table Element | Purpose |
|---------------|---------|
| `<table>` | Defines the table |
| `<thead>` | Table header group |
| `<tbody>` | Table body group |
| `<tfoot>` | Table footer group |
| `<tr>` | Table row |
| `<th>` | Table header cell (bold, centered) |
| `<td>` | Table data cell |
| `colspan` | Span cell across columns |
| `rowspan` | Span cell across rows |

> **Key Concept:** Use `<thead>`, `<tbody>`, and `<tfoot>` to group table sections. This improves accessibility and allows for better styling and scrolling behavior.
