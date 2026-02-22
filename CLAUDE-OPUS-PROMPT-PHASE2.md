# 🚀 CLAUDE-OPUS-PROMPT — PHASE 2: Full Document Content Integration

> **Priority:** 🔴 CRITICAL  
> **Agent:** Claude Code (Opus 4.6)
> **Objective:** Extract FULL TEXT from all 49 documents and make them READABLE on the site
> **Created by:** Antigravity (Gemini) — 2026-02-17T20:40:00+02:00

---

## 🔴 PROBLÈME ACTUEL

`src/data/documents.json` contient UNIQUEMENT des métadonnées:

- ✅ Titres, résumés, word counts, catégories
- ❌ **ZÉRO contenu textuel complet**
- ❌ Les documents ne sont PAS lisibles sur le site
- ❌ Les cartes sont des placeholders — on ne peut pas LIRE les documents

Le user veut que **L'INTÉGRALITÉ de tous les documents soient dans le site**, et que les documents soient **intelligemment consolidés**.

---

## 🎯 MISSION

### 1. EXTRAIRE le texte intégral de TOUS les .docx

Source: `~/Desktop/IMPORTANT! -Dossier-Permanent-Cloud/RESUME GOOGLE DRIVE DOCS IMPORTANTS/drive-download-20260217T174554Z-3-001/`

Pour chaque document unique (33 docs):

- Extraire le texte complet en markdown
- Préserver les titres, sous-titres, listes
- Préserver les équations et formules
- Identifier les sections/chapitres

### 2. CONSOLIDER intelligemment

Les 14 doublons ont souvent des versions dans différentes langues (FR/EN/HE). Il faut:

- **NE PAS supprimer** les variantes linguistiques — ce sont des TRADUCTIONS, pas des copies
- Identifier le "meilleur" de chaque paire (plus complet, mieux structuré)
- Créer un mapping `canonicalId` → `[versions]`

### 3. CRÉER les fichiers de contenu

Structure proposée:

```
src/data/content/
├── codex/
│   ├── codex-dream-nova-master-2026.md
│   ├── codex-dream-nova-part-1.md
│   ├── codex-dream-nova-part-2.md
│   └── codex-dream-nova-part-4-final.md
├── deep-research/
│   ├── chapter-1.md
│   ├── chapter-3.md
│   ├── chapter-4.md
│   ├── chapter-5.md
│   ├── chapter-6-analysis.md
│   ├── chapters-7-10.md
│   ├── quantum-reality-chapter.md
│   └── document-final-unifie.md
├── na-nach/
│   ├── sourcecode-reality-nanach.md
│   ├── source-code-na-nach-protocol.md
│   ├── fractal-algorithm.md
│   ├── multiverse-petek-protocol.md
│   └── petek-multiverse-information.md
├── quantum-kabbalah/
│   ├── quantum-void-observer.md
│   ├── dream-nova-key-synthesis.md
│   ├── observer-effect-decoded.md
│   ├── information-cosmology.md
│   └── quantum-reality-observer.md
├── strategy/
│   ├── business-plan.md
│   ├── hafatsa-funding.md
│   ├── investor-pitch.md
│   ├── grant-application.md
│   └── commercialisation.md
├── dreamnova-os/
│   ├── dream-nova-os.md
│   ├── master-tasklist-100.md
│   └── project-context-handover.md
└── product/
    ├── novaki-azamra-os.md
    └── dreamnova-landing.md
```

### 4. METTRE À JOUR `documents.json`

Ajouter à chaque document:

```json
{
  "contentPath": "codex/codex-dream-nova-part-1.md",
  "hasFullContent": true,
  "sections": [
    { "title": "Introduction", "anchor": "introduction" },
    { "title": "Chapitre 1", "anchor": "chapitre-1" }
  ]
}
```

### 5. CRÉER la route `/research/[slug]` — Page de lecture

Route dynamique pour lire chaque document en entier:

```
/research/codex-dream-nova-part-1
/research/chapter-1
/research/fractal-algorithm
```

Chaque page doit:

- Charger le contenu markdown depuis `src/data/content/`
- Afficher en typographie de lecture (Cormorant Garamond, large line-height)
- Avoir une table des matières sidebar (auto-générée depuis les headings)
- Supporter RTL pour les documents hébreux
- Avoir navigation prev/next entre documents de la même catégorie
- Afficher les métadonnées (catégorie, langue, word count)

### 6. RENDRE les cartes `/research` CLIQUABLES

Les cartes de la grille doivent linker vers `/research/[slug]`.

