import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Chevron from '@/components/Chevron';
import StoryCard from '@/components/StoryCard';
import { stories } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Newsroom',
  description:
    'Stories from inside the build — across Oplo Cloud, AurumGlobal, Ji School, and FoxMon Industries.',
};

export default function NewsPage() {
  const featured = stories.find((s) => s.featured) ?? stories[0];
  const rest = stories.filter((s) => s.slug !== featured.slug);

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 40 }}>
        <p className="eyebrow rv">Newsroom</p>
        <h1 className="rv" style={{ transitionDelay: '.1s' }}>
          Stories from inside
          <br />
          the <em>build.</em>
        </h1>
        <p className="lead rv" style={{ transitionDelay: '.2s' }}>
          Dispatches from the companies we are building — the decisions, the theses, and the
          engineering underneath them.
        </p>
      </section>

      <section className="pad wrap" style={{ paddingTop: 24 }}>
        <Link href={`/news/${featured.slug}`} className="feat rv">
          <div className="feat-visual">
            <div className="c1" />
            <div className="c2" />
            <div className="c3" />
            <div style={{ position: 'relative' }}>
              <span className="feat-tag">Featured</span>
              <h3>{featured.title}</h3>
            </div>
          </div>
          <div className="feat-text">
            <p className="meta">
              {featured.category} · {featured.date}
            </p>
            <p>{featured.excerpt}</p>
            <span className="alink clay" style={{ fontSize: 15 }}>
              Read the full story <Chevron />
            </span>
          </div>
        </Link>

        <div className="g3" style={{ marginTop: 22 }}>
          {rest.map((s, i) => (
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
      </section>
    </>
  );
}
