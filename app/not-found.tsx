import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main">
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">404</p>
            <h2 className="display">This page doesn&rsquo;t exist.</h2>
            <p className="lede">
              The address you requested is not on the register.
            </p>
          </div>
          <Link className="btn btn-solid" href="/">
            Return to Ji Enterprises <span className="arr">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
