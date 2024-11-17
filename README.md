# Example Project

This project is a simple web application using **Express**, **Webpack**, and **Babel**. The app serves static files from the `dist` folder, processes requests, and handles the `index.html` file.

## Table of Contents

- [Project Setup](#project-setup)
- [Installation](#installation)
- [Scripts](#scripts)
- [Development](#development)
- [Production](#production)
- [Testing](#testing)
- [License](#license)

## Project Setup

The project is structured as follows:

```
project-root/
├── dist/                # The folder where Webpack builds static assets
├── src/                 # Source files for the application
│   ├── client/          # Client-side code
│   ├── server/          # Server-side code
├── webpack.dev.js       # Webpack configuration
├── webpack.prod.js       # Webpack configuration
├── package.json         # Project metadata and dependencies
└── .env                 # Environment variables (e.g., API keys)
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/352A/FEND-NEWS-NLP
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

### Development

To start the application in development mode:

```bash
npm run build-dev
```

This command will run **Webpack Dev Server**, which watches for changes in the source code and automatically reloads the app in the browser.

### Production

To build the app for production:

```bash
npm run build-prod
```

This command will bundle the app into static assets and store them in the `dist` folder.

### Start Server

To start the Express server:

```bash
npm run start
```

This will start the server on **port 5000**, and it will serve the `index.html` from the `dist` folder.

### Testing

To run the tests:

```bash
npm test
```

This will run the tests using **Jest**.

## License

This project is licensed under the MIT License.
