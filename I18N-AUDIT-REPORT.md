# 🌍 AUDIT i18n COMPLET — DreamNova

**Date:** 2026-02-16
**Agent:** NOVA-TAM + Explore
**Statut:** ~280+ textes hardcodés trouvés, traduction requise

---

## 📊 RÉSUMÉ EXÉCUTIF

| Catégorie | Pages | Strings Hardcodés | Priorité |
|-----------|-------|-------------------|----------|
| **Dashboard** | 5/5 | ~150+ | 🔴 CRITIQUE |
| **Marketing** | 4/4 | ~80+ | 🔴 CRITIQUE |
| **Shop** | 1/2 | ~5 | 🟡 MOYENNE |
| **Portal** | 0/3 | Non audité | 🟠 HAUTE |
| **Composants** | 3 | ~50+ | 🔴 CRITIQUE |
| **TOTAL** | **13/17** | **~280+** | — |

---

## 🔴 PAGES CRITIQUES (À TRADUIRE IMMÉDIATEMENT)

### 1. Footer (`footer.tsx`)
**Impact:** Visible sur TOUTES les pages
**Problème:** Liens hardcodés EN FRANÇAIS uniquement

```tsx
// ACTUEL (MAUVAIS):
"L'Entropie"
"Nova-Tam"
"Le Modèle 63"
"Tikkun"

// REQUIS:
t('footer.link.problem')
t('footer.link.solution')
t('footer.link.pricing')
t('footer.link.tikkun')
```

### 2. Dashboard — Overview (`/overview/page.tsx`)
**Impact:** Page principale après login
**Strings non traduits:** ~30

```
"Dashboard"
"Welcome to DreamNova Control Center"
"Total Revenue" / "Orders" / "NFC Scans" / "Waitlist"
"Mission Progress"
"Nova Keys Activated"
"Activity Chart"
"Process Order" / "Send Email" / "Add Contact"
```

### 3. Dashboard — Orders (`/orders/page.tsx`)
**Impact:** Gestion commandes
**Strings non traduits:** ~25

```
"Orders" / "Manage and track all orders"
"Total Orders" / "Delivered" / "Total Revenue"
"Order #" / "Date" / "Product" / "Status" / "Amount" / "Action"
"Processing" / "Shipped" / "Delivered"
"VIEW" / "Order Details:"
```

### 4. About Page (`/about/page.tsx`)
**Impact:** Page mission 63M$
**Strings non traduits:** ~40

```
"The Mission" / "63 Million Dollars" / "of Hafatsa"
"1M Nova Keys Target" / "$63M Revenue Mission"
"A 250-Year Journey" / timeline descriptions
"The Strategy" / 6 pillar titles + descriptions
"Join the Mission" / CTAs
```

### 5. Covenant Pack (`/covenant-pack/page.tsx`)
**Impact:** Page comparaison produits
**Strings non traduits:** ~50+

```
"Choose Your Key"
Product names, descriptions, specs
"Compare Editions" / table headers
"$100+ of Value for $63"
All inclusion items (21 total)
```

---

## 📋 CLÉS i18n À AJOUTER (PAR CATÉGORIE)

### FOOTER
```typescript
'footer.link.problem': 'The Problem',
'footer.link.solution': 'The Solution',
'footer.link.pricing': 'The $63 Model',
'footer.link.tikkun': 'Tikkun',
'footer.newsletter.title': 'Join the Journey',
'footer.newsletter.placeholder': 'Your email',
'footer.newsletter.button': 'Subscribe',
'footer.newsletter.success': 'Welcome to the journey!',
'footer.newsletter.error': 'Something went wrong. Try again.',
'footer.copyright': '© 2026 Dream Nova — Jerusalem, Israel',
'footer.attribution': 'Built with ♥ for the Hafatsa Mission',
```

### DASHBOARD — OVERVIEW
```typescript
'dashboard.overview.title': 'Dashboard',
'dashboard.overview.welcome': 'Welcome to DreamNova Control Center',
'dashboard.stats.revenue': 'Total Revenue',
'dashboard.stats.orders': 'Orders',
'dashboard.stats.scans': 'NFC Scans',
'dashboard.stats.waitlist': 'Waitlist',
'dashboard.mission.title': 'Mission Progress',
'dashboard.mission.keys': 'Nova Keys Activated',
'dashboard.mission.progress': '{current} / {target}',
'dashboard.chart.title': 'Activity Chart',
'dashboard.actions.order': 'Process Order',
'dashboard.actions.email': 'Send Email',
'dashboard.actions.contact': 'Add Contact',
```

