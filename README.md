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

## Run locally

```bash
python -m http.server 8080
```

Then open http://localhost:8080

## Deploying

**This repository is the source of truth for the site.** Pushes to `main` deploy
automatically via Vercel, which serves `edithverse.com`.

The domain is registered at Namecheap and its DNS points at Vercel: an `A` record
on the apex and a `CNAME` on `www`. The apex 308-redirects to `www`. TLS is issued
by Let's Encrypt and renewed by Vercel.

GitHub Pages was the original target and is switched off. There is deliberately no
`CNAME` or `.nojekyll` file — those are Pages-only, and leaving them behind invites
a second deployment target claiming the same domain.

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
