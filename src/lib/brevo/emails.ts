// Brevo transactional email templates — DreamNova
// Sacred design: Gold #D4AF37, Deep Black #050508, Cyan #00D4FF

import { sendTransactionalEmail, addContact } from './client';

// Brevo list IDs (set these in Brevo dashboard and update env vars)
const WAITLIST_LIST_ID = parseInt(process.env.BREVO_WAITLIST_LIST_ID ?? '1', 10);
const CUSTOMERS_LIST_ID = parseInt(process.env.BREVO_CUSTOMERS_LIST_ID ?? '2', 10);

// ─── WAITLIST WELCOME EMAIL ────────────────────────────────────────────────

function waitlistWelcomeHtml(email: string): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Bienvenue dans DreamNova</title>
</head>
<body style="margin:0;padding:0;background:#050508;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#050508;">
  <tr><td align="center" style="padding:40px 20px;">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#0a0a12;border:1px solid #D4AF37;border-radius:12px;overflow:hidden;">
      <!-- Header -->
      <tr>
        <td style="background:linear-gradient(135deg,#0a0a12 0%,#1a1a2e 100%);padding:40px;text-align:center;border-bottom:1px solid #D4AF37;">
          <div style="font-size:36px;font-weight:900;color:#D4AF37;letter-spacing:6px;font-family:Georgia,serif;">
            DREAMNOVA
          </div>
          <div style="color:#00D4FF;font-size:13px;letter-spacing:4px;margin-top:8px;text-transform:uppercase;">
            נ נח נחמן מאומן
          </div>
        </td>
      </tr>
      <!-- Body -->
      <tr>
        <td style="padding:40px;">
          <h1 style="color:#D4AF37;font-size:24px;font-family:Georgia,serif;margin:0 0 20px;">
            ✨ Bienvenue sur la liste d'attente
          </h1>
          <p style="color:#e0e0e0;font-size:16px;line-height:1.6;margin:0 0 20px;">
            Votre email <strong style="color:#00D4FF;">${email}</strong> a été enregistré avec succès.
          </p>
          <p style="color:#e0e0e0;font-size:16px;line-height:1.6;margin:0 0 24px;">
            Vous serez parmi les premiers à recevoir votre <strong style="color:#D4AF37;">Nova Key NFC sacrée</strong> —
            une clé physique gravée au nom de Rabbi Nachman de Breslev qui ouvre un portail spirituel unique.
          </p>
          <!-- Sacred Number Box -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="background:linear-gradient(135deg,#D4AF3715,#00D4FF10);border:1px solid #D4AF3760;border-radius:8px;padding:24px;text-align:center;">
                <div style="color:#D4AF37;font-size:48px;font-weight:900;font-family:Georgia,serif;">$63</div>
                <div style="color:#aaa;font-size:12px;letter-spacing:3px;text-transform:uppercase;margin-top:4px;">
                  סג — Gématrie Divine
                </div>
                <div style="color:#e0e0e0;font-size:14px;margin-top:8px;">
                  Prix de lancement · Livraison mondiale incluse
                </div>
              </td>
            </tr>
          </table>
          <p style="color:#aaa;font-size:14px;line-height:1.6;margin:24px 0 0;">
            Mission : 63 000 000$ · 1 000 000 Nova Keys · נ נח נחמן מאומן
          </p>
        </td>
      </tr>
      <!-- CTA -->
      <tr>
        <td style="padding:0 40px 40px;text-align:center;">
          <a href="https://dreamnova.vercel.app/nova-key"
             style="display:inline-block;background:linear-gradient(135deg,#D4AF37,#B8960C);color:#000;font-weight:700;font-size:16px;padding:16px 40px;border-radius:8px;text-decoration:none;letter-spacing:1px;">
            Découvrir la Nova Key →
          </a>
        </td>
      </tr>
      <!-- Footer -->
      <tr>
        <td style="background:#050508;padding:24px 40px;text-align:center;border-top:1px solid #D4AF3730;">
          <p style="color:#555;font-size:12px;margin:0;">
            DreamNova · Jérusalem, Israël<br>
            <a href="https://dreamnova.vercel.app" style="color:#D4AF3780;text-decoration:none;">dreamnova.vercel.app</a>
          </p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

export async function sendWaitlistWelcome(email: string): Promise<void> {
  // Add to Brevo contact list
  await addContact({
    email,
    attributes: { SOURCE: 'waitlist_dreamnova' },
    listIds: [WAITLIST_LIST_ID],
    updateEnabled: true,
  });

  // Send welcome email
  await sendTransactionalEmail({
    to: [{ email }],
    subject: '✨ Bienvenue dans DreamNova — Votre Nova Key vous attend',
    htmlContent: waitlistWelcomeHtml(email),
    tags: ['waitlist', 'welcome'],
  });
}

