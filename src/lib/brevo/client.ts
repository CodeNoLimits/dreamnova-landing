// Brevo (formerly Sendinblue) API client — DreamNova
// Uses Brevo v3 REST API: https://api.brevo.com/v3/
// API key: BREVO_API_KEY env var

const BREVO_API_URL = 'https://api.brevo.com/v3';

interface SendEmailParams {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  sender?: { email: string; name: string };
  replyTo?: { email: string; name?: string };
  params?: Record<string, string>;
  tags?: string[];
}

interface AddContactParams {
  email: string;
  attributes?: {
    FIRSTNAME?: string;
    LASTNAME?: string;
    SOURCE?: string;
    [key: string]: string | undefined;
  };
  listIds?: number[]; // Brevo list IDs
  updateEnabled?: boolean;
}

interface BrevoResponse {
  messageId?: string;
  id?: number;
}

function getApiKey(): string {
  const key = process.env.BREVO_API_KEY;
  if (!key) throw new Error('BREVO_API_KEY not set');
  return key;
}

export async function sendTransactionalEmail(params: SendEmailParams): Promise<BrevoResponse> {
  const apiKey = getApiKey();

  const sender = params.sender ?? {
    email: process.env.BREVO_SENDER_EMAIL ?? 'noreply@dreamnova.vercel.app',
    name: process.env.BREVO_SENDER_NAME ?? 'DreamNova',
  };

  const body = {
    sender,
    to: params.to,
    subject: params.subject,
    htmlContent: params.htmlContent,
    ...(params.replyTo && { replyTo: params.replyTo }),
    ...(params.params && { params: params.params }),
    ...(params.tags && { tags: params.tags }),
  };

  const res = await fetch(`${BREVO_API_URL}/smtp/email`, {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Brevo sendEmail failed (${res.status}): ${err}`);
  }

  return res.json() as Promise<BrevoResponse>;
}

export async function addContact(params: AddContactParams): Promise<BrevoResponse> {
  const apiKey = getApiKey();

  const body = {
    email: params.email,
    ...(params.attributes && { attributes: params.attributes }),
    ...(params.listIds && { listIds: params.listIds }),
    updateEnabled: params.updateEnabled ?? true,
  };

  const res = await fetch(`${BREVO_API_URL}/contacts`, {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(body),
  });

  // 204 = already exists (when updateEnabled=true), treat as success
  if (!res.ok && res.status !== 204) {
    const err = await res.text();
    throw new Error(`Brevo addContact failed (${res.status}): ${err}`);
  }

  if (res.status === 204 || res.headers.get('content-length') === '0') {
    return {};
  }

  return res.json() as Promise<BrevoResponse>;
}
