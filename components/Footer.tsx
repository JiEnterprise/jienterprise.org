import Link from 'next/link';
import { MAIL } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="mark">JI</div>
            <p>
              Ji Enterprises is a privately held, diversified holding company
              headquartered in New York.
            </p>
          </div>
          <div className="foot-col">
            <h5>Group</h5>
            <Link href="/group">Oplo Cloud</Link>
            <Link href="/group">AurumGlobal</Link>
            <Link href="/group">Ji Schools</Link>
            <Link href="/group">JIERD</Link>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <Link href="/about">About</Link>
            <Link href="/group">Register</Link>
            <Link href="/announcements">Announcements</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="foot-col">
            <h5>Shareholders</h5>
            <Link href="/shareholders">Updates</Link>
            <Link href="/shareholders">Letters</Link>
            <a href={MAIL.ir}>Investor relations</a>
          </div>
          <div className="foot-col">
            <h5>Legal</h5>
            <Link href="/contact">Terms</Link>
            <Link href="/contact">Privacy</Link>
            <Link href="/contact">Disclosures</Link>
          </div>
        </div>
        <div className="foot-legal">
          <span>© 2026 Ji Enterprises. All rights reserved.</span>
          <span>New York, United States</span>
        </div>
      </div>
    </footer>
  );
}
