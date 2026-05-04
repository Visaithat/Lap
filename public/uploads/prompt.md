# LAP Insurance — UI Redesign Brief

> **How to use this file:** Paste the entire content below into a new chat with Claude (claude.ai) and ask it to produce the redesigned site as static HTML + Tailwind. The brief is self-contained — Claude does not need to fetch the original site.

---

## Context

You are redesigning the public website of **Lanexang Assurance Public Co., Ltd. (LAP)** — `https://lap.com.la/` — a Laotian insurance company founded in 2010, recently acquired in full by ARVY Investment Company in 2025. The current site is a dated WordPress build that relies almost entirely on flat marketing JPEGs in place of structured content, has no language toggle, leaks shortcodes (`[visitor_counter]`, `[lap_modern_org]`) into the rendered page, and shows the same contact block in three places per page.

**The goal is UI quality only.** Do not invent features, add new pages, change the information architecture, or change copy beyond what is required to render existing image-content as real text. Same pages. Same context. Same products. Just a dramatically better interface.

**Audience:** Lao-speaking consumers and small businesses shopping for insurance, plus institutional partners (banks, regulators) who visit the corporate pages. Trust is the primary emotional currency. Fast access to the emergency hotline (1819) is the primary functional currency.

## Deliverable

Produce a static, multi-page prototype using **HTML5 + Tailwind CSS (CDN build is fine)** with this file structure:

```
/index.html                 ← Homepage
/products/eco.html          ← Eco / Vehicle Insurance
/products/loan.html         ← Loan Insurance
/products/third-party.html  ← Third-Party Vehicle Insurance
/about/board.html           ← Board of Directors
/about/management.html      ← Executive Management
/about/history.html         ← Company History (2010 → 2025)
/about/org-chart.html       ← Organization Chart
/contact.html               ← Contact Us
/downloads.html             ← Application Form / PDFs
/login.html                 ← Customer / Agent Portal entry
/assets/css/tokens.css      ← Design tokens (colors, type scale, shadows)
/assets/js/main.js          ← Minimal JS: nav toggle, language switch, carousel
/README.md                  ← How to preview + which fonts/assets to load
```

Every page must share a single `<header>` and `<footer>` partial pattern (inline the same markup; do not introduce a build step). Pages must be openable directly in a browser with no server.

---

## Design Direction — "Modern Trust"

Reference points: **Lemonade**, **Sun Life Asia**, **Singlife**, **FWD Insurance**. Friendly, confident, generous whitespace, soft geometry, clear typographic hierarchy. Not stiff. Not flashy. Trustworthy because it feels considered, not because it shouts.

### Tone
- Calm and reassuring, not corporate-cold.
- Lao-first identity, English as a respectful secondary.
- Insurance is bought when something goes wrong — make rescue feel one tap away, not buried in a footer.

### Color tokens

| Token | Hex | Usage |
|---|---|---|
| `--lap-primary-900` | `#0B3D2E` | Headings on light, deepest brand |
| `--lap-primary-700` | `#0F766E` | Primary brand (teal-green; "Lanexang green") |
| `--lap-primary-500` | `#14B8A6` | Hover, accents, illustration fills |
| `--lap-primary-50`  | `#ECFDF5` | Tinted surfaces, badges, soft sections |
| `--lap-accent-500`  | `#F4B942` | Warm gold — CTAs, highlights, premium feel |
| `--lap-accent-600`  | `#D9A02F` | CTA hover |
| `--lap-danger-600`  | `#DC2626` | **Emergency hotline only** (1819) — never decorative |
| `--lap-ink-900`     | `#0F172A` | Body text |
| `--lap-ink-600`     | `#475569` | Secondary text |
| `--lap-ink-400`     | `#94A3B8` | Tertiary, captions |
| `--lap-surface-0`   | `#FFFFFF` | Cards |
| `--lap-surface-50`  | `#FAFAF7` | Page background (warm off-white, not stark white) |
| `--lap-border`      | `#E2E8F0` | Hairline dividers |

Map these to Tailwind via `tailwind.config` `extend.colors` so utilities like `bg-lap-primary-700` work. Do **not** scatter raw hex values across markup.

