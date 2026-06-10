import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Chevron from '@/components/Chevron';
import { roles } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the founding teams building Oplo Cloud, AurumGlobal, Ji School, and Ji Civic. Engineering-first, full-stack, measured in decades.',
};

const ethos = [
  {
    num: '01',
    title: 'Specifications before pitch decks',
    text: 'We hire people who think in systems and write the spec first. Technical depth precedes everything else.',
  },
  {
    num: '02',
    title: 'Own the full stack',
    text: 'You will own a surface end to end — from the backend engine to the last pixel. No hand-offs at the interesting part.',
  },
  {
    num: '03',
    title: 'Build to define the category',
    text: 'We don’t enter markets to participate. If you can define a standard rather than chase one, you’ll fit here.',
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow rv">Careers</p>
        <h1 className="rv" style={{ transitionDelay: '.1s' }}>
          Build things that
          <br />
          <em>deserve to exist.</em>
        </h1>
        <p className="lead rv" style={{ transitionDelay: '.2s' }}>
          Small founding teams, real ownership, and a horizon measured in decades — across New York
          and New Delhi.
        </p>
      </section>

      {/* ethos */}
      <section className="pad wrap" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <div className="g3">
          {ethos.map((e, i) => (
            <div key={e.num} className="rv" style={{ transitionDelay: `${(i % 3) * 0.06}s` }}>
              <p className="num" style={{ fontFamily: 'var(--serif)', fontSize: 15, color: 'var(--clay)', marginBottom: 16 }}>
                {e.num}
              </p>
              <h3 style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 10 }}>
                {e.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--slate)' }}>{e.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* open roles */}
      <section className="ventures">
        <div className="wrap" style={{ padding: 0 }}>
          <div className="head-row rv" style={{ marginBottom: 36 }}>
            <h2 className="sec-head">Open roles.</h2>
            <p style={{ fontSize: 15, color: 'var(--faint)' }}>{roles.length} positions</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {roles.map((r, i) => (
              <Link
                key={r.id}
                href="/contact"
                className="surface rv"
                style={{
                  display: 'block',
                  padding: '30px 34px',
                  textDecoration: 'none',
                  transitionDelay: `${(i % 4) * 0.04}s`,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 16,
                  }}
                >
                  <div style={{ maxWidth: 640 }}>
                    <h3
                      style={{
                        fontFamily: 'var(--serif)',
                        fontSize: 23,
                        fontWeight: 500,
                        letterSpacing: '-0.012em',
                        marginBottom: 8,
                      }}
                    >
                      {r.title}
                    </h3>
                    <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--slate)' }}>{r.description}</p>
                  </div>
                  <span className="alink sm clay" style={{ whiteSpace: 'nowrap' }}>
                    Apply <Chevron />
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
                  <span className="badge">{r.team}</span>
                  <span className="badge">{r.location}</span>
                  <span className="badge">{r.type}</span>
                </div>
              </Link>
            ))}
          </div>

          <p className="vent-note rv">
            Don’t see your role? We’re always glad to hear from engineers and builders who hold a
            high bar. Write to us at{' '}
            <a href="mailto:contact@jienterprise.com" className="alink sm clay">
              contact@jienterprise.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
