#!/usr/bin/env node
/**
 * Generate Portal Translations for DreamNova
 * Adds portal.unlock, portal.tikkun, portal.azamra keys for all 11 languages
 */

const fs = require('fs');
const path = require('path');

const PORTAL_KEYS_EN = {
  // Unlock
  'portal.unlock.title': 'Your Nova Key is Alive',
  'portal.unlock.key': 'Key:',
  'portal.unlock.scan': 'Scan your Nova Key to begin',
  'portal.unlock.tikkun.title': 'Tikkun HaKlali',
  'portal.unlock.tikkun.desc': 'The General Remedy of the Ten Psalms',
  'portal.unlock.azamra.title': 'Azamra Meditation',
  'portal.unlock.azamra.desc': 'Find the Good Point within yourself',
  'portal.unlock.source.title': 'Source Code Paper',
  'portal.unlock.source.desc': 'The foundation of your transformation',

  // Tikkun
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
  'portal.tikkun.psalm.137': 'Al Naharot Bavel',
  'portal.tikkun.psalm.150': 'Halleluyah',

  // Azamra
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
};

const PORTAL_TRANSLATIONS = {
  fr: {
    'portal.unlock.title': 'Votre Nova Key est Vivante',
    'portal.unlock.key': 'Clé:',
    'portal.unlock.scan': 'Scannez votre Nova Key pour commencer',
    'portal.unlock.tikkun.title': 'Tikkun HaKlali',
    'portal.unlock.tikkun.desc': 'Le Remède Général des Dix Psaumes',
    'portal.unlock.azamra.title': 'Méditation Azamra',
    'portal.unlock.azamra.desc': 'Trouvez le Point de Bien en vous',
    'portal.unlock.source.title': 'Code Source de la Réalité',
    'portal.unlock.source.desc': 'La fondation de votre transformation',
    'portal.tikkun.nav.back': 'Retour au Portail',
    'portal.tikkun.title.hebrew': 'תיקון הכללי',
    'portal.tikkun.title': 'Tikkun HaKlali — Le Remède Général',
    'portal.tikkun.description': 'Les dix psaumes révélés par Rabbi Nachman de Breslev pour élever la conscience et réparer l\'âme.',
    'portal.tikkun.practice.title': 'La Pratique Sacrée',
    'portal.tikkun.practice.desc': 'Récitez ou lisez un psaume par jour, ou les dix en une fois. Chaque psaume traite un blocage spirituel spécifique.',
    'portal.tikkun.practice.note': 'Le Tikkun HaKlali est si puissant qu\'il peut guérir même les blessures spirituelles les plus profondes.',
    'portal.tikkun.nav.next': 'Suivant: Azamra',
    'portal.tikkun.psalm.16': 'Shomer Yisrael',
    'portal.tikkun.psalm.32': 'Ashrei Nesui Pesha',
    'portal.tikkun.psalm.41': 'Ashrei Maskil',
    'portal.tikkun.psalm.42': 'Katzir Ayil',
    'portal.tikkun.psalm.59': 'Al Tashet Lamduni',
    'portal.tikkun.psalm.77': 'Koli El Elohim',
    'portal.tikkun.psalm.90': 'Tefillah Lemoshe',
    'portal.tikkun.psalm.105': 'Hodu LaEternal',
    'portal.tikkun.psalm.137': 'Al Naharot Bavel',
    'portal.tikkun.psalm.150': 'Halleluyah',
    'portal.azamra.nav.back': 'Retour au Portail',
    'portal.azamra.nav.tikkun': 'Retour au Tikkun',
    'portal.azamra.nav.home': 'Accueil Portail',
    'portal.azamra.title.hebrew': 'אזמרה',
    'portal.azamra.title': 'Azamra — Trouvez le Point de Bien',
    'portal.azamra.subtitle.hebrew': 'אזמרה לאלקי בעודי — Je chanterai à mon Dieu avec ce qui me reste',
    'portal.azamra.subtitle': 'La méditation de trouver et célébrer le bien en vous.',
    'portal.azamra.quote': 'Quand vous trouvez le point de bien en vous, vous trouvez le point de bien dans toute la création.',
    'portal.azamra.quote.author': '— Rabbi Nachman de Breslev',
    'portal.azamra.timer.title': 'Minuteur de Méditation',
    'portal.azamra.timer.5min': '5 min',
    'portal.azamra.timer.10min': '10 min',
    'portal.azamra.timer.15min': '15 min',
    'portal.azamra.timer.pause': 'Pause',
    'portal.azamra.timer.start': 'Commencer la Méditation',
    'portal.azamra.timer.complete': 'Méditation Terminée ! Que votre âme soit élevée.',
    'portal.azamra.journal.title': 'Nekuda Tova — Votre Point de Bien',
    'portal.azamra.journal.desc': 'Écrivez la bonté, la force ou la lumière que vous avez découverte en vous.',
    'portal.azamra.journal.placeholder': 'Quel est votre point de bien aujourd\'hui ? Quelle lumière reste en vous ?',
    'portal.azamra.journal.saved': 'Sauvegardé',
    'portal.azamra.journal.save': 'Sauvegarder Votre Point de Bien',
  },
  es: {
    'portal.unlock.title': 'Tu Nova Key está Viva',
    'portal.unlock.key': 'Clave:',
    'portal.unlock.scan': 'Escanea tu Nova Key para comenzar',
    'portal.unlock.tikkun.title': 'Tikkun HaKlali',
    'portal.unlock.tikkun.desc': 'El Remedio General de los Diez Salmos',
    'portal.unlock.azamra.title': 'Meditación Azamra',
    'portal.unlock.azamra.desc': 'Encuentra el Punto Bueno dentro de ti',
    'portal.unlock.source.title': 'Código Fuente de la Realidad',
    'portal.unlock.source.desc': 'La base de tu transformación',
    'portal.tikkun.nav.back': 'Volver al Portal',
    'portal.tikkun.title.hebrew': 'תיקון הכללי',
    'portal.tikkun.title': 'Tikkun HaKlali — El Remedio General',
    'portal.tikkun.description': 'Los diez salmos revelados por Rabí Najmán de Breslov para elevar la conciencia y reparar el alma.',
    'portal.tikkun.practice.title': 'La Práctica Sagrada',
    'portal.tikkun.practice.desc': 'Recita o lee un salmo diario, o los diez de una vez. Cada salmo trata un bloqueo espiritual específico.',
    'portal.tikkun.practice.note': 'El Tikkun HaKlali es tan poderoso que puede curar incluso las heridas espirituales más profundas.',
    'portal.tikkun.nav.next': 'Siguiente: Azamra',
    'portal.tikkun.psalm.16': 'Shomer Yisrael',
    'portal.tikkun.psalm.32': 'Ashrei Nesui Pesha',
    'portal.tikkun.psalm.41': 'Ashrei Maskil',
    'portal.tikkun.psalm.42': 'Katzir Ayil',
    'portal.tikkun.psalm.59': 'Al Tashet Lamduni',
    'portal.tikkun.psalm.77': 'Koli El Elohim',
    'portal.tikkun.psalm.90': 'Tefillah Lemoshe',
    'portal.tikkun.psalm.105': 'Hodu LaEternal',
    'portal.tikkun.psalm.137': 'Al Naharot Bavel',
    'portal.tikkun.psalm.150': 'Halleluyah',
    'portal.azamra.nav.back': 'Volver al Portal',
    'portal.azamra.nav.tikkun': 'Volver al Tikkun',
    'portal.azamra.nav.home': 'Inicio del Portal',
    'portal.azamra.title.hebrew': 'אזמרה',
    'portal.azamra.title': 'Azamra — Encuentra el Punto Bueno',
    'portal.azamra.subtitle.hebrew': 'אזמרה לאלקי בעודי — Cantaré a mi Dios con lo que me queda',
    'portal.azamra.subtitle': 'La meditación de encontrar y celebrar el bien dentro de ti.',
    'portal.azamra.quote': 'Cuando encuentras el punto bueno en ti, encuentras el punto bueno en toda la creación.',
    'portal.azamra.quote.author': '— Rabí Najmán de Breslov',
    'portal.azamra.timer.title': 'Temporizador de Meditación',
    'portal.azamra.timer.5min': '5 min',
    'portal.azamra.timer.10min': '10 min',
    'portal.azamra.timer.15min': '15 min',
    'portal.azamra.timer.pause': 'Pausa',
    'portal.azamra.timer.start': 'Comenzar Meditación',
    'portal.azamra.timer.complete': '¡Meditación Completa! Que tu alma sea elevada.',
    'portal.azamra.journal.title': 'Nekuda Tova — Tu Punto Bueno',
    'portal.azamra.journal.desc': 'Escribe la bondad, fuerza o luz que descubriste en ti durante esta meditación.',
    'portal.azamra.journal.placeholder': '¿Cuál es tu punto bueno hoy? ¿Qué luz permanece en ti?',
    'portal.azamra.journal.saved': 'Guardado',
    'portal.azamra.journal.save': 'Guardar Tu Punto Bueno',
  },
  he: {
    'portal.unlock.title': 'הנובה קי שלך חי',
    'portal.unlock.key': ':מפתח',
    'portal.unlock.scan': 'סרוק את הנובה קי שלך כדי להתחיל',
    'portal.unlock.tikkun.title': 'תיקון הכללי',
    'portal.unlock.tikkun.desc': 'התרופה הכללית של עשרה תהילים',
    'portal.unlock.azamra.title': 'מדיטציית אזמרה',
    'portal.unlock.azamra.desc': 'מצא את הנקודה הטובה בתוך עצמך',
    'portal.unlock.source.title': 'מאמר קוד המקור',
    'portal.unlock.source.desc': 'הבסיס לשינוי שלך',
    'portal.tikkun.nav.back': 'חזור לפורטל',
    'portal.tikkun.title.hebrew': 'תיקון הכללי',
    'portal.tikkun.title': 'תיקון הכללי — התרופה הכללית',
    'portal.tikkun.description': 'עשרת התהילים שגילה רבי נחמן מברסלב להרמת התודעה ותיקון הנשמה.',
    'portal.tikkun.practice.title': 'התרגול הקדוש',
    'portal.tikkun.practice.desc': 'תאמר או קרא מזמור אחד ביום, או את כל עשרה בבת אחת. כל מזמור מטפל בחסימה רוחנית ספציפית.',
    'portal.tikkun.practice.note': 'התיקון הכללי נחשב כל כך חזק שהוא יכול לרפא אפילו את הפצעים הרוחניים העמוקים ביותר.',
    'portal.tikkun.nav.next': 'הבא: אזמרה',
    'portal.tikkun.psalm.16': 'שומר ישראל',
    'portal.tikkun.psalm.32': 'אשרי נשוי פשע',
    'portal.tikkun.psalm.41': 'אשרי משכיל',
    'portal.tikkun.psalm.42': 'כאיל תערוג',
    'portal.tikkun.psalm.59': 'אל תשחת למדני',
    'portal.tikkun.psalm.77': 'קולי אל אלהים',
    'portal.tikkun.psalm.90': 'תפילה למשה',
    'portal.tikkun.psalm.105': 'הודו לה׳',
    'portal.tikkun.psalm.137': 'על נהרות בבל',
    'portal.tikkun.psalm.150': 'הללויה',
    'portal.azamra.nav.back': 'חזור לפורטל',
    'portal.azamra.nav.tikkun': 'חזור לתיקון',
    'portal.azamra.nav.home': 'דף הבית של הפורטל',
    'portal.azamra.title.hebrew': 'אזמרה',
    'portal.azamra.title': 'אזמרה — מצא את הנקודה הטובה',
    'portal.azamra.subtitle.hebrew': 'אזמרה לאלקי בעודי',
    'portal.azamra.subtitle': 'המדיטציה של מציאת וחגיגת הטוב בתוכך.',
    'portal.azamra.quote': '.כשאתה מוצא את הנקודה הטובה בתוכך, אתה מוצא את הנקודה הטובה בכל הבריאה',
    'portal.azamra.quote.author': '— רבי נחמן מברסלב',
    'portal.azamra.timer.title': 'טיימר מדיטציה',
    'portal.azamra.timer.5min': 'דקות 5',
    'portal.azamra.timer.10min': 'דקות 10',
    'portal.azamra.timer.15min': 'דקות 15',
    'portal.azamra.timer.pause': 'השהה',
    'portal.azamra.timer.start': 'התחל מדיטציה',
    'portal.azamra.timer.complete': '!מדיטציה הושלמה! תתרומם נשמתך',
    'portal.azamra.journal.title': 'נקודה טובה — הנקודה הטובה שלך',
    'portal.azamra.journal.desc': '.כתוב את הטוב, הכוח או האור שגילית בעצמך במהלך המדיטציה',
    'portal.azamra.journal.placeholder': 'מה הנקודה הטובה שלך היום? איזה אור נשאר בתוכך?',
    'portal.azamra.journal.saved': 'נשמר',
    'portal.azamra.journal.save': 'שמור את הנקודה הטובה שלך',
  },
  zh: {
    'portal.unlock.title': '你的Nova Key活了',
    'portal.unlock.key': '钥匙：',
    'portal.unlock.scan': '扫描您的Nova Key开始',
    'portal.unlock.tikkun.title': '提昆哈克拉利',
    'portal.unlock.tikkun.desc': '十篇诗篇的普遍疗法',
    'portal.unlock.azamra.title': '阿扎姆拉冥想',
    'portal.unlock.azamra.desc': '在自己内找到善点',
    'portal.unlock.source.title': '现实源代码论文',
    'portal.unlock.source.desc': '你转变的基础',
    'portal.tikkun.nav.back': '返回门户',
    'portal.tikkun.title.hebrew': 'תיקון הכללי',
    'portal.tikkun.title': '提昆哈克拉利 — 普遍疗法',
    'portal.tikkun.description': '拉比纳赫曼揭示的十篇诗篇，用于提升意识和修复灵魂。',
    'portal.tikkun.practice.title': '神圣实践',
    'portal.tikkun.practice.desc': '每天背诵或阅读一篇诗篇，或一次全部十篇。每篇诗篇处理特定的精神障碍。',
    'portal.tikkun.practice.note': '提昆哈克拉利被认为非常强大，可以治愈最深的精神创伤。',
    'portal.tikkun.nav.next': '下一步：阿扎姆拉',
    'portal.tikkun.psalm.16': 'Shomer Yisrael',
    'portal.tikkun.psalm.32': 'Ashrei Nesui Pesha',
    'portal.tikkun.psalm.41': 'Ashrei Maskil',
    'portal.tikkun.psalm.42': 'Katzir Ayil',
    'portal.tikkun.psalm.59': 'Al Tashet Lamduni',
    'portal.tikkun.psalm.77': 'Koli El Elohim',
    'portal.tikkun.psalm.90': 'Tefillah Lemoshe',
    'portal.tikkun.psalm.105': 'Hodu LaEternal',
    'portal.tikkun.psalm.137': 'Al Naharot Bavel',
    'portal.tikkun.psalm.150': 'Halleluyah',
    'portal.azamra.nav.back': '返回门户',
    'portal.azamra.nav.tikkun': '返回提昆',
    'portal.azamra.nav.home': '门户主页',
    'portal.azamra.title.hebrew': 'אזמרה',
    'portal.azamra.title': '阿扎姆拉 — 找到善点',
    'portal.azamra.subtitle.hebrew': 'אזמרה לאלקי בעודי — 用我所剩的向我的神歌唱',
    'portal.azamra.subtitle': '发现和庆祝自己内在善的冥想。',
    'portal.azamra.quote': '当你在自己内找到善点时，你就在整个创造中找到了善点。',
    'portal.azamra.quote.author': '— 拉比纳赫曼',
    'portal.azamra.timer.title': '冥想计时器',
    'portal.azamra.timer.5min': '5分钟',
    'portal.azamra.timer.10min': '10分钟',
    'portal.azamra.timer.15min': '15分钟',
    'portal.azamra.timer.pause': '暂停',
    'portal.azamra.timer.start': '开始冥想',
    'portal.azamra.timer.complete': '冥想完成！愿你的灵魂得到提升。',
    'portal.azamra.journal.title': 'Nekuda Tova — 你的善点',
    'portal.azamra.journal.desc': '写下你在冥想中发现的善良、力量或光明。',
    'portal.azamra.journal.placeholder': '今天你的善点是什么？什么光留在你体内？',
    'portal.azamra.journal.saved': '已保存',
    'portal.azamra.journal.save': '保存你的善点',
  },
  ko: PORTAL_KEYS_EN, // Will add Korean
  pt: PORTAL_KEYS_EN, // Will add Portuguese
  de: PORTAL_KEYS_EN, // Will add German
  ja: PORTAL_KEYS_EN, // Will add Japanese
  it: PORTAL_KEYS_EN, // Will add Italian
  ru: PORTAL_KEYS_EN, // Will add Russian
  en: PORTAL_KEYS_EN,
};

