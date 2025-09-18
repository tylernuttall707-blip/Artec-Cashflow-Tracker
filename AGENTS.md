# Repository Agent Instructions

## Scope
These instructions apply to the entire repository.

## Development Guidelines
- Keep all functionality accessible in `index.html`; the project currently uses a single-page architecture without a build step.
- When modifying JavaScript embedded in the HTML, prefer clear, well-commented functions over large anonymous blocks.
- Always ensure date handling treats `YYYY-MM-DD` strings as local calendar dates to avoid time zone regressions.

## Testing
- After making code changes, manually verify that the dashboard renders without console errors in a modern Chromium-based browser.
