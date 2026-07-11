/* Shared content for all Ji Enterprise pages. */

export interface Company {
  slug: string;
  sector: string;
  name: string;
  ghost: string;
  dark: boolean;
  description: string;
  products: string;
}

export const COMPANIES: Company[] = [
  {
    slug: 'oplo-cloud',
    sector: 'Consumer Technology',
    name: 'Oplo Cloud',
    ghost: 'O',
    dark: true,
    description:
      'Navigation, email, browsing, payments, and commerce — five everyday products built on one shared engine.',
    products: 'OMap · OMail · OSurf · OPay · OShopping',
  },
  {
    slug: 'aurumglobal',
    sector: 'Financial Services',
    name: 'AurumGlobal',
    ghost: 'A',
    dark: false,
    description:
      'An autonomous quantitative trading desk, market analytics, and credit infrastructure for people without formal credit histories.',
    products: 'AGQUANT · Terminal · Research · PRAMANIK',
  },
  {
    slug: 'ji-school',
    sector: 'Education',
    name: 'Ji School',
    ghost: 'J',
    dark: false,
    description:
      'Institutional learning infrastructure and digital delivery at national scale.',
    products: 'Academy · Tutoring Marketplace',
  },
  {
    slug: 'foxmon-industries',
    sector: 'Government & Advanced Research',
    name: 'FoxMon Industries',
    ghost: 'F',
    dark: true,
    description:
      'Long-horizon research and frontier technology, developed with government partners.',
    products: 'Applied Research · Government Programs · Advanced Systems',
  },
];

export const NUMBERS = [
  { value: '4', label: 'Operating divisions' },
  { value: '4', label: 'Sectors' },
  { value: '14', label: 'Products in development' },
];

export const PRINCIPLES = [
  {
    title: 'Own the full stack.',
    text: 'From routing engines to the last pixel, the core is never outsourced.',
  },
  {
    title: 'Decades, not quarters.',
    text: 'Progress is measured in industries reshaped, not earnings cycles.',
  },
  {
    title: 'One standard, everywhere.',
    text: 'Consumer apps, trading systems, classrooms, and government programs are built to the same standard.',
  },
];

export const RESEARCH = [
  {
    title: 'Roxan routing engine',
    text: 'The engine under OMap scores every route for real speed — seconds saved, not theoretical distance.',
  },
  {
    title: 'AGQUANT autonomous desk',
    text: 'A quantitative trading desk that selects, executes, and risk-manages its strategies with no manual intervention.',
  },
  {
    title: 'PRAMANIK credit infrastructure',
    text: 'Income-verification APIs built on consented financial data, for lenders serving first-time borrowers.',
  },
  {
    title: 'Long-horizon programs',
    text: 'FoxMon Industries carries public research programs from first study to working capability.',
  },
];

export const IMPACT = [
  {
    title: 'Access to education',
    text: 'Ji School builds learning infrastructure designed to reach every student, at national scale.',
  },
  {
    title: 'Financial inclusion',
    text: 'PRAMANIK extends credit visibility to people without access to the formal financial system.',
  },
  {
    title: 'Research in the public interest',
    text: 'FoxMon Industries takes on long-term research problems in the public interest.',
  },
];

export const CHAIRMAN_QUOTE =
  '“Every business we build starts with the same question: what would this industry look like if it were designed today, from zero, with no legacy to protect?”';

export const CONTACT_EMAIL = 'contact@jienterprise.org';

/** Featured announcement shown as the home hero. */
export const FEATURED = {
  eyebrow: 'From Oplo Cloud',
  title: 'OMap is entering private testing',
  text: 'Built on the Roxan routing engine, OMap scores every route for seconds saved — not theoretical distance.',
  href: '/divisions#oplo-cloud',
  cta: 'Learn more',
  ghost: 'O',
};

export const NEWS = [
  {
    tag: 'Launch',
    date: 'May 28, 2026',
    title: 'PRAMANIK: income verification for first-time borrowers',
    text: 'AurumGlobal announces PRAMANIK, a set of APIs that verify income from consented financial data — the first step in credit for people without credit histories.',
    href: '/divisions#aurumglobal',
  },
  {
    tag: 'Milestone',
    date: 'May 12, 2026',
    title: 'AGQUANT completes a full quarter of autonomous trading',
    text: 'Four strategies selected, executed, and risk-managed end to end, with no manual intervention.',
    href: '/innovation',
  },
];

/** Outward-facing explore cards for the home page. */
export const EXPLORE_HOME = [
  {
    href: '/divisions',
    text: 'Explore the group’s products across navigation, payments, trading, and learning',
  },
  {
    href: '/innovation',
    text: 'Learn about the systems built inside the group — engines, desks, and infrastructure',
  },
  {
    href: '/sustainability',
    text: 'See the group’s long-term commitments to education, inclusion, and public research',
  },
];
