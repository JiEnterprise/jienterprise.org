'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Drives the `.rv` scroll-reveal animation site-wide. Mounted once in the
 * root layout; re-scans the DOM on every route change so freshly-rendered
 * pages animate in.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.rv:not(.in)'));
    if (els.length === 0) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [pathname]);

  return null;
}
