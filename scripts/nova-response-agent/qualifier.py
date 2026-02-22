#!/usr/bin/env python3
"""
NOVA RESPONSE AGENT v1.0 — Produit à vendre aux Agences Immobilières
Qualification automatique de leads WhatsApp/Chat en temps réel.
Prix: 3,000₪/mois par agence.

Usage démo: python3 qualifier.py
Usage API:  from qualifier import qualify_lead
"""

import json
from datetime import datetime

# --- CONFIGURATION AGENCE (personnalisable par client) ---
AGENT_CONFIG = {
    "agent_name": "David",
    "agency_name": "VIP Realty Jerusalem",
    "response_delay_seconds": 2,
    "language": "he",  # he, fr, en
}

# --- DICTIONNAIRES DE SCORING MULTILINGUE ---
KEYWORDS = {
    "urgency": {
        "he": ["עכשיו", "דחוף", "היום", "מחר", "ביקור", "לראות", "מתי אפשר"],
        "fr": ["maintenant", "urgent", "visite", "aujourd'hui", "demain", "quand"],
        "en": ["now", "urgent", "visit", "today", "tomorrow", "asap", "when"],
    },
    "high_value": {
        "he": ["פנטהאוז", "וילה", "גן", "דופלקס", "קטמון", "רחביה", "טלביה", "עין כרם", "ירושלים"],
        "fr": ["penthouse", "villa", "duplex", "katamon", "rehavia", "talbiye", "ein kerem"],
        "en": ["penthouse", "villa", "duplex", "katamon", "rehavia", "talbiye", "garden"],
    },
    "budget_signals": {
        "he": ["תקציב", "מיליון", "דולר", "שקל", "ללא הגבלה"],
        "fr": ["budget", "million", "illimité", "euros", "dollars"],
        "en": ["budget", "million", "unlimited", "dollars", "cash"],
    },
    "buyer_intent": {
        "he": ["לקנות", "רוצה", "מחפש", "מתעניין", "משכנתא"],
        "fr": ["acheter", "cherche", "intéressé", "investir", "hypothèque"],
        "en": ["buy", "looking", "interested", "invest", "mortgage", "purchase"],
    },
}

# --- RÉPONSES PAR TIER ---
RESPONSES = {
    "he": {
        "vip": "שלום! קיבלתי את הפנייה שלך. {agent_name} יתקשר אליך תוך 2 דקות בדיוק. תודה על האמון 🏠✨",
        "hot": "תודה על הפנייה! מה התקציב המשוער שלך? אני מכין עבורך מבחר נכסים מותאם אישית.",
        "warm": "שלום וברוכים הבאים! אתה מחפש לקנות או לשכור?",
        "cold": "שלום! איך אפשר לעזור לך? ספר לי קצת על מה שאתה מחפש 😊",
    },
    "fr": {
        "vip": "Bonjour! J'ai bien reçu votre demande VIP. {agent_name} vous appelle dans 2 minutes exactement. Merci pour votre confiance 🏠✨",
        "hot": "Merci pour votre message! Quel est votre budget approximatif? Je prépare une sélection personnalisée pour vous.",
        "warm": "Bonjour et bienvenue! Cherchez-vous à acheter ou à louer?",
        "cold": "Bonjour! Comment puis-je vous aider? Dites-moi ce que vous recherchez 😊",
    },
    "en": {
        "vip": "Hello! I've received your VIP request. {agent_name} will call you in exactly 2 minutes. Thank you for your trust 🏠✨",
        "hot": "Thank you! What's your approximate budget? I'm preparing a personalized selection for you.",
        "warm": "Hello and welcome! Are you looking to buy or rent?",
        "cold": "Hello! How can I help you? Tell me a bit about what you're looking for 😊",
    },
}


def detect_language(text: str) -> str:
    """Détecte la langue du message (hébreu, français, anglais)."""
    hebrew_chars = sum(1 for c in text if "\u0590" <= c <= "\u05FF")
    if hebrew_chars > 2:
        return "he"
    french_words = ["bonjour", "cherche", "je", "vous", "merci", "achat", "budget"]
    if any(w in text.lower() for w in french_words):
        return "fr"
    return "en"


def qualify_lead(message: str, config: dict = None) -> dict:
    """
    Qualifie un lead entrant et retourne l'action + réponse.

    Returns:
        dict avec keys: tier, score, action, reply, language, timestamp, breakdown
    """
    cfg = config or AGENT_CONFIG
    lang = detect_language(message)
    msg_lower = message.lower()

    # Scoring
    scores = {}
    for category, lang_keywords in KEYWORDS.items():
        kws = lang_keywords.get(lang, lang_keywords["en"])
        hits = [k for k in kws if k in msg_lower]
        scores[category] = {"points": len(hits) * 25, "hits": hits}

    total = sum(s["points"] for s in scores.values())

    # Tier classification
    if total >= 100:
        tier = "vip"
        action = "ALERT_AGENT_IMMEDIATE"
    elif total >= 50:
        tier = "hot"
        action = "SCHEDULE_CALL_15MIN"
    elif total >= 25:
        tier = "warm"
        action = "ADD_TO_NURTURE"
    else:
        tier = "cold"
        action = "QUALIFY_MORE"

    reply = RESPONSES[lang][tier].format(agent_name=cfg["agent_name"])

    return {
        "tier": tier,
        "score": total,
        "action": action,
        "reply": reply,
        "language": lang,
        "timestamp": datetime.now().isoformat(),
        "breakdown": scores,
    }


# --- DÉMO INTERACTIVE ---
if __name__ == "__main__":
    print("=" * 60)
    print("🏠  NOVA RESPONSE AGENT v1.0 — LIVE DEMO")
    print(f"📋  Agency: {AGENT_CONFIG['agency_name']}")
    print(f"👤  Agent: {AGENT_CONFIG['agent_name']}")
    print("=" * 60)

    test_leads = [
        "Bonjour, je cherche un Penthouse à Katamon, budget illimité, visite maintenant.",
        "שלום, אני מחפש וילה ברחביה עם גן, תקציב של 5 מיליון",
        "Hi, I'm looking to buy a duplex in Talbiye, can we visit tomorrow?",
        "Bonjour, est-ce que vous avez des appartements?",
        "hey",
        "אני רוצה לקנות פנטהאוז בקטמון עכשיו, תקציב ללא הגבלה",
    ]

    for i, lead in enumerate(test_leads, 1):
        print(f"\n{'─' * 60}")
        print(f"📩 Lead #{i}: {lead}")
        result = qualify_lead(lead)
        tier_emoji = {"vip": "🔥🔥🔥", "hot": "🔥🔥", "warm": "🔥", "cold": "❄️"}
        print(f"   Tier:     {tier_emoji[result['tier']]} {result['tier'].upper()} (Score: {result['score']})")
        print(f"   Lang:     {result['language']}")
        print(f"   Action:   {result['action']}")
        print(f"   Reply:    {result['reply']}")
        for cat, data in result["breakdown"].items():
            if data["hits"]:
                print(f"   {cat}: +{data['points']}pts ({', '.join(data['hits'])})")

    print(f"\n{'=' * 60}")
    print("💰 PRICING: 3,000₪/month per agency | Setup: 2,000₪ one-time")
    print("📞 Contact: David Amor — DreamNova Consult")
    print("=" * 60)
