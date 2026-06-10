import React from 'react';
import Link from 'next/link';
import Chevron from '@/components/Chevron';
import StatCounter from '@/components/StatCounter';
import StoryCard from '@/components/StoryCard';
import BusinessCard from '@/components/BusinessCard';
import {
  businesses,
  ventures,
  stories,
  homeStats,
  principles,
  chairmanLetter,
  leaders,
} from '@/lib/data';

export default function HomePage() {
  const featured = stories.find((s) => s.featured) ?? stories[0];
  const grid = stories.filter((s) => s.slug !== featured.slug).slice(0, 4);
  const founder = leaders[0];

  return (
    <>
      {/* HERO */}
      <section className="hero" id="top">
        <p className="eyebrow rv">A diversified holding company</p>
        <h1 className="rv" style={{ transitionDelay: '.1s' }}>
          Growth, engineered from <em>first principles.</em>
        </h1>
        <p className="sub rv" style={{ transitionDelay: '.2s' }}>
          Ji Enterprise builds companies across technology, financial services, education, and
          public infrastructure — from New York to New Delhi.
        </p>
        <div className="hero-cta rv" style={{ transitionDelay: '.3s' }}>
          <Link className="pill" href="/subsidiaries">
            Explore our businesses
          </Link>
          <Link className="alink" href="/news" style={{ fontSize: 15 }}>
            Read the latest stories <Chevron />
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="stats" id="scale">
        <div className="stats-grid">
          {homeStats.map((s) => (
            <StatCounter key={s.label} end={s.end} suffix={s.suffix} label={s.label} note={s.note} />
          ))}
        </div>
      </section>

      {/* STORIES */}
      <section className="pad wrap" id="stories">
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
            <p>Not a lender. Not a bank. The infrastructure underneath both.</p>
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

      {/* CHAIRMAN */}
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

      {/* BUSINESSES */}
      <section className="pad wrap" id="businesses" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div className="rv" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>
            Our businesses
          </p>
          <h2 className="sec-head" style={{ fontSize: 46 }}>
            Four industries.
            <br />
            One operating philosophy.
          </h2>
        </div>
        <div className="g2">
          {businesses.map((b, i) => (
            <BusinessCard key={b.slug} biz={b} delay={i % 2 === 1 ? 0.07 : undefined} />
          ))}
        </div>
      </section>

      {/* VENTURES */}
      <section className="ventures" id="ventures">
        <div className="wrap" style={{ padding: 0 }}>
          <div className="head-row rv" style={{ marginBottom: 22 }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 14 }}>
                Oplo Labs
              </p>
              <h2 className="sec-head" style={{ fontSize: 46 }}>
                The pipeline.
              </h2>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--slate)', maxWidth: 380 }}>
              Six ventures in exploration — each targeting a market everyone can see but no one has
              owned.
            </p>
          </div>
          <div className="g3" style={{ marginTop: 44 }}>
            {ventures.map((v, i) => (
              <div key={v.slug} className="vent rv" style={{ transitionDelay: `${(i % 3) * 0.07}s` }}>
                <div className="row">
                  <p className="field">{v.field}</p>
                  <span className={`stage ${v.stage}`}>{v.stageLabel}</span>
                </div>
                <h3>{v.name}</h3>
                <p className="desc">{v.desc}</p>
                <p className="signal">{v.signal}</p>
              </div>
            ))}
          </div>
          <p className="vent-note rv">
            Pipeline ventures are early-stage explorations under Oplo Cloud and are evaluated against
            one bar: can we define the category, not merely enter it.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission">
        <div className="rv" style={{ maxWidth: 760, margin: '0 auto' }}>
          <p className="eyebrow">Why we exist</p>
          <h2>
            We believe the most important companies of the next half-century{' '}
            <em>haven’t been started yet.</em>
          </h2>
          <p>
            So we start them. Carefully, vertically, and for the long term — across the industries
            where engineering-first thinking is still rare: navigation, credit, education, and public
            safety.
          </p>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="pad wrap">
        <h2 className="sec-head rv" style={{ fontSize: 40, marginBottom: 56 }}>
          Operating principles.
        </h2>
        <div className="prin-grid">
          {principles.map((p, i) => (
            <div key={p.num} className="prin rv" style={{ transitionDelay: `${(i % 3) * 0.06}s` }}>
              <p className="num">{p.num}</p>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
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
