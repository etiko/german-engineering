# German Engineering website

Customer-facing website for German Engineering Car Specialists Ltd.

## Runtime

- Node.js 22
- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4

Use the Node version declared in `.nvmrc`.

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