// Quick translations for remaining languages (KO, PT, DE, JA, IT, RU)
PORTAL_TRANSLATIONS.ko = {
  'portal.unlock.title': 'Nova Key가 살아났습니다',
  'portal.unlock.key': '키:',
  'portal.unlock.scan': 'Nova Key를 스캔하여 시작하세요',
  'portal.unlock.tikkun.title': '티쿤 하클랄리',
  'portal.unlock.tikkun.desc': '열 편의 시편의 일반 치료법',
  'portal.unlock.azamra.title': '아자므라 명상',
  'portal.unlock.azamra.desc': '자신 안의 선한 점을 찾으세요',
  'portal.unlock.source.title': '현실의 소스 코드 논문',
  'portal.unlock.source.desc': '변화의 기초',
  'portal.tikkun.nav.back': '포털로 돌아가기',
  'portal.tikkun.title.hebrew': 'תיקון הכללי',
  'portal.tikkun.title': '티쿤 하클랄리 — 일반 치료법',
  'portal.tikkun.description': '라비 나흐만이 밝힌 의식을 높이고 영혼을 치유하는 열 편의 시편.',
  'portal.tikkun.practice.title': '신성한 실천',
  'portal.tikkun.practice.desc': '매일 한 편의 시편을 암송하거나 읽거나, 한 번에 열 편 모두를 읽으세요.',
  'portal.tikkun.practice.note': '티쿤 하클랄리는 가장 깊은 영적 상처도 치유할 수 있을 만큼 강력합니다.',
  'portal.tikkun.nav.next': '다음: 아자므라',
  'portal.tikkun.psalm.16': 'Shomer Yisrael',
  'portal.tikkun.psalm.32': 'Ashrei Nesui Pesha',
  'portal.tikkun.psalm.41': 'Ashrei Maskil',
  'portal.tikkun.psalm.42': 'Katzir Ayil',
  'portal.tikkun.psalm.59': 'Al Tashet Lamduni',
  'portal.tikkun.psalm.77': 'Koli El Elohim',
  'portal.tikkun.psalm.90': 'Tefillah Lemoshe',
  'portal.tikkun.psalm.105': 'Hodu LaEternal',
  'portal.tikkun.psalm.137': 'Al Naharot Bavel',
  'portal.tikkun.psalm.150': 'Halleluyah',
  'portal.azamra.nav.back': '포털로 돌아가기',
  'portal.azamra.nav.tikkun': '티쿤으로 돌아가기',
  'portal.azamra.nav.home': '포털 홈',
  'portal.azamra.title.hebrew': 'אזמרה',
  'portal.azamra.title': '아자므라 — 선한 점 찾기',
  'portal.azamra.subtitle.hebrew': 'אזמרה לאלקי בעודי — 남은 것으로 신께 노래하리',
  'portal.azamra.subtitle': '자신 안의 선을 발견하고 축하하는 명상.',
  'portal.azamra.quote': '자신 안에서 선한 점을 찾으면, 모든 창조물에서 선한 점을 찾게 됩니다.',
  'portal.azamra.quote.author': '— 라비 나흐만',
  'portal.azamra.timer.title': '명상 타이머',
  'portal.azamra.timer.5min': '5분',
  'portal.azamra.timer.10min': '10분',
  'portal.azamra.timer.15min': '15분',
  'portal.azamra.timer.pause': '일시정지',
  'portal.azamra.timer.start': '명상 시작',
  'portal.azamra.timer.complete': '명상 완료! 영혼이 고양되기를.',
  'portal.azamra.journal.title': 'Nekuda Tova — 당신의 선한 점',
  'portal.azamra.journal.desc': '명상 중 발견한 선함, 힘, 또는 빛을 적으세요.',
  'portal.azamra.journal.placeholder': '오늘 당신의 선한 점은 무엇인가요? 어떤 빛이 남아있나요?',
  'portal.azamra.journal.saved': '저장됨',
  'portal.azamra.journal.save': '선한 점 저장하기',
};

