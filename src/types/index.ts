// ═══════════════════════════════════════════
// DREAM NOVA — TYPE DEFINITIONS
// ═══════════════════════════════════════════

export type UserRole = 'customer' | 'ambassador' | 'admin' | 'super_admin';
export type OrderStatus = 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
export type ProductVariant = 'standard' | 'platinum' | 'pair';
export type HafatsaEventType = 'scan' | 'share' | 'referral_purchase' | 'free_distribution';
export type AcademicStatus = 'identified' | 'contacted' | 'responded' | 'collaborating';
export type GrantStatus = 'researching' | 'drafting' | 'submitted' | 'awarded' | 'rejected';
export type WaitlistSource = 'landing' | 'source-code' | 'nova-key' | 'nfc-scan';

export interface Profile {
  id: string;
  full_name: string | null;
  email: string;
  phone: string | null;
  role: UserRole;
  hafatsa_points: number;
  referral_code: string | null;
  referred_by: string | null;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price_cents: number;
  stripe_price_id: string | null;
  variant: ProductVariant;
  active: boolean;
  stock_count: number;
  metadata: Record<string, unknown>;
}

export interface Order {
  id: string;
  profile_id: string | null;
  stripe_session_id: string | null;
  stripe_payment_intent: string | null;
  status: OrderStatus;
  total_cents: number;
  shipping_address: ShippingAddress | null;
  tracking_number: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price_cents: number;
}

export interface NfcScan {
  id: string;
  nova_key_id: string | null;
  scanned_by_ip: string | null;
  user_agent: string | null;
  geo_location: Record<string, unknown> | null;
  referrer: string | null;
  created_at: string;
}

export interface WaitlistEntry {
  id: string;
  email: string;
  source: WaitlistSource;
  created_at: string;
}

export interface HafatsaEvent {
  id: string;
  profile_id: string | null;
  event_type: HafatsaEventType;
  points_earned: number;
  metadata: Record<string, unknown>;
  created_at: string;
}

export interface AcademicContact {
  id: string;
  name: string;
  institution: string | null;
  email: string | null;
  phone: string | null;
  field: string | null;
  status: AcademicStatus;
  notes: string | null;
  last_contacted_at: string | null;
  created_at: string;
}

export interface GrantApplication {
  id: string;
  funder_name: string;
  program_name: string | null;
  amount_usd: number | null;
  deadline: string | null;
  status: GrantStatus;
  notes: string | null;
  documents: string[];
  created_at: string;
}

export interface ShippingAddress {
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  postal_code: string;
  country: string;
}