### Typography

- **Lao:** `Noto Sans Lao` (Google Fonts), weights 400/500/700. Loop variant if Looped feels too informal — pick one and use it consistently.
- **Latin:** `Inter` (Google Fonts), weights 400/500/600/700.
- Pair them in a single CSS `font-family` stack so a mixed-script paragraph renders without jarring baseline shifts: `font-family: 'Inter', 'Noto Sans Lao', system-ui, sans-serif;`
- Lao script needs ~10% extra `line-height` vs Latin — set `body { line-height: 1.65; }` and let headings drop to 1.2.

**Type scale (rem, mobile-first; bump up one step at `md:` breakpoint):**

| Role | Mobile | Desktop | Weight |
|---|---|---|---|
| Display (hero) | 2.25 / 36px | 3.75 / 60px | 700 |
| H1 page | 1.875 / 30px | 2.5 / 40px | 700 |
| H2 section | 1.5 / 24px | 2 / 32px | 600 |
| H3 card | 1.25 / 20px | 1.375 / 22px | 600 |
| Body | 1 / 16px | 1.0625 / 17px | 400 |
| Small / caption | 0.875 / 14px | 0.875 / 14px | 500 |

### Geometry & motion

- Border radius: cards `rounded-2xl` (16px), buttons `rounded-full` for primary CTAs / `rounded-xl` for secondary.
- Shadows: low and warm. `shadow-[0_4px_20px_-4px_rgba(15,118,110,0.12)]` for resting cards; bump to `0_10px_30px_-8px_rgba(15,118,110,0.18)` on hover.
- Motion: `transition-all duration-200 ease-out` on hover; never animate position by more than 4px. No autoplay carousels longer than 6s per slide; pause on hover; honor `prefers-reduced-motion`.

### Iconography & imagery

- Use **Lucide icons** (CDN: `https://unpkg.com/lucide@latest`) — line style, 1.75px stroke, primary-700 by default.
- Replace the existing flat marketing JPEGs in product cards with **icon + short copy**, not images. Reserve photography for: hero (one editorial shot), History page (the existing ownership-transfer ceremony photo), and Board/Management headshots.
- For hero illustration: a single soft-geometric SVG (umbrella, shield, or stylized Lao naga motif in primary-500). Do not stock-photo this.

### Layout grid

- 12-column grid, `max-w-7xl` (`1280px`) container, `px-6 md:px-10` gutters.
- Vertical rhythm in multiples of 8px. Section padding `py-16 md:py-24`.
- Never let a text column exceed `max-w-prose` (~65ch).

---

## Global components (consistent across all pages)

### Header

```
┌─────────────────────────────────────────────────────────────────┐
│ [LAP logo]   Products ▾   About ▾   Contact   Downloads        │
│                                          ☎ 1819   [ ລາວ | EN ]  [Login]│
└─────────────────────────────────────────────────────────────────┘
```

- Sticky on scroll, white surface with `backdrop-blur` and a 1px bottom border that appears only after scrolling past 40px.
- Mobile: hamburger drawer from the right; emergency hotline `1819` stays visible in the top-right corner at all breakpoints (it is the most important affordance on the entire site).
- Language toggle: `ລາວ | EN` segmented control in the header. Persist choice in `localStorage`. The original site has `/en/` URLs but no toggle — fix that. For the prototype, every page must have both `lang="lo"` and `lang="en"` text variants in `data-lo`/`data-en` attributes that the JS swaps.
- Login button: outline style on desktop, becomes a person-icon button on mobile.

### Footer

Three columns on desktop, stacked on mobile:

1. **Brand block** — logo, one-line tagline, social icons (Facebook, YouTube, TikTok — keep existing URLs).
2. **Quick links** — mirror of main nav.
3. **Contact card** — address (Level 2, MBL Bank Building, Kaisone Phomvihane Rd, Phonsai Village, Sisattanak District, Vientiane), email `Contract@lap.com.la`, phones `030 9029999` / `020 98556666`, hotline `1819`, "24/7 service" pill.

Bottom bar: `© 2010–2025 Lanexang Assurance Public Co., Ltd. · License No. … · Privacy · Terms`.

