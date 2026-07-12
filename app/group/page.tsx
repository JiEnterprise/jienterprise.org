import type { Metadata } from 'next';
import { REGISTER } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Group companies',
  description:
    'All companies and divisions held by Ji Enterprises, as currently constituted.',
};

export default function GroupPage() {
  return (
    <main id="main">
      <section className="section" id="group">
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
    </main>
  );
}