### DASHBOARD — ORDERS
```typescript
'dashboard.orders.title': 'Orders',
'dashboard.orders.desc': 'Manage and track all orders',
'dashboard.orders.stats.total': 'Total Orders',
'dashboard.orders.stats.delivered': 'Delivered',
'dashboard.orders.stats.revenue': 'Total Revenue',
'dashboard.orders.table.number': 'Order #',
'dashboard.orders.table.date': 'Date',
'dashboard.orders.table.product': 'Product',
'dashboard.orders.table.status': 'Status',
'dashboard.orders.table.amount': 'Amount',
'dashboard.orders.table.action': 'Action',
'dashboard.orders.status.processing': 'Processing',
'dashboard.orders.status.shipped': 'Shipped',
'dashboard.orders.status.delivered': 'Delivered',
'dashboard.orders.action.view': 'VIEW',
'dashboard.orders.details.title': 'Order Details:',
```

### DASHBOARD — NFC
```typescript
'dashboard.nfc.title': 'NFC Management',
'dashboard.nfc.desc': 'Manage your registered Nova Keys',
'dashboard.nfc.stats.total': 'Total Keys',
'dashboard.nfc.stats.active': 'Active Keys',
'dashboard.nfc.stats.scans': 'Total Scans',
'dashboard.nfc.activate.title': 'Activate New Nova Key',
'dashboard.nfc.activate.desc': 'Register a new NFC key to start tracking scans',
'dashboard.nfc.form.name': 'Key Name',
'dashboard.nfc.form.serial': 'Serial Number',
'dashboard.nfc.form.uid': 'Scan UID',
'dashboard.nfc.form.name.placeholder': 'e.g., My Nova Key',
'dashboard.nfc.form.serial.placeholder': 'NV-XXXX-XXXX-XXXXX',
'dashboard.nfc.form.uid.placeholder': 'Tap your key to scan UID',
'dashboard.nfc.button.activate': 'Activate Key',
'dashboard.nfc.button.cancel': 'Cancel',
'dashboard.nfc.card.scans': 'Total Scans',
'dashboard.nfc.card.days': 'Days Active',
'dashboard.nfc.card.last': 'Last Scan',
'dashboard.nfc.status.active': 'Active',
'dashboard.nfc.status.inactive': 'Inactive',
'dashboard.nfc.action.details': 'View Details',
'dashboard.nfc.empty.title': 'No Nova Keys Registered',
'dashboard.nfc.empty.desc': 'Start by registering your first NFC key...',
'dashboard.nfc.empty.cta': 'Register Your First Key',
```

### DASHBOARD — HAFATSA
```typescript
'dashboard.hafatsa.title': 'Hafatsa',
'dashboard.hafatsa.desc': 'Spreading wisdom and tracking your sacred mission impact',
'dashboard.hafatsa.balance': 'Current Points Balance',
'dashboard.hafatsa.earned': 'Total earned: {points} points from Hafatsa activities',
'dashboard.hafatsa.progress': 'Progress to {level} ({points} points)',
'dashboard.hafatsa.level.current': 'Current Level',
'dashboard.hafatsa.level.needed': 'Points Needed',
'dashboard.hafatsa.level.next': 'Next Level',
'dashboard.hafatsa.levels.title': 'Hafatsa Levels',
'dashboard.hafatsa.activity.scan': 'Scan',
'dashboard.hafatsa.activity.share': 'Share',
'dashboard.hafatsa.activity.referral': 'Referral',
'dashboard.hafatsa.activity.distribution': 'Distribution',
'dashboard.hafatsa.share.title': 'Share Your Hafatsa',
'dashboard.hafatsa.share.desc': 'Invite friends to join the mission. Earn 63 points for each referral purchase!',
'dashboard.hafatsa.referrals.total': 'Referrals',
'dashboard.hafatsa.referrals.conversions': 'Conversions',
'dashboard.hafatsa.referrals.earned': 'Earned Points',
'dashboard.hafatsa.recent.title': 'Recent Activity',
'dashboard.hafatsa.points.unit': 'points',
```

