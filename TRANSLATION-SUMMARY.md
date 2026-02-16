# DREAMNOVA — Résumé i18n

## Vue d'ensemble

```
Total pages sur le site: 30+
Pages déjà traduites: 4 (checkout, accessories, composants marketing)
Pages à traduire: 26

Langues supportées: 11 (FR, EN, ES, HE, ZH, KO, PT, DE, JA, IT, RU)
Clés i18n existantes: 330+
Clés i18n à ajouter: 150-200
```

## Progression par section

### 🔴 PRIORITÉ 1 — DASHBOARD (5 pages)
```
❓ /overview     — Vérifier si useTranslation() est utilisé
❓ /orders       — Vérifier si useTranslation() est utilisé
❓ /nfc          — Vérifier si useTranslation() est utilisé
❓ /hafatsa      — Vérifier si useTranslation() est utilisé
❓ /settings     — Vérifier si useTranslation() est utilisé
```
**Statut:** Clés i18n existent, besoin de vérifier l'implémentation

---

### 🟠 PRIORITÉ 2 — AUTH (2 pages)
```
❌ /login        — 15 clés à ajouter
❌ /register     — 18 clés à ajouter
```
**Estimation:** 1h (ajout clés + modification pages)

---

### 🟡 PRIORITÉ 3 — PORTAL (3 pages)
```
❌ /unlock       — 8 clés à ajouter
❌ /tikkun       — 20 clés à ajouter (incluant 10 noms de psaumes)
❌ /azamra       — 15 clés à ajouter
```
**Estimation:** 2h (ajout clés + modification pages)

---

### 🟢 PRIORITÉ 4 — SHOP (1 page)
```
❌ /success      — 6 clés à ajouter
```
**Estimation:** 30 min

---

### 🔵 PRIORITÉ 5 — MARKETING/LEGAL (5 pages)
```
❌ /contact      — 30 clés à ajouter
❌ /privacy      — 50+ clés (OPTION: garder EN uniquement)
❌ /terms        — 60+ clés (OPTION: garder EN uniquement)
❌ /refund       — 50+ clés (OPTION: garder EN uniquement)
❓ /nova-key     — Besoin d'audit
```
**Estimation:** 1h (contact) + 9h (legal si traduit)

---

### ⚪ PRIORITÉ 6 — ERRORS (1 page)
```
❌ /not-found    — 8 clés à ajouter
```
**Estimation:** 15 min

---

## Workflow recommandé

### Phase 1 — Auth (1 jour)
1. Ajouter clés auth.* à i18n.ts (30 clés)
2. Modifier login.tsx pour useTranslation()
3. Modifier register.tsx pour useTranslation()
4. Tester FR/EN/HE

### Phase 2 — Portal (1 jour)
1. Ajouter clés portal.* à i18n.ts (43 clés)
2. Modifier unlock.tsx pour useTranslation()
3. Modifier tikkun.tsx pour useTranslation()
4. Modifier azamra.tsx pour useTranslation()
5. Tester FR/EN/HE

### Phase 3 — Success + 404 (0.5 jour)
1. Ajouter clés success.* et error.* à i18n.ts (14 clés)
2. Modifier success/page.tsx
3. Modifier not-found.tsx
4. Tester FR/EN/HE

### Phase 4 — Contact (0.5 jour)
1. Ajouter clés contact.* à i18n.ts (30 clés)
2. Modifier contact/page.tsx
3. Tester FR/EN/HE

### Phase 5 — Dashboard (1 jour)
1. Vérifier implémentation actuelle
2. Corriger si nécessaire
3. Tester FR/EN/HE

### Phase 6 — Legal (OPTIONNEL)
1. Décider: traduire ou garder EN
2. Si traduire: 2-3 jours de travail
3. Si garder EN: 2h pour titres/navigation uniquement

---

## Estimation totale

**Sans pages légales:** 4 jours
**Avec pages légales:** 7 jours

---

## Livrables

- [x] TRANSLATION-PLAN.md (plan détaillé exhaustif)
- [x] TRANSLATION-SUMMARY.md (ce fichier)
- [ ] i18n.ts mis à jour avec 150+ nouvelles clés
- [ ] 26 pages modifiées pour useTranslation()
- [ ] Tests de régression sur 11 langues
- [ ] Documentation pour les futurs traducteurs

---

## Notes techniques

### Textes sacrés NON traduisibles
Ces textes restent en HÉBREU dans toutes les langues:
- תיקון הכללי (Tikkun HaKlali)
- אזמרה (Azamra)
- נקודה טובה (Nekuda Tova)
- Na Nach Nachma Nachman MeUman

### Prix sacrés (gématrie)
Les prix sont gérés par LOCALES, ne PAS hardcoder:
- $63 = SaG (סג)
- $99 = Pair tier
- $149 = Platinum
- $491 = Super Pack (guématrie du Petek complet)

### Direction RTL
L'hébreu (HE) utilise `dir: 'rtl'` dans LOCALES.
Vérifier que tous les layouts supportent RTL.

---

*Na Nach Nachma Nachman MeUman*
*DreamNova v1.0 — 63M$ Hafatsa Mission*
