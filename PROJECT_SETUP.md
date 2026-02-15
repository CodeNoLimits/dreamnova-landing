# DreamNova - Next.js 15 Project Setup

## Project Information
- **Framework**: Next.js 16.1.6
- **React Version**: 19.2.3
- **TypeScript**: 5.9.3
- **Styling**: Tailwind CSS 4.1.18
- **Location**: `/sessions/wonderful-epic-bell/dreamnova/`

## Installed Dependencies

### Core Framework
- next@16.1.6
- react@19.2.3
- react-dom@19.2.3
- typescript@5.9.3

### UI & Styling
- tailwindcss@4.1.18
- @tailwindcss/postcss@4.1.18
- lucide-react@0.564.0
- class-variance-authority@0.7.1
- clsx@2.1.1
- tailwind-merge@3.4.1

### Component Libraries
- @radix-ui/react-dialog@1.1.15
- @radix-ui/react-dropdown-menu@2.1.16
- @radix-ui/react-tabs@1.1.13
- @radix-ui/react-slot@1.2.4
- @radix-ui/react-accordion@1.2.12
- @radix-ui/react-separator@1.1.8

### Backend Services
- @supabase/supabase-js@2.95.3
- @supabase/ssr@0.8.0
- stripe@20.3.1
- @stripe/stripe-js@8.7.0
- resend@6.9.2

### UI Enhancements
- framer-motion@12.34.0
- next-themes@0.4.6
- recharts@3.7.0
- sonner@2.0.7
- @react-email/components@1.0.7

### Validation & Utilities
- zod@4.3.6

## Project Directory Structure

```
/sessions/wonderful-epic-bell/dreamnova/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard)/
│   │   │   ├── academics/
│   │   │   ├── analytics/
│   │   │   ├── grants/
│   │   │   ├── hafatsa/
│   │   │   ├── nfc/
│   │   │   ├── orders/
│   │   │   ├── settings/
│   │   │   └── waitlist/
│   │   ├── (marketing)/
│   │   │   ├── manifesto/
│   │   │   ├── nova-key/
│   │   │   └── source-code/
│   │   ├── (portal)/
│   │   │   ├── azamra/
│   │   │   ├── tikkun/
│   │   │   └── unlock/
│   │   ├── (shop)/
│   │   │   ├── checkout/
│   │   │   ├── covenant-pack/
│   │   │   └── success/
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   ├── nfc/
│   │   │   ├── referral/
│   │   │   ├── stripe/
│   │   │   └── waitlist/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── dashboard/
│   │   ├── email/
│   │   ├── marketing/
│   │   ├── portal/
│   │   ├── shared/
│   │   ├── shop/
│   │   └── ui/
│   ├── lib/
│   │   ├── analytics/
│   │   ├── resend/
│   │   ├── stripe/
│   │   └── supabase/
│   ├── styles/
│   └── types/
├── public/
│   ├── images/
│   │   └── nova-key.jpg (462KB)
│   ├── papers/
│   │   ├── source-code-reality.pdf (52KB)
│   │   └── validation-report.pdf (27KB)
│   └── fonts/
├── supabase/
│   └── migrations/
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
└── README.md
```

## Key Features

### Marketing Pages
- Homepage (root page)
- Source Code article
- Nova Key product page
- Manifesto page

### Authentication
- Login page
- Register page

### E-Commerce
- Shop with Covenant Pack
- Checkout flow
- Success page
- Stripe integration

### Portal/Premium Content
- Unlock portal
- Tikkun resources
- Azamra community

### Dashboard (User Area)
- Orders management
- Analytics dashboard
- Hafatsa (Specialization)
- Waitlist management
- Academic content
- Grants information
- NFC functionality
- Settings

### API Routes
- Stripe payment processing
- NFC handling
- Waitlist management
- Referral system
- Contact form

### Library Support
- Supabase integration (authentication & database)
- Stripe payment processing
- Resend email service
- Analytics tracking
- Email components

## Available Scripts

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm build

# Start production server
npm start
```

## Configuration Files

### TypeScript Configuration
- `tsconfig.json` - TypeScript compiler options

### Next.js Configuration
- `next.config.ts` - Next.js build and runtime configuration

### Tailwind CSS
- `tailwind.config.ts` - Tailwind CSS customization (Auto-generated)

### PostCSS
- `postcss.config.mjs` - PostCSS plugins configuration

## Static Assets

### Images
- `nova-key.jpg` - Product image (462KB)

### Documents
- `source-code-reality.pdf` - Main paper (52KB)
- `validation-report.pdf` - Research audit report (27KB)

## Next Steps

1. Configure environment variables:
   - Create `.env.local` file
   - Add Supabase credentials
   - Add Stripe keys
   - Add Resend API key

2. Set up Supabase:
   - Create database migrations in `supabase/migrations/`
   - Initialize authentication tables

3. Create page files in route groups
   - Add `page.tsx` and `layout.tsx` files
   - Implement UI components

4. Create API handlers
   - Implement Stripe webhook handlers
   - Set up contact form handler
   - Build waitlist API

5. Create reusable components
   - UI components in `src/components/ui/`
   - Page-specific components
   - Shared components

## Notes
- Project uses Next.js 16.1.6 (latest version)
- TypeScript is enabled for type safety
- Tailwind CSS 4.x with PostCSS 8+ support
- Radix UI primitives for accessible components
- Responsive design with mobile-first approach
- Email templates ready with @react-email/components
