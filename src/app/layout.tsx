import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ahnpolished',
    template: '%s — ahnpolished',
  },
  description: 'We build software with the precision of someone who plans to be here in ten years.',
  metadataBase: new URL('https://ahnpolished.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    siteName: 'ahnpolished',
    title: 'ahnpolished',
    description: 'We build software with the precision of someone who plans to be here in ten years.',
    url: 'https://ahnpolished.com',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'ahnpolished' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ahnpolished',
    description: 'We build software with the precision of someone who plans to be here in ten years.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
