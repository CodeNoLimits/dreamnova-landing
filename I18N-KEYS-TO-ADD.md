# Clés i18n à ajouter — DreamNova

**FICHIER CIBLE:** `src/lib/i18n.ts`

Ce fichier contient TOUTES les clés de traduction manquantes, organisées par section.
Copier-coller directement dans i18n.ts pour chaque langue.

---

## 🟠 AUTH — Login/Register (33 clés)

```typescript
// Auth - Login
'auth.login.title': 'Welcome Back',
'auth.login.email.label': 'Email Address',
'auth.login.email.placeholder': 'hello@dreamnova.com',
'auth.login.password.label': 'Password',
'auth.login.password.placeholder': '••••••••',
'auth.login.button.signing': 'Signing In...',
'auth.login.button.signin': 'Sign In',
'auth.login.divider': 'Or',
'auth.login.google.connecting': 'Connecting...',
'auth.login.google.button': 'Sign In with Google',
'auth.login.footer.question': 'Don\'t have an account?',
'auth.login.footer.create': 'Create one',
'auth.login.footer.home': 'Back to Home',
'auth.login.error.generic': 'An unexpected error occurred. Please try again.',
'auth.login.error.google': 'Failed to sign in with Google. Please try again.',

// Auth - Register
'auth.register.title': 'Join The Journey',
'auth.register.name.label': 'Full Name',
'auth.register.name.placeholder': 'Your Full Name',
'auth.register.email.label': 'Email Address',
'auth.register.email.placeholder': 'hello@dreamnova.com',
'auth.register.password.label': 'Password',
'auth.register.password.placeholder': '••••••••',
'auth.register.password.hint': 'At least 8 characters',
'auth.register.confirm.label': 'Confirm Password',
'auth.register.confirm.placeholder': '••••••••',
'auth.register.button.creating': 'Creating Account...',
'auth.register.button.create': 'Create Account',
'auth.register.divider': 'Or',
'auth.register.google.connecting': 'Connecting...',
'auth.register.google.button': 'Sign Up with Google',
'auth.register.footer.question': 'Already have an account?',
'auth.register.footer.signin': 'Sign in',
'auth.register.footer.home': 'Back to Home',
'auth.register.error.nomatch': 'Passwords do not match.',
'auth.register.error.minlength': 'Password must be at least 8 characters long.',
'auth.register.error.generic': 'An unexpected error occurred. Please try again.',
'auth.register.error.google': 'Failed to sign up with Google. Please try again.',
'auth.register.success.message': 'Account created! Please check your email to verify your account before signing in.',
```

---

## 🟡 PORTAL — Unlock/Tikkun/Azamra (43 clés)

```typescript
// Portal - Unlock
'portal.unlock.title': 'Your Nova Key is Alive',
'portal.unlock.key': 'Key:',
'portal.unlock.scan': 'Scan your Nova Key to begin',
'portal.unlock.tikkun.title': 'Tikkun HaKlali',
'portal.unlock.tikkun.desc': 'The General Remedy of the Ten Psalms',
'portal.unlock.azamra.title': 'Azamra Meditation',
'portal.unlock.azamra.desc': 'Find the Good Point within yourself',
'portal.unlock.source.title': 'Source Code Paper',
'portal.unlock.source.desc': 'The foundation of your transformation',

// Portal - Tikkun
'portal.tikkun.nav.back': 'Back to Portal',
'portal.tikkun.title.hebrew': 'תיקון הכללי',
'portal.tikkun.title': 'Tikkun HaKlali — The General Remedy',
'portal.tikkun.description': 'The ten psalms revealed by Rabbi Nachman of Breslev to elevate consciousness and repair the soul. Each psalm holds the key to a different spiritual chamber.',
'portal.tikkun.practice.title': 'The Sacred Practice',
'portal.tikkun.practice.desc': 'Recite or read one psalm daily, or all ten in one sitting. Each psalm addresses a specific spiritual blockage and activates the corresponding energy within the soul.',
'portal.tikkun.practice.note': 'The Tikkun HaKlali is considered so powerful that it can heal even the deepest spiritual wounds. Rabbi Nachman promised that whoever recites these ten psalms with intention will experience profound healing and elevation.',
'portal.tikkun.nav.next': 'Next: Azamra',
'portal.tikkun.psalm.16': 'Shomer Yisrael',
'portal.tikkun.psalm.32': 'Ashrei Nesui Pesha',
'portal.tikkun.psalm.41': 'Ashrei Maskil',
'portal.tikkun.psalm.42': 'Katzir Ayil',
'portal.tikkun.psalm.59': 'Al Tashet Lamduni',
'portal.tikkun.psalm.77': 'Koli El Elohim',
'portal.tikkun.psalm.90': 'Tefillah Lemoshe',
'portal.tikkun.psalm.105': 'Hodu LaEternal',
'portal.tikkun.psalm.137': 'Al Naharот Bavel',
'portal.tikkun.psalm.150': 'Halleluyah',

// Portal - Azamra
'portal.azamra.nav.back': 'Back to Portal',
'portal.azamra.nav.tikkun': 'Back to Tikkun',
'portal.azamra.nav.home': 'Portal Home',
'portal.azamra.title.hebrew': 'אזמרה',
'portal.azamra.title': 'Azamra — Find the Good Point',
'portal.azamra.subtitle.hebrew': 'אזמרה לאלקי בעודי — I will sing to my God with what I have left',
'portal.azamra.subtitle': 'The meditation of finding and celebrating the good within yourself.',
'portal.azamra.quote': 'When you find the good point within yourself, you find the good point within all of creation.',
'portal.azamra.quote.author': '— Rabbi Nachman of Breslev',
'portal.azamra.timer.title': 'Meditation Timer',
'portal.azamra.timer.5min': '5 min',
'portal.azamra.timer.10min': '10 min',
'portal.azamra.timer.15min': '15 min',
'portal.azamra.timer.pause': 'Pause',
'portal.azamra.timer.start': 'Start Meditation',
'portal.azamra.timer.complete': 'Meditation Complete! May your soul be elevated.',
'portal.azamra.journal.title': 'Nekuda Tova — Your Good Point',
'portal.azamra.journal.desc': 'Write what goodness, strength, or light you discovered in yourself during this meditation.',
'portal.azamra.journal.placeholder': 'What is your good point today? What light remains within you?',
'portal.azamra.journal.saved': 'Saved',
'portal.azamra.journal.save': 'Save Your Good Point',
```

