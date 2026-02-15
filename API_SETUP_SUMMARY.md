# DreamNova API and Database Setup

This document summarizes all the files created for the DreamNova Next.js project.

## Files Created

### 1. Database Migration
**File:** `/sessions/wonderful-epic-bell/dreamnova/supabase/migrations/001_initial_schema.sql`

Complete PostgreSQL database schema with:
- 9 main tables: profiles, products, orders, order_items, nfc_scans, waitlist, hafatsa_events, academic_contacts, grant_applications
- Full Row Level Security (RLS) policies for each table
- Comprehensive indexes for query performance
- Seed data for 3 products: Standard ($63), Platinum ($149), Pair ($99)

### 2. API Routes

#### Waitlist Endpoint
**File:** `/sessions/wonderful-epic-bell/dreamnova/src/app/api/waitlist/route.ts`
- POST endpoint to join the waitlist
- Zod schema validation for email and source
- Returns 201 on success, 409 if email exists, 400 on validation error
- Uses Supabase service client for database operations

#### NFC Scan Tracking
**File:** `/sessions/wonderful-epic-bell/dreamnova/src/app/api/nfc/route.ts`
- POST endpoint for tracking NFC key scans
- Extracts IP (x-forwarded-for), user-agent, and referrer from headers
- Records scan metadata for analytics
- Returns 201 on success

#### Stripe Checkout
**File:** `/sessions/wonderful-epic-bell/dreamnova/src/app/api/stripe/checkout/route.ts`
- POST endpoint to initiate Stripe payment checkout
- Zod validation for priceId, quantity, and optional referralCode
- Configures checkout session with:
  - Payment mode
  - Shipping address collection (US, IL, FR, GB, CA, DE)
  - Success and cancel URLs
  - Metadata for referral tracking
- Returns session URL

#### Stripe Webhook Handler
**File:** `/sessions/wonderful-epic-bell/dreamnova/src/app/api/stripe/webhook/route.ts`
- POST endpoint for Stripe webhook events
- Verifies webhook signature with STRIPE_WEBHOOK_SECRET
- Handles checkout.session.completed event:
  - Creates or updates customer profile
  - Creates order record with payment details
  - Awards hafatsa points for referral code
- Returns 200 on successful processing
- Uses `export const dynamic = 'force-dynamic'`

#### Contact Form
**File:** `/sessions/wonderful-epic-bell/dreamnova/src/app/api/contact/route.ts`
- POST endpoint for contact form submissions
- Zod validation for name, email, subject, message
- Integrates with Web3Forms API for email delivery
- Uses WEB3FORMS_ACCESS_KEY from environment
- Returns success/error responses

### 3. Library Files

#### Stripe Client
**File:** `/sessions/wonderful-epic-bell/dreamnova/src/lib/stripe/client.ts`
- Centralized Stripe instance configuration
- Uses Stripe API version 2024-11-20
- Can be imported as: `import { stripe } from '@/lib/stripe/client'`

### 4. Environment Variables
**File:** `/sessions/wonderful-epic-bell/dreamnova/.env.local`

Template with all required environment variables:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- STRIPE_SECRET_KEY
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- STRIPE_WEBHOOK_SECRET
- STRIPE_PRICE_STANDARD
- STRIPE_PRICE_PLATINUM
- STRIPE_PRICE_PAIR
- RESEND_API_KEY
- RESEND_FROM
- WEB3FORMS_ACCESS_KEY
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_NFC_BASE_URL

## Database Schema Overview

### Tables

1. **profiles** - User profiles with referral system
2. **products** - DreamNova product variants with pricing
3. **orders** - Customer orders with Stripe integration
4. **order_items** - Line items for orders
5. **nfc_scans** - NFC key scan tracking and analytics
6. **waitlist** - Pre-launch waitlist entries
7. **hafatsa_events** - Loyalty points transaction history
8. **academic_contacts** - Grant partnership contacts
9. **grant_applications** - Funding opportunity tracking

### Security Features

- Row Level Security (RLS) enabled on all tables
- Role-based access control (customer, admin)
- Customer isolation for sensitive data
- Admin-only access to analytics and contacts
- Public access to waitlist and NFC scans for tracking

## API Response Patterns

All endpoints follow consistent patterns:

**Success Responses:**
```json
{
  "success": true,
  "message": "Operation completed"
}
```

**Error Responses:**
```json
{
  "error": "Error message",
  "details": {} // For validation errors
}
```

**Status Codes:**
- 200: Successful operation
- 201: Resource created
- 400: Bad request / validation error
- 409: Conflict (email exists)
- 500: Internal server error

## Next Steps

1. Fill in the `.env.local` file with actual values from:
   - Supabase project settings
   - Stripe dashboard
   - Web3Forms API
   - Resend email service

2. Run database migration in Supabase dashboard:
   - SQL editor → Run migration SQL

3. Install required dependencies:
   ```bash
   npm install stripe zod @supabase/supabase-js
   ```

4. Test endpoints:
   - Use Postman or curl to test POST endpoints
   - Configure Stripe webhooks to point to `/api/stripe/webhook`

5. Implement frontend integration for:
   - Checkout button
   - Form submissions
   - NFC scan triggering
   - Waitlist signup
