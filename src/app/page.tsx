import type { Metadata } from 'next';
import Image from 'next/image';
import CrackDivider from '@/components/CrackDivider';

export const metadata: Metadata = {
  title: 'ahnpolished',
  description: 'We build software with the precision of someone who plans to be here in ten years.',
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-logo-wrap">
            <Image
              src="/logo.png"
              alt="ahnpolished"
              width={84}
              height={84}
              className="hero-logo-img"
              priority
            />
          </div>
          <h1 className="t-display hero-headline">
            Unpolished.<br />Still gems.
          </h1>
          <p className="hero-body">
            We build software with the precision of someone who plans to be here in ten years.
          </p>
          <a href="#build" className="cta">Learn more →</a>
        </div>
      </section>

      <CrackDivider />

      {/* What we build */}
      <section className="section" id="build" style={{ borderTop: 'none', paddingTop: '72px' }}>
        <div className="col">
          <div className="section-head" style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
            <span className="t-label">What we build</span>
            <h2 className="t-h2">Built with care.<br />Not for show.</h2>
          </div>
          <p className="t-body">
            We make things that work — quietly, correctly, without announcement.
            The quality is in what you notice after you've been using it a while.
          </p>
          <ul className="em-list">
            <li>Craft over speed. We take the time to make things right.</li>
            <li>Less surface, more structure. The work shows in what you don't see.</li>
            <li>Made for people who look closely.</li>
          </ul>
        </div>
      </section>

      {/* Principles */}
      <section className="section" id="principles">
        <div className="col">
          <span className="t-label">Principles</span>
          <article className="principle">
            <h2 className="t-h2">Rough over refined.</h2>
            <p className="t-body">
              Quality doesn't need polish to be recognizable.
              The value is in the material, not the finish.
            </p>
          </article>
          <article className="principle">
            <h2 className="t-h2">Earned, not claimed.</h2>
            <p className="t-body">
              We don't say we build quality software. We build it.
              The work speaks for itself.
            </p>
          </article>
          <article className="principle">
            <h2 className="t-h2">Slow on purpose.</h2>
            <p className="t-body">
              Fast and wrong is worse than slow and right.
              We take the time quality requires.
            </p>
          </article>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="col">
          <span className="t-label">About</span>
          <h2 className="t-h1" style={{ margin: '20px 0 24px' }}>
            Small. Intentional.<br />Building in the open.
          </h2>
          <p className="t-body">
            We're early and we know it. One team, a handful of ideas, and
            a standard we refuse to lower. ahnpolished is what happens when
            you care more about the thing than the timeline.
            We build at the pace the work demands.
          </p>
        </div>
      </section>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 140px 48px 100px;
        }
        .hero-inner {
          animation: heroReveal 760ms ease both;
        }
        @keyframes heroReveal {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .hero-logo-wrap { margin-bottom: 64px; }
        .hero-logo-img {
          object-fit: contain;
          filter: invert(1) brightness(0.85);
        }
        .hero-headline { margin-bottom: 28px; }
        .hero-body {
          font-size: 16px;
          color: var(--stone);
          line-height: 1.7;
          max-width: 400px;
          margin: 0 auto 44px;
        }
        .section-head {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 40px;
        }
        .em-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 32px;
        }
        .em-list li {
          display: flex;
          gap: 18px;
          align-items: baseline;
          font-size: 15px;
          color: var(--stone);
          line-height: 1.65;
        }
        .em-list li::before {
          content: '—';
          color: var(--amber);
          flex-shrink: 0;
        }
        .principle {
          padding: 40px 0;
          border-bottom: 1px solid var(--border);
        }
        .principle:first-of-type {
          border-top: 1px solid var(--border);
          margin-top: 32px;
        }
        .principle h2 { margin-bottom: 14px; }
      `}</style>
    </>
  );
}
