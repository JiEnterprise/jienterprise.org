/* ──────────────────────────────────────────────────────────────
   Ji Enterprise — content model
   A diversified holding company building engineering-first companies
   across technology, finance, education, and government research.
   ────────────────────────────────────────────────────────────── */

export const company = {
  name: 'Ji Enterprise',
  tagline: 'A diversified holding company',
  founder: 'Saswat Ji',
  founderRole: 'Founder & Chairman',
  email: 'contact@jienterprise.org',
  address: 'Bayside, Queens — New York',
  reach: 'New York to New Delhi',
};

export type Accent = 'clay' | 'gold' | 'forest' | 'navy';

export const accentHex: Record<Accent, string> = {
  clay: '#cc785c',
  gold: '#a8852e',
  forest: '#3d6b4f',
  navy: '#2c4a6e',
};

export interface Product {
  name: string;
  summary: string;
}

export interface Business {
  slug: string;
  name: string;
  sector: string;
  accent: Accent;
  /** One-line card description. */
  description: string;
  /** Inline product list shown on the card. */
  productLine: string;
  /** Longer narrative for the detail page. */
  overview: string[];
  thesis: string;
  products: Product[];
  stats: { value: string; label: string }[];
  /** Slugs of related newsroom stories. */
  stories: string[];
}

