## What is HTML?

**HTML (HyperText Markup Language)** is the standard markup language used to create and structure content on web pages.

HTML tells the browser **what each piece of content represents**. For example, a heading is represented by a heading element, a paragraph by a paragraph element, and a link by an anchor element.

HTML is **not a programming language**. It is a markup language used to describe the structure and meaning of content.

## Why Do We Use HTML?

HTML is used to:

* Structure the content of a webpage.
* Define headings, paragraphs, lists, links, images, and other content.
* Give content semantic meaning.
* Provide a foundation that CSS and JavaScript can build upon.
* Make webpages more accessible to users and assistive technologies.
* Help browsers understand how content should be interpreted and displayed.

A typical webpage uses three main technologies:

* **HTML** → Structure and content
* **CSS** → Appearance and layout
* **JavaScript** → Behavior and interactivity

For example, HTML can define a button, CSS can control how the button looks, and JavaScript can define what happens when the user clicks it.

Before working with individual HTML elements, it is important to understand the basic structure of an HTML document and how its elements are organized.


## HTML Document Structure

### `<!doctype html>`

Declares that the document uses **HTML5**.

```html
<!doctype html>
```

It should be the first line of an HTML document.

### `<html>`

The root element of the HTML document. All page content belongs inside it.

```html
<html>
  <!-- page content -->
</html>
```

### `<head>`

Contains information **about the webpage**, rather than the visible page content.

Common things placed inside `<head>` include:

* Page title
* Metadata
* CSS files
* Favicon
* Other external resources

```html
<head>
  ...
</head>
```

### `<title>`

Defines the title displayed in the browser tab.

```html
<title>First Page</title>
```

It is also useful for search engines and browser history.

### `<meta>`

Provides metadata about the webpage.

#### Description

The `description` metadata describes the page.

```html
<meta name="description" content="This is my First Page" />
```

Search engines may use this description when displaying the page in search results.

#### Character Encoding

```html
<meta charset="UTF-8" />
```

Specifies the character encoding used by the document.

`UTF-8` supports a very large range of characters, including Arabic and other languages.

This should generally be included in every HTML page.

#### Keywords

```html
<meta name="keywords" content="HTML, Web, ITI" />
```

Historically, this was used to provide keywords related to the page.

Modern search engines generally **do not use the keywords meta tag for ranking**, so it is not important for modern SEO.

#### Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Controls how the webpage is displayed on different screen sizes.

* `width=device-width` makes the page width match the device's screen width.
* `initial-scale=1.0` sets the initial zoom level to 100%.

This is important when creating **responsive websites**, especially for mobile devices.

### `<link>`

Connects the HTML document to an external resource.

#### Linking a CSS File

```html
<link rel="stylesheet" href="style.css" />
```

* `rel="stylesheet"` tells the browser that the linked resource is a stylesheet.
* `href="style.css"` specifies the location of the CSS file.

This is the standard way to connect an external CSS file to an HTML page.

#### Favicon

```html
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
```

Specifies the small icon displayed in the browser tab.

* `href` specifies the icon file.
* `type` specifies the file type.

---

## `<body>`

Contains the content displayed on the webpage.

```html
<body>
  ...
</body>
```

Everything the user normally sees and interacts with belongs inside the `<body>`.

---

## Semantic Elements

Semantic elements describe the **meaning and purpose** of their content.

### `<nav>`

Represents a section containing navigation links.

```html
<nav>
  ...
</nav>
```

Use it for major navigation areas such as:

* Main website navigation
* Menu links
* Navigation between important pages

### `<section>`

Represents a standalone section of related content.

```html
<section>
  ...
</section>
```

Use it when a part of the page represents a distinct topic or section.

### `<article>`

Represents a self-contained piece of content that could stand on its own.

```html
<article>
  ...
</article>
```

Common examples include:

* Blog posts
* News articles
* Forum posts
* Product reviews

---

## Headings

HTML provides six heading levels, from `<h1>` to `<h6>`.

