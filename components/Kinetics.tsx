'use client';

import { useEffect } from 'react';

/**
 * Drives the two page behaviors that need scroll state:
 * — fills the holding line (--spine-p on [data-thread]) as the reader descends
 * — reveals [data-reveal] elements the first time they enter the viewport
 * Renders nothing. Respects prefers-reduced-motion (CSS shows everything).
 */
export default function Kinetics() {
  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const revealables = Array.from(document.querySelectorAll('[data-reveal]'));
    if (reduced) {
      revealables.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    revealables.forEach((el) => io.observe(el));

    const thread = document.querySelector<HTMLElement>('[data-thread]');
    let raf = 0;

    const update = () => {
      raf = 0;
      if (!thread) return;
      const rect = thread.getBoundingClientRect();
      // The line is "drawn" down to a point ~3/4 of the viewport height.
      const anchor = window.innerHeight * 0.78;
      const progress = Math.min(1, Math.max(0, (anchor - rect.top) / rect.height));
      thread.style.setProperty('--spine-p', progress.toFixed(4));
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
