import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Chevron from '@/components/Chevron';
import { businesses, accentHex } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Every product across the Ji Enterprise companies — navigation, email, payments, quant trading, credit infrastructure, learning, and public-safety systems.',
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow rv">Products</p>
        <h1 className="rv" style={{ transitionDelay: '.1s' }}>
          Everything we’ve
          <br />
          <em>built so far.</em>
        </h1>
        <p className="lead rv" style={{ transitionDelay: '.2s' }}>
          The products shipping and in development across our four operating companies — each built
          from first principles, on a shared bar for craft.
        </p>
      </section>

      <section className="pad wrap" style={{ paddingTop: 40 }}>
        {businesses.map((b) => {
          const color = accentHex[b.accent];
          return (
            <div key={b.slug} style={{ marginBottom: 64 }}>
              <div
                className="head-row rv"
                style={{ marginBottom: 28, alignItems: 'center', borderBottom: '1px solid var(--line)', paddingBottom: 18 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: color, display: 'inline-block' }} />
                  <h2 className="sec-head" style={{ fontSize: 30 }}>
                    {b.name}
                  </h2>
                  <span className="badge">{b.sector}</span>
                </div>
                <Link href={`/subsidiaries/${b.slug}`} className="alink sm" style={{ color }}>
                  Explore {b.name} <Chevron />
                </Link>
              </div>
              <div className="g3">
                {b.products.map((p, i) => (
                  <div
                    key={p.name}
                    className="surface rv"
                    style={{ padding: '28px 30px', transitionDelay: `${(i % 3) * 0.05}s` }}
                  >
                    <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, marginBottom: 10 }}>
                      {p.name}
                    </h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--slate)' }}>{p.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
