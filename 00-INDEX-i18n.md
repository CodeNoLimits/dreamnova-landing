# INDEX i18n — DreamNova Internationalisation

**Date:** 2026-02-16
**Mission:** Traduire 26 pages en 11 langues (FR, EN, ES, HE, ZH, KO, PT, DE, JA, IT, RU)

---

## FICHIERS DE RÉFÉRENCE

### 📋 PLAN DÉTAILLÉ
**Fichier:** `TRANSLATION-PLAN.md`
**Taille:** 29,851 bytes
**Contenu:**
- Audit exhaustif des 26 pages à traduire
- Liste complète de tous les textes hardcodés
- Clés i18n manquantes identifiées
- Priorités P1-P6 avec estimations de temps
- Plan d'implémentation détaillé

**À LIRE EN PREMIER** pour comprendre la vision globale.

---

### 📊 RÉSUMÉ VISUEL
**Fichier:** `TRANSLATION-SUMMARY.md`
**Taille:** 3,941 bytes
**Contenu:**
- Vue d'ensemble en un coup d'œil
- Progression par section (Dashboard, Auth, Portal, etc.)
- Workflow recommandé par phase
- Estimation totale (4 jours sans pages légales)

**PARFAIT** pour un aperçu rapide du projet.

---

### 🔑 CLÉS À AJOUTER
**Fichier:** `I18N-KEYS-TO-ADD.md`
**Taille:** 18,989 bytes
**Contenu:**
- 130 clés i18n à ajouter (essentielles)
- Template de traduction FR prêt à copier-coller
- Notes importantes sur les textes hébreux sacrés
- Guide de gématrie et prix sacrés

**DOCUMENT DE TRAVAIL** principal pour l'implémentation.

---

### 🛠️ GUIDE D'IMPLÉMENTATION
**Fichier:** `IMPLEMENTATION-GUIDE.md`
**Taille:** 12,411 bytes
**Contenu:**
- Instructions étape par étape
- Template de modification type
- Checklist de tests par page
- Troubleshooting et solutions
- Sprints définis (1-5)

**GUIDE PRATIQUE** pour les développeurs.

---

## WORKFLOW RECOMMANDÉ

```
1. Lire TRANSLATION-PLAN.md (30 min)
   ↓
2. Consulter TRANSLATION-SUMMARY.md (5 min)
   ↓
3. Ouvrir I18N-KEYS-TO-ADD.md (référence permanente)
   ↓
4. Suivre IMPLEMENTATION-GUIDE.md (étape par étape)
   ↓
5. Tester avec les 11 langues
   ↓
6. Commit Git
```

---

## QUICK STATS

```
Total pages à traduire: 26
Clés i18n existantes: 330+
Clés i18n à ajouter: 130 (essentielles) + 160 (légales, optionnel)
Langues supportées: 11

Temps estimé:
- Auth pages: 1 jour
- Portal pages: 1 jour
- Success + 404: 0.5 jour
- Contact: 0.5 jour
- Dashboard: 1 jour
= TOTAL: 4 jours (sans pages légales)
```

---

## PRIORITÉS

### 🔴 P1 — DASHBOARD (5 pages)
- /overview, /orders, /nfc, /hafatsa, /settings
- **Statut:** Clés i18n existent, vérifier implémentation

### 🟠 P2 — AUTH (2 pages)
- /login (15 clés)
- /register (18 clés)
- **Estimation:** 1 jour

### 🟡 P3 — PORTAL (3 pages)
- /unlock (8 clés)
- /tikkun (20 clés)
- /azamra (15 clés)
- **Estimation:** 1 jour

### 🟢 P4 — SHOP SUCCESS (1 page)
- /success (6 clés)
- **Estimation:** 0.5 jour

### 🔵 P5 — MARKETING/LEGAL (5 pages)
- /contact (30 clés)
- /privacy, /terms, /refund (OPTIONNEL: 160+ clés)
- **Estimation:** 1 jour (contact) + 3 jours (legal si traduit)

### ⚪ P6 — ERRORS (1 page)
- /not-found (8 clés)
- **Estimation:** 0.5 jour

