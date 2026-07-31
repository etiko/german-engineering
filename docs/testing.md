# Automated testing

The web application uses:

- Vitest for pure unit tests.
- React Testing Library for client-component and form coverage.
- Playwright with Chromium for production-style route and journey checks.
- axe-core through Playwright for representative WCAG A and AA checks.

## Commands

Run from `web/` with Node 22:

```bash
npm run test:unit
npm run test:unit:watch
npm run test:e2e
```

Install the browser once on a development machine:

```bash
npx playwright install chromium
```

## Current regression coverage

- Ten-per-page inventory pagination, result ranges and out-of-range clamping.
- Required general-contact and workshop fields.
- Cookie accept/reject/manage controls and saved preference changes.
- Primary sales, service, ownership and legal routes.
- Representative legacy content and active-stock redirects.
- Baseline response security headers.
- Automated accessibility checks for the homepage, inventory, contact,
  services and privacy templates.

Async Server Components are exercised through Playwright rather than rendered
directly in Vitest, following the bundled Next.js testing guidance.
