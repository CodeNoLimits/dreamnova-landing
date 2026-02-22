// MEGA FIX ROUND 2: Fix all 111 remaining strings + fix user's misplaced success keys
const fs = require('fs');

// ============ STEP 0: Fix user's misplaced success keys ============
// User added success.title/message/note/button.access/button.share/button.home 
// for ALL locales into the FR block. Need to remove duplicates from FR and
// move to correct locale blocks
let i18n = fs.readFileSync('src/lib/i18n.ts', 'utf8');

// Remove the giant block of misplaced keys from FR section
// They start after 'success.home' and before 'success.dashboard'
const successKeysBlock = `    // Success Page
    'success.title': 'Ваше Путешествие Hafatsa Начинается',
    'success.message': 'Заказ подтвержден',
    'success.note': 'Ваш Nova Key готовится в Иерусалиме. Вы получите ссылку активации и данные NFC-ключа по электронной почте в ближайшее время.',
    'success.button.access': 'Доступ к Цифровому Контенту',
    'success.button.share': 'Поделиться с Другом',
    'success.button.home': '← Назад на Главную',

    // Success Page
    'success.title': 'Il Tuo Viaggio Hafatsa Inizia',
    'success.message': 'Ordine confermato',
    'success.note': 'La tua Nova Key è in preparazione a Gerusalemme. Riceverai il tuo link di attivazione e i dettagli della chiave NFC via email a breve.',
    'success.button.access': 'Accedi ai Contenuti Digitali',
    'success.button.share': 'Condividi con un Amico',
    'success.button.home': '← Torna alla Home',

    // Success Page
    'success.title': 'あなたのHafatsaの旅が始まります',
    'success.message': '注文が確認されました',
    'success.note': 'Nova Keyはエルサレムで準備中です。アクティベーションリンクとNFCキーの詳細がまもなくメールで届きます。',
    'success.button.access': 'デジタルコンテンツにアクセス',
    'success.button.share': '友達と共有',
    'success.button.home': '← ホームに戻る',

    // Success Page
    'success.title': 'Deine Hafatsa-Reise Beginnt',
    'success.message': 'Bestellung bestätigt',
    'success.note': 'Dein Nova Key wird in Jerusalem vorbereitet. Du erhältst deinen Aktivierungslink und NFC-Schlüssel-Details in Kürze per E-Mail.',
    'success.button.access': 'Zugriff auf Digitale Inhalte',
    'success.button.share': 'Mit einem Freund Teilen',
    'success.button.home': '← Zurück zur Startseite',

    // Success Page
    'success.title': 'Sua Jornada Hafatsa Começa',
    'success.message': 'Pedido confirmado',
    'success.note': 'Sua Nova Key está sendo preparada em Jerusalém. Você receberá seu link de ativação e detalhes da chave NFC por e-mail em breve.',
    'success.button.access': 'Acessar Conteúdo Digital',
    'success.button.share': 'Compartilhar com um Amigo',
    'success.button.home': '← Voltar ao Início',

    // Success Page
    'success.title': '당신의 Hafatsa 여정이 시작됩니다',
    'success.message': '주문 확인됨',
    'success.note': 'Nova Key가 예루살렘에서 준비 중입니다. 활성화 링크와 NFC 키 세부정보를 곧 이메일로 받으실 것입니다.',
    'success.button.access': '디지털 콘텐츠 액세스',
    'success.button.share': '친구와 공유',
    'success.button.home': '← 홈으로 돌아가기',

    // Success Page
    'success.title': '你的Hafatsa之旅开始了',
    'success.message': '订单已确认',
    'success.note': '你的Nova Key正在耶路撒冷准备中。你将很快通过电子邮件收到激活链接和NFC密钥详细信息。',
    'success.button.access': '访问数字内容',
    'success.button.share': '与朋友分享',
    'success.button.home': '← 返回首页',

    // Success Page
    'success.title': 'מסע ההפצה שלך מתחיל',
    'success.message': 'ההזמנה אושרה',
    'success.note': 'הנובה קי שלך מוכן בירושלים. תקבל את קישור ההפעלה ופרטי מפתח ה-NFC שלך בדוא"ל בקרוב.',
    'success.button.access': 'גישה לתוכן הדיגיטלי',
    'success.button.share': 'שתף עם חבר',
    'success.button.home': '← חזרה לדף הבית',

    // Success Page
    'success.title': 'Tu Viaje Hafatsa Comienza',
    'success.message': 'Pedido confirmado',
    'success.note': 'Tu Nova Key se está preparando en Jerusalén. Recibirás tu enlace de activación y los detalles de tu llave NFC por correo electrónico en breve.',
    'success.button.access': 'Acceder al Contenido Digital',
    'success.button.share': 'Compartir con un Amigo',
    'success.button.home': '← Volver al Inicio',

    // Success Page
    'success.title': 'Your Hafatsa Journey Begins',
    'success.message': 'Order confirmed',
    'success.note': 'Your Nova Key is being prepared in Jerusalem. You will receive your activation link and NFC key details via email shortly.',
    'success.button.access': 'Access Digital Content',
    'success.button.share': 'Share with a Friend',
    'success.button.home': '← Back to Home',

    // Success Page
    'success.title': 'Votre Voyage Hafatsa Commence',
    'success.message': 'Commande confirmée',
    'success.note': 'Votre Nova Key est en préparation à Jérusalem. Vous recevrez votre lien d\\'activation et les détails de votre clé NFC par email sous peu.',
    'success.button.access': 'Accéder au Contenu Digital',
    'success.button.share': 'Partager avec un Ami',
    'success.button.home': "← Retour à l'Accueil",
`;

