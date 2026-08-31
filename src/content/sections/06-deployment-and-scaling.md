## Introduction to Docker

Docker is a platform for developing, shipping, and running applications in containers. Containers package an application with all its dependencies, ensuring consistency across environments.

## Creating a Dockerfile

A Dockerfile defines the steps to build a Docker image for your application.

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000
CMD ["node", "src/index.js"]
```

:::key
Use multi-stage builds and alpine images to keep your Docker images small. Always use `npm ci` instead of `npm install` in production containers.
:::

## Docker Compose

Docker Compose defines and runs multi-container applications:

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/myapp
    depends_on:
      - mongo

  mongo:
    image: mongo:6
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

## PM2 Process Management

PM2 is a production process manager for Node.js applications with load balancing:

```bash
npm install -g pm2

# Start application
pm2 start src/index.js --name "my-app"

# Common commands
pm2 status          # Check process status
pm2 logs my-app     # View logs
pm2 restart my-app  # Restart application
pm2 monit           # Monitor resources
```

## Deployment Checklist

Before deploying to production:

- Set environment variables
- Enable HTTPS
- Configure proper logging
- Set up health check endpoints
- Enable rate limiting
- Configure CORS properly
- Use a process manager (PM2)
- Set up monitoring and alerts
