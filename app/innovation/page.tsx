import type { Metadata } from 'next';
import Explore from '@/components/Explore';
import { RESEARCH } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Innovation & research',
  description:
    'The group runs on systems designed and built inside its own companies — engines, trading systems, and infrastructure.',
};

export default function InnovationPage() {
  return (
    <main>
      <header className="shell page-hero">
        <span className="eyebrow" data-rise style={{ '--rise-delay': '0ms' } as React.CSSProperties}>
          Innovation &amp; research
        </span>
        <h1 data-rise style={{ '--rise-delay': '120ms' } as React.CSSProperties}>
          Built in-house
        </h1>
        <p className="lede" data-rise style={{ '--rise-delay': '240ms' } as React.CSSProperties}>
          The group runs on systems designed and built inside its own
          companies — engines, trading systems, and infrastructure.
        </p>
      </header>

      <section className="shell section" aria-label="Research and systems">
        <div className="cards cards--four">
          {RESEARCH.map((item) => (
            <div className="card" key={item.title} data-reveal>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Explore current="/innovation" />
    </main>
  );
}