// Remove this block from wherever it is
if (i18n.includes("'success.title': 'Ваше Путешествие")) {
  i18n = i18n.replace(successKeysBlock, '');
  console.log('0. Removed misplaced success keys block from FR');
}

// Now add the correct success keys to each locale
const successKeys = {
  fr: {
    'success.title': 'Votre Voyage Hafatsa Commence',
    'success.note': "Votre Nova Key est en préparation à Jérusalem. Vous recevrez votre lien d'activation par email sous peu.",
    'success.button.access': 'Accéder au Contenu Digital',
    'success.button.share': 'Partager avec un Ami',
    'success.button.home': "← Retour à l'Accueil",
  },
  en: {
    'success.title': 'Your Hafatsa Journey Begins',
    'success.note': 'Your Nova Key is being prepared in Jerusalem. You will receive your activation link and NFC key details via email shortly.',
    'success.button.access': 'Access Digital Content',
    'success.button.share': 'Share with a Friend',
    'success.button.home': '← Back to Home',
  },
  es: {
    'success.title': 'Tu Viaje Hafatsa Comienza',
    'success.note': 'Tu Nova Key se está preparando en Jerusalén. Recibirás tu enlace de activación por correo electrónico en breve.',
    'success.button.access': 'Acceder al Contenido Digital',
    'success.button.share': 'Compartir con un Amigo',
    'success.button.home': '← Volver al Inicio',
  },
  he: {
    'success.title': 'מסע ההפצה שלך מתחיל',
    'success.note': 'הנובה קי שלך מוכן בירושלים. תקבל את קישור ההפעלה בדוא"ל בקרוב.',
    'success.button.access': 'גישה לתוכן הדיגיטלי',
    'success.button.share': 'שתף עם חבר',
    'success.button.home': '← חזרה לדף הבית',
  },
  zh: {
    'success.title': '你的Hafatsa之旅开始了',
    'success.note': '你的Nova Key正在耶路撒冷准备中。你将很快通过电子邮件收到激活链接。',
    'success.button.access': '访问数字内容',
    'success.button.share': '与朋友分享',
    'success.button.home': '← 返回首页',
  },
  ko: {
    'success.title': '당신의 Hafatsa 여정이 시작됩니다',
    'success.note': 'Nova Key가 예루살렘에서 준비 중입니다. 활성화 링크와 NFC 키 세부정보를 곧 이메일로 받으실 것입니다.',
    'success.button.access': '디지털 콘텐츠 액세스',
    'success.button.share': '친구와 공유',
    'success.button.home': '← 홈으로 돌아가기',
  },
  pt: {
    'success.title': 'Sua Jornada Hafatsa Começa',
    'success.note': 'Sua Nova Key está sendo preparada em Jerusalém. Você receberá seu link de ativação por e-mail em breve.',
    'success.button.access': 'Acessar Conteúdo Digital',
    'success.button.share': 'Compartilhar com um Amigo',
    'success.button.home': '← Voltar ao Início',
  },
  de: {
    'success.title': 'Deine Hafatsa-Reise Beginnt',
    'success.note': 'Dein Nova Key wird in Jerusalem vorbereitet. Du erhältst deinen Aktivierungslink in Kürze per E-Mail.',
    'success.button.access': 'Zugriff auf Digitale Inhalte',
    'success.button.share': 'Mit einem Freund Teilen',
    'success.button.home': '← Zurück zur Startseite',
  },
  ja: {
    'success.title': 'あなたのHafatsaの旅が始まります',
    'success.note': 'Nova Keyはエルサレムで準備中です。アクティベーションリンクがまもなくメールで届きます。',
    'success.button.access': 'デジタルコンテンツにアクセス',
    'success.button.share': '友達と共有',
    'success.button.home': '← ホームに戻る',
  },
  it: {
    'success.title': 'Il Tuo Viaggio Hafatsa Inizia',
    'success.note': 'La tua Nova Key è in preparazione a Gerusalemme. Riceverai il tuo link di attivazione via email a breve.',
    'success.button.access': 'Accedi ai Contenuti Digitali',
    'success.button.share': 'Condividi con un Amico',
    'success.button.home': '← Torna alla Home',
  },
};

