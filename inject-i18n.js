// Script to inject new i18n keys into all locales
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'src/lib/i18n.ts');
let content = fs.readFileSync(FILE, 'utf8');

const newKeys = {
  fr: `    // Problem cards
    'problem.card1.title': 'BOUCLE DOPAMINERGIQUE',
    'problem.card1.desc': "Votre cerveau est hijacké par des algorithmes de rétention conçus pour maximiser l'engagement.",
    'problem.card2.title': 'PARALYSIE DÉCISIONNELLE',
    'problem.card2.desc': "L'excès d'options crée l'illusion du choix. Résultat: anxiété chronique.",
    'problem.card3.title': 'EROSION IDENTITAIRE',
    'problem.card3.desc': 'Les réseaux sociaux fragmentent le Soi. Vous devenez une collection de personas.',
    'problem.card4.title': 'LE VIDE EXISTENTIEL',
    'problem.card4.desc': '79% de la Gen Z rapporte un sentiment de vide spirituel.',
    'problem.quote': 'Tout le monde est un pont très étroit',
    'problem.quote.attr': 'Rabbi Nachman',
    'solution.code.output': 'Vitalité Pure ✨',
    // Manifesto
    'manifesto.line1': 'Nous ne vendons pas un produit.',
    'manifesto.line2': 'Nous allumons un feu.',
    'manifesto.line3': 'Chaque Nova Key qui quitte Jérusalem porte en elle 250 ans de flamme — de Rabbi Nachman au Saba, du Petek à votre poche.',
    'manifesto.line4': "Quand vous scannez votre carte, vous ne 'consommez' pas du contenu spirituel. Vous activez un circuit ancien. Vous devenez un maillon de la chaîne.",
    'manifesto.sacred': "Ein Ye'ush Ba'olam Klal — Il n'y a pas de désespoir au monde",
    'manifesto.sig1': 'Écrit le 12 Tevet, année de la Rénovation',
    'manifesto.sig2': 'Par la grâce du Saint, béni soit-Il',
    'manifesto.sig3': 'Et pour la bénédiction du monde',
    // Accessories
    'acc.title': 'ARTEFACTS SACRÉS',
    'acc.subtitle': 'Bijoux Cyberpunk avec NFC',
    'acc.nfc.label': 'Puce NFC Optionnelle',
    'acc.nfc.desc': 'Déverrouillez du contenu digital en un tap',
    'acc.superpack': 'SUPER PACK',
    'acc.superpack.desc': 'Les 7 Artefacts Sacrés — Collection Complète',
    'acc.superpack.includes': 'Inclut tous les accessoires + puces NFC',
    'acc.bracelet': 'Bracelet Manchette Sacré',
    'acc.bracelet.desc': 'Bracelet or gravé Na Nach avec texte sacré hébreu',
    'acc.pendant': 'Pendentif Chaîne Petek',
    'acc.pendant.desc': 'Médaillon or avec le texte sacré du Petek sur chaîne',
    'acc.ring': "Chevalière de l'Alliance",
    'acc.ring.desc': "Chevalière or avec inscription hébraïque de l'alliance",
    'acc.charm': 'Bracelet à Breloques Hafatsa',
    'acc.charm.desc': 'Bracelet chaîne or délicat avec pendentifs sacrés',
    'acc.necklace': 'Collier Na Nach',
    'acc.necklace.desc': 'Collier lettres hébraïques — Na Nach Nachma Nachman',
    'acc.cufflinks': 'Boutons de Manchette Sacrés',
    'acc.cufflinks.desc': 'Boutons de manchette or ronds gravés Na Nach',
    'acc.pin': 'Pin Drapeau',
    'acc.pin.desc': 'Pin émaillé drapeau national — représentez votre nation dans la mission Hafatsa',
    'acc.cta': 'AJOUTER AU PANIER',
    'acc.tier.standard': 'Standard',
    'acc.tier.premium': 'Premium',`,

  en: `    // Problem cards
    'problem.card1.title': 'DOPAMINE LOOP',
    'problem.card1.desc': 'Your brain is hijacked by retention algorithms designed to maximize engagement.',
    'problem.card2.title': 'DECISION PARALYSIS',
    'problem.card2.desc': 'Excess options create the illusion of choice. Result: chronic anxiety.',
    'problem.card3.title': 'IDENTITY EROSION',
    'problem.card3.desc': 'Social media fragments the Self. You become a collection of personas.',
    'problem.card4.title': 'THE EXISTENTIAL VOID',
    'problem.card4.desc': '79% of Gen Z reports a feeling of spiritual emptiness.',
    'problem.quote': 'The whole world is a very narrow bridge',
    'problem.quote.attr': 'Rabbi Nachman',
    'solution.code.output': 'Pure Vitality ✨',
    // Manifesto
    'manifesto.line1': 'We are not selling a product.',
    'manifesto.line2': 'We are lighting a fire.',
    'manifesto.line3': 'Every Nova Key that leaves Jerusalem carries 250 years of flame — from Rabbi Nachman to the Saba, from the Petek to your pocket.',
    'manifesto.line4': "When you scan your card, you don't 'consume' spiritual content. You activate an ancient circuit. You become a link in the chain.",
    'manifesto.sacred': "Ein Ye'ush Ba'olam Klal — There is no despair in the world at all",
    'manifesto.sig1': 'Written on 12 Tevet, year of the Renovation',
    'manifesto.sig2': 'By the grace of the Holy One, blessed be He',
    'manifesto.sig3': 'And for the blessing of the world',
    // Accessories
    'acc.title': 'SACRED ARTIFACTS',
    'acc.subtitle': 'NFC-Enabled Cyberpunk Jewelry',
    'acc.nfc.label': 'Optional NFC Chip',
    'acc.nfc.desc': 'Unlock digital content with a tap',
    'acc.superpack': 'SUPER PACK',
    'acc.superpack.desc': 'All 7 Sacred Artifacts — Complete Collection',
    'acc.superpack.includes': 'Includes all accessories + NFC chips',
    'acc.bracelet': 'Sacred Cuff Bracelet',
    'acc.bracelet.desc': 'Gold Na Nach engraved band with Hebrew sacred text',
    'acc.pendant': 'Petek Chain Pendant',
    'acc.pendant.desc': 'Gold medallion pendant with the sacred Petek text on chain',
    'acc.ring': 'Covenant Signet Ring',
    'acc.ring.desc': 'Gold signet ring with Hebrew inscription of the covenant',
    'acc.charm': 'Hafatsa Charm Bracelet',
    'acc.charm.desc': 'Delicate gold chain bracelet with sacred charm pendants',
    'acc.necklace': 'Na Nach Name Necklace',
    'acc.necklace.desc': 'Hebrew letter nameplate necklace — Na Nach Nachma Nachman',
    'acc.cufflinks': 'Sacred Cufflinks',
    'acc.cufflinks.desc': 'Round gold cufflinks engraved with Na Nach sacred text',
    'acc.pin': 'Flag Lapel Pin',
    'acc.pin.desc': 'Enamel country flag pin — represent your nation in the Hafatsa mission',
    'acc.cta': 'ADD TO CART',
    'acc.tier.standard': 'Standard',
    'acc.tier.premium': 'Premium',`,

  es: `    'problem.card1.title': 'BUCLE DOPAMINÉRGICO',
    'problem.card1.desc': 'Tu cerebro está secuestrado por algoritmos de retención diseñados para maximizar el engagement.',
    'problem.card2.title': 'PARÁLISIS DECISIONAL',
    'problem.card2.desc': 'El exceso de opciones crea la ilusión de elección. Resultado: ansiedad crónica.',
    'problem.card3.title': 'EROSIÓN DE IDENTIDAD',
    'problem.card3.desc': 'Las redes sociales fragmentan el Ser. Te conviertes en una colección de personas.',
    'problem.card4.title': 'EL VACÍO EXISTENCIAL',
    'problem.card4.desc': 'El 79% de la Gen Z reporta un sentimiento de vacío espiritual.',
    'problem.quote': 'Todo el mundo es un puente muy estrecho',
    'problem.quote.attr': 'Rabí Najmán',
    'solution.code.output': 'Vitalidad Pura ✨',
    'manifesto.line1': 'No vendemos un producto.',
    'manifesto.line2': 'Encendemos un fuego.',
    'manifesto.line3': 'Cada Nova Key que sale de Jerusalén lleva 250 años de llama — de Rabí Najmán al Saba, del Petek a tu bolsillo.',
    'manifesto.line4': "Cuando escaneas tu tarjeta, no 'consumes' contenido espiritual. Activas un circuito antiguo. Te conviertes en un eslabón de la cadena.",
    'manifesto.sacred': "Ein Ye'ush Ba'olam Klal — No hay desesperación en el mundo",
    'manifesto.sig1': 'Escrito el 12 de Tevet, año de la Renovación',
    'manifesto.sig2': 'Por la gracia del Santo, bendito sea',
    'manifesto.sig3': 'Y para la bendición del mundo',
    'acc.title': 'ARTEFACTOS SAGRADOS', 'acc.subtitle': 'Joyería Cyberpunk con NFC',
    'acc.nfc.label': 'Chip NFC Opcional', 'acc.nfc.desc': 'Desbloquea contenido digital con un toque',
    'acc.superpack': 'SUPER PACK', 'acc.superpack.desc': 'Los 7 Artefactos Sagrados — Colección Completa',
    'acc.superpack.includes': 'Incluye todos los accesorios + chips NFC',
    'acc.bracelet': 'Brazalete Sagrado', 'acc.bracelet.desc': 'Brazalete de oro grabado Na Nach con texto sagrado hebreo',
    'acc.pendant': 'Colgante Cadena Petek', 'acc.pendant.desc': 'Medallón de oro con el texto sagrado del Petek en cadena',
    'acc.ring': 'Anillo Sello de la Alianza', 'acc.ring.desc': 'Anillo sello de oro con inscripción hebrea de la alianza',
    'acc.charm': 'Pulsera de Dijes Hafatsá', 'acc.charm.desc': 'Pulsera de cadena de oro delicada con dijes sagrados',
    'acc.necklace': 'Collar Na Nach', 'acc.necklace.desc': 'Collar letras hebreas — Na Nach Nachma Nachman',
    'acc.cufflinks': 'Gemelos Sagrados', 'acc.cufflinks.desc': 'Gemelos redondos de oro grabados Na Nach',
    'acc.pin': 'Pin de Bandera', 'acc.pin.desc': 'Pin esmaltado de bandera nacional — representa tu nación en la misión Hafatsá',
    'acc.cta': 'AÑADIR AL CARRITO', 'acc.tier.standard': 'Estándar', 'acc.tier.premium': 'Premium',`,

  he: `    'problem.card1.title': 'לולאת דופמין',
    'problem.card1.desc': 'המוח שלך חטוף על ידי אלגוריתמי שימור שנועדו למקסם מעורבות.',
    'problem.card2.title': 'שיתוק החלטות',
    'problem.card2.desc': 'עודף אפשרויות יוצר אשליית בחירה. תוצאה: חרדה כרונית.',
    'problem.card3.title': 'שחיקת זהות',
    'problem.card3.desc': 'הרשתות החברתיות מפרקות את העצמי. אתה הופך לאוסף של פרסונות.',
    'problem.card4.title': 'הריק הקיומי',
    'problem.card4.desc': '79% מדור Z מדווחים על תחושת ריקנות רוחנית.',
    'problem.quote': 'כל העולם כולו גשר צר מאוד',
    'problem.quote.attr': 'רבי נחמן',
    'solution.code.output': 'חיוניות טהורה ✨',
    'manifesto.line1': 'אנחנו לא מוכרים מוצר.',
    'manifesto.line2': 'אנחנו מדליקים אש.',
    'manifesto.line3': 'כל נובה קי שיוצאת מירושלים נושאת בתוכה 250 שנות להבה — מרבי נחמן לסבא, מהפתק לכיס שלך.',
    'manifesto.line4': 'כשאתה סורק את הכרטיס שלך, אתה לא צורך תוכן רוחני. אתה מפעיל מעגל עתיק. אתה נהיה חוליה בשרשרת.',
    'manifesto.sacred': 'אין ייאוש בעולם כלל',
    'manifesto.sig1': 'נכתב י״ב טבת, שנת החידוש',
    'manifesto.sig2': 'בחסד הקדוש ברוך הוא',
    'manifesto.sig3': 'ולברכת העולם',
    'acc.title': 'חפצים קדושים', 'acc.subtitle': 'תכשיטי סייברפאנק עם NFC',
    'acc.nfc.label': 'שבב NFC אופציונלי', 'acc.nfc.desc': 'פתח תוכן דיגיטלי בנגיעה',
    'acc.superpack': 'סופר פאק', 'acc.superpack.desc': '7 חפצים קדושים — אוסף מלא',
    'acc.superpack.includes': 'כולל את כל האביזרים + שבבי NFC',
    'acc.bracelet': 'צמיד קאף קדוש', 'acc.bracelet.desc': 'צמיד זהב חרוט נ נח עם טקסט קדוש בעברית',
    'acc.pendant': 'תליון שרשרת פתק', 'acc.pendant.desc': 'מדליון זהב עם טקסט הפתק הקדוש על שרשרת',
    'acc.ring': 'טבעת חותם הברית', 'acc.ring.desc': 'טבעת חותם זהב עם כתובת עברית של הברית',
    'acc.charm': 'צמיד קסמים הפצה', 'acc.charm.desc': 'צמיד שרשרת זהב עדין עם תליוני קסם קדושים',
    'acc.necklace': 'שרשרת נ נח', 'acc.necklace.desc': 'שרשרת אותיות עבריות — נ נח נחמ נחמן',
    'acc.cufflinks': 'חפתים קדושים', 'acc.cufflinks.desc': 'חפתים עגולים זהב חרוטים נ נח',
    'acc.pin': 'סיכת דגל', 'acc.pin.desc': 'סיכת דגל לאומי — ייצג את האומה שלך במשימת ההפצה',
    'acc.cta': 'הוסף לעגלה', 'acc.tier.standard': 'רגיל', 'acc.tier.premium': 'פרימיום',`,

  zh: `    'problem.card1.title': '多巴胺循环', 'problem.card1.desc': '你的大脑被设计用来最大化参与度的留存算法所劫持。',
    'problem.card2.title': '决策瘫痪', 'problem.card2.desc': '过多的选择创造了选择的幻觉。结果：慢性焦虑。',
    'problem.card3.title': '身份侵蚀', 'problem.card3.desc': '社交媒体碎片化了自我。你变成了一组人设的集合。',
    'problem.card4.title': '存在的虚空', 'problem.card4.desc': '79%的Z世代报告有精神空虚感。',
    'problem.quote': '整个世界是一座非常窄的桥', 'problem.quote.attr': '拉比纳赫曼',
    'solution.code.output': '纯粹活力 ✨',
    'manifesto.line1': '我们不是在卖产品。', 'manifesto.line2': '我们在点燃一团火。',
    'manifesto.line3': '每把离开耶路撒冷的Nova Key都承载着250年的火焰——从拉比纳赫曼到萨巴，从Petek到你的口袋。',
    'manifesto.line4': '当你扫描你的卡片时，你不是在"消费"精神内容。你在激活一个古老的回路。你成为了链条中的一环。',
    'manifesto.sacred': "Ein Ye'ush Ba'olam Klal — 世上绝无绝望",
    'manifesto.sig1': '写于提别月12日，革新之年', 'manifesto.sig2': '蒙圣者之恩，愿祂受赐福', 'manifesto.sig3': '为了世界的祝福',
    'acc.title': '神圣文物', 'acc.subtitle': 'NFC赛博朋克珠宝', 'acc.nfc.label': '可选NFC芯片', 'acc.nfc.desc': '轻触解锁数字内容',
    'acc.superpack': '超级包', 'acc.superpack.desc': '全部7件神圣文物——完整收藏', 'acc.superpack.includes': '包含所有配件+NFC芯片',
    'acc.bracelet': '神圣袖扣手镯', 'acc.bracelet.desc': '镌刻Na Nach的金色手镯，配有希伯来圣文',
    'acc.pendant': 'Petek链坠', 'acc.pendant.desc': '镌刻Petek圣文的金色奖章链坠',
    'acc.ring': '圣约印戒', 'acc.ring.desc': '镌有希伯来圣约铭文的金色印戒',
    'acc.charm': 'Hafatsa魅力手链', 'acc.charm.desc': '精致金链手链配神圣吊坠',
    'acc.necklace': 'Na Nach名字项链', 'acc.necklace.desc': '希伯来字母铭牌项链——Na Nach Nachma Nachman',
    'acc.cufflinks': '神圣袖扣', 'acc.cufflinks.desc': '镌刻Na Nach的圆形金色袖扣',
    'acc.pin': '国旗胸针', 'acc.pin.desc': '珐琅国旗胸针——代表你的国家参与Hafatsa使命',
    'acc.cta': '加入购物车', 'acc.tier.standard': '标准版', 'acc.tier.premium': '高级版',`,

  ko: `    'problem.card1.title': '도파민 루프', 'problem.card1.desc': '당신의 뇌는 참여를 극대화하도록 설계된 리텐션 알고리즘에 납치되었습니다.',
    'problem.card2.title': '결정 마비', 'problem.card2.desc': '과도한 선택지가 선택의 환상을 만듭니다. 결과: 만성 불안.',
    'problem.card3.title': '정체성 침식', 'problem.card3.desc': '소셜 미디어가 자아를 파편화합니다. 당신은 페르소나의 모음이 됩니다.',
    'problem.card4.title': '실존적 공허', 'problem.card4.desc': 'Z세대의 79%가 영적 공허감을 보고합니다.',
    'problem.quote': '온 세상은 매우 좁은 다리입니다', 'problem.quote.attr': '라비 나흐만',
    'solution.code.output': '순수한 활력 ✨',
    'manifesto.line1': '우리는 제품을 팔지 않습니다.', 'manifesto.line2': '우리는 불을 지핍니다.',
    'manifesto.line3': '예루살렘을 떠나는 모든 Nova Key는 250년의 불꽃을 담고 있습니다.',
    'manifesto.line4': '카드를 스캔할 때, 당신은 영적 콘텐츠를 소비하는 것이 아닙니다. 고대의 회로를 활성화하는 것입니다.',
    'manifesto.sacred': "Ein Ye'ush Ba'olam Klal — 세상에 절망은 없습니다",
    'manifesto.sig1': '테벳 12일, 혁신의 해에 기록됨', 'manifesto.sig2': '거룩하신 분의 은혜로', 'manifesto.sig3': '세상의 축복을 위하여',
    'acc.title': '신성한 유물', 'acc.subtitle': 'NFC 사이버펑크 주얼리', 'acc.nfc.label': '선택적 NFC 칩', 'acc.nfc.desc': '탭으로 디지털 콘텐츠 잠금 해제',
    'acc.superpack': '슈퍼 팩', 'acc.superpack.desc': '7개 신성한 유물 전체 — 완전 컬렉션', 'acc.superpack.includes': '모든 액세서리 + NFC 칩 포함',
    'acc.bracelet': '신성한 커프 브레이슬릿', 'acc.bracelet.desc': '히브리어 성스러운 텍스트가 새겨진 금 Na Nach 밴드',
    'acc.pendant': '페텍 체인 펜던트', 'acc.pendant.desc': '성스러운 페텍 텍스트가 새겨진 금 메달리온 체인 펜던트',
    'acc.ring': '언약의 인장 반지', 'acc.ring.desc': '언약의 히브리어 비문이 새겨진 금 인장 반지',
    'acc.charm': 'Hafatsa 참 브레이슬릿', 'acc.charm.desc': '성스러운 참 펜던트가 달린 섬세한 금 체인 팔찌',
    'acc.necklace': 'Na Nach 이름 목걸이', 'acc.necklace.desc': '히브리어 문자 네임플레이트 목걸이 — Na Nach Nachma Nachman',
    'acc.cufflinks': '신성한 커프스 버튼', 'acc.cufflinks.desc': 'Na Nach이 새겨진 라운드 골드 커프스 버튼',
    'acc.pin': '국기 라펠 핀', 'acc.pin.desc': '에나멜 국기 핀 — Hafatsa 사명에서 당신의 나라를 대표하세요',
    'acc.cta': '장바구니에 추가', 'acc.tier.standard': '스탠다드', 'acc.tier.premium': '프리미엄',`,

  pt: `    'problem.card1.title': 'LOOP DOPAMINÉRGICO', 'problem.card1.desc': 'Seu cérebro é sequestrado por algoritmos de retenção projetados para maximizar o engajamento.',
    'problem.card2.title': 'PARALISIA DECISIONAL', 'problem.card2.desc': 'O excesso de opções cria a ilusão de escolha. Resultado: ansiedade crônica.',
    'problem.card3.title': 'EROSÃO DE IDENTIDADE', 'problem.card3.desc': 'As redes sociais fragmentam o Eu. Você se torna uma coleção de personas.',
    'problem.card4.title': 'O VAZIO EXISTENCIAL', 'problem.card4.desc': '79% da Gen Z relata um sentimento de vazio espiritual.',
    'problem.quote': 'O mundo inteiro é uma ponte muito estreita', 'problem.quote.attr': 'Rabi Nachman',
    'solution.code.output': 'Vitalidade Pura ✨',
    'manifesto.line1': 'Não vendemos um produto.', 'manifesto.line2': 'Acendemos um fogo.',
    'manifesto.line3': 'Cada Nova Key que sai de Jerusalém carrega 250 anos de chama.',
    'manifesto.line4': 'Quando você escaneia seu cartão, você ativa um circuito antigo. Você se torna um elo na corrente.',
    'manifesto.sacred': "Ein Ye'ush Ba'olam Klal — Não há desespero no mundo",
    'manifesto.sig1': 'Escrito em 12 de Tevet, ano da Renovação', 'manifesto.sig2': 'Pela graça do Santo, bendito seja', 'manifesto.sig3': 'E para a bênção do mundo',
    'acc.title': 'ARTEFATOS SAGRADOS', 'acc.subtitle': 'Joias Cyberpunk com NFC', 'acc.nfc.label': 'Chip NFC Opcional', 'acc.nfc.desc': 'Desbloqueie conteúdo digital com um toque',
    'acc.superpack': 'SUPER PACK', 'acc.superpack.desc': 'Todos os 7 Artefatos Sagrados — Coleção Completa', 'acc.superpack.includes': 'Inclui todos os acessórios + chips NFC',
    'acc.bracelet': 'Bracelete Sagrado', 'acc.bracelet.desc': 'Bracelete de ouro gravado Na Nach com texto sagrado hebraico',
    'acc.pendant': 'Pingente Corrente Petek', 'acc.pendant.desc': 'Medalhão de ouro com texto sagrado do Petek em corrente',
    'acc.ring': 'Anel Sinete da Aliança', 'acc.ring.desc': 'Anel sinete de ouro com inscrição hebraica da aliança',
    'acc.charm': 'Pulseira de Berloques Hafatsá', 'acc.charm.desc': 'Pulseira de corrente de ouro delicada com berloques sagrados',
    'acc.necklace': 'Colar Na Nach', 'acc.necklace.desc': 'Colar placa de letras hebraicas — Na Nach Nachma Nachman',
    'acc.cufflinks': 'Abotoaduras Sagradas', 'acc.cufflinks.desc': 'Abotoaduras redondas de ouro gravadas Na Nach',
    'acc.pin': 'Pin de Bandeira', 'acc.pin.desc': 'Pin esmaltado de bandeira nacional — represente sua nação na missão Hafatsá',
    'acc.cta': 'ADICIONAR AO CARRINHO', 'acc.tier.standard': 'Padrão', 'acc.tier.premium': 'Premium',`,

  de: `    'problem.card1.title': 'DOPAMIN-SCHLEIFE', 'problem.card1.desc': 'Ihr Gehirn wird von Retention-Algorithmen gekapert, die auf maximales Engagement ausgelegt sind.',
    'problem.card2.title': 'ENTSCHEIDUNGSPARALYSE', 'problem.card2.desc': 'Zu viele Optionen erzeugen die Illusion der Wahl. Ergebnis: chronische Angst.',
    'problem.card3.title': 'IDENTITÄTSEROSION', 'problem.card3.desc': 'Soziale Medien fragmentieren das Selbst. Sie werden zu einer Sammlung von Personas.',
    'problem.card4.title': 'DIE EXISTENZIELLE LEERE', 'problem.card4.desc': '79% der Gen Z berichten von einem Gefühl spiritueller Leere.',
    'problem.quote': 'Die ganze Welt ist eine sehr schmale Brücke', 'problem.quote.attr': 'Rabbi Nachman',
    'solution.code.output': 'Reine Vitalität ✨',
    'manifesto.line1': 'Wir verkaufen kein Produkt.', 'manifesto.line2': 'Wir entzünden ein Feuer.',
    'manifesto.line3': 'Jeder Nova Key, der Jerusalem verlässt, trägt 250 Jahre Flamme in sich.',
    'manifesto.line4': 'Wenn Sie Ihre Karte scannen, aktivieren Sie einen uralten Kreislauf. Sie werden ein Glied in der Kette.',
    'manifesto.sacred': "Ein Ye'ush Ba'olam Klal — Es gibt keine Verzweiflung auf der Welt",
    'manifesto.sig1': 'Geschrieben am 12. Tevet, Jahr der Erneuerung', 'manifesto.sig2': 'Durch die Gnade des Heiligen, gesegnet sei Er', 'manifesto.sig3': 'Und zum Segen der Welt',
    'acc.title': 'HEILIGE ARTEFAKTE', 'acc.subtitle': 'NFC-Cyberpunk-Schmuck', 'acc.nfc.label': 'Optionaler NFC-Chip', 'acc.nfc.desc': 'Digitale Inhalte per Tippen freischalten',
    'acc.superpack': 'SUPER PACK', 'acc.superpack.desc': 'Alle 7 Heiligen Artefakte — Komplette Sammlung', 'acc.superpack.includes': 'Enthält alle Accessoires + NFC-Chips',
    'acc.bracelet': 'Heiliges Manschettenarmband', 'acc.bracelet.desc': 'Gold Na Nach graviertes Band mit hebräischem heiligem Text',
    'acc.pendant': 'Petek-Kettenanhänger', 'acc.pendant.desc': 'Goldmedaillon mit dem heiligen Petek-Text an Kette',
    'acc.ring': 'Bund-Siegelring', 'acc.ring.desc': 'Gold-Siegelring mit hebräischer Bundesinschrift',
    'acc.charm': 'Hafatsa-Charm-Armband', 'acc.charm.desc': 'Zartes Goldkettenarmband mit heiligen Charm-Anhängern',
    'acc.necklace': 'Na Nach Namenskette', 'acc.necklace.desc': 'Hebräische Buchstaben-Namensplatte — Na Nach Nachma Nachman',
    'acc.cufflinks': 'Heilige Manschettenknöpfe', 'acc.cufflinks.desc': 'Runde goldene Manschettenknöpfe mit Na Nach Gravur',
    'acc.pin': 'Flaggen-Anstecknadel', 'acc.pin.desc': 'Emaillierte Landesflaggen-Anstecknadel — vertreten Sie Ihre Nation in der Hafatsa-Mission',
    'acc.cta': 'IN DEN WARENKORB', 'acc.tier.standard': 'Standard', 'acc.tier.premium': 'Premium',`,

  ja: `    'problem.card1.title': 'ドーパミンループ', 'problem.card1.desc': 'あなたの脳はエンゲージメントを最大化するよう設計されたリテンションアルゴリズムに乗っ取られています。',
    'problem.card2.title': '決断麻痺', 'problem.card2.desc': '過剰な選択肢が選択の幻想を生み出します。結果：慢性的な不安。',
    'problem.card3.title': 'アイデンティティの侵食', 'problem.card3.desc': 'ソーシャルメディアが自己を断片化します。あなたはペルソナの集合体になります。',
    'problem.card4.title': '実存的虚空', 'problem.card4.desc': 'Z世代の79%がスピリチュアルな空虚感を報告しています。',
    'problem.quote': '全世界はとても狭い橋です', 'problem.quote.attr': 'ラビ・ナフマン',
    'solution.code.output': '純粋な活力 ✨',
    'manifesto.line1': '私たちは製品を売っているのではありません。', 'manifesto.line2': '私たちは火を灯しています。',
    'manifesto.line3': 'エルサレムを離れるすべてのNova Keyは250年の炎を携えています。',
    'manifesto.line4': 'カードをスキャンするとき、あなたは古代の回路を起動します。あなたは鎖の一環になります。',
    'manifesto.sacred': "Ein Ye'ush Ba'olam Klal — この世に絶望はまったくない",
    'manifesto.sig1': 'テベト12日、革新の年に記される', 'manifesto.sig2': '聖なるお方の恩寵により', 'manifesto.sig3': '世界の祝福のために',
    'acc.title': '聖なる遺物', 'acc.subtitle': 'NFC対応サイバーパンクジュエリー', 'acc.nfc.label': 'オプションNFCチップ', 'acc.nfc.desc': 'タップでデジタルコンテンツをアンロック',
    'acc.superpack': 'スーパーパック', 'acc.superpack.desc': '全7つの聖なる遺物 — 完全コレクション', 'acc.superpack.includes': '全アクセサリー + NFCチップ付き',
    'acc.bracelet': '聖なるカフブレスレット', 'acc.bracelet.desc': 'ヘブライ語の聖なるテキストが刻まれたゴールドNa Nachバンド',
    'acc.pendant': 'ペテクチェーンペンダント', 'acc.pendant.desc': '聖なるペテクテキストが刻まれたゴールドメダリオンチェーンペンダント',
    'acc.ring': '契約のシグネットリング', 'acc.ring.desc': '契約のヘブライ語碑文が刻まれたゴールドシグネットリング',
    'acc.charm': 'ハファツァチャームブレスレット', 'acc.charm.desc': '聖なるチャームペンダント付きの繊細なゴールドチェーンブレスレット',
    'acc.necklace': 'Na Nachネームネックレス', 'acc.necklace.desc': 'ヘブライ文字ネームプレートネックレス — Na Nach Nachma Nachman',
    'acc.cufflinks': '聖なるカフスボタン', 'acc.cufflinks.desc': 'Na Nachが刻まれたラウンドゴールドカフスボタン',
    'acc.pin': '国旗ラペルピン', 'acc.pin.desc': 'エナメル国旗ピン — ハファツァ使命であなたの国を代表',
    'acc.cta': 'カートに追加', 'acc.tier.standard': 'スタンダード', 'acc.tier.premium': 'プレミアム',`,

  it: `    'problem.card1.title': 'LOOP DOPAMINERGICO', 'problem.card1.desc': 'Il tuo cervello è dirottato da algoritmi di ritenzione progettati per massimizzare l\\'engagement.',
    'problem.card2.title': 'PARALISI DECISIONALE', 'problem.card2.desc': "L'eccesso di opzioni crea l'illusione della scelta. Risultato: ansia cronica.",
    'problem.card3.title': 'EROSIONE IDENTITARIA', 'problem.card3.desc': 'I social media frammentano il Sé. Diventi una collezione di personaggi.',
    'problem.card4.title': 'IL VUOTO ESISTENZIALE', 'problem.card4.desc': 'Il 79% della Gen Z riporta un senso di vuoto spirituale.',
    'problem.quote': 'Il mondo intero è un ponte molto stretto', 'problem.quote.attr': 'Rabbi Nachman',
    'solution.code.output': 'Vitalità Pura ✨',
    'manifesto.line1': 'Non vendiamo un prodotto.', 'manifesto.line2': 'Accendiamo un fuoco.',
    'manifesto.line3': 'Ogni Nova Key che lascia Gerusalemme porta con sé 250 anni di fiamma.',
    'manifesto.line4': 'Quando scansioni la tua carta, attivi un circuito antico. Diventi un anello nella catena.',
    'manifesto.sacred': "Ein Ye'ush Ba'olam Klal — Non c'è disperazione al mondo",
    'manifesto.sig1': 'Scritto il 12 Tevet, anno del Rinnovamento', 'manifesto.sig2': 'Per grazia del Santo, benedetto sia', 'manifesto.sig3': 'E per la benedizione del mondo',
    'acc.title': 'ARTEFATTI SACRI', 'acc.subtitle': 'Gioielli Cyberpunk con NFC', 'acc.nfc.label': 'Chip NFC Opzionale', 'acc.nfc.desc': 'Sblocca contenuti digitali con un tocco',
    'acc.superpack': 'SUPER PACK', 'acc.superpack.desc': 'Tutti i 7 Artefatti Sacri — Collezione Completa', 'acc.superpack.includes': 'Include tutti gli accessori + chip NFC',
    'acc.bracelet': 'Bracciale Sacro', 'acc.bracelet.desc': 'Bracciale d\\'oro inciso Na Nach con testo sacro ebraico',
    'acc.pendant': 'Ciondolo Catena Petek', 'acc.pendant.desc': 'Medaglione d\\'oro con il testo sacro del Petek su catena',
    'acc.ring': "Anello Sigillo dell'Alleanza", 'acc.ring.desc': "Anello sigillo d'oro con iscrizione ebraica dell'alleanza",
    'acc.charm': 'Bracciale Ciondoli Hafatsa', 'acc.charm.desc': 'Bracciale a catena d\\'oro delicato con ciondoli sacri',
    'acc.necklace': 'Collana Na Nach', 'acc.necklace.desc': 'Collana targhetta lettere ebraiche — Na Nach Nachma Nachman',
    'acc.cufflinks': 'Gemelli Sacri', 'acc.cufflinks.desc': 'Gemelli rotondi d\\'oro incisi Na Nach',
    'acc.pin': 'Spilla Bandiera', 'acc.pin.desc': 'Spilla bandiera nazionale smaltata — rappresenta la tua nazione nella missione Hafatsa',
    'acc.cta': 'AGGIUNGI AL CARRELLO', 'acc.tier.standard': 'Standard', 'acc.tier.premium': 'Premium',`,
};

