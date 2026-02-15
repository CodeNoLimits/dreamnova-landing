import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    // Verify webhook signature
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!stripeSecretKey || !webhookSecret) {
      console.error('Missing Stripe environment variables');
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2026-01-28.clover',
    });

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (error) {
      console.error('Webhook signature verification failed:', error);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    // Initialize Supabase service client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Missing Supabase environment variables');
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Handle checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;

      // Get customer email and session details
      const customerEmail = session.customer_details?.email;
      const sessionId = session.id;
      const paymentIntent = session.payment_intent as string | undefined;
      const totalAmount = session.amount_total || 0;
      const referralCode = session.metadata?.referralCode || null;

      if (!customerEmail) {
        console.error('No customer email in session');
        return NextResponse.json(
          { error: 'No customer email' },
          { status: 400 }
        );
      }

      // Get or create profile for customer
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', customerEmail)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        console.error('Error fetching profile:', profileError);
        return NextResponse.json(
          { error: 'Database error' },
          { status: 500 }
        );
      }

      let profileId = profile?.id;

      if (!profileId) {
        const { data: newProfile, error: createError } = await supabase
          .from('profiles')
          .insert([
            {
              email: customerEmail,
              role: 'customer',
              hafatsa_points: 0,
            },
          ])
          .select('id')
          .single();

        if (createError) {
          console.error('Error creating profile:', createError);
          return NextResponse.json(
            { error: 'Failed to create profile' },
            { status: 500 }
          );
        }

        profileId = newProfile?.id;
      }

      // Create order
      const { error: orderError } = await supabase
        .from('orders')
        .insert([
          {
            profile_id: profileId,
            stripe_session_id: sessionId,
            stripe_payment_intent: paymentIntent || null,
            status: 'completed',
            total_cents: totalAmount,
            shipping_address: (session as unknown as Record<string, unknown>).shipping_details || null,
          },
        ]);

      if (orderError) {
        console.error('Error creating order:', orderError);
        return NextResponse.json(
          { error: 'Failed to create order' },
          { status: 500 }
        );
      }

      // Handle referral rewards
      if (referralCode && profileId) {
        // Find referrer by referral code
        const { data: referrer, error: referrerError } = await supabase
          .from('profiles')
          .select('id')
          .eq('referral_code', referralCode)
          .single();

        if (!referrerError && referrer) {
          // Award points to referrer
          const pointsToAward = 50; // Example: 50 points per referral

          const { error: updateError } = await supabase
            .from('profiles')
            .update({ hafatsa_points: supabase.rpc('increment_points', { row_id: referrer.id, points: pointsToAward }) })
            .eq('id', referrer.id);

          // Create hafatsa event record
          await supabase
            .from('hafatsa_events')
            .insert([
              {
                profile_id: referrer.id,
                event_type: 'referral_reward',
                points_earned: pointsToAward,
                metadata: { referred_customer_email: customerEmail },
              },
            ]);
        }
      }
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
