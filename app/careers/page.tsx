import React from 'react';
import type { Metadata } from 'next';
import Chevron from '@/components/Chevron';
import Accordion from '@/components/Accordion';
import PrinciplesCarousel from '@/components/PrinciplesCarousel';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Ji Enterprise. Founding roles across technology, financial services, education, and government research — New York to New Delhi.',
};

const CAREERS_EMAIL = 'careers@jienterprise.org';
const mailto = (subject?: string) =>
  subject ? `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}` : `mailto:${CAREERS_EMAIL}`;

const beliefs = [
  {
    title: 'Ownership is the offer.',
    text: 'You won’t inherit a backlog. You’ll own a surface — an entire app, engine, or market — and the decisions that come with it.',
  },
  {
    title: 'Craft is non-negotiable.',
    text: 'Government research, fintech APIs, consumer apps — everything ships at the same bar. We sweat the last pixel because users can feel it.',
  },
  {
    title: 'Speed is a culture.',
    text: 'Specifications over meetings. Prototypes over decks. The gap between idea and working software here is measured in days.',
  },
];

const roleTint: Record<string, { color: string; bg: string }> = {
  clay: { color: 'var(--clay)', bg: 'rgba(204,120,92,.1)' },
  gold: { color: 'var(--gold)', bg: 'rgba(168,133,46,.1)' },
  navy: { color: 'var(--navy)', bg: 'rgba(44,74,110,.08)' },
  forest: { color: 'var(--forest)', bg: 'rgba(61,107,79,.1)' },
};

const roles = [
  {
    title: 'Chief of Staff',
    org: 'Office of the Founder',
    detail: 'Strategy, prioritization, and execution across all four verticals',
    loc: 'New York · Hybrid',
    accent: 'clay',
  },
  {
    title: 'Founding Generalist — Operations',
    org: 'Corporate',
    detail: 'Entity setup, vendor management, and whatever the portfolio needs this week',
    loc: 'Remote · US',
    accent: 'clay',
  },
  {
    title: 'Finance & Portfolio Analyst',
    org: 'Corporate',
    detail: 'Capital allocation models, subsidiary reporting, and investor materials',
    loc: 'Remote · Part-time',
    accent: 'gold',
  },
  {
    title: 'Brand & Communications Designer',
    org: 'Corporate',
    detail: 'One design language across five companies — web, decks, research, and identity',
    loc: 'Remote',
    accent: 'navy',
  },
  {
    title: 'Corporate Counsel — Advisory',
    org: 'Corporate',
    detail: 'Entity structure, IP strategy, and cross-border (US–India) groundwork',
    loc: 'Remote · Fractional',
    accent: 'forest',
  },
];

const support = [
  {
    title: 'Equity, in writing',
    items: [
      'Documented ownership in Ji Enterprise from day one',
      'Signed before your first contribution — never a handshake',
      'Founding-level stakes, not employee basis points',
      'Yours whether or not an exit ever happens',
      'If we IPO or sell, you are already on the cap table',
    ],
  },
  {
    title: 'Honest about cash',
    items: [
      'No salaries through the 2026–2028 founding period',
      'Project stipends paid when revenue allows',
      'Profit-sharing as portfolio companies begin earning',
      'Salaries begin the moment funding or revenue supports them',
      'Founding collaborators get first claim on every paid role',
    ],
  },
  {
    title: 'Built to fit your life',
    items: [
      'Part-time by design — keep your job, school, or studies',
      'Async-first; output is the only timezone',
      'A named, public body of work you own forever',
      'Direct line to the founder, decisions in hours',
      'Walk away anytime — vested equity stays yours',
    ],
  },
];

const steps = [
  { num: '01', title: 'Show us the work', text: 'Skip the cover letter. Send something you built and two paragraphs on why it’s good.' },
  { num: '02', title: 'Conversation', text: '45 minutes with the founder. Half about your work, half about ours. Real questions, both directions.' },
  { num: '03', title: 'Paid project', text: 'A scoped, compensated week-long build inside the actual codebase. You see us; we see you.' },
  { num: '04', title: 'Decision in days', text: 'We answer within five days of the project, with real feedback either way. No ghosting, ever.' },
];

const hireFaq = [
  {
    q: 'What we look for',
    a: 'Slope over pedigree. We care about the rate at which you get better and the quality of what you’ve already made — repos, apps, research memos, essays. Credentials are welcome but never required. The strongest application we can receive is a link to something real.',
  },
  {
    q: 'The interview process',
    a: 'One conversation with the founder, then a scoped, paid project inside the actual codebase or research area — typically a week, on your schedule. We decide within five days of the project and give substantive feedback either way. No trivia rounds, no whiteboard hazing.',
  },
  {
    q: 'Accommodations',
    a: 'If any part of the process needs adjusting — timing, format, tools, communication — say so in your first email and we’ll adapt. There is no penalty, ever, for asking.',
  },
];