```html
<h1>This is a "h1" Element</h1>
<h2>This is a "h2" Element</h2>
<h3>This is a "h3" Element</h3>
<h4>This is a "h4" Element</h4>
<h5>This is a "h5" Element</h5>
<h6>This is a "h6" Element</h6>
```

### `<h1>`

The highest-level heading.

Use it for the **main heading of a page**, such as the title of an article or page.

A page should normally have one clear main `<h1>`.

### `<h2>`

Represents a major subsection under the main heading.

### `<h3>`

Represents a subsection under an `<h2>`.

### `<h4>`, `<h5>`, and `<h6>`

Represent progressively deeper levels of content.

The heading levels should be chosen according to the **content hierarchy**, not simply because one heading looks bigger or smaller.

---

## `<p>` — Paragraph

Used to define a paragraph of text.

```html
<p>This is a Paragraph element</p>
```

Use `<p>` whenever you have a block of normal text that forms a paragraph.

---

## `<span>`

A generic **inline container** used to target a small part of text or inline content.

```html
<span style="color: red">This is a span element</span>
```

Unlike a block-level container, `<span>` does not normally start a new line.

It is commonly used when you need to apply styling or other behavior to a specific part of text.

For example:

```html
<p>
  This is <span>important</span> text.
</p>
```

---

## `<a>` — Anchor

Creates a hyperlink.

```html
<a href="https://www.google.com" target="_blank">
  This is an anchor element
</a>
```

### `href`

Specifies where the link should go.

```html
<a href="https://www.google.com">Google</a>
```

### `target`

Controls where the linked page opens.

```html
<a href="https://www.google.com" target="_blank">Google</a>
```

`target="_blank"` opens the link in a new browsing context, typically a new tab.

The default behavior is to open the link in the current tab.

Use `<a>` whenever the user needs to **navigate to another page, resource, or location**.

---

## `<hr>` — Horizontal Rule

Represents a thematic break between sections of content.

```html
<hr />
```

It is commonly displayed as a horizontal line.

Use it when there is a meaningful change or separation between topics, rather than simply using it for decoration.

---

## Lists

HTML provides different types of lists depending on how the information should be represented.

### `<ol>` — Ordered List

Creates a numbered or ordered list.

```html
<ol>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ol>
```

Use it when the **order of the items matters**, such as:

1. Steps in a process
2. Instructions
3. Rankings

### `<li>` — List Item

Represents an individual item inside an ordered or unordered list.

```html
<li>one</li>
```

It is used inside `<ol>` or `<ul>`.

### Changing the Ordered List Type

The `type` attribute can change the numbering style.

```html
<ol type="I">
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ol>
```

This produces Roman numerals:

```text
I. one
II. two
III. three
```

### `<ul>` — Unordered List

Creates a list where the order of the items does not matter.

```html
<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>
```

Use it for things such as:

* Features
* Navigation items
* Categories
* Collections of related items

---

## `<select>` — Selection Menu

Creates a dropdown menu from which the user can select an option.

```html
<select name="city" id="city">
  <option value="Cairo">Cairo</option>
  <option value="Giza">Giza</option>
  <option value="Alex">Alex</option>
</select>
```

Use `<select>` when the user should choose **one option from a predefined list**.

### `name`

```html
<select name="city">
```

Identifies the field when the form data is submitted.

### `id`

```html
<select id="city">
```

Provides a unique identifier for the element. It can also be used to connect the element with a `<label>`.

---

## `<option>` — Select Option

Defines one option inside a `<select>` element.

```html
<option value="Cairo">Cairo</option>
```

The text between the tags is what the user sees.

### `value`

```html
<option value="Cairo">Cairo</option>
```

Defines the value associated with that option when the selection is submitted.

The displayed text and submitted value can be different:

```html
<option value="cairo">Cairo, Egypt</option>
```

---

## `<details>` and `<summary>`

These elements create a native expandable/collapsible section.

### `<details>`

Contains information that can be expanded or collapsed.

```html
<details>
  ...
</details>
```

### `<summary>`

