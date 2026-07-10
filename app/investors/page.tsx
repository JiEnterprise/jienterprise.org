import type { Metadata } from 'next';
import { CONTACT_EMAIL } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Investor relations',
  description:
    'Ji Enterprise is a private company and does not trade on public markets.',
};

export default function InvestorsPage() {
  return (
    <main>
      <header className="shell page-hero">
        <span className="eyebrow" data-rise style={{ '--rise-delay': '0ms' } as React.CSSProperties}>
          Investor relations
        </span>
        <h1 data-rise style={{ '--rise-delay': '120ms' } as React.CSSProperties}>
          Privately held
        </h1>
        <p className="lede" data-rise style={{ '--rise-delay': '240ms' } as React.CSSProperties}>
          Ji Enterprise is a private company and does not trade on public
          markets.
        </p>
      </header>

      <section className="shell section" aria-label="Investor contact">
        <div className="cta cta--dark" data-reveal>
          <h2>Institutional inquiries</h2>
          <p className="lede">
            For institutional or partnership inquiries, write to investor
            relations.
          </p>
          <a
            className="button"
            href={`mailto:${CONTACT_EMAIL}?subject=Investor%20relations`}
          >
            Contact investor relations
          </a>
        </div>
      </section>
    </main>
  );
}
