'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Scroll behaviors for every page:
 * — .reveal elements fade in the first time they enter the viewport
 * — the sticky nav gains its border once the page is scrolled
 * — [data-count] numbers count up when they become visible
 * Re-runs on route changes. Respects prefers-reduced-motion.
 */
export default function Kinetics() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const revealed = Array.from(document.querySelectorAll('.reveal'));
    let io: IntersectionObserver | undefined;
    if (!reduce && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
      );
      revealed.forEach((el) => io?.observe(el));
    } else {
      revealed.forEach((el) => el.classList.add('in'));
    }

    const animate = (el: Element) => {
      const end = parseInt(el.getAttribute('data-count') ?? '', 10);
      if (reduce || !isFinite(end)) {
        el.textContent = String(end);
        return;
      }
      let t0: number | null = null;
      const dur = 1100;
      const frame = (t: number) => {
        if (!t0) t0 = t;
        const p = Math.min((t - t0) / dur, 1);
        el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };

    const nums = Array.from(document.querySelectorAll('[data-count]'));
    let io2: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window) {
      io2 = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              animate(entry.target);
              io2?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.5 },
      );
      nums.forEach((el) => io2?.observe(el));
    } else {
      nums.forEach(animate);
    }

    const nav = document.querySelector<HTMLElement>('[data-nav]');
    const onScroll = () => {
      nav?.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
      io2?.disconnect();
    };
  }, [pathname]);

  return null;
}
