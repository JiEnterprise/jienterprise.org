import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { businesses, stories, accentHex } from '@/lib/data';
import StoryCard from '@/components/StoryCard';
import Chevron from '@/components/Chevron';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return businesses.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const biz = businesses.find((b) => b.slug === slug);
  if (!biz) return { title: 'Not Found' };
  return { title: biz.name, description: biz.description };
}

export default async function BusinessPage({ params }: Props) {
  const { slug } = await params;
  const biz = businesses.find((b) => b.slug === slug);
  if (!biz) notFound();

  const color = accentHex[biz.accent];
  const related = stories.filter((s) => biz.stories.includes(s.slug));

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 40 }}>
        <Link
          href="/subsidiaries"
          className="alink sm"
          style={{ color: 'var(--faint)', marginBottom: 28 }}
        >
          <ArrowLeft size={14} style={{ marginRight: 6 }} /> All businesses
        </Link>
        <div
          className="badge"
          style={{
            marginTop: 22,
            color,
            borderColor: `${color}40`,
            background: `${color}14`,
          }}
        >
          {biz.sector}
        </div>
        <h1 className="rv" style={{ marginTop: 22 }}>
          {biz.name}
        </h1>
        <p className="lead rv" style={{ transitionDelay: '.1s' }}>
          {biz.thesis}
        </p>
      </section>

      {/* stats */}
      <section className="stats">
        <div className="stats-grid">
          {biz.stats.map((s) => (
            <div key={s.label} className="stat rv" style={{ borderLeftColor: color }}>
              <div className="v" style={{ color }}>
                {s.value}
              </div>
              <div className="l">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* overview + products */}
      <section className="pad wrap">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr)',
            gap: 64,
            alignItems: 'start',
          }}
          className="biz-detail-grid"
        >
          <div className="rv prose-serif">
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              Overview
            </p>
            {biz.overview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="rv" style={{ transitionDelay: '.1s' }}>
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              Products
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {biz.products.map((p) => (
                <div key={p.name} className="surface" style={{ padding: '22px 24px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 20,
                      fontWeight: 500,
                      marginBottom: 6,
                    }}
                  >
                    {p.name}
                  </h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--slate)' }}>
                    {p.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* related stories */}
      {related.length > 0 && (
        <section className="ventures">
          <div className="wrap" style={{ padding: 0 }}>
            <div className="head-row rv" style={{ marginBottom: 36 }}>
              <h2 className="sec-head" style={{ fontSize: 34 }}>
                From the newsroom.
              </h2>
              <Link className="alink" href="/news" style={{ fontSize: 15 }}>
                All stories <Chevron />
              </Link>
            </div>
            <div className="g3">
              {related.map((s, i) => (
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
      )}

      <section className="pad wrap" style={{ textAlign: 'center', paddingTop: 80, paddingBottom: 80 }}>
        <Link href="/subsidiaries" className="pill ghost">
          <ArrowLeft size={16} /> Back to all businesses
        </Link>
      </section>
    </>
  );
}
