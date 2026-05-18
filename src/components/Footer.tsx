import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <span className="footer-left">ahnpolished</span>
      <nav className="footer-right">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </nav>
    </footer>
  );
}