---

## 🟢 SUCCESS PAGE (6 clés)

```typescript
'success.title': 'Your Hafatsa Journey Begins',
'success.message': 'Order confirmed',
'success.note': 'Your Nova Key is being prepared in Jerusalem. You will receive your activation link and NFC key details via email shortly.',
'success.button.access': 'Access Digital Content',
'success.button.share': 'Share with a Friend',
'success.button.home': '← Back to Home',
```

---

## ⚪ ERROR 404 (8 clés)

```typescript
'error.404.quote1': 'The Aim Sof contains all wisdom; sometimes a page exists only in the infinite.',
'error.404.quote2': 'A missing page is but a reflection of the hidden worlds within.',
'error.404.quote3': 'In every error, there is a teaching from the Tzaddik.',
'error.404.quote4': 'This page has merged with the Nothingness to teach you something greater.',
'error.404.title': 'This page has returned to the Ain Sof',
'error.404.author': '— Rabbi Nachman of Breslev',
'error.404.desc': 'The path you seek does not yet exist in this realm. Return home and begin your true journey.',
'error.404.button': 'Return Home',
```

---

## 🔵 CONTACT PAGE (40 clés)

```typescript
// Contact - Hero
'contact.hero.title': 'Get in Touch',
'contact.hero.desc': 'Have questions about Dream Nova? We\'re here to help you on your transformation journey.',

// Contact - Form
'contact.form.name': 'Full Name',
'contact.form.name.placeholder': 'Your name',
'contact.form.email': 'Email Address',
'contact.form.email.placeholder': 'your@email.com',
'contact.form.message': 'Message',
'contact.form.message.placeholder': 'Tell us about your inquiry...',
'contact.form.sending': 'Sending...',
'contact.form.send': 'Send Message',
'contact.form.success': 'Message sent successfully! We\'ll get back to you soon.',
'contact.form.error': 'Error sending message',

// Contact - Info Sidebar
'contact.info.company': 'Dream Nova',
'contact.info.location': 'Location',
'contact.info.location.value': 'Jerusalem, Israel',
'contact.info.email': 'Email',
'contact.info.response': 'Response Time',
'contact.info.response.value': 'Within 24 hours',
'contact.card.quick.title': 'Quick Response',
'contact.card.quick.desc': 'Our team typically responds to inquiries within 24 hours on business days.',
'contact.card.secure.title': 'Secure & Confidential',
'contact.card.secure.desc': 'Your information is protected and treated with complete confidentiality.',

// Contact - FAQ
'contact.faq.title': 'Frequently Asked Questions',
'contact.faq.delivery.q': 'How long does delivery take?',
'contact.faq.delivery.a': 'Nova Keys are shipped within 5-7 business days. Standard shipping typically takes 7-14 days.',
'contact.faq.warranty.q': 'Is there a warranty?',
'contact.faq.warranty.a': 'Yes, all Nova Keys come with a lifetime warranty covering manufacturing defects.',
'contact.faq.return.q': 'Can I return my order?',
'contact.faq.return.a': 'We offer a 30-day satisfaction guarantee. If you are not satisfied, we will provide a full refund.',
'contact.faq.activation.q': 'What is the activation process?',
'contact.faq.activation.a': 'Simply scan your Nova Key with any NFC-enabled device. Activation is instant and permanent.',
```

