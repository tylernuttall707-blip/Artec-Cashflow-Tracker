# Repository Agent Instructions

## Scope
These instructions apply to the entire repository.

## Project Context
- The app is now served through an Express server that renders `views/index.ejs` and serves static assets from `public/`.
- Client-side logic persists user data with `localStorage`; the Node layer should remain stateless.

## Development Guidelines
- Keep the separation between EJS templates, client-side JavaScript, and CSS—avoid re-introducing inline scripts or styles into the templates.
- When modifying server behavior, ensure routes continue to render EJS views and keep Express middleware minimal.
- Maintain clear, well-commented client-side functions; avoid large anonymous blocks and preserve correct local handling of `YYYY-MM-DD` dates.

## Testing
- After making code changes, install dependencies (`npm install`) and start the server locally (`npm start`) to confirm the dashboard renders without console errors in a modern Chromium-based browser.
