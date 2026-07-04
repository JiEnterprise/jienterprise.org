import React from 'react';
import Link from 'next/link';
import Chevron from '@/components/Chevron';
import StatCounter from '@/components/StatCounter';
import StoryCard from '@/components/StoryCard';
import {
  announcements,
  businesses,
  stories,
  homeStats,
  chairmanLetter,
  leaders,
  accentHex,
  type Accent,
} from '@/lib/data';

const tagTint: Record<Accent, { color: string; bg: string }> = {
  clay: { color: 'var(--clay)', bg: 'rgba(204,120,92,.1)' },
  gold: { color: 'var(--gold)', bg: 'rgba(168,133,46,.1)' },
  navy: { color: 'var(--navy)', bg: 'rgba(44,74,110,.08)' },
  forest: { color: 'var(--forest)', bg: 'rgba(61,107,79,.1)' },
};

export default function HomePage() {
  const featured = stories.find((s) => s.featured) ?? stories[0];
  const grid = stories.filter((s) => s.slug !== featured.slug).slice(0, 4);
  const latest = announcements[0];
  const founder = leaders[0];

  return (
    <>
      {/* HERO */}
      <section className="hero" id="top">
        <Link href={latest.href} className="chip rv rise">
          <span className="dot" />
          <span>
            <b>{latest.tag}</b> — {latest.title}
          </span>
          <Chevron />
        </Link>
        <h1 className="rv rise" style={{ transitionDelay: '.08s' }}>
          Growth, engineered from <em>first principles.</em>
        </h1>
        <p className="sub rv rise" style={{ transitionDelay: '.16s' }}>
          Ji Enterprise builds companies across technology, financial services, education, and
          public infrastructure — from New York to New Delhi.
        </p>
        <div className="hero-cta rv rise" style={{ transitionDelay: '.24s' }}>
          <Link className="pill" href="/subsidiaries">
            Explore our businesses
          </Link>
          <Link className="alink" href="/news" style={{ fontSize: 15 }}>
            Read the latest stories <Chevron />
          </Link>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="wrap ann" id="announcements">
        <div className="head-row rv">
          <div>
            <p className="eyebrow" style={{ marginBottom: 14 }}>
              Announcements
            </p>
            <h2 className="sec-head">The latest, first.</h2>
          </div>
          <Link className="alink" href="/news" style={{ fontSize: 15 }}>
            Visit the newsroom <Chevron />
          </Link>
        </div>
        <div className="ann-list">
          {announcements.map((a, i) => {
            const tint = tagTint[a.accent];
            return (
              <Link
                key={a.title}
                href={a.href}
                className="ann-row rv"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <span className="ann-meta">
                  <span className="ann-date">{a.date}</span>
                  <span className="rtag" style={{ color: tint.color, background: tint.bg }}>
                    {a.tag}
                  </span>
                </span>
                <p className="ann-title">{a.title}</p>
                <span className="ann-arrow">
                  <Chevron />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* NEWSROOM */}
      <section className="pad wrap" id="newsroom" style={{ paddingTop: 0 }}>
        <div className="head-row rv">
          <div>
            <p className="eyebrow" style={{ marginBottom: 14 }}>
              Newsroom
            </p>
            <h2 className="sec-head">
              Stories from inside
              <br />
              the build.
            </h2>
          </div>
          <Link className="alink" href="/news" style={{ fontSize: 15 }}>
            View all stories <Chevron />
          </Link>
        </div>

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

        <div className="g2">
          {grid.map((s, i) => (
            <StoryCard
              key={s.slug}
              slug={s.slug}
              title={s.title}
              excerpt={s.excerpt}
              category={s.category}
              date={s.date}
              accent={s.accent}
              delay={i % 2 === 1 ? 0.06 : undefined}
            />
          ))}
        </div>
      </section>

      {/* ABOUT THE COMPANY */}
      <section className="pad wrap" id="about" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="head-row rv">
          <div>
            <p className="eyebrow" style={{ marginBottom: 14 }}>
              About the company
            </p>
            <h2 className="sec-head">A company of companies.</h2>
          </div>
          <Link className="alink" href="/about" style={{ fontSize: 15 }}>
            Our story <Chevron />
          </Link>
        </div>
        <p className="about-lead rv">
          Ji Enterprise is a diversified holding company. Every business in the portfolio was
          architected internally — its technology, its design language, its market thesis — and
          each is built to define a category, not merely enter it. Four operating companies, one
          venture lab, one standard of craft.
        </p>
        <div className="mini-grid">
          {businesses.map((b, i) => (
            <Link
              key={b.slug}
              href={`/subsidiaries/${b.slug}`}
              className="mini rv"
              style={
                {
                  transitionDelay: `${i * 0.06}s`,
                  '--mini-accent': accentHex[b.accent],
                } as React.CSSProperties
              }
            >
              <p className="sector" style={{ color: accentHex[b.accent] }}>
                {b.sector}
              </p>
              <h3>{b.name}</h3>
              <p>{b.description}</p>
              <span className="alink sm">
                Explore <Chevron />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SCALE */}
      <section className="stats" id="scale">
        <div className="stats-grid">
          {homeStats.map((s) => (
            <StatCounter key={s.label} end={s.end} suffix={s.suffix} label={s.label} note={s.note} />
          ))}
        </div>
      </section>

      {/* FROM THE FOUNDER */}
      <section className="chairman" id="leadership">
        <div className="chair-grid">
          <div className="rv">
            <p className="chair-eyebrow">From the founder</p>
            <div className="avatar">{founder.initial}</div>
            <p className="chair-name">{founder.name}</p>
            <p className="chair-role">
              {founder.role}
              <br />
              Ji Enterprise
            </p>
          </div>
          <div className="rv" style={{ transitionDelay: '.12s' }}>
            <p className="chair-quote">“{chairmanLetter.quote}”</p>
            {chairmanLetter.body.map((para, i) => (
              <p
                key={i}
                className="chair-body"
                style={i === chairmanLetter.body.length - 1 ? { marginBottom: 36 } : undefined}
              >
                {para}
              </p>
            ))}
            <Link className="alink clay" href="/about" style={{ fontSize: 15 }}>
              Read the full letter <Chevron />
            </Link>
          </div>
        </div>
      </section>

      {/* POLICY & GOVERNANCE */}
      <section className="policy" id="policy">
        <div className="wrap" style={{ padding: 0 }}>
          <div className="head-row rv">
            <div>
              <p className="eyebrow" style={{ marginBottom: 14 }}>
                Policy &amp; governance
              </p>
              <h2 className="sec-head">Held to it, in writing.</h2>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--slate)', maxWidth: 380 }}>
              How we treat your data, your trust, and our own accountability — the standards every
              Ji Enterprise company operates under.
            </p>
          </div>
          <div className="policy-grid">
            <Link href="/legal/privacy-policy" className="pol rv">
              <p className="pt">Privacy</p>
              <h3>Consent-first, by architecture.</h3>
              <p>
                Your data moves only with explicit, revocable consent — a property of how we build
                our systems, not a promise bolted on after.
              </p>
              <span className="alink sm">
                Read the privacy policy <Chevron />
              </span>
            </Link>
            <Link href="/sustainability" className="pol rv" style={{ transitionDelay: '.06s' }}>
              <p className="pt">Responsibility</p>
              <h3>Two markets, one bar.</h3>
              <p>
                New York and New Delhi get the same standard — and the people the formal system
                overlooks get designed for first.
              </p>
              <span className="alink sm">
                How we build responsibly <Chevron />
              </span>
            </Link>
            <Link
              href="/investor-relations#governance"
              className="pol rv"
              style={{ transitionDelay: '.12s' }}
            >
              <p className="pt">Governance</p>
              <h3>Founder-led, wholly owned.</h3>
              <p>
                Every subsidiary is internally architected and wholly owned, with progress measured
                in decades — never quarters.
              </p>
              <span className="alink sm">
                Our governance <Chevron />
              </span>
            </Link>
            <Link href="/legal/terms-of-use" className="pol rv" style={{ transitionDelay: '.18s' }}>
              <p className="pt">Terms</p>
              <h3>Plain terms, plainly stated.</h3>
              <p>
                What you can expect from us — and what we ask of you — across a portfolio of
                products in active development.
              </p>
              <span className="alink sm">
                Read the terms of use <Chevron />
              </span>
            </Link>
          </div>
          <p className="policy-fine rv">
            Also on file: <Link href="/legal/cookie-policy">Cookie Policy</Link> ·{' '}
            <Link href="/legal/disclaimer">Disclaimer</Link>
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing" id="investors">
        <div className="glow" />
        <div className="rv">
          <h2>
            We don’t enter markets.
            <br />
            <em>We build them.</em>
          </h2>
          <p className="mark">Ji Enterprise</p>
          <p className="loc">New York to New Delhi.</p>
          <Link className="pill dark" href="/contact" style={{ position: 'relative' }}>
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
