# ELQ Cleaning LLC — Website

A premium, multilingual marketing site for ELQ Cleaning LLC (residential house
cleaning — weekly / biweekly / monthly service), built with Next.js.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-variable design tokens, see `src/app/globals.css`)
- **next-intl** for i18n routing (`es`, `en`, `zh`)
- **Framer Motion** for motion design
- **lucide-react** for iconography

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` — you'll be redirected to `/en` (or your
browser's preferred locale among `es`/`en`/`zh`).

Other useful scripts:

```bash
npm run lint       # ESLint
npx tsc --noEmit   # type check
npm run build      # production build
npm run start      # serve the production build
```

## Project structure

```
messages/                 es.json / en.json / zh.json — all UI copy
src/
  app/
    [locale]/              locale-scoped routes (layout.tsx is the app root layout)
    api/estimate/          estimate form submission handler
    sitemap.ts, robots.ts  SEO routes
  components/
    layout/                Navbar, MobileMenu, LanguageSelector, Footer, MobileCtaBar
    hero/                  Hero section
    sections/              TrustBar, About, Marquee, Services, WhyElq, Process,
                            Frequency (plans), BeforeAfter, Gallery,
                            Testimonials, FAQ, Contact
    forms/                 EstimateForm
    illustrations/         Custom SVG artwork (see "About the imagery" below)
    ui/                    Reveal, Button, SectionHeading, Accordion, etc.
  data/                    Structural data (icons, layout variants) paired
                            positionally with the translated copy in messages/
  i18n/                    next-intl routing/navigation/request config
  lib/                     site.ts (business facts), schema.ts (JSON-LD), utils.ts
  proxy.ts                 next-intl locale-detection middleware (Next.js 16
                            renamed this file convention from middleware.ts)
```

## About the imagery

This environment has no access to stock-photo providers (Unsplash/Pexels are
network-blocked here), and the brief explicitly asked to avoid generic stock
photography and AI-generated-looking imagery. Rather than ship placeholder
JPEGs, every visual — the hero bucket of cleaning supplies, the room
vignettes used in the gallery/about/process sections, the before/after
composition, the logo mark — is a hand-built SVG React component in the
black & rose-gold ELQ palette (`src/components/illustrations/`: `hero-art.tsx`,
`scene-art.tsx`, `before-after-art.tsx`, shared pieces in
`cleaning-kit.tsx`).

**To swap in real photography:** replace the relevant `<HeroArt />` /
`<SceneArt motif="…" />` usage with `next/image` pointed at a file in
`public/images/`. Every illustration fills its box, so this is a drop-in
replacement per tile.

## Content that still needs real business input

Nothing was invented that wasn't provided. These are intentionally left as
placeholders or honest empty states:

- **Testimonials** (`src/data/testimonials.ts`) — empty array by design. The
  section renders an honest "reviews coming soon" state until real,
  verified client testimonials are added.
- **Gallery / Before-After photography** — abstract placeholder art, see
  above.
- **Business facts** (`src/lib/site.ts`) — only name, tagline, phone, and
  service type were provided. No address, email, socials, certifications,
  insurance claims, or years-in-business are shown anywhere, since none were
  given.
- **Estimate form delivery** (`src/app/api/estimate/route.ts`) — the form is
  fully built and validated, but there's no email/CRM provider wired up yet.
  Set **one** of these environment variables to activate it:
  - `FORMSPREE_ENDPOINT` — your Formspree form endpoint URL, or
  - `RESEND_API_KEY` + `RESEND_TO_EMAIL` — sends via the Resend REST API
    directly (no extra dependency).
  Until one is configured, submissions are logged server-side and the user
  sees an honest "this form isn't connected yet, please call" message
  instead of a fake success confirmation.
- **Domain** (`src/lib/site.ts` → `url`) — set to a placeholder
  `https://elqcleaning.com`; update once the real production domain is
  chosen (used for canonical URLs, sitemap, and OpenGraph tags).
- **Logo** — `src/components/illustrations/elq-mark.tsx` is a temporary
  wordmark monogram built only from the ELQ initials. Swap it for an
  official SVG/PNG mark when one exists.

## Internationalization

Routes are prefixed (`/es`, `/en`, `/zh`), locale is auto-detected
from the browser on first visit, and the choice persists via next-intl's
locale cookie. `html lang`, canonical URLs, and `hreflang` alternates are
all set per-locale in `src/app/[locale]/layout.tsx`. The navbar, mobile menu
and footer show a segmented ES · EN · 中文 switch. All copy lives in
`messages/*.json` — there is no hardcoded UI text to hunt down when adding a
locale.

## Deploying

This is a standard Next.js app — deploy to Vercel by connecting the repo, or
run `npm run build && npm run start` behind any Node host.
