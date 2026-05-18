import type { Metadata } from 'next';
import CrackDivider from '@/components/CrackDivider';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'What this site is. What it isn\'t.',
};

export default function Terms() {
  return (
    <>
      <header className="page-header">
        <div className="col">
          <span className="t-label">Terms</span>
          <h1 className="t-h1" style={{ marginTop: '22px' }}>
            What this site is.<br />What it isn't.
          </h1>
        </div>
      </header>

      <CrackDivider />

      <section className="section">
        <div className="col">
          <div className="prose">
            <p>
              Last updated: May 2026. These are the terms for using this website.
              Plain language. If you have questions, contact us.
            </p>

            <h2>What this site is</h2>
            <p>
              ahnpolished.com is an informational website for ahnpolished, a software
              company in development. It describes who we are, what we're building,
              and what we believe. It does not currently offer any products, services,
              or transactions.
            </p>

            <h2>Using this site</h2>
            <p>You may read and share this site freely. You may not:</p>
            <ul>
              <li>Scrape or reproduce content for commercial purposes without permission.</li>
              <li>Use the site in any way that could damage or interfere with it.</li>
              <li>Misrepresent our content or attribute things to us we didn't say.</li>
            </ul>

            <h2>Our content</h2>
            <p>
              The words, design, and logo on this site belong to ahnpolished.
              The logo — the cracked cube — is ours. Don't use it without asking.
              Everything else on the site you can quote or reference with attribution.
            </p>

            <h2>No warranties</h2>
            <p>
              This site is provided as-is. We try to keep it accurate and available,
              but we make no guarantees. We're a small team building something real —
              things will occasionally be wrong, slow, or unavailable.
              We'll fix them when we can.
            </p>

            <h2>Links to other sites</h2>
            <p>
              If we link to an external site, we don't control it and aren't
              responsible for it. A link isn't an endorsement.
            </p>

            <h2>Changes</h2>
            <p>
              As we build and ship actual products, these terms will expand to cover
              those services. We'll update the date at the top when that happens.
              Using the site after an update means you've accepted the new terms.
              If you disagree with a change, stop using the site and tell us why —
              we're open to that conversation.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms:{' '}
              <a
                href="mailto:hello@ahnpolished.com"
                style={{
                  color: 'var(--surface)',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(140,98,48,0.4)',
                  paddingBottom: '1px',
                }}
              >
                hello@ahnpolished.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
