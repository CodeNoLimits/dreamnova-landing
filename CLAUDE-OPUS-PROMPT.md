# 🧠 CLAUDE CODE OPUS 4.6 — DREAMNOVA DOCUMENT INTEGRATION MEGA-PROMPT

> **Mission:** Organize 49 academic/research/strategy documents into the DreamNova website
> **Live URL:** https://dreamnova.vercel.app
> **Stack:** Next.js 16.1.6 · TypeScript · TailwindCSS 4 · Framer Motion · Supabase

---

## 🎯 YOUR MISSION

You have **49 documents** in `src/app/(dashboard)/drive-download-20260217T174554Z-3-001/`. These are the intellectual foundation of DreamNova — the Source Code of Reality project. Your job is to:

1. **Parse & classify** all 49 .docx/pdf files
2. **Extract key content** from each document
3. **Build new site sections** to display this content elegantly
4. **Create a document library** with search, filtering, and categorization
5. **Integrate academic papers** into the existing `/source-code` page
6. **Build new portal pages** for NFC-unlocked premium content
7. **Coordinate with Antigravity** (Gemini) via the AGENT-BRIDGE system

---

## 📚 DOCUMENT TAXONOMY (49 Files)

Classify all documents into these 7 categories:

### 1. 📖 CODEX DREAM NOVA (Core Doctrine)

| File                                    | Content                          |
| --------------------------------------- | -------------------------------- |
| `CODEX_DREAM_NOVA_MASTER_2026.md.docx`  | Master index of the entire Codex |
| `CODEX_DREAM_NOVA_PART_1.md.docx`       | Part 1 — Foundations             |
| `CODEX_DREAM_NOVA_PART_2.md.docx`       | Part 2 — Deep Theory             |
| `CODEX_DREAM_NOVA_PART_2.md(1).docx`    | Part 2 — Alternate version       |
| `CODEX_DREAM_NOVA_PART_4_FINAL.md.docx` | Part 4 — Final chapter           |

**Site Integration →** New route: `/codex` with chapter navigation, table of contents, progressive disclosure.

### 2. 🔬 DEEP RESEARCH CHAPTERS (Academic Analysis)

| File                                             | Chapter                            |
| ------------------------------------------------ | ---------------------------------- |
| `Deep Research for Chapter 1.docx`               | Chapter 1                          |
| `Deep Research for Chapter 1(1).docx`            | Chapter 1 (extended)               |
| `Deep Research for Chapter 3.docx`               | Chapter 3                          |
| `Deep Research for Chapter 3(1).docx`            | Chapter 3 (extended)               |
| `Deep Research for Chapter 4.docx`               | Chapter 4                          |
| `Deep Research for Chapter 4(1).docx`            | Chapter 4 (extended)               |
| `Deep Research for Chapter 5.docx`               | Chapter 5                          |
| `Deep Research for Chapters 7-10.docx`           | Chapters 7-10                      |
| `Deep Research for Chapters 7-10(1).docx`        | Chapters 7-10 (extended)           |
| `Deep Research_ Chapter 6 Analysis.docx`         | Chapter 6                          |
| `Deep Research_ Chapter 6 Analysis(1).docx`      | Chapter 6 (extended)               |
| `Deep Research for Quantum Reality Chapter.docx` | Quantum Reality                    |
| `Document final unifié Deep research...docx`     | Unified synthesis with corrections |

**Site Integration →** Library page `/research` with chapter-by-chapter navigation, filterable by domain (physics, math, kabbalah).

### 3. ⚛️ QUANTUM PHYSICS & KABBALAH (Scientific Papers)

