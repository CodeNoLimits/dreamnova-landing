# Guide d'Implémentation i18n — DreamNova

**OBJECTIF:** Traduire 26 pages avec texte hardcodé en anglais vers 11 langues.

---

## ÉTAPE 1 — Préparer l'environnement (5 min)

```bash
cd /Users/codenolimits-dreamai-nanach/Desktop/allyouneeddreamnovakey/dreamnova

# Ouvrir les fichiers de référence
open TRANSLATION-PLAN.md
open I18N-KEYS-TO-ADD.md
```

---

## ÉTAPE 2 — Ajouter les clés manquantes à i18n.ts (2h)

### 2.1 Ouvrir le fichier i18n.ts

```bash
code src/lib/i18n.ts
```

### 2.2 Localiser le bloc `fr: { ... }`

Chercher la ligne `fr: {` (ligne ~43).

### 2.3 Ajouter les clés Auth (33 clés)

**IMPORTANT:** Ajouter APRÈS les clés existantes, AVANT la fermeture du bloc `fr: { ... }`.

```typescript
fr: {
  // ... clés existantes ...

  // ═══════════════════════════════════════════
  // AUTH — Login/Register
  // ═══════════════════════════════════════════

  // Auth - Login
  'auth.login.title': 'Bienvenue',
  'auth.login.email.label': 'Adresse Email',
  'auth.login.email.placeholder': 'bonjour@dreamnova.com',
  'auth.login.password.label': 'Mot de passe',
  'auth.login.password.placeholder': '••••••••',
  'auth.login.button.signing': 'Connexion en cours...',
  'auth.login.button.signin': 'Se connecter',
  'auth.login.divider': 'Ou',
  'auth.login.google.connecting': 'Connexion...',
  'auth.login.google.button': 'Se connecter avec Google',
  'auth.login.footer.question': 'Pas encore de compte ?',
  'auth.login.footer.create': 'Créer un compte',
  'auth.login.footer.home': 'Retour à l\'accueil',
  'auth.login.error.generic': 'Une erreur inattendue s\'est produite. Veuillez réessayer.',
  'auth.login.error.google': 'Échec de la connexion avec Google. Veuillez réessayer.',

  // Auth - Register
  'auth.register.title': 'Rejoindre le Voyage',
  'auth.register.name.label': 'Nom complet',
  'auth.register.name.placeholder': 'Votre nom complet',
  'auth.register.email.label': 'Adresse Email',
  'auth.register.email.placeholder': 'bonjour@dreamnova.com',
  'auth.register.password.label': 'Mot de passe',
  'auth.register.password.placeholder': '••••••••',
  'auth.register.password.hint': 'Au moins 8 caractères',
  'auth.register.confirm.label': 'Confirmer le mot de passe',
  'auth.register.confirm.placeholder': '••••••••',
  'auth.register.button.creating': 'Création du compte...',
  'auth.register.button.create': 'Créer un compte',
  'auth.register.divider': 'Ou',
  'auth.register.google.connecting': 'Connexion...',
  'auth.register.google.button': 'S\'inscrire avec Google',
  'auth.register.footer.question': 'Vous avez déjà un compte ?',
  'auth.register.footer.signin': 'Se connecter',
  'auth.register.footer.home': 'Retour à l\'accueil',
  'auth.register.error.nomatch': 'Les mots de passe ne correspondent pas.',
  'auth.register.error.minlength': 'Le mot de passe doit contenir au moins 8 caractères.',
  'auth.register.error.generic': 'Une erreur inattendue s\'est produite. Veuillez réessayer.',
  'auth.register.error.google': 'Échec de l\'inscription avec Google. Veuillez réessayer.',
  'auth.register.success.message': 'Compte créé ! Veuillez vérifier votre email avant de vous connecter.',
},
```

### 2.4 Répéter pour EN, ES, HE, ZH, KO, PT, DE, JA, IT, RU

Copier les clés de `I18N-KEYS-TO-ADD.md` et traduire pour chaque langue.

**ASTUCE:** Utiliser Google Translate ou DeepL pour les traductions initiales, puis affiner manuellement.

---

## ÉTAPE 3 — Modifier la page Login (30 min)

### 3.1 Ouvrir login/page.tsx

```bash
code src/app/\(auth\)/login/page.tsx
```

### 3.2 Importer useTranslation

Ajouter en haut du fichier:

```typescript
'use client';

import { useTranslation } from '@/hooks/useTranslation';
// ... autres imports ...
```

### 3.3 Utiliser le hook dans le composant

```typescript
export default function LoginPage() {
  const { t } = useTranslation();

  // ... reste du code ...
}
```

### 3.4 Remplacer les textes hardcodés

**AVANT:**
```typescript
<p className="text-light-gray font-display text-sm tracking-wider uppercase">
  Welcome Back
</p>
```

