import Link from 'next/link';
import {
  CONTACT_EMAIL,
  EXPLORE_HOME,
  FEATURED,
  NEWS,
} from '@/lib/content';

export default function Home() {
  return (
    <main>
      {/* Featured announcement — the hero is a story, not a statement */}
      <section className="shell section" aria-labelledby="featured-heading">
        <article className="tile tile--dark" data-rise>
          <span className="tile-ghost" aria-hidden="true">
            {FEATURED.ghost}
          </span>
          <span className="eyebrow">{FEATURED.eyebrow}</span>
          <h1 className="tile-name" id="featured-heading">
            {FEATURED.title}
          </h1>
          <p className="tile-desc">{FEATURED.text}</p>
          <Link className="button" href={FEATURED.href}>
            {FEATURED.cta}
          </Link>
        </article>
      </section>

      {/* Explore row */}
      <section className="shell section" aria-label="Explore">
        <div className="cards">
          {EXPLORE_HOME.map((item) => (
            <Link
              className="card card--link"
              href={item.href}
              key={item.href}
              data-reveal
            >
              <h3 className="card-explore">{item.text}</h3>
              <span className="card-link">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* News */}
      <section className="shell section" aria-labelledby="news-heading">
        <div className="section-head">
          <h2 id="news-heading" data-reveal>
            The latest
          </h2>
        </div>
        <div className="cards cards--four">
          {NEWS.map((story) => (
            <Link
              className="card card--link"
              href={story.href}
              key={story.title}
              data-reveal
            >
              <p className="card-meta">
                <span className="card-tag">{story.tag}</span>
                <span>{story.date}</span>
              </p>
              <h3>{story.title}</h3>
              <p>{story.text}</p>
              <span className="card-link">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* The parent company */}
      <section className="shell section" aria-labelledby="parent-heading">
        <div className="cta cta--slim" data-reveal>
          <h2 id="parent-heading">The parent company</h2>
          <p className="lede">
            Learn how Ji Enterprise is structured — divisions, leadership, and
            how the group operates.
          </p>
          <Link className="button" href="/about">
            About Ji Enterprise
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="shell section" aria-labelledby="subscribe-heading">
        <div className="cta cta--dark cta--slim" data-reveal>
          <h2 id="subscribe-heading">Get the latest from Ji Enterprise</h2>
          <p className="lede">Product announcements and company news.</p>
          <a
            className="button"
            href={`mailto:${CONTACT_EMAIL}?subject=Subscribe`}
          >
            Subscribe
          </a>
        </div>
      </section>
    </main>
  );
}
