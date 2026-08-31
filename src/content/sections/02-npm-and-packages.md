## What is NPM

NPM stands for Node Package Manager. It is a command-line tool that comes with Node.js and allows you to install, share, and manage packages of JavaScript code.

## package.json

The `package.json` file is the heart of any Node.js project. It holds metadata about the project and manages its dependencies.

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

## Dependencies

Packages are divided into two categories:

- **dependencies**: Required for the application to run in production
- **devDependencies**: Only needed during development

```bash
npm install express          # production dependency
npm install --save-dev jest   # dev dependency
```

:::key
Always use `--save-dev` for tools like linters, test frameworks, and build tools that are not needed in production.
:::

## Scripts

Scripts in `package.json` allow you to define custom commands. The most common ones are:

```json
"scripts": {
  "start": "node src/index.js",
  "dev": "nodemon src/index.js",
  "test": "jest",
  "lint": "eslint src/"
}
```

Run them with `npm run dev` or `npm start`.

## Publishing Packages

You can publish your own packages to the NPM registry:

```bash
npm login
npm publish
```

Make sure your package has a unique name, a proper `package.json`, and an `index.js` entry point.