**APRÈS:**
```typescript
<p className="text-light-gray font-display text-sm tracking-wider uppercase">
  {t('auth.login.title')}
</p>
```

### 3.5 Liste complète des remplacements pour login/page.tsx

| Ligne | Texte hardcodé | Clé i18n |
|-------|----------------|----------|
| 101 | "Welcome Back" | `t('auth.login.title')` |
| 124 | "Email Address" | `t('auth.login.email.label')` |
| 133 | "hello@dreamnova.com" | `t('auth.login.email.placeholder')` |
| 144 | "Password" | `t('auth.login.password.label')` |
| 153 | "••••••••" | `t('auth.login.password.placeholder')` |
| 171 | "Signing In..." | `t('auth.login.button.signing')` |
| 175 | "Sign In" | `t('auth.login.button.signin')` |
| 184 | "Or" | `t('auth.login.divider')` |
| 198 | "Connecting..." | `t('auth.login.google.connecting')` |
| 203 | "Sign In with Google" | `t('auth.login.google.button')` |
| 212 | "Don't have an account?" | `t('auth.login.footer.question')` |
| 217 | "Create one" | `t('auth.login.footer.create')` |
| 222 | "Back to Home" | `t('auth.login.footer.home')` |
| 35 | "An unexpected error occurred..." | `t('auth.login.error.generic')` |
| 59 | "Failed to sign in with Google..." | `t('auth.login.error.google')` |

---

## ÉTAPE 4 — Modifier la page Register (30 min)

Suivre le même processus que pour Login.

### Remplacements pour register/page.tsx

| Ligne | Texte hardcodé | Clé i18n |
|-------|----------------|----------|
| 122 | "Join The Journey" | `t('auth.register.title')` |
| 145 | "Full Name" | `t('auth.register.name.label')` |
| 154 | "Your Full Name" | `t('auth.register.name.placeholder')` |
| 165 | "Email Address" | `t('auth.register.email.label')` |
| 174 | "hello@dreamnova.com" | `t('auth.register.email.placeholder')` |
| 185 | "Password" | `t('auth.register.password.label')` |
| 194 | "••••••••" | `t('auth.register.password.placeholder')` |
| 200 | "At least 8 characters" | `t('auth.register.password.hint')` |
| 206 | "Confirm Password" | `t('auth.register.confirm.label')` |
| 215 | "••••••••" | `t('auth.register.confirm.placeholder')` |
| 233 | "Creating Account..." | `t('auth.register.button.creating')` |
| 237 | "Create Account" | `t('auth.register.button.create')` |
| 246 | "Or" | `t('auth.register.divider')` |
| 260 | "Connecting..." | `t('auth.register.google.connecting')` |
| 265 | "Sign Up with Google" | `t('auth.register.google.button')` |
| 274 | "Already have an account?" | `t('auth.register.footer.question')` |
| 279 | "Sign in" | `t('auth.register.footer.signin')` |
| 284 | "Back to Home" | `t('auth.register.footer.home')` |
| 22 | "Passwords do not match." | `t('auth.register.error.nomatch')` |
| 27 | "Password must be at least 8 characters long." | `t('auth.register.error.minlength')` |
| 56 | "An unexpected error occurred..." | `t('auth.register.error.generic')` |
| 80 | "Failed to sign up with Google..." | `t('auth.register.error.google')` |
| 51-53 | "Account created! Please check your email..." | `t('auth.register.success.message')` |

---

## ÉTAPE 5 — Tester les pages Auth (15 min)

### 5.1 Lancer le serveur de développement

```bash
npm run dev
```

### 5.2 Tester login en FR

