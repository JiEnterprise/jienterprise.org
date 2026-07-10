import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/content';

export default function Footer() {
  return (
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
                <Link href="/about">About Ji Enterprise</Link>
              </li>
              <li>
                <Link href="/divisions">Divisions &amp; brands</Link>
              </li>
              <li>
                <Link href="/innovation">Innovation &amp; research</Link>
              </li>
              <li>
                <Link href="/sustainability">
                  Sustainability &amp; philanthropy
                </Link>
              </li>
              <li>
                <Link href="/investors">Investor relations</Link>
              </li>
              <li>
                <Link href="/contact">Leadership &amp; contact</Link>
              </li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Divisions">
            <h4 className="footer-heading">Divisions</h4>
            <ul className="footer-list">
              <li>
                <Link href="/divisions#oplo-cloud">Oplo Cloud</Link>
              </li>
              <li>
                <Link href="/divisions#aurumglobal">AurumGlobal</Link>
              </li>
              <li>
                <Link href="/divisions#ji-school">Ji School</Link>
              </li>
              <li>
                <Link href="/divisions#foxmon-industries">
                  FoxMon Industries
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Contact">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-list">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`}>General inquiries</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}?subject=Acquisitions`}>
                  Acquisitions
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Investor%20relations`}
                >
                  Investor relations
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}?subject=Press`}>Press</a>
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
  );
}
