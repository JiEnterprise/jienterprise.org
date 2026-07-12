import type { Metadata } from 'next';
import { MAIL } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Correspondence with Ji Enterprises: investor relations, general inquiries, and press. Registered office in New York, United States.',
};

export default function ContactPage() {
  return (
    <main id="main">
      <section className="section corr" id="contact">
        <div className="wrap">
          <div>
            <p className="eyebrow reveal">Correspondence</p>
            <h2 className="display reveal" data-delay="1">
              One office. Every matter.
            </h2>
          </div>
          <div className="reveal" data-delay="2">
            <div className="corr-line">
              <span className="k">Investor relations</span>
              <a className="v" href={MAIL.ir}>
                contact@jienterprise.org
              </a>
            </div>
            <div className="corr-line">
              <span className="k">General inquiries</span>
              <a className="v" href={MAIL.general}>
                contact@jienterprise.org
              </a>
            </div>
            <div className="corr-line">
              <span className="k">Press</span>
              <a className="v" href={MAIL.press}>
                contact@jienterprise.org
              </a>
            </div>
            <div className="corr-line">
              <span className="k">Registered office</span>
              <span className="v-plain">New York, United States</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
