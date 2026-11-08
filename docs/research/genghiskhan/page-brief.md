# genghiskhangrilltenerife.com — home page brief

Source: https://genghiskhangrilltenerife.com/ (WordPress · Porto theme · Elementor + Element Pack, Smash Balloon Instagram, WP Google Review Slider).

## Route map

| Source | Local | Owner files |
| --- | --- | --- |
| `/` | `/` | `src/app/(site)/page.tsx` → `components/sites/genghiskhan/home-page.tsx` |
| `/menu/` | `/menu/` | `src/app/(site)/menu/` → `components/sites/genghiskhan/menu/` (6-language carta widget) |
| `/bookings/`, `/lamb-shoulder/`, `/about/` | same | `components/sites/genghiskhan/inner-pages.tsx` |
| `/awards/`, `/contact/`, `/tc/` | same | `components/sites/genghiskhan/pages/` |
| `/menu-2-2/` | `/menu-2-2/` (no header/footer, as on source) | `src/app/menu-2-2/` → `components/sites/genghiskhan/menu-2-2/` |
| `/giftcard/`, `/waiter-waitress-job-in-tenerife-south-november/` | 404 (the source also returns 404) | `src/app/not-found.tsx` |

Shared shell (header, footer, booking modal) lives in `src/app/(site)/layout.tsx` → `site-shell.tsx`; shared sections in `shared.tsx` and `page-sections.tsx`. `trailingSlash: true` keeps source URLs.

Live-site leftovers kept as-is: the Contact page is Porto demo placeholder content (address, phone, map in New York, beauty-salon images, lorem FAQ); the T&C gift-card form is named "Waiter/Waitress" on the source. Menu category photos were not in the mirror (the widget shows its own "Photo coming soon" placeholder); the T&C texture background could not be downloaded (captcha).

## How the evidence was collected

The site answers `403` to headless browsers, so the page HTML and its assets were fetched over plain HTTP (rate-limited to avoid `429`) and the snapshot was rendered offline with every request served from that local mirror. Consequences visible in `docs/design-references/genghiskhan/source-*.jpg`:

- Google Fonts did not load in the snapshot (fallback serif/sans shown). Fonts were taken from computed `font-family` values instead.
- Elementor entrance animations / masonry galleries never initialised, so the galleries render at height 0 in the source screenshots. Gallery contents and column counts come from the widget markup/settings.

## Typography

| Role | Family | Desktop | Mobile |
| --- | --- | --- | --- |
| Display headings | Cinzel 600, uppercase, ls −2px | 55/55 (section titles 35/35) | 40/40 |
| Script accents | Herr Von Muellerhoff 400, ls 2.7px | 65/65 | 50/50 |
| Body / nav | Poppins 400 14/26 `#777`; nav 13px uppercase ls −0.3 | | 13/20 |
| Award card | Cormorant Garamond 400/300 italic, Montserrat 12px | | |
| Accent colour | `#cfa670` (gold), award gold `#c8a028` | | |

## Sections (desktop y / height at 1440×900)

1. Header (0/156): black top bar 60px (info, hours, phone, contact + Instagram/Facebook/Maps); main bar 96px over `bg-leaves.png` (contain) + black 0.69 overlay; logo 70px; nav.
2. Hero (156/900, 100vh): `hero.jpg`, black 0.39 overlay, "Welcome to the" script + "Innovative / Grill experience", Book Now → booking modal (dish.co iframe). Bottom tilt divider (70px).
3. Premium Grill in La Caleta + TripAdvisor Travellers' Choice 2025 card (custom HTML, copied styles).
4. Innovation meets tradition: white card (shadow 0 2px 60px rgba(0,0,0,.1), −30px top) with Read More toggle; masonry galleries (2-col + 1-col, 8px radius, lightbox) overlapping −60px.
5. Lamb shoulder banner (65vh, overlay 0.51, tilt top/bottom, Discover button). Source button href is `#`; clone links to the live Lamb Shoulder page.
6. Three image boxes (radius 29px) with Poppins 500 20px captions.
7. Gourmet banner (65vh, overlay 0.84).
8. Time to experience: galleries left, card right with 3-step timeline + Book Now.
9. Google reviews (min-height 600, white 0.66 overlay, three review bubbles).
10. Instagram (Smash Balloon highlight layout: 3 cols, first post 2×2, 6 visible, Load More reveals the 7th; captions on hover).
11. Footer: leaves background, logo, Visit us / Share / Quick links / Contact; black copyright bar.

## Assets (source → local, under `public/sites/genghiskhan/`)

- `wp-content/uploads/2023/10/RetuertoGraphicDesign922971723-6xxxhdpi.png` → `images/logo.png`
- `Untitled-1.jpg` → `images/hero.jpg`; `Untitled-4.jpg` → `images/lamb-shoulder-bg.jpg`; `photo-1414235077428-338989a2e8c0.jpg` → `images/gourmet-bg.jpg`; `Untitled-6.jpg` → `images/reviews-bg.jpg`; `bgleaves.png` → `images/bg-leaves.png`; `noun_leaf_3120327.png` → `images/leaf.png`
- Gallery / feature images keep their source names (`images/Untitled-2*.jpg`, `Untitled-3-*.jpg`, `Untitled-5*.jpg`)
- `static.tacdn.com/.../tchotel_bob_2025_L.png` → `images/tripadvisor-tc-2025.png`
- Google reviewer avatars → `reviews/avatar-*.png`
- Instagram post thumbnails (cdninstagram, signed URLs that expire) → `instagram/<media-id>.jpg`

## Known gaps

- GTranslate language switcher ("EN") and the Porto custom cursor effect were not reproduced.
- Instagram feed and Google reviews are a static snapshot (no live API).
- Gallery geometry could not be compared against a rendered live page (see above); layout follows the widget settings.
- The booking iframe loads the real dish.co widget; it was stubbed during automated tests.
