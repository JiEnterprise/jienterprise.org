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
  { value: '4', label: 'Operating divisions' },
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

const RESEARCH = [
  {
    title: 'Roxan routing engine',
    text: 'The engine under OMap scores every route for real speed — seconds saved, not theoretical distance.',
  },
  {
    title: 'AGQUANT autonomous desk',
    text: 'A quantitative trading desk that selects, executes, and risk-manages its strategies with no manual intervention.',
  },
  {
    title: 'PRAMANIK credit infrastructure',
    text: 'Income-verification APIs that turn consented financial data into the primitive every credit decision begins with.',
  },
  {
    title: 'Long-horizon programs',
    text: 'FoxMon Industries carries public research from first study to working capability — on a ten-year clock.',
  },
];

const IMPACT = [
  {
    title: 'Access to education',
    text: 'Ji School builds governed learning infrastructure so good teaching reliably reaches every student — at national scale.',
  },
  {
    title: 'Financial inclusion',
    text: 'PRAMANIK extends credit visibility to the hundreds of millions of people the formal financial system has never seen.',
  },
  {
    title: 'Research in the public interest',
    text: 'FoxMon Industries commits to public problems that outlast any single budget cycle.',
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
            <a className="nav-link nav-link--secondary" href="#about">
              About
            </a>
            <a className="nav-link nav-link--secondary" href="#divisions">
              Divisions
            </a>
            <a className="nav-link nav-link--secondary" href="#innovation">
              Innovation
            </a>
            <a className="nav-link nav-link--secondary" href="#sustainability">
              Sustainability
            </a>
            <a className="nav-link nav-link--secondary" href="#investors">
              Investors
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
            href="#about"
            data-rise
            style={{ '--rise-delay': '280ms' } as React.CSSProperties}
          >
            Learn about Ji Enterprise&nbsp;↓
          </a>
        </header>

        {/* ── About ──────────────────────────────────────────── */}
        <section className="shell section" id="about" aria-labelledby="about-heading">
          <div className="section-head">
            <span className="eyebrow" data-reveal>
              About Ji Enterprise
            </span>
            <h2 id="about-heading" data-reveal>
              A permanent home for ambitious companies.
            </h2>
            <p className="lede" data-reveal>
              We build companies from zero, acquire ones we intend to keep, and
              operate them all to one standard. No exits, no flips — a parent
              in the literal sense.
            </p>
          </div>
          <div className="cards">
            {PRINCIPLES.map((principle) => (
              <div className="card" key={principle.title} data-reveal>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            ))}
          </div>
          <div className="numbers" style={{ marginTop: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            {NUMBERS.map((item) => (
              <div key={item.label} data-reveal>
                <div className="number-value">{item.value}</div>
                <div className="number-label">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divisions & brands ─────────────────────────────── */}
        <section className="shell section" id="divisions" aria-labelledby="divisions-heading">
          <div className="section-head">
            <span className="eyebrow" data-reveal>
              Divisions &amp; brands
            </span>
            <h2 id="divisions-heading" data-reveal>
              Four divisions. One standard.
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

        {/* ── Innovation & research ──────────────────────────── */}
        <section className="shell section" id="innovation" aria-labelledby="innovation-heading">
          <div className="section-head">
            <span className="eyebrow" data-reveal>
              Innovation &amp; research
            </span>
            <h2 id="innovation-heading" data-reveal>
              Built in-house, from zero.
            </h2>
            <p className="lede" data-reveal>
              The group runs on proprietary systems designed inside its own
              walls — engines, desks, and infrastructure no one else ships.
            </p>
          </div>
          <div className="cards cards--four">
            {RESEARCH.map((item) => (
              <div className="card" key={item.title} data-reveal>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Sustainability & philanthropy ──────────────────── */}
        <section className="shell section" id="sustainability" aria-labelledby="sustainability-heading">
          <div className="section-head">
            <span className="eyebrow" data-reveal>
              Sustainability &amp; philanthropy
            </span>
            <h2 id="sustainability-heading" data-reveal>
              The payoff is public.
            </h2>
            <p className="lede" data-reveal>
              Our giving is structural, not seasonal: the group points its
              companies at problems whose returns accrue to everyone.
            </p>
          </div>
          <div className="cards">
            {IMPACT.map((item) => (
              <div className="card" key={item.title} data-reveal>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Investor relations ─────────────────────────────── */}
        <section className="shell section" id="investors" aria-labelledby="investors-heading">
          <div className="cta cta--dark" data-reveal>
            <span className="eyebrow">Investor relations</span>
            <h2 id="investors-heading" style={{ marginTop: '0.75rem' }}>
              Privately held, deliberately.
            </h2>
            <p className="lede">
              Ji Enterprise is a private company and does not trade on public
              markets. Institutional and partnership inquiries are read by the
              office of the chairman.
            </p>
            <a
              className="button"
              href="mailto:contact@jienterprise.org?subject=Investor%20relations"
            >
              Contact investor relations
            </a>
          </div>
        </section>

        {/* ── Contact & corporate leadership ─────────────────── */}
        <section className="shell section" id="contact" aria-labelledby="contact-heading">
          <div className="section-head">
            <span className="eyebrow" data-reveal>
              Contact &amp; corporate leadership
            </span>
            <h2 id="contact-heading" data-reveal>
              Leadership
            </h2>
          </div>

          <div className="leader" data-reveal>
            <div className="leader-avatar" aria-hidden="true">
              S
            </div>
            <div className="leader-name">Saswat Ji</div>
            <div className="leader-role">Founder &amp; Chairman</div>
            <p className="leader-bio">
              Saswat Ji founded Ji Enterprise as a different kind of holding
              company — one that architects its businesses internally, owns the
              full stack, and holds what it builds for decades.
            </p>
          </div>

          <figure className="quote" data-reveal style={{ marginTop: 'clamp(2.5rem, 6vw, 4rem)' }}>
            <blockquote>
              “Every business we build starts with the same question: what
              would this industry look like if it were designed today, from
              zero, with no legacy to protect?”
            </blockquote>
          </figure>

          <div className="cta" data-reveal style={{ marginTop: 'clamp(2.5rem, 6vw, 4rem)' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.4vw, 2.5rem)' }}>
              Write to us.
            </h2>
            <p className="lede">
              Acquisitions, partnerships, press, or anything that deserves
              decades — one address, read carefully.
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
