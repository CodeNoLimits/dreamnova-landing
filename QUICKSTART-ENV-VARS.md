# 🚀 QUICKSTART: Get DreamNova Checkout Live in 20 Minutes

**Current Status:** ✅ Code is PERFECT | 🟡 Need API keys

---

## Step 1: Get Your Stripe Keys (5 minutes)

1. Go to: https://dashboard.stripe.com/test/apikeys
2. Copy these 2 keys:
   ```
   Secret key: sk_test_51... (click "Reveal test key token")
   Publishable key: pk_test_51...
   ```

3. Create your products in Stripe:
   - Go to: https://dashboard.stripe.com/test/products
   - Click "Add product"
   - Create 3 products:

   **Product 1: Covenant Pack**
   - Name: "Covenant Pack — Sacred Nova Key"
   - Price: $63.00 USD (one-time)
   - Copy the Price ID: `price_...` (this is STRIPE_PRICE_STANDARD)

   **Product 2: Nova Key Platinum**
   - Name: "Nova Key Platinum"
   - Price: $149.00 USD (one-time)
   - Copy the Price ID: `price_...` (this is STRIPE_PRICE_PLATINUM)

   **Product 3: Nova Key Pair**
   - Name: "Nova Key Pair"
   - Price: $99.00 USD (one-time)
   - Copy the Price ID: `price_...` (this is STRIPE_PRICE_PAIR)

---

## Step 2: Get Your Supabase Keys (5 minutes)

1. Go to: https://supabase.com/dashboard/projects
2. Click on your project (or create a new one)
3. Go to: Settings → API
4. Copy these 3 values:
   ```
   Project URL: https://xxx.supabase.co
   anon/public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (click "Reveal")
   ```

---

## Step 3: Get Your Resend API Key (3 minutes)

1. Go to: https://resend.com/api-keys
2. Click "Create API Key"
3. Name: "DreamNova Production"
4. Copy the key: `re_...`

---

## Step 4: Add to Vercel (5 minutes)

1. Go to: https://vercel.com/dream-ais-projects/dreamnova/settings/environment-variables

2. Add these one by one (click "Add" after each):

```bash
# Stripe
STRIPE_SECRET_KEY = sk_test_51... (your secret key from Step 1)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_test_51... (your publishable key from Step 1)
STRIPE_PRICE_STANDARD = price_... (Covenant Pack price ID from Step 1)
STRIPE_PRICE_PLATINUM = price_... (Platinum price ID from Step 1)
STRIPE_PRICE_PAIR = price_... (Pair price ID from Step 1)

# Supabase
NEXT_PUBLIC_SUPABASE_URL = https://xxx.supabase.co (from Step 2)
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGci... (anon key from Step 2)
SUPABASE_SERVICE_ROLE_KEY = eyJhbGci... (service_role key from Step 2)

# Resend
RESEND_API_KEY = re_... (from Step 3)

# Site (already correct, but verify)
NEXT_PUBLIC_SITE_URL = https://dreamnova.vercel.app
```

3. Click "Save" → Vercel will auto-redeploy

---

## Step 5: Test Checkout (2 minutes)

1. Go to: https://dreamnova.vercel.app/checkout
2. Click "Get Your Key — $63" on Covenant Pack
3. You should be redirected to Stripe Checkout page
4. Use test card: `4242 4242 4242 4242`, any future expiry, any CVC
5. Complete checkout
6. You should be redirected to: https://dreamnova.vercel.app/success

**If it works:** 🎉 CHECKOUT IS LIVE! Na Nach!

**If it fails:** Check the Vercel logs for error messages (likely a typo in env vars)

---

## Optional: Configure Webhook (for database order creation)

1. Go to: https://dashboard.stripe.com/test/webhooks
2. Click "Add endpoint"
3. Endpoint URL: `https://dreamnova.vercel.app/api/stripe/webhook`
4. Events to listen: Select "checkout.session.completed" and "payment_intent.succeeded"
5. Click "Add endpoint"
6. Copy the "Signing secret" (starts with `whsec_...`)
7. Add to Vercel env vars:
   ```
   STRIPE_WEBHOOK_SECRET = whsec_...
   ```
8. Redeploy

---

## 🔥 That's It!

You're now LIVE with:
- ✅ Stripe checkout processing payments
- ✅ 3 products (Covenant Pack, Platinum, Pair)
- ✅ Automatic order creation (after webhook setup)
- ✅ Email confirmations (Resend)
- ✅ NFC key tracking (Supabase)

**Mission:** 1,000,000 Nova Keys × $63 = $63,000,000 Hafatsa

**First Sale:** Imminent! 🚀

Na Nach Nachma Nachman MeUman!
