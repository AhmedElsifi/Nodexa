## Callbacks

A callback is a function passed as an argument to another function. This technique allows a function to call another function when an operation completes.

```javascript
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});
```

:::warning
Avoid deeply nested callbacks (callback hell). Use Promises or async/await instead.
:::

## Promises

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

```javascript
const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

readFile('data.txt')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

## Async/Await

`async/await` is syntactic sugar over Promises, making asynchronous code look and feel synchronous.

```javascript
const getData = async () => {
  try {
    const data = await readFile('data.txt');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
```

:::key
Always use try/catch blocks with async/await to handle errors gracefully.
:::

## Event Emitter

The `EventEmitter` class is used to handle events in Node.js. It is the foundation of the event-driven architecture.

```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('data', (chunk) => {
  console.log('Received:', chunk);
});

emitter.emit('data', 'Hello World');
```

## Error Handling

Proper error handling is crucial in async code. Unhandled Promise rejections can crash your application.

```javascript
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});
```
