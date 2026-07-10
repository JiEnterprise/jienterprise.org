'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/about', label: 'About', secondary: true },
  { href: '/divisions', label: 'Divisions', secondary: true },
  { href: '/innovation', label: 'Innovation', secondary: true },
  { href: '/sustainability', label: 'Sustainability', secondary: true },
  { href: '/investors', label: 'Investors', secondary: true },
  { href: '/contact', label: 'Contact', secondary: false },
];

export default function Nav() {
  const pathname = usePathname().replace(/\/$/, '');

  return (
    <nav className="nav" id="top" data-nav aria-label="Main">
      <div className="shell nav-inner">
        <Link className="wordmark" href="/">
          Ji Enterprise<span className="seal">.</span>
        </Link>
        <div className="nav-links">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              className={`nav-link${link.secondary ? ' nav-link--secondary' : ''}`}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
