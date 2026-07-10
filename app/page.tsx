import Kinetics from '@/components/Kinetics';

const COMPANIES = [
  {
    slug: 'oplo-cloud',
    sector: 'Consumer Technology',
    name: 'Oplo Cloud',
    ghost: 'O',
    dark: true,
    description:
      'Navigation, email, browsing, payments, and commerce — five everyday products built on one shared engine.',
    products: 'OMap · OMail · OSurf · OPay · OShopping',
  },
  {
    slug: 'aurumglobal',
    sector: 'Financial Services',
    name: 'AurumGlobal',
    ghost: 'A',
    dark: false,
    description:
      'An autonomous quantitative trading desk, market analytics, and credit infrastructure for people without formal credit histories.',
    products: 'AGQUANT · Terminal · Research · PRAMANIK',
  },
  {
    slug: 'ji-school',
    sector: 'Education',
    name: 'Ji School',
    ghost: 'J',
    dark: false,
    description:
      'Institutional learning infrastructure and digital delivery at national scale.',
    products: 'Academy · Tutoring Marketplace',
  },
  {
    slug: 'foxmon-industries',
    sector: 'Government & Advanced Research',
    name: 'FoxMon Industries',
    ghost: 'F',
    dark: true,
    description:
      'Long-horizon research and frontier technology, developed with government partners.',
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
    title: 'One standard, everywhere.',
    text: 'Consumer apps, trading systems, classrooms, and government programs are built to the same standard.',
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
    text: 'Income-verification APIs built on consented financial data, for lenders serving first-time borrowers.',
  },
  {
    title: 'Long-horizon programs',
    text: 'FoxMon Industries carries public research programs from first study to working capability.',
  },
];

const IMPACT = [
  {
    title: 'Access to education',
    text: 'Ji School builds learning infrastructure designed to reach every student, at national scale.',
  },
  {
    title: 'Financial inclusion',
    text: 'PRAMANIK extends credit visibility to people without access to the formal financial system.',
  },
  {
    title: 'Research in the public interest',
    text: 'FoxMon Industries takes on long-term research problems in the public interest.',
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
      id={company.slug}
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

      <nav className="nav" id="top" data-nav aria-label="Main">
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
            We build, acquire, and hold companies for the{' '}
            <span className="accent">long&nbsp;term</span>.
          </h1>
          <p className="lede" data-rise style={{ '--rise-delay': '140ms' } as React.CSSProperties}>
            Ji Enterprise is a parent company operating businesses across
            technology, finance, education, and public research.
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
              Who we are
            </h2>
            <p className="lede" data-reveal>
              We build companies from zero, acquire companies we intend to
              keep, and operate every one of them to the same standard.
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
              Our divisions
            </h2>
            <p className="lede" data-reveal>
              Four companies across four sectors: consumer technology,
              financial services, education, and government research.
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
              Built in-house
            </h2>
            <p className="lede" data-reveal>
              The group runs on systems designed and built inside its own
              companies — engines, trading systems, and infrastructure.
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
              Building for the public
            </h2>
            <p className="lede" data-reveal>
              Three of the group&rsquo;s long-term commitments: access to
              education, financial inclusion, and public-interest research.
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
              Privately held
            </h2>
            <p className="lede">
              Ji Enterprise is a private company and does not trade on public
              markets. For institutional or partnership inquiries, write to
              us.
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
              Saswat Ji founded Ji Enterprise and oversees its four divisions.
              Each business in the group was architected internally — its
              technology, its design, and its market thesis.
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
              Write to us
            </h2>
            <p className="lede">
              For acquisitions, partnerships, or press inquiries:
            </p>
            <a className="button" href="mailto:contact@jienterprise.org">
              contact@jienterprise.org
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="wordmark">
                Ji Enterprise<span className="seal">.</span>
              </span>
              <p className="footer-tagline">
                A parent company operating businesses across technology,
                finance, education, and public research.
              </p>
            </div>

            <nav className="footer-col" aria-label="Company">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                <li>
                  <a href="#about">About Ji Enterprise</a>
                </li>
                <li>
                  <a href="#divisions">Divisions &amp; brands</a>
                </li>
                <li>
                  <a href="#innovation">Innovation &amp; research</a>
                </li>
                <li>
                  <a href="#sustainability">Sustainability &amp; philanthropy</a>
                </li>
                <li>
                  <a href="#investors">Investor relations</a>
                </li>
                <li>
                  <a href="#contact">Leadership &amp; contact</a>
                </li>
              </ul>
            </nav>

            <nav className="footer-col" aria-label="Divisions">
              <h4 className="footer-heading">Divisions</h4>
              <ul className="footer-list">
                <li>
                  <a href="#oplo-cloud">Oplo Cloud</a>
                </li>
                <li>
                  <a href="#aurumglobal">AurumGlobal</a>
                </li>
                <li>
                  <a href="#ji-school">Ji School</a>
                </li>
                <li>
                  <a href="#foxmon-industries">FoxMon Industries</a>
                </li>
              </ul>
            </nav>

            <nav className="footer-col" aria-label="Contact">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-list">
                <li>
                  <a href="mailto:contact@jienterprise.org">
                    General inquiries
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@jienterprise.org?subject=Acquisitions">
                    Acquisitions
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@jienterprise.org?subject=Investor%20relations">
                    Investor relations
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@jienterprise.org?subject=Press">
                    Press
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer-legal">
            <span>© 2026 Ji Enterprise. All rights reserved.</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