const getItems = [
  { title: 'Holding-level equity', text: 'Ownership in Ji Enterprise itself — exposure to every company in the portfolio, not just one bet.' },
  { title: 'Portfolio-wide vantage', text: 'You see every business at once — the rarest seat in any company, usually reserved for partners.' },
  { title: 'Remote-first, async-first', text: 'Work from anywhere between New York and New Delhi. Output is the only timezone.' },
  { title: 'Hardware that keeps up', text: 'Current-generation Mac setup, plus the API budgets and tooling the work demands.' },
  { title: 'A public body of work', text: 'Ship things you can point to forever — apps, engines, and research with your fingerprints on them.' },
  { title: 'Direct line to the founder', text: 'No middle layers. Decisions happen in conversations, not committees.' },
];

const faq = [
  {
    q: 'Do you offer internships or fellowships?',
    a: 'Yes — project-based fellowships are the most natural fit for where we are. If you’re a student who builds, you’ll feel at home here; the founder is one too.',
  },
  {
    q: 'Will I get feedback if I’m not selected?',
    a: 'Always. Anyone who completes a paid project receives specific, written feedback within five days. We were on the other side of silence once; we don’t do it to others.',
  },
  {
    q: 'Can I re-apply later?',
    a: 'Yes, any time you’ve shipped something new. The best re-applications open with “since we last spoke, I built…”',
  },
  {
    q: 'What’s your remote policy?',
    a: 'Remote-first and async-first across US and India time zones. New York roles gather in person occasionally; everything else runs on written communication and shipped work.',
  },
  {
    q: 'Do you sponsor visas?',
    a: 'Not yet — we’re too early to sponsor. Roles are open to those already authorized to work in their location, and our remote-first structure means location rarely blocks the right person.',
  },
  {
    q: 'How fast do offers move?',
    a: 'Decision within five days of your project; offers stay open for two weeks. If another opportunity has a clock on it, tell us — we’d rather accelerate than lose you to a deadline.',
  },
];

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <p className="eyebrow rv">Careers at Ji Enterprise</p>
        <h1 className="rv" style={{ transitionDelay: '.1s' }}>
          Do the best work of your life, <em>before anyone expects it of you.</em>
        </h1>
        <p className="sub rv" style={{ transitionDelay: '.2s' }}>
          These are roles at the holding company itself — the small corporate team that steers Ji
          Enterprise across all four industries. One desk, every frontier.
        </p>
        <div
          className="rv"
          style={{ transitionDelay: '.3s', display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}
        >
          <a className="pill" href="#roles">
            See open roles
          </a>
          <a className="alink" href="#how">
            How we hire <Chevron />
          </a>
        </div>
        <p className="rv" style={{ transitionDelay: '.38s', marginTop: 28, fontSize: 15, color: 'var(--slate)' }}>
          Skip the form entirely — write to{' '}
          <a
            href={mailto()}
            style={{ color: 'var(--clay)', fontWeight: 600, textDecoration: 'none', borderBottom: '1.5px solid var(--clay)', paddingBottom: 1 }}
          >
            {CAREERS_EMAIL}
          </a>
        </p>
      </section>

      {/* BELIEFS */}
      <section className="belief">
        <div className="belief-grid">
          {beliefs.map((b, i) => (
            <div key={b.title} className="belief-item rv" style={{ transitionDelay: `${i * 0.08}s` }}>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRINCIPLES — 01/07 carousel */}
      <PrinciplesCarousel />

      {/* ROLES */}
      <section className="roles-sec" id="roles">
        <div className="rv">
          <p className="eyebrow" style={{ marginBottom: 14 }}>
            Open roles — Ji Enterprise corporate
          </p>
          <h2 className="sec-head">The holding company team.</h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--slate)', maxWidth: 560, marginTop: 18 }}>
            Subsidiaries hire their own builders. This team is different: it runs the company of
            companies — strategy, capital, brand, and governance across the whole portfolio.
          </p>
          <p style={{ fontSize: 15, marginTop: 20, color: 'var(--slate)' }}>
            Apply to any role:{' '}
            <a
              href={mailto()}
              style={{ color: 'var(--clay)', fontWeight: 600, textDecoration: 'none', borderBottom: '1.5px solid var(--clay)', paddingBottom: 1 }}
            >
              {CAREERS_EMAIL}
            </a>
          </p>
        </div>

        <div>
          {roles.map((r) => {
            const tint = roleTint[r.accent];
            return (
              <a key={r.title} className="role rv" href={mailto(r.title)}>
                <div>
                  <p className="rt">{r.title}</p>
                  <p className="rm">
                    <b>{r.org}</b> · {r.detail}
                  </p>
                </div>
                <div className="right">
                  <span className="rtag" style={{ color: tint.color, background: tint.bg }}>
                    {r.loc}
                  </span>
                  <span style={{ color: 'var(--faint)', display: 'inline-flex' }}>
                    <Chevron />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <p className="rv" style={{ marginTop: 40, fontSize: 14.5, color: 'var(--faint)', lineHeight: 1.65, maxWidth: 640 }}>
          Looking to build inside a portfolio company — Oplo Cloud, AurumGlobal, Ji School, or
          FoxMon Industries? Each company hires independently and posts roles on its own site as
          teams form. For
          everything else: we hire for slope over pedigree — send what you’ve built to{' '}
          <a href={mailto()} style={{ color: 'var(--clay)' }}>
            {CAREERS_EMAIL}
          </a>
          .
        </p>
      </section>

      {/* HOW WE SUPPORT YOU */}
      <section className="support">
        <div className="inner">
          <div className="rv">
            <p className="eyebrow" style={{ marginBottom: 14 }}>
              The founding-period deal · 2026–2028
            </p>
            <h2 className="sec-head">
              Equity now.
              <br />
              Salary when we’ve earned it.
            </h2>
            <p className="sup-intro">
              Read this carefully, because it is not a standard offer. Through 2028, Ji Enterprise is
              bootstrapped — there are no salaries yet. Founding collaborators are compensated in
              documented ownership, with stipends paid when revenue allows. You are working for the
              upside, and the upside is real and in writing.
            </p>
          </div>
          <div className="sup-grid">
            {support.map((card, i) => (
              <div key={card.title} className="sup-card rv" style={{ transitionDelay: `${i * 0.07}s` }}>
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="rv" style={{ marginTop: 36, fontSize: 14.5, lineHeight: 1.7, color: 'var(--faint)', maxWidth: 680 }}>
            Two things we will never do: promise a salary we cannot pay, or take your work without
            papering your ownership first. The equity agreement is signed before the first commit —
            that is the whole deal, and it is the honest one.
          </p>
        </div>
      </section>

      {/* HOW WE HIRE */}
      <section className="hire" id="how">
        <div className="hire-grid">
          <div className="rv">
            <p className="eyebrow" style={{ color: 'var(--clay)', marginBottom: 14 }}>
              How we hire
            </p>
            <h2 className="sec-head">Four steps. No riddles.</h2>
          </div>
          <div className="hire-steps">
            {steps.map((s, i) => (
              <div key={s.num} className="step rv" style={{ transitionDelay: `${i * 0.07}s` }}>
                <p className="num">{s.num}</p>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>

          <div className="rv" style={{ marginTop: 64 }}>
            <Accordion items={hireFaq} dark />
          </div>

          <div className="ai-policy rv">
            <div>
              <h3>Our policy on using AI when you apply</h3>
              <p>
                Use it. We build with AI daily and expect you to. Use Claude or any tool to sharpen
                your application — then be ready to show us the judgment underneath: what you kept,
                what you rejected, and why. The tool is allowed; the thinking must be yours.
              </p>
            </div>
            <a className="alink clay" href={mailto()} style={{ flexShrink: 0 }}>
              Apply with it <Chevron />
            </a>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="get">
        <h2 className="sec-head rv" style={{ fontSize: 40, marginBottom: 56 }}>
          What you get.
        </h2>
        <div className="get-grid">
          {getItems.map((g, i) => (
            <div key={g.title} className="get-item rv" style={{ transitionDelay: `${(i % 3) * 0.06}s` }}>
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="rv">
          <p className="eyebrow" style={{ marginBottom: 14 }}>
            Questions
          </p>
          <h2 className="sec-head" style={{ marginBottom: 56 }}>
            Frequently asked.
          </h2>
        </div>
        <div className="rv">
          <Accordion items={faq} />
        </div>
      </section>

      {/* HONEST BAND */}
      <section className="honest">
        <div className="rv" style={{ maxWidth: 760, margin: '0 auto' }}>
          <p className="eyebrow">Read this before applying</p>
          <h2>
            We are early. Genuinely early. That is either <em>the problem or the point.</em>
          </h2>
          <p>
            Ji Enterprise is a founder-led, pre-funding company. The roles here are for people who
            want to build institutions from the first brick — and who understand exactly what that
            trade entails. If you need certainty, wait for our Series A. If you want authorship, write
            to us today.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing">
        <div className="glow" />
        <div className="rv">
          <h2>
            The best résumé is <em>the thing you built.</em>
          </h2>
          <p className="loc" style={{ marginBottom: 38 }}>
            Send it to us.
          </p>
          <a className="pill dark" href={mailto()} style={{ position: 'relative' }}>
            {CAREERS_EMAIL}
          </a>
        </div>
      </section>
    </>
  );
}
