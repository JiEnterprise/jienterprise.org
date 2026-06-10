import React from 'react';
import Link from 'next/link';
import Chevron from './Chevron';
import { accentHex, type Business } from '@/lib/data';

export default function BusinessCard({ biz, delay }: { biz: Business; delay?: number }) {
  const color = accentHex[biz.accent];
  return (
    <Link
      href={`/subsidiaries/${biz.slug}`}
      className="biz rv"
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      <div className="top" style={{ background: color }} />
      <p className="sector" style={{ color }}>
        {biz.sector}
      </p>
      <h3>{biz.name}</h3>
      <p>{biz.description}</p>
      <p className="prods">{biz.productLine}</p>
      <span className="alink sm">
        Explore {biz.name} <Chevron />
      </span>
    </Link>
  );
}
