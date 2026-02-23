import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendWaitlistWelcome } from '@/lib/brevo/emails';

const waitlistSchema = z.object({
  email: z.string().email('Invalid email address'),
  source: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = waitlistSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation error', details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const { email } = validation.data;

    if (!process.env.BREVO_API_KEY) {
      console.error('Missing BREVO_API_KEY');
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    // Add to Brevo waitlist list + send welcome email
    await sendWaitlistWelcome(email);

    return NextResponse.json(
      { success: true, message: 'Successfully joined waitlist' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
