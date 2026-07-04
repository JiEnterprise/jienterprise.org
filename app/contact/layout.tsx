import type { Metadata } from 'next';

// The contact page is a client component (mailto form), so its
// route metadata lives here.
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ji Enterprise — partnership, investment, press, and careers inquiries, routed to the right team.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
