'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  /** Final numeric value to count up to. */
  end: number;
  /** Appended after the number, e.g. "+", "M". */
  suffix?: string;
  label: string;
  note?: string;
}

/**
 * Animated count-up stat, matching the brand stat band. Counts from 0 to
 * `end` with an ease-out cubic when scrolled into view.
 */
export default function StatCounter({ end, suffix = '', label, note }: StatCounterProps) {
  const [display, setDisplay] = useState(`0${suffix}`);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      const id = requestAnimationFrame(() => setDisplay(`${end}${suffix}`));
      return () => cancelAnimationFrame(id);
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || done.current) return;
        done.current = true;
        let start: number | null = null;
        const step = (ts: number) => {
          if (start === null) start = ts;
          const p = Math.min((ts - start) / 1500, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(`${Math.round(eased * end)}${suffix}`);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      },
      { threshold: 0.5 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [end, suffix]);

  return (
    <div ref={ref} className="stat rv">
      <div className="v">{display}</div>
      <div className="l">{label}</div>
      {note && <div className="n">{note}</div>}
    </div>
  );
}