fs.writeFileSync('src/lib/i18n.ts', i18n);
console.log('0. i18n.ts cleaned');

// Save success keys for injection
fs.writeFileSync('success-keys.json', JSON.stringify(successKeys, null, 2));

// ============ STEP 1: Fix all page files ============

// --- Dashboard layout ---
let layout = fs.readFileSync('src/app/(dashboard)/layout.tsx', 'utf8');
if (!layout.includes('useTranslation')) {
  layout = layout.replace("'use client';", "'use client';\n\nimport { useTranslation } from '@/lib/LanguageContext';");
  layout = layout.replace(/(export default function \w+\([^)]*\)\s*\{)/, '$1\n  const { t } = useTranslation();');
}
layout = layout.replace(/label: "Overview"/g, "labelKey: 'dash.nav.overview'");
layout = layout.replace(/label: "Orders"/g, "labelKey: 'dash.nav.orders'");
layout = layout.replace(/label: "Analytics"/g, "labelKey: 'dash.nav.analytics'");
layout = layout.replace(/label: "NFC Keys"/g, "labelKey: 'dash.nav.nfc'");
layout = layout.replace(/label: "Waitlist"/g, "labelKey: 'dash.nav.waitlist'");
layout = layout.replace(/label: "Academics"/g, "labelKey: 'dash.nav.academics'");
layout = layout.replace(/label: "Grants"/g, "labelKey: 'dash.nav.grants'");
layout = layout.replace(/label: "Hafatsa"/g, "labelKey: 'dash.nav.hafatsa'");
layout = layout.replace(/label: "Settings"/g, "labelKey: 'dash.nav.settings'");
layout = layout.replace(/{item\.label}/g, '{t(item.labelKey)}');
layout = layout.replace(/{link\.label}/g, '{t(link.labelKey)}');
fs.writeFileSync('src/app/(dashboard)/layout.tsx', layout);
console.log('1. dashboard/layout.tsx: nav labels fixed');