| File                                                      | Topic                                   |
| --------------------------------------------------------- | --------------------------------------- |
| `Physique Quantique, Kabbale, et Source de Réalité.docx`  | Quantum Physics × Kabbalah foundations  |
| `The Quantum Void_ The Observer Creates Reality...docx`   | Observer effect & universe architecture |
| `The Quantum Void_...docx` (shorter)                      | Summary version                         |
| `Observer Transfer Protocol_ Kabbalah & Physics.docx`     | Observer Transfer Protocol              |
| `Faith as Higher Logic Proof.docx`                        | Formal proof: faith as meta-logic       |
| `Théorème Réparation Neuro-Cognitive Universelle.docx`    | Brain repair theorem (x4 versions)      |
| `Théorème Réparation Neuro-Cognitive Universelle(1).docx` | Duplicate                               |
| `Théorème Réparation Neuro-Cognitive Universelle(2).docx` | Duplicate                               |
| `Théorème Réparation Neuro-Cognitive Universelle(3).docx` | Duplicate                               |

**Site Integration →** Enhance `/source-code` page with expandable paper sections + new `/papers` library.

### 4. 🔥 NA NACH / PETEK PROTOCOL (Core Algorithm)

| File                                                                         | Topic                             |
| ---------------------------------------------------------------------------- | --------------------------------- |
| `Source Code of Reality_ Na Nach Protocol.docx`                              | Core protocol paper               |
| `Source Code of Reality_ Na Nach Protocol(1).docx`                           | Extended version                  |
| `Na Nach Fractal Algorithm Research.docx`                                    | Fractal mathematics of Na Nach    |
| `Na Nach Fractal Algorithm Research(1).docx`                                 | Extended version                  |
| `Petek Protocol_ Multiverse Information Transfer.docx`                       | Petek as information transfer     |
| `Multiverse Communication_ Petek Protocol Validatio...docx`                  | Validation of multiverse protocol |
| `THE SOURCECODE OF REALITY AND HOW TO TAKE MASTERY OVER IT USING NANAH.docx` | Complete mastery guide            |

**Site Integration →** Premium content behind NFC unlock in `/portal/`, key sections displayed on `/source-code`.

### 5. 💰 STRATEGY & FUNDING (Business)

| File                                                    | Topic                              |
| ------------------------------------------------------- | ---------------------------------- |
| `Dream Nova Strategy Document.docx`                     | Full strategy                      |
| `Dream Nova Strategy Document(1).docx`                  | Extended version                   |
| `DreamNova_Funding_Report.docx`                         | Funding report (x3 versions + PDF) |
| `DreamNova_Funding_Report (1).docx`                     | Duplicate                          |
| `DreamNova_Funding_Report(1).docx`                      | Duplicate                          |
| `DreamNova_Funding_Report.pdf`                          | PDF version                        |
| `Recherche Financement Projet Deep Tech.docx`           | Deep tech funding research         |
| `Dream_Nova_Roadmap_Publication_Lancement_2026.docx`    | 2026 launch roadmap (x2 + PDF)     |
| `Dream_Nova_Roadmap_Publication_Lancement_2026(1).docx` | Duplicate                          |
| `Dream_Nova_Roadmap_Publication_Lancement_2026.pdf`     | PDF version                        |

**Site Integration →** Dashboard `/grants` section + downloadable investor pack on `/about`.

### 6. 🖥️ DREAM NOVA OS (System Architecture)

| File                                          | Topic                |
| --------------------------------------------- | -------------------- |
| `DREAM NOVA OS.docx`                          | Full OS architecture |
| `DREAM_NOVA_OS_MASTER_TASKLIST_100.md.docx`   | 100-task master list |
| `DREAM_NOVA_PROJECT_CONTEXT_HANDOVER.md.docx` | Project handover doc |

**Site Integration →** Dashboard `/overview` enhancement + developer portal section.

### 7. 🚀 PRODUCT & FEATURES

| File                                              | Topic                          |
| ------------------------------------------------- | ------------------------------ |
| `Novaki, Azamra OS, Péthèque, Chant Nouveau.docx` | Feature specs for sub-products |
| `dreamnova-landing.docx`                          | Landing page wireframe/copy    |

