import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="nav" id="top" data-nav aria-label="Main">
      <div className="shell nav-inner">
        <Link className="wordmark" href="/">
          Ji Enterprise<span className="seal">.</span>
        </Link>
        <div className="nav-links">
          <Link className="nav-link nav-link--secondary" href="/about">
            About
          </Link>
          <Link className="nav-link nav-link--secondary" href="/divisions">
            Divisions
          </Link>
          <Link className="nav-link nav-link--secondary" href="/innovation">
            Innovation
          </Link>
          <Link className="nav-link nav-link--secondary" href="/sustainability">
            Sustainability
          </Link>
          <Link className="nav-link nav-link--secondary" href="/investors">
            Investors
          </Link>
          <Link className="nav-link" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
