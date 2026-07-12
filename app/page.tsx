import Link from 'next/link';
import Orbit from '@/components/Orbit';
import {
  ANNOUNCEMENTS,
  FACTS,
  MAIL,
  PRINCIPLES,
  REGISTER,
  SH_DOCS,
  SH_FEATURED,
} from '@/lib/content';

export default function Home() {
  return (
    <main id="main">
      {/* ===================== HERO ===================== */}
      <header className="hero" id="top-hero">
        <div className="wrap">
          <div>
            <p className="eyebrow reveal">
              Ji Enterprises · Est. 2024 · New York
            </p>
            <h1 className="display reveal" data-delay="1">
              A diversified holding company<span className="stop">.</span>
            </h1>
            <p className="lede reveal" data-delay="2">
              Ji Enterprises owns and operates a small group of companies
              across technology, financial services, education, and research.
              Privately held. Built for permanent ownership.
            </p>
            <div className="cta-row reveal" data-delay="3">
              <a className="btn btn-solid" href="#shareholders">
                Shareholder updates <span className="arr">→</span>
              </a>
              <a className="btn btn-ghost" href="#announcements">
                Announcements
              </a>
            </div>
          </div>

          <Orbit />
        </div>
      </header>

      {/* ===================== AT A GLANCE ===================== */}
      <section className="metrics" aria-label="At a glance">
        <div className="wrap">
          <div className="metric reveal">
            <div className="num" data-count="4">
              0
            </div>
            <div className="lbl">Group companies</div>
          </div>
          <div className="metric reveal" data-delay="1">
            <div className="num">2024</div>
            <div className="lbl">Founded</div>
          </div>
          <div className="metric reveal" data-delay="2">
            <div className="num">NYC</div>
            <div className="lbl">Headquarters</div>
          </div>
          <div className="metric reveal" data-delay="3">
            <div className="num">∞</div>
            <div className="lbl">Intended holding period</div>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section className="section" id="about">
        <div className="wrap about-grid">
          <div className="about-copy">
            <p className="eyebrow reveal">About the group</p>
            <h2 className="display reveal" data-delay="1">
              What Ji Enterprises is.
            </h2>
            <p className="reveal" data-delay="2">
              Ji Enterprises is a privately held holding company. It owns and
              operates a small group of companies across technology, financial
              services, education, and research — each run by its own team,
              under its own name, with its own mission.
            </p>
            <p className="reveal" data-delay="2">
              The group exists to hold. Companies are founded or acquired with
              the intent of permanent ownership: patient capital, long
              planning horizons, and operating support in place of quarterly
              pressure. The holding company itself stays small — its work is
              governance, capital allocation, and the long view.
            </p>

            <div className="principles reveal" data-delay="3">
              {PRINCIPLES.map((p) => (
                <div className="p-row" key={p.num}>
                  <span className="p-num">{p.num}</span>
                  <span className="p-txt">
                    <b>{p.lead}</b>
                    {p.rest}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <aside className="facts reveal" data-delay="2" aria-label="Fact sheet">
            <h3>Fact sheet</h3>
            {FACTS.map((fact) => (
              <div className="fact" key={fact.k}>
                <span className="k">{fact.k}</span>
                <span className="v">
                  {fact.v}
                  {fact.sub ? <small>{fact.sub}</small> : null}
                </span>
              </div>
            ))}
            <div className="fact">
              <span className="k">Investor relations</span>
              <span className="v">
                <a href={MAIL.ir}>Write to IR</a>
              </span>
            </div>
          </aside>
        </div>
      </section>

      {/* ===================== GROUP REGISTER ===================== */}
      <section className="section alt" id="group">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow reveal">Group companies</p>
            <h2 className="display reveal" data-delay="1">
              The register.
            </h2>
            <p className="lede reveal" data-delay="2">
              All companies and divisions held by Ji Enterprises, as currently
              constituted.
            </p>
          </div>

          <div className="register reveal" data-delay="2">
            <div className="reg-row head">
              <span>Ref.</span>
              <span>Company</span>
              <span>Sector</span>
              <span className="hide-t">Relationship</span>
              <span className="hide-t">Jurisdiction</span>
            </div>
            {REGISTER.map((entry) => (
              <div className="reg-row" key={entry.ref}>
                <span className="reg-ref">{entry.ref}</span>
                <span className="reg-name">
                  {entry.name}
                  <small>{entry.desc}</small>
                </span>
                <span className="reg-cell">{entry.sector}</span>
                <span className="reg-cell hide-t">{entry.relationship}</span>
                <span className="reg-cell hide-t">{entry.jurisdiction}</span>
              </div>
            ))}
          </div>
          <p className="reg-note">
            Register maintained by the holding company · Last revised July 2026
          </p>
        </div>
      </section>

      {/* ===================== ANNOUNCEMENTS ===================== */}
      <section className="section" id="announcements">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow reveal">Announcements</p>
            <h2 className="display reveal" data-delay="1">
              Official notices.
            </h2>
            <p className="lede reveal" data-delay="2">
              Corporate actions, governance decisions, and notices from across
              the group — most recent first.
            </p>
          </div>

          <div className="ann-list reveal" data-delay="2">
            {ANNOUNCEMENTS.map((a) => (
              <Link className="ann" href={a.href} key={a.ref}>
                <span className="date">{a.date}</span>
                <span className="ref">{a.ref}</span>
                <h3>{a.title}</h3>
                <span className={`cat${a.isNew ? ' new' : ''}`}>{a.cat}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SHAREHOLDERS ===================== */}
      <section className="section alt" id="shareholders">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow reveal">To our shareholders</p>
            <h2 className="display reveal" data-delay="1">
              Updates &amp; letters.
            </h2>
            <p className="lede reveal" data-delay="2">
              The group reports to its shareholders in writing — quarterly
              updates and an annual letter from the founder.
            </p>
          </div>

          <div className="sh-grid">
            <article className="sh-featured reveal" data-delay="1">
              <div>
                <div className="meta">
                  <span className="live">{SH_FEATURED.metaLive}</span>
                  <span>{SH_FEATURED.metaKind}</span>
                  <span>{SH_FEATURED.metaWhen}</span>
                </div>
                <h3>{SH_FEATURED.title}</h3>
                <p>{SH_FEATURED.text}</p>
              </div>
              <a className="btn" href={MAIL.ir}>
                Read the update <span className="arr">→</span>
              </a>
            </article>

            <div>
              <div className="sh-docs reveal" data-delay="2">
                {SH_DOCS.map((doc) => (
                  <a className="sh-doc" href={MAIL.ir} key={doc.title}>
                    <h4>{doc.title}</h4>
                    <span className="kind">{doc.kind}</span>
                    <span className="when">{doc.when}</span>
                  </a>
                ))}
              </div>
              <p className="sh-note reveal" data-delay="3">
                Shareholder documents are distributed directly to holders of
                record. For access or verification, write to investor
                relations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CORRESPONDENCE ===================== */}
      <section className="section corr" id="contact">
        <div className="wrap">
          <div>
            <p className="eyebrow reveal">Correspondence</p>
            <h2 className="display reveal" data-delay="1">
              One office. Every matter.
            </h2>
          </div>
          <div className="reveal" data-delay="2">
            <div className="corr-line">
              <span className="k">Investor relations</span>
              <a className="v" href={MAIL.ir}>
                contact@jienterprise.org
              </a>
            </div>
            <div className="corr-line">
              <span className="k">General inquiries</span>
              <a className="v" href={MAIL.general}>
                contact@jienterprise.org
              </a>
            </div>
            <div className="corr-line">
              <span className="k">Press</span>
              <a className="v" href={MAIL.press}>
                contact@jienterprise.org
              </a>
            </div>
            <div className="corr-line">
              <span className="k">Registered office</span>
              <span className="v-plain">New York, United States</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
