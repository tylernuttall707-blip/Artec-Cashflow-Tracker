# Cash Flow Forecaster (Express + EJS)

A local-first cash flow forecaster for 2025. Data stays in your browser via `localStorage`; the Node.js server simply delivers the app shell rendered with EJS.

## Prerequisites
- [Node.js](https://nodejs.org/) 18 or newer
- npm (bundled with Node.js)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser. All dashboard functionality (import/export, charts, tables) should match the original static build.

## Project Structure
```
.
├── public/
│   ├── app.js         # Client-side logic (moved from inline script)
│   └── styles.css     # Extracted styles from the original HTML
├── server.js          # Express bootstrap that renders the EJS view
├── views/
│   └── index.ejs      # Main UI template rendered by Express
├── package.json
└── README.md
```

## Deployment Notes
- The Express server only serves static assets and renders `index.ejs`; it does not maintain user data.
- Because the dashboard persists state in `localStorage`, hosting behind any Node.js-capable platform (Render, Railway, Fly.io, etc.) works without additional configuration.
- For static hosting, use the legacy `index.html` from earlier commits.
