'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Page behaviors that need scroll state:
 * — reveals [data-reveal] elements the first time they enter the viewport
 * — gives the sticky nav its hairline once the page is scrolled
 * Re-runs on route changes so newly mounted pages get observed too.
 * Renders nothing. Respects prefers-reduced-motion (CSS shows everything).
 */
export default function Kinetics() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const revealables = Array.from(document.querySelectorAll('[data-reveal]'));
    let io: IntersectionObserver | undefined;

    if (reduced) {
      revealables.forEach((el) => el.classList.add('is-in'));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in');
              io?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
      );
      revealables.forEach((el) => io?.observe(el));
    }

    const nav = document.querySelector<HTMLElement>('[data-nav]');
    const onScroll = () => {
      nav?.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