// ─── ORDER CONFIRMATION EMAIL ──────────────────────────────────────────────

function orderConfirmationHtml(email: string, orderAmount: number, sessionId: string): string {
  const amountFormatted = (orderAmount / 100).toFixed(2);
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Confirmation de commande — DreamNova</title>
</head>
<body style="margin:0;padding:0;background:#050508;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#050508;">
  <tr><td align="center" style="padding:40px 20px;">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#0a0a12;border:1px solid #D4AF37;border-radius:12px;overflow:hidden;">
      <!-- Header -->
      <tr>
        <td style="background:linear-gradient(135deg,#0a0a12 0%,#1a1a2e 100%);padding:40px;text-align:center;border-bottom:1px solid #D4AF37;">
          <div style="font-size:36px;font-weight:900;color:#D4AF37;letter-spacing:6px;font-family:Georgia,serif;">
            DREAMNOVA
          </div>
          <div style="color:#00D4FF;font-size:13px;letter-spacing:4px;margin-top:8px;text-transform:uppercase;">
            נ נח נחמן מאומן
          </div>
        </td>
      </tr>
      <!-- Confirmation Banner -->
      <tr>
        <td style="background:linear-gradient(135deg,#D4AF3720,#00D4FF10);padding:24px 40px;text-align:center;border-bottom:1px solid #D4AF3730;">
          <div style="font-size:48px;">✅</div>
          <h1 style="color:#D4AF37;font-size:22px;font-family:Georgia,serif;margin:8px 0 4px;">
            Commande Confirmée
          </h1>
          <div style="color:#00D4FF;font-size:13px;letter-spacing:2px;">PAIEMENT RÉUSSI</div>
        </td>
      </tr>
      <!-- Body -->
      <tr>
        <td style="padding:40px;">
          <p style="color:#e0e0e0;font-size:16px;line-height:1.6;margin:0 0 20px;">
            Merci pour votre commande ! Votre <strong style="color:#D4AF37;">Nova Key NFC</strong> sacrée est en préparation.
          </p>
          <!-- Order Details -->
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #D4AF3740;border-radius:8px;overflow:hidden;margin-bottom:24px;">
            <tr style="background:#D4AF3715;">
              <td style="padding:12px 20px;color:#D4AF37;font-weight:700;font-size:14px;">Détails de la commande</td>
            </tr>
            <tr>
              <td style="padding:16px 20px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="color:#aaa;font-size:14px;padding-bottom:8px;">Commande</td>
                    <td style="color:#e0e0e0;font-size:14px;text-align:right;padding-bottom:8px;font-family:monospace;">
                      ${sessionId.slice(0, 20)}...
                    </td>
                  </tr>
                  <tr>
                    <td style="color:#aaa;font-size:14px;">Total payé</td>
                    <td style="color:#D4AF37;font-size:18px;font-weight:700;text-align:right;">$${amountFormatted}</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <p style="color:#aaa;font-size:14px;line-height:1.6;margin:0 0 24px;">
            Votre Nova Key NFC sera expédiée sous 7-14 jours ouvrés.
            Vous recevrez un email de suivi avec le numéro de suivi.
          </p>
          <p style="color:#00D4FF;font-size:14px;font-style:italic;text-align:center;margin:0;">
            נ נח נחמן מאומן — Ein Ye'ush Ba'olam Klal
          </p>
        </td>
      </tr>
      <!-- CTA -->
      <tr>
        <td style="padding:0 40px 40px;text-align:center;">
          <a href="https://dreamnova.vercel.app/tikkun"
             style="display:inline-block;background:linear-gradient(135deg,#D4AF37,#B8960C);color:#000;font-weight:700;font-size:16px;padding:16px 40px;border-radius:8px;text-decoration:none;letter-spacing:1px;">
            Accéder au Portail Tikoun →
          </a>
        </td>
      </tr>
      <!-- Footer -->
      <tr>
        <td style="background:#050508;padding:24px 40px;text-align:center;border-top:1px solid #D4AF3730;">
          <p style="color:#555;font-size:12px;margin:0;">
            DreamNova · Jérusalem, Israël<br>
            <a href="https://dreamnova.vercel.app" style="color:#D4AF3780;text-decoration:none;">dreamnova.vercel.app</a>
          </p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

export async function sendOrderConfirmation(
  email: string,
  orderAmountCents: number,
  stripeSessionId: string
): Promise<void> {
  // Add to customers list
  await addContact({
    email,
    attributes: { SOURCE: 'checkout_dreamnova' },
    listIds: [CUSTOMERS_LIST_ID],
    updateEnabled: true,
  });

  await sendTransactionalEmail({
    to: [{ email }],
    subject: '✅ Commande confirmée — Votre Nova Key DreamNova',
    htmlContent: orderConfirmationHtml(email, orderAmountCents, stripeSessionId),
    tags: ['order', 'confirmation'],
  });
}
