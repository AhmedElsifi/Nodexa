## RESTful Principles

REST (Representational State Transfer) is an architectural style for designing networked applications. Key principles include stateless communication, uniform interfaces, and resource-based URLs.

## Designing Endpoints

A well-designed API uses HTTP methods correctly and resources are named with nouns, not verbs.

```javascript
// Good API design
GET    /api/users          // List all users
GET    /api/users/:id      // Get a specific user
POST   /api/users          // Create a new user
PUT    /api/users/:id      // Update a user
DELETE /api/users/:id      // Delete a user
```

## Authentication with JWT

JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims to be transferred between two parties.

```javascript
const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { userId: user._id, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: '24h' }
);
```

:::key
Always store JWT secrets in environment variables, never in source code. Use short expiration times and implement token refresh mechanisms.
:::

## Authorization Middleware

Protect routes with middleware that verifies JWT tokens:

```javascript
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Use in routes
router.get('/protected', authenticate, controller);
```

## Rate Limiting

Protect your API from abuse by implementing rate limiting:

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests'
});

app.use('/api/', limiter);
```
