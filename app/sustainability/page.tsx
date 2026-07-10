import type { Metadata } from 'next';
import Explore from '@/components/Explore';
import { IMPACT } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Sustainability & philanthropy',
  description:
    'Three long-term commitments: access to education, financial inclusion, and public-interest research.',
};

export default function SustainabilityPage() {
  return (
    <main>
      <header className="shell page-hero">
        <span className="eyebrow" data-rise style={{ '--rise-delay': '0ms' } as React.CSSProperties}>
          Sustainability &amp; philanthropy
        </span>
        <h1 data-rise style={{ '--rise-delay': '120ms' } as React.CSSProperties}>
          Building for the public
        </h1>
        <p className="lede" data-rise style={{ '--rise-delay': '240ms' } as React.CSSProperties}>
          Three of the group&rsquo;s long-term commitments: access to
          education, financial inclusion, and public-interest research.
        </p>
      </header>

      <section className="shell section" aria-label="Commitments">
        <div className="cards">
          {IMPACT.map((item) => (
            <div className="card" key={item.title} data-reveal>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Explore current="/sustainability" />
    </main>
  );
}