1. Ouvrir http://localhost:3000/login
2. Changer la langue en FR dans le sélecteur
3. Vérifier que TOUS les textes sont en français
4. Tester le formulaire (ne pas soumettre, juste vérifier l'UI)

### 5.3 Tester login en EN

Répéter le processus en anglais.

### 5.4 Tester login en HE (RTL)

Répéter le processus en hébreu.
**IMPORTANT:** Vérifier que le layout RTL fonctionne correctement.

### 5.5 Tester register de la même manière

Répéter pour /register en FR, EN, HE.

---

## ÉTAPE 6 — Répéter pour les autres pages

Suivre le même workflow pour:

1. **Portal pages** (unlock, tikkun, azamra)
   - Ajouter clés portal.* à i18n.ts
   - Modifier les 3 pages
   - Tester en FR/EN/HE

2. **Success page**
   - Ajouter clés success.* à i18n.ts
   - Modifier success/page.tsx
   - Tester en FR/EN/HE

3. **404 page**
   - Ajouter clés error.404.* à i18n.ts
   - Modifier not-found.tsx
   - Tester en FR/EN/HE

4. **Contact page**
   - Ajouter clés contact.* à i18n.ts
   - Modifier contact/page.tsx
   - Tester en FR/EN/HE

---

## ÉTAPE 7 — Tests de régression complets (1h)

### 7.1 Checklist par page

Pour CHAQUE page, tester les 11 langues:

```
Page: /login
✅ FR — Tous les textes traduits
✅ EN — Tous les textes traduits
✅ ES — Tous les textes traduits
✅ HE — Tous les textes traduits + RTL fonctionne
✅ ZH — Tous les textes traduits
✅ KO — Tous les textes traduits
✅ PT — Tous les textes traduits
✅ DE — Tous les textes traduits
✅ JA — Tous les textes traduits
✅ IT — Tous les textes traduits
✅ RU — Tous les textes traduits
```

### 7.2 Tests fonctionnels

- [ ] Les formulaires fonctionnent
- [ ] Les boutons sont cliquables
- [ ] Les messages d'erreur s'affichent
- [ ] Les placeholders sont traduits
- [ ] Aucune clé manquante (format: `auth.login.title`)
- [ ] Le layout RTL fonctionne pour l'hébreu
- [ ] Les prix sacrés sont corrects ($63, €63, ₪230, etc.)

---

## ÉTAPE 8 — Commit Git (5 min)

```bash
git add .
git commit -m "i18n: Add translations for Auth, Portal, Success, Contact, 404 pages

- Add 130+ translation keys to i18n.ts (11 languages)
- Implement useTranslation() in:
  - /login
  - /register
  - /unlock
  - /tikkun
  - /azamra
  - /success
  - /contact
  - /not-found
- Test all pages in FR, EN, HE (RTL)
- Mission: 26 pages now fully internationalized

Na Nach Nachma Nachman MeUman — Ein Ye'ush Ba'olam Klal"
```

---

## TEMPLATE DE MODIFICATION TYPE

Pour chaque page à modifier:

### AVANT (hardcodé):
```typescript
export default function PageName() {
  return (
    <div>
      <h1>Welcome Back</h1>
      <button>Sign In</button>
    </div>
  );
}
```

### APRÈS (i18n):
```typescript
'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function PageName() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('page.section.title')}</h1>
      <button>{t('page.section.button')}</button>
    </div>
  );
}
```

---

## TROUBLESHOOTING

### Problème: "Clé non trouvée" dans la console

**Solution:** Vérifier que la clé existe dans i18n.ts pour TOUTES les langues.

### Problème: RTL ne fonctionne pas pour l'hébreu

**Solution:** Vérifier que `dir: 'rtl'` est bien configuré dans LOCALES pour HE.

### Problème: Les prix sont hardcodés

**Solution:** Utiliser `locale.price`, `locale.pricePlatinum`, etc. au lieu de hardcoder $63.

### Problème: useTranslation() ne fonctionne pas

**Solution:** Vérifier que le composant est marqué `'use client'` en haut du fichier.

---

## PRIORITÉS

### SPRINT 1 (1 jour) — Auth
- [ ] Ajouter clés auth.* (33 clés × 11 langues)
- [ ] Modifier login.tsx
- [ ] Modifier register.tsx
- [ ] Tester FR/EN/HE

### SPRINT 2 (1 jour) — Portal
- [ ] Ajouter clés portal.* (43 clés × 11 langues)
- [ ] Modifier unlock.tsx
- [ ] Modifier tikkun.tsx
- [ ] Modifier azamra.tsx
- [ ] Tester FR/EN/HE

### SPRINT 3 (0.5 jour) — Success + 404
- [ ] Ajouter clés success.* et error.* (14 clés × 11 langues)
- [ ] Modifier success/page.tsx
- [ ] Modifier not-found.tsx
- [ ] Tester FR/EN/HE

### SPRINT 4 (0.5 jour) — Contact
- [ ] Ajouter clés contact.* (40 clés × 11 langues)
- [ ] Modifier contact/page.tsx
- [ ] Tester FR/EN/HE

### SPRINT 5 (1 jour) — Dashboard
- [ ] Vérifier implémentation actuelle
- [ ] Corriger si nécessaire
- [ ] Tester FR/EN/HE

---

## RÉSUMÉ

**Temps total estimé:** 4 jours (sans pages légales)

**Pages traduites:** 26
**Clés ajoutées:** 130-290
**Langues supportées:** 11

**Résultat final:**
- ✅ 100% du site traduit
- ✅ Expérience utilisateur cohérente
- ✅ Mission Hafatsa accessible mondialement
- ✅ $63M de revenus potentiels × 11 marchés

**Na Nach Nachma Nachman MeUman — Ein Ye'ush Ba'olam Klal**

---

*Guide créé le 2026-02-16 par Claude Code*
*DreamNova v1.0 — Sacred NFC Platform*