export const businesses: Business[] = [
  {
    slug: 'oplo-cloud',
    name: 'Oplo Cloud',
    sector: 'Consumer Technology',
    accent: 'clay',
    description:
      'Navigation, email, browsing, payments, and commerce — five products built from first principles.',
    productLine: 'OMap · OMail · OSurf · OPay · OShopping',
    thesis:
      'The everyday software people depend on has stopped improving. Oplo Cloud rebuilds the consumer stack — one product at a time — with a single design language and a shared engine underneath.',
    overview: [
      'Oplo Cloud is the consumer technology arm of Ji Enterprise: a suite of five products that re-imagine the software people touch every day. Each begins from the same question — what would this look like if it were designed today, from zero?',
      'The products share one engine, one identity system, and one design language. OMap routes for real speed, not theoretical distance. OMail, OSurf, OPay, and OShopping extend the same standard across communication, the web, payments, and commerce.',
      'We build the full stack — from backend infrastructure to the last pixel — because owning every layer is the only way to keep the bar high as the surface area grows.',
    ],
    products: [
      { name: 'OMap', summary: 'Navigation scored on seconds saved, powered by the Roxan routing engine.' },
      { name: 'OMail', summary: 'Email rebuilt around intent — fast, private, and quiet by default.' },
      { name: 'OSurf', summary: 'A browser that treats privacy and speed as features, not settings.' },
      { name: 'OPay', summary: 'Payments designed to disappear into the moment of purchase.' },
      { name: 'OShopping', summary: 'Commerce that understands what you are actually trying to buy.' },
    ],
    stats: [
      { value: '5', label: 'Consumer products' },
      { value: '1', label: 'Shared engine' },
      { value: '14', label: 'Products across Ji' },
      { value: '2', label: 'Continents' },
    ],
    stories: ['inside-omap'],
  },
  {
    slug: 'aurumglobal',
    name: 'AurumGlobal',
    sector: 'Financial Services',
    accent: 'gold',
    description:
      'Autonomous quantitative trading, market analytics, and institutional equity research.',
    productLine: 'AGQUANT · Terminal · Research · PRAMANIK',
    thesis:
      'Markets reward systems that never tire and never flinch. AurumGlobal builds financial infrastructure that runs autonomously — and extends credit visibility to the hundreds of millions the formal system has never seen.',
    overview: [
      'AurumGlobal is the financial services arm of Ji Enterprise. Its core, AGQUANT, runs a quantitative trading desk autonomously — strategy selection, execution, and risk management with no manual intervention.',
      'Around the desk sit Terminal, our market analytics surface, and Research, institutional-grade equity coverage. Together they form a vertically integrated financial stack.',
      'PRAMANIK is AurumGlobal’s most ambitious bet: the credit layer India never had. Built on the Account Aggregator framework, it begins with income verification — the missing primitive underneath every loan decision for 451 million credit-invisible adults.',
    ],
    products: [
      { name: 'AGQUANT', summary: 'An autonomous quant desk: four strategies, zero manual intervention.' },
      { name: 'Terminal', summary: 'Real-time market analytics built for how analysts actually think.' },
      { name: 'Research', summary: 'Institutional equity research, written for decisions not headlines.' },
      { name: 'PRAMANIK', summary: 'Income-verification infrastructure on India’s Account Aggregator rails.' },
    ],
    stats: [
      { value: '451', label: 'Million credit-invisible' },
      { value: '4', label: 'Autonomous strategies' },
      { value: '3', label: 'API products' },
      { value: '1', label: 'Full quarter, hands-off' },
    ],
    stories: ['pramanik-credit-layer', '451-million-zero-credit', 'autonomous-quant-desk'],
  },
  {
    slug: 'ji-school',
    name: 'Ji School',
    sector: 'Education',
    accent: 'forest',
    description: 'Institutional learning infrastructure and digital delivery built for India.',
    productLine: 'Academy · Tutoring Marketplace',
    thesis:
      'Education at India scale fails on governance long before it fails on content. Ji School builds the institutional infrastructure first — then the learning experience on top of it.',
    overview: [
      'Ji School is the education arm of Ji Enterprise, building learning infrastructure for India — where the constraint is rarely content and almost always governance, delivery, and trust.',
      'Academy is our institutional platform: curriculum, assessment, and administration designed for scale from day one. The Tutoring Marketplace connects students with vetted educators on the same governed rails.',
      'We treat education as institution-building, not app-building. The standard is the same one we hold every Ji Enterprise company to: design it today, from zero, for the long term.',
    ],
    products: [
      { name: 'Academy', summary: 'Institutional learning infrastructure — curriculum to administration.' },
      { name: 'Tutoring Marketplace', summary: 'Vetted educators and students on governed, trusted rails.' },
    ],
    stats: [
      { value: '2', label: 'Platforms' },
      { value: '1', label: 'Governance-first model' },
      { value: '14', label: 'Products across Ji' },
      { value: '4', label: 'Operating subsidiaries' },
    ],
    stories: ['education-system-worthy'],
  },
  {
    slug: 'foxmon-industries',
    name: 'FoxMon Industries',
    sector: 'Government & Advanced Research',
    accent: 'navy',
    description:
      'Long-horizon research and frontier technology, built with and for government.',
    productLine: 'Applied Research · Government Programs · Advanced Systems',
    thesis:
      'The hardest public problems are research problems first. FoxMon Industries partners with government on long-horizon research and the frontier technology it demands — built to an institutional standard, measured in decades.',
    overview: [
      'FoxMon Industries is the government and advanced-research arm of Ji Enterprise, working where public missions meet frontier technology.',
      'The work runs from applied research through advanced systems: long-horizon programs pursued with government partners, carried from first study to working capability under one roof.',
      'Research at this horizon needs patience the market rarely allows. As part of a holding company that measures progress in decades, FoxMon can commit to problems that outlast any single budget cycle.',
    ],
    products: [
      {
        name: 'Applied Research',
        summary: 'Long-horizon research programs pursued to an institutional standard.',
      },
      {
        name: 'Government Programs',
        summary: 'Partnered work with public agencies, from first study to fielded capability.',
      },
      {
        name: 'Advanced Systems',
        summary: 'Frontier technology carried from prototype to working systems.',
      },
    ],
    stats: [
      { value: '3', label: 'Capability areas' },
      { value: '10+', label: 'Year research horizon' },
      { value: '2', label: 'Continents' },
      { value: '1', label: 'Standard of craft' },
    ],
    stories: [],
  },
];

export interface Story {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  accent: Accent;
  date: string;
  featured?: boolean;
  author: string;
  content: string;
}

