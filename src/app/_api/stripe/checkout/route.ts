import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import Stripe from 'stripe';

// Map product slugs to Stripe Price IDs from environment variables
const PRICE_MAP: Record<string, string | undefined> = {
  'covenant-pack': process.env.STRIPE_PRICE_STANDARD,
  'nova-key-platinum': process.env.STRIPE_PRICE_PLATINUM,
  'nova-key-pair': process.env.STRIPE_PRICE_PAIR,
};

const checkoutSchema = z.object({
  slug: z.string().min(1, 'Product slug is required'),
  quantity: z.number().int().min(1, 'Quantity must be at least 1').max(10),
  referralCode: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = checkoutSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation error', details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const { slug, quantity, referralCode } = validation.data;

    // Resolve Stripe Price ID from slug
    const priceId = PRICE_MAP[slug];
    if (!priceId) {
      console.error(`No Stripe Price ID configured for product: ${slug}`);
      return NextResponse.json(
        { error: `Product "${slug}" is not available for purchase. Please configure STRIPE_PRICE_STANDARD in environment variables.` },
        { status: 400 }
      );
    }

    // Initialize Stripe
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      console.error('Missing STRIPE_SECRET_KEY environment variable');
      return NextResponse.json(
        { error: 'Payment system is not configured. Please add STRIPE_SECRET_KEY to environment variables.' },
        { status: 500 }
      );
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2026-01-28.clover' as Stripe.LatestApiVersion,
    });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dreamnova.vercel.app';

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ['US', 'IL', 'FR', 'GB', 'CA', 'DE', 'AU', 'NL', 'BE', 'CH'],
      },
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout`,
      metadata: {
        referralCode: referralCode || '',
        productSlug: slug,
      },
    });

    return NextResponse.json(
      { url: session.url },
      { status: 200 }
    );
  } catch (error) {
    console.error('Stripe checkout error:', error);
    
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
