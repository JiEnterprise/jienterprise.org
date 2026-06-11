import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface Props {
  params: Promise<{ doc: string }>;
}

interface Section {
  heading: string;
  body: string[];
  bullets?: string[];
}

interface Doc {
  title: string;
  updated: string;
  sections: Section[];
}

const docs: Record<string, Doc> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    updated: 'January 1, 2026',
    sections: [
      {
        heading: '1. Introduction',
        body: [
          'Ji Enterprise (“Ji Enterprise,” “we,” “us,” or “our”) is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and protect information about you when you visit jienterprise.org, interact with our digital services, or communicate with us.',
          'This policy applies to personal data processed by Ji Enterprise and its operating subsidiaries — Oplo Cloud, AurumGlobal, Ji School, and Ji Civic. Individual products may publish additional, product-specific privacy terms.',
        ],
      },
      {
        heading: '2. Information We Collect',
        body: ['We may collect the following categories of personal information:'],
        bullets: [
          'Contact information: name, email address, and organization when you contact us or submit an inquiry.',
          'Professional information: company name and role when provided in a business context.',
          'Usage data: IP address, browser type, pages visited, and referring URLs.',
          'Communication records: correspondence when you reach us by email or through our forms.',
        ],
      },
      {
        heading: '3. How We Use Your Information',
        body: ['We use your personal information to:'],
        bullets: [
          'Respond to inquiries and route them to the right team',
          'Share investor, partnership, or press materials you have requested',
          'Improve our website and services based on aggregate analytics',
          'Comply with legal obligations and protect the integrity of our systems',
        ],
      },
      {
        heading: '4. Consent-First Financial Data',
        body: [
          'Where our subsidiaries process financial data — including PRAMANIK on India’s Account Aggregator framework — data is accessed only with your explicit, revocable consent and used solely for the purpose for which it was shared.',
        ],
      },
      {
        heading: '5. Your Rights',
        body: ['Depending on your jurisdiction, you may have the right to:'],
        bullets: [
          'Access — obtain a copy of your personal data',
          'Rectification — correct inaccurate or incomplete data',
          'Erasure — request deletion in certain circumstances',
          'Portability — receive your data in a machine-readable format',
          'Object — to processing based on our legitimate interests',
        ],
      },
      {
        heading: '6. Contact',
        body: [
          'For questions about this Privacy Policy, contact privacy@jienterprise.org, or write to Ji Enterprise, Attn: Privacy, Bayside, Queens, New York, United States.',
        ],
      },
    ],
  },
  'terms-of-use': {
    title: 'Terms of Use',
    updated: 'January 1, 2026',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: [
          'By accessing jienterprise.org and any associated digital properties operated by Ji Enterprise (“we,” “us,” or “our”), you agree to be bound by these Terms of Use. If you do not agree, please do not use our website.',
        ],
      },
      {
        heading: '2. Intellectual Property',
        body: [
          'All content on this website — text, graphics, logos, product names, and software — is the property of Ji Enterprise or its subsidiaries and is protected by applicable intellectual property laws. You may not reproduce, modify, or distribute it without our express written permission.',
        ],
      },
      {
        heading: '3. No Investment Advice',
        body: [
          'Nothing on this website constitutes financial, investment, or other professional advice. AurumGlobal research and any market commentary are provided for informational purposes only. Past performance is not indicative of future results.',
        ],
      },
      {
        heading: '4. Products in Development',
        body: [
          'Many products and ventures described on this site are in active development. Availability, features, and timelines are subject to change, and descriptions of pipeline ventures carry no commitment to launch.',
        ],
      },
      {
        heading: '5. Limitation of Liability',
        body: [
          'To the maximum extent permitted by law, Ji Enterprise shall not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, this website.',
        ],
      },
      {
        heading: '6. Governing Law',
        body: [
          'These Terms are governed by the laws of the State of New York, United States, without regard to its conflict-of-law provisions.',
        ],
      },
    ],
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    updated: 'January 1, 2026',
    sections: [
      {
        heading: 'What Are Cookies',
        body: [
          'Cookies are small text files placed on your device when you visit our website. We use them to provide essential functionality, understand usage, and improve your experience on jienterprise.org.',
        ],
      },
      {
        heading: 'Types of Cookies We Use',
        body: [],
        bullets: [
          'Essential cookies — required for basic functionality and security; cannot be disabled.',
          'Analytics cookies — help us understand how visitors use the site, collected in aggregate.',
          'Preference cookies — remember choices such as region so the site behaves as you expect.',
        ],
      },
      {
        heading: 'Managing Cookies',
        body: [
          'You can control cookies through your browser settings. Disabling certain cookies may affect how parts of the website function.',
        ],
      },
    ],
  },
  disclaimer: {
    title: 'Disclaimer',
    updated: 'January 1, 2026',
    sections: [
      {
        heading: 'General Disclaimer',
        body: [
          'The information on this website is provided for general information purposes only. Ji Enterprise makes no representations or warranties of any kind about the completeness, accuracy, or availability of the website or its content for any purpose.',
        ],
      },
      {
        heading: 'Forward-Looking Statements',
        body: [
          'Descriptions of our businesses, products, and ventures may include forward-looking statements that involve risks and uncertainties. Actual outcomes may differ materially, and we undertake no obligation to update them.',
        ],
      },
      {
        heading: 'No Offer or Solicitation',
        body: [
          'As a privately held company, nothing on this website constitutes an offer to sell or a solicitation of an offer to buy any security of Ji Enterprise or any of its subsidiaries.',
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(docs).map((doc) => ({ doc }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { doc } = await params;
  const d = docs[doc];
  if (!d) return { title: 'Not Found' };
  return { title: d.title, description: `Ji Enterprise ${d.title}` };
}

export default async function LegalPage({ params }: Props) {
  const { doc } = await params;
  const d = docs[doc];
  if (!d) notFound();

  return (
    <article className="wrap" style={{ paddingTop: 150, paddingBottom: 90, maxWidth: 800 }}>
      <Link href="/" className="alink sm" style={{ color: 'var(--faint)' }}>
        <ArrowLeft size={14} style={{ marginRight: 6 }} /> Back to home
      </Link>

      <p className="eyebrow" style={{ margin: '34px 0 14px' }}>
        Legal
      </p>
      <h1
        style={{
          fontFamily: 'var(--serif)',
          fontSize: 46,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          marginBottom: 10,
        }}
      >
        {d.title}
      </h1>
      <p style={{ fontSize: 14, color: 'var(--faint)', marginBottom: 40 }}>Last updated: {d.updated}</p>

      <div className="prose-serif" style={{ borderTop: '1px solid var(--line)', paddingTop: 36 }}>
        {d.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {s.bullets && (
              <ul>
                {s.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <div style={{ marginTop: 48, paddingTop: 28, borderTop: '1px solid var(--line)' }}>
        <p style={{ fontSize: 14, color: 'var(--slate)', marginBottom: 16 }}>
          Questions about our legal documents? Contact{' '}
          <a href="mailto:legal@jienterprise.org" className="alink sm clay">
            legal@jienterprise.org
          </a>
          .
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22 }}>
          {Object.entries(docs).map(([slug, dd]) => (
            <Link
              key={slug}
              href={`/legal/${slug}`}
              className="alink sm"
              style={{ color: slug === doc ? 'var(--clay)' : 'var(--faint)' }}
            >
              {dd.title}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
