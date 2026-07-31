# Web security baseline

## Active response headers

All routes receive:

- HTTP Strict Transport Security.
- `X-Content-Type-Options: nosniff`.
- `X-Frame-Options: DENY`.
- `Referrer-Policy: strict-origin-when-cross-origin`.
- A restrictive permissions policy for camera, microphone and geolocation.
- `Cross-Origin-Opener-Policy: same-origin`.

## Content Security Policy

The initial policy is delivered through
`Content-Security-Policy-Report-Only`. It limits resources to the application
origin and the two approved vehicle-image hosts, blocks plugins and framing,
and upgrades insecure resource requests.

Report-only mode avoids blocking a production page while the final host is
observed. Before changing the header to an enforced
`Content-Security-Policy`:

1. Review browser-console CSP reports across the main pages and forms.
2. Add only the minimum sources required by approved integrations.
3. Confirm optional analytics, finance, chat and map sources remain gated by
   cookie consent.
4. Replace inline-script allowances with nonce-based handling when the
   framework and hosting approach support it.
5. Re-run route, image, form and accessibility checks under the enforced
   policy.

No report collector is configured, so the report-only policy does not transmit
visitor information to a third party.
