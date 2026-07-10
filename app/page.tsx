import Kinetics from '@/components/Kinetics';

const COMPANIES = [
  {
    sector: 'Consumer Technology',
    name: 'Oplo Cloud',
    ghost: 'O',
    dark: true,
    description:
      'Navigation, email, browsing, payments, and commerce — five everyday products rebuilt from first principles, on one shared engine.',
    products: 'OMap · OMail · OSurf · OPay · OShopping',
  },
  {
    sector: 'Financial Services',
    name: 'AurumGlobal',
    ghost: 'A',
    dark: false,
    description:
      'An autonomous quantitative trading desk, market analytics, and credit infrastructure for the hundreds of millions the formal system has never seen.',
    products: 'AGQUANT · Terminal · Research · PRAMANIK',
  },
  {
    sector: 'Education',
    name: 'Ji School',
    ghost: 'J',
    dark: false,
    description:
      'Institutional learning infrastructure and digital delivery at national scale — governance first, apps second.',
    products: 'Academy · Tutoring Marketplace',
  },
  {
    sector: 'Government & Advanced Research',
    name: 'FoxMon Industries',
    ghost: 'F',
    dark: true,
    description:
      'Long-horizon research and frontier technology, built with and for government, measured in decades.',
    products: 'Applied Research · Government Programs · Advanced Systems',
  },
];

const NUMBERS = [
  { value: '4', label: 'Operating companies' },
  { value: '4', label: 'Sectors' },
  { value: '14', label: 'Products in development' },
];

const PRINCIPLES = [
  {
    title: 'Own the full stack.',
    text: 'From routing engines to the last pixel, the core is never outsourced.',
  },
  {
    title: 'Decades, not quarters.',
    text: 'Progress is measured in industries reshaped, not earnings cycles.',
  },
  {
    title: 'One bar, everywhere.',
    text: 'Consumer apps, trading systems, classrooms, or government programs — the same standard of craft.',
  },
];

function Tile({
  company,
  half,
}: {
  company: (typeof COMPANIES)[number];
  half?: boolean;
}) {
  return (
    <article
      className={`tile${company.dark ? ' tile--dark' : ''}${half ? ' tile--half' : ''}`}
      data-reveal
    >
      <span className="tile-ghost" aria-hidden="true">
        {company.ghost}
      </span>
      <span className="eyebrow">{company.sector}</span>
      <h3 className="tile-name">{company.name}</h3>
      <p className="tile-desc">{company.description}</p>
      <p className="tile-products">{company.products}</p>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <Kinetics />

      <nav className="nav" data-nav aria-label="Main">
        <div className="shell nav-inner">
          <a className="wordmark" href="/">
            Ji Enterprise<span className="seal">.</span>
          </a>
          <div className="nav-links">
            <a className="nav-link nav-link--secondary" href="#companies">
              Companies
            </a>
            <a className="nav-link nav-link--secondary" href="#principles">
              How we operate
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        <header className="shell hero">
          <h1 data-rise style={{ '--rise-delay': '0ms' } as React.CSSProperties}>
            We hold companies to a{' '}
            <span className="accent">longer&nbsp;clock</span>.
          </h1>
          <p className="lede" data-rise style={{ '--rise-delay': '140ms' } as React.CSSProperties}>
            Ji Enterprise is a parent company. We build, acquire, and operate
            businesses across technology, finance, education, and public
            research — then give them the one thing markets rarely allow: time.
          </p>
          <a
            className="hero-cue"
            href="#companies"
            data-rise
            style={{ '--rise-delay': '280ms' } as React.CSSProperties}
          >
            Explore our companies&nbsp;↓
          </a>
        </header>

        <section className="shell section" id="companies" aria-labelledby="companies-heading">
          <div className="section-head">
            <span className="eyebrow" data-reveal>
              The companies
            </span>
            <h2 id="companies-heading" data-reveal>
              Four companies. One standard.
            </h2>
            <p className="lede" data-reveal>
              Every company in the group is held to the same bar — whether it
              serves a commuter, a trading desk, a classroom, or a government.
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

        <section className="shell section" id="principles" aria-labelledby="principles-heading">
          <div className="section-head">
            <span className="eyebrow" data-reveal>
              How we operate
            </span>
            <h2 id="principles-heading" data-reveal>
              Held, not managed.
            </h2>
          </div>
          <div className="cards">
            {PRINCIPLES.map((principle) => (
              <div className="card" key={principle.title} data-reveal>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="shell section" aria-label="From the chairman">
          <figure className="quote" data-reveal>
            <blockquote>
              “Every business we build starts with the same question: what
              would this industry look like if it were designed today, from
              zero, with no legacy to protect?”
            </blockquote>
            <cite>Saswat Ji — Founder &amp; Chairman</cite>
          </figure>
        </section>

        <section className="shell section" id="contact" aria-labelledby="contact-heading">
          <div className="cta" data-reveal>
            <span className="eyebrow">Acquisitions</span>
            <h2 id="contact-heading" style={{ marginTop: '0.75rem' }}>
              Built something that deserves decades?
            </h2>
            <p className="lede">
              We acquire and operate companies we intend to keep. If yours is
              one of them, write to us.
            </p>
            <a className="button" href="mailto:contact@jienterprise.org">
              contact@jienterprise.org
            </a>
          </div>
        </section>
      </main>

      <div className="shell">
        <footer className="footer">
          <span className="wordmark">
            Ji Enterprise<span className="seal">.</span>
          </span>
          <a href="mailto:contact@jienterprise.org">contact@jienterprise.org</a>
          <span>© 2026 Ji Enterprise</span>
        </footer>
      </div>
    </>
  );
}
