'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <Link href="/" className="nav-logo">
        <Image src="/logo.png" alt="" width={26} height={26} className="nav-logo-img" />
        <span className="nav-wordmark">ahnpolished</span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link href="/principles" className={pathname === '/principles' ? 'active' : ''}>
            Principles
          </Link>
        </li>
      </ul>
    </nav>
  );
}
