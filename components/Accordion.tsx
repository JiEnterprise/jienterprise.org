'use client';

import React, { useRef, useState } from 'react';

export interface AccordionItem {
  q: string;
  a: string;
}

function PlusIcon() {
  return (
    <span className="ic">
      <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden="true">
        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function Item({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className={`acc-item${isOpen ? ' open' : ''}`}>
      <button type="button" className="acc-q" aria-expanded={isOpen} onClick={onToggle}>
        {item.q}
        <PlusIcon />
      </button>
      <div className="acc-a" style={{ maxHeight: isOpen ? ref.current?.scrollHeight ?? 600 : 0 }}>
        <div className="acc-a-in" ref={ref}>
          {item.a}
        </div>
      </div>
    </div>
  );
}

/** Single-open accordion. Pass `dark` when placed on a dark section. */
export default function Accordion({
  items,
  dark,
  className,
}: {
  items: AccordionItem[];
  dark?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className={`acc${dark ? ' acc-dark' : ''}${className ? ` ${className}` : ''}`}>
      {items.map((item, i) => (
        <Item
          key={item.q}
          item={item}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}