// Find each locale's closing marker and inject keys before it
const localeOrder = ['fr', 'en', 'es', 'he', 'zh', 'ko', 'pt', 'de', 'ja', 'it'];
const lines = content.split('\n');

// Find closing lines for each locale (searching backwards from known positions)
for (const locale of localeOrder.reverse()) {
  const keys = newKeys[locale];
  if (!keys) continue;
  
  // Find pattern: closing of locale block. Look for the footer.rights or last key before },
  // We need to find the "  }," that closes this locale's translation block
  // Strategy: find the locale start, then find its closing },
  const localeStartPattern = locale === 'fr' ? "'nav.problem': " : `  ${locale}: {`;
  
  // Find all occurrences of "  }," and pick the right one
  // Instead, let's search for a unique key in each locale and insert after it
  const lastKeyPatterns = {
    fr: "'footer.rights':",
    en: "'footer.rights':",
    es: "'footer.rights':",
    he: "'footer.rights':",
    zh: "'footer.rights':",
    ko: "'footer.rights':",
    pt: "'footer.rights':",
    de: "'footer.rights':",
    ja: "'footer.rights':",
    it: "'footer.rights':",
  };

  // Find the LAST occurrence of the pattern within this locale's block
  // Actually, let's just find the right }, by locating the locale-specific last key
  // For each locale, find the line with 'footer.rights' and add after it
  let found = false;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("'footer.rights'") || lines[i].includes("'footer.attribution'")) {
      // Check if this is in the right locale block by looking at context
      // Look backwards for locale indicator
      let isRightLocale = false;
      for (let j = i - 1; j >= Math.max(0, i - 300); j--) {
        if (lines[j].match(new RegExp(`^  ${locale}:`)) || 
            (locale === 'fr' && lines[j].includes("const translations = {"))) {
          isRightLocale = true;
          break;
        }
        // If we hit another locale definition, stop
        for (const otherLocale of localeOrder) {
          if (otherLocale !== locale && lines[j].match(new RegExp(`^  ${otherLocale}:`))) {
            break;
          }
        }
      }
    }
  }
}