### DASHBOARD — SETTINGS
```typescript
'dashboard.settings.title': 'Settings',
'dashboard.settings.desc': 'Manage your account and preferences',
'dashboard.settings.profile.title': 'Profile Information',
'dashboard.settings.profile.firstname': 'First Name',
'dashboard.settings.profile.lastname': 'Last Name',
'dashboard.settings.profile.email': 'Email Address',
'dashboard.settings.profile.phone': 'Phone Number',
'dashboard.settings.shipping.title': 'Shipping Address',
'dashboard.settings.shipping.street': 'Street Address',
'dashboard.settings.shipping.city': 'City',
'dashboard.settings.shipping.state': 'State/Province',
'dashboard.settings.shipping.zip': 'ZIP/Postal Code',
'dashboard.settings.shipping.country': 'Country',
'dashboard.settings.notifications.title': 'Notification Preferences',
'dashboard.settings.notifications.email.label': 'Email Notifications',
'dashboard.settings.notifications.email.desc': 'Receive email updates about your account',
'dashboard.settings.notifications.orders.label': 'Order Updates',
'dashboard.settings.notifications.orders.desc': 'Get notified about your order status',
'dashboard.settings.notifications.hafatsa.label': 'Hafatsa Alerts',
'dashboard.settings.notifications.hafatsa.desc': 'Notifications about your Hafatsa progress',
'dashboard.settings.notifications.digest.label': 'Weekly Digest',
'dashboard.settings.notifications.digest.desc': 'Summary email every Sunday',
'dashboard.settings.notifications.promos.label': 'Promotions',
'dashboard.settings.notifications.promos.desc': 'Special offers and announcements',
'dashboard.settings.save.button': 'Save Changes',
'dashboard.settings.save.saving': 'Saving...',
'dashboard.settings.save.success': 'Settings saved successfully!',
'dashboard.settings.save.info': 'Your settings are automatically synchronized across all devices. Changes take effect immediately.',
```

### ABOUT PAGE
```typescript
'about.mission.label': 'The Mission',
'about.mission.title': '63 Million Dollars',
'about.mission.subtitle': 'of Hafatsa',
'about.mission.desc': "Dream Nova is not a company. It's a mission...",
'about.stats.keys': 'Nova Keys Target',
'about.stats.revenue': 'Revenue Mission',
'about.stats.channels': 'Sefirot Channels',
'about.stats.souls': 'Souls Touched',
'about.timeline.title': 'A 250-Year Journey',
'about.timeline.subtitle': 'of',
'about.timeline.desc': 'From Medzhybizh to Jerusalem, from parchment to NFC — the thread has never broken.',
'about.timeline.1772': 'In Medzhybizh, Ukraine. He would become one of the most radical mystics...',
'about.timeline.1922': "Rabbi Yisroel Ber Odesser, the 'Saba,' discovers a miraculous letter...",
'about.timeline.2026': 'David DreamNova proves the mathematical convergence...',
'about.strategy.title': 'The Strategy',
'about.strategy.subtitle': 'of',
'about.strategy.desc': 'Six pillars powering the largest Hafatsa operation in Breslov history.',
'about.pillars.hafatsa.title': 'Hafatsa 2.0',
'about.pillars.hafatsa.desc': 'Instead of distributing books in the street...',
'about.pillars.pricing.title': '$63 Sacred Pricing',
'about.pillars.pricing.desc': '63 = gematria of SaG...',
'about.pillars.cac.title': 'Zero CAC Model',
'about.pillars.cac.desc': 'Each Nova Key owner becomes a distributor...',
'about.pillars.ambassador.title': 'Ambassador Network',
'about.pillars.ambassador.desc': '20% commission for every referral...',
'about.pillars.academic.title': 'Academic Legitimacy',
'about.pillars.academic.desc': '35+ peer-reviewed sources...',
'about.pillars.mission.title': '1M Keys Mission',
'about.pillars.mission.desc': '1 million Nova Keys distributed...',
'about.join.title': 'Join the Mission',
'about.join.subtitle': 'of',
'about.join.desc': 'Every Nova Key sold is a step toward the Tikkun...',
'about.join.cta.key': 'Get Your Nova Key — $63',
'about.join.cta.research': 'Read the Research',
```

