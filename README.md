# ahnpolished

Organization-wide landing page. Five pages: Home, About, Principles, Privacy, Terms.

## Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: CSS variables + Tailwind utilities
- **Hosting**: Vercel
- **Fonts**: Cormorant Garamond + DM Sans (self-hosted via next/font)

## Development

```bash
npm install
npm run dev      # localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Deploy

Automatic via Vercel. Every push to `main` deploys to production. PRs get preview deploys.

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for tech stack decisions.
