# TASK_QUEUE — File d'Attente par Agent

> **Dernière mise à jour:** 2026-02-17T20:45:00+02:00
> **Mis à jour par:** Opus (Claude Code Opus 4.6)

---

## OPUS (Claude Code Opus 4.6) — Architecture & Parsing

### ✅ TOUTES TÂCHES PHASE 1 TERMINÉES

| #   | Tâche                                               | Status | Notes |
| --- | --------------------------------------------------- | ------ | ----- |
| O-1 | ✅ Installer `mammoth` pour parsing .docx           | Fait   | mammoth 1.9.0 |
| O-2 | ✅ Créer `scripts/parse-documents.mjs`              | Fait   | 267 lignes |
| O-3 | ✅ Parser les 47 .docx → extraire texte brut        | Fait   | 263,137 mots |
| O-4 | ✅ Dédupliquer les fichiers (14 doublons détectés)  | Fait   | 33 unique / 14 dup |
| O-5 | ✅ Créer `src/data/documents.json`                  | Fait   | Index maître complet |
| O-6 | ✅ Créer page `/research` — grille filtrable         | Fait   | 207 lignes |
| O-7 | ✅ Créer page `/codex` — landing avec chapitres     | Fait   | 208 lignes |
| O-14 | ✅ Créer `/dashboard/library` (admin docs)          | Fait   | 180 lignes |
| O-FIX | ✅ Fix hafatsa/overview/language-selector          | Fait   | 3 TypeScript errors |
| O-DEPLOY | ✅ Deploy to Vercel production                  | Fait   | 35 pages, 0 errors |

### 🟡 Phase 2 (en attente)

| #    | Tâche                                                | Dépendances |
| ---- | ---------------------------------------------------- | ----------- |
| O-8  | Créer `/codex/[chapter]` — lecteur dynamique         | Après styling Antigravity |
| O-9  | Enrichir `/source-code` — ajouter nouveaux papiers   | — |
| O-11 | Créer `/portal/codex` (contenu premium NFC)          | — |
| O-12 | Créer `/portal/deep-research`                        | — |
| O-13 | Créer `/portal/protocols` (Na Nach)                  | — |
| O-15 | Créer API `/api/documents/search`                    | — |

---

## ANTIGRAVITY (Gemini) — Design & UX

### ✅ Terminées

| #   | Tâche                                                | Status |
| --- | ---------------------------------------------------- | ------ |
| A-1 | ✅ Créer `_Coordination/` (3 fichiers)               | Fait |
| A-2 | ✅ Écrire méga-prompt Opus (`CLAUDE-OPUS-PROMPT.md`) | Fait |
| A-3 | ✅ Écrire `AGENT-BRIDGE.md`                          | Fait |

### 🔴 PRIORITÉ HAUTE — Pages LIVE, besoin styling MAINTENANT

Les 3 pages sont déployées sur https://dreamnova.vercel.app avec du styling Tailwind basique.
Antigravity doit les transformer avec le design system sacré.

| #   | Tâche | Page | Fichier | Détails |
| --- | ----- | ---- | ------- | ------- |
| A-4 | 🔴 **Styler les document cards `/research`** | `/research` | `src/app/(marketing)/research/page.tsx` | Cards aux lignes 142-192. Chaque card a: categoryColor, categoryIcon, title, summary, wordCount, chapterCount, language flag. Ajouter: hover holographique, ombre portée, border glow par catégorie, lift effect au hover. AnimatePresence déjà en place. |
| A-5 | 🔴 **Palette couleurs catégories** | Toutes | `src/data/documents.json` → `categories` | 7 catégories déjà avec couleurs: Gold (#D4AF37), Cyan (#00D4FF), Green (#00FF88), Orange (#FF6B35), Yellow (#FFD700), Purple (#9B59B6), Pink (#FF69B4). Créer badges visuels cohérents. |
| A-6 | 🔴 **Styler le CODEX reader `/codex`** | `/codex` | `src/app/(marketing)/codex/page.tsx` | Chapter cards lignes 77-146 (expand/collapse onClick). Master Equation lignes 150-165 (typo spéciale R_nc = ΔC · [(A · P) / N_dmn + G]). 3 domain cards lignes 168-202. |
| A-7 | 🔴 **Typographie Master Equation** | `/codex` | même fichier, lignes 150-165 | L'équation `R_nc = ΔC · [(A · P) / N_dmn + G]` a besoin d'une typo scientifique distinctive. Subscripts, symboles grecs, peut-être fond parchment/gold. |
| A-8 | 🟡 **Fire variant backgrounds research pages** | `/research` + `/codex` | Les deux fichiers | Ajouter fire/sacred backgrounds subtils derrière le hero de ces pages. Les SacredParticles sont déjà importées. |
| A-9 | 🟡 **Loading skeletons document grid** | `/research` | research/page.tsx | Créer skeletons animés pendant que les filtres changent. Structure: card rectangle avec pulse animation. |
| A-10 | 🟡 **Reading mode typography expanded docs** | `/codex` | codex/page.tsx lignes 120-143 | Quand un chapter est expanded, le texte summary s'affiche. Améliorer la lisibilité: plus grand font, meilleur line-height, serif font possible. |
| A-11 | 🟢 **RTL support Hebrew documents** | `/research` | research/page.tsx | 11 docs sont en Hebrew. Quand `doc.language === 'he'`, la card devrait être en `dir="rtl"`. |
| A-12 | 🟢 **Dashboard library polish** | `/dashboard/library` | library/page.tsx | Optionnel: améliorer le table design, ajouter hover effects sur les lignes, badges plus visuels. |

### Contexte technique pour Antigravity:

**Pattern de page marketing:**
```
'use client' → imports → Navbar + main + Footer
SacredParticles dans le hero
Framer Motion: motion.div avec initial/animate/transition
Couleurs: sacred-gradient, text-gold, bg-sacred-surface, border-gold/XX
```

**i18n:** Les pages /research et /codex utilisent du texte EN hardcodé (pas i18n). Antigravity peut ajouter les traductions dans `src/lib/i18n.ts` si besoin.

**Animations déjà en place:**
- `/research`: AnimatePresence mode="popLayout" + scale in/out sur les cards
- `/codex`: x slide-in sur les chapter cards, delayed by 0.15s each
- Les deux: hero text fade-in/slide-up séquentiel

---

## NOVA-TAM (Claude Sonnet) — Backend

### 🟡 En attente d'activation

| #   | Tâche                                              | Dépendances |
| --- | -------------------------------------------------- | ----------- |
| N-1 | API endpoint `/api/documents/[slug]`               | — |
| N-2 | Table Supabase `document_reads` (tracking lecture)  | — |
| N-3 | API endpoint `/api/documents/search` (full-text)   | — |
| N-4 | Intégration Stripe pour contenu premium documents   | — |
| N-5 | Webhook pour débloquer contenu après NFC scan       | — |

---

## RÉSUMÉ

| Agent       | Total tâches | Terminées | En cours | En attente |
| ----------- | ------------ | --------- | -------- | ---------- |
| OPUS        | 16           | 10        | 0        | 6          |
| ANTIGRAVITY | 15           | 3         | 0        | 12         |
| NOVA-TAM    | 5            | 0         | 0        | 5          |
| **TOTAL**   | **36**       | **13**    | **0**    | **23**     |

---

_Mis à jour par Opus après déploiement Vercel production. Antigravity: lis ce fichier + AGENT-BRIDGE.md puis commence par A-4 et A-6._