// Simpler approach: use regex to find each locale's closing }, 
// by searching for the last key we know exists in each block
const insertions = [];
for (const locale of ['it', 'ja', 'de', 'pt', 'ko', 'zh', 'he', 'es', 'en', 'fr']) {
  const keys = newKeys[locale];
  if (!keys) continue;
  
  // Find the line with footer.rights in this locale's section
  // We know the approximate line numbers, so find 'footer.rights' near those lines
  const regex = new RegExp(`'footer\\.rights'.*'.*'`);
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(regex)) {
      // Check if this is followed by "  }," (closing the locale block)
      // Insert new keys on the line after this one (before the },)
      insertions.push({ line: i, keys });
      break; // Only first match - but we need all! Remove break and track which locale
    }
  }
}

// Actually this is getting complicated. Let me use a much simpler approach.
// Just find the exact closing patterns using the line numbers I already know.
// FR ends at ~282, EN ends at ~514, etc. But the file has changed.
// Let me just use sed-style insertion.

// SIMPLEST APPROACH: Read the file, find each 'footer.rights' line,
// and after the LAST key before }, insert the new keys.

let result = content;

// Process in reverse order to maintain line numbers
const localesInOrder = ['it', 'ja', 'de', 'pt', 'ko', 'zh', 'he', 'es', 'en', 'fr'];

