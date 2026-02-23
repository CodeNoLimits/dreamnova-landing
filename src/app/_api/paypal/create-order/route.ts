import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS } from '@/lib/constants';

const PAYPAL_API = 'https://api-m.paypal.com'; // Production

async function getPayPalToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !clientSecret) throw new Error('PayPal not configured');

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const res = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });
  const data = await res.json();
  if (!data.access_token) throw new Error('Failed to get PayPal token');
  return data.access_token;
}

export async function POST(req: NextRequest) {
  try {
    const { slug, quantity = 1 } = await req.json();

    const product = Object.values(PRODUCTS).find((p) => p.slug === slug);
    if (!product) return NextResponse.json({ error: 'Product not found' }, { status: 400 });

    const total = (product.price * Math.max(1, quantity)).toFixed(2);
    const token = await getPayPalToken();

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dreamnova.vercel.app';

    const orderRes = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: { currency_code: 'USD', value: total },
            description: `${product.name} × ${quantity}`,
            custom_id: slug,
          },
        ],
        application_context: {
          brand_name: 'DreamNova',
          return_url: `${siteUrl}/success?method=paypal`,
          cancel_url: `${siteUrl}/checkout?cancelled=1`,
        },
      }),
    });

    const order = await orderRes.json();
    if (!orderRes.ok) {
      return NextResponse.json({ error: order.message || 'PayPal error' }, { status: 400 });
    }

    const approvalLink = order.links?.find(
      (l: { rel: string; href: string }) => l.rel === 'approve'
    )?.href;
    if (!approvalLink) return NextResponse.json({ error: 'No approval URL' }, { status: 500 });

    return NextResponse.json({ url: approvalLink });
  } catch (err) {
    console.error('PayPal create-order error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
