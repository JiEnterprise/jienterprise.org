'use client';

import React, { useState } from 'react';
import { company } from '@/lib/data';

const topics = ['Partnership', 'Investment', 'Press & media', 'Careers', 'General inquiry'];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 40 }}>
        <p className="eyebrow rv">Contact</p>
        <h1 className="rv" style={{ transitionDelay: '.1s' }}>
          Get in <em>touch.</em>
        </h1>
        <p className="lead rv" style={{ transitionDelay: '.2s' }}>
          For partnership, investment, press, or careers — tell us what you’re building and we’ll
          route it to the right team.
        </p>
      </section>

      <section className="pad wrap" style={{ paddingTop: 24 }}>
        <div
          className="biz-detail-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)',
            gap: 64,
            alignItems: 'start',
          }}
        >
          {/* form */}
          <div className="surface rv" style={{ padding: '40px 38px' }}>
            {sent ? (
              <div style={{ padding: '40px 0', textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 500, marginBottom: 12 }}>
                  Thank you.
                </h2>
                <p style={{ color: 'var(--slate)', fontSize: 16, lineHeight: 1.6 }}>
                  Your message has reached us. We read every note and reply to the ones we can help
                  with.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
                  <div>
                    <label className="field-label" htmlFor="name">
                      Name
                    </label>
                    <input id="name" className="input" required autoComplete="name" />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="email">
                      Email
                    </label>
                    <input id="email" type="email" className="input" required autoComplete="email" />
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label className="field-label" htmlFor="org">
                    Organization
                  </label>
                  <input id="org" className="input" autoComplete="organization" />
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label className="field-label" htmlFor="topic">
                    Topic
                  </label>
                  <select id="topic" className="select" defaultValue={topics[0]}>
                    {topics.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label className="field-label" htmlFor="message">
                    Message
                  </label>
                  <textarea id="message" className="textarea" required />
                </div>
                <button type="submit" className="pill">
                  Send message
                </button>
              </form>
            )}
          </div>

          {/* details */}
          <div className="rv" style={{ transitionDelay: '.1s' }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>
              Direct
            </p>
            <a
              href={`mailto:${company.email}`}
              className="alink clay"
              style={{ fontSize: 18, marginBottom: 36, display: 'inline-flex' }}
            >
              {company.email}
            </a>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginTop: 8 }}>
              <div>
                <p className="field-label">New York</p>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--slate)' }}>
                  Bayside, Queens
                  <br />
                  New York, United States
                </p>
              </div>
              <div>
                <p className="field-label">New Delhi</p>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--slate)' }}>
                  AurumGlobal · Ji School · Ji Civic
                  <br />
                  India
                </p>
              </div>
              <div style={{ borderTop: '1px solid var(--line)', paddingTop: 22 }}>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--faint)' }}>
                  Investor relations and press are handled by the corporate team. Product support for
                  individual subsidiaries is offered through each product directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
