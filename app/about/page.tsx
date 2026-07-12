import type { Metadata } from 'next';
import { FACTS, MAIL, PRINCIPLES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Ji Enterprises is a privately held holding company. It owns and operates a small group of companies across technology, financial services, education, and research.',
};

export default function AboutPage() {
  return (
    <main id="main">
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
    </main>
  );
}
