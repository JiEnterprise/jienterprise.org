import Kinetics from '@/components/Kinetics';

const HOLDINGS = [
  {
    sector: 'Consumer Technology',
    name: 'Oplo Cloud',
    description:
      'Navigation, email, browsing, payments, and commerce — five everyday products rebuilt from first principles, on one shared engine.',
    products: 'OMap · OMail · OSurf · OPay · OShopping',
  },
  {
    sector: 'Financial Services',
    name: 'AurumGlobal',
    description:
      'An autonomous quantitative trading desk, market analytics, and credit infrastructure for the hundreds of millions the formal system has never seen.',
    products: 'AGQUANT · Terminal · Research · PRAMANIK',
  },
  {
    sector: 'Education',
    name: 'Ji School',
    description:
      'Institutional learning infrastructure and digital delivery at national scale — governance first, apps second.',
    products: 'Academy · Tutoring Marketplace',
  },
  {
    sector: 'Government & Advanced Research',
    name: 'FoxMon Industries',
    description:
      'Long-horizon research and frontier technology, built with and for government, measured in decades.',
    products: 'Applied Research · Government Programs · Advanced Systems',
  },
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

export default function Home() {
  return (
    <>
      <Kinetics />

      <div className="shell">
        <nav className="nav" aria-label="Main">
          <a className="wordmark" href="/">
            Ji Enterprise<span className="seal">.</span>
          </a>
          <a className="nav-link" href="mailto:contact@jienterprise.org">
            Contact
          </a>
        </nav>

        <header className="hero">
          <span className="eyebrow" data-rise style={{ '--rise-delay': '0ms' } as React.CSSProperties}>
            A parent company
          </span>
          <h1 data-rise style={{ '--rise-delay': '120ms' } as React.CSSProperties}>
            We <em>hold</em> companies to a longer clock.
          </h1>
          <p className="lede" data-rise style={{ '--rise-delay': '260ms' } as React.CSSProperties}>
            Ji Enterprise builds, acquires, and operates businesses across
            technology, finance, education, and public research — then gives
            them the one thing markets rarely allow: time.
          </p>
        </header>

        <main className="thread" data-thread>
          <span className="spine-fill" aria-hidden="true" />

          <span
            className="mark mark--parent eyebrow"
            data-rise
            style={{ '--rise-delay': '420ms' } as React.CSSProperties}
          >
            The parent · Ji Enterprise
          </span>

          <section className="section" aria-labelledby="holdings-heading">
            <span className="mark eyebrow" data-reveal>
              The holdings
            </span>
            <div className="section-body">
              <h2 className="statement" id="holdings-heading" data-reveal>
                Four companies. One standard.
              </h2>
              <p className="prose" style={{ marginTop: '1.1rem' }} data-reveal>
                Every company in the group is held to the same bar — whether it
                serves a commuter, a trading desk, a classroom, or a
                government.
              </p>
            </div>

            {HOLDINGS.map((holding) => (
              <article className="holding" key={holding.name}>
                <span className="mark eyebrow" data-reveal>
                  {holding.sector}
                </span>
                <div className="section-body" style={{ paddingTop: 0 }}>
                  <h3 className="holding-name" data-reveal>
                    {holding.name}
                  </h3>
                  <p className="holding-desc" data-reveal>
                    {holding.description}
                  </p>
                  <p className="holding-products" data-reveal>
                    {holding.products}
                  </p>
                </div>
              </article>
            ))}
          </section>

          <section className="section" aria-labelledby="operate-heading">
            <span className="mark eyebrow" data-reveal>
              How we operate
            </span>
            <div className="section-body">
              <h2 className="statement" id="operate-heading" data-reveal>
                Held, not managed.
              </h2>
              <div className="principles" style={{ marginTop: '2.25rem' }}>
                {PRINCIPLES.map((principle) => (
                  <div className="principle" key={principle.title} data-reveal>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section letter" aria-label="From the chairman">
            <span className="mark eyebrow" data-reveal>
              From the chairman
            </span>
            <div className="section-body">
              <blockquote data-reveal>
                “Every business we build starts with the same question: what
                would this industry look like if it were designed today, from
                zero, with no legacy to protect?”
              </blockquote>
              <cite className="eyebrow" data-reveal>
                Saswat Ji · Founder &amp; Chairman
              </cite>
            </div>
          </section>

          <section className="section" aria-labelledby="door-heading">
            <span className="mark eyebrow" data-reveal>
              Acquisitions
            </span>
            <div className="section-body">
              <h2 className="statement" id="door-heading" data-reveal>
                Built something that deserves decades?
              </h2>
              <p className="prose" style={{ marginTop: '1.1rem' }} data-reveal>
                We acquire and operate companies we intend to keep. If yours is
                one of them, write to us.
              </p>
              <a
                className="door-link"
                href="mailto:contact@jienterprise.org"
                data-reveal
              >
                contact@jienterprise.org
              </a>
            </div>
          </section>
        </main>

        <footer className="footer">
          <span className="wordmark">
            Ji Enterprise<span className="seal">.</span>
          </span>
          <span className="eyebrow">
            <a href="mailto:contact@jienterprise.org">
              contact@jienterprise.org
            </a>
          </span>
          <span className="eyebrow">© 2026 Ji Enterprise</span>
        </footer>
      </div>
    </>
  );
}
