-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  full_name TEXT,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  role TEXT DEFAULT 'customer',
  hafatsa_points INT DEFAULT 0,
  referral_code TEXT UNIQUE,
  referred_by UUID REFERENCES profiles ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  price_cents INT NOT NULL,
  stripe_price_id TEXT,
  variant TEXT,
  active BOOLEAN DEFAULT true,
  stock_count INT DEFAULT 100,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES profiles ON DELETE CASCADE,
  stripe_session_id TEXT UNIQUE,
  stripe_payment_intent TEXT,
  status TEXT DEFAULT 'pending',
  total_cents INT,
  shipping_address JSONB,
  tracking_number TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Order items table
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES products ON DELETE CASCADE,
  quantity INT DEFAULT 1,
  price_cents INT
);

-- NFC scans table
CREATE TABLE nfc_scans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nova_key_id TEXT,
  scanned_by_ip TEXT,
  user_agent TEXT,
  geo_location JSONB,
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Waitlist table
CREATE TABLE waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  source TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Hafatsa events table
CREATE TABLE hafatsa_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES profiles ON DELETE CASCADE,
  event_type TEXT NOT NULL,
  points_earned INT DEFAULT 0,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Academic contacts table
CREATE TABLE academic_contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  institution TEXT,
  email TEXT,
  phone TEXT,
  field TEXT,
  status TEXT DEFAULT 'identified',
  notes TEXT,
  last_contacted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Grant applications table
CREATE TABLE grant_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  funder_name TEXT NOT NULL,
  program_name TEXT,
  amount_usd INT,
  deadline DATE,
  status TEXT DEFAULT 'researching',
  notes TEXT,
  documents JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_profiles_email ON profiles(email);
CREATE INDEX idx_profiles_referral_code ON profiles(referral_code);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_orders_profile_id ON orders(profile_id);
CREATE INDEX idx_orders_stripe_session_id ON orders(stripe_session_id);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);
CREATE INDEX idx_nfc_scans_nova_key_id ON nfc_scans(nova_key_id);
CREATE INDEX idx_nfc_scans_created_at ON nfc_scans(created_at);
CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_hafatsa_events_profile_id ON hafatsa_events(profile_id);
CREATE INDEX idx_academic_contacts_email ON academic_contacts(email);

-- Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE nfc_scans ENABLE ROW LEVEL SECURITY;
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE hafatsa_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE academic_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE grant_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles table
CREATE POLICY "Users can view their own profile" ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON profiles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for orders table
CREATE POLICY "Users can view their own orders" ON orders FOR SELECT
  USING (auth.uid() = profile_id);

CREATE POLICY "Users can insert their own orders" ON orders FOR INSERT
  WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Users can update their own orders" ON orders FOR UPDATE
  USING (auth.uid() = profile_id);

CREATE POLICY "Admins can view all orders" ON orders FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can update all orders" ON orders FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for order_items table
CREATE POLICY "Users can view their order items" ON order_items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.profile_id = auth.uid()
    )
  );

CREATE POLICY "Admins can view all order items" ON order_items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for nfc_scans table
CREATE POLICY "Anyone can insert nfc scans" ON nfc_scans FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can view nfc scans" ON nfc_scans FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for waitlist table
CREATE POLICY "Anyone can insert to waitlist" ON waitlist FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can view waitlist" ON waitlist FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for hafatsa_events table
CREATE POLICY "Users can view their own hafatsa events" ON hafatsa_events FOR SELECT
  USING (auth.uid() = profile_id);

CREATE POLICY "Admins can view all hafatsa events" ON hafatsa_events FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for academic_contacts table
CREATE POLICY "Admins can manage academic contacts" ON academic_contacts FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for grant_applications table
CREATE POLICY "Admins can manage grant applications" ON grant_applications FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS Policies for products table
CREATE POLICY "Anyone can view active products" ON products FOR SELECT
  USING (active = true);

CREATE POLICY "Admins can manage products" ON products FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Insert seed data for products
INSERT INTO products (name, slug, description, price_cents, variant, active, stock_count) VALUES
  ('Standard', 'standard', 'Standard DreamNova Package', 6300, 'standard', true, 100),
  ('Platinum', 'platinum', 'Premium DreamNova Package with enhanced features', 14900, 'platinum', true, 100),
  ('Pair', 'pair', 'Two Standard DreamNova Packages', 9900, 'pair', true, 100);
