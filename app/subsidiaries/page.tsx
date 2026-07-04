import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import BusinessCard from '@/components/BusinessCard';
import { businesses } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Businesses',
  description:
    'Four operating companies — Oplo Cloud, AurumGlobal, Ji School, and FoxMon Industries — built from first principles across technology, finance, education, and government research.',
};

export default function BusinessesPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow rv">Our businesses</p>
        <h1 className="rv" style={{ transitionDelay: '.1s' }}>
          Four industries.
          <br />
          One operating <em>philosophy.</em>
        </h1>
        <p className="lead rv" style={{ transitionDelay: '.2s' }}>
          Every Ji Enterprise company was architected internally — its technology, its design
          language, its market thesis. None were acquired. Each is built to define a category, not
          merely enter it.
        </p>
      </section>

      <section className="pad wrap" style={{ paddingTop: 40 }}>
        <div className="g2">
          {businesses.map((b, i) => (
            <BusinessCard key={b.slug} biz={b} delay={i % 2 === 1 ? 0.07 : undefined} />
          ))}
        </div>
      </section>

      <section className="closing">
        <div className="glow" />
        <div className="rv">
          <h2>
            Building the businesses
            <br />
            <em>the next half-century needs.</em>
          </h2>
          <p className="loc" style={{ marginTop: 18 }}>
            Partnership, investment, and press inquiries welcome.
          </p>
          <Link className="pill dark" href="/contact" style={{ position: 'relative' }}>
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
