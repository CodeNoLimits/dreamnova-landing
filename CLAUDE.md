# DREAMNOVA — Claude Code Handover

## Project Overview
DreamNova is a sacred NFC platform merging Breslov spirituality with technology.
**Live URL:** https://dreamnova.vercel.app
**Vercel Project:** dreamnova (team: dream-ais-projects)
**Stack:** Next.js 16.1.6, TypeScript, TailwindCSS 4, Supabase, Stripe, Framer Motion

## Quick Start
```bash
npm install
cp .env.local.example .env.local  # Fill in your keys
npm run dev
```

## Architecture

### Route Groups
- `(marketing)` — Public pages: `/`, `/nova-key`, `/source-code`, `/contact`, `/privacy`, `/terms`, `/refund`
- `(shop)` — E-commerce: `/checkout`, `/success`
- `(portal)` — NFC-unlocked content: `/unlock`, `/tikkun`, `/azamra`
- `(auth)` — Authentication: `/login`, `/register`
- `(dashboard)` — User dashboard: `/overview`, `/orders`, `/hafatsa`, `/nfc`, `/settings`

### API Routes
- `POST /api/stripe/checkout` — Stripe checkout session
- `POST /api/stripe/webhook` — Stripe webhook handler
- `POST /api/waitlist` — Email waitlist signup
- `POST /api/contact` — Contact form
- `POST /api/nfc` — NFC scan tracking

### Key Design Decisions
- **Sacred Design System:** Gold (#D4AF37), Cyan (#00D4FF), Deep Black (#050508)
- **Fonts:** Cinzel (display), Rajdhani (body), Space Mono (code), Cormorant Garamond (sacred)
- **Framer Motion:** Always use `as const` on ease strings (e.g., `ease: "easeOut" as const`)
- **Supabase client:** `createClient()` must be called inside event handlers, NOT at component top level (SSR prerender breaks otherwise)
- **Stripe API version:** Must be `'2026-01-28.clover'` (Stripe v20.3.x)

### Sacred Numbers
- `$63` = SaG (סג) Kabbalistic divine name gematria
- `148` = Nachman (נחמן) gematria (NOT the full Petek phrase which = 491)
- `$149` = Platinum tier
- `$99` = Pair tier
- `613` = Tikkun Master level (total commandments)

## Environment Variables Required
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_SITE_URL=https://dreamnova.vercel.app
RESEND_API_KEY=
```

## Database
Migration file: `supabase/migrations/001_initial_schema.sql`
Tables: profiles, orders, order_items, nfc_keys, nfc_scans, waitlist, hafatsa_points, referrals

## Vercel Config
- **Org:** team_cFMnWhLYnYGXm6ueTHBxAXqB
- **Project:** prj_BIYpoe62l4igLzUJnap98Wy9piXN
- **Framework:** Next.js (auto-detected)

## Remaining TODO
1. Set env vars on Vercel dashboard
2. Run Supabase migration (`supabase db push`)
3. Configure Stripe webhook endpoint on Stripe dashboard
4. Add custom domain (dreamnova.com)
5. Order NFC NTAG 215 cards (MOQ 200, ~$0.30/unit stainless steel)
6. Email templates with React Email + Resend
7. Referral system handler (`/r/CODE`)

## Mission
63M$ Hafatsa — 1M Nova Keys × $63 = $63,000,000
Na Nach Nachma Nachman MeUman — Ein Ye'ush Ba'olam Klal
