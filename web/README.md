# German Engineering website

Customer-facing website for German Engineering Car Specialists Ltd.

## Runtime

- Node.js 22
- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4

Use the Node version declared in `.nvmrc`.

Copy `.env.example` to `.env.local` for local configuration. Development
defaults to `http://localhost:3000`; production builds require `SITE_URL` or a
Vercel-provided deployment URL.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

Open `http://localhost:3000`.

## Architecture

- Server components are the default.
- Interactive client boundaries should remain small and feature-specific.
- Vehicle access goes through `src/features/vehicles/data`.
- External stock, finance and CRM providers will be isolated behind server-only adapters.
- Public components receive minimal typed DTOs rather than raw provider responses.
- Inventory filters are represented in the URL.

The current vehicle data is a temporary fixture derived from publicly visible stock. It exists to validate the UI and will be replaced by the approved stock feed.

## Documentation

Project discovery and planning documents are stored in the repository root.

## CI and deployment

- GitHub Actions runs install, lint, type-check, production build and a
  critical-level production dependency audit.
- Dependabot checks npm packages weekly and GitHub Actions monthly.
- Configure the Vercel project root directory as `web`.
- Use Node.js 22 and set `SITE_URL` for the production environment.
- The uptime endpoint is available at `/api/health`.