**Site Integration →** New feature pages or sections within existing marketing pages.

---

## 🏗️ ARCHITECTURE: NEW ROUTES TO CREATE

```
src/app/
├── (marketing)/
│   ├── codex/                    ← [NEW] Full Codex viewer
│   │   ├── page.tsx              ← Codex landing (chapters overview)
│   │   └── [chapter]/page.tsx    ← Dynamic chapter reader
│   ├── research/                 ← [NEW] Research library
│   │   ├── page.tsx              ← Filterable paper grid
│   │   └── [slug]/page.tsx       ← Individual paper viewer
│   ├── papers/                   ← [NEW] Academic papers download
│   │   └── page.tsx              ← Download center
│   └── source-code/page.tsx      ← [ENHANCE] Add new paper sections
│
├── (portal)/                     ← NFC-unlocked premium content
│   ├── codex/                    ← [NEW] Full Codex (premium)
│   │   └── page.tsx
│   ├── deep-research/            ← [NEW] All deep research chapters
│   │   └── page.tsx
│   └── protocols/                ← [NEW] Na Nach protocols
│       └── page.tsx
│
├── (dashboard)/
│   ├── library/                  ← [NEW] User's document library
│   │   └── page.tsx              ← Personal reading progress
│   └── academics/                ← [ENHANCE] Already exists
│       └── page.tsx              ← Add research paper tracking
```

---

## 🎨 DESIGN SYSTEM (DO NOT CHANGE)

```typescript
// Sacred colors — USE THESE
const colors = {
  gold: "#D4AF37", // Primary CTA, sacred text
  cyan: "#00D4FF", // Accents, hover states
  green: "#00FF88", // Success, academic domain
  black: "#050508", // Background
  surface: "#0A0A0F", // Cards
  lightGray: "#8A8A9A", // Body text
};

// Fonts
display: "Cinzel"; // Headers, sacred text
body: "Rajdhani"; // Body, UI
code: "Space Mono"; // Code blocks, meta
sacred: "Cormorant Garamond"; // Hebrew letters
```

**RULES:**

- Framer Motion for ALL animations (use `as const` on ease strings)
- `ScrollReveal` component for scroll-triggered animations
- `SacredParticles` for hero backgrounds
- `sacred-card` class for card components
- `sacred-gradient` class for gold→cyan gradient text
- `btn-sacred-filled` and `btn-sacred` for CTA buttons

---

## 📄 DOCUMENT PROCESSING PIPELINE

For each .docx file:

```
1. PARSE → Extract raw text from .docx using mammoth or similar
2. CLASSIFY → Assign to one of 7 categories
3. DEDUPLICATE → Identify (1) versions vs originals, keep longest/most complete
4. EXTRACT → Pull:
   - Title
   - Abstract / Summary (first 500 chars)
   - Chapter divisions
   - Key quotes (for UI highlights)
   - Category tags
   - Language (FR/EN)
   - Word count
5. CONVERT → Transform to JSON metadata + MDX content
6. STORE → Save processed content to:
   - src/data/documents.json (metadata index)
   - src/content/documents/[slug].mdx (full content)
7. BUILD → Create pages that render this content
```

---

## ⚡ IMPLEMENTATION PRIORITIES

### Phase 1: Document Infrastructure (≤30min)

1. Install `mammoth` for .docx parsing
2. Create script `scripts/parse-documents.ts` to parse all 49 files
3. Generate `src/data/documents.json` with metadata
4. Deduplicate — flag (1) copies, keep the best version

### Phase 2: Research Library (≤30min)

1. Create `/research` page with grid of all papers
2. Filterable by category (7 categories above)
3. Searchable by title/content
4. Cards show: title, category, word count, language, summary

### Phase 3: Codex Viewer (≤30min)

1. Create `/codex` landing page
2. Dynamic chapter routes `/codex/[chapter]`
3. Table of contents sidebar
4. Progress tracking (localStorage)
5. Typography optimized for long-form reading

