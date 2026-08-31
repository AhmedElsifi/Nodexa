## Introduction to MongoDB

MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents. It is designed for scalability and developer productivity.

## Setting Up Mongoose

Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection failed:', err));
```

## Schema Design

A schema defines the structure of documents within a collection. Mongoose schemas map directly to MongoDB collections.

```javascript
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0 },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
```

:::key
Good schema design is critical for performance. Use references for data that is queried separately and embedding for data that is always accessed together.
:::

## CRUD Operations

Mongoose provides methods for Create, Read, Update, and Delete operations:

```javascript
// Create
const user = await User.create({ name: 'John', email: 'john@example.com' });

// Read
const users = await User.find({ age: { $gte: 18 } });

// Update
await User.findByIdAndUpdate(id, { name: 'Jane' });

// Delete
await User.findByIdAndDelete(id);
```

## Validation

Mongoose provides built-in validation for schema fields:

```javascript
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, enum: ['electronics', 'clothing', 'food'] }
});
```
