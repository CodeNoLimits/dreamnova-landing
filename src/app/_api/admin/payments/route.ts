import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';

const TIER_MAP: Record<string, string> = {
  'price_1T420dHbdp51HTTBdyGUqMAe': 'Covenant $63',
  'price_1T420eHbdp51HTTBrMefEniG': 'Pair $99',
  'price_1T420eHbdp51HTTB4McL59DU': 'Platinum $149',
};

export async function GET() {
  const sk = process.env.STRIPE_SECRET_KEY;
  if (!sk || sk === 'sk_test_xxx') {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  const stripe = new Stripe(sk, { apiVersion: '2026-01-28.clover' as Stripe.LatestApiVersion });

  // Fetch last 50 completed checkout sessions
  const sessions = await stripe.checkout.sessions.list({
    limit: 50,
    expand: ['data.line_items'],
  });

  const payments = sessions.data
    .filter(s => s.payment_status === 'paid')
    .map(s => {
      const priceId = s.line_items?.data[0]?.price?.id ?? '';
      return {
        id: s.id,
        email: s.customer_details?.email ?? '—',
        amount: (s.amount_total ?? 0) / 100,
        tier: TIER_MAP[priceId] ?? 'Unknown',
        date: new Date((s.created) * 1000).toISOString(),
        country: s.customer_details?.address?.country ?? '—',
      };
    });

  const total = payments.reduce((sum, p) => sum + p.amount, 0);
  const byTier = payments.reduce<Record<string, number>>((acc, p) => {
    acc[p.tier] = (acc[p.tier] ?? 0) + 1;
    return acc;
  }, {});

  return NextResponse.json({ payments, total, count: payments.length, byTier });
}
