#!/usr/bin/env python3
"""
🦇 NIGHT SHIFT — Nova Response Agent Prospection
Trouve les agences immobilières à Jérusalem, qualifie, exporte en CSV.

Mode 1 (par défaut): Google Places API (nécessite GOOGLE_PLACES_API_KEY)
Mode 2 (fallback):   Données locales enrichies

Usage:
  nohup python3 night_hunt.py &
  python3 night_hunt.py --demo
"""

import csv
import json
import os
import sys
import time
import urllib.request
import urllib.parse
from datetime import datetime

# --- CONFIG ---
GOOGLE_API_KEY = os.environ.get("GOOGLE_PLACES_API_KEY", "")
OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
SEARCH_QUERIES = [
    "real estate agency jerusalem",
    "סוכנות נדלן ירושלים",
    "agence immobilière jérusalem",
    "luxury real estate jerusalem",
    "נדלן יוקרה ירושלים",
]
TARGET_NEIGHBORHOODS = ["Katamon", "Rehavia", "Talbiye", "Ein Kerem", "German Colony", "Baka", "Old Katamon"]

# --- COLD EMAIL TEMPLATE ---
COLD_EMAIL_TEMPLATE = """Subject: Your leads are waiting 3 hours for a response. I fix that tonight.

Hi {agency_name},

I checked — the average real estate agency in Jerusalem takes 3+ hours to respond to a new lead.
By then, the buyer already called your competitor.

I built a system that responds to your leads in under 2 seconds. WhatsApp, website chat, Facebook — all channels.
It qualifies them (budget, neighborhood, urgency) and alerts you ONLY for VIP leads worth your time.

One of my clients closed a 4M₪ deal last month from a lead that came in at 2am. The bot qualified it, scheduled the visit, and the agent woke up to a signed LOI.

Quick 10-min demo? I'll show you live with your own phone number.

David Amor
DreamNova Consult — AI for Real Estate
+972-XX-XXX-XXXX
"""


def search_google_places(query: str, api_key: str) -> list:
    """Search Google Places API for real estate agencies."""
    url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
    params = urllib.parse.urlencode({"query": query, "key": api_key})
    full_url = f"{url}?{params}"

    try:
        req = urllib.request.Request(full_url)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode())
            results = []
            for place in data.get("results", []):
                results.append({
                    "name": place.get("name", ""),
                    "address": place.get("formatted_address", ""),
                    "rating": place.get("rating", 0),
                    "total_reviews": place.get("user_ratings_total", 0),
                    "place_id": place.get("place_id", ""),
                    "source": "google_places",
                })
            return results
    except Exception as e:
        print(f"   ⚠️  Google Places error: {e}")
        return []


def get_place_details(place_id: str, api_key: str) -> dict:
    """Get phone number and website from place details."""
    url = "https://maps.googleapis.com/maps/api/place/details/json"
    params = urllib.parse.urlencode({
        "place_id": place_id,
        "fields": "formatted_phone_number,website,opening_hours",
        "key": api_key,
    })
    full_url = f"{url}?{params}"

    try:
        req = urllib.request.Request(full_url)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode())
            result = data.get("result", {})
            return {
                "phone": result.get("formatted_phone_number", ""),
                "website": result.get("website", ""),
            }
    except Exception:
        return {"phone": "", "website": ""}


def get_demo_data() -> list:
    """Données de démo réalistes pour tester le pipeline sans API key."""
    return [
        {"name": "Rehavia Premium Estates", "address": "12 Azza St, Rehavia, Jerusalem", "rating": 4.8, "total_reviews": 156, "phone": "02-563-XXXX", "website": "rehavia-estates.co.il", "source": "demo"},
        {"name": "Katamon Luxury Properties", "address": "45 Rachel Imeinu, Katamon, Jerusalem", "rating": 4.5, "total_reviews": 89, "phone": "02-671-XXXX", "website": "katamon-luxury.com", "source": "demo"},
        {"name": "Jerusalem Gold Realty", "address": "8 King George, City Center, Jerusalem", "rating": 4.2, "total_reviews": 234, "phone": "02-622-XXXX", "website": "jlm-gold.co.il", "source": "demo"},
        {"name": "Holy City Real Estate", "address": "3 Emek Refaim, German Colony, Jerusalem", "rating": 5.0, "total_reviews": 67, "phone": "02-566-XXXX", "website": "holycity-re.com", "source": "demo"},
        {"name": "Talbiye Prestige", "address": "22 Hovevei Zion, Talbiye, Jerusalem", "rating": 4.6, "total_reviews": 112, "phone": "02-561-XXXX", "website": "talbiye-prestige.co.il", "source": "demo"},
        {"name": "Ein Kerem Properties", "address": "1 HaMaayan, Ein Kerem, Jerusalem", "rating": 4.3, "total_reviews": 45, "phone": "02-641-XXXX", "website": "", "source": "demo"},
        {"name": "Baka Living", "address": "67 Bethlehem Rd, Baka, Jerusalem", "rating": 3.8, "total_reviews": 23, "phone": "02-673-XXXX", "website": "baka-living.co.il", "source": "demo"},
        {"name": "Anglo-Saxon Jerusalem", "address": "34 Keren HaYesod, Jerusalem", "rating": 4.7, "total_reviews": 312, "phone": "02-625-XXXX", "website": "anglo-saxon.co.il", "source": "demo"},
        {"name": "RE/MAX Vision Jerusalem", "address": "15 Hillel St, Jerusalem", "rating": 4.1, "total_reviews": 198, "phone": "02-624-XXXX", "website": "remax-vision.co.il", "source": "demo"},
        {"name": "Old Katamon Estates", "address": "9 HaPalmach, Old Katamon, Jerusalem", "rating": 4.4, "total_reviews": 76, "phone": "02-563-XXXX", "website": "", "source": "demo"},
    ]


