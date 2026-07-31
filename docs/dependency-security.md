# Dependency security

## Automated controls

- Dependabot checks npm dependencies weekly and GitHub Actions monthly.
- CI runs `npm audit --omit=dev --audit-level=critical`.
- Dependency updates must pass linting, type-checking and a production build.

## Current upstream advisories

The current Next.js dependency tree reports high-severity advisories in bundled
PostCSS and Sharp packages. npm's automated forced fix proposes an incompatible
downgrade to Next.js 9.3.3, so it must not be applied.

Until a compatible Next.js release resolves the transitive packages:

1. Keep Next.js on the latest compatible stable release.
2. Review Dependabot security alerts as they arrive.
3. Escalate any critical advisory immediately.
4. Re-run the production audit after every dependency update.