for (const locale of localesInOrder) {
  const keys = newKeys[locale];
  if (!keys) continue;
  
  // Find pattern specific to each locale section
  let searchKey;
  if (locale === 'fr') {
    searchKey = "'footer.attribution': 'Créé avec";
  } else if (locale === 'en') {
    searchKey = "'footer.attribution': 'Built with";
  } else if (locale === 'es') {
    searchKey = "'footer.rights': '© 2026 Dream Nova. Todos";
  } else if (locale === 'he') {
    searchKey = "'footer.rights': '© 2026 Dream Nova. כל";
  } else if (locale === 'zh') {
    searchKey = "'footer.rights': '© 2026 Dream Nova. 保留所有权利";
  } else if (locale === 'ko') {
    searchKey = "'footer.rights': '© 2026 Dream Nova. 모든 권리";
  } else if (locale === 'pt') {
    searchKey = "'footer.rights': '© 2026 Dream Nova. Todos os direitos";
  } else if (locale === 'de') {
    searchKey = "'footer.rights': '© 2026 Dream Nova. Alle Rechte";
  } else if (locale === 'ja') {
    searchKey = "'footer.rights': '© 2026 Dream Nova. 全著作権";
  } else if (locale === 'it') {
    searchKey = "'footer.rights': '© 2026 Dream Nova. Tutti";
  }
  
  if (searchKey && result.includes(searchKey)) {
    // Find the line containing this key and append new keys after it  
    const idx = result.indexOf(searchKey);
    const lineEnd = result.indexOf('\n', idx);
    result = result.slice(0, lineEnd + 1) + keys + '\n' + result.slice(lineEnd + 1);
    console.log(`✅ Injected keys for ${locale}`);
  } else {
    console.log(`⚠️ Could not find insertion point for ${locale}: ${searchKey}`);
  }
}

fs.writeFileSync(FILE, result, 'utf8');
console.log('✅ All keys injected. File saved.');
