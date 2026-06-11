'use client';

import React, { useState } from 'react';

const PRINCIPLES: [string, string, string][] = [
  [
    '01',
    'The work is the argument. We persuade with prototypes, specifications, and shipped software — never with volume.',
    'Meetings end with artifacts. Opinions arrive with evidence.',
  ],
  [
    '02',
    'Ownership means the whole surface. Architecture to App Store, thesis to terminal — you carry it end to end.',
    'Nobody here owns a fragment.',
  ],
  [
    '03',
    'Craft is the floor, not the ceiling. Civic software and consumer apps ship at the same bar.',
    'Users can feel the last pixel. So can we.',
  ],
  [
    '04',
    'Honesty compounds. We say what’s early, what’s unproven, and what we don’t know — inside and out.',
    'The honest sentence today saves the hard one later.',
  ],
  [
    '05',
    'Speed is respect. For users waiting on the product, and for the person waiting on your reply.',
    'Days, not quarters. Minutes, not days.',
  ],
  [
    '06',
    'Two markets, one standard. New York and New Delhi get the same engineering, the same design, the same care.',
    'Geography never lowers the bar.',
  ],
  [
    '07',
    'Build for the decade. Every decision is auditioned against where the company should stand in 2036.',
    'Patient ambition beats loud sprints.',
  ],
];

export default function PrinciplesCarousel() {
  const [i, setI] = useState(0);
  const [out, setOut] = useState(false);
  const n = PRINCIPLES.length;

  const go = (d: number) => {
    setOut(true);
    setTimeout(() => {
      setI((p) => (p + d + n) % n);
      setOut(false);
    }, 320);
  };

  const [num, text, sub] = PRINCIPLES[i];

  return (
    <section className="prin-car">
      <div className="inner">
        <div className="pc-top rv">
          <div>
            <p className="eyebrow" style={{ marginBottom: 14 }}>
              How we work
            </p>
            <h2 className="sec-head" style={{ fontSize: 40 }}>
              Principles that shape how we
              <br />
              show up for the work.
            </h2>
          </div>
          <p className="pc-counter">
            <b>{num}</b> / 0{n}
          </p>
        </div>
        <div className="pc-stage rv">
          <div className={`pc-fade${out ? ' out' : ''}`}>
            <p className="pc-num">{num}</p>
            <p className="pc-text">{text}</p>
            <p className="pc-sub">{sub}</p>
          </div>
          <div className="pc-nav">
            <button type="button" className="pc-btn" aria-label="Previous principle" onClick={() => go(-1)}>
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path
                  d="M9 2 L4 7 L9 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button type="button" className="pc-btn" aria-label="Next principle" onClick={() => go(1)}>
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path
                  d="M5 2 L10 7 L5 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
