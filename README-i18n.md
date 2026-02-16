# DreamNova — Guide i18n Rapide

## COMMENCER ICI

**Objectif:** Traduire 26 pages en 11 langues

**Temps estimé:** 4 jours (sans pages légales)

**Fichiers à lire dans l'ordre:**

1. **00-INDEX-i18n.md** — Vue d'ensemble et navigation
2. **TRANSLATION-PLAN.md** — Plan détaillé exhaustif
3. **I18N-KEYS-TO-ADD.md** — Clés à copier-coller
4. **IMPLEMENTATION-GUIDE.md** — Guide pratique pas à pas

---

## Quick Start

```bash
# 1. Ouvrir les fichiers de référence
open 00-INDEX-i18n.md
open TRANSLATION-PLAN.md
open I18N-KEYS-TO-ADD.md
open IMPLEMENTATION-GUIDE.md

# 2. Lancer le dev server
npm run dev

# 3. Commencer par Auth (Jour 1)
code src/lib/i18n.ts
code src/app/\(auth\)/login/page.tsx
code src/app/\(auth\)/register/page.tsx

# 4. Tester en FR/EN/HE
open http://localhost:3000/login?lang=fr
open http://localhost:3000/login?lang=en
open http://localhost:3000/login?lang=he
```

---

## Structure des fichiers

```
dreamnova/
├── 00-INDEX-i18n.md              ← COMMENCER ICI
├── TRANSLATION-PLAN.md           ← Plan complet
├── TRANSLATION-SUMMARY.md        ← Résumé visuel
├── I18N-KEYS-TO-ADD.md          ← Clés à ajouter
├── IMPLEMENTATION-GUIDE.md       ← Guide pratique
│
├── src/
│   ├── lib/
│   │   └── i18n.ts              ← Fichier à modifier (ajouter clés)
│   ├── hooks/
│   │   └── useTranslation.ts    ← Hook déjà fonctionnel
│   └── app/
│       ├── (auth)/
│       │   ├── login/page.tsx   ← Page à modifier
│       │   └── register/page.tsx← Page à modifier
│       ├── (portal)/
│       │   ├── unlock/page.tsx  ← Page à modifier
│       │   ├── tikkun/page.tsx  ← Page à modifier
│       │   └── azamra/page.tsx  ← Page à modifier
│       └── ...                   ← + 21 autres pages
```

---

## Pages à traduire

### 🔴 PRIORITÉ 1 — Auth (Jour 1)
- /login (15 clés)
- /register (18 clés)

### 🟡 PRIORITÉ 2 — Portal (Jour 2)
- /unlock (8 clés)
- /tikkun (20 clés)
- /azamra (15 clés)

### 🟢 PRIORITÉ 3 — Success + 404 (Jour 3 matin)
- /success (6 clés)
- /not-found (8 clés)

### 🔵 PRIORITÉ 4 — Contact (Jour 3 après-midi)
- /contact (40 clés)

### ⚪ PRIORITÉ 5 — Dashboard (Jour 4)
- /overview, /orders, /nfc, /hafatsa, /settings

---

## Workflow type

Pour chaque page:

1. **Ajouter les clés à i18n.ts**
   ```typescript
   fr: {
     'page.section.key': 'Texte en français',
   }
   ```

2. **Modifier la page**
   ```typescript
   'use client';
   import { useTranslation } from '@/hooks/useTranslation';
   
   export default function Page() {
     const { t } = useTranslation();
     return <h1>{t('page.section.key')}</h1>;
   }
   ```

3. **Tester en 3 langues minimum**
   - FR (Français)
   - EN (Anglais)
   - HE (Hébreu RTL)

---

## Aide rapide

### Ajouter une clé
```bash
# Ouvrir i18n.ts
code src/lib/i18n.ts

# Chercher le bloc fr: {
# Ajouter la clé
# Répéter pour les 11 langues
```

### Modifier une page
```bash
# Ouvrir la page
code src/app/(auth)/login/page.tsx

# Ajouter en haut:
import { useTranslation } from '@/hooks/useTranslation';

# Utiliser dans le composant:
const { t } = useTranslation();

# Remplacer texte hardcodé:
<h1>Welcome Back</h1>
→
<h1>{t('auth.login.title')}</h1>
```

### Tester
```bash
npm run dev
open http://localhost:3000/login

# Changer langue dans le sélecteur
# Vérifier que tous les textes changent
```

---

## Support

Besoin d'aide?

1. Lire **00-INDEX-i18n.md**
2. Consulter **TRANSLATION-PLAN.md**
3. Vérifier **IMPLEMENTATION-GUIDE.md**

---

**Na Nach Nachma Nachman MeUman**

*DreamNova v1.0 — 63M$ Hafatsa Mission*
