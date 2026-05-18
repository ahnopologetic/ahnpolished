import type { Metadata } from 'next';
import CrackDivider from '@/components/CrackDivider';

export const metadata: Metadata = {
  title: 'About',
  description: 'We started ahnpolished because we kept running into the same problem.',
};

export default function About() {
  return (
    <>
      <header className="page-header">
        <div className="col">
          <span className="t-label">About</span>
          <h1 className="t-h1" style={{ marginTop: '22px' }}>
            We build things<br />we'd want to use ourselves.
          </h1>
        </div>
      </header>

      <CrackDivider />

      <section className="section">
        <div className="col">
          <p className="t-body" style={{ marginBottom: '24px' }}>
            We started ahnpolished because we kept running into the same problem.
            Most software either looks polished and breaks easily, or works fine
            and looks like nobody cared. We think there's a third option.
            We're building it.
          </p>
          <p className="t-body" style={{ marginBottom: '24px' }}>
            We're early. No traction yet, no big launches, no case studies to show.
            What we have is a standard we're not willing to lower, and the patience
            to build things correctly the first time.
          </p>
          <p className="t-body">
            The origin story, the team page, the names — it's all coming.
            We'd rather let the work speak first.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="col">
          <span className="t-label" style={{ marginBottom: '20px' }}>What drives us</span>
          <h2 className="t-h2" style={{ marginBottom: '24px', marginTop: '20px' }}>
            Quality as a non-negotiable.
          </h2>
          <p className="t-body" style={{ marginBottom: '24px' }}>
            Not "quality" in the sales-deck sense. Quality that you notice after
            six months of use. Quality that shows up in the edge cases. Quality
            that makes someone who knows their craft stop and think: someone put
            thought into this.
          </p>
          <p className="t-body">
            We're building the kind of software that rewards the people who look closely.
            If you're one of those people, this is for you.
          </p>
        </div>
      </section>
    </>
  );
}
