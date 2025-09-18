# Cash Flow Forecaster (Single-File)

A local-first, single-file cash flow forecaster for 2025. Data is stored in your browser via localStorage; no servers.

## Quick Start
1. Open `index.html` locally to try it out.
2. To host on GitHub Pages:
   - Create a new repo (e.g., `cashflow-forecaster`).
   - Upload `index.html`, `.nojekyll`, and this `README.md` to the root of the repo.
   - In **Settings → Pages**, set **Build and deployment** to **Deploy from a branch**, choose **main** and **/(root)**, click **Save**.
   - Your site will be live at `https://<your-username>.github.io/cashflow-forecaster/`.

## Notes
- Use **Export JSON** on Dashboard to back up your state; **Import JSON** to restore on any device/domain.
- **Import CSV** supports column mapping; you can also use the embedded CSV button if present in this build.
- Everything runs fully client-side; it’s safe to host as a static page.