**Remove the visitor counter entirely.** It is a 2008 artifact and currently leaks as a literal `[visitor_counter]` shortcode on the live site.

### Sticky emergency CTA (mobile only)

Floating pill anchored bottom-right, `bg-lap-danger-600` text white, label `☎ ແຈ້ງເຫດ 1819`. Tappable `tel:1819` link. Hide on `md:` and above.

---

## Page-by-page specs

### 1. Homepage (`/index.html`)

**Sections in order:**

1. **Hero** — split layout, 60/40.
   - Left: eyebrow `ປະກັນໄພຄຸນນະພາບສາກົນ · ຕັ້ງແຕ່ 2010` (existing positioning), then a 2-line display headline `ປົກປ້ອງສິ່ງສຳຄັນ / ໃນຊີວິດທ່ານ` ("Protect what matters in your life"), supporting paragraph (one sentence), two CTAs: primary gold `ຮັບໃບສະເໜີລາຄາ` (Get a Quote → links to `/downloads.html` since no real form exists), secondary outline `ເບິ່ງຜະລິດຕະພັນ` (Browse Products → `#products`).
   - Right: SVG illustration on a soft `lap-primary-50` rounded-3xl panel.
   - Below the hero, a thin **trust strip**: "🛡 15+ ປີໃນຕະຫຼາດ · 🤝 ລູກຄ້າ 50,000+ · ⏱ ບໍລິການ 24/7 · 🏛 ກຳກັບໂດຍ ທະນາຄານແຫ່ງ ສປປ ລາວ" (use only stats already implied on the existing site; do not invent numbers — if uncertain, drop the stat rather than fabricate).

2. **Products grid** — section heading `ຜະລິດຕະພັນປະກັນໄພ`, 6 cards in a responsive 3-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`):
   - Eco / Vehicle (`car`), Health (`heart-pulse`), Travel (`plane`), Fire (`flame`), Construction (`hard-hat`), Third-Party (`shield-check`).
   - Card anatomy: icon in primary-50 rounded-square, title (Lao), one-line description (Lao), `ເບິ່ງລາຍລະອຽດ →` link to the product page. Hover: card lifts 2px and link arrow nudges right 4px.

3. **Why LAP** — 3-column value props with icons (Trust / Speed / Reach). Lao-only copy. No image.

4. **How it works** — numbered steps 01 / 02 / 03 (Choose product → Submit form → Get covered). Connect with a hairline rule, not a chunky timeline graphic.

5. **Testimonials carousel** (replaces the existing "WhatsApp Image" carousel, which is a privacy red flag) — 3 quote cards, manual navigation only, no autoplay. If real testimonial copy is unavailable, use generic placeholder text marked clearly as `[placeholder]` so the client can replace it.

6. **CTA band** — full-width primary-700 background, white text: "ຕ້ອງການຄຳແນະນຳ?" + phone CTA + email CTA.

**Kill the current homepage's:** dual carousels stacked on top of each other, repeated contact block, raw `[visitor_counter]` shortcode.

### 2. Product detail pages (`/products/eco.html`, `/loan.html`, `/third-party.html`)

The current pages are essentially one large JPEG each. Replace with a real content layout:

1. **Breadcrumb** — `Home › Products › {Product name}`.
2. **Page hero** — left: H1 + 1-paragraph intro. Right: relevant Lucide icon in a large primary-50 panel.
3. **"What's covered"** — checklist with `check-circle-2` icons in primary-700, 4–6 items per product. Pull bullet content from the existing JPEGs if legible; if not, leave clearly-marked `[content from existing brochure]` placeholders.
4. **"Who it's for"** — 2 or 3 persona cards.
5. **"How to apply"** — same 3-step pattern as the homepage, ending in a CTA to `/downloads.html`.
6. **FAQ accordion** — 4–6 items. Keyboard accessible, `aria-expanded`.
7. **Related products** — 2 cards linking to the other product pages.

### 3. About — Board of Directors (`/about/board.html`)

Replace the vertical stack of full-width JPEGs with a real **person-card grid**:

- 3-column on desktop, 1 on mobile.
- Card: square portrait (object-cover), name in Lao + transliteration, role pill, optional one-sentence bio.
- Click card to expand a modal with full bio (graceful fallback: scroll to anchor if JS disabled).

Names from current site: Phaingaek Tammanam, Sommisay Vongkhamsao, Toulaphone Santisouk.

### 4. About — Executive Management (`/about/management.html`)

Same component as Board page. Members:
- Mrs. Sengduangdao Sitphaxay — Chairman
- Dr. Phadone Insaveang — Vice Chairman
- Mr. Phaingaek Thammanam — Board Member & General Director
- Mrs. Toulaphone Santisouk — Board Member
- Dr. Somchid Hongvichid — Independent Board Member

### 5. About — Company History (`/about/history.html`)

Replace the wall of body-text dates with a **vertical timeline** component (alternating left/right on desktop, single rail on mobile):

- 2010 — Founded as JV between Lao Development Bank and PTI (Oct 11)
- 2025 — Acquired 100% by ARVY Investment Company (key dates: March 20 and August 15)
- 2025+ — Vision statement: market leadership and financial strength

Each milestone: date chip, title, 1–2 sentence description, optional photo (only the existing ownership-transfer ceremony photo for the 2025 entry).

### 6. About — Organization Chart (`/about/org-chart.html`)

The current page renders the literal text `[lap_modern_org]` — a broken shortcode. Build an actual chart using SVG or nested `<ul>` + CSS:

- Horizontal tree on desktop (`flex` rows with connector lines drawn with absolute-positioned `::before`/`::after` pseudo-elements or inline SVG), vertical accordion on mobile.
- Nodes: rounded boxes with title + role count.
- If the real reporting structure is unknown, render a generic insurance-company structure (Board → CEO → 4–5 departments) with a clearly-marked `[placeholder structure — confirm with client]` banner above.

### 7. Contact (`/contact.html`)

Two-column layout on desktop:

- **Left:** "ຕິດຕໍ່ພວກເຮົາ" heading, 4 contact tiles (address, email, phone, hours) with Lucide icons, each tappable (`tel:`, `mailto:`, `https://maps.google.com/?q=...`). Embed a Google Maps iframe below the tiles — use the same pin location as the current site.
- **Right:** A simple **inquiry form** (name, phone, email, product dropdown, message, submit). The current site has none, only a "download" link. The form is non-functional (no backend); on submit, show a success toast and clear fields. Mark with a comment: `<!-- TODO: wire to backend endpoint -->`. A contact form on a contact page is the missing primitive that the page already promises by its title, not a new feature.

