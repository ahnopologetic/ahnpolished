import type { Metadata } from 'next';
import CrackDivider from '@/components/CrackDivider';

export const metadata: Metadata = {
  title: 'Principles',
  description: 'The standards we hold — for everything we make.',
};

export default function Principles() {
  return (
    <>
      <header className="page-header">
        <div className="col">
          <span className="t-label">Principles</span>
          <h1 className="t-h1" style={{ marginTop: '22px' }}>
            The standards we hold.<br />For everything we make.
          </h1>
        </div>
      </header>

      <CrackDivider />

      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="col">
          <p className="t-body">
            These apply to projects, deliverables, and everything we ship —
            not as aspirations, but as standards. They're not negotiable on deadline,
            not softened because something is "just a prototype."
            If we made it, these apply.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '16px', borderTop: 'none' }}>
        <div className="col">
          <div className="principle-block">
            <span className="principle-num">01</span>
            <h2>Unpolished, still gems.</h2>
            <p>
              Our work is an unpolished jewel. We're early — no traction, no veneer,
              no permission to pretend otherwise. That shows, and that's fine.
              What isn't negotiable is what's underneath: the quality of what we
              build is a must, not a goal.
            </p>
            <p>
              An unpolished gem is still a gem. A polished piece of glass is still glass.
              We know which one we are.
            </p>
          </div>

          <div className="principle-block">
            <span className="principle-num">02</span>
            <h2>It can be ugly. It must do the work.</h2>
            <p>
              Robustness over aesthetics. A feature that works reliably — that handles
              edge cases, holds under load, does exactly what it says — is worth more
              than one that looks perfect and fails quietly.
            </p>
            <p>
              We fix ugly. We can't always fix broken. Ugly and correct beats
              beautiful and wrong every time.
            </p>
          </div>

          <div className="principle-block">
            <span className="principle-num">03</span>
            <h2>Detail is for the people who look.</h2>
            <p>
              Most people won't notice. That's fine. We don't put detail in for show —
              we put it in because the person who does notice is the person we're
              building for.
            </p>
            <p>
              Detail is a signal. It says: someone cared enough to put it there.
              It's only visible to the people whose attention it deserves.
              Those are our people.
            </p>
          </div>

          <div className="principle-block">
            <span className="principle-num">04</span>
            <h2>Scope is a decision, not a default.</h2>
            <p>
              Every feature we don't build is a feature that can't break, can't confuse,
              and can't slow us down. We choose what's in deliberately.
              We choose what's out with the same care.
            </p>
            <p>
              The product gets smaller before it gets bigger. That's not a constraint —
              that's the principle.
            </p>
          </div>

          <div className="principle-block">
            <span className="principle-num">05</span>
            <h2>Build for whoever is still using it in three years.</h2>
            <p>
              The launch is a moment. The software lives for years after. We don't
              optimize for the demo. We optimize for the version that's been running
              for three years and still works exactly as it should.
            </p>
            <p>
              If we wouldn't want to maintain it, we shouldn't ship it.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .principle-block {
          padding: 52px 0;
          border-bottom: 1px solid var(--border);
        }
        .principle-block:last-child { border-bottom: none; }
        .principle-num {
          font-family: var(--f-display);
          font-size: 13px;
          color: var(--amber);
          letter-spacing: 0.06em;
          opacity: 0.7;
          margin-bottom: 16px;
          display: block;
        }
        .principle-block h2 {
          font-family: var(--f-display);
          font-size: 32px;
          line-height: 1.15;
          font-weight: var(--display-weight);
          color: var(--surface);
          margin-bottom: 20px;
        }
        .principle-block p {
          font-size: 16px;
          color: var(--stone);
          line-height: 1.75;
          max-width: 52ch;
        }
        .principle-block p + p { margin-top: 16px; }
      `}</style>
    </>
  );
}
