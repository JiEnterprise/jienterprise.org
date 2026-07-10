import type { Metadata } from 'next';
import Explore from '@/components/Explore';
import { CHAIRMAN_QUOTE, NUMBERS, PRINCIPLES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Ji Enterprise is a parent company. We build companies from zero, acquire companies we intend to keep, and operate every one of them to the same standard.',
};

export default function AboutPage() {
  return (
    <main>
      <header className="shell page-hero">
        <span className="eyebrow" data-rise style={{ '--rise-delay': '0ms' } as React.CSSProperties}>
          About Ji Enterprise
        </span>
        <h1 data-rise style={{ '--rise-delay': '120ms' } as React.CSSProperties}>
          Who we are
        </h1>
        <p className="lede" data-rise style={{ '--rise-delay': '240ms' } as React.CSSProperties}>
          Ji Enterprise is a parent company. We build companies from zero,
          acquire companies we intend to keep, and operate every one of them
          to the same standard.
        </p>
      </header>

      <section className="shell section" aria-label="How we operate">
        <div className="cards">
          {PRINCIPLES.map((principle) => (
            <div className="card" key={principle.title} data-reveal>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell section" aria-label="Ji Enterprise by the numbers">
        <div className="numbers">
          {NUMBERS.map((item) => (
            <div key={item.label} data-reveal>
              <div className="number-value">{item.value}</div>
              <div className="number-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="shell section" aria-label="From the chairman">
        <figure className="quote" data-reveal>
          <blockquote>{CHAIRMAN_QUOTE}</blockquote>
          <cite>Saswat Ji — Founder &amp; Chairman</cite>
        </figure>
      </section>

      <Explore current="/about" />
    </main>
  );
}
