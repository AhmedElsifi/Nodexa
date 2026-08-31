## Introduction

Node.js is a JavaScript runtime built on Chrome V8 JavaScript engine. It allows you to run JavaScript on the server side, enabling full-stack JavaScript development.

## The Event Loop

The Event Loop is what allows Node.js to perform non-blocking I/O operations -- despite the fact that JavaScript is single-threaded -- by offloading operations to the system kernel whenever possible.

:::key
Node.js is single-threaded for code execution, but the underlying C++ libraries (libuv) handle asynchronous tasks in a thread pool.
:::

When dealing with asynchronous operations, you often encounter `Callbacks`. While powerful, heavily nested callbacks can lead to complex code structures.

## Modules and CommonJS

Node.js uses a modular system based on CommonJS. You can export functionality from one file and import it in another.

```javascript
// math.js
const add = (a, b) => a + b;
module.exports = { add };

// app.js
const { add } = require('./math');
console.log(add(2, 3)); // 5
```

## NPM Ecosystem

NPM (Node Package Manager) is the world's largest software registry. Open-source developers use NPM to share and borrow packages, and many organizations use NPM for private development.

```bash
npm init -y
npm install express
npm install --save-dev nodemon
```

## Building an HTTP Server

The built-in `http` module allows you to create an HTTP server that listens to server ports and gives a response back to the client.

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from Node.js\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
