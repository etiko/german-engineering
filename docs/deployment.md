# Deployment setup

## GitHub

The CI workflow runs for pull requests and pushes to `main`:

1. Install dependencies with `npm ci`.
2. Run ESLint.
3. Run TypeScript without emitting files.
4. Build the production application.
5. Audit production dependencies at critical severity.

Enable branch protection after the first successful workflow:

- Require a pull request before merging.
- Require the `Web quality checks` status check.
- Require branches to be up to date before merging.
- Block force pushes and branch deletion.

Enable the dependency graph, Dependabot alerts and Dependabot security updates
in the repository security settings. Version-update pull requests are defined
in `.github/dependabot.yml`.

## Vercel

Create a Vercel project from `etiko/german-engineering` with:

| Setting | Value |
|---|---|
| Root directory | `web` |
| Framework | Next.js |
| Node.js | 22 |
| Install command | `npm ci` |
| Build command | `npm run build` |

Set `SITE_URL` to the final public origin in the production environment. Vercel
preview deployments can use the system-provided deployment URL.

## Health monitoring

Monitor `GET /api/health`. A healthy response is:

```json
{
  "status": "ok",
  "service": "german-engineering-web"
}
```

The response is intentionally marked `no-store`.

## Rollback

If a production deployment fails:

1. Promote the last known-good Vercel deployment from the project deployment
   history.
2. Confirm `/api/health`, the homepage, inventory and a vehicle-detail route.
3. Confirm telephone and email conversion links still use the approved business
   details.
4. Record the failed deployment, cause and follow-up action before attempting a
   replacement release.

Do not change DNS for an application-only rollback. DNS rollback is reserved
for launch migration failures and must use the previous production origin
recorded in the launch runbook.

## Required follow-up

- Connect the production domain only after redirect and SEO migration review.
- Configure error monitoring after the monitoring provider account is selected.
- Add deployment alerts to the agreed operational channel.
- Verify the production health endpoint and critical lead routes after every
  deployment.
