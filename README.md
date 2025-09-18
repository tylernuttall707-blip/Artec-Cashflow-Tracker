# Cash Flow Forecaster (Single-File)

A local-first, single-file cash flow forecaster for 2025. Data is stored in your browser via localStorage; no servers.

## Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open the application at the URL printed in your terminal (defaults to `http://localhost:3000`).

## Project Layout
- `server.js` – Express entry point that serves static assets and handles any server-side routes.
- `views/` – Server-rendered templates and partials.
- `public/` – Static front-end assets (JavaScript, CSS, images, fonts).

## Prerequisites
- Node.js 18 LTS or newer.
- npm scripts:
  - `npm start` – runs the Express server in development mode.
  - `npm run build` – builds optimized assets for production (if applicable).
  - `npm test` – executes the project's automated test suite (if configured).

## Notes
- Use **Export JSON** on Dashboard to back up your state; **Import JSON** to restore on any device/domain.
- **Import CSV** supports column mapping; you can also use the embedded CSV button if present in this build.
- Everything runs fully client-side; it’s safe to host as a static page.