Defines the visible heading that the user clicks to open or close the details.

```html
<details>
  <summary>summary</summary>
  <p>This is the details</p>
</details>
```

Use these elements for content such as:

* FAQs
* Additional information
* Explanations
* Optional details

They provide this functionality without requiring JavaScript.

---

## `<label>`

Provides a text label for a form control.

```html
<label for="browser">Choose your browser from the list:</label>
```

The `for` attribute connects the label to an element with the matching `id`.

```html
<label for="browser">Choose your browser:</label>
<input id="browser" />
```

Clicking the label can then focus or activate the associated form control.

---

## `<input>`

Creates an input control that allows the user to enter or select data.

```html
<input list="browsers" name="browser" id="browser" />
```

### `list`

Connects the input to a `<datalist>`.

```html
<input list="browsers" />
```

The value of `list` must match the `id` of the `<datalist>`.

### `name`

Identifies the input when its data is submitted.

### `id`

Provides a unique identifier for the input and allows it to be connected to a `<label>`.

---

## `<datalist>`

Provides a list of predefined suggestions for an `<input>`.

```html
<datalist id="browsers">
  <option value="Edge"></option>
  <option value="Firefox"></option>
  <option value="Chrome"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
</datalist>
```

It is different from `<select>` because the user can generally **type their own value** while also receiving suggestions.

The input is connected using the `list` attribute:

```html
<input list="browsers" />
```

The `list` value must match the datalist's `id`.

---

## Description Lists

### `<dl>`

Creates a description list containing terms and their descriptions.

```html
<dl>
  ...
</dl>
```

### `<dt>`

Defines a term or name inside a description list.

```html
<dt>data term</dt>
```

### `<dd>`

Provides the description or information associated with the `<dt>`.

```html
<dd>data tag</dd>
```

Together:

```html
<dl>
  <dt>HTML</dt>
  <dd>A markup language used to structure web pages.</dd>
</dl>
```

Description lists are useful for things such as:

* Terms and definitions
* Questions and answers
* Metadata and corresponding values

---

## `<figure>` and `<figcaption>`

### `<figure>`

Represents self-contained content, commonly an image, diagram, illustration, or other visual content.

```html
<figure>
  <img src="image.jpg" alt="Trulli" style="width: 100%" />
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
```

Use `<figure>` when the content is related to the surrounding content but can be treated as a separate unit.

### `<figcaption>`

Provides a caption or description for the `<figure>` content.

```html
<figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
```

It is commonly used to describe an image, chart, diagram, or illustration.

---

## `<img>` — Image

Embeds an image into the webpage.

```html
<img src="image.jpg" alt="Trulli" />
```

### `src`

Specifies the location of the image.

```html
<img src="image.jpg" />
```

### `alt`

Provides alternative text describing the image.

```html
<img src="image.jpg" alt="Trulli" />
```

The `alt` text is important for:

* Accessibility
* Situations where the image cannot be loaded
* Helping describe the image's purpose

The `alt` text should describe the image meaningfully when the image conveys information.

### Inline `style`

The image in the example uses:

```html
style="width: 100%"
```

This applies CSS directly to the element and makes its width `100%`.

---

## `<embed>`

Embeds external content into the webpage.

```html
<embed
  type="image/jpg"
  src="image.jpg"
  width="300"
  height="200"
/>
```

In this example, it is used to embed an image.

### `type`

Specifies the MIME type of the embedded content.

```html
type="image/jpg"
```

### `src`

Specifies the location of the embedded resource.

### `width` and `height`

Specify the dimensions of the embedded content.

---

## `<iframe>`

Embeds another webpage or external document inside the current webpage.

```html
<iframe src="https://example.com" width="800" height="600">
</iframe>
```

Use it when you need to display external content inside your page, such as an embedded webpage or other embeddable content.

### `src`

Specifies the URL of the content to embed.

### `width` and `height`

Define the dimensions of the iframe.

---

## Lorem Ipsum

Lorem Ipsum is commonly used as **placeholder text** during development and design.