export const stories: Story[] = [
  {
    slug: 'pramanik-credit-layer',
    title: 'PRAMANIK: the credit layer India never had',
    excerpt:
      'Four hundred fifty-one million Indian adults participate in the economy every day with no formal credit history. PRAMANIK is building the alternative — three API products on the Account Aggregator framework, beginning with income verification.',
    category: 'India',
    accent: 'gold',
    date: 'May 28, 2026',
    featured: true,
    author: 'AurumGlobal',
    content: `Four hundred fifty-one million Indian adults participate in the economy every day with no formal credit history. They earn, they spend, they save — and to a lender, they are invisible.

PRAMANIK is building the alternative. Not a lender. Not a bank. The infrastructure underneath both.

Built on India’s Account Aggregator framework, PRAMANIK is a set of three API products that turn consented financial data into the primitives a lender actually needs. We are starting with the most fundamental one: income verification.

Income is the question every credit decision begins with, and the one hardest to answer for someone outside the formal system. Get that primitive right — fast, consented, accurate — and the rest of the stack becomes buildable.

We start with verification rather than lending on purpose. Owning the layer that everyone else depends on is a more durable position than competing for the same borrowers. The data moat compounds with every verified income.

This is what engineering-first looks like in financial services: find the missing primitive, build it to an institutional standard, and let the market form on top.`,
  },
  {
    slug: 'inside-omap',
    title: 'Inside OMap: building navigation that thinks in seconds saved',
    excerpt:
      'How the Roxan routing engine scores every route for real speed, not theoretical distance.',
    category: 'Technology',
    accent: 'clay',
    date: 'June 9, 2026',
    author: 'Oplo Cloud',
    content: `Most navigation apps optimize for distance and a coarse estimate of time. OMap optimizes for the thing you actually care about: seconds saved.

The Roxan routing engine scores every candidate route against real-world speed — how traffic actually moves on each segment, how long turns and lights really cost, how conditions shift through the day — rather than the theoretical distance on a map.

That sounds like a small reframing. It changes everything downstream. When your objective function is seconds saved, you stop treating the shortest path as the answer and start treating the fastest lived experience as the answer.

OMap is the first product in the Oplo Cloud suite, and it sets the pattern: take something everyone uses, ask what it would look like designed today from zero, and build the full stack to deliver it.`,
  },
  {
    slug: '451-million-zero-credit',
    title: '451 million people. Zero credit history. One missing layer.',
    excerpt: 'Why PRAMANIK is starting with income verification, not lending.',
    category: 'India',
    accent: 'gold',
    date: 'May 28, 2026',
    author: 'AurumGlobal',
    content: `It is tempting to enter financial services by lending. Lending is visible, it is fast, and it shows revenue early. PRAMANIK is doing the opposite.

We are starting with income verification — the layer underneath lending — because that is where the real gap is for 451 million credit-invisible adults.

A lender can only be as good as the primitives it builds on. When income cannot be verified cheaply and reliably, every downstream decision inherits that uncertainty. Fix the primitive and you improve every product built on it, including ones you will never build yourself.

Starting underneath the market, rather than inside it, is the harder path and the more defensible one. It is the same philosophy that runs through every Ji Enterprise company: own the layer, define the category, measure progress in decades.`,
  },
  {
    slug: 'autonomous-quant-desk',
    title: 'What it takes to run a quant desk autonomously',
    excerpt: 'AGQUANT’s first full quarter: four strategies, zero manual intervention.',
    category: 'Finance',
    accent: 'navy',
    date: 'May 12, 2026',
    author: 'AurumGlobal',
    content: `AGQUANT just closed its first full quarter running autonomously: four strategies, executed and risk-managed end to end, with zero manual intervention.

“Autonomous” is easy to say and hard to earn. It means the system selects strategies, sizes positions, executes, and manages risk without a human in the loop — and that the humans are comfortable letting it, because the guardrails are real.

The hard part was never the trading logic. It was building the operational discipline around it: monitoring, kill-switches, and a risk framework strict enough that hands-off is the safe default rather than the brave one.

A desk that never tires and never flinches is a structural advantage. The first quarter is proof the architecture holds. The next ones are about widening it.`,
  },
  {
    slug: 'education-system-worthy',
    title: 'Designing an education system worthy of an institution',
    excerpt: 'Ji School’s governance-first approach to learning at India scale.',
    category: 'Education',
    accent: 'forest',
    date: 'April 30, 2026',
    author: 'Ji School',
    content: `Most education technology starts with the lesson. Ji School starts with the institution.

At India scale, the binding constraint is rarely content. It is governance, delivery, and trust — the unglamorous infrastructure that decides whether good teaching ever reaches a student reliably.

So we build that first. Academy is institutional infrastructure: curriculum, assessment, and administration designed to hold up under scale before a single feature is added on top. The Tutoring Marketplace runs on the same governed rails.

Designing an education system worthy of an institution means treating learning as institution-building, not app-building. It is slower. It is also the only version that lasts.`,
  },
];