### COVENANT PACK PAGE
```typescript
'covenant.hero.label': 'Sacred Technology Collection',
'covenant.hero.title': 'Choose Your Key',
'covenant.hero.subtitle': 'of',
'covenant.hero.desc': 'Three variants, one mission. Each Nova Key unlocks the same sacred digital portal...',
'covenant.camea.caption': 'Every kit includes authentic Breslov Caméas — handcrafted sacred amulets with the fire of Na Nach.',
'covenant.badge.popular': 'Most Popular',
'covenant.products.standard.name': 'The Covenant Pack',
'covenant.products.standard.desc': 'The essential sacred kit — everything you need to begin your Hafatsa journey.',
'covenant.products.platinum.name': 'Nova Key Platinum',
'covenant.products.platinum.desc': 'The collector edition — for those who want the ultimate expression of sacred technology.',
'covenant.products.pair.name': 'Nova Key Pair',
'covenant.products.pair.desc': 'Two keys — masculine & feminine designs. Share the mission with someone you love.',
'covenant.pricing.onetime': 'one-time',
'covenant.includes.title': 'Includes',
'covenant.specs.title': 'Specifications',
'covenant.cta': 'Get {product} — {price}',
'covenant.compare.title': 'Compare Editions',
'covenant.compare.subtitle': 'of',
'covenant.compare.header.feature': 'Feature',
'covenant.compare.header.standard': 'Standard',
'covenant.compare.header.platinum': 'Platinum',
'covenant.compare.header.pair': 'Pair',
'covenant.value.title': '$100+ of Value for $63',
'covenant.value.subtitle': 'of',
'covenant.value.desc': "The Covenant Pack is designed to be a premium, sacred object at an accessible price. The $63 price point is not arbitrary — it's the gematria of SaG (סג), a Kabbalistic divine name.",
'covenant.value.cta': 'Get Your Nova Key — $63',
```

---

## 🎯 PLAN D'ACTION

### Phase 1: Ajouter TOUTES les clés (≤30min)
1. Étendre `src/lib/i18n.ts` avec ~200+ nouvelles clés
2. Traduire en 10 langues (FR, EN, ES, HE, ZH, KO, PT, DE, JA, IT)
3. Tester compilation

### Phase 2: Modifier Dashboard (≤20min)
1. `/overview/page.tsx` → `useTranslation()` + `t()`
2. `/orders/page.tsx` → `useTranslation()` + `t()`
3. `/nfc/page.tsx` → `useTranslation()` + `t()`
4. `/hafatsa/page.tsx` → `useTranslation()` + `t()`
5. `/settings/page.tsx` → `useTranslation()` + `t()`

### Phase 3: Modifier Marketing (≤15min)
1. `footer.tsx` → `useTranslation()` + `t()`
2. `/about/page.tsx` → `useTranslation()` + `t()`
3. `/covenant-pack/page.tsx` → `useTranslation()` + `t()`

### Phase 4: Audit Portal Pages (≤10min)
1. `/unlock/page.tsx`
2. `/tikkun/page.tsx`
3. `/azamra/page.tsx`

---

## ⚠️ IMPACT RTL (HEBREW)

**CRITIQUE:** Les pages dashboard avec texte hardcodé bloquent le support RTL!

Quand un utilisateur hébraïque switch la langue:
- ✅ Navbar → RTL fonctionne (utilise déjà `t()`)
- ✅ Footer → RTL fonctionne (après fix)
- ❌ Dashboard → RTL ne fonctionne PAS (texte hardcodé en anglais)
- ❌ About → RTL ne fonctionne PAS
- ❌ Covenant Pack → RTL ne fonctionne PAS

**Solution:** Traduire TOUTES les pages immédiatement pour support RTL complet.

---

## 📊 PROGRESSION ACTUELLE

| Catégorie | Traduit | Non Traduit | % Complet |
|-----------|---------|-------------|-----------|
| Hero | ✅ | — | 100% |
| Problem | ✅ | — | 100% |
| Solution | ✅ | — | 100% |
| Pricing | ✅ | — | 100% |
| Checkout | ✅ | — | 100% |
| **Footer** | ❌ | 10+ strings | 0% |
| **Dashboard** | ❌ | 150+ strings | 0% |
| **About** | ❌ | 40+ strings | 0% |
| **Covenant** | ❌ | 50+ strings | 0% |
| **Portal** | ❌ | Non audité | 0% |

**Total Complété:** ~30% (hero, problem, solution, pricing, checkout)
**Total Restant:** ~70% (dashboard, about, covenant, portal, footer)

---

## 🔥 RECOMMANDATION IMMÉDIATE

**STOP DEPLOYMENT** jusqu'à ce que les traductions critiques soient complètes!

**Raisons:**
1. Footer en français uniquement → Mauvaise UX pour 9/10 langues
2. Dashboard en anglais → Inutilisable pour non-anglophones
3. RTL cassé → Utilisateurs hébreux ont une expérience brisée

**Action:** Compléter Phase 1-3 AVANT de deploy à production.

---

**Préparé par:** NOVA-TAM + Agent Explore
**Date:** 2026-02-16
**Statut:** URGENT — Traduction requise
