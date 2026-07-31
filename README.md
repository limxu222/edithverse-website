# edithverse.com

Marketing site for edithverse, an AI automation studio.

Static HTML and CSS. No build step, no dependencies, no framework.

## Structure

| File | What it is |
|---|---|
| `index.html` | Home: hero, process, testimonials, closing CTA |
| `services.html` | Services across 21 verticals |
| `styles.css` | Design tokens and all layout |
| `script.js` | Progressive enhancement only: nav section highlighting |
| `assets/logo/` | Logo lockups as SVG: mark, horizontal, stacked, favicon |
| `reference/` | Source reference for the hero background, not served |
| `CNAME` | Custom domain for GitHub Pages |
| `.nojekyll` | Skips Jekyll processing |

## Run locally

```bash
python -m http.server 8080
```

Then open http://localhost:8080

## Deploying

Pushes to `main` publish automatically via GitHub Pages.

The stylesheet is linked with a cache-busting query (`styles.css?v=...`). **Bump
that suffix in both HTML files whenever you edit `styles.css`**, or browsers will
serve the old stylesheet.

## Notes

- Dark theme is the default. A light theme is defined under
  `[data-theme="light"]` for documents and proposals.
- Both pages share one stylesheet and one copy of the header, footer, and closing
  CTA. If you edit the header or footer, edit it in both files.
- The site targets a 320px minimum width and respects
  `prefers-reduced-motion`.
