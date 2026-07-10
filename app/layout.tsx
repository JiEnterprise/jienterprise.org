import type { Metadata, Viewport } from 'next';
import { Figtree } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Kinetics from '@/components/Kinetics';
import './globals.css';

const sans = Figtree({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jienterprise.org'),
  title: {
    default: 'Ji Enterprise — A parent company',
    template: '%s · Ji Enterprise',
  },
  description:
    'Ji Enterprise builds, acquires, and operates companies across technology, finance, education, and public research.',
  openGraph: {
    title: 'Ji Enterprise — A parent company',
    description:
      'Ji Enterprise builds, acquires, and operates companies across technology, finance, education, and public research.',
    type: 'website',
    locale: 'en_US',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <Kinetics />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