If even that feels out-of-scope, omit the form and instead show a large "Open in WhatsApp" / "Call us" CTA pair using the existing phone numbers.

### 8. Downloads (`/downloads.html`)

Replace the bare list of PDF links with a **document card grid**:

- Each card: file-type icon (`file-text`), title in Lao + EN, 1-line description, file size, "Download" button with download icon.
- Group by section: "ແບບຟອມສະໝັກ" (Application Forms) and "ໂອກາດງານ" (Careers).
- Existing files: LANEXANG Application Form (Lao PDF), Job Recruitment Details (PDF).

### 9. Login (`/login.html`)

The current site links to `/lap_system` — keep that link, but the prototype's `/login.html` should be a clean **portal landing**:

- Centered card on a primary-700 → primary-900 gradient background.
- LAP logo, "Customer Portal" heading, username + password fields, "Forgot password?" link, primary CTA "ເຂົ້າສູ່ລະບົບ".
- Below the card: "Are you an agent? → Agent portal" link.
- No actual auth — submit just routes back to homepage.

---

## Localization rules

1. **Lao is the primary script.** Every visible string must have a Lao version. English is supplementary.
2. Use `data-lo="..."` and `data-en="..."` attributes on text nodes; the language toggle's JS swaps `textContent` based on the chosen lang and updates `<html lang>`.
3. Numbers and phone numbers stay Latin digits (Lao users read both, but Latin is universal for `tel:` links).
4. Date formats: `DD MMM YYYY` (e.g., `11 ຕຸລາ 2010` / `11 Oct 2010`).
5. Never machine-translate Lao copy in this prototype. If a translation is genuinely missing, leave the Lao string empty with an HTML comment `<!-- TODO: Lao copy -->`. The client will fill it.

