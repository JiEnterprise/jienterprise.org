import type { Metadata } from 'next';
import Tile from '@/components/Tile';
import { COMPANIES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Divisions & brands',
  description:
    'Four companies across four sectors: consumer technology, financial services, education, and government research.',
};

export default function DivisionsPage() {
  return (
    <main>
      <header className="shell page-hero">
        <span className="eyebrow" data-rise style={{ '--rise-delay': '0ms' } as React.CSSProperties}>
          Divisions &amp; brands
        </span>
        <h1 data-rise style={{ '--rise-delay': '120ms' } as React.CSSProperties}>
          Our divisions
        </h1>
        <p className="lede" data-rise style={{ '--rise-delay': '240ms' } as React.CSSProperties}>
          Four companies across four sectors: consumer technology, financial
          services, education, and government research.
        </p>
      </header>

      <section className="shell section" aria-label="The divisions">
        <div className="tiles">
          {COMPANIES.map((company) => (
            <Tile company={company} key={company.slug} />
          ))}
        </div>
      </section>
    </main>
  );
}
