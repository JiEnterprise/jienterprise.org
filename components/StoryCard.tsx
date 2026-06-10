import React from 'react';
import Link from 'next/link';
import Chevron from './Chevron';
import { accentHex, type Accent } from '@/lib/data';

const barTint: Record<Accent, string> = {
  clay: '#E8D5CB',
  gold: '#E6DCC3',
  navy: '#CDD8E3',
  forest: '#D3DFD3',
};

interface Props {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  accent: Accent;
  delay?: number;
}

export default function StoryCard({ slug, title, excerpt, category, date, accent, delay }: Props) {
  return (
    <Link
      href={`/news/${slug}`}
      className="story rv"
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      <div className="bar" style={{ background: barTint[accent] }} />
      <div className="body">
        <p className="cat" style={{ color: accentHex[accent] }}>
          {category} · <span className="d">{date}</span>
        </p>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <span className="alink sm">
          Continue reading <Chevron />
        </span>
      </div>
    </Link>
  );
}
