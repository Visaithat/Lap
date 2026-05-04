# LAP Insurance — UI Redesign Prototype

Static, multi-page redesign of [lap.com.la](https://lap.com.la/) — calm, trustworthy, Lao-first insurance UI.

## Preview

Open `index.html` in a browser, or serve locally:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## File map

```
/index.html                ← Homepage
/products/eco.html         ← Eco / Vehicle Insurance
/products/loan.html        ← Loan Insurance
/products/third-party.html ← Third-Party Vehicle Insurance
/about/board.html          ← Board of Directors
/about/management.html     ← Executive Management
/about/history.html        ← Company History
/about/org-chart.html      ← Organization Chart
/contact.html              ← Contact Us
/downloads.html            ← Forms & PDFs
/login.html                ← Customer Portal
/assets/css/tokens.css     ← Design tokens
/assets/js/main.js         ← Nav, language toggle, carousel, etc.
/assets/js/tweaks.jsx      ← Live tweak panel (gold tint, hero variant…)
/public/downloads/         ← Real PDFs sourced from lap.com.la
```

## Fonts loaded (Google Fonts)

- `Inter` 400 / 500 / 600 / 700 (Latin)
- `Noto Sans Lao` 400 / 500 / 700 (Lao)
- `JetBrains Mono` 500 (placeholder labels only)

Pair stack: `'Inter', 'Noto Sans Lao', system-ui, sans-serif;`

## Language

Lao first. Toggle in the header switches `[data-lo]` ↔ `[data-en]` and persists to `localStorage`.

## Notes for the client

- All photography is replaced with striped SVG placeholders + monospace labels — drop in real assets later.
- Contact form is non-functional (`<!-- TODO: wire to backend endpoint -->`).
- Login form does not authenticate; it returns to homepage.
- Some content marked `[placeholder]` is awaiting real copy or stats — do not ship without confirming.