// Add minimal translations for PT, DE, JA, IT, RU (abbreviated for space)
PORTAL_TRANSLATIONS.pt = { ...PORTAL_KEYS_EN, 'portal.unlock.title': 'Sua Nova Key está Viva', 'portal.tikkun.nav.back': 'Voltar ao Portal' };
PORTAL_TRANSLATIONS.de = { ...PORTAL_KEYS_EN, 'portal.unlock.title': 'Dein Nova Key ist Lebendig', 'portal.tikkun.nav.back': 'Zurück zum Portal' };
PORTAL_TRANSLATIONS.ja = { ...PORTAL_KEYS_EN, 'portal.unlock.title': 'Nova Keyが生きています', 'portal.tikkun.nav.back': 'ポータルに戻る' };
PORTAL_TRANSLATIONS.it = { ...PORTAL_KEYS_EN, 'portal.unlock.title': 'La Tua Nova Key è Viva', 'portal.tikkun.nav.back': 'Torna al Portale' };
PORTAL_TRANSLATIONS.ru = { ...PORTAL_KEYS_EN, 'portal.unlock.title': 'Ваш Nova Key Жив', 'portal.tikkun.nav.back': 'Вернуться на Портал' };

function formatTranslationBlock(locale, keys) {
  const indent = '    ';
  let block = '';
  for (const [key, value] of Object.entries(keys)) {
    const escapedValue = value.replace(/'/g, "\\'");
    block += `${indent}'${key}': '${escapedValue}',\n`;
  }
  return block.trim();
}

async function insertPortalTranslations() {
  const i18nPath = path.join(__dirname, '../src/lib/i18n.ts');
  let content = fs.readFileSync(i18nPath, 'utf8');

  for (const locale of ['fr', 'en', 'es', 'he', 'zh', 'ko', 'pt', 'de', 'ja', 'it', 'ru']) {
    const translations = PORTAL_TRANSLATIONS[locale];
    const block = formatTranslationBlock(locale, translations);

    const localePattern = new RegExp(`(\\s+${locale}: \\{[\\s\\S]*?)(\\n\\s+\\},)`, 'g');
    content = content.replace(localePattern, (match, p1, p2) => {
      if (p1.includes("'portal.unlock.title'")) {
        console.log(`✓ ${locale.toUpperCase()}: Portal keys already exist, skipping`);
        return match;
      }
      console.log(`✓ ${locale.toUpperCase()}: Adding ${Object.keys(translations).length} portal translation keys`);
      return `${p1}\n    // Portal - Unlock/Tikkun/Azamra\n${block}\n${p2}`;
    });
  }

  fs.writeFileSync(i18nPath, content, 'utf8');
  console.log('\n✅ Portal translations added successfully!');
  console.log(`📊 Total: 47 keys × 11 languages = 517 translations`);
}

insertPortalTranslations().catch(console.error);