```text
Lorem ipsum dolor sit amet consectetur...
```

It allows you to test the appearance and layout of a page before the real content is available.

You can also generate Lorem Ipsum text using editor shortcuts such as:

```text
lorem
```

or specify the approximate number of words:

```text
lorem20
```

---

## Text Formatting Elements

### `<strong>`

Indicates that the text has **strong importance**.

```html
<strong>this is strong text</strong>
```

Use it when the content itself is important, not simply because you want it to look bold.

Browsers normally display `<strong>` as bold text.

### `<b>`

Draws attention to text without adding the same semantic importance as `<strong>`.

```html
<b>this is bold text</b>
```

Use `<b>` when you want to visually distinguish text without meaning that the text has strong importance.

---

## `<em>`

Indicates emphasis.

```html
<em>this is emphasized text</em>
```

Browsers normally display emphasized text in italic.

Use `<em>` when the emphasis is meaningful to the content.

### `<i>`

Represents text in an alternate voice or mood, or text that is conventionally displayed in italic.

```html
<i>this is italic text</i>
```

It is commonly used for things such as:

* Technical terms
* Foreign words
* Icons or symbolic text
* Other text that is conventionally italicized

`<i>` should not be chosen simply because you want to make important text italic; use `<em>` when the emphasis has semantic meaning.

---

## `<code>`

Represents a fragment of computer code.

```html
<code>import {react} from "react";</code>
```

Browsers normally display it using a monospace font.

Use `<code>` when displaying programming code, commands, variable names, or other computer-related syntax.

---

## `<br>` — Line Break

Creates a line break.

```html
<br />
```

It moves the following content to a new line.

Use `<br>` when a line break is actually part of the content, such as in an address or poem.

It should not normally be used to create spacing between sections; CSS should be used for layout and spacing.

---

## `<progress>` — Progress Bar

Displays the progress of a task.

```html
<progress value="70" max="100"></progress>
```

### `value`

Specifies the current progress.

```html
value="70"
```

### `max`

Specifies the maximum value.

```html
max="100"
```

Therefore:

```html
<progress value="70" max="100"></progress>
```

represents 70 out of 100, or approximately 70%.

It can be used for things such as:

* File uploads
* Course progress
* Installation progress
* Task completion

---

## Nested Elements

An element can be placed inside another element. This is called **nesting**.

```html
<p>
  This is a paragraph.
  <span>This span is nested inside the paragraph.</span>
</p>
```

The `<span>` is the child of the `<p>` element.

The element containing another element is its **parent**.

Proper nesting means that elements should be closed in the correct order.

```html
<p>
  <span>Text</span>
</p>
```

---

## Empty Elements

Some HTML elements do not contain content and therefore do not need a closing tag.

Examples from this page include:

```html
<meta charset="UTF-8" />
<link rel="stylesheet" href="style.css" />
<hr />
<img src="image.jpg" alt="Image" />
<br />
```

These are commonly called **void elements**.

They cannot contain child content.

The `/` at the end is commonly used in XHTML-style syntax, but in HTML5 it is optional for void elements.

For example, both are valid HTML5:

```html
<img src="image.jpg" alt="Image">
```

```html
<img src="image.jpg" alt="Image" />
```

---

## Summary

HTML provides the structure and meaning of a webpage through different elements. Choosing the appropriate element based on its purpose makes the document more **organized, accessible, and meaningful**.

In this lesson, we covered:

* The basic structure of an HTML5 document.
* Metadata and external resources inside `<head>`.
* Semantic elements for organizing page content.
* Headings and paragraphs for structuring text.
* Links, lists, and selection controls for user interaction.
* Elements for displaying additional information, images, and embedded content.
* Text formatting and semantic emphasis.
* Progress indicators and line breaks.
* Properly nesting elements and understanding empty elements.

The key idea is to **use HTML elements according to their meaning and purpose**, rather than choosing elements only based on how they look. CSS can control the appearance, while HTML should primarily describe the structure and meaning of the content.
