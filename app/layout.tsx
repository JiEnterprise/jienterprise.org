import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: {
    default: 'Ji Enterprise — A diversified holding company',
    template: '%s · Ji Enterprise',
  },
  description:
    'Ji Enterprise builds companies across technology, financial services, education, and public infrastructure — from New York to New Delhi.',
  keywords: [
    'Ji Enterprise',
    'holding company',
    'Oplo Cloud',
    'AurumGlobal',
    'Ji School',
    'Ji Civic',
    'venture builder',
  ],
  openGraph: {
    title: 'Ji Enterprise — A diversified holding company',
    description:
      'We don’t enter markets. We build them. Engineering-first companies across technology, finance, education, and public infrastructure.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ScrollReveal />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
