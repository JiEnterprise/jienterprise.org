import React from 'react';

/** The brand's chevron glyph used inside `.alink` links. */
export default function Chevron({ className }: { className?: string }) {
  return (
    <svg width="9" height="12" viewBox="0 0 11 14" className={className} aria-hidden="true">
      <path
        d="M3 1.5 L8.5 7 L3 12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
