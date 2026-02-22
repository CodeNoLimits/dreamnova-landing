#!/bin/bash
# DreamNova — Supabase Setup (run AFTER paying $12.90 invoice)
# Org: DREAMNOVA (diljcsqftwmojfyioscf)
# Vercel project: prj_BIYpoe62l4igLzUJnap98Wy9piXN

set -e
VERCEL_TOKEN="VERCEL_TOKEN_REDACTED"
PROJECT_DIR="$(dirname "$0")"

echo "=== DreamNova Supabase Setup ==="
echo ""
echo "STEP 1: Collect Supabase project credentials"
echo "  → Go to: https://supabase.com/dashboard/project/<YOUR_PROJECT_ID>/settings/api"
echo ""
read -p "NEXT_PUBLIC_SUPABASE_URL: " SUPABASE_URL
read -p "NEXT_PUBLIC_SUPABASE_ANON_KEY: " SUPABASE_ANON_KEY
read -p "SUPABASE_SERVICE_ROLE_KEY: " SUPABASE_SERVICE_KEY

echo ""
echo "STEP 2: Set env vars on Vercel..."
vercel env add NEXT_PUBLIC_SUPABASE_URL production --token="$VERCEL_TOKEN" <<< "$SUPABASE_URL"
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production --token="$VERCEL_TOKEN" <<< "$SUPABASE_ANON_KEY"
vercel env add SUPABASE_SERVICE_ROLE_KEY production --token="$VERCEL_TOKEN" <<< "$SUPABASE_SERVICE_KEY"
echo "✅ Vercel env vars set"

echo ""
echo "STEP 3: Run database migration..."
cd "$PROJECT_DIR"
SUPABASE_DB_URL="$(echo $SUPABASE_URL | sed 's/https:\/\//postgresql:\/\/postgres:DreamNova@2026!Sacred63@/; s/\.supabase\.co/:5432\/postgres/')"
npx supabase db push
echo "✅ Migration complete"

echo ""
echo "STEP 4: Deploy to Vercel..."
vercel deploy --prod --token="$VERCEL_TOKEN"
echo "✅ Deployed!"

echo ""
echo "=== DONE === dreamnova.vercel.app is fully live with Supabase ==="
