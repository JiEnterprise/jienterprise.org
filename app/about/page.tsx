import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Chevron from '@/components/Chevron';
import { principles, chairmanLetter, leaders } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Ji Enterprise is a diversified holding company that architects every business internally — engineering-first, full-stack, measured in decades.',
};

export default function AboutPage() {
  const founder = leaders[0];

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow rv">About Ji Enterprise</p>
        <h1 className="rv" style={{ transitionDelay: '.1s' }}>
          A holding company built
          <br />
          from <em>first principles.</em>
        </h1>
        <p className="lead rv" style={{ transitionDelay: '.2s' }}>
          We are not a portfolio of acquisitions. Every subsidiary at Ji Enterprise was architected
          internally — its technology, its design language, its market thesis — and built to define a
          category rather than enter one.
        </p>
      </section>

      {/* mission */}
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

      {/* founder / chairman letter */}
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
              <p key={i} className="chair-body">
                {para}
              </p>
            ))}
            <p className="chair-body" style={{ marginBottom: 0 }}>
              {founder.bio}
            </p>
          </div>
        </div>
      </section>

      {/* principles */}
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

      <section className="closing">
        <div className="glow" />
        <div className="rv">
          <h2>
            We don’t enter markets.
            <br />
            <em>We build them.</em>
          </h2>
          <p className="loc" style={{ marginTop: 18 }}>
            New York to New Delhi.
          </p>
          <Link className="alink" href="/subsidiaries" style={{ color: 'var(--ivory)', fontSize: 16 }}>
            Explore our businesses <Chevron />
          </Link>
        </div>
      </section>
    </>
  );
}
