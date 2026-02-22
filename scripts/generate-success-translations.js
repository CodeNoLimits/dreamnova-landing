const fs = require('fs');
const path = require('path');

// SUCCESS KEYS (English)
const SUCCESS_KEYS_EN = {
  'success.title': 'Your Hafatsa Journey Begins',
  'success.message': 'Order confirmed',
  'success.note': 'Your Nova Key is being prepared in Jerusalem. You will receive your activation link and NFC key details via email shortly.',
  'success.button.access': 'Access Digital Content',
  'success.button.share': 'Share with a Friend',
  'success.button.home': '← Back to Home',
};

// SUCCESS TRANSLATIONS (All 11 Languages)
const SUCCESS_TRANSLATIONS = {
  fr: {
    'success.title': 'Votre Voyage Hafatsa Commence',
    'success.message': 'Commande confirmée',
    'success.note': 'Votre Nova Key est en préparation à Jérusalem. Vous recevrez votre lien d\'activation et les détails de votre clé NFC par email sous peu.',
    'success.button.access': 'Accéder au Contenu Digital',
    'success.button.share': 'Partager avec un Ami',
    'success.button.home': '← Retour à l\'Accueil',
  },
  en: SUCCESS_KEYS_EN,
  es: {
    'success.title': 'Tu Viaje Hafatsa Comienza',
    'success.message': 'Pedido confirmado',
    'success.note': 'Tu Nova Key se está preparando en Jerusalén. Recibirás tu enlace de activación y los detalles de tu llave NFC por correo electrónico en breve.',
    'success.button.access': 'Acceder al Contenido Digital',
    'success.button.share': 'Compartir con un Amigo',
    'success.button.home': '← Volver al Inicio',
  },
  he: {
    'success.title': 'מסע ההפצה שלך מתחיל',
    'success.message': 'ההזמנה אושרה',
    'success.note': 'הנובה קי שלך מוכן בירושלים. תקבל את קישור ההפעלה ופרטי מפתח ה-NFC שלך בדוא"ל בקרוב.',
    'success.button.access': 'גישה לתוכן הדיגיטלי',
    'success.button.share': 'שתף עם חבר',
    'success.button.home': '← חזרה לדף הבית',
  },
  zh: {
    'success.title': '你的Hafatsa之旅开始了',
    'success.message': '订单已确认',
    'success.note': '你的Nova Key正在耶路撒冷准备中。你将很快通过电子邮件收到激活链接和NFC密钥详细信息。',
    'success.button.access': '访问数字内容',
    'success.button.share': '与朋友分享',
    'success.button.home': '← 返回首页',
  },
  ko: {
    'success.title': '당신의 Hafatsa 여정이 시작됩니다',
    'success.message': '주문 확인됨',
    'success.note': 'Nova Key가 예루살렘에서 준비 중입니다. 활성화 링크와 NFC 키 세부정보를 곧 이메일로 받으실 것입니다.',
    'success.button.access': '디지털 콘텐츠 액세스',
    'success.button.share': '친구와 공유',
    'success.button.home': '← 홈으로 돌아가기',
  },
  pt: {
    'success.title': 'Sua Jornada Hafatsa Começa',
    'success.message': 'Pedido confirmado',
    'success.note': 'Sua Nova Key está sendo preparada em Jerusalém. Você receberá seu link de ativação e detalhes da chave NFC por e-mail em breve.',
    'success.button.access': 'Acessar Conteúdo Digital',
    'success.button.share': 'Compartilhar com um Amigo',
    'success.button.home': '← Voltar ao Início',
  },
  de: {
    'success.title': 'Deine Hafatsa-Reise Beginnt',
    'success.message': 'Bestellung bestätigt',
    'success.note': 'Dein Nova Key wird in Jerusalem vorbereitet. Du erhältst deinen Aktivierungslink und NFC-Schlüssel-Details in Kürze per E-Mail.',
    'success.button.access': 'Zugriff auf Digitale Inhalte',
    'success.button.share': 'Mit einem Freund Teilen',
    'success.button.home': '← Zurück zur Startseite',
  },
  ja: {
    'success.title': 'あなたのHafatsaの旅が始まります',
    'success.message': '注文が確認されました',
    'success.note': 'Nova Keyはエルサレムで準備中です。アクティベーションリンクとNFCキーの詳細がまもなくメールで届きます。',
    'success.button.access': 'デジタルコンテンツにアクセス',
    'success.button.share': '友達と共有',
    'success.button.home': '← ホームに戻る',
  },
  it: {
    'success.title': 'Il Tuo Viaggio Hafatsa Inizia',
    'success.message': 'Ordine confermato',
    'success.note': 'La tua Nova Key è in preparazione a Gerusalemme. Riceverai il tuo link di attivazione e i dettagli della chiave NFC via email a breve.',
    'success.button.access': 'Accedi ai Contenuti Digitali',
    'success.button.share': 'Condividi con un Amico',
    'success.button.home': '← Torna alla Home',
  },
  ru: {
    'success.title': 'Ваше Путешествие Hafatsa Начинается',
    'success.message': 'Заказ подтвержден',
    'success.note': 'Ваш Nova Key готовится в Иерусалиме. Вы получите ссылку активации и данные NFC-ключа по электронной почте в ближайшее время.',
    'success.button.access': 'Доступ к Цифровому Контенту',
    'success.button.share': 'Поделиться с Другом',
    'success.button.home': '← Назад на Главную',
  },
};

// Read i18n.ts
const i18nPath = path.join(__dirname, '../src/lib/i18n.ts');
let content = fs.readFileSync(i18nPath, 'utf8');

console.log('📝 Adding success translations to i18n.ts...\n');

// For each language, find where to insert (after existing success keys or after dashboard keys)
Object.keys(SUCCESS_TRANSLATIONS).forEach((locale) => {
  const translations = SUCCESS_TRANSLATIONS[locale];

  // Build the translation string
  let translationString = '    // Success Page\n';
  Object.entries(translations).forEach(([key, value]) => {
    // Escape single quotes in the value
    const escapedValue = value.replace(/'/g, "\\'");
    translationString += `    '${key}': '${escapedValue}',\n`;
  });

  // Find the locale section
  const localePattern = new RegExp(`(${locale}:\\s*\\{[\\s\\S]*?)(\n  \\},\n  (?:en|es|he|zh|ko|pt|de|ja|it|ru):|\\n};)`, 'm');

  // Try to insert after existing 'success.dashboard' or 'success.home' key
  const successPattern = new RegExp(`(${locale}:[\\s\\S]*?'success\\.(?:dashboard|home)':[^,]+,)`, 'm');

  if (successPattern.test(content)) {
    // Insert after existing success keys
    content = content.replace(successPattern, `$1\n${translationString}`);
    console.log(`✅ Added success translations to ${locale} (after existing success keys)`);
  } else {
    console.log(`⚠️  No existing success keys found for ${locale}, skipping...`);
  }
});

// Write back to file
fs.writeFileSync(i18nPath, content, 'utf8');

console.log('\n✅ Success translations added successfully!');
console.log(`📊 Added ${Object.keys(SUCCESS_KEYS_EN).length} keys × ${Object.keys(SUCCESS_TRANSLATIONS).length} languages = ${Object.keys(SUCCESS_KEYS_EN).length * Object.keys(SUCCESS_TRANSLATIONS).length} translations`);