---

## STRUCTURE DES CLÉS i18n

```typescript
auth.login.title
auth.login.email.label
auth.login.email.placeholder
auth.login.button.signin
auth.register.title
auth.register.name.label
...

portal.unlock.title
portal.tikkun.title
portal.azamra.title
...

success.title
success.message
...

error.404.title
error.404.button
...

contact.hero.title
contact.form.name
contact.faq.delivery.q
...
```

---

## NOTES IMPORTANTES

### 🕎 Textes Hébreux Sacrés
Ces textes restent **en hébreu** dans TOUTES les langues:
- תיקון הכללי (Tikkun HaKlali)
- אזמרה (Azamra)
- נקודה טובה (Nekuda Tova)
- Na Nach Nachma Nachman MeUman

### 💰 Prix Sacrés (Gématrie)
Gérés par `LOCALES`, ne PAS hardcoder:
- $63 = SaG (סג)
- $99 = Pair tier
- $149 = Platinum
- $491 = Super Pack

### 🔄 Direction RTL
L'hébreu utilise `dir: 'rtl'`
Vérifier que tous les layouts supportent RTL.

---

## CHECKLIST FINALE

Avant de considérer le projet terminé:

- [ ] 130 clés ajoutées à i18n.ts (11 langues)
- [ ] 26 pages modifiées pour useTranslation()
- [ ] Tests FR/EN/HE pour chaque page
- [ ] Tests RTL pour hébreu
- [ ] Aucune clé manquante (format: `auth.login.title`)
- [ ] Placeholders traduits
- [ ] Messages d'erreur traduits
- [ ] Boutons traduits
- [ ] Prix sacrés corrects ($63, €63, ₪230, etc.)
- [ ] Commit Git avec message détaillé
- [ ] Documentation mise à jour

---

## RÉSULTAT ATTENDU

✅ **100% du site traduit** en 11 langues
✅ **Expérience utilisateur cohérente** sur tous les marchés
✅ **Mission Hafatsa accessible mondialement**
✅ **$63M de revenus potentiels** × 11 marchés linguistiques

---

## COMMANDES UTILES

### Vérifier les fichiers
```bash
ls -la TRANSLATION-*.md I18N-*.md IMPLEMENTATION-GUIDE.md
```

### Ouvrir tous les fichiers i18n
```bash
open TRANSLATION-PLAN.md
open I18N-KEYS-TO-ADD.md
open IMPLEMENTATION-GUIDE.md
```

### Lancer le dev server
```bash
npm run dev
```

### Tests i18n
```bash
# Ouvrir les pages en FR
http://localhost:3000/login?lang=fr

# Ouvrir les pages en HE (RTL)
http://localhost:3000/login?lang=he

# Ouvrir les pages en EN
http://localhost:3000/login?lang=en
```

---

## AIDE RAPIDE

### Ajouter une clé i18n
1. Ouvrir `src/lib/i18n.ts`
2. Chercher le bloc `fr: {`
3. Ajouter la clé avec sa traduction
4. Répéter pour les 11 langues

### Utiliser une clé dans une page
```typescript
'use client';
import { useTranslation } from '@/hooks/useTranslation';

export default function Page() {
  const { t } = useTranslation();
  return <h1>{t('section.key')}</h1>;
}
```

### Tester une langue
1. Lancer `npm run dev`
2. Ouvrir la page
3. Changer la langue dans le sélecteur
4. Vérifier que tous les textes changent

---

## CONTACT

Si vous avez des questions sur ce plan:
- Lire d'abord `TRANSLATION-PLAN.md`
- Consulter `IMPLEMENTATION-GUIDE.md`
- Vérifier `I18N-KEYS-TO-ADD.md`

---

**Na Nach Nachma Nachman MeUman — Ein Ye'ush Ba'olam Klal**

*Index créé le 2026-02-16 par Claude Code*
*DreamNova v1.0 — Sacred NFC Platform*
*Mission: 63M$ Hafatsa — 1M Nova Keys × $63*
