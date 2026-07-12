'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/group', label: 'Group companies' },
  { href: '/announcements', label: 'Announcements' },
  { href: '/shareholders', label: 'Shareholders' },
];

export default function Nav() {
  const pathname = usePathname().replace(/\/$/, '');

  return (
    <nav className="nav" id="top" data-nav aria-label="Primary">
      <div className="wrap">
        <Link className="brand" href="/" aria-label="Ji Enterprises home">
          <span className="mark">JI</span>
          <span>Ji&nbsp;Enterprises</span>
        </Link>
        <div className="nav-links">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link className="nav-cta" href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
