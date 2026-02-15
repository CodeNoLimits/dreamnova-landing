# DreamNova - Getting Started Guide

## Quick Start

### 1. Start Development Server
```bash
cd /sessions/wonderful-epic-bell/dreamnova
npm run dev
```
Visit `http://localhost:3000` in your browser.

### 2. Project Structure
The project uses Next.js App Router with route groups for organization:

- **(auth)** - Authentication pages (login, register)
- **(marketing)** - Public marketing pages
- **(portal)** - Premium content portal
- **(shop)** - E-commerce shop
- **(dashboard)** - User dashboard
- **api** - API routes

### 3. Environment Setup

Create `.env.local` file in the project root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
STRIPE_SECRET_KEY=your_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# Resend
RESEND_API_KEY=your_resend_api_key

# Analytics
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### 4. Key Directories

```
src/
├── app/              # Pages and API routes
├── components/       # Reusable React components
├── lib/              # Utilities and configurations
├── styles/           # Global styles
└── types/            # TypeScript types

public/
├── images/           # Product images
├── papers/           # PDF documents
└── fonts/            # Custom fonts
```

### 5. Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm list          # Show installed packages
```

### 6. Creating Pages

To create a new page, add a `page.tsx` file in the route directory:

```typescript
// src/app/(marketing)/nova-key/page.tsx
export default function NovaKeyPage() {
  return <div>Nova Key Product Page</div>
}
```

### 7. Creating API Routes

To create an API endpoint, add a `route.ts` file:

```typescript
// src/app/api/contact/route.ts
export async function POST(request: Request) {
  const body = await request.json()
  // Handle the request
  return Response.json({ success: true })
}
```

### 8. Using Components

Reusable components are in `src/components/`:

```typescript
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function MyPage() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  )
}
```

### 9. Database Setup

1. Create a Supabase project at https://supabase.com
2. Add database migrations in `supabase/migrations/`
3. Run migrations: `supabase migration up`

Example migration:
```sql
-- supabase/migrations/001_create_users_table.sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
)
```

### 10. Styling

The project uses Tailwind CSS. Add styles directly in components:

```tsx
export default function MyComponent() {
  return <div className="bg-blue-500 text-white p-4">Styled with Tailwind</div>
}
```

### 11. Authentication with Supabase

```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password'
})

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password'
})
```

### 12. Payments with Stripe

```typescript
import { loadStripe } from '@stripe/stripe-js'

const stripe = await loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
)

// Redirect to checkout
const { error } = await stripe.redirectToCheckout({
  sessionId: checkoutSessionId
})
```

### 13. Sending Emails with Resend

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'user@example.com',
  subject: 'Welcome!',
  html: '<strong>It works!</strong>'
})
```

### 14. Type Safety

Use TypeScript for type safety:

```typescript
interface Product {
  id: string
  name: string
  price: number
}

export default function ProductCard({ product }: { product: Product }) {
  return <div>{product.name} - ${product.price}</div>
}
```

### 15. Deployment

Deploy to Vercel (recommended for Next.js):

```bash
npm install -g vercel
vercel
```

Or build and deploy manually:
```bash
npm run build
npm start
```

## Installed Technologies

- **Next.js 16.1.6** - React framework
- **React 19.2.3** - UI library
- **TypeScript 5.9.3** - Type safety
- **Tailwind CSS 4.1.18** - Styling
- **Radix UI** - Component primitives
- **Supabase** - Backend & database
- **Stripe** - Payment processing
- **Resend** - Email service
- **Framer Motion** - Animations
- **Zod** - Data validation

## File Structure Details

### Routes
Each route group `(name)` is a logical grouping that doesn't affect URLs.

```
(auth)/login     → /login
(auth)/register  → /register
(marketing)/     → / or /marketing/...
(portal)/unlock  → /unlock
(shop)/checkout  → /checkout
(dashboard)/     → /dashboard/...
```

### Components Organization
```
components/
├── ui/          # Basic UI components (Button, Card, Dialog, etc.)
├── marketing/   # Marketing page components
├── portal/      # Portal feature components
├── shop/        # E-commerce components
├── dashboard/   # Dashboard components
├── shared/      # Shared across multiple sections
└── email/       # Email templates
```

### Library Organization
```
lib/
├── supabase/    # Supabase client setup
├── stripe/      # Stripe utilities
├── resend/      # Email utilities
└── analytics/   # Analytics tracking
```

## Common Tasks

### Add a new page
1. Create directory in `src/app/(route-group)/page-name/`
2. Add `page.tsx` with your component
3. Optionally add `layout.tsx` for layout

### Add a new component
1. Create file in `src/components/category/ComponentName.tsx`
2. Export the component
3. Import and use in pages

### Add a new API endpoint
1. Create directory in `src/app/api/endpoint-name/`
2. Add `route.ts` with your handler
3. Export GET, POST, PUT, DELETE, etc.

### Add database table
1. Create migration in `supabase/migrations/`
2. Write SQL to create table
3. Run migration

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Clear build cache
```bash
rm -rf .next
npm run build
```

### Reset database
In Supabase dashboard, reset migrations and run again.

### TypeScript errors
```bash
npx tsc --noEmit
```

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Supabase Guide](https://supabase.com/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction)

Happy coding!
