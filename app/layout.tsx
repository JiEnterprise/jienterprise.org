import type { Metadata, Viewport } from 'next';
import { Figtree } from 'next/font/google';
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
    'Ji Enterprise builds, acquires, and operates companies across technology, finance, education, and public research — and holds them to a longer clock.',
  openGraph: {
    title: 'Ji Enterprise — A parent company',
    description:
      'We hold companies to a longer clock. Technology, finance, education, and public research.',
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
      <body>{children}</body>
    </html>
  );
}
