'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const links = [
  { label: 'Stories', href: '/news' },
  { label: 'Businesses', href: '/subsidiaries' },
  { label: 'Leadership', href: '/about' },
  { label: 'Investors', href: '/investor-relations' },
];

export default function Navigation() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLSpanElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Seamless height + brand-scale shrink on scroll (smoothstep, GPU transform).
  useEffect(() => {
    const nav = navRef.current;
    const brand = brandRef.current;
    if (!nav || !brand) return;

    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY;
      const t = Math.min(y / 140, 1);
      const e = t * t * (3 - 2 * t);
      nav.style.height = `${64 - e * 16}px`;
      brand.style.transform = `scale(${1 - e * 0.18}) translateZ(0)`;
      nav.classList.toggle('scrolled', y > 20);
      ticking = false;
    };
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  return (
    <nav ref={navRef} className="nav">
      <div className="nav-inner">
        <Link className="brand" href="/">
          <span ref={brandRef}>Ji Enterprise</span>
        </Link>

        <div className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={clsx(isActive(l.href) && 'active')}>
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Link className="pill sm" href="/contact">
            Contact
          </Link>
          <button
            type="button"
            className="nav-burger"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="nav-mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeMobile}
              className={clsx('nav-mobile-link', isActive(l.href) && 'active')}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={closeMobile} className="nav-mobile-link">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