// --- Dashboard overview: remaining labels ---
let overview = fs.readFileSync('src/app/(dashboard)/overview/page.tsx', 'utf8');
overview = overview.replace(/>Dashboard</g, '>{t("dash.title")}<');
overview = overview.replace(/label: "Total Revenue"/g, "labelKey: 'dash.revenue'");
overview = overview.replace(/label: "Orders"/g, "labelKey: 'dash.orders'");
overview = overview.replace(/label: "Waitlist"/g, "labelKey: 'dash.waitlist'");
overview = overview.replace(/{stat\.label}/g, '{t(stat.labelKey)}');
fs.writeFileSync('src/app/(dashboard)/overview/page.tsx', overview);
console.log('2. dashboard/overview: remaining fixes');

// --- Dashboard orders ---
let orders = fs.readFileSync('src/app/(dashboard)/orders/page.tsx', 'utf8');
orders = orders.replace(/>Orders</g, '>{t("orders.title")}<');
orders = orders.replace(/>Delivered</g, '>{t("orders.delivered")}<');
orders = orders.replace(/>Product</g, '>{t("orders.product")}<');
orders = orders.replace(/>Status</g, '>{t("orders.status")}<');
orders = orders.replace(/>Amount</g, '>{t("orders.amount")}<');
fs.writeFileSync('src/app/(dashboard)/orders/page.tsx', orders);
console.log('3. dashboard/orders: table headers fixed');

// --- Dashboard settings ---
let sett = fs.readFileSync('src/app/(dashboard)/settings/page.tsx', 'utf8');
sett = sett.replace(/>Settings</g, '>{t("settings.title")}<');
sett = sett.replace(/>Promotions</g, '>{t("settings.promotions")}<');
fs.writeFileSync('src/app/(dashboard)/settings/page.tsx', sett);
console.log('4. dashboard/settings: title + promotions');

// --- Dashboard hafatsa ---
let haf = fs.readFileSync('src/app/(dashboard)/hafatsa/page.tsx', 'utf8');
haf = haf.replace(/>Current Level</g, '>{t("hafatsa.level")}<');
haf = haf.replace(/>Referrals</g, '>{t("hafatsa.referrals")}<');
haf = haf.replace(/>Conversions</g, '>{t("hafatsa.conversions")}<');
haf = haf.replace(/description: "Shared with friend"/g, "descKey: 'hafatsa.shared.friend'");
haf = haf.replace(/description: "Friend made purchase"/g, "descKey: 'hafatsa.friend.purchase'");
haf = haf.replace(/description: "Free distribution at community"/g, "descKey: 'hafatsa.free.dist'");
haf = haf.replace(/description: "Shared via social media"/g, "descKey: 'hafatsa.shared.social'");
haf = haf.replace(/{activity\.description}/g, '{t(activity.descKey)}');
fs.writeFileSync('src/app/(dashboard)/hafatsa/page.tsx', haf);
console.log('5. dashboard/hafatsa: labels + activity descriptions');

// --- NFC page ---
let nfc = fs.readFileSync('src/app/(dashboard)/nfc/page.tsx', 'utf8');
nfc = nfc.replace(/>Total Scans</g, '>{t("nfc.total.scans")}<');
nfc = nfc.replace(/name: "Main Nova Key"/g, "nameKey: 'nfc.key.main'");
nfc = nfc.replace(/name: "Community Event Key"/g, "nameKey: 'nfc.key.community'");
nfc = nfc.replace(/name: "Platinum Edition"/g, "nameKey: 'nfc.key.platinum'");
nfc = nfc.replace(/name: "Backup Key"/g, "nameKey: 'nfc.key.backup'");
nfc = nfc.replace(/{novaKey\.name}/g, '{t(novaKey.nameKey)}');
nfc = nfc.replace(/placeholder="Tap your key to scan UID"/g, 'placeholder={t("nfc.placeholder.scan")}');
fs.writeFileSync('src/app/(dashboard)/nfc/page.tsx', nfc);
console.log('6. dashboard/nfc: key names + placeholder');

