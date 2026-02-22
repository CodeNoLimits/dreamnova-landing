#!/usr/bin/env node
/**
 * Inject research translation keys into all 11 locales in i18n.ts
 */
const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, 'src/lib/i18n.ts');
let content = fs.readFileSync(i18nPath, 'utf8');

// Research keys for all 11 locales
const researchKeys = {
  fr: {
    'research.badge': 'Bibliothèque de Recherche',
    'research.hero.title1': 'Le Codex ',
    'research.hero.title2': 'DreamNova',
    'research.stat.documents': 'documents',
    'research.stat.words': 'mots',
    'research.stat.domains': 'domaines',
    'research.stat.languages': 'langues',
    'research.search.placeholder': 'Rechercher dans les documents...',
    'research.results': 'résultats',
    'research.filter.all': 'Tous',
    'research.empty.title': 'Aucun document trouvé',
    'research.empty.desc': 'Essayez de modifier vos critères de recherche ou de changer de catégorie.',
    'research.reader.back': '← Bibliothèque',
    'research.reader.download': 'Télécharger PDF',
    'research.reader.toc': 'Table des Matières',
  },
  en: {
    'research.badge': 'Research Library',
    'research.hero.title1': 'The DreamNova ',
    'research.hero.title2': 'Codex',
    'research.stat.documents': 'documents',
    'research.stat.words': 'words',
    'research.stat.domains': 'domains',
    'research.stat.languages': 'languages',
    'research.search.placeholder': 'Search documents...',
    'research.results': 'results',
    'research.filter.all': 'All',
    'research.empty.title': 'No documents found',
    'research.empty.desc': 'Try adjusting your search criteria or changing the category.',
    'research.reader.back': '← Library',
    'research.reader.download': 'Download PDF',
    'research.reader.toc': 'Table of Contents',
  },
  es: {
    'research.badge': 'Biblioteca de Investigación',
    'research.hero.title1': 'El Codex ',
    'research.hero.title2': 'DreamNova',
    'research.stat.documents': 'documentos',
    'research.stat.words': 'palabras',
    'research.stat.domains': 'dominios',
    'research.stat.languages': 'idiomas',
    'research.search.placeholder': 'Buscar documentos...',
    'research.results': 'resultados',
    'research.filter.all': 'Todos',
    'research.empty.title': 'No se encontraron documentos',
    'research.empty.desc': 'Intenta ajustar tus criterios de búsqueda o cambiar de categoría.',
    'research.reader.back': '← Biblioteca',
    'research.reader.download': 'Descargar PDF',
    'research.reader.toc': 'Tabla de Contenidos',
  },
  he: {
    'research.badge': 'ספריית מחקר',
    'research.hero.title1': 'הקודקס של ',
    'research.hero.title2': 'DreamNova',
    'research.stat.documents': 'מסמכים',
    'research.stat.words': 'מילים',
    'research.stat.domains': 'תחומים',
    'research.stat.languages': 'שפות',
    'research.search.placeholder': 'חיפוש במסמכים...',
    'research.results': 'תוצאות',
    'research.filter.all': 'הכל',
    'research.empty.title': 'לא נמצאו מסמכים',
    'research.empty.desc': 'נסו לשנות את קריטריוני החיפוש או לעבור קטגוריה.',
    'research.reader.back': '← ספרייה',
    'research.reader.download': 'הורד PDF',
    'research.reader.toc': 'תוכן עניינים',
  },
  zh: {
    'research.badge': '研究图书馆',
    'research.hero.title1': 'DreamNova ',
    'research.hero.title2': '法典',
    'research.stat.documents': '文档',
    'research.stat.words': '字',
    'research.stat.domains': '领域',
    'research.stat.languages': '语言',
    'research.search.placeholder': '搜索文档...',
    'research.results': '结果',
    'research.filter.all': '全部',
    'research.empty.title': '未找到文档',
    'research.empty.desc': '尝试调整搜索条件或更改类别。',
    'research.reader.back': '← 图书馆',
    'research.reader.download': '下载 PDF',
    'research.reader.toc': '目录',
  },
  ko: {
    'research.badge': '연구 도서관',
    'research.hero.title1': 'DreamNova ',
    'research.hero.title2': '코덱스',
    'research.stat.documents': '문서',
    'research.stat.words': '단어',
    'research.stat.domains': '도메인',
    'research.stat.languages': '언어',
    'research.search.placeholder': '문서 검색...',
    'research.results': '결과',
    'research.filter.all': '전체',
    'research.empty.title': '문서를 찾을 수 없습니다',
    'research.empty.desc': '검색 기준을 조정하거나 카테고리를 변경해 보세요.',
    'research.reader.back': '← 도서관',
    'research.reader.download': 'PDF 다운로드',
    'research.reader.toc': '목차',
  },
  pt: {
    'research.badge': 'Biblioteca de Pesquisa',
    'research.hero.title1': 'O Codex ',
    'research.hero.title2': 'DreamNova',
    'research.stat.documents': 'documentos',
    'research.stat.words': 'palavras',
    'research.stat.domains': 'domínios',
    'research.stat.languages': 'idiomas',
    'research.search.placeholder': 'Pesquisar documentos...',
    'research.results': 'resultados',
    'research.filter.all': 'Todos',
    'research.empty.title': 'Nenhum documento encontrado',
    'research.empty.desc': 'Tente ajustar seus critérios de pesquisa ou mudar de categoria.',
    'research.reader.back': '← Biblioteca',
    'research.reader.download': 'Baixar PDF',
    'research.reader.toc': 'Sumário',
  },
  de: {
    'research.badge': 'Forschungsbibliothek',
    'research.hero.title1': 'Der DreamNova ',
    'research.hero.title2': 'Kodex',
    'research.stat.documents': 'Dokumente',
    'research.stat.words': 'Wörter',
    'research.stat.domains': 'Bereiche',
    'research.stat.languages': 'Sprachen',
    'research.search.placeholder': 'Dokumente durchsuchen...',
    'research.results': 'Ergebnisse',
    'research.filter.all': 'Alle',
    'research.empty.title': 'Keine Dokumente gefunden',
    'research.empty.desc': 'Versuchen Sie, Ihre Suchkriterien anzupassen oder die Kategorie zu ändern.',
    'research.reader.back': '← Bibliothek',
    'research.reader.download': 'PDF herunterladen',
    'research.reader.toc': 'Inhaltsverzeichnis',
  },
  ja: {
    'research.badge': '研究ライブラリ',
    'research.hero.title1': 'DreamNova ',
    'research.hero.title2': 'コーデックス',
    'research.stat.documents': 'ドキュメント',
    'research.stat.words': '語',
    'research.stat.domains': 'ドメイン',
    'research.stat.languages': '言語',
    'research.search.placeholder': 'ドキュメントを検索...',
    'research.results': '件の結果',
    'research.filter.all': 'すべて',
    'research.empty.title': 'ドキュメントが見つかりません',
    'research.empty.desc': '検索条件を調整するか、カテゴリを変更してみてください。',
    'research.reader.back': '← ライブラリ',
    'research.reader.download': 'PDF ダウンロード',
    'research.reader.toc': '目次',
  },
  it: {
    'research.badge': 'Biblioteca di Ricerca',
    'research.hero.title1': 'Il Codex ',
    'research.hero.title2': 'DreamNova',
    'research.stat.documents': 'documenti',
    'research.stat.words': 'parole',
    'research.stat.domains': 'domini',
    'research.stat.languages': 'lingue',
    'research.search.placeholder': 'Cerca documenti...',
    'research.results': 'risultati',
    'research.filter.all': 'Tutti',
    'research.empty.title': 'Nessun documento trovato',
    'research.empty.desc': 'Prova a modificare i criteri di ricerca o a cambiare categoria.',
    'research.reader.back': '← Biblioteca',
    'research.reader.download': 'Scarica PDF',
    'research.reader.toc': 'Indice',
  },
  ru: {
    'research.badge': 'Исследовательская библиотека',
    'research.hero.title1': 'Кодекс ',
    'research.hero.title2': 'DreamNova',
    'research.stat.documents': 'документов',
    'research.stat.words': 'слов',
    'research.stat.domains': 'областей',
    'research.stat.languages': 'языков',
    'research.search.placeholder': 'Поиск документов...',
    'research.results': 'результатов',
    'research.filter.all': 'Все',
    'research.empty.title': 'Документы не найдены',
    'research.empty.desc': 'Попробуйте изменить критерии поиска или сменить категорию.',
    'research.reader.back': '← Библиотека',
    'research.reader.download': 'Скачать PDF',
    'research.reader.toc': 'Содержание',
  },
};

