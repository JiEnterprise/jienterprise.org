import Link from 'next/link';
import Tile from '@/components/Tile';
import { COMPANIES, NUMBERS } from '@/lib/content';

const DOORWAYS = [
  {
    href: '/about',
    eyebrow: 'About Ji Enterprise',
    title: 'Who we are',
    text: 'A parent company that builds, acquires, and operates for the long term.',
  },
  {
    href: '/innovation',
    eyebrow: 'Innovation & research',
    title: 'Built in-house',
    text: 'Engines, trading systems, and infrastructure designed inside the group.',
  },
  {
    href: '/sustainability',
    eyebrow: 'Sustainability & philanthropy',
    title: 'Building for the public',
    text: 'Education access, financial inclusion, and public-interest research.',
  },
];

export default function Home() {
  return (
    <main>
      <header className="shell hero">
        <h1 data-rise style={{ '--rise-delay': '0ms' } as React.CSSProperties}>
          We build, acquire, and hold companies for the{' '}
          <span className="accent">long&nbsp;term</span>.
        </h1>
        <p className="lede" data-rise style={{ '--rise-delay': '140ms' } as React.CSSProperties}>
          Ji Enterprise is a parent company operating businesses across
          technology, finance, education, and public research.
        </p>
        <Link
          className="hero-cue"
          href="/about"
          data-rise
          style={{ '--rise-delay': '280ms' } as React.CSSProperties}
        >
          Learn about Ji Enterprise&nbsp;→
        </Link>
      </header>

      <section className="shell section" aria-labelledby="divisions-heading">
        <div className="section-head">
          <span className="eyebrow" data-reveal>
            Divisions &amp; brands
          </span>
          <h2 id="divisions-heading" data-reveal>
            Our divisions
          </h2>
          <p className="lede" data-reveal>
            Four companies across four sectors: consumer technology, financial
            services, education, and government research.
          </p>
        </div>
        <div className="tiles">
          <Tile company={COMPANIES[0]} />
          <Tile company={COMPANIES[1]} />
          <div className="tile-row">
            <Tile company={COMPANIES[2]} half />
            <Tile company={COMPANIES[3]} half />
          </div>
        </div>
        <div className="section-foot" data-reveal>
          <Link className="hero-cue" href="/divisions">
            Explore the divisions&nbsp;→
          </Link>
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

      <section className="shell section" aria-labelledby="group-heading">
        <div className="section-head">
          <h2 id="group-heading" data-reveal>
            Inside the group
          </h2>
        </div>
        <div className="cards">
          {DOORWAYS.map((door) => (
            <Link
              className="card card--link"
              href={door.href}
              key={door.href}
              data-reveal
            >
              <span className="eyebrow">{door.eyebrow}</span>
              <h3 style={{ marginTop: '0.6rem' }}>{door.title}</h3>
              <p>{door.text}</p>
              <span className="card-link">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="shell section" aria-labelledby="home-investors-heading">
        <div className="cta cta--dark cta--slim" data-reveal>
          <span className="eyebrow">Investor relations</span>
          <h2 id="home-investors-heading" style={{ marginTop: '0.75rem' }}>
            Privately held
          </h2>
          <p className="lede">
            Ji Enterprise is a private company and does not trade on public
            markets.
          </p>
          <Link className="button" href="/investors">
            Investor relations
          </Link>
        </div>
      </section>

      <section className="shell section" aria-labelledby="home-contact-heading">
        <div className="cta" data-reveal>
          <h2 id="home-contact-heading">Get in touch</h2>
          <p className="lede">
            For acquisitions, partnerships, or press inquiries.
          </p>
          <Link className="button" href="/contact">
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}