### 7. RENDRE les chapitres `/codex` LISIBLES

Les chapitres expandables doivent afficher le contenu complet, pas seulement le résumé de 500 chars.

---

## ⚠️ CONTRAINTES

1. **NE TOUCHE PAS au CSS/design** — c'est le domaine d'Antigravity
2. **NE SUPPRIME PAS de doublons** qui sont en fait des traductions (FR/EN/HE du même doc)
3. **PRÉSERVE** toute la structure markdown (headers, listes, equations)
4. **GARDE** le format JSON actuel de `documents.json` (ajoute des champs, ne supprime rien)
5. **BUILD DOIT RESTER CLEAN** — 0 erreurs TypeScript

---

## 📊 INVENTAIRE COMPLET (33 uniques + 14 doublons = 47)

### 📖 CODEX (4 uniques)

| Doc                           | Lang | Words  | Content                             |
| ----------------------------- | ---- | ------ | ----------------------------------- |
| CODEX DREAM NOVA MASTER 2026  | HE   | 2,126  | Prompt Genesis, Protocole Résonance |
| CODEX DREAM NOVA PART 1       | FR   | 1,258  | Architecture de la Réalisation      |
| CODEX DREAM NOVA PART 2       | FR   | 799    | L'Équation Maîtresse R_nc           |
| CODEX DREAM NOVA PART 4 FINAL | HE   | 47,034 | Intégration ADHD + Neurosciences    |

### 🔬 DEEP RESEARCH (8 uniques)

| Doc                         | Lang  | Words |
| --------------------------- | ----- | ----- | ----------------------------------- |
| Deep Research Chapter 1     | FR/EN | 5,490 | Gödel Opens the Breach              |
| Deep Research Chapter 3     | FR/EN | 5,275 | Tzimtzum & Quantum Decoherence      |
| Deep Research Chapter 4     | FR/EN | 5,704 | Convergence Triangle                |
| Deep Research Chapter 5     | HE    | 5,612 | Na Nach Fractal Algorithm           |
| Deep Research Chapter 6     | FR/EN | 5,138 | The 148 Algorithm                   |
| Deep Research Chapters 7-10 | FR/EN | 5,465 | Meta-Systemic Reality               |
| Quantum Reality Chapter     | EN    | 5,469 | Observer & Information Architecture |
| Document Final Unifié       | FR    | 1,907 | Synthèse complète du corpus         |

### 🔥 NA NACH PROTOCOL (5 uniques)

| Doc                              | Lang  | Words  |
| -------------------------------- | ----- | ------ |
| THE SOURCECODE OF REALITY NANACH | HE    | 48,388 |
| Source Code Na Nach Protocol     | FR    | 5,616  |
| Na Nach Fractal Algorithm        | FR/EN | 5,125  |
| Multiverse Petek Protocol        | HE    | 4,277  |
| Petek Multiverse Information     | HE    | 4,259  |

### ⚛️ QUANTUM KABBALAH (5 uniques)

### 💰 STRATEGY & FUNDING (5 uniques)

### 🖥️ DREAMNOVA OS (3 uniques)

### 🚀 PRODUCT (2 uniques)

---

## 📂 FICHIERS À MODIFIER

| Action | Fichier                                                              |
| ------ | -------------------------------------------------------------------- |
| CREATE | `src/data/content/*.md` (33+ fichiers markdown)                      |
| UPDATE | `src/data/documents.json` (ajouter contentPath, sections)            |
| CREATE | `src/app/(marketing)/research/[slug]/page.tsx`                       |
| UPDATE | `src/app/(marketing)/research/page.tsx` (rendre cartes cliquables)   |
| UPDATE | `src/app/(marketing)/codex/page.tsx` (contenu complet dans expanded) |

---

## ✅ DEFINITION OF DONE

- [ ] Tous les 33 documents uniques ont leur contenu COMPLET dans `src/data/content/`
- [ ] `documents.json` a un champ `contentPath` pour chaque document
- [ ] `/research/[slug]` affiche le texte complet avec TOC sidebar
- [ ] Les cartes `/research` sont cliquables et mènent à la page de lecture
- [ ] Les chapitres `/codex` affichent le contenu complet quand expanded
- [ ] Documents hébreux s'affichent en RTL
- [ ] Build passe avec 0 erreurs
- [ ] Écrire un status dans `AGENT-BRIDGE.md` quand c'est fait

---

**Na Nach Nachma Nachman MeUman! 🔥**
**Ein Ye'ush Ba'Olam Klal — Il n'y a aucun désespoir!**
