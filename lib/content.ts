/* Ji Enterprises — Meridian content model.
   A privately held, diversified holding company headquartered in New York. */

export const CONTACT_EMAIL = 'contact@jienterprise.org';

export const MAIL = {
  ir: `mailto:${CONTACT_EMAIL}?subject=Investor%20relations`,
  general: `mailto:${CONTACT_EMAIL}`,
  press: `mailto:${CONTACT_EMAIL}?subject=Press`,
};

export interface RegisterEntry {
  ref: string;
  name: string;
  desc: string;
  sector: string;
  relationship: string;
  jurisdiction: string;
}

export const REGISTER: RegisterEntry[] = [
  {
    ref: 'JI—01',
    name: 'Oplo Cloud Inc.',
    desc: 'Consumer software & cloud services',
    sector: 'Technology',
    relationship: 'Wholly owned subsidiary',
    jurisdiction: 'Delaware, USA',
  },
  {
    ref: 'JI—02',
    name: 'AurumGlobal',
    desc: 'Markets research & asset intelligence',
    sector: 'Financial services',
    relationship: 'Wholly owned subsidiary',
    jurisdiction: 'New York, USA',
  },
  {
    ref: 'JI—03',
    name: 'Ji Schools',
    desc: 'Curriculum, examination & study programs',
    sector: 'Education',
    relationship: 'Nonprofit affiliate',
    jurisdiction: 'New York, USA',
  },
  {
    ref: 'JI—04',
    name: 'JIERD',
    desc: 'Research & early development',
    sector: 'Research & development',
    relationship: 'Internal division',
    jurisdiction: 'New York, USA',
  },
];

export interface Announcement {
  date: string;
  ref: string;
  title: string;
  cat: string;
  isNew?: boolean;
  href: string;
}

export const ANNOUNCEMENTS: Announcement[] = [
  {
    date: '08 JUL 2026',
    ref: 'JI/2026/07',
    title: 'Q2 2026 group update published to shareholders.',
    cat: 'New',
    isNew: true,
    href: '/shareholders',
  },
  {
    date: '14 MAY 2026',
    ref: 'JI/2026/05',
    title: 'Ji Schools releases the 2026–27 curriculum library.',
    cat: 'Subsidiary',
    href: '/announcements',
  },
  {
    date: '02 APR 2026',
    ref: 'JI/2026/04',
    title: 'Oplo Cloud Inc. incorporated in Delaware.',
    cat: 'Corporate',
    href: '/announcements',
  },
  {
    date: '09 FEB 2026',
    ref: 'JI/2026/02',
    title: 'Group adopts a unified brand system across all companies.',
    cat: 'Governance',
    href: '/announcements',
  },
  {
    date: '12 JAN 2026',
    ref: 'JI/2026/01',
    title: "JIERD designated as the group's research division.",
    cat: 'Governance',
    href: '/announcements',
  },
];

export const SH_FEATURED = {
  metaLive: 'Latest',
  metaKind: 'Update',
  metaWhen: 'July 2026',
  title: 'Q2 2026 group update',
  text: 'Operations advanced across all four companies during the quarter. Oplo Cloud completed its incorporation and continued development of its consumer software line; AurumGlobal maintained its research program; Ji Schools published a full curriculum cycle; JIERD progressed early-stage work.',
};

export const SH_DOCS = [
  { title: 'Q1 2026 group update', kind: 'Update', when: 'Apr 2026' },
  { title: 'Letter to shareholders — FY2025', kind: 'Letter', when: 'Jan 2026' },
  { title: 'Letter to shareholders — FY2024', kind: 'Letter', when: 'Jan 2025' },
];

export const FACTS = [
  { k: 'Legal form', v: 'Holding company', sub: 'Privately held' },
  { k: 'Founded', v: '2024' },
  { k: 'Headquarters', v: 'New York, USA' },
  { k: 'Group companies', v: '4' },
  { k: 'Sectors', v: 'Technology · Finance', sub: 'Education · Research' },
  { k: 'Founder & Chairman', v: 'S. Ji' },
];

export const PRINCIPLES = [
  {
    num: '01',
    lead: 'Acquire or found',
    rest: ' with conviction, in sectors the group understands.',
  },
  {
    num: '02',
    lead: 'Build',
    rest: ' for decades — product and people over short-term results.',
  },
  {
    num: '03',
    lead: 'Hold',
    rest: ' permanently. Ownership is the strategy, not the exit.',
  },
];
