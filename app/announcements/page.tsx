import type { Metadata } from 'next';
import Link from 'next/link';
import { ANNOUNCEMENTS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Announcements',
  description:
    'Corporate actions, governance decisions, and notices from across the Ji Enterprises group — most recent first.',
};

export default function AnnouncementsPage() {
  return (
    <main id="main">
      <section className="section" id="announcements">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow reveal">Announcements</p>
            <h2 className="display reveal" data-delay="1">
              Official notices.
            </h2>
            <p className="lede reveal" data-delay="2">
              Corporate actions, governance decisions, and notices from across
              the group — most recent first.
            </p>
          </div>

          <div className="ann-list reveal" data-delay="2">
            {ANNOUNCEMENTS.map((a) => (
              <Link
                className="ann"
                href={a.isNew ? '/shareholders' : '#announcements'}
                key={a.ref}
              >
                <span className="date">{a.date}</span>
                <span className="ref">{a.ref}</span>
                <h3>{a.title}</h3>
                <span className={`cat${a.isNew ? ' new' : ''}`}>{a.cat}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
