import type { Metadata } from 'next';
import { MAIL, SH_DOCS, SH_FEATURED } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Shareholders',
  description:
    'The group reports to its shareholders in writing — quarterly updates and an annual letter from the founder.',
};

export default function ShareholdersPage() {
  return (
    <main id="main">
      <section className="section" id="shareholders">
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
    </main>
  );
}
