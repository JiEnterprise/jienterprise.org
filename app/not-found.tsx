export default function NotFound() {
  return (
    <div className="shell">
      <nav className="nav" aria-label="Main">
        <a className="wordmark" href="/">
          Ji Enterprise<span className="seal">.</span>
        </a>
      </nav>
      <header className="hero">
        <span className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>
          404
        </span>
        <h1>Nothing is held at this address.</h1>
        <p className="lede">
          The page you are looking for does not exist.{' '}
          <a href="/" style={{ textDecorationThickness: '1px', textUnderlineOffset: '4px' }}>
            Return to Ji Enterprise
          </a>
          .
        </p>
      </header>
    </div>
  );
}
