import Link from 'next/link';

const PAGES = [
  {
    href: '/about',
    title: 'About Ji Enterprise',
    text: 'Who we are and how we operate.',
  },
  {
    href: '/divisions',
    title: 'Divisions & brands',
    text: 'Four companies across four sectors.',
  },
  {
    href: '/innovation',
    title: 'Innovation & research',
    text: 'Systems designed and built in-house.',
  },
  {
    href: '/sustainability',
    title: 'Sustainability & philanthropy',
    text: 'Long-term commitments to the public.',
  },
  {
    href: '/investors',
    title: 'Investor relations',
    text: 'A privately held company.',
  },
  {
    href: '/contact',
    title: 'Contact & leadership',
    text: 'Get in touch with the group.',
  },
];

/** Consistent end-of-page grid linking to the rest of the site. */
export default function Explore({ current }: { current: string }) {
  const pages = PAGES.filter((page) => page.href !== current);

  return (
    <section className="shell section" aria-labelledby="explore-heading">
      <div className="section-head">
        <h2 id="explore-heading" data-reveal>
          More from Ji Enterprise
        </h2>
      </div>
      <div className="cards">
        {pages.map((page) => (
          <Link
            className="card card--link"
            href={page.href}
            key={page.href}
            data-reveal
          >
            <h3>{page.title}</h3>
            <p>{page.text}</p>
            <span className="card-link">Learn more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