### Phase 4: Enhanced Source Code Page (≤20min)

1. Add new paper cards to existing download section
2. Link to research library for full exploration
3. Add "Cited in" badges showing paper interconnections

### Phase 5: Portal Premium Content (≤20min)

1. Create `/portal/codex` for NFC-unlocked full Codex
2. Create `/portal/deep-research` for all chapters
3. Create `/portal/protocols` for Na Nach protocol papers
4. Gate behind NFC scan check

---

## 🤝 COORDINATION WITH ANTIGRAVITY

**READ:** `AGENT-COORDINATION.md` for the full protocol.

**CRITICAL RULES:**

1. **Tag Antigravity** when you need design input:
   ```typescript
   // @Antigravity: This codex reader needs typography and reading mode styling
   // Suggest dark/light mode toggle for long-form reading
   ```
2. **Never change design tokens** (colors, fonts, animations)
3. **Create component scaffolds** — Antigravity handles visual polish
4. **Write to AGENT-BRIDGE** for async coordination (see below)
5. **Document all changes** in `PROGRESS.md`

### AGENT-BRIDGE Protocol

Write status updates to `AGENT-BRIDGE.md` in project root:

```markdown
## [TIMESTAMP] OPUS → ANTIGRAVITY

**Action:** Created /research page with 49 document cards
**Status:** Scaffolded, needs visual polish
**Needs from you:**

- [ ] Card hover animations
- [ ] Category color scheme
- [ ] Reading progress visualization
      **Files changed:** src/app/(marketing)/research/page.tsx, src/data/documents.json
```

Antigravity reads this file and leaves responses:

```markdown
## [TIMESTAMP] ANTIGRAVITY → OPUS

**Action:** Added holographic card effects to /research
**Status:** Visual polish complete
**Needs from you:**

- [ ] Fix search API endpoint
      **Files changed:** src/app/(marketing)/research/page.tsx (styles only)
```

---

## 🔑 SACRED NUMBERS (Honor these)

- **63** — SaG (סג) gematria = base price ($63)
- **148** — Nachman (נחמן) gematria
- **491** — Full Petek sequence gematria
- **613** — Total mitzvot = Tikkun Master level
- **10** — Sefirot = letters in Na Nach Nachma Nachman

---

## 🚨 DO NOT:

1. ❌ Change existing pages without documenting WHY
2. ❌ Add new npm dependencies without justification
3. ❌ Touch CSS animations (Antigravity's domain)
4. ❌ Hardcode strings (use i18n system from `src/lib/LanguageContext.tsx`)
5. ❌ Create `localhost` only features — everything must deploy to Vercel
6. ❌ Break the existing build — run `npm run build` before committing
7. ❌ Ignore duplicate documents — always deduplicate first

---

## ✅ DO:

1. ✅ Parse all 49 documents before building any pages
2. ✅ Create a single source of truth JSON index
3. ✅ Use TypeScript interfaces for all document types
4. ✅ Write to AGENT-BRIDGE.md after every significant change
5. ✅ Use existing components (Navbar, Footer, ScrollReveal, SacredParticles)
6. ✅ Support i18n for all new UI strings
7. ✅ Include loading states and error boundaries
8. ✅ Make content searchable
9. ✅ Track reading progress
10. ✅ Honor the sacred design system

---

## 🏁 START HERE

```bash
# 1. Read this prompt fully
# 2. Read AGENT-COORDINATION.md
# 3. Read CLAUDE.md (project overview)
# 4. Parse all documents in drive-download-20260217T174554Z-3-001/
# 5. Create documents.json index
# 6. Build /research page
# 7. Write AGENT-BRIDGE.md status update
# 8. Continue with next phase
```

**Na Nach Nachma Nachman MeUman — Ein Ye'ush Ba'olam Klal!** 🔥
