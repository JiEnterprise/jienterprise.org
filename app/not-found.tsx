import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Chevron from '@/components/Chevron';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <section className="page-hero" style={{ paddingBottom: 140 }}>
      <p className="eyebrow rv rise">404 — Page not found</p>
      <h1 className="rv rise" style={{ transitionDelay: '.08s' }}>
        This page hasn’t
        <br />
        been <em>built yet.</em>
      </h1>
      <p className="lead rv rise" style={{ transitionDelay: '.16s' }}>
        The address you followed doesn’t exist — or doesn’t exist anymore. Everything we have
        built is one step away.
      </p>
      <div
        className="hero-cta rv rise"
        style={{ transitionDelay: '.24s', marginTop: 40 }}
      >
        <Link className="pill" href="/">
          Back to home
        </Link>
        <Link className="alink" href="/news" style={{ fontSize: 15 }}>
          Visit the newsroom <Chevron />
        </Link>
      </div>
    </section>
  );
}
