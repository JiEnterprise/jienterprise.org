import type { Metadata, Viewport } from 'next';
import { Besley, Public_Sans, Spline_Sans_Mono } from 'next/font/google';
import './globals.css';

const display = Besley({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const body = Public_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

const mono = Spline_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
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
      'We hold companies to a longer clock. Technology, finance, education, and public research — from New York to New Delhi.',
    type: 'website',
    locale: 'en_US',
  },
};

export const viewport: Viewport = {
  themeColor: '#fcfbf9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
