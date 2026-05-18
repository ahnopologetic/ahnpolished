# Architecture Decision Record — ahnpolished

**Status**: Accepted  
**Date**: May 2026

## Context

A public-facing landing site for ahnpolished. Five pages: Home, About, Principles, Privacy, Terms.  
Requirements: fast, accessible, SEO-ready, cheap to host, low ongoing maintenance.

## Decisions

### Framework: Next.js 16 (App Router)

**Chosen over**: Astro, plain HTML/CSS

Static site generation with zero client-side JS where possible. App Router gives clean file-system routing. TypeScript out of the box. Vercel deploy is trivial.

Astro was a close second — lighter by default, excellent for content sites. Next.js wins on ecosystem familiarity and the option to add server-side features later without re-platforming.

Plain HTML rejected: no build pipeline, no TypeScript, future extensibility zero.

### Styling: CSS Variables + Tailwind

Design tokens live in `src/app/globals.css` as CSS custom properties. This matches the design system exactly — the five brand colors, two font families, spacing scale.

Tailwind used for layout utilities only. Custom CSS handles the typographic system and component-level styles that Tailwind can't express cleanly.

### Hosting: Vercel

Zero-config for Next.js. Free tier handles the traffic this site will see. Preview deploys on PRs. Automatic HTTPS. Branch-based deployments.

### Analytics: Plausible (deferred)

Privacy-respecting, no cookie banner needed, GDPR-compliant. Will be wired in after launch. Script is lightweight.

### Fonts: Google Fonts

Cormorant Garamond (display) + DM Sans (body). Loaded via `next/font/google` for performance and privacy — fonts are self-hosted at build time, no client request to Google.

### Domain strategy

`ahnpolished.com` — owned, DNS to be configured on Vercel. www redirects to apex.

## File structure

```
src/
  app/
    layout.tsx          — root layout: fonts, nav, footer, grain overlay
    globals.css         — design tokens, reset, shared styles
    page.tsx            — Home
    about/page.tsx      — About Us
    principles/page.tsx — Principles
    privacy/page.tsx    — Privacy Policy
    terms/page.tsx      — Terms & Conditions
  components/
    Nav.tsx             — fixed top nav, transparent → dark on scroll
    Footer.tsx          — minimal footer with legal links
    CrackDivider.tsx    — organic SVG crack line (one per page)
```
