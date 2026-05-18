import type { Metadata } from 'next';
import CrackDivider from '@/components/CrackDivider';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'We collect very little. We use it for nothing else.',
};

export default function Privacy() {
  return (
    <>
      <header className="page-header">
        <div className="col">
          <span className="t-label">Privacy</span>
          <h1 className="t-h1" style={{ marginTop: '22px' }}>
            We collect very little.<br />We use it for nothing else.
          </h1>
        </div>
      </header>

      <CrackDivider />

      <section className="section">
        <div className="col">
          <div className="prose">
            <p>
              Last updated: May 2026. This is a plain-language privacy policy.
              If something is unclear, contact us and we'll clarify it.
            </p>

            <h2>What we collect</h2>
            <p>
              When you visit this site, our hosting provider may log standard
              server data — IP addresses, browser type, pages visited, timestamps.
              We use this only to understand how the site is used. We don't
              use it to identify you.
            </p>
            <p>
              If you contact us directly (by email or any contact form), we receive
              your message and any information you include in it. We use this
              only to respond to you.
            </p>

            <h2>What we don't do</h2>
            <ul>
              <li>Sell your data to anyone.</li>
              <li>Share it with third parties for advertising.</li>
              <li>Build a profile on you.</li>
              <li>Use tracking pixels or behavioral ad networks.</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              This site uses no cookies for tracking or advertising. If we use
              any cookies, they're strictly functional — keeping a session alive,
              remembering a preference you set — nothing more.
            </p>

            <h2>Third-party services</h2>
            <p>
              We use Google Fonts (served via next/font, self-hosted at build time)
              so your browser makes no request to Google's servers when loading this site.
              If we add any analytics, we'll update this policy first.
            </p>

            <h2>Your data, your rights</h2>
            <p>
              If you've contacted us and want to know what information we have,
              or want us to delete it, email us and we'll handle it.
              We hold no data you didn't give us directly.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              If we ever collect more data than this — for a product, a service,
              anything — we'll update this page before we do it, not after.
              The updated date at the top tells you when it last changed.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about privacy:{' '}
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