def qualify_agency(agency: dict) -> dict:
    """Score une agence pour déterminer si c'est un bon prospect."""
    score = 0
    reasons = []

    # Rating élevé = ils ont des clients = ils ont du budget
    if agency["rating"] >= 4.5:
        score += 30
        reasons.append("high_rating")
    elif agency["rating"] >= 4.0:
        score += 15
        reasons.append("good_rating")

    # Beaucoup d'avis = volume de business
    if agency["total_reviews"] >= 100:
        score += 25
        reasons.append("high_volume")
    elif agency["total_reviews"] >= 50:
        score += 10
        reasons.append("medium_volume")

    # Quartier premium = deals gros = budget marketing
    address = agency.get("address", "").lower()
    name = agency.get("name", "").lower()
    combined = f"{address} {name}"
    for hood in TARGET_NEIGHBORHOODS:
        if hood.lower() in combined:
            score += 20
            reasons.append(f"premium_area:{hood}")
            break

    # Pas de site web = ils ont besoin d'aide tech
    if not agency.get("website"):
        score += 15
        reasons.append("no_website_needs_tech")

    # Classification
    if score >= 50:
        tier = "A_PRIORITY"
    elif score >= 30:
        tier = "B_QUALIFIED"
    else:
        tier = "C_NURTURE"

    agency["prospect_score"] = score
    agency["prospect_tier"] = tier
    agency["prospect_reasons"] = reasons
    return agency


def generate_cold_email(agency: dict) -> str:
    """Génère un cold email personnalisé."""
    return COLD_EMAIL_TEMPLATE.format(agency_name=agency["name"])


def run_hunt(demo_mode: bool = False):
    """Exécution principale du hunt nocturne."""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    print("=" * 60)
    print(f"🦇 NOVA-TAM NIGHT SHIFT — {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print(f"🎯 Target: Real Estate Agencies Jerusalem")
    print(f"📊 Mode: {'DEMO' if demo_mode else 'LIVE (Google Places API)'}")
    print("=" * 60)

    all_agencies = []

    if demo_mode or not GOOGLE_API_KEY:
        if not demo_mode:
            print("\n⚠️  No GOOGLE_PLACES_API_KEY found. Using demo data.")
            print("   Set: export GOOGLE_PLACES_API_KEY=your_key")
        all_agencies = get_demo_data()
        print(f"\n📦 Loaded {len(all_agencies)} demo agencies")
    else:
        seen_names = set()
        for query in SEARCH_QUERIES:
            print(f"\n🔍 Searching: '{query}'...")
            results = search_google_places(query, GOOGLE_API_KEY)
            for r in results:
                if r["name"] not in seen_names:
                    seen_names.add(r["name"])
                    # Get phone/website details
                    if r.get("place_id"):
                        details = get_place_details(r["place_id"], GOOGLE_API_KEY)
                        r.update(details)
                        time.sleep(0.3)  # Rate limiting
                    all_agencies.append(r)
            print(f"   Found {len(results)} results ({len(seen_names)} unique total)")
            time.sleep(1)  # Anti-ban between searches

    # Qualify all agencies
    print(f"\n🧠 Qualifying {len(all_agencies)} agencies...")
    qualified = []
    for agency in all_agencies:
        result = qualify_agency(agency)
        tier_emoji = {"A_PRIORITY": "🔥", "B_QUALIFIED": "✅", "C_NURTURE": "📋"}
        emoji = tier_emoji.get(result["prospect_tier"], "❓")
        print(f"   {emoji} {result['name']:30s} | Score: {result['prospect_score']:3d} | {result['prospect_tier']}")
        if result["prospect_tier"] in ("A_PRIORITY", "B_QUALIFIED"):
            qualified.append(result)

    # Export CSV
    csv_file = os.path.join(OUTPUT_DIR, f"targets_{timestamp}.csv")
    fieldnames = ["name", "address", "phone", "website", "rating", "total_reviews",
                  "prospect_score", "prospect_tier", "prospect_reasons", "status"]
    with open(csv_file, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")
        writer.writeheader()
        for lead in qualified:
            lead["status"] = "READY_TO_CONTACT"
            lead["prospect_reasons"] = "|".join(lead["prospect_reasons"])
            writer.writerow(lead)

    # Export cold emails
    emails_file = os.path.join(OUTPUT_DIR, f"cold_emails_{timestamp}.txt")
    with open(emails_file, "w", encoding="utf-8") as f:
        for lead in qualified:
            f.write(f"--- TO: {lead['name']} ---\n")
            f.write(generate_cold_email(lead))
            f.write("\n\n")

    # Summary
    a_tier = sum(1 for l in qualified if l["prospect_tier"] == "A_PRIORITY")
    b_tier = sum(1 for l in qualified if l["prospect_tier"] == "B_QUALIFIED")

    print(f"\n{'=' * 60}")
    print(f"💰 MISSION COMPLETE")
    print(f"   🔥 A-Priority: {a_tier} agencies (call first thing tomorrow)")
    print(f"   ✅ B-Qualified: {b_tier} agencies (email + follow up)")
    print(f"   📄 CSV: {csv_file}")
    print(f"   📧 Emails: {emails_file}")
    print(f"\n   Potential MRR: {len(qualified)} × 3,000₪ = {len(qualified) * 3000:,}₪/month")
    print(f"{'=' * 60}")
    print("🦇 System entering sleep mode. Money never sleeps.")
    print("   Na Nach Nachma Nachman MeUman.")


if __name__ == "__main__":
    demo = "--demo" in sys.argv or not GOOGLE_API_KEY
    run_hunt(demo_mode=demo)
