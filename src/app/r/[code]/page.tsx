import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

interface Props {
  params: Promise<{ code: string }>;
}

export default async function ReferralPage({ params }: Props) {
  const { code } = await params;

  // Validate code format (alphanumeric, 4-12 chars)
  const isValid = /^[a-zA-Z0-9]{4,12}$/.test(code);

  if (!isValid) {
    redirect('/nova-key');
  }

  // Track referral click if Supabase is available
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    try {
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );
      const headersList = await headers();
      await supabase.from('referral_clicks').insert({
        referral_code: code.toUpperCase(),
        user_agent: headersList.get('user-agent') ?? null,
        ip: headersList.get('x-forwarded-for') ?? null,
      });
    } catch {
      // Non-blocking — redirect even if tracking fails
    }
  }

  redirect(`/nova-key?ref=${code.toUpperCase()}`);
}
