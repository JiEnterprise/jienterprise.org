import type { Metadata } from 'next';
import { CONTACT_EMAIL } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact & leadership',
  description:
    'Corporate leadership and contact routes for Ji Enterprise: general inquiries, acquisitions, investor relations, and press.',
};

const ROUTES = [
  {
    title: 'General inquiries',
    text: 'Anything that doesn’t fit the categories below.',
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    title: 'Acquisitions',
    text: 'For founders and owners considering a sale.',
    href: `mailto:${CONTACT_EMAIL}?subject=Acquisitions`,
  },
  {
    title: 'Investor relations',
    text: 'Institutional and partnership inquiries.',
    href: `mailto:${CONTACT_EMAIL}?subject=Investor%20relations`,
  },
  {
    title: 'Press',
    text: 'Media and interview requests.',
    href: `mailto:${CONTACT_EMAIL}?subject=Press`,
  },
];

export default function ContactPage() {
  return (
    <main>
      <header className="shell page-hero">
        <span className="eyebrow" data-rise style={{ '--rise-delay': '0ms' } as React.CSSProperties}>
          Contact &amp; corporate leadership
        </span>
        <h1 data-rise style={{ '--rise-delay': '120ms' } as React.CSSProperties}>
          Get in touch
        </h1>
        <p className="lede" data-rise style={{ '--rise-delay': '240ms' } as React.CSSProperties}>
          Every inquiry goes to one address and is routed by subject.
        </p>
      </header>

      <section className="shell section" aria-label="Leadership">
        <div className="leader" data-reveal>
          <div className="leader-avatar" aria-hidden="true">
            S
          </div>
          <div className="leader-name">Saswat Ji</div>
          <div className="leader-role">Founder &amp; Chairman</div>
          <p className="leader-bio">
            Saswat Ji founded Ji Enterprise and oversees its four divisions.
            Each business in the group was architected internally — its
            technology, its design, and its market thesis.
          </p>
        </div>
      </section>

      <section className="shell section" aria-label="Contact routes">
        <div className="cards cards--four">
          {ROUTES.map((route) => (
            <div className="card" key={route.title} data-reveal>
              <h3>{route.title}</h3>
              <p>{route.text}</p>
              <a className="card-link" href={route.href}>
                {CONTACT_EMAIL}
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