export interface Announcement {
  date: string;
  tag: string;
  accent: Accent;
  title: string;
  /** Internal link the row navigates to. */
  href: string;
}

/** Corporate announcements — newest first. Shown on the home page. */
export const announcements: Announcement[] = [
  {
    date: 'Jun 9, 2026',
    tag: 'Product',
    accent: 'clay',
    title: 'OMap enters private testing with the Roxan routing engine',
    href: '/news/inside-omap',
  },
  {
    date: 'May 28, 2026',
    tag: 'Launch',
    accent: 'gold',
    title: 'PRAMANIK announced — income-verification APIs on India’s Account Aggregator rails',
    href: '/news/pramanik-credit-layer',
  },
  {
    date: 'May 12, 2026',
    tag: 'Milestone',
    accent: 'navy',
    title: 'AGQUANT completes its first full quarter of fully autonomous trading',
    href: '/news/autonomous-quant-desk',
  },
  {
    date: 'Apr 30, 2026',
    tag: 'Careers',
    accent: 'forest',
    title: 'Founding cohort opens — five corporate roles across New York and remote',
    href: '/careers',
  },
];

export interface Leader {
  name: string;
  role: string;
  initial: string;
  bio: string;
}

export const leaders: Leader[] = [
  {
    name: 'Saswat Ji',
    role: 'Founder & Chairman',
    initial: 'S',
    bio: 'Saswat Ji founded Ji Enterprise as a different kind of holding company — one that architects every business internally rather than acquiring it. He leads from an engineering-first conviction: that owning the full stack, from backend infrastructure to the last pixel, is the only durable advantage left, and that the most important companies of the next half-century have not been started yet.',
  },
];

export const chairmanLetter = {
  quote:
    'Every business we build starts with the same question: what would this industry look like if it were designed today, from zero, with no legacy to protect?',
  body: [
    'We are not a portfolio of acquisitions. Every subsidiary at Ji Enterprise was architected internally — its technology, its design language, its market thesis. We believe ownership of the full stack, from backend infrastructure to the last pixel, is the only durable advantage left.',
    'Our horizon is measured in decades. Growth, for us, is not a quarterly target. It is the consequence of building things that deserve to exist.',
  ],
};

export const principles = [
  {
    num: '01',
    title: 'Build, don’t buy',
    text: 'Every subsidiary is architected internally — its technology, design language, and market thesis. No acquisitions, no franchises.',
  },
  {
    num: '02',
    title: 'Own the full stack',
    text: 'From routing engines to pixel grids, vertical integration is the last durable advantage. We never outsource the core.',
  },
  {
    num: '03',
    title: 'Decades, not quarters',
    text: 'Patient capital and compounding ambition. We measure progress in industries reshaped, not earnings cycles.',
  },
  {
    num: '04',
    title: 'Engineering-first',
    text: 'The founding team writes specifications before pitch decks. Technical depth precedes everything else.',
  },
  {
    num: '05',
    title: 'Two markets, one bar',
    text: 'New York and New Delhi get the same standard. Government work deserves consumer-grade craft.',
  },
  {
    num: '06',
    title: 'Earn the category',
    text: 'We only enter where we can define the standard — never to participate, always to lead.',
  },
];

export const homeStats = [
  { end: 4, suffix: '', label: 'Operating subsidiaries', note: 'Across four industry verticals' },
  { end: 14, suffix: '', label: 'Products in development', note: 'Consumer, institutional, and public' },
  { end: 451, suffix: 'M', label: 'Addressable underserved', note: 'Credit-invisible adults in India' },
  { end: 2, suffix: '', label: 'Continents', note: 'North America and South Asia' },
];