// The marker line in each locale to insert before (last key in each locale section)
// We'll insert after 'dash.nfc.scans' line for each locale
const localeOrder = ['fr', 'en', 'es', 'he', 'zh', 'ko', 'pt', 'de', 'ja', 'it', 'ru'];

// For ru, insert before 'success.title' which is the block after portal keys
// Actually, let's find a consistent approach: insert after the last existing key before the closing brace

// Split into lines
const lines = content.split('\n');

// For each locale, find the 'dash.nfc.scans' line and insert research keys after it
// Process in reverse order to preserve line numbers
const insertions = [];

for (const locale of localeOrder) {
  const keys = researchKeys[locale];
  let searchKey = "'dash.nfc.scans'";
  
  // For ru locale, the structure is different - search for its last key
  if (locale === 'ru') {
    searchKey = "'success.dashboard'";
  }
  
  // Find the line number for this locale's marker
  let found = false;
  let localeStartLine = -1;
  
  // First find where this locale starts
  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (locale === 'fr' && trimmed === 'fr: {') {
      localeStartLine = i;
    } else if (locale !== 'fr' && trimmed === `${locale}: {`) {
      localeStartLine = i;
    }
  }
  
  // Then find the dash.nfc.scans line after this locale start
  for (let i = localeStartLine; i < lines.length; i++) {
    if (lines[i].includes(searchKey) && i > localeStartLine) {
      // Insert after this line
      const keysStr = Object.entries(keys)
        .map(([k, v]) => `    '${k}': '${v.replace(/'/g, "\\'")}',`)
        .join('\n');
      
      insertions.push({
        lineIndex: i,
        text: `    // Research Library Page\n${keysStr}`,
      });
      found = true;
      break;
    }
  }
  
  if (!found) {
    console.error(`Could not find marker for locale: ${locale}`);
  }
}

// Sort insertions in reverse order by line index
insertions.sort((a, b) => b.lineIndex - a.lineIndex);

// Apply insertions
for (const ins of insertions) {
  lines.splice(ins.lineIndex + 1, 0, ins.text);
}

// Write back
fs.writeFileSync(i18nPath, lines.join('\n'));

console.log(`Injected research keys into ${insertions.length} locales`);
console.log('Done!');
