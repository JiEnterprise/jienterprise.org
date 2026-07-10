import type { Company } from '@/lib/content';

export default function Tile({
  company,
  half,
}: {
  company: Company;
  half?: boolean;
}) {
  return (
    <article
      id={company.slug}
      className={`tile${company.dark ? ' tile--dark' : ''}${half ? ' tile--half' : ''}`}
      data-reveal
    >
      <span className="tile-ghost" aria-hidden="true">
        {company.ghost}
      </span>
      <span className="eyebrow">{company.sector}</span>
      <h3 className="tile-name">{company.name}</h3>
      <p className="tile-desc">{company.description}</p>
      <p className="tile-products">{company.products}</p>
    </article>
  );
}
