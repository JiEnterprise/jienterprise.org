import type { Metadata, Viewport } from 'next';
import { Archivo, Geist_Mono } from 'next/font/google';
import Footer from '@/components/Footer';
import Kinetics from '@/components/Kinetics';
import Nav from '@/components/Nav';
import Topbar from '@/components/Topbar';
import './globals.css';

const sans = Archivo({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['wdth'],
  variable: '--font-sans',
});

const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jienterprise.org'),
  title: {
    default: 'Ji Enterprises — A diversified holding company',
    template: '%s · Ji Enterprises',
  },
  description:
    'Ji Enterprises is a privately held, diversified holding company headquartered in New York. About the group, official announcements, and updates to shareholders.',
  openGraph: {
    title: 'Ji Enterprises — A diversified holding company',
    description:
      'Ji Enterprises is a privately held, diversified holding company headquartered in New York.',
    type: 'website',
    locale: 'en_US',
  },
};

export const viewport: Viewport = {
  themeColor: '#fafaf8',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Kinetics />
        <Topbar />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
