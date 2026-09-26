# BeeCastle Website

Marketing site for [BeeCastle](https://www.beecastle.com), customer success,
revenue analytics and whitespace for MSPs. **Astro 7 + Tailwind 4**, static,
hosted on Netlify. It replaces the old Hugo + CloudCannon Bookshop site and is
being rebuilt alongside the product rewrite in `../beecastle-server`.

Content currently lives in Markdown under `src/content/`. Contentful is the
planned headless CMS (see "Moving to Contentful" below); it is not wired up yet.

---

## The rules that matter most

### 1. Astro components and Markdown, never raw HTML pages

| Want to | Create | Not |
|---|---|---|
| a new page | `src/pages/thing.astro` | `thing.html` |
| a blog post | `src/content/blog/slug.md` | an HTML page |
| a product, solution or integration page | `src/content/<collection>/slug.md` | a new `.astro` page |
| a reusable block | `src/components/Thing.astro` | the same markup pasted twice |
| a fixed list (nav links, categories) | a typed array in `src/data/` | repeated hand-written blocks |

### 2. Three of anything is a structure

The moment a third testimonial, plan, card or logo gets pasted in by hand, stop
and make it a collection entry or a data array rendered by one component.
`pnpm find-repeats` reports blocks written out three or more times.

**Prefer a collection when in doubt.** A collection maps one to one onto a
Contentful content type later; markup pasted into a page has to be unpicked.

### 3. Every piece of content has its own URL. No modals.

Products, posts, integrations and people are pages. "Book a demo" is a real
link to the HubSpot meetings page (`site.demoUrl`), not a popup.

**Old URLs are kept exactly** (`/products/revenue-analytics/`,
`/excellence_in_account_management/`, `/blog/<slug>/`) so links and search
rankings carry over from the old site. Do not rename a path without adding a
redirect in `astro.config.mjs` or `netlify.toml`.

### 4. Never scripts that edit source files

Edit the file. If a change is too repetitive to do by hand, the markup should
be a component with data. The only scripts in `scripts/` are read-only checks.

### 5. Never invent a colour, font or spacing value

Every value lives in the `@theme` block in `src/styles/global.css`, lifted from
the product design system (`../beecastle-server/src/lib/tokens.ts`). Use tokens:
`bg-navy text-honey px-gut py-sec`, never `bg-[#172739]`. Need a new value? Add
a token.

- **Honey** (`#FFCC00`) is the bee and the primary CTA. Keep it scarce.
- **Cyan, periwinkle, mint, magenta** are fills and tints, never body text.
  Cyan on white is 1.9:1. Link text on light grounds is `text-cyan-deep`.
- **Navy** (`#172739`) is the ink and the dark sections. Never pure black.
- Per-page accent colours go through the `accent` field and `src/lib/accents.ts`.

### 5b. No blur filters on phones

Decorative glow shapes use the `glow` utility (a mask), never `blur-*`, and the
nav's frosted-glass `backdrop-blur` is desktop only (`lg:`). Large blurs, and
any backdrop blur over moving content, made the mobile menu stutter. A desktop
browser will not show the problem, so do not judge it there.

### 6. Never use an em dash

Not in copy, code comments or commit messages. Use a colon, comma, full stop
or brackets, or rewrite the sentence. En dashes are fine for ranges
(`2024–2026`). `pnpm build` runs `scripts/check-dashes.mjs` and fails on one.

### 7. Brand assets: do not invent a logo

The bee is the logo. Use `public/logo-beecastle*.svg` (copied from
beecastle-server) and the illustrations in `src/assets/illustrations/`
(navy linework, periwinkle to mint gradient, honey bee). Render them with
`<Illustration name="hive" />`. Never draw a substitute bee.

### 8. Images go in `src/assets/`, never `public/`

Import and render with `<Image>` from `astro:assets` so Astro emits sized webp.
Content images are referenced by relative path from the Markdown file. The one
image at the top of a page gets `loading="eager" fetchpriority="high"`.
`public/` is only for fixed-URL files: favicons, logos, the OG image, the hero video.

### 9. Minimum 11px text, 4.5:1 contrast

Muted text on light grounds is `text-ink-3`; on navy it is `text-navy-muted`.
They are not interchangeable.

### 10. Run `pnpm build` before committing

A broken build is a failed deploy. Content schemas are checked at build time.

### 11. Run the `no-ai-slop` skill on new copy

New or rewritten copy goes through it first. Copy ported from the old site is
kept as written, apart from typo and em dash fixes.

---

## Running it

Node 22.12+ (`.node-version` pins 24.15.0) and **pnpm** (never npm: two
lockfiles means Netlify may build different dependencies than you tested).

```bash
pnpm install
pnpm dev            # Astro 7 runs this as a background daemon; see `pnpm astro dev logs`
pnpm build          # production build into dist/, after the em dash check
pnpm preview
pnpm check          # type-check .astro files
pnpm find-repeats   # report hand-repeated blocks (read only)
```

## Where things live

```
src/
  pages/          One file per URL, plus [slug] routes for the collections
  layouts/        Layout (the shell), FeaturePage (products/solutions/integrations),
                  LegalPage
  components/     Reusable pieces. components/home/ is the homepage, in order
  content/        Markdown, one file per entry. Schemas in src/content.config.ts
    blog/           73 posts ported from the old site
    products/ solutions/ integrations/   feature pages, one schema
    testimonials/ plans/ legal/
  data/           nav.ts, site.ts (emails, URLs), categories.ts
  i18n/           en-AU.yml (every UI string), en-US.yml (US overlay, spelling map)
  assets/         img/ (photos, screenshots), blog/<slug>/, illustrations/ (brand SVGs)
  styles/         global.css: tokens and base styles
  lib/            inline.ts (tiny Markdown for frontmatter strings), accents.ts
public/           favicons, logos, og-default.png, videos/
docs/private/     internal notes. Gitignored: never commit anything from here
scripts/          read-only checks
```

### What the owner asks for, and where it lives

| They say | You change |
|---|---|
| "change a product page" | `src/content/products/<slug>.md` |
| "add a blog post" | a new `.md` in `src/content/blog/` |
| "add a link to the menu" | `src/data/nav.ts` plus its label in `src/i18n/en-AU.yml` (products/solutions/integrations are automatic) |
| "change the footer" | `footerColumns` in `src/data/nav.ts`, words in `src/i18n/en-AU.yml`, contact details in `src/data/site.ts` |
| "change a button, menu or homepage wording" | `src/i18n/en-AU.yml` (and `en-US.yml` if US wording differs) |
| "change pricing" | `src/content/plans/*.md` |
| "add a testimonial" | a new `.md` in `src/content/testimonials/` |
| "change the terms / privacy policy" | `src/content/legal/*.md` |

### Feature pages (products, solutions, integrations)

All three collections share one schema (`featurePage` in `content.config.ts`)
and one template (`src/layouts/FeaturePage.astro`): hero, optional overview
with jump links, alternating image and text sections, sign-up panel, closing
CTA band. `src/content/products/revenue-analytics.md` is the worked example.
Frontmatter strings allow `**bold**`, `*italic*` and `[links](/x/)` only.

### Hiding a page without deleting it

Two ways, both keep the source in the repo:

- **Content entries** (products, solutions, blog...): add `draft: true` to the
  frontmatter. Goal Setting is hidden this way until the rewrite has it.
- **Standalone pages**: prefix the file or folder in `src/pages/` with `_`
  (Astro never publishes those). Buzz, benchmarking, ask the founders, the MSP
  coach directory, the six demo pages and the two `/lp/` pages are hidden so.

Then add a **302** in `netlify.toml` from the old address to the closest live
page, so old links still land somewhere. To bring a page back: remove the `_`
or the draft line, and delete its redirect.

### The social share image

`public/og-default.png` is rendered from `scripts/og/og.html` (1200x630). Edit
the HTML, run `node scripts/og/render.mjs`, commit the PNG.

### Product replicas (instead of screenshots)

`src/components/product/` holds simplified HTML copies of real BeeCastle
screens: portfolio health, whitespace, profitability, the sales dashboard,
onboarding and more. Preview them all at `/replicas/` (hidden from search).
Put one on any feature page section with `replica: <name>`; the names are in
`src/components/product/registry.ts`.

- **Carousels**: for features with more depth than one screen, use
  `carousel: whitespace` (or customer-success, profitability, sales) on a
  section instead. Sets of 3 to 5 slides with captions are defined in
  `src/components/product/carousels.ts`; a slide can pass props to its
  replica (the whitespace slide uses a compact grid). Swipe on phones, arrows
  and dots elsewhere, no autoplay.
- **All data is invented**, in `src/data/demo.ts`. Never copy a real
  customer, contact, email or figure across from the app.
- Status colours (`ok`, `warn`, `bad`) and tier metals are for replicas only.
- Replicas are pictures of the app: each is one `role="img"` with a written
  description, so their small UI-sized text is exempt from the 11px rule.
- When the app changes, update the replica, not a screenshot.

### Blog

Filename is the URL. Frontmatter: `title`, `date`, `categories` (slugs from
`src/data/categories.ts`), `summary`, optional `image` (relative path into
`src/assets/blog/<slug>/`), `draft`. Category listings live at
`/categories/<slug>/`, as on the old site.

### Forms

- **Sign up**: GETs `site.signupUrl` with `?email=`, as the old site did.
  Check this against the rewrite before launch.
- **Everything else** (contact, newsletter, downloads, demo requests): Netlify
  Forms. Build new ones with `NetlifyForm.astro` from a list of fields, not by
  hand. Submissions appear in the Netlify dashboard; set up notifications there.
- **Dev server gotchas**: Tailwind sometimes misses classes in files created
  after `pnpm dev` started, and after a change to `content.config.ts` the
  dev content cache can go stale (images render broken). In either case:
  `pnpm astro dev stop`, delete `.astro/data-store.json`, start it again.
  `pnpm build` is always the source of truth.

## Localisation

One URL per page, always: no `/us/` prefix, no Astro i18n routing, no
redirects, no edge functions. The HTML is built in **English (Australia)**,
which also serves British English. US visitors get US English swapped in by
the browser.

- **Where strings live.** Every UI string (nav, footer, buttons, forms, CTA
  bands, the homepage, blog chrome, 404) is in `src/i18n/en-AU.yml`, nested:
  `nav.products`, `cta.startTrial`, `home.hero.title`. Read one with
  `t('key', vars?)` from `src/i18n`. A missing key throws and fails the build.
- **Adding a key.** Add it to `en-AU.yml`, then render it on the element that
  holds the text so the client can find it: `<T as="h2" k="key" class="..." />`,
  `<Button k="cta.bookDemo" href=... />`, or by hand
  `<a data-i18n="key">{t('key')}</a>` when the element also holds an icon.
  Attributes: `data-i18n-attr="aria-label:key;placeholder:key"`. `{name}`
  placeholders take `vars`; `[[words]]` in a heading get the highlighter
  swipe; `md` on `<T>` renders `**bold**` and `[links](/x/)`.
- **The overlay rule.** `en-US.yml` holds only the keys whose US wording
  differs, at the same path. Anything missing falls back to en-AU. A key in
  it that en-AU lacks fails the build.
- **The spelling map.** The `spelling:` section of `en-US.yml` is a whole-word
  AU to US list (optimise, organisation, colour...). For US visitors it runs
  over the text of the header, main and footer, Markdown content included,
  keeping lower, Title and UPPER case, and skipping code, form fields and
  URLs. Keep it conservative: only words that are wrong in US English in
  every sense. Content in `src/content/` stays Markdown and is never keyed.
- **Who gets US.** `src/components/Localise.astro`, an inline script at the
  end of `<body>`, reads the first `en-*` entry of `navigator.languages`:
  `en-US` gets US, every other English (en-AU, en-GB, en-CA, en-NZ, en-IE,
  en-ZA, en-IN) gets en-AU. It sets `lang="en-US"`, applies the overlay, then
  the spelling map, then rewrites `<time datetime>` dates as `Sep 26, 2026`.
  It runs before first paint in testing, so there is no visible flash.
- **`data-no-i18n`** on an element keeps all of that off it. The legal pages
  (`/terms/`, `/privacy/`, the data processing addendum) use it: they stay
  the Australian original for everyone.
- **The switcher.** The flag button in the footer (`LocaleMenu.astro`) opens a
  small list of languages with the current one ticked. Picking one stores it
  in localStorage `bc-locale` and reloads. Languages are listed in
  `src/i18n/locales.ts`; flags are drawn in `Flag.astro`.
- Override with `?lang=en-US` or `?lang=en-AU` on any URL (for sharing or testing). It is remembered like a switcher choice; canonical URLs never include it.

## Moving to Contentful

The pattern: a small client in `src/lib/contentful.ts` that returns `null`
when the env vars are missing, so the site still builds without them. The plan:

1. Create one Contentful content type per collection, one field per frontmatter
   field (`featureSection` becomes its own type, referenced from `sections`).
2. Replace the `glob()` loader in `content.config.ts` with a Contentful loader
   for that collection. Pages and components do not change: they only see
   `getCollection()`.
3. Add a Netlify build hook triggered by Contentful publish.

## Analytics

Google Analytics 4, in `src/components/Analytics.astro`, driven by env vars
set in Netlify (Site configuration, Environment variables):

| Variable | What | Unset |
|---|---|---|
| `PUBLIC_GA_ID` | GA4 measurement ID, `G-XXXXXXXXXX` | no tag, nothing sent |
| `PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console token | no meta tag |
| `PUBLIC_APP_URL`, `PUBLIC_HELP_URL` | the app and help centre | production defaults |

- Tags only render on **production** deploys. Previews and branch deploys
  never send data. Locally, setting the ID in `.env` turns on debug mode.
- Env vars are read at **build** time: changing one in Netlify needs a redeploy.
- Events: `sign_up_start`, `sign_up`, `login`, `book_demo`, `generate_lead`
  (with `form_name`). Mark `sign_up`, `book_demo` and `generate_lead` as key
  events in GA4. Outbound clicks, scroll and downloads come from GA4's
  enhanced measurement, switched on in the GA4 admin.
- Cross-domain: the tag links this site with the app's domain, so set up the
  same measurement ID (or cross-domain config) in the app to see full journeys.
- No Partytown: GA4's cross-domain linker must run on the page itself.

## Deploying

Netlify builds `pnpm build` and publishes `dist/` (see `netlify.toml`). Branch
and preview deploys send `X-Robots-Tag: noindex` and robots.txt disallows them.
Work on a branch; check the preview; merge.

## Status

- [x] Scaffold, tokens from the product design system, Layout, Nav, Footer
- [x] Blog: 73 posts, categories, RSS
- [x] Every page on the old sitemap ported (migration notes and open decisions
      are kept locally in `docs/private/`, which is never committed)
- [ ] Replace legacy app screenshots with screenshots of the rewrite
- [ ] Sign-up flow pointed at the rewrite
- [ ] Contentful
