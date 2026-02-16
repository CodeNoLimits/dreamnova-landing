# 🎨 ANTIGRAVITY MISSION BRIEF — Supervision Visuelle + Accessoires

**Date:** 2026-02-16
**De:** NOVA-TAM (Claude Sonnet 4.5)
**Pour:** Antigravity (Design Lead)
**Mission:** Traduction intégrale + Nouvelle page Accessoires Cyberpunk

---

## 🎯 TON RÔLE (ANTIGRAVITY)

### 1️⃣ SUPERVISION VISUELLE — Vérifier Traductions
**Objectif:** Vérifier que TOUT le texte du site est présent dans chaque langue respective

**Action requise:**
1. Une fois que NOVA-TAM a ajouté les traductions à `i18n.ts`
2. **Tester CHAQUE langue** (10 au total) sur le site live
3. Vérifier visuellement que:
   - ✅ Aucun texte anglais/français ne reste quand on switch de langue
   - ✅ Les layouts RTL fonctionnent pour l'hébreu
   - ✅ Les caractères chinois/coréens/japonais s'affichent correctement
   - ✅ Les prix affichent la bonne devise

**Pages à vérifier:**
- `/` (home)
- `/about`
- `/nova-key`
- `/source-code`
- `/covenant-pack`
- `/checkout`
- `/dashboard/*` (toutes les sous-pages)
- Footer (sur toutes les pages)
- Navbar (sur toutes les pages)

**Outil:** Utilise le language selector (globe icon en haut à droite) pour switcher entre les 10 langues.

---

### 2️⃣ GEMINI VISION — Analyser Photos pour Accessoires

**Objectif:** Créer une page `/accessories` avec des produits cyberpunk NFC

**Action requise:**
1. **Utilise Gemini Vision** pour analyser les photos dans `/public/images/`
2. Identifie les accessoires visibles:
   - 💍 **Bagues** (NFC rings)
   - 📿 **Colliers** (NFC necklaces)
   - ⌚ **Bracelets** (NFC bracelets)
   - 📌 **Pins** (NFC pins/badges)
   - 🔗 **Porte-clés** (NFC keychains)
   - 🎫 **Stickers** (NFC stickers)

3. Pour chaque accessoire trouvé, note:
   - Type d'objet
   - Couleur/style
   - Matériau visible
   - Emplacement NFC potentiel

**Format de sortie attendu:**
```json
{
  "accessories": [
    {
      "type": "ring",
      "name": "Nova Ring — Cyber",
      "material": "Stainless Steel Black",
      "nfc": "NTAG 215 (optional)",
      "image": "/images/accessories/ring-cyber.png",
      "price_standard": 63,
      "price_nfc": 148
    },
    // ... etc
  ]
}
```

---

### 3️⃣ CRÉER PAGE ACCESSOIRES — `/accessories/page.tsx`

**Design Requirements:**

#### Layout
```
┌─────────────────────────────────────────────┐
│  SACRED ACCESSORIES                          │
│  Wearable Tech Meets Breslov Spirituality   │
│                                              │
│  [Filter: All | Rings | Necklaces | etc.]  │
│                                              │
│  ┌────────┐  ┌────────┐  ┌────────┐        │
│  │ Ring   │  │ Collar │  │Bracelet│        │
│  │ 63€    │  │ 148€   │  │ 63€    │        │
│  │+ NFC   │  │+ NFC   │  │+ NFC   │        │
│  └────────┘  └────────┘  └────────┘        │
│                                              │
│  SUPER PACK — 491€                          │
│  All accessories + NFC chips                │
└─────────────────────────────────────────────┘
```

#### Pricing Structure
Chaque accessoire a **2 prix**:
- **Sans NFC:** 63€ / 63$
- **Avec NFC:** 148€ / 148$

**SUPER PACK:** Tous les accessoires + toutes les puces NFC
- 491€ (Europe)
- 491$ (USA)
- 491 NIS (Israel)
- ¥4910 (Japon - contient .491)
- ¥4910 (Chine - contient .491)
- ₩491,000 (Corée - contient 491)
- R$4910 (Brésil - contient 491)

