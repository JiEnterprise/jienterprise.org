import React from 'react';
import Link from 'next/link';
import Chevron from '@/components/Chevron';
import { announcements, businesses, chairmanLetter, leaders, stories, type Accent } from '@/lib/data';

const tagTint: Record<Accent, { color: string; bg: string }> = {
  clay: { color: 'var(--clay)', bg: 'rgba(204,120,92,.1)' },
  gold: { color: 'var(--gold)', bg: 'rgba(168,133,46,.1)' },
  navy: { color: 'var(--navy)', bg: 'rgba(44,74,110,.08)' },
  forest: { color: 'var(--forest)', bg: 'rgba(61,107,79,.1)' },
};

const policyDoors = [
  {
    title: 'Privacy',
    desc: 'Your data moves only with explicit, revocable consent.',
    href: '/legal/privacy-policy',
  },
  {
    title: 'Terms',
    desc: 'What you can expect from us, plainly stated.',
    href: '/legal/terms-of-use',
  },
  {
    title: 'Responsibility',
    desc: 'New York and New Delhi get the same standard.',
    href: '/sustainability',
  },
  {
    title: 'Governance',
    desc: 'Founder-led, wholly owned, measured in decades.',
    href: '/investor-relations#governance',
  },
];

export default function HomePage() {
  const featured = stories.find((s) => s.featured) ?? stories[0];
  const founder = leaders[0];

  return (
    <>
      {/* THESIS */}
      <section className="home-hero" id="top">
        <p className="eyebrow rv rise">Ji Enterprise — a diversified holding company</p>
        <h1 className="rv rise" style={{ transitionDelay: '.1s' }}>
          We build <em>companies.</em>
        </h1>
        <p className="hh-sub rv rise" style={{ transitionDelay: '.2s' }}>
          Technology, financial services, education, and public infrastructure — built from first
          principles, from New York to New Delhi.
        </p>
        <div className="rv rise" style={{ transitionDelay: '.3s' }}>
          <Link className="alink clay" href="/about" style={{ fontSize: 16 }}>
            About the company <Chevron />
          </Link>
        </div>
        <div className="hh-cue rv rise" style={{ transitionDelay: '.5s' }} aria-hidden="true" />
      </section>

      {/* NEWSROOM */}
      <section className="home-sec line-top" id="newsroom">
        <div className="wrap">
          <div className="sec-c rv">
            <p className="eyebrow">Newsroom</p>
            <h2 className="statement">The latest, first.</h2>
          </div>
          <div className="ann-list rv" style={{ marginTop: 56 }}>
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

          <Link href={`/news/${featured.slug}`} className="feat rv" style={{ marginTop: 44 }}>
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

          <div className="sec-link rv">
            <Link className="alink" href="/news">
              Visit the newsroom <Chevron />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT THE COMPANY */}
      <section className="home-sec band" id="about">
        <div className="wrap">
          <div className="sec-c rv">
            <p className="eyebrow">About the company</p>
            <h2 className="statement">
              A company of <em>companies.</em>
            </h2>
            <p className="st-sub">
              Every business here was architected internally — its technology, its design language,
              its thesis — and each is measured in decades, not quarters.
            </p>
          </div>

          <div className="dir rv" style={{ marginTop: 60 }}>
            {businesses.map((b, i) => (
              <Link
                key={b.slug}
                href={`/subsidiaries/${b.slug}`}
                className="dir-row rv"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <span className="t">{b.name}</span>
                <span className="d">{b.sector}</span>
                <span className="ann-arrow">
                  <Chevron />
                </span>
              </Link>
            ))}
            <Link href="/ventures" className="dir-row rv" style={{ transitionDelay: '.2s' }}>
              <span className="t">Oplo Labs</span>
              <span className="d">Venture pipeline</span>
              <span className="ann-arrow">
                <Chevron />
              </span>
            </Link>
          </div>

          <p className="st-caption rv">
            Four operating companies · One venture lab · Two continents
          </p>

          <div className="sec-link rv">
            <Link className="alink" href="/about">
              Our story <Chevron />
            </Link>
          </div>
        </div>
      </section>

      {/* FROM THE FOUNDER */}
      <section className="founder-sec" id="leadership">
        <div className="wrap">
          <p className="chair-eyebrow rv" style={{ marginBottom: 0 }}>
            From the founder
          </p>
          <blockquote className="fq rv" style={{ transitionDelay: '.08s' }}>
            “{chairmanLetter.quote}”
          </blockquote>
          <p className="fq-name rv" style={{ transitionDelay: '.16s' }}>
            {founder.name}
          </p>
          <p className="fq-role rv" style={{ transitionDelay: '.16s' }}>
            {founder.role}, Ji Enterprise
          </p>
          <div className="sec-link rv" style={{ transitionDelay: '.24s' }}>
            <Link className="alink clay" href="/about">
              Read the full letter <Chevron />
            </Link>
          </div>
        </div>
      </section>

      {/* POLICY & GOVERNANCE */}
      <section className="home-sec" id="policy">
        <div className="wrap">
          <div className="sec-c rv">
            <p className="eyebrow">Policy &amp; governance</p>
            <h2 className="statement">
              Held to it, <em>in writing.</em>
            </h2>
            <p className="st-sub">
              How we treat your data, your trust, and our own accountability — the standard every
              Ji Enterprise company operates under.
            </p>
          </div>

          <div className="dir rv" style={{ marginTop: 60 }}>
            {policyDoors.map((p, i) => (
              <Link
                key={p.title}
                href={p.href}
                className="dir-row rv"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <span className="t">{p.title}</span>
                <span className="d">{p.desc}</span>
                <span className="ann-arrow">
                  <Chevron />
                </span>
              </Link>
            ))}
          </div>

          <p className="st-caption rv">
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
