import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import documentsData from '@/data/documents.json';
import { DocumentReader } from './DocumentReader';

type DocumentEntry = (typeof documentsData.documents)[number] & {
  contentPath?: string;
  hasFullContent?: boolean;
  sections?: Array<{ title: string; anchor: string; level: number }>;
};

const allDocs = documentsData.documents as DocumentEntry[];

export function generateStaticParams() {
  return allDocs
    .filter((d) => d.isBestVersion && d.contentPath)
    .map((d) => ({ slug: d.slug }));
}

export default async function DocumentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = allDocs.find((d) => d.slug === slug);

  if (!doc || !doc.contentPath) {
    return notFound();
  }

  const contentPath = path.join(process.cwd(), 'src/data/content', doc.contentPath);
  let content = '';
  try {
    content = fs.readFileSync(contentPath, 'utf-8');
  } catch {
    return notFound();
  }

  // Find prev/next in same category
  const sameCategoryDocs = allDocs
    .filter((d) => d.category === doc.category && d.isBestVersion && d.contentPath)
    .sort((a, b) => b.wordCount - a.wordCount);

  const currentIdx = sameCategoryDocs.findIndex((d) => d.slug === slug);
  const prevDoc = currentIdx > 0 ? sameCategoryDocs[currentIdx - 1] : null;
  const nextDoc =
    currentIdx < sameCategoryDocs.length - 1
      ? sameCategoryDocs[currentIdx + 1]
      : null;

  return (
    <DocumentReader
      doc={{
        title: doc.title,
        slug: doc.slug,
        category: doc.category,
        categoryLabel: doc.categoryLabel,
        categoryIcon: doc.categoryIcon,
        categoryColor: doc.categoryColor,
        language: doc.language,
        wordCount: doc.wordCount,
        sections: doc.sections || [],
      }}
      content={content}
      prevDoc={
        prevDoc
          ? { title: prevDoc.title, slug: prevDoc.slug }
          : null
      }
      nextDoc={
        nextDoc
          ? { title: nextDoc.title, slug: nextDoc.slug }
          : null
      }
    />
  );
}