// --- Covenant-pack ---
let cov = fs.readFileSync('src/app/(marketing)/covenant-pack/page.tsx', 'utf8');
cov = cov.replace(/>Editions</g, '>{t("covenant.editions")}<');
cov = cov.replace(/>Feature</g, '>{t("covenant.feature")}<');
cov = cov.replace(/>Standard</g, '>{t("covenant.standard")}<');
cov = cov.replace(/>Platinum</g, '>{t("covenant.platinum")}<');
cov = cov.replace(/>Pair</g, '>{t("covenant.pair")}<');
fs.writeFileSync('src/app/(marketing)/covenant-pack/page.tsx', cov);
console.log('7. covenant-pack: edition table headers');

// --- Source code residual ---
let src = fs.readFileSync('src/app/(marketing)/source-code/page.tsx', 'utf8');
src = src.replace(/>Research</g, '>{t("sc.research")}<');
fs.writeFileSync('src/app/(marketing)/source-code/page.tsx', src);
console.log('8. source-code: "Research" label');

// --- Contact page ---
let contact = fs.readFileSync('src/app/(marketing)/contact/page.tsx', 'utf8');
contact = contact.replace(/placeholder="Your name"/g, 'placeholder={t("contact.placeholder.name")}');
contact = contact.replace(/>Location</g, '>{t("contact.location.title")}<');
contact = contact.replace(/>Questions</g, '>{t("contact.questions")}<');
contact = contact.replace(/>Error sending message</g, '>{t("contact.error")}<');
fs.writeFileSync('src/app/(marketing)/contact/page.tsx', contact);
console.log('9. contact: placeholder + labels');

// --- Pricing section ---
let pricing = fs.readFileSync('src/components/marketing/pricing-section.tsx', 'utf8');
pricing = pricing.replace(/label: "Shipping"/g, "labelKey: 'pricing.shipping'");
pricing = pricing.replace(/label: "Digital Platform"/g, "labelKey: 'pricing.digital'");
pricing = pricing.replace(/>Total</g, '>{t("pricing.total")}<');
if (!pricing.includes('useTranslation')) {
  pricing = pricing.replace("'use client';", "'use client';\n\nimport { useTranslation } from '@/lib/LanguageContext';");
}
fs.writeFileSync('src/components/marketing/pricing-section.tsx', pricing);
console.log('10. pricing-section: labels');

// --- Checkout ---
let checkout = fs.readFileSync('src/app/(shop)/checkout/page.tsx', 'utf8');
checkout = checkout.replace(/>Quantity</g, '>{t("checkout.quantity")}<');
fs.writeFileSync('src/app/(shop)/checkout/page.tsx', checkout);
console.log('11. checkout: Quantity');

// --- Language selector ---
let langSel = fs.readFileSync('src/components/shared/language-selector.tsx', 'utf8');
langSel = langSel.replace(/aria-label="Select language"/g, 'aria-label={t("aria.select.language")}');
fs.writeFileSync('src/components/shared/language-selector.tsx', langSel);
console.log('12. language-selector: aria-label');

// --- Privacy/Terms/Refund page title JSX ---
for (const [file, key] of [
  ['src/app/(marketing)/privacy/page.tsx', 'privacy.page.title'],
  ['src/app/(marketing)/terms/page.tsx', 'terms.page.title'],
  ['src/app/(marketing)/refund/page.tsx', 'refund.page.title'],
]) {
  let content = fs.readFileSync(file, 'utf8');
  const name = file.includes('privacy') ? 'Privacy' : file.includes('terms') ? 'Terms' : 'Refund';
  content = content.replace(new RegExp(`>${name}<`), `>{t("${key}")}<`);
  fs.writeFileSync(file, content);
}
console.log('13. legal pages: page title labels');

console.log('\n✅ All page fixes applied!');
console.log('Next: inject new keys to i18n.ts');
