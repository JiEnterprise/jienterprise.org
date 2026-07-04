import React from 'react';
import Link from 'next/link';

const cols: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Newsroom', href: '/news' },
      { label: 'Careers', href: '/careers' },
      { label: 'Responsibility', href: '/sustainability' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Businesses',
    links: [
      { label: 'Oplo Cloud', href: '/subsidiaries/oplo-cloud' },
      { label: 'AurumGlobal', href: '/subsidiaries/aurumglobal' },
      { label: 'Ji School', href: '/subsidiaries/ji-school' },
      { label: 'Ji Civic', href: '/subsidiaries/ji-civic' },
      { label: 'Oplo Labs', href: '/ventures' },
    ],
  },
  {
    title: 'Investors',
    links: [
      { label: 'Overview', href: '/investor-relations' },
      { label: 'Governance', href: '/investor-relations#governance' },
      { label: 'Reports', href: '/investor-relations#reports' },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap" style={{ padding: 0 }}>
        <div className="foot-top">
          <div style={{ maxWidth: 280 }}>
            <p className="foot-mark">Ji Enterprise</p>
            <p className="foot-addr">
              A diversified holding company.
              <br />
              Bayside, Queens — New York.
            </p>
          </div>
          <div className="foot-cols">
            {cols.map((col) => (
              <div key={col.title} className="foot-col">
                <p className="t">{col.title}</p>
                {col.links.map((link) => (
                  <Link key={link.label + link.href} href={link.href} className="l">
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="foot-legal">
          Subsidiary products and services are in active development; availability and features are
          subject to change. AurumGlobal research is for informational purposes only and does not
          constitute investment advice.
        </p>
        <div className="foot-bottom">
          <span>© 2026 Ji Enterprise. All rights reserved.</span>
          <div className="links">
            <Link href="/legal/privacy-policy">Privacy</Link>
            <Link href="/legal/terms-of-use">Terms</Link>
            <Link href="/legal/cookie-policy">Cookies</Link>
            <Link href="/legal/disclaimer">Disclaimer</Link>
          </div>
          <span>United States · India</span>
        </div>
      </div>
    </footer>
  );
}