## Accessibility (non-negotiable)

- Color contrast ≥ 4.5:1 for body, ≥ 3:1 for large text. Verify gold-on-white CTAs especially — gold buttons need ink-900 text, not white.
- All interactive elements reachable via keyboard, visible focus ring (`focus-visible:ring-2 ring-lap-primary-500 ring-offset-2`).
- Every `<img>` has meaningful `alt`; decorative images get `alt=""`.
- Headings form a single logical outline per page (one `<h1>`, sequential `<h2>`/`<h3>`).
- Carousel: arrow keys navigate, screen-reader announcement of slide change, pause control.
- Forms: `<label>` always associated, `aria-describedby` for error text.
- Honor `prefers-reduced-motion: reduce` — disable hover lifts and slide transitions.

## Responsive behavior

- Mobile-first. Default styles are mobile; widen with `md:` (768px) and `lg:` (1024px) only.
- Hamburger nav < `md`. Sticky emergency CTA < `md` only.
- Product grid: 1 col → 2 col (`md:`) → 3 col (`lg:`).
- Person card grid: 1 → 2 → 3.
- Hero: stacked on mobile (illustration above text), split on `lg:`.
- Test at 375px, 768px, 1024px, 1440px.

## Quality bar / acceptance criteria

A reviewer should be able to say **yes** to all of these:

- [ ] Open `/index.html` in a browser with no errors in the console.
- [ ] No raw shortcodes, no broken images, no Lorem Ipsum-marked placeholder shipped without an explicit `[placeholder]` flag.
- [ ] Hotline `1819` reachable in one tap from any page on mobile.
- [ ] Language toggle works on every page and persists across navigation.
- [ ] Lao text renders without tofu boxes (Noto Sans Lao loaded).
- [ ] Tab through any page top-to-bottom and every focusable element shows a visible focus ring.
- [ ] Lighthouse Accessibility ≥ 95, Performance ≥ 85 on a static-served run.
- [ ] No autoplay video, no autoplay carousel longer than 6s/slide.
- [ ] No contact block repeated more than once per page (was ×3 on the original).
- [ ] Visual feel matches the "Modern Trust" reference: rounded, soft shadows, generous whitespace, friendly without being cute.

## Verification (how to test)

1. **Preview locally.** From the project root: `python -m http.server 8000` then visit `http://localhost:8000`. Click through every link in the nav and footer; every link must resolve to a real file (no 404s).
2. **Responsive check.** In DevTools, toggle device toolbar and verify the four breakpoints listed above.
3. **Language toggle.** On each page: click `EN`, verify English copy appears and `<html lang>` updates; reload, verify the choice persists.
4. **Keyboard pass.** Use only the keyboard to: open the mobile nav, navigate the products carousel, expand an FAQ accordion, focus the emergency hotline, submit the contact form.
5. **Accessibility audit.** Run Lighthouse and axe DevTools on `/index.html`, `/products/eco.html`, `/contact.html`. Fix any contrast or label issue before delivery.
6. **Lao rendering.** On a fresh browser profile (no Lao font cached), confirm headings and body render in Noto Sans Lao, not a fallback.
7. **Side-by-side with the original.** Open `https://lap.com.la/` in one window and your prototype in another. For each page, the prototype must contain the same information, the same products, the same contact details — only better presented.

## What this redesign deliberately does NOT do

- No new products, services, or features.
- No quote calculator, no policy lookup, no claims tracker, no chatbot.
- No CMS migration plan, no backend integration, no auth.
- No copywriting beyond restructuring existing image-content into real text.
- No new pages beyond the 11 already on the site.

If the temptation to add something arises, resist it. The brief is: **same site, dramatically better surface.**

---

## Open items to confirm with the client before launch

- Confirm exact registered company name spelling (Lao + English).
- Confirm regulator license number for the footer.
- Confirm whether the contact form should email the existing `Contract@lap.com.la` address or a new alias.
- Confirm whether to keep the recruitment PDF on `/downloads.html` or move it to a future careers page.
- Confirm real customer / years-in-market stats before the trust strip ships.
