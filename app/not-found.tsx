export default function NotFound() {
  return (
    <div className="shell hero">
      <span className="eyebrow">404</span>
      <h1 style={{ marginTop: '0.75rem' }}>
        Nothing is held at this address.
      </h1>
      <p className="lede" style={{ margin: '1.25rem auto 0' }}>
        The page you are looking for does not exist.
      </p>
      <a className="hero-cue" href="/">
        Return to Ji Enterprise →
      </a>
    </div>
  );
}
