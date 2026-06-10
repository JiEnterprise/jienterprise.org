import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ventures } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Ventures',
  description:
    'Oplo Labs — the Ji Enterprise venture pipeline. Six explorations, each targeting a market everyone can see but no one has owned.',
};

export default function VenturesPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow rv">Oplo Labs</p>
        <h1 className="rv" style={{ transitionDelay: '.1s' }}>
          The <em>pipeline.</em>
        </h1>
        <p className="lead rv" style={{ transitionDelay: '.2s' }}>
          Six ventures in exploration — each targeting a market everyone can see but no one has
          owned. Every one is evaluated against a single bar: can we define the category, not merely
          enter it.
        </p>
      </section>

      <section className="pad wrap" style={{ paddingTop: 40 }}>
        <div className="g3">
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
          Pipeline ventures are early-stage explorations under Oplo Cloud and carry no commitment to
          launch. Stages move from research to concept to active exploration as conviction builds.
        </p>
      </section>

      <section className="closing">
        <div className="glow" />
        <div className="rv">
          <h2>
            Want to build the
            <br />
            <em>category-definers?</em>
          </h2>
          <p className="loc" style={{ marginTop: 18 }}>
            Oplo Labs hires engineers who can define a standard, not merely enter a market.
          </p>
          <Link className="pill dark" href="/careers" style={{ position: 'relative' }}>
            See open roles
          </Link>
        </div>
      </section>
    </>
  );
}