---

## TOTAL: 130 clés essentielles

### Breakdown:
- Auth: 33 clés
- Portal: 43 clés
- Success: 6 clés
- 404: 8 clés
- Contact: 40 clés

### Pages légales (OPTIONNEL):
- Privacy: ~50 clés
- Terms: ~60 clés
- Refund: ~50 clés

**Si pages légales incluses:** +160 clés = **290 clés totales**

---

## Template de traduction FR

Exemple pour copier-coller dans le bloc `fr: { ... }` de i18n.ts:

```typescript
fr: {
  // ... clés existantes ...

  // AUTH
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

  // PORTAL
  'portal.unlock.title': 'Votre Nova Key est Vivante',
  'portal.unlock.key': 'Clé :',
  'portal.unlock.scan': 'Scannez votre Nova Key pour commencer',
  'portal.unlock.tikkun.title': 'Tikkun HaKlali',
  'portal.unlock.tikkun.desc': 'Le Remède Général des Dix Psaumes',
  'portal.unlock.azamra.title': 'Méditation Azamra',
  'portal.unlock.azamra.desc': 'Trouvez le Point de Bien en vous-même',
  'portal.unlock.source.title': 'Papier Source Code',
  'portal.unlock.source.desc': 'Le fondement de votre transformation',

  'portal.tikkun.nav.back': 'Retour au Portail',
  'portal.tikkun.title.hebrew': 'תיקון הכללי',
  'portal.tikkun.title': 'Tikkun HaKlali — Le Remède Général',
  'portal.tikkun.description': 'Les dix psaumes révélés par Rabbi Nachman de Breslev pour élever la conscience et réparer l\'âme. Chaque psaume détient la clé d\'une chambre spirituelle différente.',
  'portal.tikkun.practice.title': 'La Pratique Sacrée',
  'portal.tikkun.practice.desc': 'Récitez ou lisez un psaume par jour, ou les dix en une seule séance. Chaque psaume traite d\'un blocage spirituel spécifique et active l\'énergie correspondante dans l\'âme.',
  'portal.tikkun.practice.note': 'Le Tikkun HaKlali est considéré si puissant qu\'il peut guérir même les blessures spirituelles les plus profondes. Rabbi Nachman a promis que quiconque récite ces dix psaumes avec intention connaîtra une guérison et une élévation profondes.',
  'portal.tikkun.nav.next': 'Suivant : Azamra',
  'portal.tikkun.psalm.16': 'Shomer Yisrael',
  'portal.tikkun.psalm.32': 'Ashrei Nesui Pesha',
  'portal.tikkun.psalm.41': 'Ashrei Maskil',
  'portal.tikkun.psalm.42': 'Katzir Ayil',
  'portal.tikkun.psalm.59': 'Al Tashet Lamduni',
  'portal.tikkun.psalm.77': 'Koli El Elohim',
  'portal.tikkun.psalm.90': 'Tefillah Lemoshe',
  'portal.tikkun.psalm.105': 'Hodu LaEternal',
  'portal.tikkun.psalm.137': 'Al Naharот Bavel',
  'portal.tikkun.psalm.150': 'Halleluyah',

  'portal.azamra.nav.back': 'Retour au Portail',
  'portal.azamra.nav.tikkun': 'Retour à Tikkun',
  'portal.azamra.nav.home': 'Accueil Portail',
  'portal.azamra.title.hebrew': 'אזמרה',
  'portal.azamra.title': 'Azamra — Trouvez le Point de Bien',
  'portal.azamra.subtitle.hebrew': 'אזמרה לאלקי בעודי — Je chanterai à mon Dieu avec ce qui me reste',
  'portal.azamra.subtitle': 'La méditation pour trouver et célébrer le bien en vous-même.',
  'portal.azamra.quote': 'Quand vous trouvez le point de bien en vous-même, vous trouvez le point de bien dans toute la création.',
  'portal.azamra.quote.author': '— Rabbi Nachman de Breslev',
  'portal.azamra.timer.title': 'Timer de Méditation',
  'portal.azamra.timer.5min': '5 min',
  'portal.azamra.timer.10min': '10 min',
  'portal.azamra.timer.15min': '15 min',
  'portal.azamra.timer.pause': 'Pause',
  'portal.azamra.timer.start': 'Commencer la Méditation',
  'portal.azamra.timer.complete': 'Méditation Terminée ! Que votre âme soit élevée.',
  'portal.azamra.journal.title': 'Nekuda Tova — Votre Point de Bien',
  'portal.azamra.journal.desc': 'Écrivez quelle bonté, force ou lumière vous avez découverte en vous pendant cette méditation.',
  'portal.azamra.journal.placeholder': 'Quel est votre point de bien aujourd\'hui ? Quelle lumière reste en vous ?',
  'portal.azamra.journal.saved': 'Sauvegardé',
  'portal.azamra.journal.save': 'Sauvegarder Votre Point de Bien',

  // SUCCESS
  'success.title': 'Votre Voyage Hafatsa Commence',
  'success.message': 'Commande confirmée',
  'success.note': 'Votre Nova Key est en préparation à Jérusalem. Vous recevrez votre lien d\'activation et les détails de votre clé NFC par email sous peu.',
  'success.button.access': 'Accéder au Contenu Digital',
  'success.button.share': 'Partager avec un Ami',
  'success.button.home': '← Retour à l\'Accueil',

  // ERROR 404
  'error.404.quote1': 'L\'Aïn Sof contient toute sagesse ; parfois une page n\'existe que dans l\'infini.',
  'error.404.quote2': 'Une page manquante n\'est qu\'un reflet des mondes cachés à l\'intérieur.',
  'error.404.quote3': 'Dans chaque erreur, il y a un enseignement du Tzaddik.',
  'error.404.quote4': 'Cette page a fusionné avec le Néant pour vous enseigner quelque chose de plus grand.',
  'error.404.title': 'Cette page est retournée à l\'Aïn Sof',
  'error.404.author': '— Rabbi Nachman de Breslev',
  'error.404.desc': 'Le chemin que vous cherchez n\'existe pas encore dans ce royaume. Retournez à l\'accueil et commencez votre véritable voyage.',
  'error.404.button': 'Retour à l\'Accueil',

  // CONTACT
  'contact.hero.title': 'Contactez-nous',
  'contact.hero.desc': 'Des questions sur Dream Nova ? Nous sommes là pour vous aider dans votre voyage de transformation.',
  'contact.form.name': 'Nom complet',
  'contact.form.name.placeholder': 'Votre nom',
  'contact.form.email': 'Adresse Email',
  'contact.form.email.placeholder': 'votre@email.com',
  'contact.form.message': 'Message',
  'contact.form.message.placeholder': 'Parlez-nous de votre demande...',
  'contact.form.sending': 'Envoi en cours...',
  'contact.form.send': 'Envoyer le Message',
  'contact.form.success': 'Message envoyé avec succès ! Nous vous répondrons bientôt.',
  'contact.form.error': 'Erreur lors de l\'envoi du message',
  'contact.info.company': 'Dream Nova',
  'contact.info.location': 'Localisation',
  'contact.info.location.value': 'Jérusalem, Israël',
  'contact.info.email': 'Email',
  'contact.info.response': 'Temps de Réponse',
  'contact.info.response.value': 'Sous 24 heures',
  'contact.card.quick.title': 'Réponse Rapide',
  'contact.card.quick.desc': 'Notre équipe répond généralement aux demandes sous 24 heures les jours ouvrés.',
  'contact.card.secure.title': 'Sécurisé et Confidentiel',
  'contact.card.secure.desc': 'Vos informations sont protégées et traitées en toute confidentialité.',
  'contact.faq.title': 'Questions Fréquemment Posées',
  'contact.faq.delivery.q': 'Combien de temps prend la livraison ?',
  'contact.faq.delivery.a': 'Les Nova Keys sont expédiées sous 5-7 jours ouvrés. La livraison standard prend généralement 7-14 jours.',
  'contact.faq.warranty.q': 'Y a-t-il une garantie ?',
  'contact.faq.warranty.a': 'Oui, toutes les Nova Keys sont couvertes par une garantie à vie contre les défauts de fabrication.',
  'contact.faq.return.q': 'Puis-je retourner ma commande ?',
  'contact.faq.return.a': 'Nous offrons une garantie de satisfaction de 30 jours. Si vous n\'êtes pas satisfait, nous vous rembourserons intégralement.',
  'contact.faq.activation.q': 'Quel est le processus d\'activation ?',
  'contact.faq.activation.a': 'Il suffit de scanner votre Nova Key avec n\'importe quel appareil compatible NFC. L\'activation est instantanée et permanente.',
}
```

---

## Notes importantes

### Textes hébreux
Les textes sacrés hébreux (תיקון הכללי, אזמרה, etc.) doivent être CONSERVÉS dans TOUTES les langues.

### Gématrie
Les prix ($63, $99, $149, $491) sont gérés par LOCALES. Ne pas les hardcoder dans les traductions.

### Direction RTL
L'hébreu (HE) utilise `dir: 'rtl'`. Vérifier que tous les layouts supportent RTL.

---

*Na Nach Nachma Nachman MeUman*
