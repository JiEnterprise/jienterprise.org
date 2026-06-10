import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Chevron from '@/components/Chevron';

export const metadata: Metadata = {
  title: 'Responsibility',
  description:
    'How Ji Enterprise thinks about responsibility — long-term ownership, consent-first data, and consumer-grade craft applied to civic systems.',
};

const pillars = [
  {
    title: 'Consent-first by design',
    text: 'PRAMANIK is built on India’s Account Aggregator framework — data moves only with explicit consent. Privacy is a property of the architecture, not a policy bolted on after.',
  },
  {
    title: 'Civic-grade accountability',
    text: 'Ji Civic builds the systems that decide how fast help arrives. We hold public-safety software to the same standard of craft and reliability as anything we ship to consumers.',
  },
  {
    title: 'Access as a thesis',
    text: 'Reaching 451 million credit-invisible adults is not a CSR line item — it is the business. The most durable companies we can build are the ones that include people the system has ignored.',
  },
  {
    title: 'Long-term stewardship',
    text: 'A horizon measured in decades changes the incentives. We optimize for institutions that deserve to exist for a long time, not for the next quarter.',
  },
];

export default function ResponsibilityPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow rv">Responsibility</p>
        <h1 className="rv" style={{ transitionDelay: '.1s' }}>
          Built to last,
          <br />
          built to <em>include.</em>
        </h1>
        <p className="lead rv" style={{ transitionDelay: '.2s' }}>
          Responsibility, for us, isn’t a separate program. It’s a consequence of what we choose to
          build, who we build it for, and the horizon we measure it against.
        </p>
      </section>

      <section className="pad wrap" style={{ paddingTop: 40 }}>
        <div className="g2">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="surface rv"
              style={{ padding: '40px 38px', transitionDelay: `${(i % 2) * 0.07}s` }}
            >
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 500, marginBottom: 14 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--slate)' }}>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mission">
        <div className="rv" style={{ maxWidth: 720, margin: '0 auto' }}>
          <p className="eyebrow">Our standard</p>
          <h2>
            Two markets, <em>one bar.</em>
          </h2>
          <p>
            New York and New Delhi get the same standard. Civic software deserves consumer-grade
            craft — and the people the formal system overlooks deserve to be designed for first.
          </p>
        </div>
      </section>

      <section className="pad wrap" style={{ textAlign: 'center', paddingTop: 90, paddingBottom: 90 }}>
        <Link href="/about" className="alink clay" style={{ fontSize: 16 }}>
          Read our operating principles <Chevron />
        </Link>
      </section>
    </>
  );
}