#### Design Aesthetic
- **Style:** Cyberpunk with sacred geometry
- **Colors:** Gold (#D4AF37), Cyan (#00D4FF), Deep Black (#050508)
- **Effects:** Holographic shimmer on hover
- **Animations:** Particle effects on NFC chip icons
- **Sacred Elements:** Hebrew letters subtly integrated

#### Component Structure
```tsx
// Créer ces composants:
<AccessoriesGrid>
  <AccessoryCard
    type="ring"
    name="Nova Ring — Cyber"
    priceStandard={63}
    priceNFC={148}
    hasNFC={true}
  />
</AccessoriesGrid>

<SuperPackCard
  price={491}
  includes={["All rings", "All necklaces", ...]}
/>
```

---

### 4️⃣ INTÉGRER AU SITE

**Navigation:**
Ajouter dans navbar (nouveau lien):
```tsx
{
  letter: 'א', // Aleph (première lettre, nouveau début)
  latin: 'Aleph',
  label: 'Aleph — Sacred Accessories',
  href: '/accessories',
  meaning: 'Wearable Tech'
}
```

**Footer:**
Ajouter lien "Accessories" dans Quick Links

**Checkout:**
Permettre d'acheter accessoires seuls ou en bundle avec Nova Key

---

## 📊 PRICING SACRÉ — Nouvelle Structure

### Prix Fixes (malgré taux de change)
```javascript
// JAMAIS changer ces prix:
EUR: 63€, 148€, 491€
USD: 63$, 148$, 491$
```

### Prix Variables (avec pattern sacré)
```javascript
// TOUJOURS inclure .63, .148, ou .491
ILS: ₪230 (0.63), ₪543 (.148 × 365), 491 NIS
CNY: ¥463 (63), ¥1063 (.148), ¥4910 (.491)
KRW: ₩86,300 (63), ₩199,630 (.148), ₩491,000 (491)
JPY: ¥9,630 (63), ¥22,630 (.148), ¥49,100 (.491)
BRL: R$363 (63), R$863 (.148), R$2,863 (.491)
```

**Règle:** Le nombre DOIT contenir 63, 148, ou 491 quelque part!

---

## 🎨 ASSETS REQUIS (À GÉNÉRER)

### Images Accessoires (Nano Banana Pro)
```
/public/images/accessories/
├── ring-cyber-black.png
├── ring-cyber-gold.png
├── necklace-petek.png
├── bracelet-nanach.png
├── pin-azamra.png
├── keychain-breslov.png
├── sticker-sacred.png
└── super-pack-hero.png
```

**Specs pour chaque image:**
- **Style:** Photorealistic cyberpunk
- **Lighting:** Neon glow (gold + cyan)
- **Background:** Dark with sacred geometry patterns
- **NFC Chip:** Visible or suggested (holographic effect)
- **Size:** 800×800px (product shots)

### Hero Image Super Pack
- **Size:** 1920×1080
- **Content:** All accessories arranged in sacred geometry pattern
- **Center:** Glowing number "491" in Hebrew gematria
- **Effect:** Holographic shimmer, particle field

---

## 🔊 SOUND DESIGN

### Nouveaux Sons pour Accessoires
```javascript
// src/lib/sound-manager.ts - Ajouter:
'hover-accessory': Crystal chime (subtle, high pitch)
'select-nfc': Sacred resonance (when toggling NFC option)
'add-to-super-pack': Epic chord (when adding to bundle)
```

---

## ✅ CHECKLIST DE VALIDATION

### Avant de Commit:
- [ ] Gemini Vision a analysé toutes les photos
- [ ] Liste complète d'accessoires identifiés
- [ ] Page `/accessories` créée et stylée
- [ ] Tous les prix respectent le pattern sacré (.63, .148, .491)
- [ ] SUPER PACK à 491 configuré pour toutes les devises
- [ ] Images d'accessoires générées (Nano Banana Pro)
- [ ] Sons ajoutés au sound manager
- [ ] Navigation mise à jour (navbar + footer)
- [ ] Holographic effects intégrés
- [ ] Build compile sans erreurs
- [ ] Testé sur mobile + desktop

### Après NOVA-TAM a fini les traductions:
- [ ] Switché entre les 10 langues
- [ ] Vérifié chaque page visuellement
- [ ] Confirmé RTL fonctionne (hébreu)
- [ ] Confirmé caractères asiatiques s'affichent
- [ ] Confirmé aucun texte hardcodé ne reste
- [ ] Screenshot de chaque langue pour documentation

---

## 📞 COORDINATION TEMPS RÉEL

### Comment communiquer:

**NOVA-TAM mettra à jour:**
- `src/lib/i18n.ts` — Toutes les traductions
- `I18N-COMPLETE.md` — Rapport de complétion
- Git commits avec tag `[I18N]`

**ANTIGRAVITY mettra à jour:**
- `src/app/(shop)/accessories/page.tsx` — Nouvelle page
- `public/images/accessories/` — Images générées
- `ACCESSORIES-DESIGN.md` — Documentation design
- Git commits avec tag `[ACCESSORIES]`

**Fichiers partagés:**
- `AGENT-COORDINATION.md` — Laissez notes ici
- `PRICING-SACRED.md` — Documentation pricing (NOVA-TAM créera)

---

## 🔥 MISSION STATEMENT

**Objectif Final:**
Créer la plateforme e-commerce spirituelle la plus complète au monde:
- ✅ 10 langues (traduction 100% complète)
- ✅ Accessoires cyberpunk NFC (nouvelle catégorie produits)
- ✅ Pricing sacré universel (63, 148, 491 pattern)
- ✅ SUPER PACK à 491 (toutes devises)
- ✅ Design holographique cohérent
- ✅ Expérience utilisateur parfaite (toutes langues, tous devices)

**Impact:**
- Utilisateurs français → Tout en français
- Utilisateurs hébreux → Tout en hébreu RTL
- Utilisateurs chinois → Tout en chinois
- Etc. × 10 langues

**Résultat:**
La seule plateforme NFC spirituelle véritablement internationale! 🌍

---

## 💬 MESSAGE POUR TOI, ANTIGRAVITY

Brother! 🔥

NOVA-TAM (moi) va ajouter **~2800 traductions** dans les prochaines 30-45 minutes. Pendant ce temps:

1. **Utilise Gemini Vision** pour analyser les photos
2. **Liste tous les accessoires** que tu vois
3. **Commence le design** de la page `/accessories`
4. **Génère les images** avec Nano Banana Pro

Une fois que j'ai fini les traductions, tu peux:
1. **Tester visuellement** toutes les langues
2. **Prendre screenshots** de chaque langue
3. **Vérifier RTL** pour l'hébreu
4. **Confirmer pricing** s'affiche correctement

Ensemble, on va créer quelque chose de **COSMIQUE**!

**Na Nach Nachma Nachman MeUman!** 🕎✨

— NOVA-TAM, ton Backend Brother 🤖⚡

---

**Créé:** 2026-02-16
**Statut:** MISSION ACTIVE
**Deadline:** Sprint 2 (≤2 heures total)
