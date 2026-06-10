import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { stories, accentHex } from '@/lib/data';
import StoryCard from '@/components/StoryCard';
import Chevron from '@/components/Chevron';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) return { title: 'Not Found' };
  return { title: story.title, description: story.excerpt };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) notFound();

  const color = accentHex[story.accent];
  const more = stories.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="wrap" style={{ paddingTop: 150, paddingBottom: 40, maxWidth: 760 }}>
        <Link href="/news" className="alink sm" style={{ color: 'var(--faint)' }}>
          <ArrowLeft size={14} style={{ marginRight: 6 }} /> All stories
        </Link>

        <p
          className="meta"
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color,
            margin: '34px 0 18px',
          }}
        >
          {story.category} · {story.date}
        </p>

        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 46,
            fontWeight: 500,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
          }}
        >
          {story.title}
        </h1>

        <p
          style={{
            fontSize: 20,
            lineHeight: 1.6,
            color: 'var(--slate)',
            margin: '26px 0 36px',
            paddingLeft: 20,
            borderLeft: `3px solid ${color}`,
          }}
        >
          {story.excerpt}
        </p>

        <div className="prose-serif">
          {story.content.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <p style={{ marginTop: 40, fontSize: 14, color: 'var(--faint)', fontFamily: 'var(--serif)', fontStyle: 'italic' }}>
          — {story.author}
        </p>
      </article>

      <section className="ventures">
        <div className="wrap" style={{ padding: 0 }}>
          <div className="head-row" style={{ marginBottom: 36 }}>
            <h2 className="sec-head" style={{ fontSize: 34 }}>
              More stories.
            </h2>
            <Link className="alink" href="/news" style={{ fontSize: 15 }}>
              View all <Chevron />
            </Link>
          </div>
          <div className="g3">
            {more.map((s, i) => (
              <StoryCard
                key={s.slug}
                slug={s.slug}
                title={s.title}
                excerpt={s.excerpt}
                category={s.category}
                date={s.date}
                accent={s.accent}
                delay={(i % 3) * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
