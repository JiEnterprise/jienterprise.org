import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Chevron from '@/components/Chevron';
import { homeStats } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Investors',
  description:
    'Ji Enterprise is a privately held diversified holding company. Our horizon is measured in decades, not quarters.',
};

const reports = [
  { title: 'Founder’s Annual Letter', period: '2026', note: 'The thesis, the year, and the decade ahead.' },
  { title: 'Operating Review', period: 'H1 2026', note: 'Progress across the four operating subsidiaries.' },
  { title: 'Research Update', period: 'H1 2026', note: 'FoxMon Industries programs and progress.' },
];

const governance = [
  {
    title: 'Founder-led, fully owned',
    text: 'Ji Enterprise is privately held and founder-led. Every subsidiary is wholly owned and internally architected — there are no outside operating partners in the core.',
  },
  {
    title: 'Decades, not quarters',
    text: 'We allocate patient capital and measure progress in industries reshaped, not earnings cycles. Growth is the consequence of building things that deserve to exist.',
  },
  {
    title: 'One bar, two markets',
    text: 'New York and New Delhi operate to the same standard of craft, governance, and accountability — civic software included.',
  },
];

export default function InvestorsPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow rv">Investors</p>
        <h1 className="rv" style={{ transitionDelay: '.1s' }}>
          Patient capital.
          <br />
          <em>Compounding ambition.</em>
        </h1>
        <p className="lead rv" style={{ transitionDelay: '.2s' }}>
          Ji Enterprise is a privately held, diversified holding company. We build and wholly own our
          businesses, and our horizon is measured in decades.
        </p>
      </section>

      {/* scale */}
      <section className="stats">
        <div className="stats-grid">
          {homeStats.map((s) => (
            <div key={s.label} className="stat rv">
              <div className="v">
                {s.end}
                {s.suffix}
              </div>
              <div className="l">{s.label}</div>
              <div className="n">{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* governance */}
      <section className="pad wrap" id="governance">
        <h2 className="sec-head rv" style={{ fontSize: 40, marginBottom: 48 }}>
          Governance.
        </h2>
        <div className="g3">
          {governance.map((g, i) => (
            <div
              key={g.title}
              className="surface rv"
              style={{ padding: '34px 32px', transitionDelay: `${(i % 3) * 0.06}s` }}
            >
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, marginBottom: 12 }}>
                {g.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--slate)' }}>{g.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* reports */}
      <section className="ventures" id="reports">
        <div className="wrap" style={{ padding: 0 }}>
          <div className="head-row rv" style={{ marginBottom: 36 }}>
            <h2 className="sec-head">Reports & letters.</h2>
            <p style={{ fontSize: 15, color: 'var(--faint)', maxWidth: 320 }}>
              Selected materials are shared with current and prospective partners on request.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {reports.map((r, i) => (
              <div
                key={r.title}
                className="surface rv"
                style={{
                  padding: '26px 30px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 12,
                  transitionDelay: `${(i % 4) * 0.05}s`,
                }}
              >
                <div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 500, marginBottom: 4 }}>
                    {r.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--slate)' }}>{r.note}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                  <span className="badge">{r.period}</span>
                  <Link href="/contact" className="alink sm clay">
                    Request <Chevron />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pad wrap" style={{ textAlign: 'center', paddingTop: 90, paddingBottom: 90 }}>
        <h2 className="sec-head rv" style={{ fontSize: 34, marginBottom: 20 }}>
          Investor & partnership inquiries.
        </h2>
        <p className="rv" style={{ fontSize: 16, color: 'var(--slate)', maxWidth: 520, margin: '0 auto 28px', lineHeight: 1.6 }}>
          We speak with a small number of long-term partners who share our horizon.
        </p>
        <Link href="/contact" className="pill rv">
          Contact the corporate team
        </Link>
      </section>
    </>
  );
}
